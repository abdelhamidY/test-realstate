import{j as W,_ as E,s as Xe,p as V,k as l,m as C,n as Q,q as D,g as k,r as me,t as j,b as u,d as S,u as $,v as x,w as Qe,x as d,y as O,o as g,a as Ze,l as I,z as ye,A as et,B as tt,C as _e,D as nt,E as Y,F as rt,G as ot,c as st,H as be,I as ve,J as it,K as at,L as lt,M as Se,N as ut,O as Z,i as z,h as ct,P as ft}from"../chunks/chunk-794968bc.js";function P(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function se(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function G(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function Re(e){return typeof e=="object"&&e!==null&&"then"in e&&W(e.then)}const dt=["Page"],gt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"})),pt=["Page"],ht=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"})),mt=["ProjectInfo","ProjectDetails","MobileProjectDetails","MobileVersion","Page","onBeforeRender","prerender"],yt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"})),_t=["Page","onBeforeRender"],bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"})),vt=["render","onBeforePrerender"],St=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"}));function Rt(e){const[t,...n]=e.urlOriginal.substring(1).split("/"),r="/"+(n.join("/")??"");return{pageContext:{lang:t===""?"it":t,urlOriginal:r}}}const Pt=Object.freeze(Object.defineProperty({__proto__:null,onBeforeRoute:Rt},Symbol.toStringTag,{value:"Module"})),wt=["render","clientRouting","hydrationCanBeAborted"],Ot=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"})),ee={},Pe={},Et={},U={},Ct=[],we={},Tt=!0,Ft=[],xt={onBeforeRoute:null},At=null,jt=Object.assign({}),It={...jt};ee[".page"]=It;const kt=Object.assign({}),Nt={...kt};U[".page"]=Nt;const $t=Object.assign({"/pages/about/index.page.server.tsx":gt,"/pages/index.page.server.tsx":ht,"/pages/project/@id/index.page.server.tsx":yt,"/pages/projects/index.page.server.tsx":bt,"/renderer/_default.page.server.jsx":St}),Bt={...$t};U[".page.server"]=Bt;const Ht=Object.assign({"/renderer/_default.page.route.js":Pt}),Lt={...Ht};Pe[".page.route"]=Lt;const Wt=Object.assign({"/renderer/_default.page.client.jsx":()=>E(()=>import("./renderer_default.page.client.09907fba.js"),[])}),Vt={...Wt};ee[".page.client"]=Vt;const Dt=Object.assign({"/renderer/_default.page.client.jsx":Ot}),Ut={...Dt};U[".page.client"]=Ut;const zt=Object.assign({"/pages/about/index.page.server.tsx":()=>E(()=>import("../chunks/chunk-0adfc9bb.js"),["assets/chunks/chunk-0adfc9bb.js","assets/static/index.page.server.cf3d8ea1.css"]),"/pages/index.page.server.tsx":()=>E(()=>import("../chunks/chunk-410cc816.js"),["assets/chunks/chunk-410cc816.js","assets/static/index.page.server.eab585d5.css"]),"/pages/project/@id/index.page.server.tsx":()=>E(()=>import("../chunks/chunk-582f7989.js"),["assets/chunks/chunk-582f7989.js","assets/static/index.page.server.510c52d4.css"]),"/pages/projects/index.page.server.tsx":()=>E(()=>import("../chunks/chunk-71621e4b.js"),["assets/chunks/chunk-71621e4b.js","assets/static/index.page.server.cf3d8ea1.css"]),"/renderer/_default.page.server.jsx":()=>E(()=>import("../chunks/chunk-4ed993c7.js"),[])}),Gt={...zt};we[".page.server"]=Gt;const Kt=Object.freeze(Object.defineProperty({__proto__:null,invalidator:At,isGeneratedFile:Tt,neverLoaded:we,pageConfigGlobal:xt,pageConfigs:Ft,pageFilesEager:Pe,pageFilesExportNamesEager:U,pageFilesExportNamesLazy:Et,pageFilesLazy:ee,pageFilesList:Ct},Symbol.toStringTag,{value:"Module"}));Xe(Kt);function Mt(e){return V(e,"/").pathname}function Oe(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Yt(){var e,t,n,o;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),s=!!(!((o=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||o===void 0)&&o.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||s||i}function Jt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function H(e){window.location.href=e}function qt(e){return new Promise(t=>setTimeout(t,e))}function Xt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(Q());C();const ie=D("navigationState.ts",{}),Qt=k(),Ee={markNavigationChange(){ie.navigationChanged=!0},get noNavigationChangeYet(){return!ie.navigationChanged&&this.isFirstUrl(k())},isFirstUrl(e){return e===Qt}};async function Zt(e,t){const o=me(e,t).filter(s=>s.fileType===".page.server");return await Promise.all(o.map(async s=>{s.exportNames||(l(s.loadExportNames,t),await s.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:o.some(({exportNames:s})=>(l(s),s.includes("onBeforeRender")))}}function te(e,{hook:t,errorMessagePrefix:n,canBePromise:o}){if(!n){l(t);const{hookName:r,hookSrc:s}=t;l(!r.endsWith(")")),n=`The \`pageContext\` provided by the ${r}() hook defined by ${s}`}if(o&&!j(e)){u(W(e)||Re(e),`${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);return}u(j(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),S(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{showStackTrace:!1,onlyOnce:!0})}function en(e,t,n,o,r=!1){l(!t.endsWith(")"));const s=`The ${t}() hook defined by ${o}`;u(e==null||P(e),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(tn(e,n,s),"pageContext"in e&&te(e.pageContext,{hook:{hookName:t,hookSrc:o},canBePromise:r}))}function tn(e,t,n){const o=[],r=Object.keys(e);for(const s of r)t.includes(s)||o.push(s);u(o.length===0,[n,"returned an object with unknown keys",se(o)+".","Only following keys are allowed:",se(t)+"."].join(" "))}function nn(e,t){if(!P(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function rn(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}Q()&&C();function on(e,t){const o=t.filter(({filesystemRoot:s})=>e.startsWith(s)).sort($(({filesystemRoot:s})=>s.length))[0];let r;if(o){const{filesystemRoot:s,urlRoot:i}=o,a={pageId:e,filesystemRoot:s,urlRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&s.startsWith("/"),a),l(e.startsWith(s),a),s!=="/"?(l(!s.endsWith("/"),a),r=x(e,s.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+x(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(s=>s!=="pages"&&s!=="src"&&s!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=x(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function sn(e,t,n,o){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:s}=ln(e,t,n);return{pageRoutes:an(s,e,t,o),onBeforeRouteHook:r}}function an(e,t,n,o){const r=[];let s=[...o];return n.length>0&&n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId;s=fn(s,c);let f=null;{const m=a.configElements.route;if(m){l("configValue"in m);const p=m.configValue,y=m.configDefinedAt;if(l(y),typeof p=="string")f={pageId:c,comesFromV1PageConfig:!0,routeString:p,routeDefinedAt:y,routeType:"STRING"};else{l(W(p));let _=!1;const h=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(h){const w=h.configValue;l(typeof w=="boolean"),_=w}f={pageId:c,comesFromV1PageConfig:!0,routeFunction:p,routeDefinedAt:y,routeType:"FUNCTION",allowAsync:_}}}}if(!f){const{routeFilesystem:m,routeFilesystemDefinedBy:p}=a;l(m),l(m.startsWith("/")),l(p),f={pageId:c,routeFilesystemDefinedBy:p,comesFromV1PageConfig:!0,routeString:m,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(f),r.push(f)}),n.length===0&&s.filter(a=>!Qe(a)).forEach(a=>{const c=un(a,t);if(c){const{filePath:f,fileExports:m}=c;if(l(m),u("default"in m,`${f} should have a default export.`),d(m,"default","string")){const p=m.default;u(p.startsWith("/"),`A Route String should start with a leading \`/\` but \`${f}\` has \`export default '${p}'\`. Make sure to \`export default '/${p}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:p,routeDefinedAt:f,routeType:"STRING"});return}if(d(m,"default","function")){const p=m.default;let y=!1;const _="iKnowThePerformanceRisksOfAsyncRouteFunctions";_ in m&&(u(d(m,_,"boolean"),`The export \`${_}\` of ${f} should be a boolean.`),y=m[_]),r.push({pageId:a,comesFromV1PageConfig:!1,routeFunction:p,routeDefinedAt:f,allowAsync:y,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}else{const f=on(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:f,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}}),r}function ln(e,t,n){if(t.length>0){if(n.onBeforeRoute){const s=n.onBeforeRoute.configValue;if(s){const i=n.onBeforeRoute.codeFilePath;return l(i),u(W(s),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookSrc:i,onBeforeRoute:s},filesystemRoots:[]}}}return{onBeforeRouteHook:null,filesystemRoots:[]}}let o=null;const r=[];return e.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(d(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:a}=i;o={hookSrc:`${s} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:cn(s),urlRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:o,filesystemRoots:r}}function un(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function cn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=x(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function fn(e,t){const{length:n}=e;return e=e.filter(o=>o!==t),l(e.length===n-1),e}function Ce(e){l(e.urlOriginal),"urlPathname"in e?l(G(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:Fe,enumerable:!0,configurable:!0}),"url"in e?l(G(e,"url")):Object.defineProperty(e,"url",{get:dn,enumerable:!1,configurable:!0}),"urlParsed"in e?l(G(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:gn,enumerable:!0,configurable:!0})}function Te(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),o=e._baseServer;return l(o.startsWith("/")),V(n,o)}function Fe(){const{pathname:e}=Te(this),t=e;return l(t.startsWith("/")),t}function dn(){return S(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),Fe.call(this)}function gn(){const e=Te(this),{origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:c}=e,f={origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:c,get hashString(){return S(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),c},get searchString(){return S(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return ae(f,"hashString"),ae(f,"searchString"),f}function ae(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function pn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(P(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const xe="@",J=":";function hn(e,t){u(e.startsWith("/")||e==="*",(()=>{t?t=t+" invalid":t="Invalid";const n=[`'${e}'`,e!==""?null:"(empty string)"].filter(Boolean).join(" ");return`${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`})())}function q(e,t){hn(e),l(t.startsWith("/"));const n=e.split("/"),o=t.split("/"),r={};mn(e),e==="*"&&(e="/*");for(let s=0;s<Math.max(n.length,o.length);s++){const i=n[s],a=o[s];if(i==="*")return r["*"]=o.slice(Math.max(1,s)).join("/"),{routeParams:r};if(i&&B(i)){if(S(!i.startsWith(J),`Outdated Route String \`${e}\`, use \`${e.split(J).join(xe)}\` instead.`,{showStackTrace:!1,onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function mn(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String \`${e}\`: Route Strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String \`${e}\`: make sure your Route String ends with the glob character \`*\`.`)}function F(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(B(i))break;n++}const o=t.filter(i=>!B(i)).length,r=t.filter(i=>B(i)).length,s=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:o,isCatchAll:s}}function B(e){return e.startsWith(xe)||e.startsWith(J)}function le(e){const n=q(e,e);return l(n),Object.keys(n.routeParams).length===0}function yn(e){e.sort(_n).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&le(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&le(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function _n(e,t){var n,o;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,s=(o=t.precedence)!==null&&o!==void 0?o:0;if(r!==s)return r>s?-1:1}if(!t.routeString||!e.routeString)return 0;{const s=$(i=>F(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(s!==0)return s}{const s=$(i=>F(i).numberOfStaticSegements)(e.routeString,t.routeString);if(s!==0)return s}{const s=$(i=>F(i).numberOfParameterSegments)(e.routeString,t.routeString);if(s!==0)return s}{if(F(t.routeString).isCatchAll)return-1;if(F(e.routeString).isCatchAll)return 1}return 0}async function bn(e,t,n,o){pn(n);let r=e(n);if(u(!Re(r)||t,`The Route Function ${o} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(P(r),`The Route Function ${o} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${o} should be a boolean.`),!a)return null}let s=null;"precedence"in r&&(s=r.precedence,u(typeof s=="number",`The \`precedence\` value returned by the Route Function ${o} should be a number.`)),Ae(r,`The \`routeParams\` object returned by the Route Function ${o} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(P(i)),Object.keys(r).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${o} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:s,routeParams:i}}function Ae(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(P(e.routeParams),`${t} be a plain JavaScript object.`),u(rn(e.routeParams),`${t} only hold string values.`))}async function vn(e,t){const n=await e.onBeforeRoute(t),o=`The \`onBeforeRoute()\` hook defined by ${e.hookSrc}`;if(u(n==null||nn(n,["pageContext"])&&d(n,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const s=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(d(n.pageContext,"_pageId","string"),`${s} a string or \`null\``),u(t._allPageIds.includes(n.pageContext._pageId),`${s} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Ae(n.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(S(!1,`${o} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{showStackTrace:!1,onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(u(d(n.pageContext,"urlOriginal","string"),`${o} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),g(r,{_urlPristine:t.urlOriginal})),te(n.pageContext,{hook:{hookSrc:e.hookSrc,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var N;function ue(...e){var t,n;N||(N=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),N&&N(...e)}Q()&&C();async function je(e){Ce(e);const{pageRoutes:t,onBeforeRouteHook:n}=await sn(e._pageFilesAll,e._pageConfigs,e._pageConfigGlobal,e._allPageIds);ue("Pages routes:",t);const o={};if(n){const c=await vn(n,e);if(c){if(g(o,c),d(o,"_pageId","string")||d(o,"_pageId","null"))return d(o,"routeParams")?l(d(o,"routeParams","object")):g(o,{routeParams:{}}),g(o,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:o};g(e,o)}}g(o,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(r.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:s}=e;l(s.startsWith("/"));const i=[];await Promise.all(t.map(async c=>{const{pageId:f,routeType:m}=c;if(c.routeType==="FILESYSTEM"){const{routeString:p}=c,y=q(p,s);if(y){const{routeParams:_}=y;i.push({pageId:f,routeParams:_,routeString:p,routeType:m})}return}if(c.routeType==="STRING"){const{routeString:p}=c,y=q(p,s);if(y){const{routeParams:_}=y;l(m==="STRING"),i.push({pageId:f,routeString:p,routeParams:_,routeType:m})}return}if(c.routeType==="FUNCTION"){const{routeFunction:p,allowAsync:y,routeDefinedAt:_}=c,h=await bn(p,y,e,_);if(h){const{routeParams:w,precedence:T}=h;i.push({pageId:f,precedence:T,routeParams:w,routeType:m})}return}l(!1)})),yn(i);const a=i[0];if(ue(`Route matches for URL \`${s}\` (in precedence order):`,i),g(o,{_routeMatches:i}),!a)return g(o,{_pageId:null,routeParams:{}}),{pageContextAddendum:o};{const{routeParams:c}=a;l(P(c)),g(o,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:o}}const ce=["urlPathname","urlParsed"],Sn=["Page","pageExports","exports"];function Ie(e){[...Sn,...ce].forEach(n=>{n in e&&(ce.includes(n)?(l(n.startsWith("url")),S(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0})):S(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0}),delete e[n])})}const Rn="/";function Pn(e,t,n){const{pathnameOriginal:o,searchOriginal:r,hashOriginal:s}=V(e,Rn);e.startsWith("/")&&l(e===`${o}${r||""}${s||""}`,{url:e});const i=o.endsWith("/");let a;return n&&o!=="/"?(i?a=x(o,0,-1):a=o,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=o+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${s||""}`}const wn=".pageContext.json",On=!1;function En(e){return Pn(e,wn,On)}async function Cn(e){return e._isFirstRenderAttempt&&Ee.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),Tn(e)):(l(d(e,"_isFirstRenderAttempt","false")),xn(e))}async function Tn(e){const t=Ze();return Ie(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function Fn(e){const t=ye(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await I(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function xn(e){let t={};g(t,{isHydration:!1}),g(t,await In(e)),g(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId));const n=await An({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const o=ye(e._pageFilesAll,e._pageConfigs);return l(o),g(t,{isHydration:!1,_pageId:o}),g(t,n),g(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return g(t,n),t}async function An(e){const t=et(e,"onBeforeRender");if(t){const o=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},s=tt({...e,...r},!0),i=await _e(()=>o(s),"onBeforeRender",t.hookSrc);en(i,"onBeforeRender",["pageContext"],t.hookSrc);const a=i==null?void 0:i.pageContext;return g(r,a),r}if(await jn(e)){const o=await $n(e),r={};return Object.assign(r,o),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:o}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function jn(e){if(e._pageConfigs.length>0){const t=nt(e._pageId,e._pageConfigs);return!!Y(t,"onBeforeRender")&&t.configElements.onBeforeRender.configEnv==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await Zt(e._pageFilesAll,e._pageId);return t}}async function In(e){const n=(await je(e)).pageContextAddendum;if(!n._pageId){const o=new Error("No routing match");throw kn(o),o}return l(d(n,"_pageId","string")),n}function kn(e){g(e,{_is404:!0})}function Nn(e){return j(e)&&e._is404===!0}async function $n(e){var t;const n=En((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),o=await fetch(n);{const a=o.headers.get("content-type"),c=a&&a.includes("application/json");if(!c&&o.status===404){H(e.urlOriginal);const f=new Error("Page doesn't exist");throw Object.assign(f,{_abortRendering:!0}),f}u(c,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await o.text(),s=rt(r);if("serverSideError"in s)throw ot("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(s,"pageContext"));const i=s.pageContext;return l(P(i)),l(d(i,"_pageId","string")),Ie(i),i}function ke(){const e="/";return l(Bn(e)),e}function Bn(e){return e.startsWith("/")}const K=D("createPageContext.ts",{});async function Ne(e){K.pageFilesData||(K.pageFilesData=await st(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:o,pageConfigGlobal:r}=K.pageFilesData,s=ke();l(be(s));const i={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:s,_isProduction:!0,_pageFilesAll:t,_pageConfigs:o,_pageConfigGlobal:r,_allPageIds:n};return g(i,e),Ce(i),i}async function $e(e){const t=await Ne({urlOriginal:e}),n=await je(t),o=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:o,pageConfigs:r};const s=n.pageContextAddendum._pageId;return s?{pageId:s,pageFilesAll:o,pageConfigs:r}:{pageId:null,pageFilesAll:o,pageConfigs:r}}function A(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function Hn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:o(),isClientRouting:s()};function o(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&A(a).includes("render")))}function r(){const i=e.some(a=>A(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function s(){return e.some(a=>A(a).includes("clientRouting"))}}function Ln({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:o}){let r=[];const s=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...s.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=Wn(o);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function Wn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Vn(e,t){let n=ve(e,t);const o=me(e,t),{isHtmlOnly:r,isClientRouting:s}=Hn({pageFilesClientSide:n,pageFilesServerSide:o,pageId:t});r&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!A(c).includes("render")),n=Un(n));const{clientEntries:i,clientDependencies:a}=Ln({pageFilesClientSide:n,pageFilesServerSide:o,isHtmlOnly:r,isClientRouting:s});return{isHtmlOnly:r,isClientRouting:s,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:o}}async function Dn(e,t,{sharedPageFilesAlreadyLoaded:n}){const o=ve(e,t);await Promise.all(o.map(async r=>{var s;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((s=r.loadExportNames)===null||s===void 0?void 0:s.call(r))}))}function Un(e){const t=[];for(const n of e)if(t.push(n),A(n).includes("overrideDefaultPages"))break;return t}function zn(e,t,n){var o;if(e){const r=(o=it(e,"clientRouting","boolean"))!==null&&o!==void 0?o:!1,s=!!Y(e,"onRenderClient"),i=!!Y(e,"Page")&&e.configElements.Page.configEnv!=="server-only";return{isClientSideRenderable:s&&i,isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:s}=Vn(t,n);return{isClientSideRenderable:!r,isClientRouting:s}}}async function Be(e){const{pageId:t,pageFilesAll:n,pageConfigs:o}=await $e(e);if(!t)return!1;await Dn(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=at(o,t),{isClientSideRenderable:s,isClientRouting:i}=zn(r,n,t);return s&&i}function He(e){const t=e.getAttribute("href");return!!(t===null||t===""||Oe(t)||Gn(e)||Kn(t)||!Mn(t)||!lt(t))}function Gn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Kn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Mn(e){const t=ke();l(be(t));const{hasBaseServer:n}=V(e,t);return n}function Yn(e,t){return{prefetchPageContext:!1,prefetchStaticAssets:Jn(e,t)}}function Jn(e,t){let n=qn(t),o=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const s="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(P(r),s);const i=Object.keys(r);u(i.length===1&&i[0]==="when",s);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,s)}return{when:"HOVER"}})();return o&&o.when==="VIEWPORT"&&!e._isProduction&&(Se(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),o={when:"HOVER"}),o}function qn(e){let t=e.getAttribute("data-prefetch");if(S(t===null,"The `data-prefetch` attribute is outdated.",{showStackTrace:!1,onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Le=new Map;function We(e){const t=De(e);return Le.has(t)}function Ve(e){const t=De(e);Le.set(t,!0)}function De(e){return Mt(e)}C();const fe=new Map;async function M(e){if(u(ut(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch"),u(!Oe(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`),We(e))return;Ve(e);const{pageId:t,pageFilesAll:n,pageConfigs:o}=await $e(e);if(t)try{await I(n,o,t)}catch(r){if(Z(r))X(r,!0);else throw r}}function Xn(e){Ve(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(fe.has(n))return;fe.set(n,!0);const o=n.getAttribute("href");if(He(n))return;l(o);try{if(!await Be(o))return}catch{return}if(We(o))return;const r=Yn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>M(o)),n.addEventListener("touchstart",()=>M(o),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(M(o),s.disconnect())})});s.observe(n)}}else return})}function Ue(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ge()),"scrollPosition"in e||(t=!0,e.scrollPosition=ze()),Ke(e),t&&re(e)}function ne(){const e=window.history.state||{};return Ke(e),e}function ze(){return{x:window.scrollX,y:window.scrollY}}function Ge(){return new Date().getTime()}function de(){const e=ze(),t=ne();re({...t,scrollPosition:e})}function Qn(e,t){if(t)re(ne(),e);else{const n=Ge();Zn({timestamp:n,scrollPosition:null},e)}}function Ke(e){if(l(j(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function re(e,t){window.history.replaceState(e,"",t??null)}function Zn(e,t){window.history.pushState(e,"",t)}C();const er=D("navigate.ts",{});function tr(e){er.navigate=e}const Me="__isRenderErrorPageException";function ge(e){return nr(e),typeof e=="object"&&e!==null&&Me in e}function Ye({pageContext:e}={}){{const n=this;u(!(typeof n=="object"&&(n==null?void 0:n.constructor)===Ye),"Don't use the `new` operator: use `throw RenderErrorPage()` instead of `throw new RenderErrorPage()`.")}te(e,{errorMessagePrefix:"The `pageContext` provided in `RenderErrorPage({ pageContext })`"});const t=new Error("RenderErrorPage");return g(t,{pageContext:e,[Me]:!0}),t}function nr(e){u(e!==Ye,"Missing parentheses `()` in `throw RenderErrorPage`: it should be `throw RenderErrorPage()`.")}const v=D("useClientRouter.ts",{previousState:L()});cr();Ue();function X(e,t){l(Z(e)),v.clientRoutingIsDisabled=!0,t&&console.log(e),Se(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function rr(){lr(),or((r,{keepScrollPosition:s})=>{o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),sr((r,s)=>{o({scrollTarget:r,isBackwardNavigation:s})}),tr(async(r,{keepScrollPosition:s=!1,overwriteLastHistoryEntry:i=!1}={})=>{await o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;o({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function o({scrollTarget:r,url:s=k(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:c}){var f;if(v.clientRoutingIsDisabled){H(s);return}if(c){let b;try{b=await Be(s)}catch(R){if(ge(R))b=!0;else throw R}if(!b){H(s);return}}const m={urlOriginal:s,isBackwardNavigation:a},p=++e;l(p>=1),p>1&&n===!1&&((f=v.onPageTransitionStart)===null||f===void 0||f.call(v,m),n=!0);let y=!1;const _=()=>p===1&&y===!1?!1:p!==e,h=await Ne(m);if(_())return;const w=p===1;g(h,{_isFirstRenderAttempt:w});let T;try{T=await Cn(h)}catch(b){if(console.error(b),he(b,h))return;ge(b)?(g(h,{is404:!0}),g(h,b.pageContext)):g(h,{is404:Nn(b)});try{T=await Fn(h)}catch(R){if(he(R,h)||(w||setTimeout(()=>{window.location.pathname=s},0),Jt(b,R)))return;throw R}}if(g(h,T),z(h,"onPageTransitionStart"),v.onPageTransitionStart=h.exports.onPageTransitionStart,h.exports.hydrationCanBeAborted?y=!0:S(!Yt(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{showStackTrace:!1,onlyOnce:!0}),!_()&&(t&&await t,!_())){if(ir(s,i),Ee.markNavigationChange(),l(t===void 0),t=(async()=>{await ct(h,!0),Xn(h)})(),await t,t=void 0,h._isFirstRenderAttempt){z(h,"onHydrationEnd");const{onHydrationEnd:b}=h.exports;if(b){const R=h.exportsAll.onHydrationEnd[0].exportSource;l(R),await _e(()=>b(h),"onHydrationEnd",R)}}else p===e&&(h.exports.onPageTransitionEnd&&(z(h,"onPageTransitionEnd"),h.exports.onPageTransitionEnd(h)),n=!1);Je(r),oe(),v.initialRenderIsDone=!0}}}function or(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const s=o(r.target);if(!s)return;const i=s.getAttribute("href");if(He(s))return;l(i),r.preventDefault();const a=![null,"false"].includes(s.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function o(r){for(;r.tagName!=="A";){const{parentNode:s}=r;if(!s)return null;r=s}return r}}function sr(e){window.addEventListener("popstate",()=>{const t=L(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",o=t.urlWithoutHash===v.previousState.urlWithoutHash,r=!t.historyState.timestamp||!v.previousState.historyState.timestamp?null:t.historyState.timestamp<v.previousState.historyState.timestamp;v.previousState=t,o?window.history.state===null?(Ue(),v.previousState=L()):Je(n):e(n,r)})}function ir(e,t){k()!==e&&(oe(),Qn(e,t),v.previousState=L())}function L(){return{urlWithoutHash:k({withoutHash:!0}),historyState:ne()}}function Je(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=ur();if(n&&n!=="top"){const o=document.getElementById(n)||document.getElementsByName(n)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;ar(t)}function ar(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const o=new Date().getTime();for(;;)if(await qt(10),t(),n()||new Date().getTime()-o>100)return},0)}))}function lr(){window.addEventListener("scroll",Xt(de,Math.ceil(1e3/3)),{passive:!0}),qe(de)}function ur(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function cr(){pe(),qe(pe),fr(()=>v.initialRenderIsDone&&oe())}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function pe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function qe(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function fr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function he(e,t){return!!(j(e)&&e._abortRendering||dr(e,t))}function dr(e,t){if(!Z(e))return!1;if(t._isFirstRenderAttempt)throw X(e,!1),e;return X(e,!0),H(t.urlOriginal),!0}C();ft(!0);rr();