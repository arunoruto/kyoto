(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();function L(){}const ht=t=>t;function Pt(t,e){for(const l in e)t[l]=e[l];return t}function Mt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function mt(t){return t()}function Ze(){return Object.create(null)}function Q(t){t.forEach(mt)}function Fe(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ye;function xe(t,e){return ye||(ye=document.createElement("a")),ye.href=e,t===ye.href}function Tt(t){return Object.keys(t).length===0}function At(t,e,l,n){if(t){const s=gt(t,e,l,n);return t[0](s)}}function gt(t,e,l,n){return t[1]&&n?Pt(l.ctx.slice(),t[1](n(e))):l.ctx}function Ot(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],o=Math.max(e.dirty.length,s.length);for(let u=0;u<o;u+=1)a[u]=e.dirty[u]|s[u];return a}return e.dirty|s}return e.dirty}function St(t,e,l,n,s,a){if(s){const o=gt(e,l,n,a);t.p(o,s)}}function Ht(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function te(t){return t==null?"":t}const bt=typeof window<"u";let yt=bt?()=>window.performance.now():()=>Date.now(),ze=bt?t=>requestAnimationFrame(t):L;const ce=new Set;function kt(t){ce.forEach(e=>{e.c(t)||(ce.delete(e),e.f())}),ce.size!==0&&ze(kt)}function wt(t){let e;return ce.size===0&&ze(kt),{promise:new Promise(l=>{ce.add(e={c:t,f:l})}),abort(){ce.delete(e)}}}function i(t,e){t.appendChild(e)}function $t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Rt(t){const e=f("style");return Nt($t(t),e),e.sheet}function Nt(t,e){i(t.head||t,e)}function A(t,e,l){t.insertBefore(e,l||null)}function T(t){t.parentNode.removeChild(t)}function ve(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function f(t){return document.createElement(t)}function ke(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function w(){return E(" ")}function W(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function Ft(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function r(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function zt(t){return Array.from(t.childNodes)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Bt(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function et(t,e,l){t.classList[l?"add":"remove"](e)}function Kt(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,n,e),s}const qe=new Map;let De=0;function It(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function Wt(t,e){const l={stylesheet:Rt(e),rules:{}};return qe.set(t,l),l}function Ct(t,e,l,n,s,a,o,u=0){const d=16.666/n;let c=`{
`;for(let p=0;p<=1;p+=d){const C=e+(l-e)*a(p);c+=p*100+`%{${o(C,1-C)}}
`}const v=c+`100% {${o(l,1-l)}}
}`,h=`__svelte_${It(v)}_${u}`,g=$t(t),{stylesheet:y,rules:b}=qe.get(g)||Wt(g,t);b[h]||(b[h]=!0,y.insertRule(`@keyframes ${h} ${v}`,y.cssRules.length));const k=t.style.animation||"";return t.style.animation=`${k?`${k}, `:""}${h} ${n}ms linear ${s}ms 1 both`,De+=1,h}function Se(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=l.length-n.length;s&&(t.style.animation=n.join(", "),De-=s,De||Jt())}function Jt(){ze(()=>{De||(qe.forEach(t=>{const{stylesheet:e}=t;let l=e.cssRules.length;for(;l--;)e.deleteRule(l);t.rules={}}),qe.clear())})}let pe;function Y(t){pe=t}function qt(){if(!pe)throw new Error("Function called outside component initialization");return pe}function Vt(t){qt().$$.on_destroy.push(t)}const _e=[],He=[],$e=[],tt=[],Yt=Promise.resolve();let Re=!1;function Gt(){Re||(Re=!0,Yt.then(Be))}function G(t){$e.push(t)}const Oe=new Set;let we=0;function Be(){const t=pe;do{for(;we<_e.length;){const e=_e[we];we++,Y(e),Qt(e.$$)}for(Y(null),_e.length=0,we=0;He.length;)He.pop()();for(let e=0;e<$e.length;e+=1){const l=$e[e];Oe.has(l)||(Oe.add(l),l())}$e.length=0}while(_e.length);for(;tt.length;)tt.pop()();Re=!1,Oe.clear(),Y(t)}function Qt(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}let fe;function Dt(){return fe||(fe=Promise.resolve(),fe.then(()=>{fe=null})),fe}function Ee(t,e,l){t.dispatchEvent(Kt(`${e?"intro":"outro"}${l}`))}const Ce=new Set;let le;function Et(){le={r:0,c:[],p:le}}function jt(){le.r||Q(le.c),le=le.p}function B(t,e){t&&t.i&&(Ce.delete(t),t.i(e))}function K(t,e,l,n){if(t&&t.o){if(Ce.has(t))return;Ce.add(t),le.c.push(()=>{Ce.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const Lt={duration:0};function je(t,e,l){let n=e(t,l),s=!1,a,o,u=0;function d(){a&&Se(t,a)}function c(){const{delay:h=0,duration:g=300,easing:y=ht,tick:b=L,css:k}=n||Lt;k&&(a=Ct(t,0,1,g,h,y,k,u++)),b(0,1);const p=yt()+h,C=p+g;o&&o.abort(),s=!0,G(()=>Ee(t,!0,"start")),o=wt($=>{if(s){if($>=C)return b(1,0),Ee(t,!0,"end"),d(),s=!1;if($>=p){const m=y(($-p)/g);b(m,1-m)}}return s})}let v=!1;return{start(){v||(v=!0,Se(t),Fe(n)?(n=n(),Dt().then(c)):c())},invalidate(){v=!1},end(){s&&(d(),s=!1)}}}function Le(t,e,l){let n=e(t,l),s=!0,a;const o=le;o.r+=1;function u(){const{delay:d=0,duration:c=300,easing:v=ht,tick:h=L,css:g}=n||Lt;g&&(a=Ct(t,1,0,c,d,v,g));const y=yt()+d,b=y+c;G(()=>Ee(t,!1,"start")),wt(k=>{if(s){if(k>=b)return h(0,1),Ee(t,!1,"end"),--o.r||Q(o.c),!1;if(k>=y){const p=v((k-y)/c);h(1-p,p)}}return s})}return Fe(n)?Dt().then(()=>{n=n(),u()}):u(),{end(d){d&&n.tick&&n.tick(1,0),s&&(a&&Se(t,a),s=!1)}}}function Ut(t,e){const l=e.token={};function n(s,a,o,u){if(e.token!==l)return;e.resolved=u;let d=e.ctx;o!==void 0&&(d=d.slice(),d[o]=u);const c=s&&(e.current=s)(d);let v=!1;e.block&&(e.blocks?e.blocks.forEach((h,g)=>{g!==a&&h&&(Et(),K(h,1,1,()=>{e.blocks[g]===h&&(e.blocks[g]=null)}),jt())}):e.block.d(1),c.c(),B(c,1),c.m(e.mount(),e.anchor),v=!0),e.block=c,e.blocks&&(e.blocks[a]=c),v&&Be()}if(Mt(t)){const s=qt();if(t.then(a=>{Y(s),n(e.then,1,e.value,a),Y(null)},a=>{if(Y(s),n(e.catch,2,e.error,a),Y(null),!e.hasCatch)throw a}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function Xt(t,e,l){const n=e.slice(),{resolved:s}=t;t.current===t.then&&(n[t.value]=s),t.current===t.catch&&(n[t.error]=s),t.block.p(n,l)}function ie(t){t&&t.c()}function X(t,e,l,n){const{fragment:s,on_mount:a,on_destroy:o,after_update:u}=t.$$;s&&s.m(e,l),n||G(()=>{const d=a.map(mt).filter(Fe);o?o.push(...d):Q(d),t.$$.on_mount=[]}),u.forEach(G)}function Z(t,e){const l=t.$$;l.fragment!==null&&(Q(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Zt(t,e){t.$$.dirty[0]===-1&&(_e.push(t),Gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,l,n,s,a,o,u=[-1]){const d=pe;Y(t);const c=t.$$={fragment:null,ctx:null,props:a,update:L,not_equal:s,bound:Ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Ze(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};o&&o(c.root);let v=!1;if(c.ctx=l?l(t,e.props||{},(h,g,...y)=>{const b=y.length?y[0]:g;return c.ctx&&s(c.ctx[h],c.ctx[h]=b)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](b),v&&Zt(t,h)),g}):[],c.update(),v=!0,Q(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=zt(e.target);c.fragment&&c.fragment.l(h),h.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&B(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),Be()}Y(d)}class ee{$destroy(){Z(this,1),this.$destroy=L}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function xt(t){const e=t-1;return e*e*e+1}function se(t,{delay:e=0,duration:l=400,easing:n=xt,x:s=0,y:a=0,opacity:o=0}={}){const u=getComputedStyle(t),d=+u.opacity,c=u.transform==="none"?"":u.transform,v=d*(1-o);return{delay:e,duration:l,easing:n,css:(h,g)=>`
			transform: ${c} translate(${(1-h)*s}px, ${(1-h)*a}px);
			opacity: ${d-v*g}`}}function lt(t,e,l){const n=t.slice();return n[1]=e[l],n[3]=l,n}function nt(t){let e,l,n,s,a,o;return{c(){e=f("li"),l=f("a"),n=f("i"),o=w(),r(n,"class",s="fa-brands fa-"+t[1].network.toLowerCase()+" w-6 svg text-ctp-subtext0 hover:text-ctp-teal"),r(l,"href",a=t[1].url),r(l,"target","_blank"),r(l,"rel","noreferrer")},m(u,d){A(u,e,d),i(e,l),i(l,n),i(e,o)},p(u,d){d&1&&s!==(s="fa-brands fa-"+u[1].network.toLowerCase()+" w-6 svg text-ctp-subtext0 hover:text-ctp-teal")&&r(n,"class",s),d&1&&a!==(a=u[1].url)&&r(l,"href",a)},d(u){u&&T(e)}}}function el(t){let e,l=t[0],n=[];for(let s=0;s<l.length;s+=1)n[s]=nt(lt(t,l,s));return{c(){e=f("ul");for(let s=0;s<n.length;s+=1)n[s].c();r(e,"class","social")},m(s,a){A(s,e,a);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(s,[a]){if(a&1){l=s[0];let o;for(o=0;o<l.length;o+=1){const u=lt(s,l,o);n[o]?n[o].p(u,a):(n[o]=nt(u),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},i:L,o:L,d(s){s&&T(e),ve(n,s)}}}function tl(t,e,l){let{list:n}=e;return t.$$set=s=>{"list"in s&&l(0,n=s.list)},[n]}class ll extends ee{constructor(e){super(),x(this,e,tl,el,U,{list:0})}}function nl(t){let e,l,n,s,a,o,u,d,c,v,h,g,y;return g=new ll({props:{list:t[0].profiles}}),{c(){e=f("div"),l=f("div"),n=f("div"),s=f("div"),a=w(),o=f("div"),u=f("h3"),d=f("span"),d.textContent=`${t[1]}`,c=w(),v=f("p"),v.textContent=`${t[2]}`,h=w(),ie(g.$$.fragment),r(s,"class","image avatar_img blob svelte-8pddux"),Bt(s,"background-image","url("+t[3]+")"),r(n,"class","avatar"),r(u,"class","name text-ctp-text svelte-8pddux"),r(v,"class","job text-ctp-subtext1"),r(o,"class","details"),r(l,"class","home_content"),r(e,"class","kyoto_home")},m(b,k){A(b,e,k),i(e,l),i(l,n),i(n,s),i(l,a),i(l,o),i(o,u),i(u,d),i(o,c),i(o,v),i(o,h),X(g,o,null),y=!0},p(b,[k]){const p={};k&1&&(p.list=b[0].profiles),g.$set(p)},i(b){y||(B(g.$$.fragment,b),y=!0)},o(b){K(g.$$.fragment,b),y=!1},d(b){b&&T(e),Z(g)}}}function sl(t,e,l){let{basics:n}=e,s=n.name||"",a=n.label||"",o=n.image||"";return t.$$set=u=>{"basics"in u&&l(0,n=u.basics)},[n,s,a,o]}class il extends ee{constructor(e){super(),x(this,e,sl,nl,U,{basics:0})}}function st(t){let e,l,n,s,a=t[0].location.city+"",o,u,d=t[0].location.countryCode+"",c;return{c(){e=f("li"),l=f("p"),n=f("span"),n.textContent="Based in:",s=w(),o=E(a),u=E(", "),c=E(d)},m(v,h){A(v,e,h),i(e,l),i(l,n),i(l,s),i(l,o),i(l,u),i(l,c)},p(v,h){h&1&&a!==(a=v[0].location.city+"")&&M(o,a),h&1&&d!==(d=v[0].location.countryCode+"")&&M(c,d)},d(v){v&&T(e)}}}function it(t){let e,l,n,s,a,o=t[0].email+"",u,d;return{c(){e=f("li"),l=f("p"),n=f("span"),n.textContent="Email:",s=w(),a=f("a"),u=E(o),r(a,"href",d=t[0].email),r(e,"v-if","basics.email")},m(c,v){A(c,e,v),i(e,l),i(l,n),i(l,s),i(l,a),i(a,u)},p(c,v){v&1&&o!==(o=c[0].email+"")&&M(u,o),v&1&&d!==(d=c[0].email)&&r(a,"href",d)},d(c){c&&T(e)}}}function at(t){let e,l,n,s,a,o=t[0].phone+"",u,d;return{c(){e=f("li"),l=f("p"),n=f("span"),n.textContent="Phone:",s=w(),a=f("a"),u=E(o),r(a,"href",d=t[0].phone)},m(c,v){A(c,e,v),i(e,l),i(l,n),i(l,s),i(l,a),i(a,u)},p(c,v){v&1&&o!==(o=c[0].phone+"")&&M(u,o),v&1&&d!==(d=c[0].phone)&&r(a,"href",d)},d(c){c&&T(e)}}}function ot(t){let e,l,n,s,a,o,u,d,c,v,h,g,y,b,k;return{c(){e=f("div"),l=f("div"),n=w(),s=f("div"),a=f("div"),o=f("div"),u=w(),d=f("div"),d.innerHTML=`<div class="left"><div class="about_title"><h3>Photography Skills</h3></div> 
                
                <div class="kyoto_progress"><div class="progress_inner"><span><span class="label">Wedding Photography</span><span class="number">95%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:95%"></div></div></div></div> 
                  
                  <div class="progress_inner"><span><span class="label">Lifestyle Photography</span><span class="number">80%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:80%"></div></div></div></div> 
                  
                  <div class="progress_inner"><span><span class="label">Family Photography</span><span class="number">90%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:90%"></div></div></div></div></div></div> 
              
              <div class="right"><div class="about_title"><h3>Language Skills</h3></div> 
                <div class="kyoto_progress"><div class="progress_inner"><span><span class="label">English</span><span class="number">95%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:95%"></div></div></div></div> 
                  <div class="progress_inner"><span><span class="label">Japanese</span><span class="number">90%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:90%"></div></div></div></div> 
                  <div class="progress_inner"><span><span class="label">Arabian</span><span class="number">85%</span></span> 
                    <div class="background"><div class="bar"><div class="bar_in" style="width:85%"></div></div></div></div></div></div>`,c=w(),v=f("div"),v.innerHTML=`<div class="about_title"><h3>Fun Facts</h3></div> 
              <ul><li><div class="list_inner"><h3>777+</h3> 
                    <span>Projects Completed</span></div></li> 
                <li><div class="list_inner"><h3>3K</h3> 
                    <span>Happy Clients</span></div></li> 
                <li><div class="list_inner"><h3>9K+</h3> 
                    <span>Lines of Code</span></div></li></ul>`,h=w(),g=f("div"),g.innerHTML='<div class="about_title"><h3>Our Partners</h3></div>',r(l,"class","modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"),r(o,"class","close"),r(d,"class","my_box"),r(v,"class","counter"),r(g,"class","partners"),r(a,"class","kyoto_modalbox_about"),r(s,"class","modal-content"),r(e,"class",y=t[1]?"modal-mask":""),r(e,"id","modal")},m(p,C){A(p,e,C),i(e,l),i(e,n),i(e,s),i(s,a),i(a,o),i(a,u),i(a,d),i(a,c),i(a,v),i(a,h),i(a,g),b||(k=[W(o,"click",t[4]),W(e,"click",t[5])],b=!0)},p(p,C){C&2&&y!==(y=p[1]?"modal-mask":"")&&r(e,"class",y)},d(p){p&&T(e),b=!1,Q(k)}}}function al(t){let e,l,n,s,a,o,u,d=t[0].name+"",c,v,h,g,y,b=t[0].summary+"",k,p,C,$,m,q,_,D,P,H,R=t[0].location.city&&t[0].location.countryCode&&st(t),O=t[0].email&&it(t),S=t[0].phone&&at(t),N=t[2]&&ot(t);return{c(){e=f("div"),l=f("div"),n=f("img"),a=w(),o=f("div"),u=f("h3"),c=E(d),v=w(),h=f("div"),g=f("div"),y=f("p"),k=E(b),p=w(),C=f("div"),$=w(),m=f("div"),q=f("ul"),R&&R.c(),_=w(),O&&O.c(),D=w(),S&&S.c(),P=w(),H=f("transition"),N&&N.c(),xe(n.src,s=t[0].image)||r(n,"src",s),r(n,"alt","about"),r(n,"class","svelte-189bgyn"),r(l,"class","about_image"),r(u,"class","name"),r(C,"class","kyoto_button"),r(g,"class","left"),r(m,"class","right"),r(h,"class","description_inner"),r(o,"class","description"),r(H,"name","fade"),r(e,"class","kyoto_about svelte-189bgyn")},m(j,F){A(j,e,F),i(e,l),i(l,n),i(e,a),i(e,o),i(o,u),i(u,c),i(o,v),i(o,h),i(h,g),i(g,y),i(y,k),i(g,p),i(g,C),i(h,$),i(h,m),i(m,q),R&&R.m(q,null),i(q,_),O&&O.m(q,null),i(q,D),S&&S.m(q,null),i(e,P),i(e,H),N&&N.m(H,null)},p(j,[F]){F&1&&!xe(n.src,s=j[0].image)&&r(n,"src",s),F&1&&d!==(d=j[0].name+"")&&M(c,d),F&1&&b!==(b=j[0].summary+"")&&M(k,b),j[0].location.city&&j[0].location.countryCode?R?R.p(j,F):(R=st(j),R.c(),R.m(q,_)):R&&(R.d(1),R=null),j[0].email?O?O.p(j,F):(O=it(j),O.c(),O.m(q,D)):O&&(O.d(1),O=null),j[0].phone?S?S.p(j,F):(S=at(j),S.c(),S.m(q,null)):S&&(S.d(1),S=null),j[2]?N?N.p(j,F):(N=ot(j),N.c(),N.m(H,null)):N&&(N.d(1),N=null)},i:L,o:L,d(j){j&&T(e),R&&R.d(),O&&O.d(),S&&S.d(),N&&N.d()}}}function ol(t,e,l){let{basics:n}=e,s=!1,a=!1;function o(){l(1,s=!1),l(2,a=!1)}const u=()=>o(),d=()=>o();return t.$$set=c=>{"basics"in c&&l(0,n=c.basics)},[n,s,a,o,u,d]}class rl extends ee{constructor(e){super(),x(this,e,ol,al,U,{basics:0})}}function rt(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function ct(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function ut(t){let e,l,n,s,a=ne(t[2].startDate)+"",o,u,d=(t[2].endDate?ne(t[2].endDate):"present")+"",c,v,h,g=t[2].position+"",y,b,k,p=t[2].name+"",C,$,m,q=t[2].summary+"",_,D;return{c(){e=f("div"),l=f("p"),n=f("i"),s=w(),o=E(a),u=E(" - "),c=E(d),v=w(),h=f("p"),y=E(g),b=w(),k=f("p"),C=E(p),$=w(),m=f("p"),_=E(q),D=w(),r(n,"class","fa-solid fa-clock"),r(l,"class","time-period svelte-134l3qg"),r(h,"class","text-ctp-text"),r(k,"class","text-ctp-text"),r(m,"class","text-ctp-subtext0"),r(e,"class","item svelte-134l3qg")},m(P,H){A(P,e,H),i(e,l),i(l,n),i(l,s),i(l,o),i(l,u),i(l,c),i(e,v),i(e,h),i(h,y),i(e,b),i(e,k),i(k,C),i(e,$),i(e,m),i(m,_),i(e,D)},p(P,H){H&1&&a!==(a=ne(P[2].startDate)+"")&&M(o,a),H&1&&d!==(d=(P[2].endDate?ne(P[2].endDate):"present")+"")&&M(c,d),H&1&&g!==(g=P[2].position+"")&&M(y,g),H&1&&p!==(p=P[2].name+"")&&M(C,p),H&1&&q!==(q=P[2].summary+"")&&M(_,q)},d(P){P&&T(e)}}}function ft(t){let e,l,n,s,a=ne(t[2].startDate)+"",o,u,d=(t[2].endDate?ne(t[2].endDate):"present")+"",c,v,h,g=t[2].studyType+"",y,b,k=t[2].area+"",p,C,$,m=t[2].institution+"",q,_;return{c(){e=f("div"),l=f("p"),n=f("i"),s=w(),o=E(a),u=E(" - "),c=E(d),v=w(),h=f("p"),y=E(g),b=E(" in "),p=E(k),C=w(),$=f("p"),q=E(m),_=w(),r(n,"class","fa-solid fa-clock"),r(l,"class","time-period svelte-134l3qg"),r(h,"class","text-ctp-text"),r($,"class","text-ctp-subtext0"),r(e,"class","item svelte-134l3qg")},m(D,P){A(D,e,P),i(e,l),i(l,n),i(l,s),i(l,o),i(l,u),i(l,c),i(e,v),i(e,h),i(h,y),i(h,b),i(h,p),i(e,C),i(e,$),i($,q),i(e,_)},p(D,P){P&2&&a!==(a=ne(D[2].startDate)+"")&&M(o,a),P&2&&d!==(d=(D[2].endDate?ne(D[2].endDate):"present")+"")&&M(c,d),P&2&&g!==(g=D[2].studyType+"")&&M(y,g),P&2&&k!==(k=D[2].area+"")&&M(p,k),P&2&&m!==(m=D[2].institution+"")&&M(q,m)},d(D){D&&T(e)}}}function cl(t){let e,l,n,s,a,o,u,d,c,v,h,g,y,b,k=t[0],p=[];for(let m=0;m<k.length;m+=1)p[m]=ut(ct(t,k,m));let C=t[1],$=[];for(let m=0;m<C.length;m+=1)$[m]=ft(rt(t,C,m));return{c(){e=f("div"),l=f("div"),n=f("h3"),n.innerHTML=`<i class="fa-solid fa-briefcase"></i> 
      <span>Work</span>`,s=w(),a=f("br"),o=w(),u=f("div");for(let m=0;m<p.length;m+=1)p[m].c();d=w(),c=f("div"),v=f("h3"),v.innerHTML=`<i class="fa-solid fa-graduation-cap"></i> 
      <span>Education</span>`,h=w(),g=f("br"),y=w(),b=f("div");for(let m=0;m<$.length;m+=1)$[m].c();r(n,"class","svelte-134l3qg"),r(u,"class","resume-container svelte-134l3qg"),r(l,"class","work svelte-134l3qg"),r(v,"class","svelte-134l3qg"),r(b,"class","resume-container svelte-134l3qg"),r(c,"class","education svelte-134l3qg"),r(e,"class","resume svelte-134l3qg")},m(m,q){A(m,e,q),i(e,l),i(l,n),i(l,s),i(l,a),i(l,o),i(l,u);for(let _=0;_<p.length;_+=1)p[_].m(u,null);i(e,d),i(e,c),i(c,v),i(c,h),i(c,g),i(c,y),i(c,b);for(let _=0;_<$.length;_+=1)$[_].m(b,null)},p(m,[q]){if(q&1){k=m[0];let _;for(_=0;_<k.length;_+=1){const D=ct(m,k,_);p[_]?p[_].p(D,q):(p[_]=ut(D),p[_].c(),p[_].m(u,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=k.length}if(q&2){C=m[1];let _;for(_=0;_<C.length;_+=1){const D=rt(m,C,_);$[_]?$[_].p(D,q):($[_]=ft(D),$[_].c(),$[_].m(b,null))}for(;_<$.length;_+=1)$[_].d(1);$.length=C.length}},i:L,o:L,d(m){m&&T(e),ve(p,m),ve($,m)}}}function ne(t){return t.split("-").slice(0,2).reverse().join(".")}function ul(t,e,l){let{work:n}=e,{education:s}=e;return t.$$set=a=>{"work"in a&&l(0,n=a.work),"education"in a&&l(1,s=a.education)},[n,s]}class fl extends ee{constructor(e){super(),x(this,e,ul,cl,U,{work:0,education:1})}}function dt(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function _t(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function vt(t){let e,l,n=t[2].name+"",s,a,o,u,d,c=(t[2].releaseDate?re(t[2].releaseDate).slice(-4):"")+"",v,h,g=t[2].publisher+"",y,b,k,p,C,$=t[2].summary+"",m,q;return{c(){e=f("li"),l=f("a"),s=E(n),o=w(),u=f("span"),d=E("("),v=E(c),h=E(`)
          at `),y=E(g),b=w(),k=f("br"),p=w(),C=f("q"),m=E($),q=w(),r(l,"href",a=t[2].url),r(l,"class","svelte-ew8qod"),r(u,"class","text-ctp-subtext0"),r(C,"class","text-ctp-subtext0 svelte-ew8qod"),r(e,"class"," svelte-ew8qod")},m(_,D){A(_,e,D),i(e,l),i(l,s),i(e,o),i(e,u),i(u,d),i(u,v),i(u,h),i(u,y),i(e,b),i(e,k),i(e,p),i(e,C),i(C,m),i(e,q)},p(_,D){D&1&&n!==(n=_[2].name+"")&&M(s,n),D&1&&a!==(a=_[2].url)&&r(l,"href",a),D&1&&c!==(c=(_[2].releaseDate?re(_[2].releaseDate).slice(-4):"")+"")&&M(v,c),D&1&&g!==(g=_[2].publisher+"")&&M(y,g),D&1&&$!==($=_[2].summary+"")&&M(m,$)},d(_){_&&T(e)}}}function pt(t){let e,l,n=t[2].name+"",s,a,o,u,d,c,v=re(t[2].startDate)+"",h,g,y=(t[2].endDate?re(t[2].endDate):"present")+"",b,k,p,C=t[2].description+"",$,m;return{c(){e=f("li"),l=f("a"),s=E(n),o=w(),u=f("p"),d=f("i"),c=w(),h=E(v),g=E(" - "),b=E(y),k=w(),p=f("p"),$=E(C),m=w(),r(l,"href",a=t[2].url),r(l,"class","svelte-ew8qod"),r(d,"class","fa-solid fa-clock"),r(u,"class","time-period"),r(e,"class","item")},m(q,_){A(q,e,_),i(e,l),i(l,s),i(e,o),i(e,u),i(u,d),i(u,c),i(u,h),i(u,g),i(u,b),i(e,k),i(e,p),i(p,$),i(e,m)},p(q,_){_&2&&n!==(n=q[2].name+"")&&M(s,n),_&2&&a!==(a=q[2].url)&&r(l,"href",a),_&2&&v!==(v=re(q[2].startDate)+"")&&M(h,v),_&2&&y!==(y=(q[2].endDate?re(q[2].endDate):"present")+"")&&M(b,y),_&2&&C!==(C=q[2].description+"")&&M($,C)},d(q){q&&T(e)}}}function dl(t){let e,l,n,s,a,o,u,d,c,v,h,g,y,b,k=t[0],p=[];for(let m=0;m<k.length;m+=1)p[m]=vt(_t(t,k,m));let C=t[1],$=[];for(let m=0;m<C.length;m+=1)$[m]=pt(dt(t,C,m));return{c(){e=f("div"),l=f("div"),n=f("h3"),n.textContent="Publications",s=w(),a=f("br"),o=w(),u=f("ol");for(let m=0;m<p.length;m+=1)p[m].c();d=w(),c=f("div"),v=f("h3"),v.textContent="Projects",h=w(),g=f("br"),y=w(),b=f("ul");for(let m=0;m<$.length;m+=1)$[m].c();r(n,"class","svelte-ew8qod"),r(u,"type","1"),r(u,"class","svelte-ew8qod"),r(l,"class","publications svelte-ew8qod"),r(v,"class","svelte-ew8qod"),r(c,"class","projects svelte-ew8qod"),r(e,"class","research svelte-ew8qod")},m(m,q){A(m,e,q),i(e,l),i(l,n),i(l,s),i(l,a),i(l,o),i(l,u);for(let _=0;_<p.length;_+=1)p[_].m(u,null);i(e,d),i(e,c),i(c,v),i(c,h),i(c,g),i(c,y),i(c,b);for(let _=0;_<$.length;_+=1)$[_].m(b,null)},p(m,[q]){if(q&1){k=m[0];let _;for(_=0;_<k.length;_+=1){const D=_t(m,k,_);p[_]?p[_].p(D,q):(p[_]=vt(D),p[_].c(),p[_].m(u,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=k.length}if(q&2){C=m[1];let _;for(_=0;_<C.length;_+=1){const D=dt(m,C,_);$[_]?$[_].p(D,q):($[_]=pt(D),$[_].c(),$[_].m(b,null))}for(;_<$.length;_+=1)$[_].d(1);$.length=C.length}},i:L,o:L,d(m){m&&T(e),ve(p,m),ve($,m)}}}function re(t){return t.split("-").slice(0,2).reverse().join(".")}function _l(t,e,l){let{publications:n}=e,{projects:s}=e;return t.$$set=a=>{"publications"in a&&l(0,n=a.publications),"projects"in a&&l(1,s=a.projects)},[n,s]}class vl extends ee{constructor(e){super(),x(this,e,_l,dl,U,{publications:0,projects:1})}}function pl(t){let e;return{c(){e=f("div"),e.innerHTML=`<h1>This project is still under development!</h1> 

  <p>The project is inspired by the <a href="http://tokyovue.ibthemespro.com/home-light">tokyo portfolio website</a> 
    designed by <a href="https://themeforest.net/user/ib-themes">ib-themes</a>. On <a href="https://themeforest.net/">themeforest</a> 
    there are other implementations of this theme.</p> 

  <p>The background image is obtained from <a href="http://christian-woehler.de/">Christian W\xF6hler</a>. 
    For more amazing astrophotography works, visit his website.</p>`,r(e,"class","credits")},m(l,n){A(l,e,n)},p:L,i:L,o:L,d(l){l&&T(e)}}}class hl extends ee{constructor(e){super(),x(this,e,null,pl,U,{})}}function ml(t){let e,l,n,s,a,o,u,d,c,v,h;const g=t[5].default,y=At(g,t,t[4],null);return{c(){e=f("div"),l=f("div"),n=ke("svg"),s=ke("circle"),a=ke("line"),o=ke("line"),u=w(),d=f("div"),y&&y.c(),r(s,"cx","6"),r(s,"cy","6"),r(s,"r","6"),r(a,"x1","3"),r(a,"y1","3"),r(a,"x2","9"),r(a,"y2","9"),r(a,"class","svelte-18s3qyj"),r(o,"x1","9"),r(o,"y1","3"),r(o,"x2","3"),r(o,"y2","9"),r(o,"class","svelte-18s3qyj"),r(n,"id","close"),r(n,"viewBox","0 0 12 12"),r(n,"class","svelte-18s3qyj"),r(d,"id","modal-content"),r(d,"class","svelte-18s3qyj"),r(l,"id","modal"),r(l,"class","svelte-18s3qyj"),r(e,"id","topModal"),r(e,"class","svelte-18s3qyj"),et(e,"visible",t[1])},m(b,k){A(b,e,k),i(e,l),i(l,n),i(n,s),i(n,a),i(n,o),i(l,u),i(l,d),y&&y.m(d,null),t[7](e),c=!0,v||(h=[W(n,"click",t[6]),W(l,"click",Ft(bl)),W(e,"click",t[8])],v=!0)},p(b,[k]){y&&y.p&&(!c||k&16)&&St(y,g,b,b[4],c?Ot(g,b[4],k,null):Ht(b[4]),null),k&2&&et(e,"visible",b[1])},i(b){c||(B(y,b),c=!0)},o(b){K(y,b),c=!1},d(b){b&&T(e),y&&y.d(b),t[7](null),v=!1,Q(h)}}}let de;const Ne={};function gl(t=""){return Ne[t]}const bl=()=>{};function yl(t,e,l){let{$$slots:n={},$$scope:s}=e,a,o=!1,u,d,{id:c=""}=e;function v(p){p.key=="Escape"&&de==a&&g()}function h(p){d=p,!o&&(u=de,de=a,window.addEventListener("keydown",v),document.body.style.overflow="hidden",l(1,o=!0),document.body.appendChild(a))}function g(p){!o||(window.removeEventListener("keydown",v),de=u,de==null&&(document.body.style.overflow=""),l(1,o=!1),d&&d(p))}Ne[c]={open:h,close:g},Vt(()=>{delete Ne[c],window.removeEventListener("keydown",v)});const y=()=>g();function b(p){He[p?"unshift":"push"](()=>{a=p,l(0,a)})}const k=()=>g();return t.$$set=p=>{"id"in p&&l(3,c=p.id),"$$scope"in p&&l(4,s=p.$$scope)},[a,o,g,c,s,n,y,b,k]}class kl extends ee{constructor(e){super(),x(this,e,yl,ml,U,{id:3})}}function wl(t){let e,l;return e=new hl({}),{c(){ie(e.$$.fragment)},m(n,s){X(e,n,s),l=!0},i(n){l||(B(e.$$.fragment,n),l=!0)},o(n){K(e.$$.fragment,n),l=!1},d(n){Z(e,n)}}}function $l(t){return{c:L,m:L,p:L,i:L,o:L,d:L}}function Cl(t){let e,l,n,s;const a=[jl,El,Dl,ql],o=[];function u(d,c){return d[0]===1?0:d[0]===2?1:d[0]===4?2:d[0]===5?3:-1}return~(l=u(t))&&(n=o[l]=a[l](t)),{c(){e=f("div"),n&&n.c(),r(e,"class","container")},m(d,c){A(d,e,c),~l&&o[l].m(e,null),s=!0},p(d,c){let v=l;l=u(d),l===v?~l&&o[l].p(d,c):(n&&(Et(),K(o[v],1,1,()=>{o[v]=null}),jt()),~l?(n=o[l],n?n.p(d,c):(n=o[l]=a[l](d),n.c()),B(n,1),n.m(e,null)):n=null)},i(d){s||(B(n),s=!0)},o(d){K(n),s=!1},d(d){d&&T(e),~l&&o[l].d()}}}function ql(t){let e,l,n,s,a;return l=new vl({props:{publications:t[12].publications,projects:t[12].projects}}),{c(){e=f("div"),ie(l.$$.fragment),r(e,"class","tabcontent")},m(o,u){A(o,e,u),X(l,e,null),a=!0},p:L,i(o){a||(B(l.$$.fragment,o),G(()=>{s&&s.end(1),n=je(e,se,{x:200,duration:500,delay:500}),n.start()}),a=!0)},o(o){K(l.$$.fragment,o),n&&n.invalidate(),s=Le(e,se,{}),a=!1},d(o){o&&T(e),Z(l),o&&s&&s.end()}}}function Dl(t){let e,l,n,s,a;return l=new fl({props:{education:t[12].education,work:t[12].work}}),{c(){e=f("div"),ie(l.$$.fragment),r(e,"class","tabcontent")},m(o,u){A(o,e,u),X(l,e,null),a=!0},p:L,i(o){a||(B(l.$$.fragment,o),G(()=>{s&&s.end(1),n=je(e,se,{x:200,duration:500,delay:500}),n.start()}),a=!0)},o(o){K(l.$$.fragment,o),n&&n.invalidate(),s=Le(e,se,{}),a=!1},d(o){o&&T(e),Z(l),o&&s&&s.end()}}}function El(t){let e,l,n,s,a;return l=new rl({props:{basics:t[12].basics}}),{c(){e=f("div"),ie(l.$$.fragment),r(e,"class","tabcontent")},m(o,u){A(o,e,u),X(l,e,null),a=!0},p:L,i(o){a||(B(l.$$.fragment,o),G(()=>{s&&s.end(1),n=je(e,se,{x:200,duration:500,delay:500}),n.start()}),a=!0)},o(o){K(l.$$.fragment,o),n&&n.invalidate(),s=Le(e,se,{}),a=!1},d(o){o&&T(e),Z(l),o&&s&&s.end()}}}function jl(t){let e,l,n,s,a;return l=new il({props:{basics:t[12].basics}}),{c(){e=f("div"),ie(l.$$.fragment),r(e,"class","tabcontent")},m(o,u){A(o,e,u),X(l,e,null),a=!0},p:L,i(o){a||(B(l.$$.fragment,o),G(()=>{s&&s.end(1),n=je(e,se,{x:200,duration:500,delay:500}),n.start()}),a=!0)},o(o){K(l.$$.fragment,o),n&&n.invalidate(),s=Le(e,se,{}),a=!1},d(o){o&&T(e),Z(l),o&&s&&s.end()}}}function Ll(t){return{c:L,m:L,p:L,i:L,o:L,d:L}}function Pl(t){let e,l,n,s,a,o,u,d,c,v,h,g,y,b,k,p,C,$,m,q,_,D,P,H,R,O,S,N,j,F,Pe,Ke,Me,Ie,We,Je,Ve,Ye,oe,he=t[1]?"Light":"Dark",Te,Ge,Qe,ae,Ue,me,ge,ue,J,Ae,Xe;ae=new kl({props:{$$slots:{default:[wl]},$$scope:{ctx:t}}});let I={ctx:t,current:null,token:null,hasCatch:!1,pending:Ll,then:Cl,catch:$l,value:12,blocks:[,,,]};return Ut(t[2],I),{c(){e=f("div"),l=f("div"),n=f("div"),s=f("div"),a=f("button"),o=f("i"),u=w(),d=f("span"),d.textContent="Home",v=w(),h=f("button"),g=f("i"),y=w(),b=f("span"),b.textContent="About",p=w(),C=f("button"),$=f("i"),m=w(),q=f("span"),q.textContent="Experience",D=w(),P=f("button"),H=f("i"),R=w(),O=f("span"),O.textContent="Research",N=w(),j=f("div"),F=f("button"),Pe=f("p"),Pe.textContent="Impressum",Ke=w(),Me=f("p"),Me.textContent=`\xA9 ${new Date().getFullYear()} Kyoto`,Ie=w(),We=f("br"),Je=w(),Ve=f("br"),Ye=w(),oe=f("button"),Te=E(he),Ge=E(" mode"),Qe=w(),ie(ae.$$.fragment),Ue=w(),me=f("div"),ge=f("div"),ue=f("div"),I.block.c(),r(o,"class","fa-solid fa-house svg"),r(d,"class","menu_content svelte-yvv9oo"),r(a,"class",c=te(t[0]===1?"active":"")+" svelte-yvv9oo"),r(g,"class","fa-solid fa-user svg"),r(b,"class","menu_content svelte-yvv9oo"),r(h,"class",k=te(t[0]===2?"active":"")+" svelte-yvv9oo"),r($,"class","fa-solid fa-building-columns svg"),r(q,"class","menu_content svelte-yvv9oo"),r(C,"class",_=te(t[0]===4?"active":"")+" svelte-yvv9oo"),r(H,"class","fa-solid fa-atom svg"),r(O,"class","menu_content svelte-yvv9oo"),r(P,"class",S=te(t[0]===5?"active":"")+" svelte-yvv9oo"),r(s,"class","menu"),r(F,"class","svelte-yvv9oo"),r(oe,"class","svelte-yvv9oo"),r(j,"class","panel_footer svelte-yvv9oo"),r(n,"class","leftpart_inner"),r(l,"class","leftpart svelte-yvv9oo"),r(ue,"class","kyoto_section"),r(ge,"class","rightpart_in"),r(me,"class","rightpart svelte-yvv9oo")},m(V,z){A(V,e,z),i(e,l),i(l,n),i(n,s),i(s,a),i(a,o),i(a,u),i(a,d),i(s,v),i(s,h),i(h,g),i(h,y),i(h,b),i(s,p),i(s,C),i(C,$),i(C,m),i(C,q),i(s,D),i(s,P),i(P,H),i(P,R),i(P,O),i(n,N),i(n,j),i(j,F),i(F,Pe),i(F,Ke),i(F,Me),i(j,Ie),i(j,We),i(j,Je),i(j,Ve),i(j,Ye),i(j,oe),i(oe,Te),i(oe,Ge),i(j,Qe),X(ae,j,null),i(e,Ue),i(e,me),i(me,ge),i(ge,ue),I.block.m(ue,I.anchor=null),I.mount=()=>ue,I.anchor=null,J=!0,Ae||(Xe=[W(a,"click",t[5]),W(h,"click",t[6]),W(C,"click",t[7]),W(P,"click",t[8]),W(F,"click",t[9]),W(oe,"click",t[4])],Ae=!0)},p(V,[z]){t=V,(!J||z&1&&c!==(c=te(t[0]===1?"active":"")+" svelte-yvv9oo"))&&r(a,"class",c),(!J||z&1&&k!==(k=te(t[0]===2?"active":"")+" svelte-yvv9oo"))&&r(h,"class",k),(!J||z&1&&_!==(_=te(t[0]===4?"active":"")+" svelte-yvv9oo"))&&r(C,"class",_),(!J||z&1&&S!==(S=te(t[0]===5?"active":"")+" svelte-yvv9oo"))&&r(P,"class",S),(!J||z&2)&&he!==(he=t[1]?"Light":"Dark")&&M(Te,he);const be={};z&8192&&(be.$$scope={dirty:z,ctx:t}),ae.$set(be),Xt(I,t,z)},i(V){J||(B(ae.$$.fragment,V),B(I.block),J=!0)},o(V){K(ae.$$.fragment,V);for(let z=0;z<3;z+=1){const be=I.blocks[z];K(be)}J=!1},d(V){V&&T(e),Z(ae),I.block.d(),I.token=null,I=null,Ae=!1,Q(Xe)}}}let Ml="https://gist.githubusercontent.com/arunoruto/9d8bdf6e325077cff45b79e5f574e6e3/raw/resume.json";function Tl(t,e,l){const n=fetch(Ml).then(y=>y.json(),y=>{console.log("Something happened tho.."),console.log(y)});let s=1;function a(y){l(0,s=y)}let o=!1;function u(){l(1,o=!o),window.document.body.classList.toggle("dark")}return[s,o,n,a,u,()=>a(1),()=>a(2),()=>a(4),()=>a(5),()=>gl().open()]}class Al extends ee{constructor(e){super(),x(this,e,Tl,Pl,U,{})}}function Ol(t){let e,l,n,s;return n=new Al({}),{c(){e=f("main"),l=f("div"),ie(n.$$.fragment),r(l,"id","app"),r(l,"class","kyoto_all_wrap"),r(e,"class","dark:ctp-frappe")},m(a,o){A(a,e,o),i(e,l),X(n,l,null),s=!0},p:L,i(a){s||(B(n.$$.fragment,a),s=!0)},o(a){K(n.$$.fragment,a),s=!1},d(a){a&&T(e),Z(n)}}}class Sl extends ee{constructor(e){super(),x(this,e,null,Ol,U,{})}}new Sl({target:document.getElementById("app")});
