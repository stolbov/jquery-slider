﻿(function(g,f,b,e,c,d,l){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.a=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var k=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-k.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?k.$EaseInBounce(a*2)*.5:k.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},r={te:37,ue:39},n={qe:0,re:1,ve:2,ze:3,Ae:4,ye:5},z=1,v=2,w=4,y=5,i,a=new function(){var i=this,p=n.qe,j=0,s=0,B=0,gb=navigator.appName,k=navigator.userAgent;function F(){if(!p)if(gb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");p=n.re;s=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||s}else if(gb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){p=n.ve;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");p=h>=0?n.Ae:n.ze;j=parseFloat(k.substring(i+1,a))}if(b>=0)B=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){p=n.ye;j=parseFloat(e[2])}}}function r(){F();return p==z}function I(){return r()&&(j<6||f.compatMode=="BackCompat")}function ab(){F();return p==v}function mb(){F();return p==w}function ob(){F();return p==y}function A(){return r()&&j<9}var D;function t(a){if(!D){q(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.kc(a.style[b])){D=b;return c}});D=D||"transform"}return D}function eb(a){return Object.prototype.toString.call(a)}var L;function q(a,c){if(eb(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function pb(){if(!L){L={};q(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){L["[object "+a+"]"]=a.toLowerCase()})}return L}function C(a){return a==e?String(a):pb()[eb(a)]||"object"}function fb(b,a){setTimeout(b,a||0)}function K(b,d,c){var a=!b||b=="inherit"?"":b;q(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function bb(b,a){if(j<9)b.style.filter=a}i.Ab=r;i.ec=mb;i.pe=ob;i.zb=A;i.W=function(){return j};i.fc=function(){return B};i.$Delay=fb;i.P=function(a){if(i.he(a))a=f.getElementById(a);return a};i.hb=function(a){return a?a:g.event};i.fe=function(a){a=i.hb(a);return a.target||a.srcElement||f};i.gc=function(a){a=i.hb(a);var b=new h;if(a.type=="DOMMouseScroll"&&ab()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};function G(c,d,a){if(a!=l)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function R(b,c,a,d){if(a!=l){d&&(a+="px");G(b,c,a)}else return parseFloat(G(b,c))}function m(d,a){var b=a&2,c=a?R:G;return function(e,a){return c(e,d,a,b)}}function lb(b){if(r()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?parseFloat(a[1])/100:1}else return parseFloat(b.style.opacity||"1")}function nb(c,a,f){if(r()&&s<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=K(h,[i],d);bb(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}i.je=function(b,c){var a=t(b);if(a)b.style[a+"Origin"]=c};i.ne=function(a,c){if(r()&&s<9||s<10&&I())a.style.zoom=c==1?"":c;else{var b=t(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=K(e,[g],f);a.style[b]=d}}};i.oe=function(a){if(!a.style[t(a)]||a.style[t(a)]=="none")a.style[t(a)]="perspective(2000px)"};i.e=function(a,c,d,b){a=i.P(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.me=function(a,c,d,b){a=i.P(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.ke=function(b,a){i.e(A()?f:g,"mouseup",b,a)};i.E=function(a){a=i.hb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.p=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.le=function(a,c){var b=f.createTextNode(c);i.lc(a);a.appendChild(b)};i.lc=function(a){a.innerHTML=""};i.eb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function S(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(i.O(a,b)==c)return a;if(f){var d=S(a,c,b,f);if(d)return d}}}i.o=S;function X(a,c,d){for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(d){var b=X(a,c,d);if(b)return b}}}i.Ge=X;i.De=function(b,a){return b.getElementsByTagName(a)};i.m=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.kc=function(a){return C(a)=="undefined"};i.Ee=function(a){return C(a)=="function"};i.he=function(a){return C(a)=="string"};i.Be=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.h=q;i.F=function(a){return i.jc("DIV",a)};i.Ce=function(a){return i.jc("SPAN",a)};i.jc=function(b,a){a=a||f;return a.createElement(b)};i.D=function(){};i.Yb=function(a,b){return a.getAttribute(b)};i.O=function(a,b){return i.Yb(a,b)||i.Yb(a,"data-"+b)};i.Fe=function(b,c,a){b.setAttribute(c,a)};i.Ub=function(a){return a.className};i.wb=function(b,a){b.className=a||""};i.cb=function(a){return a.parentNode};i.A=function(a){i.Q(a,"none")};i.n=function(a,b){i.Q(a,b==d?"none":"")};i.ed=function(b,a){b.removeAttribute(a)};i.pd=function(){return r()&&j<10};i.od=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=K(g,f,"");a.gb(d,e)}};i.u=function(){return+new Date};i.s=function(b,a){b.appendChild(a)};i.qb=function(c,b,a){c.insertBefore(b,a)};i.Z=function(b,a){b.removeChild(a)};i.Oc=function(b,a){q(a,function(a){i.Z(b,a)})};i.Tc=function(a){i.Oc(a,i.eb(a))};i.mc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(e){return d}return b==a};i.v=function(b,a){return b.cloneNode(a)};function N(a){if(a){var b=a.$FlyDirection;if(b&1)a.x=a.$ScaleHorizontal||1;if(b&2)a.x=-a.$ScaleHorizontal||-1;if(b&4)a.y=a.$ScaleVertical||1;if(b&8)a.y=-a.$ScaleVertical||-1;N(a.$Brother)}}i.nb=function(a){if(a){for(var b=0;b<a.length;b++)N(a[b]);for(var c in a)N(a[c])}};function O(b,a,c){a.onload=e;a.abort=e;b&&b(a,c)}i.S=function(d,b){if(i.pe()&&j<11.6||!d)O(b,e);else{var a=new Image;a.onload=i.p(e,O,b,a);a.onabort=i.p(e,O,b,a,c);a.src=d}};i.Td=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.h(e,function(b){a.S(b.src,c)});c()};i.hc=function(d,k,j,i){if(i)d=a.v(d,c);for(var h=a.De(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.v(j,c);a.wb(e,a.Ub(b));a.gb(e,b.style.cssText);var g=a.cb(b);a.qb(g,e,b);a.Z(g,b)}return d};var E;function rb(b){var g=this,k,h,j,e;function f(){var c=k;if(e)c+="ds";else if(h)c+="dn";else if(j)c+="av";a.wb(b,c)}function m(a){if(e)i.E(a);else{E.push(g);h=c;f()}}g.Ud=function(){h=d;f()};g.Zb=function(a){if(a!=l){j=a;f()}else return j};g.$Enable=function(a){if(a!=l){e=!a;f()}else return!e};b=i.P(b);if(!E){i.ke(function(){var a=E;E=[];q(a,function(a){a.Ud()})});E=[]}k=i.Ub(b);a.e(b,"mousedown",m)}i.kb=function(a){return new rb(a)};i.Lb=G;i.V=m("overflow");i.k=m("top",2);i.l=m("left",2);i.f=m("width",2);i.g=m("height",2);i.xe=m("marginLeft",2);i.we=m("marginTop",2);i.r=m("position");i.Q=m("display");i.z=m("zIndex",1);i.Tb=function(b,a,c){if(a!=l)nb(b,a,c);else return lb(b)};i.gb=function(a,b){if(b!=l)a.style.cssText=b;else return a.style.cssText};var Q={$Opacity:i.Tb,$Top:i.k,$Left:i.l,Nb:i.f,Mb:i.g,T:i.r,Pf:i.Q,$ZIndex:i.z},u;function J(){if(!u)u=i.m({Of:i.we,Nf:i.xe,$Clip:i.od},Q);return u}i.Cd=J;i.L=function(c,b){var a=J();q(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};i=function(m,z,g,O,y,w){m=m||0;var f=this,q,n,o,x,A=0,C,M,L,D,j=0,s=0,E,l=m,i,h,p,t=[],B;function I(b){i+=b;h+=b;l+=b;j+=b;s+=b;a.h(t,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+m*b;I(c);return h}function v(u,G){var m=u;if(p&&(m>=h||m<=i))m=((m-i)%p+p)%p+i;if(!E||x||G||j!=m){var o=b.min(m,h);o=b.max(o,i);if(!E||x||G||o!=s){if(w){var d=w;if(y){var v=(o-l)/(z||1);if(g.$Reverse)v=1-v;d={};for(var n in w){var R=M[n]||1,J=L[n]||[0,1],k=(v-J[0])/J[1];k=b.min(b.max(k,0),1);k=k*R;var H=b.floor(k);if(k!=H)k-=H;var Q=C[n]||C.pb,I=Q(k),q,K=y[n],F=w[n];if(a.Be(F))q=K+(F-K)*I;else{q=a.m({H:{}},y[n]);a.h(F.H,function(c,b){var a=c*I;q.H[b]=a;q[b]+=a})}d[n]=q}}if(y.$Zoom);if(w.$Clip&&g.$Move){var r=d.$Clip.H,D=(r.$Top||0)+(r.$Bottom||0),A=(r.$Left||0)+(r.$Right||0);d.$Left=(d.$Left||0)+A;d.$Top=(d.$Top||0)+D;d.$Clip.$Left-=A;d.$Clip.$Right-=A;d.$Clip.$Top-=D;d.$Clip.$Bottom-=D}if(d.$Clip&&a.pd()&&!d.$Clip.$Top&&!d.$Clip.$Left&&d.$Clip.$Right==g.Sb&&d.$Clip.$Bottom==g.Rb)d.$Clip=e;a.h(d,function(b,a){B[a]&&B[a](O,b)})}f.vb(s-l,o-l)}s=o;a.h(t,function(b,c){var a=u<j?t[t.length-c-1]:b;a.w(u,G)});var P=j,N=u;j=m;E=c;f.fb(P,N)}}function F(a,c){c&&a.ic(h,1);h=b.max(h,a.Y());t.push(a)}function H(){if(q){var d=a.u(),e=b.min(d-A,80),c=j+e*o;A=d;if(c*o>=n*o)c=n;v(c);if(!x&&c*o>=n*o)J(D);else a.$Delay(H,g.$Interval)}}function u(d,e,g){if(!q){q=c;x=g;D=e;d=b.max(d,i);d=b.min(d,h);n=d;o=n<j?-1:1;f.Wb();A=a.u();H()}}function J(a){if(q){x=q=D=d;f.ac();a&&a()}}f.$Play=function(a,b,c){u(a?j+a:h,b,c)};f.Xb=function(b,a,c){u(b,a,c)};f.C=function(){J()};f.gd=function(a){u(a)};f.B=function(){return j};f.nc=function(){return n};f.X=function(){return s};f.w=v;f.Kc=function(){v(i,c)};f.$Move=function(a){v(j+a)};f.$IsPlaying=function(){return q};f.id=function(a){p=a};f.ic=N;f.$Shift=I;f.ub=function(a){F(a,0)};f.sb=function(a){F(a,1)};f.Y=function(){return h};f.fb=a.D;f.Wb=a.D;f.ac=a.D;f.vb=a.D;f.yb=a.u();g=a.m({$Interval:16},g);p=g.Gc;B=a.m({},a.Cd(),g.Fc);i=l=m;h=m+z;var M=g.$Round||{},L=g.$During||{};C=a.m({pb:a.Ee(g.$Easing)&&g.$Easing||k.$EaseSwing},g.$Easing)};var s;new function(){;function l(o,gc){var j=this;function Bc(){var a=this;i.call(a,-1e8,2e8);a.yd=function(){var c=a.X(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{G:f,wd:d,T:e}};a.fb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Tb(e,c);j.a(l.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function Ac(){var b=this;i.call(b,0,0,{Gc:q});a.h(D,function(a){M&1&&a.id(q);b.sb(a);a.$Shift(ib/ac)})}function zc(){var a=this,b=Sb.$Elmt;i.call(a,-1,2,{$Easing:k.$EaseLinear,Fc:{T:Yb},Gc:q},b,{T:1},{T:-1});a.rb=b}function oc(o,m){var a=this,f,g,h,k,b;i.call(a,-1e8,2e8);a.Wb=function(){S=c;W=e;j.a(l.$EVT_SWIPE_START,u(y.B()),y.B())};a.ac=function(){S=d;k=d;var a=y.yd();j.a(l.$EVT_SWIPE_END,u(y.B()),y.B());!a.T&&Dc(a.wd,s)};a.fb=function(d,c){var a;if(k)a=b;else{a=g;if(h)a=n.$SlideEasing(c/h)*(g-f)+f}y.w(a)};a.jb=function(b,d,c,e){f=b;g=d;h=c;y.w(b);a.w(0);a.Xb(c,e)};a.Hd=function(d){k=c;b=d;a.$Play(d,e,c)};a.Kd=function(a){b=a};y=new Bc;y.ub(o);y.ub(m)}function pc(){var c=this,b=Xb();a.z(b,0);c.$Elmt=b;c.ob=function(){a.A(b);a.lc(b)}}function yc(p,o){var f=this,t,x,J,y,g,A=[],R,r,X,G,P,F,h,v,k;i.call(f,-w,w+1,{});function E(a){x&&x.tb();t&&t.tb();S(p,a);F=c;t=new H.$Class(p,H,1);x=new H.$Class(p,H);x.Kc();t.Kc()}function Z(){t.yb<H.yb&&E()}function M(o,q,m){if(!G){G=c;if(g&&m){var e=m.width,b=m.height,k=e,i=b;if(e&&b&&n.$FillMode){if(n.$FillMode&3&&(!(n.$FillMode&4)||e>L||b>K)){var h=d,p=L/K*b/e;if(n.$FillMode&1)h=p>1;else if(n.$FillMode&2)h=p<1;k=h?e*K/b:L;i=h?K:b*L/e}a.f(g,k);a.g(g,i);a.k(g,(K-i)/2);a.l(g,(L-k)/2)}a.r(g,"absolute");j.a(l.$EVT_LOAD_END,dc)}}a.A(q);o&&o(f)}function Y(b,c,d,e){if(e==W&&s==o&&T)if(!Cc){var a=u(b);B.ae(a,o,c,f,d);c.Id();cb.ic(a,1);cb.w(a);z.jb(b,b,0)}}function ab(b){if(b==W&&s==o){if(!h){var a=e;if(B)if(B.G==o)a=B.Vd();else B.ob();Z();h=new wc(o,a,f.Jd(),f.vd());h.uc(k)}!h.$IsPlaying()&&h.Ob()}}function Q(d,c){if(d==o){if(d!=c)D[c]&&D[c].td();else h&&h.ud();k&&k.$Enable();var j=W=a.u();f.S(a.p(e,ab,j))}else{var i=b.abs(o-d),g=w+n.$LazyLoading;(!P||i<=g||q-i<=g)&&f.S()}}function bb(){if(s==o&&h){h.C();k&&k.$Quit();k&&k.$Disable();h.tc()}}function eb(){s==o&&h&&h.C()}function O(b){if(V)a.E(b);else j.a(l.$EVT_CLICK,o,b)}function N(){k=v.pInstance;h&&h.uc(k)}f.S=function(d,b){b=b||y;if(A.length&&!G){a.n(b);if(!X){X=c;j.a(l.$EVT_LOAD_START);a.h(A,function(b){if(!b.src){b.src=a.O(b,"src2");a.Q(b,b["display-origin"])}})}a.Td(A,g,a.p(e,M,d,b))}else M(d,b)};f.Xd=function(){if(B){var b=B.Nd(q);if(b){var f=W=a.u(),c=o+1*Wb,d=D[u(c)];return d.S(a.p(e,Y,c,d,b,f),y)}}db(s+n.$AutoPlaySteps*Wb)};f.vc=function(){Q(o,o)};f.td=function(){k&&k.$Quit();k&&k.$Disable();f.xc();h&&h.Wd();h=e;E()};f.Id=function(){a.A(p)};f.xc=function(){a.n(p)};f.Zd=function(){k&&k.$Enable()};function S(b,f,e){if(b["jssor-slider"])return;e=e||0;if(!F){if(b.tagName=="IMG"){A.push(b);if(!b.src){P=c;b["display-origin"]=a.Q(b);a.A(b)}}a.zb()&&a.z(b,(a.z(b)||0)+1);if(n.$HWA&&a.fc()>0)(!I||a.fc()<534||!gb)&&a.oe(b)}var h=a.eb(b);a.h(h,function(h){var j=a.O(h,"u");if(j=="player"&&!v){v=h;if(v.pInstance)N();else a.e(v,"dataavailable",N)}if(j=="caption"){if(!a.Ab()&&!f){var i=a.v(h,c);a.qb(b,i,h);a.Z(b,h);h=i;f=c}}else if(!F&&!e&&!g&&a.O(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){R=g;a.L(R,U);r=a.v(g,d);a.e(r,"click",O);a.L(r,U);a.Q(r,"block");a.Tb(r,0);a.Lb(r,"backgroundColor","#000");g=a.Ge(g,"IMG")}g.border=0;a.L(g,U)}}S(h,f,e+1)})}f.vb=function(c,b){var a=w-b;Yb(J,a)};f.Jd=function(){return t};f.vd=function(){return x};f.G=o;m.call(f);var C=a.o(p,"thumb");if(C){f.de=a.v(C,c);a.ed(C,"id");a.A(C)}a.n(p);y=a.v(fb,c);a.z(y,1e3);a.e(p,"click",O);E(c);f.Hc=g;f.pc=r;f.rb=J=p;a.s(J,y);j.$On(203,Q);j.$On(28,eb);j.$On(24,bb)}function wc(h,q,v,u){var b=this,m=0,x=0,o,g,e,f,k,r,w,t,p=D[h];i.call(b,0,0);function y(){a.Tc(P);ec&&k&&p.pc&&a.s(P,p.pc);a.n(P,k||!p.Hc)}function z(){if(r){r=d;j.a(l.$EVT_ROLLBACK_END,h,e,m,g,e,f);b.w(g)}b.Ob()}function A(a){t=a;b.C();b.Ob()}b.Ob=function(){var a=b.X();if(!C&&!S&&!t&&s==h){if(!a){if(o&&!k){k=c;b.tc(c);j.a(l.$EVT_SLIDESHOW_START,h,m,x,o,f)}y()}var d,n=l.$EVT_STATE_CHANGE;if(a!=f)if(a==e)d=f;else if(a==g)d=e;else if(!a)d=g;else if(a>e){r=c;d=e;n=l.$EVT_ROLLBACK_START}else d=b.nc();j.a(n,h,a,m,g,e,f);var i=T&&(!X||J);if(a==f)i&&p.Xd();else(i||a!=e)&&b.Xb(d,z)}};b.ud=function(){e==f&&e==b.X()&&b.w(g)};b.Wd=function(){B&&B.G==h&&B.ob();var a=b.X();a<f&&j.a(l.$EVT_STATE_CHANGE,h,-a-1,m,g,e,f)};b.tc=function(b){q&&a.V(kb,b&&q.Lc.$Outside?"":"hidden")};b.vb=function(b,a){if(k&&a>=o){k=d;y();p.xc();B.ob();j.a(l.$EVT_SLIDESHOW_END,h,m,x,o,f)}j.a(l.$EVT_PROGRESS_CHANGE,h,a,m,g,e,f)};b.uc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.ld,A)}};q&&b.sb(q);o=b.Y();b.Y();b.sb(v);g=v.Y();e=g+n.$AutoPlayInterval;u.$Shift(e);b.ub(u);f=b.Y()}function Yb(c,g){var f=x>0?x:jb,d=Bb*g*(f&1),e=Cb*g*(f>>1&1);if(!a.ec()){d=b.round(d);e=b.round(e)}if(a.Ab()&&a.W()>=10&&a.W()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.ec()&&a.W()>=30&&a.W()<34){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.l(c,d);a.k(c,e)}}function uc(c){var b=a.fe(c).tagName;!N&&b!="INPUT"&&b!="TEXTAREA"&&sc()&&tc(c)}function Ib(){V=0;rb=S;Lb=z.nc();E=y.B();if(C||!J&&X&12){z.C();j.a(l.Nc)}}function fc(e){if(!C&&(J||!(X&12))&&!z.$IsPlaying()){var c=y.B(),a=b.ceil(E);if(e&&b.abs(F)>=n.$MinDragOffsetToSlide){a=b.ceil(c);a+=hb}if(!(M&1))a=b.min(q-w,b.max(a,0));var d=b.abs(a-c);d=1-b.pow(1-d,5);if(!V&&rb)z.gd(Lb);else if(c==a){ub.Zd();ub.vc()}else z.jb(c,a,d*Ub)}Ib()}function tc(b){C=c;Ab=d;W=e;a.e(f,pb,bc);a.u();Ib();if(!rb)x=0;if(I){var h=b.touches[0];vb=h.clientX;wb=h.clientY}else{var g=a.gc(b);vb=g.x;wb=g.y;a.E(b)}F=0;eb=0;hb=0;j.a(l.$EVT_DRAG_START,u(E),E,b)}function bc(e){if(C&&(!a.zb()||e.button)){var f;if(I){var m=e.touches;if(m&&m.length>0)f=new h(m[0].clientX,m[0].clientY)}else f=a.gc(e);if(f){var k=f.x-vb,l=f.y-wb;if(b.floor(E)!=E)x=x||jb&N;if((k||l)&&!x){if(N==3)if(b.abs(l)>b.abs(k))x=2;else x=1;else x=N;if(I&&x==1&&b.abs(l)-b.abs(k)>3)Ab=c}if(x){var d=l,j=Cb;if(x==1){d=k;j=Bb}if(!(M&1)){if(d>0){var g=j*s,i=d-g;if(i>0)d=g+b.sqrt(i)*5}if(d<0){var g=j*(q-w-s),i=-d-g;if(i>0)d=-g-b.sqrt(i)*5}}if(F-eb<-2)hb=0;else if(F-eb>2)hb=-1;eb=F;F=d;tb=E-F/j/(ob||1);if(F&&x&&!Ab){a.E(e);if(!S)z.Hd(tb);else z.Kd(tb)}else a.zb()&&a.E(e)}}}else Fb(e)}function Fb(e){qc();if(C){C=d;a.u();a.me(f,pb,bc);V=F;V&&a.E(e);z.C();var b=y.B();j.a(l.$EVT_DRAG_END,u(b),b,u(E),E,e);fc(c)}}function nc(a){D[s];s=u(a);ub=D[s];Tb(a);return s}function Dc(a,b){x=0;nc(a);j.a(l.$EVT_PARK,u(a),b)}function Tb(b,c){yb=b;a.h(R,function(a){a.Gb(u(b),b,c)})}function sc(){var b=l.sc||0,a=Q;if(I)a&1&&(a&=1);l.sc|=a;return N=a&~b}function qc(){if(N){l.sc&=~Q;N=0}}function Xb(){var b=a.F();a.L(b,U);a.r(b,"absolute");return b}function u(a){return(a%q+q)%q}function kc(a,c){if(c)if(!M){a=b.min(b.max(a+yb,0),q-w);c=d}else if(M&2){a=u(a+yb);c=d}db(a,n.$SlideDuration,c)}function zb(){a.h(R,function(a){a.Kb(a.mb.$ChanceToShow>J)})}function ic(b){b=a.hb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.mc(o,c)||a.mc(o,d))return;J=1;zb();C||!(X&12)||fc()}function hc(){if(J){J=0;zb();C||!(X&12)||Ib()}}function jc(){U={Nb:L,Mb:K,$Top:0,$Left:0};a.h(Z,function(b){a.L(b,U);a.r(b,"absolute");a.V(b,"hidden");a.A(b)});a.L(fb,U)}function mb(b,a){db(b,a,c)}function db(h,g,k){if(Qb&&(!C||n.$NaviQuitDrag)){S=c;C=d;z.C();if(a.kc(g))g=Ub;var f=Gb.X(),e=h;if(k){e=f+h;if(h>0)e=b.ceil(e);else e=b.floor(e)}if(!(M&1)){e=u(e);e=b.max(0,b.min(e,q-w))}var j=(e-f)%q;e=f+j;var i=f==e?0:g*b.abs(j);i=b.min(i,g*w*1.5);z.jb(f,e,i||1)}}j.$PlayTo=db;j.$GoTo=function(a){db(a,1)};j.$Next=function(){mb(1)};j.$Prev=function(){mb(-1)};j.$Pause=function(){T=d};j.$Play=function(){if(!T){T=c;D[s]&&D[s].vc()}};j.$SetSlideshowTransitions=function(b){a.nb(b);n.$SlideshowOptions.$Transitions=b};j.$SetCaptionTransitions=function(b){a.nb(b);H.Qc=b;H.yb=a.u()};j.$SlidesCount=function(){return Z.length};j.$CurrentIndex=function(){return s};j.$IsAutoPlaying=function(){return T};j.$IsDragging=function(){return C};j.$IsSliding=function(){return S};j.$IsMouseOver=function(){return!J};j.$LastDragSucceded=function(){return V};j.$GetOriginalWidth=function(){return a.f(v||o)};j.$GetOriginalHeight=function(){return a.g(v||o)};j.$GetScaleWidth=function(){return a.f(o)};j.$GetScaleHeight=function(){return a.g(o)};j.$SetScaleWidth=function(c){if(!v){var b=a.F(f);a.gb(b,a.gb(o));a.wb(b,a.Ub(o));a.r(b,"relative");a.k(b,0);a.l(b,0);a.V(b,"visible");v=a.F(f);a.r(v,"absolute");a.k(v,0);a.l(v,0);a.f(v,a.f(o));a.g(v,a.g(o));a.je(v,"0 0");a.s(v,b);var g=a.eb(o);a.s(o,v);a.Lb(o,"backgroundImage","");var e={navigator:ab&&ab.$Scale==d,arrowleft:O&&O.$Scale==d,arrowright:O&&O.$Scale==d,thumbnavigator:G&&G.$Scale==d,thumbwrapper:G&&G.$Scale==d};a.h(g,function(c){a.s(e[a.O(c,"u")]?o:b,c)});a.n(b);a.n(v)}ob=c/a.f(v);a.ne(v,ob);a.f(o,c);a.g(o,ob*a.g(v));a.h(R,function(a){a.Ib()})};j.Bc=function(a){var d=b.ceil(u(ib/ac)),c=u(a-s+d);if(c>w){if(a-s>q/2)a-=q;else if(a-s<=-q/2)a+=q}else a=s+c-d;return a};m.call(this);j.$Elmt=o=a.P(o);var n=a.m({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:k.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},gc),jb=n.$PlayOrientation&3,Wb=(n.$PlayOrientation&4)/-4||1,bb=n.$SlideshowOptions,H=a.m({$Class:t},n.ff);a.nb(H.Qc);var ab=n.$BulletNavigatorOptions,O=n.$ArrowNavigatorOptions,G=n.$ThumbnailNavigatorOptions,Y=n.$UISearchMode,v,A=a.o(o,"slides",e,Y),fb=a.o(o,"loading",e,Y)||a.F(f),Kb=a.o(o,"navigator",e,Y),cc=a.o(o,"arrowleft",e,Y),Zb=a.o(o,"arrowright",e,Y),Jb=a.o(o,"thumbnavigator",e,Y),mc=a.f(A),lc=a.g(A),U,Z=[],vc=a.eb(A);a.h(vc,function(b){b.tagName=="DIV"&&!a.O(b,"u")&&Z.push(b)});var s=-1,yb,ub,q=Z.length,L=n.$SlideWidth||mc,K=n.$SlideHeight||lc,Vb=n.$SlideSpacing,Bb=L+Vb,Cb=K+Vb,ac=jb&1?Bb:Cb,w=b.min(n.$DisplayPieces,q),kb,x,N,Ab,I,R=[],Pb,Rb,Ob,ec,Cc,T,X=n.$PauseOnHover,Ub=n.$SlideDuration,sb,gb,ib,Qb=w<q,M=Qb?n.$Loop:0,Q,V,J=1,S,C,W,vb=0,wb=0,F,eb,hb,Gb,y,cb,z,Sb=new pc,ob;T=n.$AutoPlay;j.mb=gc;jc();o["jssor-slider"]=c;a.z(A,a.z(A)||0);a.r(A,"absolute");kb=a.v(A);a.qb(a.cb(A),kb,A);if(bb){ec=bb.$ShowLink;sb=bb.$Class;a.nb(bb.$Transitions);gb=w==1&&q>1&&sb&&(!a.Ab()||a.W()>=8)}ib=gb||w>=q||!(M&1)?0:n.$ParkingPosition;Q=(w>1||ib?jb:-1)&n.$DragOrientation;var xb=A,D=[],B,P,Eb="mousedown",pb="mousemove",Hb="mouseup",nb,E,rb,Lb,tb;if(g.navigator.msPointerEnabled){Eb="MSPointerDown";pb="MSPointerMove";Hb="MSPointerUp";nb="MSPointerCancel";if(Q){var Db="none";if(Q==1)Db="pan-y";else if(Q==2)Db="pan-x";a.Fe(xb.style,"-ms-touch-action",Db)}}else if("ontouchstart"in g||"createTouch"in f){I=c;Eb="touchstart";pb="touchmove";Hb="touchend";nb="touchcancel"}cb=new zc;if(gb)B=new sb(Sb,L,K,bb,I);a.s(kb,cb.rb);a.V(A,"hidden");P=Xb();a.Lb(P,"backgroundColor","#000");a.Tb(P,0);a.qb(xb,P,xb.firstChild);for(var qb=0;qb<Z.length;qb++){var xc=Z[qb],dc=new yc(xc,qb);D.push(dc)}a.A(fb);Gb=new Ac;z=new oc(Gb,cb);if(Q){a.e(A,Eb,uc);a.e(f,Hb,Fb);nb&&a.e(f,nb,Fb)}X&=I?10:5;if(Kb&&ab){Pb=new ab.$Class(Kb,ab);R.push(Pb)}if(O&&cc&&Zb){Rb=new O.$Class(cc,Zb,O);R.push(Rb)}if(Jb&&G){G.$StartIndex=n.$StartIndex;Ob=new G.$Class(Jb,G);R.push(Ob)}a.h(R,function(a){a.Db(q,D,fb);a.$On(p.ib,kc)});j.$SetScaleWidth(j.$GetOriginalWidth());a.e(o,"mouseout",ic);a.e(o,"mouseover",hc);zb();n.$ArrowKeyNavigation&&a.e(f,"keydown",function(a){if(a.keyCode==r.te)mb(-1);else a.keyCode==r.ue&&mb(1)});var lb=n.$StartIndex;if(!(M&1))lb=b.max(0,b.min(lb,q-w));z.jb(lb,lb,0)}l.$EVT_CLICK=21;l.$EVT_DRAG_START=22;l.$EVT_DRAG_END=23;l.$EVT_SWIPE_START=24;l.$EVT_SWIPE_END=25;l.$EVT_LOAD_START=26;l.$EVT_LOAD_END=27;l.Nc=28;l.$EVT_POSITION_CHANGE=202;l.$EVT_PARK=203;l.$EVT_SLIDESHOW_START=206;l.$EVT_SLIDESHOW_END=207;l.$EVT_PROGRESS_CHANGE=208;l.$EVT_STATE_CHANGE=209;l.$EVT_ROLLBACK_START=210;l.$EVT_ROLLBACK_END=211;g.$JssorSlider$=s=l};var p={ib:1};g.$JssorBulletNavigator$=function(f,D){var h=this;m.call(h);f=a.P(f);var t,u,s,r,l=0,g,n,k,y,z,j,i,q,o,C=[],A=[];function x(a){a!=-1&&A[a].Zb(a==l)}function v(a){h.a(p.ib,a*n)}h.$Elmt=f;h.Gb=function(a){if(a!=r){var d=l,c=b.floor(a/n);l=c;r=a;x(d);x(c)}};h.Kb=function(b){a.n(f,b)};var B;h.Ib=function(){if(!B||g.$Scale==d){g.$AutoCenter&1&&a.l(f,(a.f(a.cb(f))-u)/2);g.$AutoCenter&2&&a.k(f,(a.g(a.cb(f))-s)/2);B=c}};var w;h.Db=function(D){if(!w){t=b.ceil(D/n);l=0;var p=q+y,r=o+z,m=b.ceil(t/k)-1;u=q+p*(!j?m:k-1);s=o+r*(j?m:k-1);a.f(f,u);a.g(f,s);for(var d=0;d<t;d++){var B=a.Ce();a.le(B,d+1);var h=a.hc(i,"NumberTemplate",B,c);a.r(h,"absolute");var x=d%(m+1);a.l(h,!j?p*x:d%k*p);a.k(h,j?r*x:b.floor(d/(m+1))*r);a.s(f,h);C[d]=h;g.$ActionMode&1&&a.e(h,"click",a.p(e,v,d));g.$ActionMode&2&&a.e(h,"mouseover",a.p(e,v,d));A[d]=a.kb(h)}w=c}};h.mb=g=a.m({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},D);i=a.o(f,"prototype");q=a.f(i);o=a.g(i);a.Z(f,i);n=g.$Steps||1;k=g.$Lanes||1;y=g.$SpacingX;z=g.$SpacingY;j=g.$Orientation-1};g.$JssorArrowNavigator$=function(b,g,s){var f=this;m.call(f);var h,j,q=a.cb(b),o=a.f(b),l=a.g(b);function k(a){f.a(p.ib,a,c)}f.Gb=function(b,a,c){if(c);};f.Kb=function(c){a.n(b,c);a.n(g,c)};var r;f.Ib=function(){if(!r||h.$Scale==d){var f=a.f(q),e=a.g(q);if(h.$AutoCenter&1){a.l(b,(f-o)/2);a.l(g,(f-o)/2)}if(h.$AutoCenter&2){a.k(b,(e-l)/2);a.k(g,(e-l)/2)}r=c}};var n;f.Db=function(d){if(!n){a.e(b,"click",a.p(e,k,-j));a.e(g,"click",a.p(e,k,j));a.kb(b);a.kb(g);n=c}};f.mb=h=a.m({$Steps:1},s);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,e,u=[],y,w,f,n,o,t,r,k,q,g,j;m.call(h);i=a.P(i);function z(n,d){var g=this,b,m,k;function o(){m.Zb(l==d)}function i(){if(!q.$LastDragSucceded()){var a=f-d%f,b=q.Bc((d+a)/f-1),c=b*f+f-a;h.a(p.ib,c)}}g.G=d;g.zc=o;k=n.de||n.Hc||a.F();g.rb=b=a.hc(j,"ThumbnailTemplate",k,c);m=a.kb(b);e.$ActionMode&1&&a.e(b,"click",i);e.$ActionMode&2&&a.e(b,"mouseover",i)}h.Gb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].zc();u[c].zc();!e&&q.$PlayTo(q.Bc(b.floor(d/f)))};h.Kb=function(b){a.n(i,b)};h.Ib=a.D;var v;h.Db=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=e.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=r+(r+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.r(g,"absolute");a.V(g,"hidden");e.$AutoCenter&1&&a.l(g,(y-C)/2);e.$AutoCenter&2&&a.k(g,(w-A)/2);a.f(g,C);a.g(g,A);var j=[];a.h(D,function(l,e){var i=new z(l,e),d=i.rb,c=b.floor(e/f),k=e%f;a.l(d,(t+n)*k*(1-h));a.k(d,(r+o)*k*h);if(!j[c]){j[c]=a.F();a.s(g,j[c])}a.s(j[c],d);u.push(i)});var E=a.m({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);q=new s(i,E);v=c}};h.mb=e=a.m({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.f(i);w=a.g(i);g=a.o(i,"slides");j=a.o(g,"prototype");t=a.f(j);r=a.g(j);a.Z(g,j);f=e.$Lanes||1;n=e.$SpacingX;o=e.$SpacingY;k=e.$DisplayPieces};function t(){i.call(this,0,0);this.tb=a.D}})(window,document,Math,null,true,false)