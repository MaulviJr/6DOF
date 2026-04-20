(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var oh={exports:{}},Po={};var Ug;function US(){if(Ug)return Po;Ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Lg;function LS(){return Lg||(Lg=1,oh.exports=US()),oh.exports}var Nr=LS(),lh={exports:{}},se={};var Ng;function NS(){if(Ng)return se;Ng=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(O,q,gt){this.props=O,this.context=q,this.refs=M,this.updater=gt||T}x.prototype.isReactComponent={},x.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function P(O,q,gt){this.props=O,this.context=q,this.refs=M,this.updater=gt||T}var L=P.prototype=new D;L.constructor=P,C(L,x.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function w(O,q,gt){var At=gt.ref;return{$$typeof:o,type:O,key:q,ref:At!==void 0?At:null,props:gt}}function pt(O,q){return w(O.type,q,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function tt(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return q[gt]})}var at=/\/+/g;function lt(O,q){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):q.toString(36)}function $(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(q){O.status==="pending"&&(O.status="fulfilled",O.value=q)},function(q){O.status==="pending"&&(O.status="rejected",O.reason=q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,q,gt,At,Ft){var nt=typeof O;(nt==="undefined"||nt==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(nt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case t:vt=!0;break;case v:return vt=O._init,N(vt(O._payload),q,gt,At,Ft)}}if(vt)return Ft=Ft(O),vt=At===""?"."+lt(O,0):At,H(Ft)?(gt="",vt!=null&&(gt=vt.replace(at,"$&/")+"/"),N(Ft,q,gt,"",function(Zt){return Zt})):Ft!=null&&(G(Ft)&&(Ft=pt(Ft,gt+(Ft.key==null||O&&O.key===Ft.key?"":(""+Ft.key).replace(at,"$&/")+"/")+vt)),q.push(Ft)),1;vt=0;var Tt=At===""?".":At+":";if(H(O))for(var Vt=0;Vt<O.length;Vt++)At=O[Vt],nt=Tt+lt(At,Vt),vt+=N(At,q,gt,nt,Ft);else if(Vt=y(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(At=O.next()).done;)At=At.value,nt=Tt+lt(At,Vt++),vt+=N(At,q,gt,nt,Ft);else if(nt==="object"){if(typeof O.then=="function")return N($(O),q,gt,At,Ft);throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(O,q,gt){if(O==null)return O;var At=[],Ft=0;return N(O,At,"","",function(nt){return q.call(gt,nt,Ft++)}),At}function ot(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var ht=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:F,forEach:function(O,q,gt){F(O,function(){q.apply(this,arguments)},gt)},count:function(O){var q=0;return F(O,function(){q++}),q},toArray:function(O){return F(O,function(q){return q})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=S,se.Children=Et,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,q,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=C({},O.props),Ft=O.key;if(q!=null)for(nt in q.key!==void 0&&(Ft=""+q.key),q)!b.call(q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&q.ref===void 0||(At[nt]=q[nt]);var nt=arguments.length-2;if(nt===1)At.children=gt;else if(1<nt){for(var vt=Array(nt),Tt=0;Tt<nt;Tt++)vt[Tt]=arguments[Tt+2];At.children=vt}return w(O.type,Ft,At)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},se.createElement=function(O,q,gt){var At,Ft={},nt=null;if(q!=null)for(At in q.key!==void 0&&(nt=""+q.key),q)b.call(q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ft[At]=q[At]);var vt=arguments.length-2;if(vt===1)Ft.children=gt;else if(1<vt){for(var Tt=Array(vt),Vt=0;Vt<vt;Vt++)Tt[Vt]=arguments[Vt+2];Ft.children=Tt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)Ft[At]===void 0&&(Ft[At]=vt[At]);return w(O,nt,Ft)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:p,render:O}},se.isValidElement=G,se.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ot}},se.memo=function(O,q){return{$$typeof:d,type:O,compare:q===void 0?null:q}},se.startTransition=function(O){var q=z.T,gt={};z.T=gt;try{var At=O(),Ft=z.S;Ft!==null&&Ft(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,ht)}catch(nt){ht(nt)}finally{q!==null&&gt.types!==null&&(q.types=gt.types),z.T=q}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(O){return z.H.use(O)},se.useActionState=function(O,q,gt){return z.H.useActionState(O,q,gt)},se.useCallback=function(O,q){return z.H.useCallback(O,q)},se.useContext=function(O){return z.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,q){return z.H.useDeferredValue(O,q)},se.useEffect=function(O,q){return z.H.useEffect(O,q)},se.useEffectEvent=function(O){return z.H.useEffectEvent(O)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(O,q,gt){return z.H.useImperativeHandle(O,q,gt)},se.useInsertionEffect=function(O,q){return z.H.useInsertionEffect(O,q)},se.useLayoutEffect=function(O,q){return z.H.useLayoutEffect(O,q)},se.useMemo=function(O,q){return z.H.useMemo(O,q)},se.useOptimistic=function(O,q){return z.H.useOptimistic(O,q)},se.useReducer=function(O,q,gt){return z.H.useReducer(O,q,gt)},se.useRef=function(O){return z.H.useRef(O)},se.useState=function(O){return z.H.useState(O)},se.useSyncExternalStore=function(O,q,gt){return z.H.useSyncExternalStore(O,q,gt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.4",se}var Og;function Id(){return Og||(Og=1,lh.exports=NS()),lh.exports}var Wc=Id(),ch={exports:{}},Fo={},uh={exports:{}},fh={};var Pg;function OS(){return Pg||(Pg=1,(function(o){function t(N,F){var ot=N.length;N.push(F);t:for(;0<ot;){var ht=ot-1>>>1,Et=N[ht];if(0<l(Et,F))N[ht]=F,N[ot]=Et,ot=ht;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var F=N[0],ot=N.pop();if(ot!==F){N[0]=ot;t:for(var ht=0,Et=N.length,O=Et>>>1;ht<O;){var q=2*(ht+1)-1,gt=N[q],At=q+1,Ft=N[At];if(0>l(gt,ot))At<Et&&0>l(Ft,gt)?(N[ht]=Ft,N[At]=ot,ht=At):(N[ht]=gt,N[q]=ot,ht=q);else if(At<Et&&0>l(Ft,ot))N[ht]=Ft,N[At]=ot,ht=At;else break t}}return F}function l(N,F){var ot=N.sortIndex-F.sortIndex;return ot!==0?ot:N.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,g=3,y=!1,T=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var F=i(d);F!==null;){if(F.callback===null)s(d);else if(F.startTime<=N)s(d),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(d)}}function H(N){if(C=!1,L(N),!T)if(i(m)!==null)T=!0,B||(B=!0,tt());else{var F=i(d);F!==null&&$(H,F.startTime-N)}}var B=!1,z=-1,b=5,w=-1;function pt(){return M?!0:!(o.unstable_now()-w<b)}function G(){if(M=!1,B){var N=o.unstable_now();w=N;var F=!0;try{t:{T=!1,C&&(C=!1,D(z),z=-1),y=!0;var ot=g;try{e:{for(L(N),S=i(m);S!==null&&!(S.expirationTime>N&&pt());){var ht=S.callback;if(typeof ht=="function"){S.callback=null,g=S.priorityLevel;var Et=ht(S.expirationTime<=N);if(N=o.unstable_now(),typeof Et=="function"){S.callback=Et,L(N),F=!0;break e}S===i(m)&&s(m),L(N)}else s(m);S=i(m)}if(S!==null)F=!0;else{var O=i(d);O!==null&&$(H,O.startTime-N),F=!1}}break t}finally{S=null,g=ot,y=!1}F=void 0}}finally{F?tt():B=!1}}}var tt;if(typeof P=="function")tt=function(){P(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=G,tt=function(){lt.postMessage(null)}}else tt=function(){x(G,0)};function $(N,F){z=x(function(){N(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(N){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ot=g;g=F;try{return N()}finally{g=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ot=g;g=N;try{return F()}finally{g=ot}},o.unstable_scheduleCallback=function(N,F,ot){var ht=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,N){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,N={id:v++,callback:F,priorityLevel:N,startTime:ot,expirationTime:Et,sortIndex:-1},ot>ht?(N.sortIndex=ot,t(d,N),i(m)===null&&N===i(d)&&(C?(D(z),z=-1):C=!0,$(H,ot-ht))):(N.sortIndex=Et,t(m,N),T||y||(T=!0,B||(B=!0,tt()))),N},o.unstable_shouldYield=pt,o.unstable_wrapCallback=function(N){var F=g;return function(){var ot=g;g=F;try{return N.apply(this,arguments)}finally{g=ot}}}})(fh)),fh}var Fg;function PS(){return Fg||(Fg=1,uh.exports=OS()),uh.exports}var hh={exports:{}},bn={};var Ig;function FS(){if(Ig)return bn;Ig=1;var o=Id();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,v)},bn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},bn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},bn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},bn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},bn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,d){return m(d)},bn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var zg;function IS(){if(zg)return hh.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),hh.exports=FS(),hh.exports}var Bg;function zS(){if(Bg)return Fo;Bg=1;var o=PS(),t=Id(),i=IS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,r=f;break}if(A===r){_=!0,r=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=u;break}if(A===r){_=!0,r=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var $=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],Et=-1;function O(e){return{current:e}}function q(e){0>Et||(e.current=ht[Et],ht[Et]=null,Et--)}function gt(e,n){Et++,ht[Et]=e.current,e.current=n}var At=O(null),Ft=O(null),nt=O(null),vt=O(null);function Tt(e,n){switch(gt(nt,n),gt(Ft,e),gt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tg(n),e=eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(At),gt(At,e)}function Vt(){q(At),q(Ft),q(nt)}function Zt(e){e.memoizedState!==null&&gt(vt,e);var n=At.current,a=eg(n,e.type);n!==a&&(gt(Ft,e),gt(At,a))}function Jt(e){Ft.current===e&&(q(At),q(Ft)),vt.current===e&&(q(vt),Uo._currentValue=ot)}var Ke,ve;function me(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+ve}var we=!1;function re(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var it=rt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(rt){it=rt}e.call(_t.prototype)}}else{try{throw Error()}catch(rt){it=rt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var I=_.split(`
`),J=A.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===J.length)for(r=I.length-1,u=J.length-1;1<=r&&0<=u&&I[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==J[u]){var ft=`
`+I[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return me("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,$t=o.unstable_setDisableYieldValue,yt=null,St=null;function Nt(e){if(typeof jt=="function"&&$t(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/le|0)|0}var Rt=256,bt=262144,Pt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Mt(r):(_&=A,_!==0?u=Mt(_):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=r&~f,A!==0?u=Mt(A):_!==0?u=Mt(_):a||(a=r&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-Lt(a),_t=1<<ft;A[ft]=0,I[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var rt=it[ft];rt!==null&&(rt.lane&=-536870913)}a&=~_t}r!==0&&Wr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Wr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Lt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ps(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Lt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function tl(e,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Di(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Tg(e.type))}function zs(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var vi=Math.random().toString(36).slice(2),an="__reactFiber$"+vi,hn="__reactProps$"+vi,Wi="__reactContainer$"+vi,ya="__reactEvents$"+vi,el="__reactListeners$"+vi,nl="__reactHandles$"+vi,il="__reactResources$"+vi,ss="__reactMarker$"+vi;function Yr(e){delete e[an],delete e[hn],delete e[ya],delete e[el],delete e[nl]}function Ea(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=lg(e);e!==null;){if(a=e[an])return a;e=lg(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[an]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[il];return n||(n=e[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[ss]=!0}var st=new Set,et={};function Z(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(et[e]=n,e=0;e<n.length;e++)st.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wt={},kt={};function qt(e){return We.call(kt,e)?!0:We.call(wt,e)?!1:It.test(e)?kt[e]=!0:(wt[e]=!0,!1)}function ee(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=qe(e,n,""+e[n])}}function dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ye(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function ie(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(e,n,a,r,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ce(n)):e.value!==""+ce(n)&&(e.value=""+ce(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?xi(e,_,ce(n)):a!=null?xi(e,_,ce(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ce(A):e.removeAttribute("name")}function qn(e,n,a,r,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){be(e);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),be(e)}function xi(e,n,a){n==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function jn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ne(e,n,a){if(n!=null&&(n=""+ce(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ce(a):""}function sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ce(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),be(e)}function Ln(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Si(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Si(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Si(e,f,n[f])}function Bs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return Cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Gs=null;function $d(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[hn]||null;if(!u)throw Error(s(90));Un(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&dn(r)}break t;case"textarea":Ne(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&jn(e,!!a.multiple,n,!1)}}}var su=!1;function tp(e,n,a){if(su)return e(n,a);su=!0;try{var r=e(n);return r}finally{if(su=!1,(Hs!==null||Gs!==null)&&(Wl(),Hs&&(n=Hs,e=Gs,Gs=Hs=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function qr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(ji)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{ru=!1}var ba=null,ou=null,sl=null;function ep(){if(sl)return sl;var e,n=ou,a=n.length,r,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return sl=u.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function np(){return!1}function zn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:np,this.isPropagationStopped=np,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=zn(os),Zr=S({},os,{view:0,detail:0}),Dv=zn(Zr),lu,cu,Kr,cl=S({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(lu=e.screenX-Kr.screenX,cu=e.screenY-Kr.screenY):cu=lu=0,Kr=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),ip=zn(cl),wv=S({},cl,{dataTransfer:0}),Uv=zn(wv),Lv=S({},Zr,{relatedTarget:0}),uu=zn(Lv),Nv=S({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=zn(Nv),Pv=S({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fv=zn(Pv),Iv=S({},os,{data:0}),ap=zn(Iv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hv[e])?!!n[e]:!1}function fu(){return Gv}var Vv=S({},Zr,{key:function(e){if(e.key){var n=zv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=zn(Vv),kv=S({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=zn(kv),Wv=S({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Yv=zn(Wv),qv=S({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=zn(qv),Zv=S({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=zn(Zv),Qv=S({},os,{newState:0,oldState:0}),Jv=zn(Qv),$v=[9,13,27,32],hu=ji&&"CompositionEvent"in window,Qr=null;ji&&"documentMode"in document&&(Qr=document.documentMode);var tx=ji&&"TextEvent"in window&&!Qr,rp=ji&&(!hu||Qr&&8<Qr&&11>=Qr),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return $v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function ex(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function nx(e,n){if(Vs)return e==="compositionend"||!hu&&cp(e,n)?(e=ep(),sl=ou=ba=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ix[e.type]:n==="textarea"}function hp(e,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function ax(e){j_(e,0)}function ul(e){var n=rs(e);if(dn(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(ji){var du;if(ji){var pu="oninput"in document;if(!pu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),pu=typeof mp.oninput=="function"}du=pu}else du=!1;pp=du&&(!document.documentMode||9<document.documentMode)}function _p(){Jr&&(Jr.detachEvent("onpropertychange",gp),$r=Jr=null)}function gp(e){if(e.propertyName==="value"&&ul($r)){var n=[];hp(n,$r,e,au(e)),tp(ax,n)}}function sx(e,n,a){e==="focusin"?(_p(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",gp)):e==="focusout"&&_p()}function rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul($r)}function ox(e,n){if(e==="click")return ul(n)}function lx(e,n){if(e==="input"||e==="change")return ul(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:cx;function to(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!We.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Gt(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ux=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,_u=null,eo=null,gu=!1;function yp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Xs==null||Xs!==Gt(r)||(r=Xs,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&to(eo,r)||(eo=r,r=Jl(_u,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Xs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ks={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},vu={},Ep={};ji&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function cs(e){if(vu[e])return vu[e];if(!ks[e])return e;var n=ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return vu[e]=n[a];return e}var Tp=cs("animationend"),bp=cs("animationiteration"),Ap=cs("animationstart"),fx=cs("transitionrun"),hx=cs("transitionstart"),dx=cs("transitioncancel"),Rp=cs("transitionend"),Cp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Mi(e,n){Cp.set(e,n),Z(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Ws=0,Su=0;function hl(){for(var e=Ws,n=Su=Ws=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Dp(a,u,f)}}function dl(e,n,a,r){ai[Ws++]=e,ai[Ws++]=n,ai[Ws++]=a,ai[Ws++]=r,Su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mu(e,n,a,r){return dl(e,n,a,r),pl(e)}function us(e,n){return dl(e,null,null,n),pl(e)}function Dp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<To)throw To=0,Uf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function px(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new px(e,n,a,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")yu(e)&&(_=1);else if(typeof e=="string")_=xS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case C:return fs(a.children,u,f,n);case M:_=8,u|=24;break;case x:return e=Kn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case H:return e=Kn(13,a,n,u),e.elementType=H,e.lanes=f,e;case B:return e=Kn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break t;case D:_=9;break t;case L:_=11;break t;case z:_=14;break t;case b:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function fs(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function Eu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Up(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Tu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var qs=[],js=0,_l=null,no=0,ri=[],oi=0,Aa=null,wi=1,Ui="";function Ki(e,n){qs[js++]=no,qs[js++]=_l,_l=e,no=n}function Np(e,n,a){ri[oi++]=wi,ri[oi++]=Ui,ri[oi++]=Aa,Aa=e;var r=wi;e=Ui;var u=32-Lt(r)-1;r&=~(1<<u),a+=1;var f=32-Lt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,wi=1<<32-Lt(n)+u|a<<u|r,Ui=f+e}else wi=1<<f|a<<u|r,Ui=e}function bu(e){e.return!==null&&(Ki(e,1),Np(e,1,0))}function Au(e){for(;e===_l;)_l=qs[--js],qs[js]=null,no=qs[--js],qs[js]=null;for(;e===Aa;)Aa=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null}function Op(e,n){ri[oi++]=wi,ri[oi++]=Ui,ri[oi++]=Aa,wi=n.id,Ui=n.overflow,Aa=e}var Sn=null,Xe=null,Me=!1,Ra=null,li=!1,Ru=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(si(n,e)),Ru}function Pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[an]=e,n[hn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)ge(Ao[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||J_(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ca(e,!0)}function Fp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Sn=Sn.return}}function Zs(e){if(e!==Sn)return!1;if(!Me)return Fp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&Xe&&Ca(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=og(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=og(e)}else n===27?(n=Xe,Va(e.type)?(e=Qf,Qf=null,Xe=e):Xe=n):Xe=Sn?ui(e.stateNode.nextSibling):null;return!0}function hs(){Xe=Sn=null,Me=!1}function Cu(){var e=Ra;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ra=null),e}function io(e){Ra===null?Ra=[e]:Ra.push(e)}var Du=O(null),ds=null,Qi=null;function Da(e,n,a){gt(Du,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Du.current,q(Du)}function wu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Uu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),wu(f.return,a,e),r||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),wu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;Zn(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Uu(n,e,a,r),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Ip(ds,e)}function vl(e,n){return ds===null&&ps(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_x=o.unstable_scheduleCallback,gx=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new mx,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&_x(gx,function(){e.controller.abort()})}var so=null,Nu=0,Qs=0,Js=null;function vx(e,n){if(so===null){var a=so=[];Nu=0,Qs=If(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Nu++,n.then(zp,zp),n}function zp(){if(--Nu===0&&so!==null){Js!==null&&(Js.status="fulfilled");var e=so;so=null,Qs=0,Js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Bp=N.S;N.S=function(e,n){y_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(e,n),Bp!==null&&Bp(e,n)};var ms=O(null);function Ou(){var e=ms.current;return e!==null?e:Ve.pooledCache}function xl(e,n){n===null?gt(ms,ms.current):gt(ms,n.pool)}function Hp(){var e=Ou();return e===null?null:{parent:on._currentValue,pool:e}}var $s=Error(s(460)),Pu=Error(s(474)),Sl=Error(s(542)),Ml={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw gs=n,$s}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,$s):a}}var gs=null;function Xp(){if(gs===null)throw Error(s(459));var e=gs;return gs=null,e}function kp(e){if(e===$s||e===Sl)throw Error(s(483))}var tr=null,ro=0;function yl(e){var n=ro;return ro+=1,tr===null&&(tr=[]),Vp(tr,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wp(e){function n(j,X){if(e){var Q=j.deletions;Q===null?(j.deletions=[X],j.flags|=16):Q.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Zi(j,X),j.index=0,j.sibling=null,j}function f(j,X,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<X?(j.flags|=67108866,X):Q):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,Q,mt){return X===null||X.tag!==6?(X=Eu(Q,j.mode,mt),X.return=j,X):(X=u(X,Q),X.return=j,X)}function I(j,X,Q,mt){var Kt=Q.type;return Kt===C?ft(j,X,Q.props.children,mt,Q.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&_s(Kt)===X.type)?(X=u(X,Q.props),oo(X,Q),X.return=j,X):(X=ml(Q.type,Q.key,Q.props,null,j.mode,mt),oo(X,Q),X.return=j,X)}function J(j,X,Q,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Tu(Q,j.mode,mt),X.return=j,X):(X=u(X,Q.children||[]),X.return=j,X)}function ft(j,X,Q,mt,Kt){return X===null||X.tag!==7?(X=fs(Q,j.mode,mt,Kt),X.return=j,X):(X=u(X,Q),X.return=j,X)}function _t(j,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Eu(""+X,j.mode,Q),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return Q=ml(X.type,X.key,X.props,null,j.mode,Q),oo(Q,X),Q.return=j,Q;case T:return X=Tu(X,j.mode,Q),X.return=j,X;case b:return X=_s(X),_t(j,X,Q)}if($(X)||tt(X))return X=fs(X,j.mode,Q,null),X.return=j,X;if(typeof X.then=="function")return _t(j,yl(X),Q);if(X.$$typeof===P)return _t(j,vl(j,X),Q);El(j,X)}return null}function it(j,X,Q,mt){var Kt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Kt!==null?null:A(j,X,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Kt?I(j,X,Q,mt):null;case T:return Q.key===Kt?J(j,X,Q,mt):null;case b:return Q=_s(Q),it(j,X,Q,mt)}if($(Q)||tt(Q))return Kt!==null?null:ft(j,X,Q,mt,null);if(typeof Q.then=="function")return it(j,X,yl(Q),mt);if(Q.$$typeof===P)return it(j,X,vl(j,Q),mt);El(j,Q)}return null}function rt(j,X,Q,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(Q)||null,A(X,j,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?Q:mt.key)||null,I(X,j,mt,Kt);case T:return j=j.get(mt.key===null?Q:mt.key)||null,J(X,j,mt,Kt);case b:return mt=_s(mt),rt(j,X,Q,mt,Kt)}if($(mt)||tt(mt))return j=j.get(Q)||null,ft(X,j,mt,Kt,null);if(typeof mt.then=="function")return rt(j,X,Q,yl(mt),Kt);if(mt.$$typeof===P)return rt(j,X,Q,vl(X,mt),Kt);El(X,mt)}return null}function Ht(j,X,Q,mt){for(var Kt=null,Ae=null,Yt=X,ue=X=0,Se=null;Yt!==null&&ue<Q.length;ue++){Yt.index>ue?(Se=Yt,Yt=null):Se=Yt.sibling;var Re=it(j,Yt,Q[ue],mt);if(Re===null){Yt===null&&(Yt=Se);break}e&&Yt&&Re.alternate===null&&n(j,Yt),X=f(Re,X,ue),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re,Yt=Se}if(ue===Q.length)return a(j,Yt),Me&&Ki(j,ue),Kt;if(Yt===null){for(;ue<Q.length;ue++)Yt=_t(j,Q[ue],mt),Yt!==null&&(X=f(Yt,X,ue),Ae===null?Kt=Yt:Ae.sibling=Yt,Ae=Yt);return Me&&Ki(j,ue),Kt}for(Yt=r(Yt);ue<Q.length;ue++)Se=rt(Yt,j,ue,Q[ue],mt),Se!==null&&(e&&Se.alternate!==null&&Yt.delete(Se.key===null?ue:Se.key),X=f(Se,X,ue),Ae===null?Kt=Se:Ae.sibling=Se,Ae=Se);return e&&Yt.forEach(function(qa){return n(j,qa)}),Me&&Ki(j,ue),Kt}function Qt(j,X,Q,mt){if(Q==null)throw Error(s(151));for(var Kt=null,Ae=null,Yt=X,ue=X=0,Se=null,Re=Q.next();Yt!==null&&!Re.done;ue++,Re=Q.next()){Yt.index>ue?(Se=Yt,Yt=null):Se=Yt.sibling;var qa=it(j,Yt,Re.value,mt);if(qa===null){Yt===null&&(Yt=Se);break}e&&Yt&&qa.alternate===null&&n(j,Yt),X=f(qa,X,ue),Ae===null?Kt=qa:Ae.sibling=qa,Ae=qa,Yt=Se}if(Re.done)return a(j,Yt),Me&&Ki(j,ue),Kt;if(Yt===null){for(;!Re.done;ue++,Re=Q.next())Re=_t(j,Re.value,mt),Re!==null&&(X=f(Re,X,ue),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return Me&&Ki(j,ue),Kt}for(Yt=r(Yt);!Re.done;ue++,Re=Q.next())Re=rt(Yt,j,ue,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ue:Re.key),X=f(Re,X,ue),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return e&&Yt.forEach(function(wS){return n(j,wS)}),Me&&Ki(j,ue),Kt}function He(j,X,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Kt=Q.key;X!==null;){if(X.key===Kt){if(Kt=Q.type,Kt===C){if(X.tag===7){a(j,X.sibling),mt=u(X,Q.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&_s(Kt)===X.type){a(j,X.sibling),mt=u(X,Q.props),oo(mt,Q),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}Q.type===C?(mt=fs(Q.props.children,j.mode,mt,Q.key),mt.return=j,j=mt):(mt=ml(Q.type,Q.key,Q.props,null,j.mode,mt),oo(mt,Q),mt.return=j,j=mt)}return _(j);case T:t:{for(Kt=Q.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(j,X.sibling),mt=u(X,Q.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=Tu(Q,j.mode,mt),mt.return=j,j=mt}return _(j);case b:return Q=_s(Q),He(j,X,Q,mt)}if($(Q))return Ht(j,X,Q,mt);if(tt(Q)){if(Kt=tt(Q),typeof Kt!="function")throw Error(s(150));return Q=Kt.call(Q),Qt(j,X,Q,mt)}if(typeof Q.then=="function")return He(j,X,yl(Q),mt);if(Q.$$typeof===P)return He(j,X,vl(j,Q),mt);El(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(j,X.sibling),mt=u(X,Q),mt.return=j,j=mt):(a(j,X),mt=Eu(Q,j.mode,mt),mt.return=j,j=mt),_(j)):a(j,X)}return function(j,X,Q,mt){try{ro=0;var Kt=He(j,X,Q,mt);return tr=null,Kt}catch(Yt){if(Yt===$s||Yt===Sl)throw Yt;var Ae=Kn(29,Yt,null,j.mode);return Ae.lanes=mt,Ae.return=j,Ae}}}var vs=Wp(!0),Yp=Wp(!1),wa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=pl(e),Dp(e,null,a),n}return dl(e,r,n,a),pl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ps(e,a)}}function zu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function co(){if(Bu){var e=Js;if(e!==null)throw e}}function uo(e,n,a,r){Bu=!1;var u=e.updateQueue;wa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,J=I.next;I.next=null,_===null?f=J:_.next=J,_=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==_&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;_=0,ft=J=I=null,A=f;do{var it=A.lane&-536870913,rt=it!==A.lane;if(rt?(xe&it)===it:(r&it)===it){it!==0&&it===Qs&&(Bu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,Qt=A;it=n;var He=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){_t=Ht.call(He,_t,it);break t}_t=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,it=typeof Ht=="function"?Ht.call(He,_t,it):Ht,it==null)break t;_t=S({},_t,it);break t;case 2:wa=!0}}it=A.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=rt,I=_t):ft=ft.next=rt,_|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ft===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ia|=_,e.lanes=_,e.memoizedState=_t}}function qp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function jp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var er=O(null),Tl=O(0);function Zp(e,n){e=oa,gt(Tl,e),gt(er,n),oa=e|n.baseLanes}function Hu(){gt(Tl,oa),gt(er,er.current)}function Gu(){oa=Tl.current,q(er),q(Tl)}var Qn=O(null),ci=null;function Na(e){var n=e.alternate;gt($e,$e.current&1),gt(Qn,e),ci===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(ci=e)}function Vu(e){gt($e,$e.current),gt(Qn,e),ci===null&&(ci=e)}function Kp(e){e.tag===22?(gt($e,$e.current),gt(Qn,e),ci===null&&(ci=e)):Oa()}function Oa(){gt($e,$e.current),gt(Qn,Qn.current)}function Jn(e){q(Qn),ci===e&&(ci=null),q($e)}var $e=O(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,oe=null,ze=null,ln=null,Al=!1,nr=!1,xs=!1,Rl=0,fo=0,ir=null,Sx=0;function Qe(){throw Error(s(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function ku(e,n,a,r,u,f){return $i=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Nm:rf,xs=!1,f=a(r,u),xs=!1,nr&&(f=Jp(n,a,r,u)),Qp(e),f}function Qp(e){N.H=mo;var n=ze!==null&&ze.next!==null;if($i=0,ln=ze=oe=null,Al=!1,fo=0,ir=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&gl(e)&&(cn=!0))}function Jp(e,n,a,r){oe=e;var u=0;do{if(nr&&(ir=null),fo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Om,f=n(a,r)}while(nr);return f}function Mx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(oe.flags|=1024),n}function Wu(){var e=Rl!==0;return Rl=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}$i=0,ln=ze=oe=null,nr=!1,fo=Rl=0,ir=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=e:ln=ln.next=e,ln}function tn(){if(ze===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?oe.memoizedState=ln=e:ln=ln.next=e}return ln}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,ir===null&&(ir=[]),e=Vp(ir,e,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Nm:rf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===P)return Mn(e)}throw Error(s(438,String(e)))}function ju(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=pt;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=tn();return Zu(n,ze,e)}function Zu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,I=null,J=n,ft=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(xe&_t)===_t:($i&_t)===_t){var it=J.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Qs&&(ft=!0);else if(($i&it)===it){J=J.next,it===Qs&&(ft=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=_t,_=f):I=I.next=_t,oe.lanes|=it,Ia|=it;_t=J.action,xs&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else it={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=it,_=f):I=I.next=it,oe.lanes|=_t,Ia|=_t;J=J.next}while(J!==null&&J!==n);if(I===null?_=f:I.next=A,!Zn(f,e.memoizedState)&&(cn=!0,ft&&(a=Js,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ku(e){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function $p(e,n,a){var r=oe,u=tn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Zn((ze||u).memoizedState,a);if(_&&(u.memoizedState=a,cn=!0),u=u.queue,$u(nm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},em.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||($i&127)!==0||tm(r,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Cl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,r){n.value=a,n.getSnapshot=r,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function am(e){var n=us(e,2);n!==null&&Xn(n,e,2)}function Qu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),xs){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function sm(e,n,a,r){return e.baseState=a,Zu(e,ze,typeof r=="function"?r:ta)}function yx(e,n,a,r,u){if(Nl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=N.T,_={};N.T=_;try{var A=a(u,r),I=N.S;I!==null&&I(_,A),om(e,n,A)}catch(J){Ju(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(u,r),om(e,n,f)}catch(J){Ju(e,n,J)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lm(e,n,r)},function(r){return Ju(e,n,r)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function Ju(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==r)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var r=oe;if(Me){if(Xe){e:{for(var u=Xe,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=ui(u.nextSibling),r=u.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=r,a=wm.bind(null,oe,r),r.dispatch=a,r=Qu(!1),f=sf.bind(null,oe,!1,r.queue),r=Nn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=yx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function hm(e){var n=tn();return dm(n,ze,e)}function dm(e,n,a){if(n=Zu(e,n,um)[0],e=wl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(_){throw _===$s?Sl:_}else r=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ar(9,{destroy:void 0},Ex.bind(null,u,a),null)),[r,f,e]}function Ex(e,n){e.action=n}function pm(e){var n=tn(),a=ze;if(a!==null)return dm(n,a,e);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ar(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Cl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mm(){return tn().memoizedState}function Ul(e,n,a,r){var u=Nn();oe.flags|=e,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ll(e,n,a,r){var u=tn();r=r===void 0?null:r;var f=u.memoizedState.inst;ze!==null&&r!==null&&Xu(r,ze.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(oe.flags|=e,u.memoizedState=ar(1|n,f,a,r))}function _m(e,n){Ul(8390656,8,e,n)}function $u(e,n){Ll(2048,8,e,n)}function Tx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Cl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function gm(e){var n=tn().memoizedState;return Tx({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vm(e,n){return Ll(4,2,e,n)}function xm(e,n){return Ll(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,Sm.bind(null,n,e),a)}function tf(){}function ym(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Xu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Xu(n,r[1]))return r[0];if(r=e(),xs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r}function ef(e,n,a){return a===void 0||($i&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T_(),oe.lanes|=e,Ia|=e,a)}function Tm(e,n,a,r){return Zn(a,n)?a:er.current!==null?(e=ef(e,a,r),Zn(e,n)||(cn=!0),e):($i&42)===0||($i&1073741824)!==0&&(xe&261930)===0?(cn=!0,e.memoizedState=a):(e=T_(),oe.lanes|=e,Ia|=e,n)}function bm(e,n,a,r,u){var f=F.p;F.p=f!==0&&8>f?f:8;var _=N.T,A={};N.T=A,sf(e,!1,n,a);try{var I=u(),J=N.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=xx(I,r);po(e,n,ft,ei(e))}else po(e,n,r,ei(e))}catch(_t){po(e,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{F.p=f,_!==null&&A.types!==null&&(_.types=A.types),N.T=_}}function bx(){}function nf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Am(e).queue;bm(e,u,n,ot,a===null?bx:function(){return Rm(e),a(r)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ei())}function af(){return Mn(Uo)}function Cm(){return tn().memoizedState}function Dm(){return tn().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ua(a);var r=La(n,e,a);r!==null&&(Xn(r,n,a),lo(r,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function Rx(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Um(n,a):(a=Mu(e,n,a,r),a!==null&&(Xn(a,e,r),Lm(a,n,r)))}function wm(e,n,a){var r=ei();po(e,n,a,r)}function po(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,_))return dl(e,n,u,0),Ve===null&&hl(),!1}catch{}if(a=Mu(e,n,u,r),a!==null)return Xn(a,e,r),Lm(a,n,r),!0}return!1}function sf(e,n,a,r){if(r={lane:2,revertLane:If(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(s(479))}else n=Mu(e,a,r,2),n!==null&&Xn(n,e,2)}function Nl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Um(e,n){nr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ps(e,a)}}var mo={readContext:Mn,use:Dl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};mo.useEffectEvent=Qe;var Nm={readContext:Mn,use:Dl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var r=e();if(xs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Nn();if(a!==void 0){var u=a(n);if(xs){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Rx.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=wm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(e,n){var a=Nn();return ef(a,e,n)},useTransition:function(){var e=Qu(!1);return e=bm.bind(null,oe,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=oe,u=Nn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(xe&127)!==0||tm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_m(nm.bind(null,r,f,e),[e]),r.flags|=2048,ar(9,{destroy:void 0},em.bind(null,r,f,a,n),null),a},useId:function(){var e=Nn(),n=Ve.identifierPrefix;if(Me){var a=Ui,r=wi;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ju,useCacheRefresh:function(){return Nn().memoizedState=Ax.bind(null,oe)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Mn,use:Dl,useCallback:ym,useContext:Mn,useEffect:$u,useImperativeHandle:Mm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:wl,useRef:mm,useState:function(){return wl(ta)},useDebugValue:tf,useDeferredValue:function(e,n){var a=tn();return Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=wl(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:af,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=tn();return sm(a,ze,e,n)},useMemoCache:ju,useCacheRefresh:Dm};rf.useEffectEvent=gm;var Om={readContext:Mn,use:Dl,useCallback:ym,useContext:Mn,useEffect:$u,useImperativeHandle:Mm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Ku,useRef:mm,useState:function(){return Ku(ta)},useDebugValue:tf,useDeferredValue:function(e,n){var a=tn();return ze===null?ef(a,e,n):Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ku(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:af,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=tn();return ze!==null?sm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Dm};Om.useEffectEvent=gm;function of(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ua(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Xn(n,e,r),lo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ua(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Xn(n,e,r),lo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(Xn(n,e,a),lo(n,e,a))}};function Pm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function Fm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){fl(e)}function zm(e){console.error(e)}function Bm(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Gm(e){return e=Ua(e),e.tag=3,e}function Vm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,r),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Cx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Yl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Of(e,r,u)),!1;case 22:return a.flags|=65536,r===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Of(e,r,u)),!1}throw Error(s(435,a.tag))}return Of(e,r,u),Yl(),!1}if(Me)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Ru&&(e=Error(s(422),{cause:r}),io(si(e,a)))):(r!==Ru&&(n=Error(s(423),{cause:r}),io(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=si(r,a),u=cf(e.stateNode,r,u),zu(e,u),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),Eo===null?Eo=[f]:Eo.push(f),Je!==4&&(Je=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=cf(a.stateNode,r,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,r),zu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(s(461)),cn=!1;function yn(e,n,a,r){n.child=e===null?Yp(n,null,a,r):vs(n,e.child,a,r)}function Xm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return ps(n),r=ku(e,n,a,_,f,u),A=Wu(),e!==null&&!cn?(Yu(e,n,u),ea(e,n,u)):(Me&&A&&bu(n),n.flags|=1,yn(e,n,r,u),n.child)}function km(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,r,u)):(e=ml(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,r)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(to(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,vf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ea(e,n,u)}return ff(e,n,a,r,u)}function Ym(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return qm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Zp(n,f):Hu(),Kp(n);else return r=n.lanes=536870912,qm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(xl(n,f.cachePool),Zp(n,f),Oa(),n.memoizedState=null):(e!==null&&xl(n,null),Hu(),Oa());return yn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(e,n,a,r,u){var f=Ou();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Hu(),Kp(n),e!==null&&Ks(e,n,r,!0),n.childLanes=u,null}function Pl(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jm(e,n,a){return vs(n,e.child,null,a),e=Pl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Dx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(r.mode==="hidden")return e=Pl(n,r),n.lanes=536870912,_o(null,e);if(Vu(n),(e=Xe)?(e=rg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:wi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Sn=n,Xe=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Pl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=jm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(r=Ve,r!==null&&(_=tl(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,us(e,_),Xn(r,e,_),uf;Yl(),n=jm(e,n,a)}else e=f.treeContext,Xe=ui(_.nextSibling),Sn=n,Me=!0,Ra=null,li=!1,e!==null&&Op(n,e),n=Pl(n,r),n.flags|=4096;return n}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,r,u){return ps(n),a=ku(e,n,a,r,void 0,u),r=Wu(),e!==null&&!cn?(Yu(e,n,u),ea(e,n,u)):(Me&&r&&bu(n),n.flags|=1,yn(e,n,a,u),n.child)}function Zm(e,n,a,r,u,f){return ps(n),n.updateQueue=null,a=Jp(n,r,a,u),Qp(e),r=Wu(),e!==null&&!cn?(Yu(e,n,f),ea(e,n,f)):(Me&&r&&bu(n),n.flags|=1,yn(e,n,a,f),n.child)}function Km(e,n,a,r,u){if(ps(n),n.stateNode===null){var f=Ys,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Fu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Ys,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(of(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lf.enqueueReplaceState(f,f.state,null),uo(n,r,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=Ss(a,A);f.props=I;var J=f.context,ft=a.contextType;_=Ys,typeof ft=="object"&&ft!==null&&(_=Mn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==_)&&Fm(n,f,r,_),wa=!1;var it=n.memoizedState;f.state=it,uo(n,r,f,u),co(),J=n.memoizedState,A||it!==J||wa?(typeof _t=="function"&&(of(n,a,_t,r),J=n.memoizedState),(I=wa||Pm(n,a,I,r,it,J,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Iu(e,n),_=n.memoizedProps,ft=Ss(a,_),f.props=ft,_t=n.pendingProps,it=f.context,J=a.contextType,I=Ys,typeof J=="object"&&J!==null&&(I=Mn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||it!==I)&&Fm(n,f,r,I),wa=!1,it=n.memoizedState,f.state=it,uo(n,r,f,u),co();var rt=n.memoizedState;_!==_t||it!==rt||wa||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof A=="function"&&(of(n,a,A,r),rt=n.memoizedState),(ft=wa||Pm(n,a,ft,r,it,rt,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=I,r=ft):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function Qm(e,n,a,r){return hs(),n.flags|=256,yn(e,n,a,r),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:Hp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Jm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Na(n):Oa(),(e=Xe)?(e=rg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:wi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Sn=n,Xe=null)):e=null,e===null)throw Ca(n);return Kf(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Oa(),u=n.mode,A=Il({mode:"hidden",children:A},u),r=fs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=df(a),r.childLanes=pf(e,_,a),n.memoizedState=hf,_o(null,r)):(Na(n),mf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=_f(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),A=r.fallback,u=n.mode,r=Il({mode:"visible",children:r.children},u),A=fs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,vs(n,e.child,null,a),r=n.child,r.memoizedState=df(a),r.childLanes=pf(e,_,a),n.memoizedState=hf,n=_o(null,r));else if(Na(n),Kf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,io({value:r,source:null,stack:null}),n=_f(e,n,a)}else if(cn||Ks(e,n,a,!1),_=(a&e.childLanes)!==0,cn||_){if(_=Ve,_!==null&&(r=tl(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,us(e,r),Xn(_,e,r),uf;Zf(A)||Yl(),n=_f(e,n,a)}else Zf(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Xe=ui(A.nextSibling),Sn=n,Me=!0,Ra=null,li=!1,e!==null&&Op(n,e),n=mf(n,r.children),n.flags|=4096);return n}return u?(Oa(),A=r.fallback,u=n.mode,I=e.child,J=I.sibling,r=Zi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?A=Zi(J,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,_o(null,r),r=n.child,A=e.child.memoizedState,A===null?A=df(a):(u=A.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Hp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=pf(e,_,a),n.memoizedState=hf,_o(e.child,r)):(Na(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function _f(e,n,a){return vs(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function t_(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=$e.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,gt($e,_),yn(e,n,r,a),r=Me?no:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,r);break;case"together":gf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function wx(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Da(n,on,e.memoizedState.cache),hs();break;case 27:case 5:Zt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Na(n),e=ea(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return t_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt($e,$e.current),r)break;return null;case 22:return n.lanes=0,Ym(e,n,a,n.pendingProps);case 24:Da(n,on,e.memoizedState.cache)}return ea(e,n,a)}function e_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return cn=!1,wx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Np(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")yu(e)?(r=Ss(e,r),n.tag=1,n=Km(null,n,e,r,a)):(n.tag=0,n=ff(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Xm(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=km(null,n,e,r,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),Km(e,n,r,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(e,n),uo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Da(n,on,r),r!==f.cache&&Uu(n,[on],a,!0),co(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,r,a);break t}else if(r!==u){u=si(Error(s(424)),n),io(u),n=Qm(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=ui(e.firstChild),Sn=n,Me=!0,Ra=null,li=!0,a=Yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),r===u){n=ea(e,n,a);break t}yn(e,n,r,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,r=$l(nt.current).createElement(a),r[an]=n,r[hn]=e,En(r,a,e),k(r),n.stateNode=r):n.memoizedState=hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Me&&(r=n.stateNode=cg(n.type,n.pendingProps,nt.current),Sn=n,li=!0,u=Xe,Va(n.type)?(Qf=u,Xe=ui(r.firstChild)):Xe=u),yn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=r=Xe)&&(r=rS(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Sn=n,Xe=ui(r.firstChild),li=!1,u=!0):u=!1),u||Ca(n)),Zt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Yf(u,f)?r=null:_!==null&&Yf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Mx,null,null,a),Uo._currentValue=u),Fl(e,n),yn(e,n,r,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=oS(a,n.pendingProps,li),a!==null?(n.stateNode=a,Sn=n,Xe=null,e=!0):e=!1),e||Ca(n)),null;case 13:return Jm(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vs(n,null,r,a):yn(e,n,r,a),n.child;case 11:return Xm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),yn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ps(n),u=Mn(u),r=r(u),n.flags|=1,yn(e,n,r,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return t_(e,n,a);case 31:return Dx(e,n,a);case 22:return Ym(e,n,a,n.pendingProps);case 24:return ps(n),r=Mn(on),e===null?(u=Ou(),u===null&&(u=Ve,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Fu(n),Da(n,on,u)):((e.lanes&a)!==0&&(Iu(e,n),uo(n,null,null,a),co()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,on,r)):(r=f.cache,Da(n,on,r),r!==u.cache&&Uu(n,[on],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function xf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(C_())e.flags|=8192;else throw gs=Ml,Pu}else e.flags&=-16777217}function n_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gg(n))if(C_())e.flags|=8192;else throw gs=Ml,Pu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,lr|=n)}function go(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ux(e,n,a){var r=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(on),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(ke(n),n_(n,f)):(ke(n),xf(n,u,null,r,a))):f?f!==e.memoizedState?(na(n),ke(n),n_(n,f)):(ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),ke(n),xf(n,u,e,r,a)),null;case 27:if(Jt(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}e=At.current,Zs(n)?Pp(n):(e=cg(u,r,a),n.stateNode=e,na(n))}return ke(n),null;case 5:if(Jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}if(f=At.current,Zs(n))Pp(n);else{var _=$l(nt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[an]=n,f[hn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return ke(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||J_(e.nodeValue,a)),e||Ca(n,!0)}else e=$l(e).createTextNode(r),e[an]=n,n.stateNode=e}return ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Zs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),e=!1}else a=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),ke(n),null);case 4:return Vt(),e===null&&Gf(n.stateNode.containerInfo),ke(n),null;case 10:return Ji(n.type),ke(n),null;case 19:if(q($e),r=n.memoizedState,r===null)return ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,go(r,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return gt($e,$e.current&1|2),Me&&Ki(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Xl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return ke(n),null}else 2*E()-r.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=$e.current,gt($e,u?a&1|2:a&1),Me&&Ki(n,r.treeForkCount),e):(ke(n),null);case 22:case 23:return Jn(n),Gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&q(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Lx(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(on),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q($e),null;case 4:return Vt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Jn(n),Gu(),e!==null&&q(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function i_(e,n){switch(Au(n),n.tag){case 3:Ji(on),Vt();break;case 26:case 27:case 5:Jt(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:q($e);break;case 10:Ji(n.type);break;case 22:case 23:Jn(n),Gu(),e!==null&&q(ms);break;case 24:Ji(on)}}function vo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Pa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var I=a,J=A;try{J()}catch(ft){Fe(u,I,ft)}}}r=r.next}while(r!==f)}}catch(ft){Fe(n,n.return,ft)}}function a_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{jp(n,a)}catch(r){Fe(e,e.return,r)}}}function s_(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(e,n,r)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Fe(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function r_(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Sf(e,n,a){try{var r=e.stateNode;tS(r,e.type,a,n),r[hn]=n}catch(u){Fe(e,e.return,u)}}function o_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yf(e,n,a),e=e.sibling;e!==null;)yf(e,n,a),e=e.sibling}function Bl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function l_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,r,a),n[an]=e,n[hn]=a}catch(f){Fe(e,e.return,f)}}var ia=!1,un=!1,Ef=!1,c_=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Nx(e,n){if(e=e.containerInfo,kf=rc,e=Mp(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,I=-1,J=0,ft=0,_t=e,it=null;e:for(;;){for(var rt;_t!==a||u!==0&&_t.nodeType!==3||(A=_+u),_t!==f||r!==0&&_t.nodeType!==3||(I=_+r),_t.nodeType===3&&(_+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)it=_t,_t=rt;for(;;){if(_t===e)break e;if(it===a&&++J===u&&(A=_),it===f&&++ft===r&&(I=_),(rt=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=rt}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:e,selectionRange:a},rc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=Ss(a.type,u);e=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Fe(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function u_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&vo(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&a_(a),r&512&&xo(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jp(e,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&l_(a);case 26:case 5:sa(e,a),n===null&&r&4&&r_(a),r&512&&xo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&d_(e,a);break;case 13:sa(e,a),r&4&&p_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),lS(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||un,u=ia;var f=un;ia=r,(un=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,un=f}break;case 30:break;default:sa(e,a)}}function f_(e){var n=e.alternate;n!==null&&(e.alternate=null,f_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Yr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Bn=!1;function aa(e,n,a){for(a=a.child;a!==null;)h_(e,n,a),a=a.sibling}function h_(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:un||Li(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Li(a,n);var r=je,u=Bn;Va(a.type)&&(je=a.stateNode,Bn=!1),aa(e,n,a),Co(a.stateNode),je=r,Bn=u;break;case 5:un||Li(a,n);case 6:if(r=je,u=Bn,je=null,aa(e,n,a),je=r,Bn=u,je!==null)if(Bn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:je!==null&&(Bn?(e=je,ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):ag(je,a.stateNode));break;case 4:r=je,u=Bn,je=a.stateNode.containerInfo,Bn=!0,aa(e,n,a),je=r,Bn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),un||Pa(4,a,n),aa(e,n,a);break;case 1:un||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&s_(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,aa(e,n,a),un=r;break;default:aa(e,n,a)}}function d_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Fe(n,n.return,a)}}}function p_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Fe(n,n.return,a)}}function Ox(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c_),n;default:throw Error(s(435,e.tag))}}function Hl(e,n){var a=Ox(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Xx.bind(null,e,r);r.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){je=A.stateNode,Bn=!1;break t}break;case 5:je=A.stateNode,Bn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(je===null)throw Error(s(160));h_(f,_,u),je=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m_(n,e),n=n.sibling}var yi=null;function m_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Pa(3,e,e.return),vo(3,e),Pa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(un||a===null||Li(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=yi;if(Hn(n,e),Gn(e),r&512&&(un||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,r,a),f[an]=e,k(f),r=f;break t;case"link":var _=mg("link","href",u).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;case"meta":if(_=mg("meta","content",u).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=e,k(f),r=f}e.stateNode=r}else _g(u,e.type,e.stateNode);else e.stateNode=pg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?_g(u,e.type,e.stateNode):pg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(un||a===null||Li(a,a.return)),a!==null&&r&4&&Sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(un||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{Ln(u,"")}catch(Ht){Fe(e,e.return,Ht)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Sf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Ef=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ht){Fe(e,e.return,Ht)}}break;case 3:if(nc=null,u=yi,yi=tc(n.containerInfo),Hn(n,e),yi=u,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Ht){Fe(e,e.return,Ht)}Ef&&(Ef=!1,__(e));break;case 4:r=yi,yi=tc(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=ia,ft=un;if(ia=J||u,un=ft||I,Hn(n,e),un=ft,ia=J,Gn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ia||un||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Fe(I,I.return,Ht)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ht){Fe(I,I.return,Ht)}}}else if(n.tag===18){if(a===null){I=n;try{var rt=I.stateNode;u?sg(rt,!0):sg(I.stateNode,!1)}catch(Ht){Fe(I,I.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Hl(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(o_(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(e);Bl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Ln(_,""),a.flags&=-33);var A=Mf(e);Bl(e,A,_);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Mf(e);yf(e,J,I);break;default:throw Error(s(161))}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;__(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u_(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),Ms(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s_(n,n.return,a),Ms(n);break;case 27:Co(n.stateNode);case 26:case 5:Li(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),vo(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)qp(I[u],A)}catch(J){Fe(r,r.return,J)}}a&&_&64&&a_(f),xo(f,f.return);break;case 27:l_(f);case 26:case 5:ra(u,f,a),a&&r===null&&_&4&&r_(f),xo(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&_&4&&d_(u,f);break;case 13:ra(u,f,a),a&&_&4&&p_(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),xo(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function Tf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Ei(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)g_(e,n,a,r),n=n.sibling}function g_(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,r),u&2048&&vo(9,n);break;case 1:Ei(e,n,a,r);break;case 3:Ei(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){Ei(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else Ei(e,n,a,r);break;case 31:Ei(e,n,a,r);break;case 13:Ei(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,r):So(e,n):f._visibility&2?Ei(e,n,a,r):(f._visibility|=2,sr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Tf(_,n);break;case 24:Ei(e,n,a,r),u&2048&&bf(n.alternate,n);break;default:Ei(e,n,a,r)}}function sr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,I=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:sr(f,_,A,I,u),vo(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?sr(f,_,A,I,u):So(f,_):(ft._visibility|=2,sr(f,_,A,I,u)),u&&J&2048&&Tf(_.alternate,_);break;case 24:sr(f,_,A,I,u),u&&J&2048&&bf(_.alternate,_);break;default:sr(f,_,A,I,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:So(a,r),u&2048&&Tf(r.alternate,r);break;case 24:So(a,r),u&2048&&bf(r.alternate,r);break;default:So(a,r)}n=n.sibling}}var Mo=8192;function rr(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)v_(e,n,a),e=e.sibling}function v_(e,n,a){switch(e.tag){case 26:rr(e,n,a),e.flags&Mo&&e.memoizedState!==null&&SS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:rr(e,n,a);break;case 3:case 4:var r=yi;yi=tc(e.stateNode.containerInfo),rr(e,n,a),yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Mo,Mo=16777216,rr(e,n,a),Mo=r):rr(e,n,a));break;default:rr(e,n,a)}}function x_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,M_(r,e)}x_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):yo(e);break;default:yo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,M_(r,e)}x_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function M_(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(f_(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Px={getCacheForType:function(e){var n=Mn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,_e=null,xe=0,Pe=0,$n=null,Fa=!1,or=!1,Af=!1,oa=0,Je=0,Ia=0,ys=0,Rf=0,ti=0,lr=0,Eo=null,Vn=null,Cf=!1,Vl=0,y_=0,Xl=1/0,kl=null,za=null,pn=0,Ba=null,cr=null,la=0,Df=0,wf=null,E_=null,To=0,Uf=null;function ei(){return(Ue&2)!==0&&xe!==0?xe&-xe:N.T!==null?If():Di()}function T_(){if(ti===0)if((xe&536870912)===0||Me){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Xn(e,n,a){(e===Ve&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ur(e,0),Ha(e,xe,ti,!1)),Dn(e,a),((Ue&2)===0||e!==Ve)&&(e===Ve&&((Ue&2)===0&&(ys|=a),Je===4&&Ha(e,xe,ti,!1)),Ni(e))}function b_(e,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=r?Bx(e,n):Nf(e,n,!0),f=r;do{if(u===0){or&&!r&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ix(a)){u=Nf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=Eo;var I=A.current.memoizedState.isDehydrated;if(I&&(ur(A,_).flags|=256),_=Nf(A,_,!1),_!==2){if(Af&&!I){A.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ur(e,0),Ha(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,ti,!Fa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vl+300-E(),10<u)){if(Ha(r,n,ti,!Fa),ct(r,0,!0)!==0)break t;la=n,r.timeoutHandle=ng(A_.bind(null,r,a,Vn,kl,Cf,n,ti,ys,lr,Fa,f,"Throttled",-0,0),u);break t}A_(r,a,Vn,kl,Cf,n,ti,ys,lr,Fa,f,null,-0,0)}}break}while(!0);Ni(e)}function A_(e,n,a,r,u,f,_,A,I,J,ft,_t,it,rt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},v_(n,f,_t);var Ht=(f&62914560)===f?Vl-E():(f&4194048)===f?y_-E():0;if(Ht=MS(_t,Ht),Ht!==null){la=f,e.cancelPendingCommit=Ht(O_.bind(null,e,n,f,a,r,u,_,A,I,ft,_t,null,it,rt)),Ha(e,f,_,!J);return}}O_(e,n,f,a,r,u,_,A,I)}function Ix(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,r){n&=~Rf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Lt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Wr(e,a,n)}function Wl(){return(Ue&6)===0?(bo(0),!1):!0}function Lf(){if(_e!==null){if(Pe===0)var e=_e.return;else e=_e,Qi=ds=null,qu(e),tr=null,ro=0,e=_e;for(;e!==null;)i_(e.alternate,e),e=e.return;_e=null}}function ur(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Lf(),Ve=e,_e=a=Zi(e.current,null),xe=n,Pe=0,$n=null,Fa=!1,or=zt(e,n),Af=!1,lr=ti=Rf=ys=Ia=Je=0,Vn=Eo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Lt(r),f=1<<u;n|=e[u],r&=~f}return oa=n,hl(),a}function R_(e,n){oe=null,N.H=mo,n===$s||n===Sl?(n=Xp(),Pe=3):n===Pu?(n=Xp(),Pe=4):Pe=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_e===null&&(Je=1,Ol(e,si(n,e.current)))}function C_(){var e=Qn.current;return e===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ci:!1}function D_(){var e=N.H;return N.H=mo,e===null?mo:e}function w_(){var e=N.A;return N.A=Px,e}function Yl(){Je=4,Fa||(xe&4194048)!==xe&&Qn.current!==null||(or=!0),(Ia&134217727)===0&&(ys&134217727)===0||Ve===null||Ha(Ve,xe,ti,!1)}function Nf(e,n,a){var r=Ue;Ue|=2;var u=D_(),f=w_();(Ve!==e||xe!==n)&&(kl=null,ur(e,n)),n=!1;var _=Je;t:do try{if(Pe!==0&&_e!==null){var A=_e,I=$n;switch(Pe){case 8:Lf(),_=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var J=Pe;if(Pe=0,$n=null,fr(e,A,I,J),a&&or){_=0;break t}break;default:J=Pe,Pe=0,$n=null,fr(e,A,I,J)}}zx(),_=Je;break}catch(ft){R_(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Qi=ds=null,Ue=r,N.H=u,N.A=f,_e===null&&(Ve=null,xe=0,hl()),_}function zx(){for(;_e!==null;)U_(_e)}function Bx(e,n){var a=Ue;Ue|=2;var r=D_(),u=w_();Ve!==e||xe!==n?(kl=null,Xl=E()+500,ur(e,n)):or=zt(e,n);t:do try{if(Pe!==0&&_e!==null){n=_e;var f=$n;e:switch(Pe){case 1:Pe=0,$n=null,fr(e,n,f,1);break;case 2:case 9:if(Gp(f)){Pe=0,$n=null,L_(n);break}n=function(){Pe!==2&&Pe!==9||Ve!==e||(Pe=7),Ni(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Gp(f)?(Pe=0,$n=null,L_(n)):(Pe=0,$n=null,fr(e,n,f,7));break;case 5:var _=null;switch(_e.tag){case 26:_=_e.memoizedState;case 5:case 27:var A=_e;if(_?gg(_):A.stateNode.complete){Pe=0,$n=null;var I=A.sibling;if(I!==null)_e=I;else{var J=A.return;J!==null?(_e=J,ql(J)):_e=null}break e}}Pe=0,$n=null,fr(e,n,f,5);break;case 6:Pe=0,$n=null,fr(e,n,f,6);break;case 8:Lf(),Je=6;break t;default:throw Error(s(462))}}Hx();break}catch(ft){R_(e,ft)}while(!0);return Qi=ds=null,N.H=r,N.A=u,Ue=a,_e!==null?0:(Ve=null,xe=0,hl(),Je)}function Hx(){for(;_e!==null&&!Wt();)U_(_e)}function U_(e){var n=e_(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?ql(e):_e=n}function L_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:qu(n);default:i_(a,n),n=_e=wp(n,oa),n=e_(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?ql(e):_e=n}function fr(e,n,a,r){Qi=ds=null,qu(n),tr=null,ro=0;var u=n.return;try{if(Cx(e,u,n,a,xe)){Je=1,Ol(e,si(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;Je=1,Ol(e,si(a,e.current)),_e=null;return}n.flags&32768?(Me||r===1?e=!0:or||(xe&536870912)!==0?e=!1:(Fa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),N_(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){N_(n,Fa);return}e=n.return;var a=Ux(n.alternate,n,oa);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Je===0&&(Je=5)}function N_(e,n){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);Je=6,_e=null}function O_(e,n,a,r,u,f,_,A,I){e.cancelPendingCommit=null;do jl();while(pn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,gi(e,a,f,_,A,I),e===Ve&&(_e=Ve=null,xe=0),cr=n,Ba=e,la=a,Df=f,wf=u,E_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kx(ut,function(){return B_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,u=F.p,F.p=2,_=Ue,Ue|=4;try{Nx(e,n,a)}finally{Ue=_,F.p=u,N.T=r}}pn=1,P_(),F_(),I_()}}function P_(){if(pn===1){pn=0;var e=Ba,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var u=Ue;Ue|=4;try{m_(n,e);var f=Wf,_=Mp(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&Sp(A.ownerDocument.documentElement,A)){if(I!==null&&mu(A)){var J=I.start,ft=I.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var _t=A.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var rt=it.getSelection(),Ht=A.textContent.length,Qt=Math.min(I.start,Ht),He=I.end===void 0?Qt:Math.min(I.end,Ht);!rt.extend&&Qt>He&&(_=He,He=Qt,Qt=_);var j=xp(A,Qt),X=xp(A,He);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var Q=_t.createRange();Q.setStart(j.node,j.offset),rt.removeAllRanges(),Qt>He?(rt.addRange(Q),rt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),rt.addRange(Q))}}}}for(_t=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}rc=!!kf,Wf=kf=null}finally{Ue=u,F.p=r,N.T=a}}e.current=n,pn=2}}function F_(){if(pn===2){pn=0;var e=Ba,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var u=Ue;Ue|=4;try{u_(e,n.alternate,n)}finally{Ue=u,F.p=r,N.T=a}}pn=3}}function I_(){if(pn===4||pn===3){pn=0,U();var e=Ba,n=cr,a=la,r=E_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,cr=Ba=null,z_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Is(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,u=F.p,F.p=2,N.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{N.T=n,F.p=u}}(la&3)!==0&&jl(),Ni(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Uf?To++:(To=0,Uf=e):To=0,bo(0)}}function z_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function jl(){return P_(),F_(),I_(),B_()}function B_(){if(pn!==5)return!1;var e=Ba,n=Df;Df=0;var a=Is(la),r=N.T,u=F.p;try{F.p=32>a?32:a,N.T=null,a=wf,wf=null;var f=Ba,_=la;if(pn=0,cr=Ba=null,la=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,S_(f.current),g_(f,f.current,_,a),Ue=A,bo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{F.p=u,N.T=r,z_(e,n)}}function H_(e,n,a){n=si(a,n),n=cf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Dn(e,2),Ni(e))}function Fe(e,n,a){if(e.tag===3)H_(e,e,a);else for(;n!==null;){if(n.tag===3){H_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){e=si(a,e),a=Gm(2),r=La(n,a,2),r!==null&&(Vm(a,r,n,e),Dn(r,2),Ni(r));break}}n=n.return}}function Of(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Fx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Af=!0,u.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&(Je===4||Je===3&&(xe&62914560)===xe&&300>E()-Vl?(Ue&2)===0&&ur(e,0):Rf|=a,lr===xe&&(lr=0)),Ni(e)}function G_(e,n){n===0&&(n=Oe()),e=us(e,n),e!==null&&(Dn(e,n),Ni(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),G_(e,a)}function Xx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G_(e,a)}function kx(e,n){return ye(e,n)}var Zl=null,hr=null,Pf=!1,Kl=!1,Ff=!1,Ga=0;function Ni(e){e!==hr&&e.next===null&&(hr===null?Zl=hr=e:hr=hr.next=e),Kl=!0,Pf||(Pf=!0,Yx())}function bo(e,n){if(!Ff&&Kl){Ff=!0;do for(var a=!1,r=Zl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,W_(r,f))}else f=xe,f=ct(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||zt(r,f)||(a=!0,W_(r,f));r=r.next}while(a);Ff=!1}}function Wx(){V_()}function V_(){Kl=Pf=!1;var e=0;Ga!==0&&nS()&&(e=Ga);for(var n=E(),a=null,r=Zl;r!==null;){var u=r.next,f=X_(r,n);f===0?(r.next=null,a===null?Zl=u:a.next=u,u===null&&(hr=a)):(a=r,(e!==0||(f&3)!==0)&&(Kl=!0)),r=u}pn!==0&&pn!==5||bo(e),Ga!==0&&(Ga=0)}function X_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Lt(f),A=1<<_,I=u[_];I===-1?((A&a)===0||(A&r)!==0)&&(u[_]=ne(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ve,a=xe,a=ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Le(r),Is(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return r=k_.bind(null,e),a=ye(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function k_(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var r=xe;return r=ct(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(b_(e,r,n),X_(e,E()),e.callbackNode!=null&&e.callbackNode===a?k_.bind(null,e):null)}function W_(e,n){if(jl())return null;b_(e,n,!0)}function Yx(){aS(function(){(Ue&6)!==0?ye(dt,Wx):V_()})}function If(){if(Ga===0){var e=Qs;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ga=e}return Ga}function Y_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function q_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Y_((u[hn]||null).action),_=r.submitter;_&&(n=(n=_[hn]||null)?Y_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new ll("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var I=_?q_(u,_):new FormData(u);nf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=_?q_(u,_):new FormData(u),nf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var zf=0;zf<xu.length;zf++){var Bf=xu[zf],jx=Bf.toLowerCase(),Zx=Bf[0].toUpperCase()+Bf.slice(1);Mi(jx,"on"+Zx)}Mi(Tp,"onAnimationEnd"),Mi(bp,"onAnimationIteration"),Mi(Ap,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(fx,"onTransitionRun"),Mi(hx,"onTransitionStart"),Mi(dx,"onTransitionCancel"),Mi(Rp,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function j_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(A=r[_],I=A.instance,J=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=I}}}}function ge(e,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=e+"__bubble";a.has(r)||(Z_(n,e,2,!1),a.add(r))}function Hf(e,n,a){var r=0;n&&(r|=4),Z_(a,e,r,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[Ql]){e[Ql]=!0,st.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Hf(a,!1,e),Hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Hf("selectionchange",!1,n))}}function Z_(e,n,a,r){switch(Tg(n)){case 2:var u=TS;break;case 8:u=bS;break;default:u=nh}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Vf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Ea(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}A=A.parentNode}}r=r.return}tp(function(){var J=f,ft=au(a),_t=[];t:{var it=Cp.get(e);if(it!==void 0){var rt=ll,Ht=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":rt=Xv;break;case"focusin":Ht="focus",rt=uu;break;case"focusout":Ht="blur",rt=uu;break;case"beforeblur":case"afterblur":rt=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Yv;break;case Tp:case bp:case Ap:rt=Ov;break;case Rp:rt=jv;break;case"scroll":case"scrollend":rt=Dv;break;case"wheel":rt=Kv;break;case"copy":case"cut":case"paste":rt=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=sp;break;case"toggle":case"beforetoggle":rt=Jv}var Qt=(n&4)!==0,He=!Qt&&(e==="scroll"||e==="scrollend"),j=Qt?it!==null?it+"Capture":null:it;Qt=[];for(var X=J,Q;X!==null;){var mt=X;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||j===null||(mt=qr(X,j),mt!=null&&Qt.push(Ro(X,mt,Q))),He)break;X=X.return}0<Qt.length&&(it=new rt(it,Ht,null,a,ft),_t.push({event:it,listeners:Qt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==iu&&(Ht=a.relatedTarget||a.fromElement)&&(Ea(Ht)||Ht[Wi]))break t;if((rt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=J,Ht=Ht?Ea(Ht):null,Ht!==null&&(He=c(Ht),Qt=Ht.tag,Ht!==He||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(rt=null,Ht=J),rt!==Ht)){if(Qt=ip,mt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=sp,mt="onPointerLeave",j="onPointerEnter",X="pointer"),He=rt==null?it:rs(rt),Q=Ht==null?it:rs(Ht),it=new Qt(mt,X+"leave",rt,a,ft),it.target=He,it.relatedTarget=Q,mt=null,Ea(ft)===J&&(Qt=new Qt(j,X+"enter",Ht,a,ft),Qt.target=Q,Qt.relatedTarget=He,mt=Qt),He=mt,rt&&Ht)e:{for(Qt=Qx,j=rt,X=Ht,Q=0,mt=j;mt;mt=Qt(mt))Q++;mt=0;for(var Kt=X;Kt;Kt=Qt(Kt))mt++;for(;0<Q-mt;)j=Qt(j),Q--;for(;0<mt-Q;)X=Qt(X),mt--;for(;Q--;){if(j===X||X!==null&&j===X.alternate){Qt=j;break e}j=Qt(j),X=Qt(X)}Qt=null}else Qt=null;rt!==null&&K_(_t,it,rt,Qt,!1),Ht!==null&&He!==null&&K_(_t,He,Ht,Qt,!0)}}t:{if(it=J?rs(J):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Ae=dp;else if(fp(it))if(pp)Ae=lx;else{Ae=rx;var Yt=sx}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Bs(J.elementType)&&(Ae=dp):Ae=ox;if(Ae&&(Ae=Ae(e,J))){hp(_t,Ae,a,ft);break t}Yt&&Yt(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&xi(it,"number",it.value)}switch(Yt=J?rs(J):window,e){case"focusin":(fp(Yt)||Yt.contentEditable==="true")&&(Xs=Yt,_u=J,eo=null);break;case"focusout":eo=_u=Xs=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,yp(_t,a,ft);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":yp(_t,a,ft)}var ue;if(hu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vs?cp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(rp&&a.locale!=="ko"&&(Vs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vs&&(ue=ep()):(ba=ft,ou="value"in ba?ba.value:ba.textContent,Vs=!0)),Yt=Jl(J,Se),0<Yt.length&&(Se=new ap(Se,e,null,a,ft),_t.push({event:Se,listeners:Yt}),ue?Se.data=ue:(ue=up(a),ue!==null&&(Se.data=ue)))),(ue=tx?ex(e,a):nx(e,a))&&(Se=Jl(J,"onBeforeInput"),0<Se.length&&(Yt=new ap("onBeforeInput","beforeinput",null,a,ft),_t.push({event:Yt,listeners:Se}),Yt.data=ue)),qx(_t,e,J,a,ft)}j_(_t,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(e,a),u!=null&&r.unshift(Ro(e,u,f)),u=qr(e,n),u!=null&&r.push(Ro(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Qx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K_(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||J===null||(I=J,u?(J=qr(a,f),J!=null&&_.unshift(Ro(a,J,I))):u||(J=qr(a,f),J!=null&&_.push(Ro(a,J,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Q_(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function J_(e,n){return n=Q_(n),Q_(e)===n}function Be(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ln(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ln(e,""+r);break;case"className":ae(e,"class",r);break;case"tabIndex":ae(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,r);break;case"style":Yi(e,r,f);break;case"data":if(n!=="object"){ae(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=qi);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ee(e,"popover",r);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rv.get(a)||a,ee(e,a,r))}}function Xf(e,n,a,r,u,f){switch(a){case"style":Yi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ln(e,r):(typeof r=="number"||typeof r=="bigint")&&Ln(e,""+r);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ee(e,a,r)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,_,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),r&&Be(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=f=_=u=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":_=ft;break;case"checked":I=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Be(e,n,r,ft,a,null)}}qn(e,f,A,I,J,_,u,!1);return;case"select":ge("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Be(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!r,n!=null?jn(e,!!r,n,!1):a!=null&&jn(e,!!r,a,!0);return;case"textarea":ge("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(e,n,_,A,a,null)}sn(e,r,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(e,n,I,r,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ge(Ao[r],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,J,r,a,null)}return;default:if(Bs(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Xf(e,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Be(e,n,A,r,a,null))}function tS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,I=null,J=null,ft=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:r.hasOwnProperty(rt)||Be(e,n,rt,null,r,_t)}}for(var it in r){var rt=r[it];if(_t=a[it],r.hasOwnProperty(it)&&(rt!=null||_t!=null))switch(it){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ft=rt;break;case"value":_=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&Be(e,n,it,rt,r,_t)}}Un(e,_,A,I,J,ft,f,u);return;case"select":rt=_=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:r.hasOwnProperty(f)||Be(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==I&&Be(e,n,u,f,r,I)}n=A,a=_,r=rt,it!=null?jn(e,!!a,it,!1):!!r!=!!a&&(n!=null?jn(e,!!a,n,!0):jn(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":it=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(e,n,_,u,r,f)}Ne(e,it,rt);return;case"option":for(var Ht in a)it=a[Ht],a.hasOwnProperty(Ht)&&it!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:Be(e,n,Ht,null,r,it));for(I in r)it=r[I],rt=a[I],r.hasOwnProperty(I)&&it!==rt&&(it!=null||rt!=null)&&(I==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Be(e,n,I,it,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)it=a[Qt],a.hasOwnProperty(Qt)&&it!=null&&!r.hasOwnProperty(Qt)&&Be(e,n,Qt,null,r,it);for(J in r)if(it=r[J],rt=a[J],r.hasOwnProperty(J)&&it!==rt&&(it!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Be(e,n,J,it,r,rt)}return;default:if(Bs(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!r.hasOwnProperty(He)&&Xf(e,n,He,void 0,r,it);for(ft in r)it=r[ft],rt=a[ft],!r.hasOwnProperty(ft)||it===rt||it===void 0&&rt===void 0||Xf(e,n,ft,it,r,rt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!r.hasOwnProperty(j)&&Be(e,n,j,null,r,it);for(_t in r)it=r[_t],rt=a[_t],!r.hasOwnProperty(_t)||it===rt||it==null&&rt==null||Be(e,n,_t,it,r,rt)}function $_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&$_(_)){for(_=0,A=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>A)break;var ft=I.transferSize,_t=I.initiatorType;ft&&$_(_t)&&(I=I.responseEnd,_+=ft*(I<A?1:(A-J)/(I-J)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kf=null,Wf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(sS)}:ng;function sS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function ag(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),_r(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);_r(n)}function sg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function oS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function rg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$?"||e.data==="$~"}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qf=null;function og(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function cg(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Yr(e)}var fi=new Map,ug=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=F.d;F.d={f:cS,r:uS,D:fS,C:hS,L:dS,m:pS,X:_S,S:mS,M:gS};function cS(){var e=ca.f(),n=Wl();return e||n}function uS(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ca.r(e)}var dr=typeof document>"u"?null:document;function fg(e,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ug.has(u)||(ug.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function fS(e){ca.D(e),fg("dns-prefetch",e,null)}function hS(e,n){ca.C(e,n),fg("preconnect",e,n)}function dS(e,n,a){ca.L(e,n,a);var r=dr;if(r&&e&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(e)+'"]';var f=u;switch(n){case"style":f=pr(e);break;case"script":f=mr(e)}fi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Do(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function pS(e,n){ca.m(e,n);var a=dr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(e)}if(!fi.has(f)&&(e=S({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),En(r,"link",e),k(r),a.head.appendChild(r)}}}function mS(e,n,a){ca.S(e,n,a);var r=dr;if(r&&e){var u=R(r).hoistableStyles,f=pr(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Do(f)))A.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Jf(e,a);var I=_=r.createElement("link");k(I),En(I,"link",e),I._p=new Promise(function(J,ft){I.onload=J,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ec(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function _S(e,n){ca.X(e,n);var a=dr;if(a&&e){var r=R(a).hoistableScripts,u=mr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=S({src:e,async:!0},n),(n=fi.get(u))&&$f(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function gS(e,n){ca.M(e,n);var a=dr;if(a&&e){var r=R(a).hoistableScripts,u=mr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&$f(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function hg(e,n,a,r){var u=(u=nt.current)?tc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=R(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pr(a.href);var f=R(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Do(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||vS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=R(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pr(e){return'href="'+ie(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function vS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),k(n),e.head.appendChild(n))}function mr(e){return'[src="'+ie(e)+'"]'}function wo(e){return"script[async]"+e}function pg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,k(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),k(r),En(r,"style",u),ec(r,a.precedence,e),n.instance=r;case"stylesheet":u=pr(a.href);var f=e.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=dg(a),(u=fi.get(u))&&Jf(r,u),f=(e.ownerDocument||e).createElement("link"),k(f);var _=f;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),En(f,"link",r),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=mr(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,k(u),u):(r=a,(u=fi.get(f))&&(r=S({},a),$f(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),k(u),En(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ec(r,a.precedence,e));return n.instance}function ec(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function mg(e,n,a){if(nc===null){var r=new Map,u=nc=new Map;u.set(a,r)}else u=nc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function _g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function SS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=dg(r),(u=fi.get(u))&&Jf(r,u),f=f.createElement("link"),k(f);var _=f;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),En(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var th=0;function MS(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&th===0&&(th=62500*eS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>th?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(yS,e),ac=null,ic.call(e))}function yS(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var r=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ic.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function ES(e,n,a,r,u,f,_,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function vg(e,n,a,r,u,f,_,A,I,J,ft,_t){return e=new ES(e,n,a,_,I,J,ft,_t,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Fu(f),e}function xg(e){return e?(e=Ys,e):Ys}function Sg(e,n,a,r,u,f){u=xg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(Xn(a,e,n),lo(a,e,n))}function Mg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function eh(e,n){Mg(e,n),(e=e.alternate)&&Mg(e,n)}function yg(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&Xn(n,e,67108864),eh(e,67108864)}}function Eg(e){if(e.tag===13||e.tag===31){var n=ei();n=Fs(n);var a=us(e,n);a!==null&&Xn(a,e,n),eh(e,n)}}var rc=!0;function TS(e,n,a,r){var u=N.T;N.T=null;var f=F.p;try{F.p=2,nh(e,n,a,r)}finally{F.p=f,N.T=u}}function bS(e,n,a,r){var u=N.T;N.T=null;var f=F.p;try{F.p=8,nh(e,n,a,r)}finally{F.p=f,N.T=u}}function nh(e,n,a,r){if(rc){var u=ih(r);if(u===null)Vf(e,n,r,oc,a),bg(e,r);else if(RS(u,e,n,a,r))r.stopPropagation();else if(bg(e,r),n&4&&-1<AS.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-Lt(_);A.entanglements[1]|=I,_&=~I}Ni(f),(Ue&6)===0&&(Xl=E()+500,bo(0))}}break;case 31:case 13:A=us(f,2),A!==null&&Xn(A,f,2),Wl(),eh(f,2)}if(f=ih(r),f===null&&Vf(e,n,r,oc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Vf(e,n,r,null,a)}}function ih(e){return e=au(e),ah(e)}var oc=null;function ah(e){if(oc=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function Tg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case xt:return 8;case ut:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var sh=!1,Xa=null,ka=null,Wa=null,Lo=new Map,No=new Map,Ya=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&yg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function RS(e,n,a,r,u){switch(n){case"focusin":return Xa=Oo(Xa,e,n,a,r,u),!0;case"dragenter":return ka=Oo(ka,e,n,a,r,u),!0;case"mouseover":return Wa=Oo(Wa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Oo(Lo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Oo(No.get(f)||null,e,n,a,r,u)),!0}return!1}function Ag(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zs(e.priority,function(){Eg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,zs(e.priority,function(){Eg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ih(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);iu=r,a.target.dispatchEvent(r),iu=null}else return n=Ta(a),n!==null&&yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Rg(e,n,a){lc(e)&&a.delete(n)}function CS(){sh=!1,Xa!==null&&lc(Xa)&&(Xa=null),ka!==null&&lc(ka)&&(ka=null),Wa!==null&&lc(Wa)&&(Wa=null),Lo.forEach(Rg),No.forEach(Rg)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CS)))}var uc=null;function Cg(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(ah(r||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function _r(e){function n(I){return cc(I,e)}Xa!==null&&cc(Xa,e),ka!==null&&cc(ka,e),Wa!==null&&cc(Wa,e),Lo.forEach(n),No.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[hn]||null;if(typeof f=="function")_||Cg(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[hn]||null)A=_.formAction;else if(ah(u)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Cg(a)}}}function Dg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(e){this._internalRoot=e}fc.prototype.render=rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();Sg(a,r,e,n,null,null)},fc.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sg(e.current,2,null,e,null,null),Wl(),n[Wi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Di();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Ag(e)}};var wg=t.version;if(wg!=="19.2.4")throw Error(s(527,wg,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var DS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{yt=hc.inject(DS),St=hc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Im,f=zm,_=Bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=vg(e,1,!1,null,null,a,r,null,u,f,_,Dg),e[Wi]=n.current,Gf(e),new rh(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Im,_=zm,A=Bm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=vg(e,1,!0,n,a??null,r,u,I,f,_,A,Dg),n.context=xg(null),a=n.current,r=ei(),r=Fs(r),u=Ua(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Dn(n,a),Ni(n),e[Wi]=n.current,Gf(e),new fc(n)},Fo.version="19.2.4",Fo}var Hg;function BS(){if(Hg)return ch.exports;Hg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ch.exports=zS(),ch.exports}var HS=BS();const zd="183",Or={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GS=0,Gg=1,VS=2,Bc=1,XS=2,ko=3,is=0,Wn=1,ma=2,ga=0,Pr=1,Vg=2,Xg=3,kg=4,kS=5,Ds=100,WS=101,YS=102,qS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,Yh=204,qh=205,$S=206,tM=207,eM=208,nM=209,iM=210,aM=211,sM=212,rM=213,oM=214,jh=0,Zh=1,Kh=2,Ir=3,Qh=4,Jh=5,$h=6,td=7,k0=0,lM=1,cM=2,Bi=0,W0=1,Y0=2,q0=3,j0=4,Z0=5,K0=6,Q0=7,J0=300,Ns=301,zr=302,dh=303,ph=304,Jc=306,ed=1e3,_a=1001,nd=1002,Tn=1003,uM=1004,dc=1005,Cn=1006,mh=1007,Us=1008,mi=1009,$0=1010,tv=1011,jo=1012,Bd=1013,Vi=1014,Ii=1015,xa=1016,Hd=1017,Gd=1018,Zo=1020,ev=35902,nv=35899,iv=1021,av=1022,Ci=1023,Sa=1026,Ls=1027,sv=1028,Vd=1029,Br=1030,Xd=1031,kd=1033,Hc=33776,Gc=33777,Vc=33778,Xc=33779,id=35840,ad=35841,sd=35842,rd=35843,od=36196,ld=37492,cd=37496,ud=37488,fd=37489,hd=37490,dd=37491,pd=37808,md=37809,_d=37810,gd=37811,vd=37812,xd=37813,Sd=37814,Md=37815,yd=37816,Ed=37817,Td=37818,bd=37819,Ad=37820,Rd=37821,Cd=36492,Dd=36494,wd=36495,Ud=36283,Ld=36284,Nd=36285,Od=36286,fM=3200,hM=0,dM=1,es="",di="srgb",Hr="srgb-linear",Yc="linear",Ie="srgb",gr=7680,Wg=519,pM=512,mM=513,_M=514,Wd=515,gM=516,vM=517,Yd=518,xM=519,Yg=35044,qg="300 es",zi=2e3,qc=2001;function SM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MM(){const o=jc("canvas");return o.style.display="block",o}const jg={};function Zg(...o){const t="THREE."+o.shift();console.log(t,...o)}function rv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function te(...o){o=rv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ce(...o){o=rv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Zc(...o){const t=o.join(" ");t in jg||(jg[t]=!0,te(...o))}function yM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const EM={[jh]:Zh,[Kh]:$h,[Qh]:td,[Ir]:Jh,[Zh]:jh,[$h]:Kh,[td]:Qh,[Jh]:Ir};class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kg=1234567;const Yo=Math.PI/180,Ko=180/Math.PI;function Vr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function qd(o,t){return(o%t+t)%t}function TM(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function bM(o,t,i){return o!==t?(i-o)/(t-o):0}function qo(o,t,i){return(1-i)*o+i*t}function AM(o,t,i,s){return qo(o,t,1-Math.exp(-i*s))}function RM(o,t=1){return t-Math.abs(qd(o,t*2)-t)}function CM(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function DM(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function wM(o,t){return o+Math.floor(Math.random()*(t-o+1))}function UM(o,t){return o+Math.random()*(t-o)}function LM(o){return o*(.5-Math.random())}function NM(o){o!==void 0&&(Kg=o);let t=Kg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OM(o){return o*Yo}function PM(o){return o*Ko}function FM(o){return(o&o-1)===0&&o!==0}function IM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function BM(o,t,i,s,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((t+s)/2),v=h((t+s)/2),S=c((t-s)/2),g=h((t-s)/2),y=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":o.set(p*v,m*S,m*g,p*d);break;case"YZY":o.set(m*g,p*v,m*S,p*d);break;case"ZXZ":o.set(m*S,m*g,p*v,p*d);break;case"XZX":o.set(p*v,m*T,m*y,p*d);break;case"YXY":o.set(m*y,p*v,m*T,p*d);break;case"ZYZ":o.set(m*T,m*y,p*v,p*d);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ur(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ov={DEG2RAD:Yo,RAD2DEG:Ko,generateUUID:Vr,clamp:pe,euclideanModulo:qd,mapLinear:TM,inverseLerp:bM,lerp:qo,damp:AM,pingpong:RM,smoothstep:CM,smootherstep:DM,randInt:wM,randFloat:UM,randFloatSpread:LM,seededRandom:NM,degToRad:OM,radToDeg:PM,isPowerOfTwo:FM,ceilPowerOfTwo:IM,floorPowerOfTwo:zM,setQuaternionFromProperEuler:BM,normalize:On,denormalize:Ur};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],C=c[h+3];if(S!==C||m!==g||d!==y||v!==T){let M=m*g+d*y+v*T+S*C;M<0&&(g=-g,y=-y,T=-T,C=-C,M=-M);let x=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);x=Math.sin(x*D)/P,p=Math.sin(p*D)/P,m=m*x+g*p,d=d*x+y*p,v=v*x+T*p,S=S*x+C*p}else{m=m*x+g*p,d=d*x+y*p,v=v*x+T*p,S=S*x+C*p;const D=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=D,d*=D,v*=D,S*=D}}t[i]=m,t[i+1]=d,t[i+2]=v,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=p*T+v*S+m*y-d*g,t[i+1]=m*T+v*g+d*S-p*y,t[i+2]=d*T+v*y+p*g-m*S,t[i+3]=v*T-p*S-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*v*S+d*y*T,this._y=d*y*S-g*v*T,this._z=d*v*T+g*y*S,this._w=d*v*S-g*y*T;break;case"YXZ":this._x=g*v*S+d*y*T,this._y=d*y*S-g*v*T,this._z=d*v*T-g*y*S,this._w=d*v*S+g*y*T;break;case"ZXY":this._x=g*v*S-d*y*T,this._y=d*y*S+g*v*T,this._z=d*v*T+g*y*S,this._w=d*v*S-g*y*T;break;case"ZYX":this._x=g*v*S-d*y*T,this._y=d*y*S+g*v*T,this._z=d*v*T-g*y*S,this._w=d*v*S+g*y*T;break;case"YZX":this._x=g*v*S+d*y*T,this._y=d*y*S+g*v*T,this._z=d*v*T-g*y*S,this._w=d*v*S-g*y*T;break;case"XZY":this._x=g*v*S-d*y*T,this._y=d*y*S-g*v*T,this._z=d*v*T+g*y*S,this._w=d*v*S+g*y*T;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>S){const y=2*Math.sqrt(1+s-p-S);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>S){const y=2*Math.sqrt(1+p-s-S);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+S-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Qg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Qg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),v=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new K,Qg=new as;class fe{constructor(t,i,s,l,c,h,p,m,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],y=s[5],T=s[8],C=l[0],M=l[3],x=l[6],D=l[1],P=l[4],L=l[7],H=l[2],B=l[5],z=l[8];return c[0]=h*C+p*D+m*H,c[3]=h*M+p*P+m*B,c[6]=h*x+p*L+m*z,c[1]=d*C+v*D+S*H,c[4]=d*M+v*P+S*B,c[7]=d*x+v*L+S*z,c[2]=g*C+y*D+T*H,c[5]=g*M+y*P+T*B,c[8]=g*x+y*L+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],S=v*h-p*d,g=p*m-v*c,y=d*c-h*m,T=i*S+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(l*d-v*s)*C,t[2]=(p*s-l*h)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=y*C,t[7]=(s*m-d*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(gh.makeScale(t,i)),this}rotate(t){return this.premultiply(gh.makeRotation(-t)),this}translate(t,i){return this.premultiply(gh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new fe,Jg=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$g=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HM(){const o={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Hr]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:Jg,fromXYZ:$g,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:Jg,fromXYZ:$g,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Te=HM();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class GM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{vr===void 0&&(vr=jc("canvas")),vr.width=t.width,vr.height=t.height;const l=vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let XM=0;const xh=new K;class Fn extends Os{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=_a,l=_a,c=Cn,h=Us,p=Ci,m=mi,d=Fn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Vr(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){te(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ed:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ed:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=J0;Fn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],v=m[4],S=m[8],g=m[1],y=m[5],T=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,L=(y+1)/2,H=(x+1)/2,B=(v+g)/4,z=(S+C)/4,b=(T+M)/4;return P>L&&P>H?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=B/s,c=z/s):L>H?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=B/l,c=b/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=b/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(S-C)*(S-C)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(S-C)/D,this.z=(g-v)/D,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Os{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Fn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends kM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lv extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t,i,s,l,c,h,p,m,d,v,S,g,y,T,C,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,v,S,g,y,T,C,M)}set(t,i,s,l,c,h,p,m,d,v,S,g,y,T,C,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=y,x[7]=T,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/xr.setFromMatrixColumn(t,0).length(),c=1/xr.setFromMatrixColumn(t,1).length(),h=1/xr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=h*v,y=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=y+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*v,y=m*S,T=d*v,C=d*S;i[0]=g+C*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=y*p-T,i[6]=C+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*v,y=m*S,T=d*v,C=d*S;i[0]=g-C*p,i[4]=-h*S,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*v,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*v,y=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=T*d-y,i[8]=g*d+C,i[1]=m*S,i[5]=C*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=C-g*S,i[8]=T*S+y,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=y*S+T,i[10]=g-C*S}else if(t.order==="XZY"){const g=h*m,y=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+C,i[5]=h*v,i[9]=y*S-T,i[2]=T*S-y,i[6]=p*v,i[10]=C*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YM,t,qM)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(s,ni),ja.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(s,ni)),ja.normalize(),pc.crossVectors(ni,ja),l[0]=ja.x,l[4]=pc.x,l[8]=ni.x,l[1]=ja.y,l[5]=pc.y,l[9]=ni.y,l[2]=ja.z,l[6]=pc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],y=s[13],T=s[2],C=s[6],M=s[10],x=s[14],D=s[3],P=s[7],L=s[11],H=s[15],B=l[0],z=l[4],b=l[8],w=l[12],pt=l[1],G=l[5],tt=l[9],at=l[13],lt=l[2],$=l[6],N=l[10],F=l[14],ot=l[3],ht=l[7],Et=l[11],O=l[15];return c[0]=h*B+p*pt+m*lt+d*ot,c[4]=h*z+p*G+m*$+d*ht,c[8]=h*b+p*tt+m*N+d*Et,c[12]=h*w+p*at+m*F+d*O,c[1]=v*B+S*pt+g*lt+y*ot,c[5]=v*z+S*G+g*$+y*ht,c[9]=v*b+S*tt+g*N+y*Et,c[13]=v*w+S*at+g*F+y*O,c[2]=T*B+C*pt+M*lt+x*ot,c[6]=T*z+C*G+M*$+x*ht,c[10]=T*b+C*tt+M*N+x*Et,c[14]=T*w+C*at+M*F+x*O,c[3]=D*B+P*pt+L*lt+H*ot,c[7]=D*z+P*G+L*$+H*ht,c[11]=D*b+P*tt+L*N+H*Et,c[15]=D*w+P*at+L*F+H*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],v=t[2],S=t[6],g=t[10],y=t[14],T=t[3],C=t[7],M=t[11],x=t[15],D=m*y-d*g,P=p*y-d*S,L=p*g-m*S,H=h*y-d*v,B=h*g-m*v,z=h*S-p*v;return i*(C*D-M*P+x*L)-s*(T*D-M*H+x*B)+l*(T*P-C*H+x*z)-c*(T*L-C*B+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],S=t[9],g=t[10],y=t[11],T=t[12],C=t[13],M=t[14],x=t[15],D=i*p-s*h,P=i*m-l*h,L=i*d-c*h,H=s*m-l*p,B=s*d-c*p,z=l*d-c*m,b=v*C-S*T,w=v*M-g*T,pt=v*x-y*T,G=S*M-g*C,tt=S*x-y*C,at=g*x-y*M,lt=D*at-P*tt+L*G+H*pt-B*w+z*b;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/lt;return t[0]=(p*at-m*tt+d*G)*$,t[1]=(l*tt-s*at-c*G)*$,t[2]=(C*z-M*B+x*H)*$,t[3]=(g*B-S*z-y*H)*$,t[4]=(m*pt-h*at-d*w)*$,t[5]=(i*at-l*pt+c*w)*$,t[6]=(M*L-T*z-x*P)*$,t[7]=(v*z-g*L+y*P)*$,t[8]=(h*tt-p*pt+d*b)*$,t[9]=(s*pt-i*tt-c*b)*$,t[10]=(T*B-C*L+x*D)*$,t[11]=(S*L-v*B-y*D)*$,t[12]=(p*w-h*G-m*b)*$,t[13]=(i*G-s*w+l*b)*$,t[14]=(C*P-T*H-M*D)*$,t[15]=(v*H-S*P+g*D)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,S=p+p,g=c*d,y=c*v,T=c*S,C=h*v,M=h*S,x=p*S,D=m*d,P=m*v,L=m*S,H=s.x,B=s.y,z=s.z;return l[0]=(1-(C+x))*H,l[1]=(y+L)*H,l[2]=(T-P)*H,l[3]=0,l[4]=(y-L)*B,l[5]=(1-(g+x))*B,l[6]=(M+D)*B,l[7]=0,l[8]=(T+P)*z,l[9]=(M-D)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ti.copy(this);const d=1/h,v=1/p,S=1/m;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=S,Ti.elements[9]*=S,Ti.elements[10]*=S,i.setFromRotationMatrix(Ti),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=zi,m=!1){const d=this.elements,v=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(p===zi)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===qc)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=zi,m=!1){const d=this.elements,v=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(p===zi)T=-2/(h-c),C=-(h+c)/(h-c);else if(p===qc)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const xr=new K,Ti=new nn,YM=new K(0,0,0),qM=new K(1,1,1),ja=new K,pc=new K,ni=new K,t0=new nn,e0=new as;class Ma{constructor(t=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-pe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return t0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return e0.setFromEuler(this),this.setFromQuaternion(e0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const n0=new K,Sr=new as,ua=new nn,mc=new K,Io=new K,ZM=new K,KM=new as,i0=new K(1,0,0),a0=new K(0,1,0),s0=new K(0,0,1),r0={type:"added"},QM={type:"removed"},Mr={type:"childadded",child:null},Sh={type:"childremoved",child:null};class Yn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new K,i=new Ma,s=new as,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(i0,t)}rotateY(t){return this.rotateOnAxis(a0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,i){return n0.copy(t).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(i0,t)}translateY(t){return this.translateOnAxis(a0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Io,mc,this.up):ua.lookAt(mc,Io,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ua),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r0),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QM),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r0),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),v=h(t.images),S=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new K(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _c extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},gc={h:0,s:0,l:0};function yh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=qd(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=yh(h,c,t+1/3),this.g=yh(h,c,t),this.b=yh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function s(c){c!==void 0&&parseFloat(c)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:te("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const s=uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Te.workingToColorSpace(Rn.copy(this),t),Math.round(pe(Rn.r*255,0,255))*65536+Math.round(pe(Rn.g*255,0,255))*256+Math.round(pe(Rn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=d,t.l=v,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=di){Te.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,l=Rn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(gc);const s=qo(Za.h,gc.h,i),l=qo(Za.s,gc.s,i),c=qo(Za.l,gc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new De;De.NAMES=uv;class $M extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bi=new K,fa=new K,Eh=new K,ha=new K,yr=new K,Er=new K,o0=new K,Th=new K,bh=new K,Ah=new K,Rh=new en,Ch=new en,Dh=new en;class Ri{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){bi.subVectors(l,i),fa.subVectors(s,i),Eh.subVectors(t,i);const h=bi.dot(bi),p=bi.dot(fa),m=bi.dot(Eh),d=fa.dot(fa),v=fa.dot(Eh),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,y=(d*m-p*v)*g,T=(h*v-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Rh.setScalar(0),Ch.setScalar(0),Dh.setScalar(0),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Rh,c.x),h.addScaledVector(Ch,c.y),h.addScaledVector(Dh,c.z),h}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),fa.subVectors(t,i),bi.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),bi.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;yr.subVectors(l,s),Er.subVectors(c,s),Th.subVectors(t,s);const m=yr.dot(Th),d=Er.dot(Th);if(m<=0&&d<=0)return i.copy(s);bh.subVectors(t,l);const v=yr.dot(bh),S=Er.dot(bh);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(yr,h);Ah.subVectors(t,c);const y=yr.dot(Ah),T=Er.dot(Ah);if(T>=0&&y<=T)return i.copy(c);const C=y*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Er,p);const M=v*T-y*S;if(M<=0&&S-v>=0&&y-T>=0)return o0.subVectors(c,l),p=(S-v)/(S-v+(y-T)),i.copy(l).addScaledVector(o0,p);const x=1/(M+C+g);return h=C*x,p=g*x,i.copy(s).addScaledVector(yr,h).addScaledVector(Er,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),xc.subVectors(this.max,zo),Tr.subVectors(t.a,zo),br.subVectors(t.b,zo),Ar.subVectors(t.c,zo),Ka.subVectors(br,Tr),Qa.subVectors(Ar,br),Es.subVectors(Tr,Ar);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Es.z,Es.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Es.z,0,-Es.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Es.y,Es.x,0];return!wh(i,Tr,br,Ar,xc)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,Tr,br,Ar,xc))?!1:(Sc.crossVectors(Ka,Qa),i=[Sc.x,Sc.y,Sc.z],wh(i,Tr,br,Ar,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new K,new K,new K,new K,new K,new K,new K,new K],Ai=new K,vc=new Jo,Tr=new K,br=new K,Ar=new K,Ka=new K,Qa=new K,Es=new K,zo=new K,xc=new K,Sc=new K,Ts=new K;function wh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ts.fromArray(o,c);const p=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),d=i.dot(Ts),v=s.dot(Ts);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const fn=new K,Mc=new de;let ty=0;class Gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ty++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Yg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ur(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=On(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ur(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ur(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ur(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ur(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yg&&(t.usage=this.usage),t}}class fv extends Gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class hv extends Gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class In extends Gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ey=new Jo,Bo=new K,Uh=new K;class $c{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ey.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Uh)),this.expandByPoint(Bo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ny=0;const hi=new nn,Lh=new Yn,Rr=new K,ii=new Jo,Ho=new Jo,xn=new K;class _i extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(SM(t)?hv:fv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new In(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Ho.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ii.min,Ho.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Ho.max),ii.expandByPoint(xn)):(ii.expandByPoint(Ho.min),ii.expandByPoint(Ho.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)xn.fromBufferAttribute(p,d),m&&(Rr.fromBufferAttribute(t,d),xn.add(Rr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new K,m[b]=new K;const d=new K,v=new K,S=new K,g=new de,y=new de,T=new de,C=new K,M=new K;function x(b,w,pt){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,w),S.fromBufferAttribute(s,pt),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,w),T.fromBufferAttribute(c,pt),v.sub(d),S.sub(d),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(G),M.copy(S).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(G),p[b].add(C),p[w].add(C),p[pt].add(C),m[b].add(M),m[w].add(M),m[pt].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let b=0,w=D.length;b<w;++b){const pt=D[b],G=pt.start,tt=pt.count;for(let at=G,lt=G+tt;at<lt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const P=new K,L=new K,H=new K,B=new K;function z(b){H.fromBufferAttribute(l,b),B.copy(H);const w=p[b];P.copy(w),P.sub(H.multiplyScalar(H.dot(w))).normalize(),L.crossVectors(B,w);const G=L.dot(m[b])<0?-1:1;h.setXYZW(b,P.x,P.y,P.z,G)}for(let b=0,w=D.length;b<w;++b){const pt=D[b],G=pt.start,tt=pt.count;for(let at=G,lt=G+tt;at<lt;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,p=new K,m=new K,d=new K,v=new K,S=new K;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let y=0,T=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?y=m[C]*p.data.stride+p.offset:y=m[C]*v;for(let x=0;x<v;x++)g[T++]=d[y++]}return new Gi(g,v,S)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const y=d[S];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=t.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,y=S.length;g<y;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iy=0;class $o extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Pr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=qh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){te(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yh&&(s.blendSrc=this.blendSrc),this.blendDst!==qh&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pa=new K,Nh=new K,yc=new K,Ja=new K,Oh=new K,Ec=new K,Ph=new K;class Zd{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Nh.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Nh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yc),p=Ja.dot(this.direction),m=-Ja.dot(yc),d=Ja.lengthSq(),v=Math.abs(1-h*h);let S,g,y,T;if(v>0)if(S=h*m-p,g=h*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const C=1/v;S*=C,g*=C,y=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Nh).addScaledVector(yc,g),y}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,c){Oh.subVectors(i,t),Ec.subVectors(s,t),Ph.crossVectors(Oh,Ec);let h=this.direction.dot(Ph),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ja.subVectors(this.origin,t);const m=p*this.direction.dot(Ec.crossVectors(Ja,Ec));if(m<0)return null;const d=p*this.direction.dot(Oh.cross(Ja));if(d<0||m+d>h)return null;const v=-p*Ja.dot(Ph);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kd extends $o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const l0=new nn,bs=new Zd,Tc=new $c,c0=new K,bc=new K,Ac=new K,Rc=new K,Fh=new K,Cc=new K,u0=new K,Dc=new K;class Xi extends Yn{constructor(t=new _i,i=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(Fh.fromBufferAttribute(S,t),h?Cc.addScaledVector(Fh,v):Cc.addScaledVector(Fh.sub(i),v))}i.add(Cc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(Tc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Tc,c0)===null||bs.origin.distanceToSquared(c0)>(t.far-t.near)**2))&&(l0.copy(c).invert(),bs.copy(t.ray).applyMatrix4(l0),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const M=g[T],x=h[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,H=P;L<H;L+=3){const B=p.getX(L),z=p.getX(L+1),b=p.getX(L+2);l=wc(this,x,t,s,d,v,S,B,z,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=T,x=C;M<x;M+=3){const D=p.getX(M),P=p.getX(M+1),L=p.getX(M+2);l=wc(this,h,t,s,d,v,S,D,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const M=g[T],x=h[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=D,H=P;L<H;L+=3){const B=L,z=L+1,b=L+2;l=wc(this,x,t,s,d,v,S,B,z,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=T,x=C;M<x;M+=3){const D=M,P=M+1,L=M+2;l=wc(this,h,t,s,d,v,S,D,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ay(o,t,i,s,l,c,h,p){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===is,p),m===null)return null;Dc.copy(p),Dc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Dc);return d<i.near||d>i.far?null:{distance:d,point:Dc.clone(),object:o}}function wc(o,t,i,s,l,c,h,p,m,d){o.getVertexPosition(p,bc),o.getVertexPosition(m,Ac),o.getVertexPosition(d,Rc);const v=ay(o,t,i,s,bc,Ac,Rc,u0);if(v){const S=new K;Ri.getBarycoord(u0,bc,Ac,Rc,S),l&&(v.uv=Ri.getInterpolatedAttribute(l,p,m,d,S,new de)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,p,m,d,S,new de)),h&&(v.normal=Ri.getInterpolatedAttribute(h,p,m,d,S,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new K,materialIndex:0};Ri.getNormal(bc,Ac,Rc,g.normal),v.face=g,v.barycoord=S}return v}class sy extends Fn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Tn,v=Tn,S,g){super(null,h,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new K,ry=new K,oy=new fe;class ts{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ih.subVectors(s,i).cross(ry.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ih),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||oy.getNormalMatrix(t),l=this.coplanarPoint(Ih).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new $c,ly=new de(.5,.5),Uc=new K;class dv{constructor(t=new ts,i=new ts,s=new ts,l=new ts,c=new ts,h=new ts){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=zi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],y=c[7],T=c[8],C=c[9],M=c[10],x=c[11],D=c[12],P=c[13],L=c[14],H=c[15];if(l[0].setComponents(d-h,y-v,x-T,H-D).normalize(),l[1].setComponents(d+h,y+v,x+T,H+D).normalize(),l[2].setComponents(d+p,y+S,x+C,H+P).normalize(),l[3].setComponents(d-p,y-S,x-C,H-P).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(d-m,y-g,x-M,H-L).normalize();else if(l[4].setComponents(d-m,y-g,x-M,H-L).normalize(),i===zi)l[5].setComponents(d+m,y+g,x+M,H+L).normalize();else if(i===qc)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const i=ly.distanceTo(t.center);return As.radius=.7071067811865476+i,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends $o{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new K,Qc=new K,f0=new nn,Go=new Zd,Lc=new $c,zh=new K,h0=new K;class cy extends Yn{constructor(t=new _i,i=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Kc.distanceTo(Qc);t.setAttribute("lineDistance",new In(s,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,t.ray.intersectsSphere(Lc)===!1)return;f0.copy(l).invert(),Go.copy(t.ray).applyMatrix4(f0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let C=y,M=T-1;C<M;C+=d){const x=v.getX(C),D=v.getX(C+1),P=Nc(this,t,Go,m,x,D,C);P&&i.push(P)}if(this.isLineLoop){const C=v.getX(T-1),M=v.getX(y),x=Nc(this,t,Go,m,C,M,T-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let C=y,M=T-1;C<M;C+=d){const x=Nc(this,t,Go,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Nc(this,t,Go,m,T-1,y,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Nc(o,t,i,s,l,c,h){const p=o.geometry.attributes.position;if(Kc.fromBufferAttribute(p,l),Qc.fromBufferAttribute(p,c),i.distanceSqToSegment(Kc,Qc,zh,h0)>s)return;zh.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(zh);if(!(d<t.near||d>t.far))return{distance:d,point:h0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const d0=new K,p0=new K;class pv extends cy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)d0.fromBufferAttribute(i,l),p0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+d0.distanceTo(p0);t.setAttribute("lineDistance",new In(s,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mv extends Fn{constructor(t=[],i=Ns,s,l,c,h,p,m,d,v){super(t,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qo extends Fn{constructor(t,i,s=Vi,l,c,h,p=Tn,m=Tn,d,v=Sa,S=1){if(v!==Sa&&v!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class uy extends Qo{constructor(t,i=Vi,s=Ns,l,c,h=Tn,p=Tn,m,d=Sa){const v={width:t,height:t,depth:1},S=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _v extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xr extends _i{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],S=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(v,3)),this.setAttribute("uv",new In(S,2));function T(C,M,x,D,P,L,H,B,z,b,w){const pt=L/z,G=H/b,tt=L/2,at=H/2,lt=B/2,$=z+1,N=b+1;let F=0,ot=0;const ht=new K;for(let Et=0;Et<N;Et++){const O=Et*G-at;for(let q=0;q<$;q++){const gt=q*pt-tt;ht[C]=gt*D,ht[M]=O*P,ht[x]=lt,d.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[x]=B>0?1:-1,v.push(ht.x,ht.y,ht.z),S.push(q/z),S.push(1-Et/b),F+=1}}for(let Et=0;Et<b;Et++)for(let O=0;O<z;O++){const q=g+O+$*Et,gt=g+O+$*(Et+1),At=g+(O+1)+$*(Et+1),Ft=g+(O+1)+$*Et;m.push(q,gt,Ft),m.push(gt,At,Ft),ot+=6}p.addGroup(y,ot,w),y+=ot,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class tu extends _i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=t/p,g=i/m,y=[],T=[],C=[],M=[];for(let x=0;x<v;x++){const D=x*g-h;for(let P=0;P<d;P++){const L=P*S-c;T.push(L,-D,0),C.push(0,0,1),M.push(P/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<p;D++){const P=D+d*x,L=D+d*(x+1),H=D+1+d*(x+1),B=D+1+d*x;y.push(P,L,B),y.push(L,H,B)}this.setIndex(y),this.setAttribute("position",new In(T,3)),this.setAttribute("normal",new In(C,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.width,t.height,t.widthSegments,t.heightSegments)}}function Gr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Gr(o[i]);for(const l in s)t[l]=s[l]}return t}function fy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function gv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const hy={clone:Gr,merge:Pn};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends $o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=fy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class my extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _y extends $o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gy extends $o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oc=new K,Pc=new as,Oi=new K;class vv extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,Pc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Oc,Pc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new K,m0=new de,_0=new de;class pi extends vv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,m0,_0),i.subVectors(_0,m0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xv extends vv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,Dr=1;class vy extends Yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Cr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new pi(Cr,Dr,t,i);c.layers=this.layers,this.add(c);const h=new pi(Cr,Dr,t,i);h.layers=this.layers,this.add(h);const p=new pi(Cr,Dr,t,i);p.layers=this.layers,this.add(p);const m=new pi(Cr,Dr,t,i);m.layers=this.layers,this.add(m);const d=new pi(Cr,Dr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(S,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class xy extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,te("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class g0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class My extends pv{constructor(t=10,i=10,s=4473924,l=8947848){s=new De(s),l=new De(l);const c=i/2,h=t/i,p=t/2,m=[],d=[];for(let g=0,y=0,T=-p;g<=i;g++,T+=h){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const C=g===c?s:l;C.toArray(d,y),y+=3,C.toArray(d,y),y+=3,C.toArray(d,y),y+=3,C.toArray(d,y),y+=3}const v=new _i;v.setAttribute("position",new In(m,3)),v.setAttribute("color",new In(d,3));const S=new Qd({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yy extends pv{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new _i;l.setAttribute("position",new In(i,3)),l.setAttribute("color",new In(s,3));const c=new Qd({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new De,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ey extends Os{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function v0(o,t,i,s){const l=Ty(s);switch(i){case iv:return o*t;case sv:return o*t/l.components*l.byteLength;case Vd:return o*t/l.components*l.byteLength;case Br:return o*t*2/l.components*l.byteLength;case Xd:return o*t*2/l.components*l.byteLength;case av:return o*t*3/l.components*l.byteLength;case Ci:return o*t*4/l.components*l.byteLength;case kd:return o*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ad:case rd:return Math.max(o,16)*Math.max(t,8)/4;case id:case sd:return Math.max(o,8)*Math.max(t,8)/2;case od:case ld:case ud:case fd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cd:case hd:case dd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case gd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case vd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case xd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case bd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Cd:case Dd:case wd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ud:case Ld:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Nd:case Od:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ty(o){switch(o){case mi:case $0:return{byteLength:1,components:1};case jo:case tv:case xa:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Vi:case Bd:case Ii:return{byteLength:4,components:1};case ev:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);function Sv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function by(o){const t=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,v),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<S.length;y++){const T=S[g],C=S[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let y=0,T=S.length;y<T;y++){const C=S[y];o.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,By=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nE="gl_FragColor = linearToOutputTexel( gl_FragColor );",iE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ST=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Ay,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:Dy,alphatest_fragment:wy,alphatest_pars_fragment:Uy,aomap_fragment:Ly,aomap_pars_fragment:Ny,batching_pars_vertex:Oy,batching_vertex:Py,begin_vertex:Fy,beginnormal_vertex:Iy,bsdfs:zy,iridescence_fragment:By,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:ky,color_fragment:Wy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:jy,common:Zy,cube_uv_reflection_fragment:Ky,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:$y,emissivemap_fragment:tE,emissivemap_pars_fragment:eE,colorspace_fragment:nE,colorspace_pars_fragment:iE,envmap_fragment:aE,envmap_common_pars_fragment:sE,envmap_pars_fragment:rE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:lE,fog_vertex:cE,fog_pars_vertex:uE,fog_fragment:fE,fog_pars_fragment:hE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:_E,lights_pars_begin:gE,lights_toon_fragment:xE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:yE,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:bE,lights_fragment_maps:AE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:UE,map_fragment:LE,map_pars_fragment:NE,map_particle_fragment:OE,map_particle_pars_fragment:PE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:IE,morphinstance_vertex:zE,morphcolor_vertex:BE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:XE,normal_fragment_maps:kE,normal_pars_fragment:WE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:$E,packing:tT,premultiplied_alpha_fragment:eT,project_vertex:nT,dithering_fragment:iT,dithering_pars_fragment:aT,roughnessmap_fragment:sT,roughnessmap_pars_fragment:rT,shadowmap_pars_fragment:oT,shadowmap_pars_vertex:lT,shadowmap_vertex:cT,shadowmask_pars_fragment:uT,skinbase_vertex:fT,skinning_pars_vertex:hT,skinning_vertex:dT,skinnormal_vertex:pT,specularmap_fragment:mT,specularmap_pars_fragment:_T,tonemapping_fragment:gT,tonemapping_pars_fragment:vT,transmission_fragment:xT,transmission_pars_fragment:ST,uv_pars_fragment:MT,uv_pars_vertex:yT,uv_vertex:ET,worldpos_vertex:TT,background_vert:bT,background_frag:AT,backgroundCube_vert:RT,backgroundCube_frag:CT,cube_vert:DT,cube_frag:wT,depth_vert:UT,depth_frag:LT,distance_vert:NT,distance_frag:OT,equirect_vert:PT,equirect_frag:FT,linedashed_vert:IT,linedashed_frag:zT,meshbasic_vert:BT,meshbasic_frag:HT,meshlambert_vert:GT,meshlambert_frag:VT,meshmatcap_vert:XT,meshmatcap_frag:kT,meshnormal_vert:WT,meshnormal_frag:YT,meshphong_vert:qT,meshphong_frag:jT,meshphysical_vert:ZT,meshphysical_frag:KT,meshtoon_vert:QT,meshtoon_frag:JT,points_vert:$T,points_frag:tb,shadow_vert:eb,shadow_frag:nb,sprite_vert:ib,sprite_frag:ab},Ut={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Fi={basic:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Pn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Pn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Pn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Pn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Pn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Pn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Pn([Ut.common,Ut.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Pn([Ut.lights,Ut.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Fi.physical={uniforms:Pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Fc={r:0,b:0,g:0},Rs=new Ma,sb=new nn;function rb(o,t,i,s,l,c){const h=new De(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function y(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const L=D.backgroundBlurriness>0;P=t.get(P,L)}return P}function T(D){let P=!1;const L=y(D);L===null?M(h,p):L&&L.isColor&&(M(L,1),P=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,P){const L=y(P);L&&(L.isCubeTexture||L.mapping===Jc)?(d===void 0&&(d=new Xi(new Xr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Gr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Rs.copy(P.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Rs)),d.material.toneMapped=Te.getTransfer(L.colorSpace)!==Ie,(v!==L||S!==L.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=L,S=L.version,g=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Xi(new tu(2,2),new ki({name:"BackgroundMaterial",uniforms:Gr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Te.getTransfer(L.colorSpace)!==Ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||S!==L.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=L,S=L.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(Fc,gv(o)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,P,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(h,p)},render:T,addToRenderList:C,dispose:x}}function ob(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(G,tt,at,lt,$){let N=!1;const F=S(G,lt,at,tt);c!==F&&(c=F,d(c.object)),N=y(G,lt,at,$),N&&T(G,lt,at,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,L(G,tt,at,lt),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function S(G,tt,at,lt){const $=lt.wireframe===!0;let N=s[tt.id];N===void 0&&(N={},s[tt.id]=N);const F=G.isInstancedMesh===!0?G.id:0;let ot=N[F];ot===void 0&&(ot={},N[F]=ot);let ht=ot[at.id];ht===void 0&&(ht={},ot[at.id]=ht);let Et=ht[$];return Et===void 0&&(Et=g(m()),ht[$]=Et),Et}function g(G){const tt=[],at=[],lt=[];for(let $=0;$<i;$++)tt[$]=0,at[$]=0,lt[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:at,attributeDivisors:lt,object:G,attributes:{},index:null}}function y(G,tt,at,lt){const $=c.attributes,N=tt.attributes;let F=0;const ot=at.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const O=$[ht];let q=N[ht];if(q===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;F++}return c.attributesNum!==F||c.index!==lt}function T(G,tt,at,lt){const $={},N=tt.attributes;let F=0;const ot=at.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let O=N[ht];O===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),$[ht]=q,F++}c.attributes=$,c.attributesNum=F,c.index=lt}function C(){const G=c.newAttributes;for(let tt=0,at=G.length;tt<at;tt++)G[tt]=0}function M(G){x(G,0)}function x(G,tt){const at=c.newAttributes,lt=c.enabledAttributes,$=c.attributeDivisors;at[G]=1,lt[G]===0&&(o.enableVertexAttribArray(G),lt[G]=1),$[G]!==tt&&(o.vertexAttribDivisor(G,tt),$[G]=tt)}function D(){const G=c.newAttributes,tt=c.enabledAttributes;for(let at=0,lt=tt.length;at<lt;at++)tt[at]!==G[at]&&(o.disableVertexAttribArray(at),tt[at]=0)}function P(G,tt,at,lt,$,N,F){F===!0?o.vertexAttribIPointer(G,tt,at,$,N):o.vertexAttribPointer(G,tt,at,lt,$,N)}function L(G,tt,at,lt){C();const $=lt.attributes,N=at.getAttributes(),F=tt.defaultAttributeValues;for(const ot in N){const ht=N[ot];if(ht.location>=0){let Et=$[ot];if(Et===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(Et=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(Et=G.instanceColor)),Et!==void 0){const O=Et.normalized,q=Et.itemSize,gt=t.get(Et);if(gt===void 0)continue;const At=gt.buffer,Ft=gt.type,nt=gt.bytesPerElement,vt=Ft===o.INT||Ft===o.UNSIGNED_INT||Et.gpuType===Bd;if(Et.isInterleavedBufferAttribute){const Tt=Et.data,Vt=Tt.stride,Zt=Et.offset;if(Tt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<ht.locationSize;Jt++)x(ht.location+Jt,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Jt=0;Jt<ht.locationSize;Jt++)M(ht.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<ht.locationSize;Jt++)P(ht.location+Jt,q/ht.locationSize,Ft,O,Vt*nt,(Zt+q/ht.locationSize*Jt)*nt,vt)}else{if(Et.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)x(ht.location+Tt,Et.meshPerAttribute);G.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)M(ht.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<ht.locationSize;Tt++)P(ht.location+Tt,q/ht.locationSize,Ft,O,q*nt,q/ht.locationSize*Tt*nt,vt)}}else if(F!==void 0){const O=F[ot];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(ht.location,O);break;case 3:o.vertexAttrib3fv(ht.location,O);break;case 4:o.vertexAttrib4fv(ht.location,O);break;default:o.vertexAttrib1fv(ht.location,O)}}}}D()}function H(){w();for(const G in s){const tt=s[G];for(const at in tt){const lt=tt[at];for(const $ in lt){const N=lt[$];for(const F in N)v(N[F].object),delete N[F];delete lt[$]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const tt=s[G.id];for(const at in tt){const lt=tt[at];for(const $ in lt){const N=lt[$];for(const F in N)v(N[F].object),delete N[F];delete lt[$]}}delete s[G.id]}function z(G){for(const tt in s){const at=s[tt];for(const lt in at){const $=at[lt];if($[G.id]===void 0)continue;const N=$[G.id];for(const F in N)v(N[F].object),delete N[F];delete $[G.id]}}}function b(G){for(const tt in s){const at=s[tt],lt=G.isInstancedMesh===!0?G.id:0,$=at[lt];if($!==void 0){for(const N in $){const F=$[N];for(const ot in F)v(F[ot].object),delete F[ot];delete $[N]}delete at[lt],Object.keys(at).length===0&&delete s[tt]}}}function w(){pt(),h=!0,c!==l&&(c=l,d(c.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:w,resetDefaultState:pt,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function lb(o,t,i){let s;function l(d){s=d}function c(d,v){o.drawArrays(s,d,v),i.update(v,s,1)}function h(d,v,S){S!==0&&(o.drawArraysInstanced(s,d,v,S),i.update(v,s,S))}function p(d,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,v,0,S);let y=0;for(let T=0;T<S;T++)y+=v[T];i.update(y,s,1)}function m(d,v,S,g){if(S===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<d.length;T++)h(d[T],v[T],g[T]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,v,0,g,0,S);let T=0;for(let C=0;C<S;C++)T+=v[C]*g[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function cb(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ci&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==mi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!b)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(te("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:L,maxSamples:H,samples:B}}function ub(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ts,p=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||l;return l=g,s=S.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,y){const T=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,x=o.get(S);if(!l||T===null||T.length===0||c&&!M)c?v(null):d();else{const D=c?0:s,P=D*4;let L=x.clippingState||null;m.value=L,L=v(T,g,P,y);for(let H=0;H!==P;++H)L[H]=i[H];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(S,g,y,T){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const x=y+C*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,L=y;P!==C;++P,L+=4)h.copy(S[P]).applyMatrix4(D,p),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const ns=4,x0=[.125,.215,.35,.446,.526,.582],ws=20,fb=256,Vo=new xv,S0=new De;let Bh=null,Hh=0,Gh=0,Vh=!1;const hb=new K;class M0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=hb}=c;Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:xa,format:Ci,colorSpace:Hr,depthBuffer:!1},l=y0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=db(c)),this._blurMaterial=mb(c,t,i),this._ggxMaterial=pb(c,t,i)}return l}_compileMaterial(t){const i=new Xi(new _i,t);this._renderer.compile(i,Vo)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(S0),S.toneMapping=Bi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new Xr,new Kd({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,x=!0):(M.color.copy(S0),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[P],c.y,c.z)):L===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[P]));const H=this._cubeSize;wr(l,L*H,P>2?H:0,H,H),S.setRenderTarget(l),x&&S.render(C,m),S.render(t,m)}S.toneMapping=y,S.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ns||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,y=S*g,{_lodMax:T}=this,C=this._sizeLods[s],M=3*C*(s>T-ns?s-T+ns:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,wr(c,M,x,3*C,2*C),l.setRenderTarget(c),l.render(p,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,wr(t,M,x,3*C,2*C),l.setRenderTarget(t),l.render(p,Vo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ws-1),C=c/T,M=isFinite(c)?1+Math.floor(v*C):ws;M>ws&&te(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const x=[];let D=0;for(let z=0;z<ws;++z){const b=z/C,w=Math.exp(-b*b/2);x.push(w),z===0?D+=w:z<M&&(D+=2*w)}for(let z=0;z<x.length;z++)x[z]=x[z]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=T,g.mipInt.value=P-s;const L=this._sizeLods[l],H=3*L*(l>P-ns?l-P+ns:0),B=4*(this._cubeSize-L);wr(i,H,B,3*L,2*L),m.setRenderTarget(i),m.render(S,Vo)}}function db(o){const t=[],i=[],s=[];let l=o;const c=o-ns+1+x0.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>o-ns?m=x0[h-o+ns-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,T=6,C=3,M=2,x=1,D=new Float32Array(C*T*y),P=new Float32Array(M*T*y),L=new Float32Array(x*T*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,b=B>2?0:-1,w=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];D.set(w,C*T*B),P.set(g,M*T*B);const pt=[B,B,B,B,B,B];L.set(pt,x*T*B)}const H=new _i;H.setAttribute("position",new Gi(D,C)),H.setAttribute("uv",new Gi(P,M)),H.setAttribute("faceIndex",new Gi(L,x)),s.push(new Xi(H,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function y0(o,t,i){const s=new Hi(o,t,i);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function pb(o,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function mb(o,t,i){const s=new Float32Array(ws),l=new K(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function E0(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function T0(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mv extends Hi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xr(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ga});c.uniforms.tEquirect.value=i;const h=new Xi(l,c),p=i.minFilter;return i.minFilter===Us&&(i.minFilter=Cn),new vy(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function _b(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===dh||y===ph)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Mv(T.height);return C.fromEquirectangularTexture(o,g),t.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===dh||y===ph,C=y===Ns||y===zr;if(T||C){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new M0(o)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return T&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new M0(o)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function p(g,y){return y===dh?g.mapping=Ns:y===ph&&(g.mapping=zr),g}function m(g){let y=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function gb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zc("WebGLRenderer: "+s+" extension not supported."),l}}}function vb(o,t,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function d(S){const g=[],y=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(y!==null){const D=y.array;C=y.version;for(let P=0,L=D.length;P<L;P+=3){const H=D[P+0],B=D[P+1],z=D[P+2];g.push(H,B,B,z,z,H)}}else{const D=T.array;C=T.version;for(let P=0,L=D.length/3-1;P<L;P+=3){const H=P+0,B=P+1,z=P+2;g.push(H,B,B,z,z,H)}}const M=new(T.count>=65535?hv:fv)(g,1);M.version=C;const x=c.get(S);x&&t.remove(x),c.set(S,M)}function v(S){const g=c.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function xb(o,t,i){let s;function l(g){s=g}let c,h;function p(g){c=g.type,h=g.bytesPerElement}function m(g,y){o.drawElements(s,y,c,g*h),i.update(y,s,1)}function d(g,y,T){T!==0&&(o.drawElementsInstanced(s,y,c,g*h,T),i.update(y,s,T))}function v(g,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,T);let M=0;for(let x=0;x<T;x++)M+=y[x];i.update(M,s,1)}function S(g,y,T,C){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<g.length;x++)d(g[x]/h,y[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,C,0,T);let x=0;for(let D=0;D<T;D++)x+=y[D]*C[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function Sb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Mb(o,t,i){const s=new WeakMap,l=new en;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let pt=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",pt)};var y=pt;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let H=p.attributes.position.count*L,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*B*4*S),b=new lv(z,H,B,S);b.type=Ii,b.needsUpdate=!0;const w=L*4;for(let G=0;G<S;G++){const tt=x[G],at=D[G],lt=P[G],$=H*B*4*G;for(let N=0;N<tt.count;N++){const F=N*w;T===!0&&(l.fromBufferAttribute(tt,N),z[$+F+0]=l.x,z[$+F+1]=l.y,z[$+F+2]=l.z,z[$+F+3]=0),C===!0&&(l.fromBufferAttribute(at,N),z[$+F+4]=l.x,z[$+F+5]=l.y,z[$+F+6]=l.z,z[$+F+7]=0),M===!0&&(l.fromBufferAttribute(lt,N),z[$+F+8]=l.x,z[$+F+9]=l.y,z[$+F+10]=l.z,z[$+F+11]=lt.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new de(H,B)},s.set(p,g),p.addEventListener("dispose",pt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function yb(o,t,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,g=t.get(d,S);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const Eb={[W0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[j0]:"ACES_FILMIC_TONE_MAPPING",[K0]:"AGX_TONE_MAPPING",[Q0]:"NEUTRAL_TONE_MAPPING",[Z0]:"CUSTOM_TONE_MAPPING"};function Tb(o,t,i,s,l){const c=new Hi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Hi(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),p=new _i;p.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new In([0,2,0,0,2,0],2));const m=new my({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Xi(p,m),v=new xv(-1,1,1,-1,0,1);let S=null,g=null,y=!1,T,C=null,M=[],x=!1;this.setSize=function(D,P){c.setSize(D,P),h.setSize(D,P);for(let L=0;L<M.length;L++){const H=M[L];H.setSize&&H.setSize(D,P)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const P=c.width,L=c.height;for(let H=0;H<M.length;H++){const B=M[H];B.setSize&&B.setSize(P,L)}},this.begin=function(D,P){if(y||D.toneMapping===Bi&&M.length===0)return!1;if(C=P,P!==null){const L=P.width,H=P.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return x===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Bi,!0},this.hasRenderPass=function(){return x},this.end=function(D,P){D.toneMapping=T,y=!0;let L=c,H=h;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(D,H,L,P),z.needsSwap!==!1)){const b=L;L=H,H=b}}if(S!==D.outputColorSpace||g!==D.toneMapping){S=D.outputColorSpace,g=D.toneMapping,m.defines={},Te.getTransfer(S)===Ie&&(m.defines.SRGB_TRANSFER="");const B=Eb[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(C),D.render(d,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const yv=new Fn,Pd=new Qo(1,1),Ev=new lv,Tv=new WM,bv=new mv,b0=[],A0=[],R0=new Float32Array(16),C0=new Float32Array(9),D0=new Float32Array(4);function kr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=b0[l];if(c===void 0&&(c=new Float32Array(l),b0[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(c,p)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function nu(o,t){let i=A0[t];i===void 0&&(i=new Int32Array(t),A0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function bb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function Db(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(_n(i,s))return;D0.set(s),o.uniformMatrix2fv(this.addr,!1,D0),gn(i,s)}}function wb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(_n(i,s))return;C0.set(s),o.uniformMatrix3fv(this.addr,!1,C0),gn(i,s)}}function Ub(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(_n(i,s))return;R0.set(s),o.uniformMatrix4fv(this.addr,!1,R0),gn(i,s)}}function Lb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function Pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function Fb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function zb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function Bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function Hb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Pd.compareFunction=i.isReversedDepthBuffer()?Yd:Wd,c=Pd):c=yv,i.setTexture2D(t||c,l)}function Gb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tv,l)}function Vb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function Xb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ev,l)}function kb(o){switch(o){case 5126:return bb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Db;case 35675:return wb;case 35676:return Ub;case 5124:case 35670:return Lb;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return Pb;case 5125:return Fb;case 36294:return Ib;case 36295:return zb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Xb}}function Wb(o,t){o.uniform1fv(this.addr,t)}function Yb(o,t){const i=kr(t,this.size,2);o.uniform2fv(this.addr,i)}function qb(o,t){const i=kr(t,this.size,3);o.uniform3fv(this.addr,i)}function jb(o,t){const i=kr(t,this.size,4);o.uniform4fv(this.addr,i)}function Zb(o,t){const i=kr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Kb(o,t){const i=kr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Qb(o,t){const i=kr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Jb(o,t){o.uniform1iv(this.addr,t)}function $b(o,t){o.uniform2iv(this.addr,t)}function tA(o,t){o.uniform3iv(this.addr,t)}function eA(o,t){o.uniform4iv(this.addr,t)}function nA(o,t){o.uniform1uiv(this.addr,t)}function iA(o,t){o.uniform2uiv(this.addr,t)}function aA(o,t){o.uniform3uiv(this.addr,t)}function sA(o,t){o.uniform4uiv(this.addr,t)}function rA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Pd:h=yv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function oA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Tv,c[h])}function lA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function cA(o,t,i){const s=this.cache,l=t.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ev,c[h])}function uA(o){switch(o){case 5126:return Wb;case 35664:return Yb;case 35665:return qb;case 35666:return jb;case 35674:return Zb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return Jb;case 35667:case 35671:return $b;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class fA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kb(i.type)}}class hA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=uA(i.type)}}class dA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function w0(o,t){o.seq.push(t),o.map[t.id]=t}function pA(o,t,i){const s=o.name,l=s.length;for(Xh.lastIndex=0;;){const c=Xh.exec(s),h=Xh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){w0(i,d===void 0?new fA(p,o,t):new hA(p,o,t));break}else{let S=i.map[p];S===void 0&&(S=new dA(p),w0(i,S)),i=S}}}class kc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);pA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function U0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const mA=37297;let _A=0;function gA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const L0=new fe;function vA(o){Te._getMatrix(L0,Te.workingColorSpace,o);const t=`mat3( ${L0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function N0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+gA(o.getShaderSource(t),p)}else return c}function xA(o,t){const i=vA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const SA={[W0]:"Linear",[Y0]:"Reinhard",[q0]:"Cineon",[j0]:"ACESFilmic",[K0]:"AgX",[Q0]:"Neutral",[Z0]:"Custom"};function MA(o,t){const i=SA[t];return i===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new K;function yA(){Te.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function TA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function bA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function Wo(o){return o!==""}function O0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(o){return o.replace(AA,CA)}const RA=new Map;function CA(o,t){let i=he[t];if(i===void 0){const s=RA.get(t);if(s!==void 0)i=he[s],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Fd(i)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(o){return o.replace(DA,wA)}function wA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function I0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const UA={[Bc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function LA(o){return UA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NA={[Ns]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function OA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":NA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const PA={[zr]:"ENVMAP_MODE_REFRACTION"};function FA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":PA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IA={[k0]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[cM]:"ENVMAP_BLENDING_ADD"};function zA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":IA[o.combine]||"ENVMAP_BLENDING_NONE"}function BA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function HA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=LA(i),d=OA(i),v=FA(i),S=zA(i),g=BA(i),y=EA(i),T=TA(c),C=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Wo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Wo).join(`
`),x.length>0&&(x+=`
`)):(M=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),x=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?he.tonemapping_pars_fragment:"",i.toneMapping!==Bi?MA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,xA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=Fd(h),h=O0(h,i),h=P0(h,i),p=Fd(p),p=O0(p,i),p=P0(p,i),h=F0(h),p=F0(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+M+h,L=D+x+p,H=U0(l,l.VERTEX_SHADER,P),B=U0(l,l.FRAGMENT_SHADER,L);l.attachShader(C,H),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(H)||"",lt=l.getShaderInfoLog(B)||"",$=tt.trim(),N=at.trim(),F=lt.trim();let ot=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,B);else{const Et=N0(l,H,"vertex"),O=N0(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+Et+`
`+O)}else $!==""?te("WebGLProgram: Program Info Log:",$):(N===""||F==="")&&(ht=!1);ht&&(G.diagnostics={runnable:ot,programLog:$,vertexShader:{log:N,prefix:M},fragmentShader:{log:F,prefix:x}})}l.deleteShader(H),l.deleteShader(B),b=new kc(l,C),w=bA(l,C)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(C,mA)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_A++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=B,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new XA(t),i.set(t,s)),s}}class XA{constructor(t){this.id=GA++,this.code=t,this.usedTimes=0}}function kA(o,t,i,s,l,c){const h=new cv,p=new VA,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,w,pt,G,tt){const at=G.fog,lt=tt.geometry,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=t.get(b.envMap||$,N),ot=F&&F.mapping===Jc?F.image.height:null,ht=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&te("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,O=Et!==void 0?Et.length:0;let q=0;lt.morphAttributes.position!==void 0&&(q=1),lt.morphAttributes.normal!==void 0&&(q=2),lt.morphAttributes.color!==void 0&&(q=3);let gt,At,Ft,nt;if(ht){const Ee=Fi[ht];gt=Ee.vertexShader,At=Ee.fragmentShader}else gt=b.vertexShader,At=b.fragmentShader,p.update(b),Ft=p.getVertexShaderID(b),nt=p.getFragmentShaderID(b);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Vt=tt.isInstancedMesh===!0,Zt=tt.isBatchedMesh===!0,Jt=!!b.map,Ke=!!b.matcap,ve=!!F,me=!!b.aoMap,we=!!b.lightMap,re=!!b.bumpMap,Ze=!!b.normalMap,V=!!b.displacementMap,We=!!b.emissiveMap,ye=!!b.metalnessMap,Le=!!b.roughnessMap,Wt=b.anisotropy>0,U=b.clearcoat>0,E=b.dispersion>0,Y=b.iridescence>0,dt=b.sheen>0,xt=b.transmission>0,ut=Wt&&!!b.anisotropyMap,Xt=U&&!!b.clearcoatMap,Ct=U&&!!b.clearcoatNormalMap,jt=U&&!!b.clearcoatRoughnessMap,$t=Y&&!!b.iridescenceMap,yt=Y&&!!b.iridescenceThicknessMap,St=dt&&!!b.sheenColorMap,Nt=dt&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ot=!!b.specularColorMap,le=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,bt=!!b.gradientMap,Pt=!!b.alphaMap,Mt=b.alphaTest>0,ct=!!b.alphaHash,zt=!!b.extensions;let ne=Bi;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:gt,fragmentShader:At,defines:b.defines,customVertexShaderID:Ft,customFragmentShaderID:nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&tt._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&tt.instanceColor!==null,instancingMorph:Vt&&tt.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Hr,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:Ke,envMap:ve,envMapMode:ve&&F.mapping,envMapCubeUVHeight:ot,aoMap:me,lightMap:we,bumpMap:re,normalMap:Ze,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Ze&&b.normalMapType===dM,normalMapTangentSpace:Ze&&b.normalMapType===hM,metalnessMap:ye,roughnessMap:Le,anisotropy:Wt,anisotropyMap:ut,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:Y,iridescenceMap:$t,iridescenceThicknessMap:yt,sheen:dt,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:le,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Pr&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ct,combine:b.combine,mapUv:Jt&&T(b.map.channel),aoMapUv:me&&T(b.aoMap.channel),lightMapUv:we&&T(b.lightMap.channel),bumpMapUv:re&&T(b.bumpMap.channel),normalMapUv:Ze&&T(b.normalMap.channel),displacementMapUv:V&&T(b.displacementMap.channel),emissiveMapUv:We&&T(b.emissiveMap.channel),metalnessMapUv:ye&&T(b.metalnessMap.channel),roughnessMapUv:Le&&T(b.roughnessMap.channel),anisotropyMapUv:ut&&T(b.anisotropyMap.channel),clearcoatMapUv:Xt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Ot&&T(b.specularColorMap.channel),specularIntensityMapUv:le&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Rt&&T(b.thicknessMap.channel),alphaMapUv:Pt&&T(b.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ze||Wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&(Jt||Pt),fog:!!at,useFog:b.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||lt.attributes.normal===void 0&&Ze===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&pt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===Ie,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===Ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ma,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function M(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const pt in b.defines)w.push(pt),w.push(b.defines[pt]);return b.isRawShaderMaterial===!1&&(x(w,b),D(w,b),w.push(o.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function D(b,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),b.push(h.mask)}function P(b){const w=y[b.type];let pt;if(w){const G=Fi[w];pt=hy.clone(G.uniforms)}else pt=b.uniforms;return pt}function L(b,w){let pt=v.get(w);return pt!==void 0?++pt.usedTimes:(pt=new HA(o,w,b,l),d.push(pt),v.set(w,pt)),pt}function H(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function B(b){p.remove(b)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:L,releaseProgram:H,releaseShaderCache:B,programs:d,dispose:z}}function WA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function YA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function z0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function B0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,C,M,x){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:x},o[t]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=T,D.materialVariant=h(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=M,D.group=x),t++,D}function m(g,y,T,C,M,x){const D=p(g,y,T,C,M,x);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function d(g,y,T,C,M,x){const D=p(g,y,T,C,M,x);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function v(g,y){i.length>1&&i.sort(g||YA),s.length>1&&s.sort(y||z0),l.length>1&&l.sort(y||z0)}function S(){for(let g=t,y=o.length;g<y;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function qA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new B0,o.set(s,[h])):l>=c.length?(h=new B0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function jA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new De};break;case"SpotLight":i={position:new K,direction:new K,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function ZA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let KA=0;function QA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function JA(o){const t=new jA,i=ZA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const l=new K,c=new nn,h=new nn;function p(d){let v=0,S=0,g=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,T=0,C=0,M=0,x=0,D=0,P=0,L=0,H=0,B=0,z=0;d.sort(QA);for(let w=0,pt=d.length;w<pt;w++){const G=d[w],tt=G.color,at=G.intensity,lt=G.distance;let $=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Br?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=tt.r*at,S+=tt.g*at,g+=tt.b*at;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],at);z++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=G.shadow.matrix,D++}s.directional[y]=N,y++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(tt).multiplyScalar(at),N.distance=lt,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[C]=N;const F=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,F.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[C]=F.matrix,G.castShadow){const ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=$,L++}C++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(tt).multiplyScalar(at),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=N,M++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const F=G.shadow,ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,ot.shadowCameraNear=F.camera.near,ot.shadowCameraFar=F.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=$,s.pointShadowMatrix[T]=G.shadow.matrix,P++}s.point[T]=N,T++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(at),N.groundColor.copy(G.groundColor).multiplyScalar(at),s.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==D||b.numPointShadows!==P||b.numSpotShadows!==L||b.numSpotMaps!==H||b.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,b.directionalLength=y,b.pointLength=T,b.spotLength=C,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=D,b.numPointShadows=P,b.numSpotShadows=L,b.numSpotMaps=H,b.numLightProbes=z,s.version=KA++)}function m(d,v){let S=0,g=0,y=0,T=0,C=0;const M=v.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const P=d[x];if(P.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(P.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),T++}else if(P.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function H0(o){const t=new JA(o),i=[],s=[];function l(v){d.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function $A(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new H0(o),t.set(l,[p])):c>=h.length?(p=new H0(o),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n1=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],i1=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],G0=new nn,Xo=new K,kh=new K;function a1(o,t,i){let s=new dv;const l=new de,c=new de,h=new en,p=new _y,m=new gy,d={},v=i.maxTextureSize,S={[is]:Wn,[Wn]:is,[ma]:ma},g=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new _i;T.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Xi(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(B,z,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===XS&&(te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const w=o.getRenderTarget(),pt=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ga),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const at=x!==this.type;at&&z.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach($=>$.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,$=B.length;lt<$;lt++){const N=B[lt],F=N.shadow;if(F===void 0){te("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ot=F.getFrameExtents();l.multiply(ot),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ot.x),l.x=c.x*ot.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ot.y),l.y=c.y*ot.y,F.mapSize.y=c.y));const ht=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ht,F.map===null||at===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ko){if(N.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hi(l.x,l.y,{format:Br,type:xa,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Qo(l.x,l.y,Ii),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Sa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn}else N.isPointLight?(F.map=new Mv(l.x),F.map.depthTexture=new uy(l.x,Vi)):(F.map=new Hi(l.x,l.y),F.map.depthTexture=new Qo(l.x,l.y,Vi)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Sa,this.type===Bc?(F.map.depthTexture.compareFunction=ht?Yd:Wd,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const q=F.getViewport(O);h.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),tt.viewport(h)}if(N.isPointLight){const q=F.camera,gt=F.matrix,At=N.distance||q.far;At!==q.far&&(q.far=At,q.updateProjectionMatrix()),Xo.setFromMatrixPosition(N.matrixWorld),q.position.copy(Xo),kh.copy(q.position),kh.add(n1[O]),q.up.copy(i1[O]),q.lookAt(kh),q.updateMatrixWorld(),gt.makeTranslation(-Xo.x,-Xo.y,-Xo.z),G0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(G0,q.coordinateSystem,q.reversedDepth)}else F.updateMatrices(N);s=F.getFrustum(),L(z,b,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===ko&&D(F,b),F.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(w,pt,G)};function D(B,z){const b=t.update(C);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Hi(l.x,l.y,{format:Br,type:xa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,b,g,C,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,b,y,C,null)}function P(B,z,b,w){let pt=null;const G=b.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)pt=G;else if(pt=b.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=pt.uuid,at=z.uuid;let lt=d[tt];lt===void 0&&(lt={},d[tt]=lt);let $=lt[at];$===void 0&&($=pt.clone(),lt[at]=$,z.addEventListener("dispose",H)),pt=$}if(pt.visible=z.visible,pt.wireframe=z.wireframe,w===ko?pt.side=z.shadowSide!==null?z.shadowSide:z.side:pt.side=z.shadowSide!==null?z.shadowSide:S[z.side],pt.alphaMap=z.alphaMap,pt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,pt.map=z.map,pt.clipShadows=z.clipShadows,pt.clippingPlanes=z.clippingPlanes,pt.clipIntersection=z.clipIntersection,pt.displacementMap=z.displacementMap,pt.displacementScale=z.displacementScale,pt.displacementBias=z.displacementBias,pt.wireframeLinewidth=z.wireframeLinewidth,pt.linewidth=z.linewidth,b.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const tt=o.properties.get(pt);tt.light=b}return pt}function L(B,z,b,w,pt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&pt===ko)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld);const at=t.update(B),lt=B.material;if(Array.isArray(lt)){const $=at.groups;for(let N=0,F=$.length;N<F;N++){const ot=$[N],ht=lt[ot.materialIndex];if(ht&&ht.visible){const Et=P(B,ht,w,pt);B.onBeforeShadow(o,B,z,b,at,Et,ot),o.renderBufferDirect(b,null,at,Et,B,ot),B.onAfterShadow(o,B,z,b,at,Et,ot)}}}else if(lt.visible){const $=P(B,lt,w,pt);B.onBeforeShadow(o,B,z,b,at,$,null),o.renderBufferDirect(b,null,at,$,B,null),B.onAfterShadow(o,B,z,b,at,$,null)}}const tt=B.children;for(let at=0,lt=tt.length;at<lt;at++)L(tt[at],z,b,w,pt)}function H(B){B.target.removeEventListener("dispose",H);for(const b in d){const w=d[b],pt=B.target.uuid;pt in w&&(w[pt].dispose(),delete w[pt])}}}function s1(o,t){function i(){let W=!1;const Rt=new en;let bt=null;const Pt=new en(0,0,0,0);return{setMask:function(Mt){bt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),bt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ct,zt,ne,Oe){Oe===!0&&(Mt*=ne,ct*=ne,zt*=ne),Rt.set(Mt,ct,zt,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ct,zt,ne),Pt.copy(Rt))},reset:function(){W=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,bt=null,Pt=null,Mt=null;return{setReversed:function(ct){if(Rt!==ct){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ct){ct?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ct){bt!==ct&&!W&&(o.depthMask(ct),bt=ct)},setFunc:function(ct){if(Rt&&(ct=EM[ct]),Pt!==ct){switch(ct){case jh:o.depthFunc(o.NEVER);break;case Zh:o.depthFunc(o.ALWAYS);break;case Kh:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case Qh:o.depthFunc(o.EQUAL);break;case Jh:o.depthFunc(o.GEQUAL);break;case $h:o.depthFunc(o.GREATER);break;case td:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,bt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,bt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Oe=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!W&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,Dn,gi){(bt!==Ee||Pt!==Dn||Mt!==gi)&&(o.stencilFunc(Ee,Dn,gi),bt=Ee,Pt=Dn,Mt=gi)},setOp:function(Ee,Dn,gi){(ct!==Ee||zt!==Dn||ne!==gi)&&(o.stencilOp(Ee,Dn,gi),ct=Ee,zt=Dn,ne=gi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Oe!==Ee&&(o.clearStencil(Ee),Oe=Ee)},reset:function(){W=!1,Rt=null,bt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Oe=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g=new WeakMap,y=[],T=null,C=!1,M=null,x=null,D=null,P=null,L=null,H=null,B=null,z=new De(0,0,0),b=0,w=!1,pt=null,G=null,tt=null,at=null,lt=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ot)[1]),N=F>=1):ot.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),N=F>=2);let ht=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),gt=new en().fromArray(O),At=new en().fromArray(q);function Ft(W,Rt,bt,Pt){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<bt;zt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const nt={};nt[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Ir),re(!1),Ze(Gg),vt(o.CULL_FACE),me(ga);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Tt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Vt(W,Rt){return S[W]!==Rt?(o.bindFramebuffer(W,Rt),S[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(W,Rt){let bt=y,Pt=!1;if(W){bt=g.get(Rt),bt===void 0&&(bt=[],g.set(Rt,bt));const Mt=W.textures;if(bt.length!==Mt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,zt=Mt.length;ct<zt;ct++)bt[ct]=o.COLOR_ATTACHMENT0+ct;bt.length=Mt.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function Jt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Ke={[Ds]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[YS]:o.FUNC_REVERSE_SUBTRACT};Ke[qS]=o.MIN,Ke[jS]=o.MAX;const ve={[ZS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[Yh]:o.SRC_ALPHA,[iM]:o.SRC_ALPHA_SATURATE,[eM]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[qh]:o.ONE_MINUS_SRC_ALPHA,[nM]:o.ONE_MINUS_DST_COLOR,[tM]:o.ONE_MINUS_DST_ALPHA,[aM]:o.CONSTANT_COLOR,[sM]:o.ONE_MINUS_CONSTANT_COLOR,[rM]:o.CONSTANT_ALPHA,[oM]:o.ONE_MINUS_CONSTANT_ALPHA};function me(W,Rt,bt,Pt,Mt,ct,zt,ne,Oe,Ee){if(W===ga){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),W!==kS){if(W!==M||Ee!==w){if((x!==Ds||L!==Ds)&&(o.blendEquation(o.FUNC_ADD),x=Ds,L=Ds),Ee)switch(W){case Pr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFunc(o.ONE,o.ONE);break;case Xg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Xg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,P=null,H=null,B=null,z.set(0,0,0),b=0,M=W,w=Ee}return}Mt=Mt||Rt,ct=ct||bt,zt=zt||Pt,(Rt!==x||Mt!==L)&&(o.blendEquationSeparate(Ke[Rt],Ke[Mt]),x=Rt,L=Mt),(bt!==D||Pt!==P||ct!==H||zt!==B)&&(o.blendFuncSeparate(ve[bt],ve[Pt],ve[ct],ve[zt]),D=bt,P=Pt,H=ct,B=zt),(ne.equals(z)===!1||Oe!==b)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),z.copy(ne),b=Oe),M=W,w=!1}function we(W,Rt){W.side===ma?Tt(o.CULL_FACE):vt(o.CULL_FACE);let bt=W.side===Wn;Rt&&(bt=!bt),re(bt),W.blending===Pr&&W.transparent===!1?me(ga):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){pt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),pt=W)}function Ze(W){W!==GS?(vt(o.CULL_FACE),W!==G&&(W===Gg?o.cullFace(o.BACK):W===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=W}function V(W){W!==tt&&(N&&o.lineWidth(W),tt=W)}function We(W,Rt,bt){W?(vt(o.POLYGON_OFFSET_FILL),(at!==Rt||lt!==bt)&&(at=Rt,lt=bt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,bt))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Le(W){W===void 0&&(W=o.TEXTURE0+$-1),ht!==W&&(o.activeTexture(W),ht=W)}function Wt(W,Rt,bt){bt===void 0&&(ht===null?bt=o.TEXTURE0+$-1:bt=ht);let Pt=Et[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[bt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(ht!==bt&&(o.activeTexture(bt),ht=bt),o.bindTexture(W,Rt||nt[W]),Pt.type=W,Pt.texture=Rt)}function U(){const W=Et[ht];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function jt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function $t(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function St(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Nt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let bt=d.get(Rt);bt===void 0&&(bt=new WeakMap,d.set(Rt,bt));let Pt=bt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,W.name),bt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ht=null,Et={},S={},g=new WeakMap,y=[],T=null,C=!1,M=null,x=null,D=null,P=null,L=null,H=null,B=null,z=new De(0,0,0),b=0,w=!1,pt=null,G=null,tt=null,at=null,lt=null,gt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:vt,disable:Tt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:me,setMaterial:we,setFlipSided:re,setCullFace:Ze,setLineWidth:V,setPolygonOffset:We,setScissorTest:ye,activeTexture:Le,bindTexture:Wt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:$t,texImage3D:yt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:St,viewport:Nt,reset:le}}function r1(o,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new de,v=new WeakMap;let S;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return y?new OffscreenCanvas(U,E):jc("canvas")}function C(U,E,Y){let dt=1;const xt=Wt(U);if((xt.width>Y||xt.height>Y)&&(dt=Y/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*xt.width),Xt=Math.floor(dt*xt.height);S===void 0&&(S=T(ut,Xt));const Ct=E?T(ut,Xt):S;return Ct.width=ut,Ct.height=Xt,Ct.getContext("2d").drawImage(U,0,0,ut,Xt),te("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),Ct}else return"data"in U&&te("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,E,Y,dt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(Y===o.FLOAT&&(ut=o.R32F),Y===o.HALF_FLOAT&&(ut=o.R16F),Y===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.R8UI),Y===o.UNSIGNED_SHORT&&(ut=o.R16UI),Y===o.UNSIGNED_INT&&(ut=o.R32UI),Y===o.BYTE&&(ut=o.R8I),Y===o.SHORT&&(ut=o.R16I),Y===o.INT&&(ut=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(ut=o.RG32F),Y===o.HALF_FLOAT&&(ut=o.RG16F),Y===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RG8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RG16UI),Y===o.UNSIGNED_INT&&(ut=o.RG32UI),Y===o.BYTE&&(ut=o.RG8I),Y===o.SHORT&&(ut=o.RG16I),Y===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),Y===o.UNSIGNED_INT&&(ut=o.RGB32UI),Y===o.BYTE&&(ut=o.RGB8I),Y===o.SHORT&&(ut=o.RGB16I),Y===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),Y===o.UNSIGNED_INT&&(ut=o.RGBA32UI),Y===o.BYTE&&(ut=o.RGBA8I),Y===o.SHORT&&(ut=o.RGBA16I),Y===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=xt?Yc:Te.getTransfer(dt);Y===o.FLOAT&&(ut=o.RGBA32F),Y===o.HALF_FLOAT&&(ut=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ut=Xt===Ie?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function L(U,E){let Y;return U?E===null||E===Vi||E===Zo?Y=o.DEPTH24_STENCIL8:E===Ii?Y=o.DEPTH32F_STENCIL8:E===jo&&(Y=o.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Zo?Y=o.DEPTH_COMPONENT24:E===Ii?Y=o.DEPTH_COMPONENT32F:E===jo&&(Y=o.DEPTH_COMPONENT16),Y}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),b(E),E.isVideoTexture&&v.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),pt(E)}function b(U){const E=s.get(U);if(E.__webglInit===void 0)return;const Y=U.source,dt=g.get(Y);if(dt){const xt=dt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(U),Object.keys(dt).length===0&&g.delete(Y)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const Y=U.source,dt=g.get(Y);delete dt[E.__cacheKey],h.memory.textures--}function pt(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let xt=0;xt<E.__webglFramebuffer[dt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=U.textures;for(let dt=0,xt=Y.length;dt<xt;dt++){const ut=s.get(Y[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(Y[dt])}s.remove(U)}let G=0;function tt(){G=0}function at(){const U=G;return U>=l.maxTextures&&te("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function lt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){const Y=s.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const dt=U.image;if(dt===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Y,U,E);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function N(U,E){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){nt(Y,U,E);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function F(U,E){const Y=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){nt(Y,U,E);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function ot(U,E){const Y=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){vt(Y,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const ht={[ed]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[nd]:o.MIRRORED_REPEAT},Et={[Tn]:o.NEAREST,[uM]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[Us]:o.LINEAR_MIPMAP_LINEAR},O={[pM]:o.NEVER,[xM]:o.ALWAYS,[mM]:o.LESS,[Wd]:o.LEQUAL,[_M]:o.EQUAL,[Yd]:o.GEQUAL,[gM]:o.GREATER,[vM]:o.NOTEQUAL};function q(U,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===mh||E.magFilter===dc||E.magFilter===Us||E.minFilter===Cn||E.minFilter===mh||E.minFilter===dc||E.minFilter===Us)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ht[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ht[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ht[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==dc&&E.minFilter!==Us||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(U,E){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const dt=E.source;let xt=g.get(dt);xt===void 0&&(xt={},g.set(dt,xt));const ut=lt(E);if(ut!==U.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),xt[ut].usedTimes++;const Xt=xt[U.__cacheKey];Xt!==void 0&&(xt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(E)),U.__cacheKey=ut,U.__webglTexture=xt[ut].texture}return Y}function At(U,E,Y){return Math.floor(Math.floor(U/Y)/E)}function Ft(U,E,Y,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,dt,E.data);else{ut.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ut.length;yt++){const St=ut[Xt],Nt=ut[yt],Lt=St.start+St.count,Ot=At(Nt.start,E.width,4),le=At(St.start,E.width,4);Nt.start<=Lt+1&&Ot===le&&At(Nt.start+Nt.count-1,E.width,4)===Ot?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++Xt,ut[Xt]=Nt)}ut.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,St=ut.length;yt<St;yt++){const Nt=ut[yt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),le=Lt%E.width,W=Math.floor(Lt/E.width),Rt=Ot,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Rt,bt,Y,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function nt(U,E,Y){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const xt=gt(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+Y);const Xt=s.get(ut);if(ut.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+Y);const Ct=Te.getPrimaries(Te.workingColorSpace),jt=E.colorSpace===es?null:Te.getPrimaries(E.colorSpace),$t=E.colorSpace===es||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let yt=C(E.image,!1,l.maxTextureSize);yt=Le(E,yt);const St=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type);let Lt=P(E.internalFormat,St,Nt,E.colorSpace,E.isVideoTexture);q(dt,E);let Ot;const le=E.mipmaps,W=E.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,bt=ut.dataReady,Pt=H(E,yt);if(E.isDepthTexture)Lt=L(E.format===Ls,E.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,null));else if(E.isDataTexture)if(le.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,le[0].width,le[0].height);for(let Mt=0,ct=le.length;Mt<ct;Mt++)Ot=le[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height),bt&&Ft(E,yt,St,Nt)):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,le[0].width,le[0].height,yt.depth);for(let Mt=0,ct=le.length;Mt<ct;Mt++)if(Ot=le[Mt],E.format!==Ci)if(St!==null)if(W){if(bt)if(E.layerUpdates.size>0){const zt=v0(Ot.width,Ot.height,E.format,E.type);for(const ne of E.layerUpdates){const Oe=Ot.data.subarray(ne*zt/Ot.data.BYTES_PER_ELEMENT,(ne+1)*zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Nt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,St,Nt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,le[0].width,le[0].height);for(let Mt=0,ct=le.length;Mt<ct;Mt++)Ot=le[Mt],E.format!==Ci?St!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,Ot.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,yt.width,yt.height,yt.depth),bt)if(E.layerUpdates.size>0){const Mt=v0(yt.width,yt.height,E.format,E.type);for(const ct of E.layerUpdates){const zt=yt.data.subarray(ct*Mt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,yt.width,yt.height,1,St,Nt,zt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Lt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height);else{let Mt=yt.width,ct=yt.height;for(let zt=0;zt<Pt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Lt,Mt,ct,0,St,Nt,null),Mt>>=1,ct>>=1}}else if(le.length>0){if(W&&Rt){const Mt=Wt(le[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}for(let Mt=0,ct=le.length;Mt<ct;Mt++)Ot=le[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Nt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Lt,St,Nt,Ot);E.generateMipmaps=!1}else if(W){if(Rt){const Mt=Wt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Nt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,St,Nt,yt);M(E)&&x(dt),Xt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,Y){if(E.image.length!==6)return;const dt=gt(U,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Y);const ut=s.get(xt);if(xt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+Y);const Xt=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===es?null:Te.getPrimaries(E.colorSpace),jt=E.colorSpace===es||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!$t&&!yt?St[ct]=C(E.image[ct],!0,l.maxCubemapSize):St[ct]=yt?E.image[ct].image:E.image[ct],St[ct]=Le(E,St[ct]);const Nt=St[0],Lt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),le=P(E.internalFormat,Lt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ut.__version===void 0||dt===!0,bt=xt.dataReady;let Pt=H(E,Nt);q(o.TEXTURE_CUBE_MAP,E);let Mt;if($t){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,Nt.width,Nt.height);for(let ct=0;ct<6;ct++){Mt=St[ct].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];E.format!==Ci?Lt!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,le,ne.width,ne.height,0,ne.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,le,ne.width,ne.height,0,Lt,Ot,ne.data)}}}else{if(Mt=E.mipmaps,W&&Rt){Mt.length>0&&Pt++;const ct=Wt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(yt){W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,Lt,Ot,St[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,le,St[ct].width,St[ct].height,0,Lt,Ot,St[ct].data);for(let zt=0;zt<Mt.length;zt++){const Oe=Mt[zt].image[ct].image;W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Oe.width,Oe.height,Lt,Ot,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,le,Oe.width,Oe.height,0,Lt,Ot,Oe.data)}}else{W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Ot,St[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,le,Lt,Ot,St[ct]);for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Lt,Ot,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,le,Lt,Ot,ne.image[ct])}}}M(E)&&x(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Tt(U,E,Y,dt,xt,ut){const Xt=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),jt=P(Y.internalFormat,Xt,Ct,Y.colorSpace),$t=s.get(E),yt=s.get(Y);if(yt.__renderTarget=E,!$t.__hasExternalTextures){const St=Math.max(1,E.width>>ut),Nt=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,jt,St,Nt,E.depth,0,Xt,Ct,null):i.texImage2D(xt,ut,jt,St,Nt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,xt,yt.__webglTexture,0,V(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,xt,yt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ut=L(E.stencilBuffer,xt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ut,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let xt=0;xt<dt.length;xt++){const ut=dt[xt],Xt=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),jt=P(ut.internalFormat,Xt,Ct,ut.colorSpace);We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),jt,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(U,E,Y){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),q(o.TEXTURE_CUBE_MAP,E.depthTexture);const $t=c.convert(E.depthTexture.format),yt=c.convert(E.depthTexture.type);let St;E.depthTexture.format===Sa?St=o.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(St=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,E.width,E.height,0,$t,yt,null)}}else $(E.depthTexture,0);const ut=xt.__webglTexture,Xt=V(E),Ct=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,jt=E.depthTexture.format===Ls?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ut,0);else if(E.depthTexture.format===Ls)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function Jt(U){const E=s.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)Zt(E.__webglFramebuffer[dt],U,dt);else{const dt=U.texture.mipmaps;dt&&dt.length>0?Zt(E.__webglFramebuffer[0],U,0):Zt(E.__webglFramebuffer,U,0)}else if(Y){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[dt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,E,Y){const dt=s.get(U);E!==void 0&&Tt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&Jt(U)}function ve(U){const E=U.texture,Y=s.get(U),dt=s.get(E);U.addEventListener("dispose",z);const xt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)Y.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=s.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&We(U)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];Y.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const $t=c.convert(jt.format,jt.colorSpace),yt=c.convert(jt.type),St=P(jt.internalFormat,$t,yt,jt.colorSpace,U.isXRRenderTarget===!0),Nt=V(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,St,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),q(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(Y.__webglFramebuffer[Ct][jt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Tt(Y.__webglFramebuffer[Ct],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],yt=s.get($t);let St=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),q(St,$t),Tt(Y.__webglFramebuffer,U,$t,o.COLOR_ATTACHMENT0+Ct,St,0),M($t)&&x(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),q(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(Y.__webglFramebuffer[jt],U,E,o.COLOR_ATTACHMENT0,Ct,jt);else Tt(Y.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ct,0);M(E)&&x(Ct),i.unbindTexture()}U.depthBuffer&&Jt(U)}function me(U){const E=U.textures;for(let Y=0,dt=E.length;Y<dt;Y++){const xt=E[Y];if(M(xt)){const ut=D(U),Xt=s.get(xt).__webglTexture;i.bindTexture(ut,Xt),x(ut),i.unbindTexture()}}}const we=[],re=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const E=U.textures,Y=U.width,dt=U.height;let xt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ct=E.length>1;if(Ct)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,xt,o.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(o.COLOR_ATTACHMENT0+$t),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ut),re.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function We(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(U){const E=h.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function Le(U,E){const Y=U.colorSpace,dt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==Hr&&Y!==es&&(Te.getTransfer(Y)===Ie?(dt!==Ci||xt!==mi)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",Y)),E}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=at,this.resetTextureUnits=tt,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=ot,this.rebindTextures=Ke,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function o1(o,t){function i(s,l=es){let c;const h=Te.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Hd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$0)return o.BYTE;if(s===tv)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===Bd)return o.INT;if(s===Vi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===xa)return o.HALF_FLOAT;if(s===iv)return o.ALPHA;if(s===av)return o.RGB;if(s===Ci)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Ls)return o.DEPTH_STENCIL;if(s===sv)return o.RED;if(s===Vd)return o.RED_INTEGER;if(s===Br)return o.RG;if(s===Xd)return o.RG_INTEGER;if(s===kd)return o.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===Xc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===od||s===ld)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ud)return c.COMPRESSED_R11_EAC;if(s===fd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===hd)return c.COMPRESSED_RG11_EAC;if(s===dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===pd||s===md||s===_d||s===gd||s===vd||s===xd||s===Sd||s===Md||s===yd||s===Ed||s===Td||s===bd||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===Dd||s===wd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Cd)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ud||s===Ld||s===Nd||s===Od)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ud)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new _v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ki({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f1 extends Os{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,y=null,T=null;const C=typeof XRWebGLBinding<"u",M=new u1,x={},D=i.getContextAttributes();let P=null,L=null;const H=[],B=[],z=new de;let b=null;const w=new pi;w.viewport=new en;const pt=new pi;pt.viewport=new en;const G=[w,pt],tt=new xy;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=H[nt];return vt===void 0&&(vt=new Mh,H[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=H[nt];return vt===void 0&&(vt=new Mh,H[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=H[nt];return vt===void 0&&(vt=new Mh,H[nt]=vt),vt.getHandSpace()};function $(nt){const vt=B.indexOf(nt.inputSource);if(vt===-1)return;const Tt=H[vt];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,d||h),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function N(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",F);for(let nt=0;nt<H.length;nt++){const vt=B[nt];vt!==null&&(B[nt]=null,H[nt].disconnect(vt))}at=null,lt=null,M.reset();for(const nt in x)delete x[nt];t.setRenderTarget(P),y=null,g=null,S=null,l=null,L=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,s.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",N),l.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Vt=null,Zt=null;D.depth&&(Zt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=D.stencil?Ls:Sa,Vt=D.stencil?Zo:Vi);const Jt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Hi(g.textureWidth,g.textureHeight,{format:Ci,type:mi,depthTexture:new Qo(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Hi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(nt){for(let vt=0;vt<nt.removed.length;vt++){const Tt=nt.removed[vt],Vt=B.indexOf(Tt);Vt>=0&&(B[Vt]=null,H[Vt].disconnect(Tt))}for(let vt=0;vt<nt.added.length;vt++){const Tt=nt.added[vt];let Vt=B.indexOf(Tt);if(Vt===-1){for(let Jt=0;Jt<H.length;Jt++)if(Jt>=B.length){B.push(Tt),Vt=Jt;break}else if(B[Jt]===null){B[Jt]=Tt,Vt=Jt;break}if(Vt===-1)break}const Zt=H[Vt];Zt&&Zt.connect(Tt)}}const ot=new K,ht=new K;function Et(nt,vt,Tt){ot.setFromMatrixPosition(vt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const Vt=ot.distanceTo(ht),Zt=vt.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,Ke=Zt[14]/(Zt[10]-1),ve=Zt[14]/(Zt[10]+1),me=(Zt[9]+1)/Zt[5],we=(Zt[9]-1)/Zt[5],re=(Zt[8]-1)/Zt[0],Ze=(Jt[8]+1)/Jt[0],V=Ke*re,We=Ke*Ze,ye=Vt/(-re+Ze),Le=ye*-re;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Le),nt.translateZ(ye),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Zt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Ke+ye,U=ve+ye,E=V-Le,Y=We+(Vt-Le),dt=me*ve/U*Wt,xt=we*ve/U*Wt;nt.projectionMatrix.makePerspective(E,Y,dt,xt,Wt,U),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function O(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,Tt=nt.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),tt.near=pt.near=w.near=vt,tt.far=pt.far=w.far=Tt,(at!==tt.near||lt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),at=tt.near,lt=tt.far),tt.layers.mask=nt.layers.mask|6,w.layers.mask=tt.layers.mask&-5,pt.layers.mask=tt.layers.mask&-3;const Vt=nt.parent,Zt=tt.cameras;O(tt,Vt);for(let Jt=0;Jt<Zt.length;Jt++)O(Zt[Jt],Vt);Zt.length===2?Et(tt,w,pt):tt.projectionMatrix.copy(w.projectionMatrix),q(nt,tt,Vt)};function q(nt,vt,Tt){Tt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ko*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function At(nt,vt){if(v=vt.getViewerPose(d||h),T=vt,v!==null){const Tt=v.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Vt=!1;Tt.length!==tt.cameras.length&&(tt.cameras.length=0,Vt=!0);for(let ve=0;ve<Tt.length;ve++){const me=Tt[ve];let we=null;if(y!==null)we=y.getViewport(me);else{const Ze=S.getViewSubImage(g,me);we=Ze.viewport,ve===0&&(t.setRenderTargetTextures(L,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(L))}let re=G[ve];re===void 0&&(re=new pi,re.layers.enable(ve),re.viewport=new en,G[ve]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),ve===0&&(tt.matrix.copy(re.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Vt===!0&&tt.cameras.push(re)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const ve=S.getDepthInformation(Tt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Zt&&Zt.includes("camera-access")&&C){t.state.unbindTexture(),S=s.getBinding();for(let ve=0;ve<Tt.length;ve++){const me=Tt[ve].camera;if(me){let we=x[me];we||(we=new _v,x[me]=we);const re=S.getCameraImage(me);we.sourceTexture=re}}}}for(let Tt=0;Tt<H.length;Tt++){const Vt=B[Tt],Zt=H[Tt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}gt&&gt(nt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const Ft=new Sv;Ft.setAnimationLoop(At),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const Cs=new Ma,h1=new nn;function d1(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,gv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,P,L){x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),S(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,D,P):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=t.get(x),P=D.envMap,L=D.envMapRotation;P&&(M.envMap.value=P,Cs.copy(L),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),M.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Cs)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const D=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function p1(o,t,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const L=P.program;s.uniformBlockBinding(D,L)}function d(D,P){let L=l[D.id];L===void 0&&(T(D),L=v(D),l[D.id]=L,D.addEventListener("dispose",M));const H=P.program;s.updateUBOMapping(D,H);const B=t.render.frame;c[D.id]!==B&&(g(D),c[D.id]=B)}function v(D){const P=S();D.__bindingPointIndex=P;const L=o.createBuffer(),H=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,H,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function S(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=l[D.id],L=D.uniforms,H=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,z=L.length;B<z;B++){const b=Array.isArray(L[B])?L[B]:[L[B]];for(let w=0,pt=b.length;w<pt;w++){const G=b[w];if(y(G,B,w,H)===!0){const tt=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let lt=0;for(let $=0;$<at.length;$++){const N=at[$],F=C(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,tt+lt,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,lt),lt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,P,L,H){const B=D.value,z=P+"_"+L;if(H[z]===void 0)return typeof B=="number"||typeof B=="boolean"?H[z]=B:H[z]=B.clone(),!0;{const b=H[z];if(typeof B=="number"||typeof B=="boolean"){if(b!==B)return H[z]=B,!0}else if(b.equals(B)===!1)return b.copy(B),!0}return!1}function T(D){const P=D.uniforms;let L=0;const H=16;for(let z=0,b=P.length;z<b;z++){const w=Array.isArray(P[z])?P[z]:[P[z]];for(let pt=0,G=w.length;pt<G;pt++){const tt=w[pt],at=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,$=at.length;lt<$;lt++){const N=at[lt],F=C(N),ot=L%H,ht=ot%F.boundary,Et=ot+ht;L+=ht,Et!==0&&H-Et<F.storage&&(L+=H-Et),tt.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=L,L+=F.storage}}}const B=L%H;return B>0&&(L+=H-B),D.__size=L,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):te("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const L=h.indexOf(P.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:x}}const m1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function _1(){return Pi===null&&(Pi=new sy(m1,16,16,Br,xa),Pi.name="DFG_LUT",Pi.minFilter=Cn,Pi.magFilter=Cn,Pi.wrapS=_a,Pi.wrapT=_a,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class g1{constructor(t={}){const{canvas:i=MM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=y,M=new Set([kd,Xd,Vd]),x=new Set([mi,Vi,jo,Zo,Hd,Gd]),D=new Uint32Array(4),P=new Int32Array(4);let L=null,H=null;const B=[],z=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let pt=!1;this._outputColorSpace=di;let G=0,tt=0,at=null,lt=-1,$=null;const N=new en,F=new en;let ot=null;const ht=new De(0);let Et=0,O=i.width,q=i.height,gt=1,At=null,Ft=null;const nt=new en(0,0,O,q),vt=new en(0,0,O,q);let Tt=!1;const Vt=new dv;let Zt=!1,Jt=!1;const Ke=new nn,ve=new K,me=new en,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ze(){return at===null?gt:1}let V=s;function We(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),V===null){const k="webgl2";if(V=We(k,R),V===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let ye,Le,Wt,U,E,Y,dt,xt,ut,Xt,Ct,jt,$t,yt,St,Nt,Lt,Ot,le,W,Rt,bt,Pt;function Mt(){ye=new gb(V),ye.init(),Rt=new o1(V,ye),Le=new cb(V,ye,t,Rt),Wt=new s1(V,ye),Le.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),U=new Sb(V),E=new WA,Y=new r1(V,ye,Wt,E,Le,Rt,U),dt=new _b(w),xt=new by(V),bt=new ob(V,xt),ut=new vb(V,xt,U,bt),Xt=new yb(V,ut,xt,bt,U),Ot=new Mb(V,Le,Y),St=new ub(E),Ct=new kA(w,dt,ye,Le,bt,St),jt=new d1(w,E),$t=new qA,yt=new $A(ye),Lt=new rb(w,dt,Wt,Xt,T,m),Nt=new a1(w,Xt,Le),Pt=new p1(V,U,Le,Wt),le=new lb(V,ye,U),W=new xb(V,ye,U),U.programs=Ct.programs,w.capabilities=Le,w.extensions=ye,w.properties=E,w.renderLists=$t,w.shadowMap=Nt,w.state=Wt,w.info=U}Mt(),C!==mi&&(b=new Tb(C,i.width,i.height,l,c));const ct=new f1(w,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(O,q,!1))},this.getSize=function(R){return R.set(O,q)},this.setSize=function(R,k,st=!0){if(ct.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,q=k,i.width=Math.floor(R*gt),i.height=Math.floor(k*gt),st===!0&&(i.style.width=R+"px",i.style.height=k+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*gt,q*gt).floor()},this.setDrawingBufferSize=function(R,k,st){O=R,q=k,gt=st,i.width=Math.floor(R*st),i.height=Math.floor(k*st),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,k,st,et){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,k,st,et),Wt.viewport(N.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,st,et){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,st,et),Wt.scissor(F.copy(vt).multiplyScalar(gt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Wt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,st=!0){let et=0;if(R){let Z=!1;if(at!==null){const Dt=at.texture.format;Z=M.has(Dt)}if(Z){const Dt=at.texture.type,It=x.has(Dt),wt=Lt.getClearColor(),kt=Lt.getClearAlpha(),qt=wt.r,ee=wt.g,ae=wt.b;It?(D[0]=qt,D[1]=ee,D[2]=ae,D[3]=kt,V.clearBufferuiv(V.COLOR,0,D)):(P[0]=qt,P[1]=ee,P[2]=ae,P[3]=kt,V.clearBufferiv(V.COLOR,0,P))}else et|=V.COLOR_BUFFER_BIT}k&&(et|=V.DEPTH_BUFFER_BIT),st&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Lt.dispose(),$t.dispose(),yt.dispose(),E.dispose(),dt.dispose(),Xt.dispose(),bt.dispose(),Pt.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Fs),ct.removeEventListener("sessionend",Is),Di.stop()};function zt(R){R.preventDefault(),Zg("WebGLRenderer: Context Lost."),pt=!0}function ne(){Zg("WebGLRenderer: Context Restored."),pt=!1;const R=U.autoReset,k=Nt.enabled,st=Nt.autoUpdate,et=Nt.needsUpdate,Z=Nt.type;Mt(),U.autoReset=R,Nt.enabled=k,Nt.autoUpdate=st,Nt.needsUpdate=et,Nt.type=Z}function Oe(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const k=R.target;k.removeEventListener("dispose",Ee),Dn(k)}function Dn(R){gi(R),E.remove(R)}function gi(R){const k=E.get(R).programs;k!==void 0&&(k.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,st,et,Z,Dt){k===null&&(k=we);const It=Z.isMesh&&Z.matrixWorld.determinant()<0,wt=il(R,k,st,et,Z);Wt.setMaterial(et,It);let kt=st.index,qt=1;if(et.wireframe===!0){if(kt=ut.getWireframeAttribute(st),kt===void 0)return;qt=2}const ee=st.drawRange,ae=st.attributes.position;let Bt=ee.start*qt,ce=(ee.start+ee.count)*qt;Dt!==null&&(Bt=Math.max(Bt,Dt.start*qt),ce=Math.min(ce,(Dt.start+Dt.count)*qt)),kt!==null?(Bt=Math.max(Bt,0),ce=Math.min(ce,kt.count)):ae!=null&&(Bt=Math.max(Bt,0),ce=Math.min(ce,ae.count));const Ye=ce-Bt;if(Ye<0||Ye===1/0)return;bt.setup(Z,et,wt,st,kt);let qe,be=le;if(kt!==null&&(qe=xt.get(kt),be=W,be.setIndex(qe)),Z.isMesh)et.wireframe===!0?(Wt.setLineWidth(et.wireframeLinewidth*Ze()),be.setMode(V.LINES)):be.setMode(V.TRIANGLES);else if(Z.isLine){let dn=et.linewidth;dn===void 0&&(dn=1),Wt.setLineWidth(dn*Ze()),Z.isLineSegments?be.setMode(V.LINES):Z.isLineLoop?be.setMode(V.LINE_LOOP):be.setMode(V.LINE_STRIP)}else Z.isPoints?be.setMode(V.POINTS):Z.isSprite&&be.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Zc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const dn=Z._multiDrawStarts,Gt=Z._multiDrawCounts,wn=Z._multiDrawCount,ie=kt?xt.get(kt).bytesPerElement:1,Un=E.get(et).currentProgram.getUniforms();for(let qn=0;qn<wn;qn++)Un.setValue(V,"_gl_DrawID",qn),be.render(dn[qn]/ie,Gt[qn])}else if(Z.isInstancedMesh)be.renderInstances(Bt,Ye,Z.count);else if(st.isInstancedBufferGeometry){const dn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,dn);be.renderInstances(Bt,Ye,Gt)}else be.render(Bt,Ye)};function Wr(R,k,st){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,ya(R,k,st),R.side=is,R.needsUpdate=!0,ya(R,k,st),R.side=ma):ya(R,k,st)}this.compile=function(R,k,st=null){st===null&&(st=R),H=yt.get(st),H.init(k),z.push(H),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(H.pushLight(Z),Z.castShadow&&H.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(H.pushLight(Z),Z.castShadow&&H.pushShadow(Z))}),H.setupLights();const et=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const wt=Dt[It];Wr(wt,st,Z),et.add(wt)}else Wr(Dt,st,Z),et.add(Dt)}),H=z.pop(),et},this.compileAsync=function(R,k,st=null){const et=this.compile(R,k,st);return new Promise(Z=>{function Dt(){if(et.forEach(function(It){E.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){Z(R);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ps=null;function tl(R){Ps&&Ps(R)}function Fs(){Di.stop()}function Is(){Di.start()}const Di=new Sv;Di.setAnimationLoop(tl),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Ps=R,ct.setAnimationLoop(R),R===null?Di.stop():Di.start()},ct.addEventListener("sessionstart",Fs),ct.addEventListener("sessionend",Is),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,et=b!==null&&(at===null||st)&&b.begin(w,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,k,at),H=yt.get(R,z.length),H.init(k),z.push(H),Ke.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Vt.setFromProjectionMatrix(Ke,zi,k.reversedDepth),Jt=this.localClippingEnabled,Zt=St.init(this.clippingPlanes,Jt),L=$t.get(R,B.length),L.init(),B.push(L),ct.enabled===!0&&ct.isPresenting===!0){const It=w.xr.getDepthSensingMesh();It!==null&&zs(It,k,-1/0,w.sortObjects)}zs(R,k,0,w.sortObjects),L.finish(),w.sortObjects===!0&&L.sort(At,Ft),re=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,re&&Lt.addToRenderList(L,R),this.info.render.frame++,Zt===!0&&St.beginShadows();const Z=H.state.shadowsArray;if(Nt.render(Z,R,k),Zt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&b.hasRenderPass())===!1){const It=L.opaque,wt=L.transmissive;if(H.setupLights(),k.isArrayCamera){const kt=k.cameras;if(wt.length>0)for(let qt=0,ee=kt.length;qt<ee;qt++){const ae=kt[qt];an(It,wt,R,ae)}re&&Lt.render(R);for(let qt=0,ee=kt.length;qt<ee;qt++){const ae=kt[qt];vi(L,R,ae,ae.viewport)}}else wt.length>0&&an(It,wt,R,k),re&&Lt.render(R),vi(L,R,k)}at!==null&&tt===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),et&&b.end(w),R.isScene===!0&&R.onAfterRender(w,R,k),bt.resetDefaultState(),lt=-1,$=null,z.pop(),z.length>0?(H=z[z.length-1],Zt===!0&&St.setGlobalState(w.clippingPlanes,H.state.camera)):H=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function zs(R,k,st,et){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){et&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const It=Xt.update(R),wt=R.material;wt.visible&&L.push(R,It,wt,st,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const It=Xt.update(R),wt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),me.copy(It.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(wt)){const kt=It.groups;for(let qt=0,ee=kt.length;qt<ee;qt++){const ae=kt[qt],Bt=wt[ae.materialIndex];Bt&&Bt.visible&&L.push(R,It,Bt,st,me.z,ae)}}else wt.visible&&L.push(R,It,wt,st,me.z,null)}}const Dt=R.children;for(let It=0,wt=Dt.length;It<wt;It++)zs(Dt[It],k,st,et)}function vi(R,k,st,et){const{opaque:Z,transmissive:Dt,transparent:It}=R;H.setupLightsView(st),Zt===!0&&St.setGlobalState(w.clippingPlanes,st),et&&Wt.viewport(N.copy(et)),Z.length>0&&hn(Z,k,st),Dt.length>0&&hn(Dt,k,st),It.length>0&&hn(It,k,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function an(R,k,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[et.id]===void 0){const Bt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[et.id]=new Hi(1,1,{generateMipmaps:!0,type:Bt?xa:mi,minFilter:Us,samples:Math.max(4,Le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=H.state.transmissionRenderTarget[et.id],It=et.viewport||N;Dt.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);const wt=w.getRenderTarget(),kt=w.getActiveCubeFace(),qt=w.getActiveMipmapLevel();w.setRenderTarget(Dt),w.getClearColor(ht),Et=w.getClearAlpha(),Et<1&&w.setClearColor(16777215,.5),w.clear(),re&&Lt.render(st);const ee=w.toneMapping;w.toneMapping=Bi;const ae=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),H.setupLightsView(et),Zt===!0&&St.setGlobalState(w.clippingPlanes,et),hn(R,st,et),Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ce=0,Ye=k.length;ce<Ye;ce++){const qe=k[ce],{object:be,geometry:dn,material:Gt,group:wn}=qe;if(Gt.side===ma&&be.layers.test(et.layers)){const ie=Gt.side;Gt.side=Wn,Gt.needsUpdate=!0,Wi(be,st,et,dn,Gt,wn),Gt.side=ie,Gt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt))}w.setRenderTarget(wt,kt,qt),w.setClearColor(ht,Et),ae!==void 0&&(et.viewport=ae),w.toneMapping=ee}function hn(R,k,st){const et=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Dt=R.length;Z<Dt;Z++){const It=R[Z],{object:wt,geometry:kt,group:qt}=It;let ee=It.material;ee.allowOverride===!0&&et!==null&&(ee=et),wt.layers.test(st.layers)&&Wi(wt,k,st,kt,ee,qt)}}function Wi(R,k,st,et,Z,Dt){R.onBeforeRender(w,k,st,et,Z,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,k,st,et,R,Dt),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,w.renderBufferDirect(st,k,et,Z,R,Dt),Z.side=is,Z.needsUpdate=!0,w.renderBufferDirect(st,k,et,Z,R,Dt),Z.side=ma):w.renderBufferDirect(st,k,et,Z,R,Dt),R.onAfterRender(w,k,st,et,Z,Dt)}function ya(R,k,st){k.isScene!==!0&&(k=we);const et=E.get(R),Z=H.state.lights,Dt=H.state.shadowsArray,It=Z.state.version,wt=Ct.getParameters(R,Z.state,Dt,k,st),kt=Ct.getProgramCacheKey(wt);let qt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,et.fog=k.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=dt.get(R.envMap||et.environment,ee),et.envMapRotation=et.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Ee),qt=new Map,et.programs=qt);let ae=qt.get(kt);if(ae!==void 0){if(et.currentProgram===ae&&et.lightsStateVersion===It)return nl(R,wt),ae}else wt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(wt,w),ae=Ct.acquireProgram(wt,kt),qt.set(kt,ae),et.uniforms=wt.uniforms;const Bt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=St.uniform),nl(R,wt),et.needsLights=Yr(R),et.lightsStateVersion=It,et.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Z.state.spotLightMatrix,Bt.spotLightMap.value=Z.state.spotLightMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=ae,et.uniformsList=null,ae}function el(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=kc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function nl(R,k){const st=E.get(R);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function il(R,k,st,et,Z){k.isScene!==!0&&(k=we),Y.resetTextureUnits();const Dt=k.fog,It=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?k.environment:null,wt=at===null?w.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hr,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,qt=dt.get(et.envMap||It,kt),ee=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ae=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Bt=!!st.morphAttributes.position,ce=!!st.morphAttributes.normal,Ye=!!st.morphAttributes.color;let qe=Bi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(qe=w.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,dn=be!==void 0?be.length:0,Gt=E.get(et),wn=H.state.lights;if(Zt===!0&&(Jt===!0||R!==$)){const rn=R===$&&et.id===lt;St.setState(et,R,rn)}let ie=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==wn.state.version||Gt.outputColorSpace!==wt||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==qt||et.fog===!0&&Gt.fog!==Dt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==ae||Gt.morphTargets!==Bt||Gt.morphNormals!==ce||Gt.morphColors!==Ye||Gt.toneMapping!==qe||Gt.morphTargetsCount!==dn)&&(ie=!0):(ie=!0,Gt.__version=et.version);let Un=Gt.currentProgram;ie===!0&&(Un=ya(et,k,Z));let qn=!1,xi=!1,jn=!1;const Ne=Un.getUniforms(),sn=Gt.uniforms;if(Wt.useProgram(Un.program)&&(qn=!0,xi=!0,jn=!0),et.id!==lt&&(lt=et.id,xi=!0),qn||$!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(V,"projectionMatrix",R.projectionMatrix),Ne.setValue(V,"viewMatrix",R.matrixWorldInverse);const Si=Ne.map.cameraPosition;Si!==void 0&&Si.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ne.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,xi=!0,jn=!0)}if(Gt.needsLights&&(wn.state.directionalShadowMap.length>0&&Ne.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,Y),wn.state.spotShadowMap.length>0&&Ne.setValue(V,"spotShadowMap",wn.state.spotShadowMap,Y),wn.state.pointShadowMap.length>0&&Ne.setValue(V,"pointShadowMap",wn.state.pointShadowMap,Y)),Z.isSkinnedMesh){Ne.setOptional(V,Z,"bindMatrix"),Ne.setOptional(V,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ne.setValue(V,"boneTexture",rn.boneTexture,Y))}Z.isBatchedMesh&&(Ne.setOptional(V,Z,"batchingTexture"),Ne.setValue(V,"batchingTexture",Z._matricesTexture,Y),Ne.setOptional(V,Z,"batchingIdTexture"),Ne.setValue(V,"batchingIdTexture",Z._indirectTexture,Y),Ne.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(V,"batchingColorTexture",Z._colorsTexture,Y));const Ln=st.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Ot.update(Z,st,Un),(xi||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,Ne.setValue(V,"receiveShadow",Z.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=_1()),xi&&(Ne.setValue(V,"toneMappingExposure",w.toneMappingExposure),Gt.needsLights&&ss(sn,jn),Dt&&et.fog===!0&&jt.refreshFogUniforms(sn,Dt),jt.refreshMaterialUniforms(sn,et,gt,q,H.state.transmissionRenderTarget[R.id]),kc.upload(V,el(Gt),sn,Y)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(kc.upload(V,el(Gt),sn,Y),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ne.setValue(V,"center",Z.center),Ne.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(V,"normalMatrix",Z.normalMatrix),Ne.setValue(V,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const rn=et.uniformsGroups;for(let Si=0,Yi=rn.length;Si<Yi;Si++){const Bs=rn[Si];Pt.update(Bs,Un),Pt.bind(Bs,Un)}}return Un}function ss(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Yr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,k,st){const et=E.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=k,E.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const st=E.get(R);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0};const Ea=V.createFramebuffer();this.setRenderTarget=function(R,k=0,st=0){at=R,G=k,tt=st;let et=null,Z=!1,Dt=!1;if(R){const wt=E.get(R);if(wt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,wt.__webglFramebuffer),N.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest,Wt.viewport(N),Wt.scissor(F),Wt.setScissorTest(ot),lt=-1;return}else if(wt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(wt.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);const qt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?et=qt[k][st]:et=qt[k],Z=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?et=E.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?et=qt[st]:et=qt,N.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest}else N.copy(nt).multiplyScalar(gt).floor(),F.copy(vt).multiplyScalar(gt).floor(),ot=Tt;if(st!==0&&(et=Ea),Wt.bindFramebuffer(V.FRAMEBUFFER,et)&&Wt.drawBuffers(R,et),Wt.viewport(N),Wt.scissor(F),Wt.setScissorTest(ot),Z){const wt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,st)}else if(Dt){const wt=k;for(let kt=0;kt<R.textures.length;kt++){const qt=E.get(R.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,qt.__webglTexture,st,wt)}}else if(R!==null&&st!==0){const wt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wt.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,k,st,et,Z,Dt,It,wt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const qt=R.textures[wt],ee=qt.format,ae=qt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+wt),!Le.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ae)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-et&&st>=0&&st<=R.height-Z&&V.readPixels(k,st,et,Z,Rt.convert(ee),Rt.convert(ae),Dt)}finally{const qt=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,k,st,et,Z,Dt,It,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt)if(k>=0&&k<=R.width-et&&st>=0&&st<=R.height-Z){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);const qt=R.textures[wt],ee=qt.format,ae=qt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+wt),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(k,st,et,Z,Rt.convert(ee),Rt.convert(ae),0);const ce=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ce);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yM(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Bt),V.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(R.image.width*et),Dt=Math.floor(R.image.height*et),It=k!==null?k.x:0,wt=k!==null?k.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,It,wt,Z,Dt),Wt.unbindTexture()};const Ta=V.createFramebuffer(),rs=V.createFramebuffer();this.copyTextureToTexture=function(R,k,st=null,et=null,Z=0,Dt=0){let It,wt,kt,qt,ee,ae,Bt,ce,Ye;const qe=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(st!==null)It=st.max.x-st.min.x,wt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,qt=st.min.x,ee=st.min.y,ae=st.isBox3?st.min.z:0;else{const sn=Math.pow(2,-Z);It=Math.floor(qe.width*sn),wt=Math.floor(qe.height*sn),R.isDataArrayTexture?kt=qe.depth:R.isData3DTexture?kt=Math.floor(qe.depth*sn):kt=1,qt=0,ee=0,ae=0}et!==null?(Bt=et.x,ce=et.y,Ye=et.z):(Bt=0,ce=0,Ye=0);const be=Rt.convert(k.format),dn=Rt.convert(k.type);let Gt;k.isData3DTexture?(Y.setTexture3D(k,0),Gt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Y.setTexture2DArray(k,0),Gt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(k,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const wn=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),qn=V.getParameter(V.UNPACK_SKIP_ROWS),xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ae);const jn=R.isDataArrayTexture||R.isData3DTexture,Ne=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const sn=E.get(R),Ln=E.get(k),rn=E.get(sn.__renderTarget),Si=E.get(Ln.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Yi=0;Yi<kt;Yi++)jn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,ae+Yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(k).__webglTexture,Dt,Ye+Yi)),V.blitFramebuffer(qt,ee,It,wt,Bt,ce,It,wt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const sn=E.get(R),Ln=E.get(k);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Ta),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,rs);for(let rn=0;rn<kt;rn++)jn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Z,ae+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Z),Ne?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,Dt,Ye+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,Dt),Z!==0?V.blitFramebuffer(qt,ee,It,wt,Bt,ce,It,wt,V.COLOR_BUFFER_BIT,V.NEAREST):Ne?V.copyTexSubImage3D(Gt,Dt,Bt,ce,Ye+rn,qt,ee,It,wt):V.copyTexSubImage2D(Gt,Dt,Bt,ce,qt,ee,It,wt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,Dt,Bt,ce,Ye,It,wt,kt,be,dn,qe.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,Dt,Bt,ce,Ye,It,wt,kt,be,qe.data):V.texSubImage3D(Gt,Dt,Bt,ce,Ye,It,wt,kt,be,dn,qe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Bt,ce,It,wt,be,dn,qe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Bt,ce,qe.width,qe.height,be,qe.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Bt,ce,It,wt,be,dn,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,wn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xi),Dt===0&&k.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){G=0,tt=0,at=null,Wt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const V0={type:"change"},Jd={type:"start"},Av={type:"end"},zc=new Zd,X0=new ts,v1=Math.cos(70*ov.DEG2RAD),mn=new K,kn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class x1 extends Ey{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new as,this._lastTargetPosition=new K,this._quat=new as().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new g0,this._sphericalDelta=new g0,this._scale=1,this._panOffset=new K,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new K,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=M1.bind(this),this._onPointerDown=S1.bind(this),this._onPointerUp=y1.bind(this),this._onContextMenu=D1.bind(this),this._onMouseWheel=b1.bind(this),this._onKeyDown=A1.bind(this),this._onTouchStart=R1.bind(this),this._onTouchMove=C1.bind(this),this._onMouseDown=E1.bind(this),this._onMouseMove=T1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=U1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=Ge.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=mn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<v1?this.object.lookAt(this.target):(X0.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane(X0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function S1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function M1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function y1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=Ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function E1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ge.DOLLY;break;case Or.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}break;case Or.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Jd)}function T1(o){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function b1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(o.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Av))}function A1(o){this.enabled!==!1&&this._handleKeyDown(o)}function R1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ge.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ge.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Jd)}function C1(o){switch(this._trackPointer(o),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ge.NONE}}function D1(o){this.enabled!==!1&&o.preventDefault()}function w1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function L1(){const o=Wc.useRef(null);return Wc.useEffect(()=>{const t=o.current;if(!t)return;const i=new $M,s=new My(12,12,4473924,2236962),l=new yy(3);i.add(s),i.add(l);const c=new pi(75,t.clientWidth/t.clientHeight,.1,1e3);c.position.z=5;const h=new g1({antialias:!0});h.setSize(t.clientWidth,t.clientHeight),t.appendChild(h.domElement);const p=new x1(c,h.domElement);p.enableDamping=!0;const m=new Xr(1,1,1),d=new Kd({color:725024}),v=new Xi(m,d);i.add(v);const S=new Set,g=new Set(["arrowup","arrowdown","arrowleft","arrowright","x","y","z"]),y=H=>{const B=H.key.toLowerCase();console.log("the key: ",B),g.has(B)&&(S.add(B),B.startsWith("arrow")&&H.preventDefault())},T=H=>{const B=H.key.toLowerCase();g.has(B)&&S.delete(B)};window.addEventListener("keydown",y),window.addEventListener("keyup",T);const C=3,M=ov.degToRad(90),x=new Sy;let D;const P=()=>{D=requestAnimationFrame(P);const H=x.getDelta();S.has("arrowup")&&(v.position.y+=C*H),S.has("arrowdown")&&(v.position.y-=C*H),S.has("arrowleft")&&(v.position.z-=C*H),S.has("arrowright")&&(v.position.x+=C*H),S.has("x")&&v.rotateX(M*H),S.has("y")&&v.rotateY(M*H),S.has("z")&&v.rotateZ(M*H),p.update(),h.render(i,c)};P();const L=()=>{const H=t.clientWidth,B=t.clientHeight;c.aspect=H/B,c.updateProjectionMatrix(),h.setSize(H,B)};return window.addEventListener("resize",L),()=>{window.cancelAnimationFrame(D),window.removeEventListener("keydown",y),window.removeEventListener("keyup",T),window.removeEventListener("resize",L),p.dispose(),S.clear(),m.dispose(),d.dispose(),h.dispose(),t.contains(h.domElement)&&t.removeChild(h.domElement)}},[]),Nr.jsx("div",{ref:o,style:{width:"100vw",height:"100vh"}})}function N1(){const[o,t]=Wc.useState(!0);return Nr.jsxs("div",{children:[Nr.jsx("button",{onClick:()=>t(!1),children:"Destroy 3D World"}),o&&Nr.jsx(L1,{})]})}HS.createRoot(document.getElementById("root")).render(Nr.jsx(Wc.StrictMode,{children:Nr.jsx(N1,{})}));
