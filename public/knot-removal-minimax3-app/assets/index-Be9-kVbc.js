(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="170",Vr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,Nl=1,Mh=2,ou=1,Sh=2,yi=3,Xi=0,Pn=1,ti=2,Hi=0,Hr=1,Fl=2,Ol=3,Bl=4,yh=5,rr=100,bh=101,Eh=102,wh=103,Th=104,Ah=200,Ch=201,Rh=202,Ph=203,So=204,yo=205,Lh=206,Dh=207,Ih=208,Uh=209,Nh=210,Fh=211,Oh=212,Bh=213,zh=214,bo=0,Eo=1,wo=2,Xr=3,To=4,Ao=5,Co=6,Ro=7,dl=0,kh=1,Vh=2,Gi=0,Hh=1,Gh=2,Wh=3,Xh=4,qh=5,Yh=6,$h=7,lu=300,qr=301,Yr=302,Po=303,Lo=304,Ea=306,Do=1e3,or=1001,Io=1002,ii=1003,Kh=1004,Ps=1005,qn=1006,Da=1007,lr=1008,Ai=1009,cu=1010,uu=1011,gs=1012,pl=1013,cr=1014,Ei=1015,Ms=1016,ml=1017,_l=1018,$r=1020,hu=35902,fu=1021,du=1022,ni=1023,pu=1024,mu=1025,Gr=1026,Kr=1027,_u=1028,vl=1029,vu=1030,gl=1031,xl=1033,ha=33776,fa=33777,da=33778,pa=33779,Uo=35840,No=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,ko=37496,Vo=37808,Ho=37809,Go=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,$o=37815,Ko=37816,jo=37817,Zo=37818,Jo=37819,Qo=37820,el=37821,ma=36492,tl=36494,nl=36495,gu=36283,il=36284,rl=36285,sl=36286,jh=3200,Zh=3201,xu=0,Jh=1,Fi="",Gn="srgb",Zr="srgb-linear",wa="linear",Gt="srgb",mr=7680,zl=519,Qh=512,ef=513,tf=514,Mu=515,nf=516,rf=517,sf=518,af=519,al=35044,kl="300 es",wi=2e3,xa=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,ol=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function of(i,e){return(i%e+e)%e}function Ia(i,e,t){return(1-t)*i+t*e}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:_s};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*s+e.x,this.y=o*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,o,u,c,d,p){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,d,p)}set(e,t,n,s,o,u,c,d,p){const _=this.elements;return _[0]=e,_[1]=s,_[2]=c,_[3]=t,_[4]=o,_[5]=d,_[6]=n,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[3],d=n[6],p=n[1],_=n[4],M=n[7],S=n[2],b=n[5],C=n[8],T=s[0],x=s[3],g=s[6],k=s[1],F=s[4],A=s[7],$=s[2],H=s[5],G=s[8];return o[0]=u*T+c*k+d*$,o[3]=u*x+c*F+d*H,o[6]=u*g+c*A+d*G,o[1]=p*T+_*k+M*$,o[4]=p*x+_*F+M*H,o[7]=p*g+_*A+M*G,o[2]=S*T+b*k+C*$,o[5]=S*x+b*F+C*H,o[8]=S*g+b*A+C*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],p=e[7],_=e[8];return t*u*_-t*c*p-n*o*_+n*c*d+s*o*p-s*u*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],p=e[7],_=e[8],M=_*u-c*p,S=c*d-_*o,b=p*o-u*d,C=t*M+n*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=M*T,e[1]=(s*p-_*n)*T,e[2]=(c*n-s*u)*T,e[3]=S*T,e[4]=(_*t-s*d)*T,e[5]=(s*o-c*t)*T,e[6]=b*T,e[7]=(n*d-p*t)*T,e[8]=(u*t-n*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,u,c){const d=Math.cos(o),p=Math.sin(o);return this.set(n*d,n*p,-n*(d*u+p*c)+u+e,-s*p,s*d,-s*(-p*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new St;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){const i=Ma("canvas");return i.style.display="block",i}const Vl={};function ps(i){i in Vl||(Vl[i]=!0,console.warn(i))}function uf(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function hf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nt={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Wl=[.3127,.329],Xl=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Nt.define({[Zr]:{primaries:Hl,whitePoint:Wl,transfer:wa,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:Hl,whitePoint:Wl,transfer:Gt,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let _r;class df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Ma("canvas")),_r.width=e.width,_r.height=e.height;const n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Ti(o[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Na(s[u].image)):o.push(Na(s[u]))}else o=Na(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class Cn extends pr{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=or,s=or,o=qn,u=lr,c=ni,d=Ai,p=Cn.DEFAULT_ANISOTROPY,_=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Wi(),this.name="",this.source=new yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=lu;Cn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,n=0,s=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,p=d[0],_=d[4],M=d[8],S=d[1],b=d[5],C=d[9],T=d[2],x=d[6],g=d[10];if(Math.abs(_-S)<.01&&Math.abs(M-T)<.01&&Math.abs(C-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(M+T)<.1&&Math.abs(C+x)<.1&&Math.abs(p+b+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,A=(b+1)/2,$=(g+1)/2,H=(_+S)/4,G=(M+T)/4,X=(C+x)/4;return F>A&&F>$?F<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(F),s=H/n,o=G/n):A>$?A<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),n=H/s,o=X/s):$<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt($),n=G/o,s=X/o),this.set(n,s,o,t),this}let k=Math.sqrt((x-C)*(x-C)+(M-T)*(M-T)+(S-_)*(S-_));return Math.abs(k)<.001&&(k=1),this.x=(x-C)/k,this.y=(M-T)/k,this.z=(S-_)/k,this.w=Math.acos((p+b+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends pr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,u,c){let d=n[s+0],p=n[s+1],_=n[s+2],M=n[s+3];const S=o[u+0],b=o[u+1],C=o[u+2],T=o[u+3];if(c===0){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(c===1){e[t+0]=S,e[t+1]=b,e[t+2]=C,e[t+3]=T;return}if(M!==T||d!==S||p!==b||_!==C){let x=1-c;const g=d*S+p*b+_*C+M*T,k=g>=0?1:-1,F=1-g*g;if(F>Number.EPSILON){const $=Math.sqrt(F),H=Math.atan2($,g*k);x=Math.sin(x*H)/$,c=Math.sin(c*H)/$}const A=c*k;if(d=d*x+S*A,p=p*x+b*A,_=_*x+C*A,M=M*x+T*A,x===1-c){const $=1/Math.sqrt(d*d+p*p+_*_+M*M);d*=$,p*=$,_*=$,M*=$}}e[t]=d,e[t+1]=p,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,n,s,o,u){const c=n[s],d=n[s+1],p=n[s+2],_=n[s+3],M=o[u],S=o[u+1],b=o[u+2],C=o[u+3];return e[t]=c*C+_*M+d*b-p*S,e[t+1]=d*C+_*S+p*M-c*b,e[t+2]=p*C+_*b+c*S-d*M,e[t+3]=_*C-c*M-d*S-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,p=c(n/2),_=c(s/2),M=c(o/2),S=d(n/2),b=d(s/2),C=d(o/2);switch(u){case"XYZ":this._x=S*_*M+p*b*C,this._y=p*b*M-S*_*C,this._z=p*_*C+S*b*M,this._w=p*_*M-S*b*C;break;case"YXZ":this._x=S*_*M+p*b*C,this._y=p*b*M-S*_*C,this._z=p*_*C-S*b*M,this._w=p*_*M+S*b*C;break;case"ZXY":this._x=S*_*M-p*b*C,this._y=p*b*M+S*_*C,this._z=p*_*C+S*b*M,this._w=p*_*M-S*b*C;break;case"ZYX":this._x=S*_*M-p*b*C,this._y=p*b*M+S*_*C,this._z=p*_*C-S*b*M,this._w=p*_*M+S*b*C;break;case"YZX":this._x=S*_*M+p*b*C,this._y=p*b*M+S*_*C,this._z=p*_*C-S*b*M,this._w=p*_*M-S*b*C;break;case"XZY":this._x=S*_*M-p*b*C,this._y=p*b*M-S*_*C,this._z=p*_*C+S*b*M,this._w=p*_*M+S*b*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],p=t[2],_=t[6],M=t[10],S=n+c+M;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(_-d)*b,this._y=(o-p)*b,this._z=(u-s)*b}else if(n>c&&n>M){const b=2*Math.sqrt(1+n-c-M);this._w=(_-d)/b,this._x=.25*b,this._y=(s+u)/b,this._z=(o+p)/b}else if(c>M){const b=2*Math.sqrt(1+c-n-M);this._w=(o-p)/b,this._x=(s+u)/b,this._y=.25*b,this._z=(d+_)/b}else{const b=2*Math.sqrt(1+M-n-c);this._w=(u-s)/b,this._x=(o+p)/b,this._y=(d+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,p=t._z,_=t._w;return this._x=n*_+u*c+s*p-o*d,this._y=s*_+u*d+o*c-n*p,this._z=o*_+u*p+n*d-s*c,this._w=u*_-n*c-s*d-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const b=1-t;return this._w=b*u+t*this._w,this._x=b*n+t*this._x,this._y=b*s+t*this._y,this._z=b*o+t*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,c),M=Math.sin((1-t)*_)/p,S=Math.sin(t*_)/p;return this._w=u*M+this._w*S,this._x=n*M+this._x*S,this._y=s*M+this._y*S,this._z=o*M+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,p=2*(u*s-c*n),_=2*(c*t-o*s),M=2*(o*n-u*t);return this.x=t+d*p+u*M-c*_,this.y=n+d*_+c*p-o*M,this.z=s+d*M+o*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-n*d,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new Z,Yl=new hr;class fr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,jn):jn.fromBufferAttribute(o,u),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Ds.subVectors(this.max,ss),vr.subVectors(e.a,ss),gr.subVectors(e.b,ss),xr.subVectors(e.c,ss),Ri.subVectors(gr,vr),Pi.subVectors(xr,gr),Zi.subVectors(vr,xr);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!Oa(t,vr,gr,xr,Ds)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,vr,gr,xr,Ds))?!1:(Is.crossVectors(Ri,Pi),t=[Is.x,Is.y,Is.z],Oa(t,vr,gr,xr,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],jn=new Z,Ls=new fr,vr=new Z,gr=new Z,xr=new Z,Ri=new Z,Pi=new Z,Zi=new Z,ss=new Z,Ds=new Z,Is=new Z,Ji=new Z;function Oa(i,e,t,n,s){for(let o=0,u=i.length-3;o<=u;o+=3){Ji.fromArray(i,o);const c=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),d=e.dot(Ji),p=t.dot(Ji),_=n.dot(Ji);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>c)return!1}return!0}const gf=new fr,as=new Z,Ba=new Z;class Ss{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gf.setFromPoints(e).getCenter(n);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Ba)),this.expandByPoint(as.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new Z,za=new Z,Us=new Z,Li=new Z,ka=new Z,Ns=new Z,Va=new Z;class ys{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){za.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(za);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Us),c=Li.dot(this.direction),d=-Li.dot(Us),p=Li.lengthSq(),_=Math.abs(1-u*u);let M,S,b,C;if(_>0)if(M=u*d-c,S=u*c-d,C=o*_,M>=0)if(S>=-C)if(S<=C){const T=1/_;M*=T,S*=T,b=M*(M+u*S+2*c)+S*(u*M+S+2*d)+p}else S=o,M=Math.max(0,-(u*S+c)),b=-M*M+S*(S+2*d)+p;else S=-o,M=Math.max(0,-(u*S+c)),b=-M*M+S*(S+2*d)+p;else S<=-C?(M=Math.max(0,-(-u*o+c)),S=M>0?-o:Math.min(Math.max(-o,-d),o),b=-M*M+S*(S+2*d)+p):S<=C?(M=0,S=Math.min(Math.max(-o,-d),o),b=S*(S+2*d)+p):(M=Math.max(0,-(u*o+c)),S=M>0?o:Math.min(Math.max(-o,-d),o),b=-M*M+S*(S+2*d)+p);else S=u>0?-o:o,M=Math.max(0,-(u*S+c)),b=-M*M+S*(S+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,M),s&&s.copy(za).addScaledVector(Us,S),b}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,u,c,d;const p=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,S=this.origin;return p>=0?(n=(e.min.x-S.x)*p,s=(e.max.x-S.x)*p):(n=(e.max.x-S.x)*p,s=(e.min.x-S.x)*p),_>=0?(o=(e.min.y-S.y)*_,u=(e.max.y-S.y)*_):(o=(e.max.y-S.y)*_,u=(e.min.y-S.y)*_),n>u||o>s||((o>n||isNaN(n))&&(n=o),(u<s||isNaN(s))&&(s=u),M>=0?(c=(e.min.z-S.z)*M,d=(e.max.z-S.z)*M):(c=(e.max.z-S.z)*M,d=(e.min.z-S.z)*M),n>d||c>s)||((c>n||n!==n)&&(n=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,o){ka.subVectors(t,e),Ns.subVectors(n,e),Va.crossVectors(ka,Ns);let u=this.direction.dot(Va),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Li.subVectors(this.origin,e);const d=c*this.direction.dot(Ns.crossVectors(Li,Ns));if(d<0)return null;const p=c*this.direction.dot(ka.cross(Li));if(p<0||d+p>u)return null;const _=-c*Li.dot(Va);return _<0?null:this.at(_/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,n,s,o,u,c,d,p,_,M,S,b,C,T,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,d,p,_,M,S,b,C,T,x)}set(e,t,n,s,o,u,c,d,p,_,M,S,b,C,T,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=u,g[9]=c,g[13]=d,g[2]=p,g[6]=_,g[10]=M,g[14]=S,g[3]=b,g[7]=C,g[11]=T,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Mr.setFromMatrixColumn(e,0).length(),o=1/Mr.setFromMatrixColumn(e,1).length(),u=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(s),p=Math.sin(s),_=Math.cos(o),M=Math.sin(o);if(e.order==="XYZ"){const S=u*_,b=u*M,C=c*_,T=c*M;t[0]=d*_,t[4]=-d*M,t[8]=p,t[1]=b+C*p,t[5]=S-T*p,t[9]=-c*d,t[2]=T-S*p,t[6]=C+b*p,t[10]=u*d}else if(e.order==="YXZ"){const S=d*_,b=d*M,C=p*_,T=p*M;t[0]=S+T*c,t[4]=C*c-b,t[8]=u*p,t[1]=u*M,t[5]=u*_,t[9]=-c,t[2]=b*c-C,t[6]=T+S*c,t[10]=u*d}else if(e.order==="ZXY"){const S=d*_,b=d*M,C=p*_,T=p*M;t[0]=S-T*c,t[4]=-u*M,t[8]=C+b*c,t[1]=b+C*c,t[5]=u*_,t[9]=T-S*c,t[2]=-u*p,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const S=u*_,b=u*M,C=c*_,T=c*M;t[0]=d*_,t[4]=C*p-b,t[8]=S*p+T,t[1]=d*M,t[5]=T*p+S,t[9]=b*p-C,t[2]=-p,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const S=u*d,b=u*p,C=c*d,T=c*p;t[0]=d*_,t[4]=T-S*M,t[8]=C*M+b,t[1]=M,t[5]=u*_,t[9]=-c*_,t[2]=-p*_,t[6]=b*M+C,t[10]=S-T*M}else if(e.order==="XZY"){const S=u*d,b=u*p,C=c*d,T=c*p;t[0]=d*_,t[4]=-M,t[8]=p*_,t[1]=S*M+T,t[5]=u*_,t[9]=b*M-C,t[2]=C*M-b,t[6]=c*_,t[10]=T*M+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,Mf)}lookAt(e,t,n){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Di.crossVectors(n,In),Di.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Di.crossVectors(n,In)),Di.normalize(),Fs.crossVectors(In,Di),s[0]=Di.x,s[4]=Fs.x,s[8]=In.x,s[1]=Di.y,s[5]=Fs.y,s[9]=In.y,s[2]=Di.z,s[6]=Fs.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[4],d=n[8],p=n[12],_=n[1],M=n[5],S=n[9],b=n[13],C=n[2],T=n[6],x=n[10],g=n[14],k=n[3],F=n[7],A=n[11],$=n[15],H=s[0],G=s[4],X=s[8],N=s[12],U=s[1],W=s[5],ue=s[9],ee=s[13],se=s[2],Ee=s[6],he=s[10],Me=s[14],fe=s[3],ve=s[7],He=s[11],Je=s[15];return o[0]=u*H+c*U+d*se+p*fe,o[4]=u*G+c*W+d*Ee+p*ve,o[8]=u*X+c*ue+d*he+p*He,o[12]=u*N+c*ee+d*Me+p*Je,o[1]=_*H+M*U+S*se+b*fe,o[5]=_*G+M*W+S*Ee+b*ve,o[9]=_*X+M*ue+S*he+b*He,o[13]=_*N+M*ee+S*Me+b*Je,o[2]=C*H+T*U+x*se+g*fe,o[6]=C*G+T*W+x*Ee+g*ve,o[10]=C*X+T*ue+x*he+g*He,o[14]=C*N+T*ee+x*Me+g*Je,o[3]=k*H+F*U+A*se+$*fe,o[7]=k*G+F*W+A*Ee+$*ve,o[11]=k*X+F*ue+A*he+$*He,o[15]=k*N+F*ee+A*Me+$*Je,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],p=e[13],_=e[2],M=e[6],S=e[10],b=e[14],C=e[3],T=e[7],x=e[11],g=e[15];return C*(+o*d*M-s*p*M-o*c*S+n*p*S+s*c*b-n*d*b)+T*(+t*d*b-t*p*S+o*u*S-s*u*b+s*p*_-o*d*_)+x*(+t*p*M-t*c*b-o*u*M+n*u*b+o*c*_-n*p*_)+g*(-s*c*_-t*d*M+t*c*S+s*u*M-n*u*S+n*d*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],p=e[7],_=e[8],M=e[9],S=e[10],b=e[11],C=e[12],T=e[13],x=e[14],g=e[15],k=M*x*p-T*S*p+T*d*b-c*x*b-M*d*g+c*S*g,F=C*S*p-_*x*p-C*d*b+u*x*b+_*d*g-u*S*g,A=_*T*p-C*M*p+C*c*b-u*T*b-_*c*g+u*M*g,$=C*M*d-_*T*d-C*c*S+u*T*S+_*c*x-u*M*x,H=t*k+n*F+s*A+o*$;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return e[0]=k*G,e[1]=(T*S*o-M*x*o-T*s*b+n*x*b+M*s*g-n*S*g)*G,e[2]=(c*x*o-T*d*o+T*s*p-n*x*p-c*s*g+n*d*g)*G,e[3]=(M*d*o-c*S*o-M*s*p+n*S*p+c*s*b-n*d*b)*G,e[4]=F*G,e[5]=(_*x*o-C*S*o+C*s*b-t*x*b-_*s*g+t*S*g)*G,e[6]=(C*d*o-u*x*o-C*s*p+t*x*p+u*s*g-t*d*g)*G,e[7]=(u*S*o-_*d*o+_*s*p-t*S*p-u*s*b+t*d*b)*G,e[8]=A*G,e[9]=(C*M*o-_*T*o-C*n*b+t*T*b+_*n*g-t*M*g)*G,e[10]=(u*T*o-C*c*o+C*n*p-t*T*p-u*n*g+t*c*g)*G,e[11]=(_*c*o-u*M*o-_*n*p+t*M*p+u*n*b-t*c*b)*G,e[12]=$*G,e[13]=(_*T*s-C*M*s+C*n*S-t*T*S-_*n*x+t*M*x)*G,e[14]=(C*c*s-u*T*s-C*n*d+t*T*d+u*n*x-t*c*x)*G,e[15]=(u*M*s-_*c*s+_*n*d-t*M*d-u*n*S+t*c*S)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,u=e.x,c=e.y,d=e.z,p=o*u,_=o*c;return this.set(p*u+n,p*c-s*d,p*d+s*c,0,p*c+s*d,_*c+n,_*d-s*u,0,p*d-s*c,_*d+s*u,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,u){return this.set(1,n,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,p=o+o,_=u+u,M=c+c,S=o*p,b=o*_,C=o*M,T=u*_,x=u*M,g=c*M,k=d*p,F=d*_,A=d*M,$=n.x,H=n.y,G=n.z;return s[0]=(1-(T+g))*$,s[1]=(b+A)*$,s[2]=(C-F)*$,s[3]=0,s[4]=(b-A)*H,s[5]=(1-(S+g))*H,s[6]=(x+k)*H,s[7]=0,s[8]=(C+F)*G,s[9]=(x-k)*G,s[10]=(1-(S+T))*G,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Mr.set(s[0],s[1],s[2]).length();const u=Mr.set(s[4],s[5],s[6]).length(),c=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);const p=1/o,_=1/u,M=1/c;return Zn.elements[0]*=p,Zn.elements[1]*=p,Zn.elements[2]*=p,Zn.elements[4]*=_,Zn.elements[5]*=_,Zn.elements[6]*=_,Zn.elements[8]*=M,Zn.elements[9]*=M,Zn.elements[10]*=M,t.setFromRotationMatrix(Zn),n.x=o,n.y=u,n.z=c,this}makePerspective(e,t,n,s,o,u,c=wi){const d=this.elements,p=2*o/(t-e),_=2*o/(n-s),M=(t+e)/(t-e),S=(n+s)/(n-s);let b,C;if(c===wi)b=-(u+o)/(u-o),C=-2*u*o/(u-o);else if(c===xa)b=-u/(u-o),C=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=M,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,u,c=wi){const d=this.elements,p=1/(t-e),_=1/(n-s),M=1/(u-o),S=(t+e)*p,b=(n+s)*_;let C,T;if(c===wi)C=(u+o)*M,T=-2*M;else if(c===xa)C=o*M,T=-1*M;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-S,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-b,d[2]=0,d[6]=0,d[10]=T,d[14]=-C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new Z,Zn=new Zt,xf=new Z(0,0,0),Mf=new Z(1,1,1),Di=new Z,Fs=new Z,In=new Z,$l=new Zt,Kl=new hr;class fi{constructor(e=0,t=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],p=s[5],_=s[9],M=s[2],S=s[6],b=s[10];switch(t){case"XYZ":this._y=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,b),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-M,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-M,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Tn(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-M,o)):(this._x=0,this._y=Math.atan2(c,b));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const jl=new Z,Sr=new hr,gi=new Zt,Os=new Z,os=new Z,yf=new Z,bf=new hr,Zl=new Z(1,0,0),Jl=new Z(0,1,0),Ql=new Z(0,0,1),ec={type:"added"},Ef={type:"removed"},yr={type:"childadded",child:null},Ha={type:"childremoved",child:null};class on extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new Z,t=new fi,n=new hr,s=new Z(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new St}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(os,Os,this.up):gi.lookAt(Os,os,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(gi),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const M=d[p];o(e.shapes,M)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),p=u(e.textures),_=u(e.images),M=u(e.shapes),S=u(e.skeletons),b=u(e.animations),C=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),_.length>0&&(n.images=_),M.length>0&&(n.shapes=M),S.length>0&&(n.skeletons=S),b.length>0&&(n.animations=b),C.length>0&&(n.nodes=C)}return n.object=s,n;function u(c){const d=[];for(const p in c){const _=c[p];delete _.metadata,d.push(_)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}on.DEFAULT_UP=new Z(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new Z,xi=new Z,Ga=new Z,Mi=new Z,br=new Z,Er=new Z,tc=new Z,Wa=new Z,Xa=new Z,qa=new Z,Ya=new nn,$a=new nn,Ka=new nn;class Nn{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Jn.subVectors(s,t),xi.subVectors(n,t),Ga.subVectors(e,t);const u=Jn.dot(Jn),c=Jn.dot(xi),d=Jn.dot(Ga),p=xi.dot(xi),_=xi.dot(Ga),M=u*p-c*c;if(M===0)return o.set(0,0,0),null;const S=1/M,b=(p*d-c*_)*S,C=(u*_-c*d)*S;return o.set(1-b-C,C,b)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,o,u,c,d){return this.getBarycoord(e,t,n,s,Mi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Mi.x),d.addScaledVector(u,Mi.y),d.addScaledVector(c,Mi.z),d)}static getInterpolatedAttribute(e,t,n,s,o,u){return Ya.setScalar(0),$a.setScalar(0),Ka.setScalar(0),Ya.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,n),Ka.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ya,o.x),u.addScaledVector($a,o.y),u.addScaledVector(Ka,o.z),u}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),xi.subVectors(e,t),Jn.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Jn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let u,c;br.subVectors(s,n),Er.subVectors(o,n),Wa.subVectors(e,n);const d=br.dot(Wa),p=Er.dot(Wa);if(d<=0&&p<=0)return t.copy(n);Xa.subVectors(e,s);const _=br.dot(Xa),M=Er.dot(Xa);if(_>=0&&M<=_)return t.copy(s);const S=d*M-_*p;if(S<=0&&d>=0&&_<=0)return u=d/(d-_),t.copy(n).addScaledVector(br,u);qa.subVectors(e,o);const b=br.dot(qa),C=Er.dot(qa);if(C>=0&&b<=C)return t.copy(o);const T=b*p-d*C;if(T<=0&&p>=0&&C<=0)return c=p/(p-C),t.copy(n).addScaledVector(Er,c);const x=_*C-b*M;if(x<=0&&M-_>=0&&b-C>=0)return tc.subVectors(o,s),c=(M-_)/(M-_+(b-C)),t.copy(s).addScaledVector(tc,c);const g=1/(x+T+S);return u=T*g,c=S*g,t.copy(n).addScaledVector(br,u).addScaledVector(Er,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class wt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Nt.workingColorSpace){if(e=of(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=ja(u,o,e+1/3),this.g=ja(u,o,e),this.b=ja(u,o,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Nt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Tn(Sn.r*255,0,255))*65536+Math.round(Tn(Sn.g*255,0,255))*256+Math.round(Tn(Sn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,s=Sn.g,o=Sn.b,u=Math.max(n,s,o),c=Math.min(n,s,o);let d,p;const _=(c+u)/2;if(c===u)d=0,p=0;else{const M=u-c;switch(p=_<=.5?M/(u+c):M/(2-u-c),u){case n:d=(s-o)/M+(s<o?6:0);break;case s:d=(o-n)/M+2;break;case o:d=(n-s)/M+4;break}d/=6}return e.h=d,e.s=p,e.l=_,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Gn){Nt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,s=Sn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Bs);const n=Ia(Ii.h,Bs.h,t),s=Ia(Ii.s,Bs.s,t),o=Ia(Ii.l,Bs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new wt;wt.NAMES=Eu;let wf=0;class Yi extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Wi(),this.name="",this.blending=Hr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=yo,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ta extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new Z,zs=new lt;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),o=Wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class wu extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tf=0;const Vn=new Zt,Za=new on,wr=new Z,Un=new fr,ls=new fr,fn=new Z;class jt extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Tu:wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new St().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _n(n,3))}else{for(let n=0,s=t.count;n<s;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];ls.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Un.min,ls.min),Un.expandByPoint(fn),fn.addVectors(Un.max,ls.max),Un.expandByPoint(fn)):(Un.expandByPoint(ls.min),Un.expandByPoint(ls.max))}Un.getCenter(n);let s=0;for(let o=0,u=e.count;o<u;o++)fn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)fn.fromBufferAttribute(c,p),d&&(wr.fromBufferAttribute(e,p),fn.add(wr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let X=0;X<n.count;X++)c[X]=new Z,d[X]=new Z;const p=new Z,_=new Z,M=new Z,S=new lt,b=new lt,C=new lt,T=new Z,x=new Z;function g(X,N,U){p.fromBufferAttribute(n,X),_.fromBufferAttribute(n,N),M.fromBufferAttribute(n,U),S.fromBufferAttribute(o,X),b.fromBufferAttribute(o,N),C.fromBufferAttribute(o,U),_.sub(p),M.sub(p),b.sub(S),C.sub(S);const W=1/(b.x*C.y-C.x*b.y);isFinite(W)&&(T.copy(_).multiplyScalar(C.y).addScaledVector(M,-b.y).multiplyScalar(W),x.copy(M).multiplyScalar(b.x).addScaledVector(_,-C.x).multiplyScalar(W),c[X].add(T),c[N].add(T),c[U].add(T),d[X].add(x),d[N].add(x),d[U].add(x))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let X=0,N=k.length;X<N;++X){const U=k[X],W=U.start,ue=U.count;for(let ee=W,se=W+ue;ee<se;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const F=new Z,A=new Z,$=new Z,H=new Z;function G(X){$.fromBufferAttribute(s,X),H.copy($);const N=c[X];F.copy(N),F.sub($.multiplyScalar($.dot(N))).normalize(),A.crossVectors(H,N);const W=A.dot(d[X])<0?-1:1;u.setXYZW(X,F.x,F.y,F.z,W)}for(let X=0,N=k.length;X<N;++X){const U=k[X],W=U.start,ue=U.count;for(let ee=W,se=W+ue;ee<se;ee+=3)G(e.getX(ee+0)),G(e.getX(ee+1)),G(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let S=0,b=n.count;S<b;S++)n.setXYZ(S,0,0,0);const s=new Z,o=new Z,u=new Z,c=new Z,d=new Z,p=new Z,_=new Z,M=new Z;if(e)for(let S=0,b=e.count;S<b;S+=3){const C=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);s.fromBufferAttribute(t,C),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,x),_.subVectors(u,o),M.subVectors(s,o),_.cross(M),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,T),p.fromBufferAttribute(n,x),c.add(_),d.add(_),p.add(_),n.setXYZ(C,c.x,c.y,c.z),n.setXYZ(T,d.x,d.y,d.z),n.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,b=t.count;S<b;S+=3)s.fromBufferAttribute(t,S+0),o.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),_.subVectors(u,o),M.subVectors(s,o),_.cross(M),n.setXYZ(S+0,_.x,_.y,_.z),n.setXYZ(S+1,_.x,_.y,_.z),n.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,d){const p=c.array,_=c.itemSize,M=c.normalized,S=new p.constructor(d.length*_);let b=0,C=0;for(let T=0,x=d.length;T<x;T++){c.isInterleavedBufferAttribute?b=d[T]*c.data.stride+c.offset:b=d[T]*_;for(let g=0;g<_;g++)S[C++]=p[b++]}return new mn(S,_,M)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const c in s){const d=s[c],p=e(d,n);t.setAttribute(c,p)}const o=this.morphAttributes;for(const c in o){const d=[],p=o[c];for(let _=0,M=p.length;_<M;_++){const S=p[_],b=e(S,n);d.push(b)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let M=0,S=p.length;M<S;M++){const b=p[M];_.push(b.toJSON(e.data))}_.length>0&&(s[d]=_,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(t))}const o=e.morphAttributes;for(const p in o){const _=[],M=o[p];for(let S=0,b=M.length;S<b;S++)_.push(M[S].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const M=u[p];this.addGroup(M.start,M.count,M.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Zt,Qi=new ys,ks=new Ss,ic=new Z,Vs=new Z,Hs=new Z,Gs=new Z,Ja=new Z,Ws=new Z,rc=new Z,Xs=new Z;class vn extends on{constructor(e=new jt,t=new Ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Ws.set(0,0,0);for(let d=0,p=o.length;d<p;d++){const _=c[d],M=o[d];_!==0&&(Ja.fromBufferAttribute(M,e),u?Ws.addScaledVector(Ja,_):Ws.addScaledVector(Ja.sub(t),_))}t.add(Ws)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(o),Qi.copy(e.ray).recast(e.near),!(ks.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ks,ic)===null||Qi.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(o).invert(),Qi.copy(e.ray).applyMatrix4(nc),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,p=o.attributes.uv,_=o.attributes.uv1,M=o.attributes.normal,S=o.groups,b=o.drawRange;if(c!==null)if(Array.isArray(u))for(let C=0,T=S.length;C<T;C++){const x=S[C],g=u[x.materialIndex],k=Math.max(x.start,b.start),F=Math.min(c.count,Math.min(x.start+x.count,b.start+b.count));for(let A=k,$=F;A<$;A+=3){const H=c.getX(A),G=c.getX(A+1),X=c.getX(A+2);s=qs(this,g,e,n,p,_,M,H,G,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const C=Math.max(0,b.start),T=Math.min(c.count,b.start+b.count);for(let x=C,g=T;x<g;x+=3){const k=c.getX(x),F=c.getX(x+1),A=c.getX(x+2);s=qs(this,u,e,n,p,_,M,k,F,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let C=0,T=S.length;C<T;C++){const x=S[C],g=u[x.materialIndex],k=Math.max(x.start,b.start),F=Math.min(d.count,Math.min(x.start+x.count,b.start+b.count));for(let A=k,$=F;A<$;A+=3){const H=A,G=A+1,X=A+2;s=qs(this,g,e,n,p,_,M,H,G,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const C=Math.max(0,b.start),T=Math.min(d.count,b.start+b.count);for(let x=C,g=T;x<g;x+=3){const k=x,F=x+1,A=x+2;s=qs(this,u,e,n,p,_,M,k,F,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Af(i,e,t,n,s,o,u,c){let d;if(e.side===Pn?d=n.intersectTriangle(u,o,s,!0,c):d=n.intersectTriangle(s,o,u,e.side===Xi,c),d===null)return null;Xs.copy(c),Xs.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Xs);return p<t.near||p>t.far?null:{distance:p,point:Xs.clone(),object:i}}function qs(i,e,t,n,s,o,u,c,d,p){i.getVertexPosition(c,Vs),i.getVertexPosition(d,Hs),i.getVertexPosition(p,Gs);const _=Af(i,e,t,n,Vs,Hs,Gs,rc);if(_){const M=new Z;Nn.getBarycoord(rc,Vs,Hs,Gs,M),s&&(_.uv=Nn.getInterpolatedAttribute(s,c,d,p,M,new lt)),o&&(_.uv1=Nn.getInterpolatedAttribute(o,c,d,p,M,new lt)),u&&(_.normal=Nn.getInterpolatedAttribute(u,c,d,p,M,new Z),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const S={a:c,b:d,c:p,normal:new Z,materialIndex:0};Nn.getNormal(Vs,Hs,Gs,S.normal),_.face=S,_.barycoord=M}return _}class Jr extends jt{constructor(e=1,t=1,n=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],p=[],_=[],M=[];let S=0,b=0;C("z","y","x",-1,-1,n,t,e,u,o,0),C("z","y","x",1,-1,n,t,-e,u,o,1),C("x","z","y",1,1,e,n,t,s,u,2),C("x","z","y",1,-1,e,n,-t,s,u,3),C("x","y","z",1,-1,e,t,n,s,o,4),C("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(M,2));function C(T,x,g,k,F,A,$,H,G,X,N){const U=A/G,W=$/X,ue=A/2,ee=$/2,se=H/2,Ee=G+1,he=X+1;let Me=0,fe=0;const ve=new Z;for(let He=0;He<he;He++){const Je=He*W-ee;for(let de=0;de<Ee;de++){const Ze=de*U-ue;ve[T]=Ze*k,ve[x]=Je*F,ve[g]=se,p.push(ve.x,ve.y,ve.z),ve[T]=0,ve[x]=0,ve[g]=H>0?1:-1,_.push(ve.x,ve.y,ve.z),M.push(de/G),M.push(1-He/X),Me+=1}}for(let He=0;He<X;He++)for(let Je=0;Je<G;Je++){const de=S+Je+Ee*He,Ze=S+Je+Ee*(He+1),me=S+(Je+1)+Ee*(He+1),oe=S+(Je+1)+Ee*He;d.push(de,Ze,oe),d.push(Ze,me,oe),fe+=6}c.addGroup(b,fe,N),b+=fe,S+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const n=jr(i[t]);for(const s in n)e[s]=n[s]}return e}function Cf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Rf={clone:jr,merge:wn};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new Z,sc=new lt,ac=new lt;class Wn extends Cu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,sc,ac),t.subVectors(ac,sc)}setViewOffset(e,t,n,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*n/p,s*=u.width/d,n*=u.height/p}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Ar=1;class Df extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(Tr,Ar,e,t);s.layers=this.layers,this.add(s);const o=new Wn(Tr,Ar,e,t);o.layers=this.layers,this.add(o);const u=new Wn(Tr,Ar,e,t);u.layers=this.layers,this.add(u);const c=new Wn(Tr,Ar,e,t);c.layers=this.layers,this.add(c);const d=new Wn(Tr,Ar,e,t);d.layers=this.layers,this.add(d);const p=new Wn(Tr,Ar,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,u,c,d]=t;for(const p of t)this.remove(p);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,p,_]=this.children,M=e.getRenderTarget(),S=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),e.render(t,_),e.setRenderTarget(M,S,b),e.xr.enabled=C,n.texture.needsPMREMUpdate=!0}}class Ru extends Cn{constructor(e,t,n,s,o,u,c,d,p,_){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,n,s,o,u,c,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ru(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),o=new qi({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Hi});o.uniforms.tEquirect.value=t;const u=new vn(s,o),c=t.minFilter;return t.minFilter===lr&&(t.minFilter=qn),new Df(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(o)}}const Qa=new Z,Uf=new Z,Nf=new St;class Ni{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qa.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nf.getNormalMatrix(e),s=this.coplanarPoint(Qa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Ss,Ys=new Z;class Sl{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,o=new Ni,u=new Ni){this.planes=[e,t,n,s,o,u]}set(e,t,n,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,s=e.elements,o=s[0],u=s[1],c=s[2],d=s[3],p=s[4],_=s[5],M=s[6],S=s[7],b=s[8],C=s[9],T=s[10],x=s[11],g=s[12],k=s[13],F=s[14],A=s[15];if(n[0].setComponents(d-o,S-p,x-b,A-g).normalize(),n[1].setComponents(d+o,S+p,x+b,A+g).normalize(),n[2].setComponents(d+u,S+_,x+C,A+k).normalize(),n[3].setComponents(d-u,S-_,x-C,A-k).normalize(),n[4].setComponents(d-c,S-M,x-T,A-F).normalize(),t===wi)n[5].setComponents(d+c,S+M,x+T,A+F).normalize();else if(t===xa)n[5].setComponents(c,M,T,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,e=!1,t=null,n=null;function s(o,u){t(o,u),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Ff(i){const e=new WeakMap;function t(c,d){const p=c.array,_=c.usage,M=p.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,p,_),c.onUploadCallback();let b;if(p instanceof Float32Array)b=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?b=i.HALF_FLOAT:b=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=i.SHORT;else if(p instanceof Uint32Array)b=i.UNSIGNED_INT;else if(p instanceof Int32Array)b=i.INT;else if(p instanceof Int8Array)b=i.BYTE;else if(p instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:M}}function n(c,d,p){const _=d.array,M=d.updateRanges;if(i.bindBuffer(p,c),M.length===0)i.bufferSubData(p,0,_);else{M.sort((b,C)=>b.start-C.start);let S=0;for(let b=1;b<M.length;b++){const C=M[S],T=M[b];T.start<=C.start+C.count+1?C.count=Math.max(C.count,T.start+T.count-C.start):(++S,M[S]=T)}M.length=S+1;for(let b=0,C=M.length;b<C;b++){const T=M[b];i.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const _=e.get(c);(!_||_.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const p=e.get(c);if(p===void 0)e.set(c,t(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,d),p.version=c.version}}return{get:s,remove:o,update:u}}class Aa extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(n),d=Math.floor(s),p=c+1,_=d+1,M=e/c,S=t/d,b=[],C=[],T=[],x=[];for(let g=0;g<_;g++){const k=g*S-u;for(let F=0;F<p;F++){const A=F*M-o;C.push(A,-k,0),T.push(0,0,1),x.push(F/c),x.push(1-g/d)}}for(let g=0;g<d;g++)for(let k=0;k<c;k++){const F=k+p*g,A=k+p*(g+1),$=k+1+p*(g+1),H=k+1+p*g;b.push(F,A,H),b.push(A,$,H)}this.setIndex(b),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(T,3)),this.setAttribute("uv",new _n(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Nd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,em=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
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
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,am=`#define STANDARD
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
}`,om=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,um=`uniform float size;
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
}`,hm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Vf,alphatest_pars_fragment:Hf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:$f,bsdfs:Kf,iridescence_fragment:jf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:ud,emissivemap_fragment:hd,emissivemap_pars_fragment:fd,colorspace_fragment:dd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:_d,envmap_pars_fragment:vd,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Rd,envmap_vertex:xd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:yd,fog_pars_fragment:bd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:wd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Dd,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Hd,map_fragment:Gd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:$d,morphinstance_vertex:Kd,morphcolor_vertex:jd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:rp,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:up,packing:hp,premultiplied_alpha_fragment:fp,project_vertex:dp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:yp,skinning_pars_vertex:bp,skinning_vertex:Ep,skinnormal_vertex:wp,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:Cp,tonemapping_pars_fragment:Rp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Ip,uv_vertex:Up,worldpos_vertex:Np,background_vert:Fp,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:kp,cube_frag:Vp,depth_vert:Hp,depth_frag:Gp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:$p,linedashed_frag:Kp,meshbasic_vert:jp,meshbasic_frag:Zp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:rm,meshphong_frag:sm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:um,points_frag:hm,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},li={basic:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:wn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:wn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:wn([ze.points,ze.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:wn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:wn([ze.common,ze.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:wn([ze.sprite,ze.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:wn([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:wn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};li.physical={uniforms:wn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const $s={r:0,b:0,g:0},tr=new fi,_m=new Zt;function vm(i,e,t,n,s,o,u){const c=new wt(0);let d=o===!0?0:1,p,_,M=null,S=0,b=null;function C(k){let F=k.isScene===!0?k.background:null;return F&&F.isTexture&&(F=(k.backgroundBlurriness>0?t:e).get(F)),F}function T(k){let F=!1;const A=C(k);A===null?g(c,d):A&&A.isColor&&(g(A,1),F=!0);const $=i.xr.getEnvironmentBlendMode();$==="additive"?n.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(k,F){const A=C(F);A&&(A.isCubeTexture||A.mapping===Ea)?(_===void 0&&(_=new vn(new Jr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:jr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,H,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),tr.copy(F.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(tr)),_.material.toneMapped=Nt.getTransfer(A.colorSpace)!==Gt,(M!==A||S!==A.version||b!==i.toneMapping)&&(_.material.needsUpdate=!0,M=A,S=A.version,b=i.toneMapping),_.layers.enableAll(),k.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new vn(new Aa(2,2),new qi({name:"BackgroundMaterial",uniforms:jr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(A.colorSpace)!==Gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(M!==A||S!==A.version||b!==i.toneMapping)&&(p.material.needsUpdate=!0,M=A,S=A.version,b=i.toneMapping),p.layers.enableAll(),k.unshift(p,p.geometry,p.material,0,0,null))}function g(k,F){k.getRGB($s,Au(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,F,u)}return{getClearColor:function(){return c},setClearColor:function(k,F=1){c.set(k),d=F,g(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(k){d=k,g(c,d)},render:T,addToRenderList:x}}function gm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=S(null);let o=s,u=!1;function c(U,W,ue,ee,se){let Ee=!1;const he=M(ee,ue,W);o!==he&&(o=he,p(o.object)),Ee=b(U,ee,ue,se),Ee&&C(U,ee,ue,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(Ee||u)&&(u=!1,A(U,W,ue,ee),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function d(){return i.createVertexArray()}function p(U){return i.bindVertexArray(U)}function _(U){return i.deleteVertexArray(U)}function M(U,W,ue){const ee=ue.wireframe===!0;let se=n[U.id];se===void 0&&(se={},n[U.id]=se);let Ee=se[W.id];Ee===void 0&&(Ee={},se[W.id]=Ee);let he=Ee[ee];return he===void 0&&(he=S(d()),Ee[ee]=he),he}function S(U){const W=[],ue=[],ee=[];for(let se=0;se<t;se++)W[se]=0,ue[se]=0,ee[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ue,attributeDivisors:ee,object:U,attributes:{},index:null}}function b(U,W,ue,ee){const se=o.attributes,Ee=W.attributes;let he=0;const Me=ue.getAttributes();for(const fe in Me)if(Me[fe].location>=0){const He=se[fe];let Je=Ee[fe];if(Je===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(Je=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(Je=U.instanceColor)),He===void 0||He.attribute!==Je||Je&&He.data!==Je.data)return!0;he++}return o.attributesNum!==he||o.index!==ee}function C(U,W,ue,ee){const se={},Ee=W.attributes;let he=0;const Me=ue.getAttributes();for(const fe in Me)if(Me[fe].location>=0){let He=Ee[fe];He===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(He=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(He=U.instanceColor));const Je={};Je.attribute=He,He&&He.data&&(Je.data=He.data),se[fe]=Je,he++}o.attributes=se,o.attributesNum=he,o.index=ee}function T(){const U=o.newAttributes;for(let W=0,ue=U.length;W<ue;W++)U[W]=0}function x(U){g(U,0)}function g(U,W){const ue=o.newAttributes,ee=o.enabledAttributes,se=o.attributeDivisors;ue[U]=1,ee[U]===0&&(i.enableVertexAttribArray(U),ee[U]=1),se[U]!==W&&(i.vertexAttribDivisor(U,W),se[U]=W)}function k(){const U=o.newAttributes,W=o.enabledAttributes;for(let ue=0,ee=W.length;ue<ee;ue++)W[ue]!==U[ue]&&(i.disableVertexAttribArray(ue),W[ue]=0)}function F(U,W,ue,ee,se,Ee,he){he===!0?i.vertexAttribIPointer(U,W,ue,se,Ee):i.vertexAttribPointer(U,W,ue,ee,se,Ee)}function A(U,W,ue,ee){T();const se=ee.attributes,Ee=ue.getAttributes(),he=W.defaultAttributeValues;for(const Me in Ee){const fe=Ee[Me];if(fe.location>=0){let ve=se[Me];if(ve===void 0&&(Me==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),Me==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),ve!==void 0){const He=ve.normalized,Je=ve.itemSize,de=e.get(ve);if(de===void 0)continue;const Ze=de.buffer,me=de.type,oe=de.bytesPerElement,Le=me===i.INT||me===i.UNSIGNED_INT||ve.gpuType===pl;if(ve.isInterleavedBufferAttribute){const De=ve.data,ke=De.stride,Ge=ve.offset;if(De.isInstancedInterleavedBuffer){for(let et=0;et<fe.locationSize;et++)g(fe.location+et,De.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let et=0;et<fe.locationSize;et++)x(fe.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let et=0;et<fe.locationSize;et++)F(fe.location+et,Je/fe.locationSize,me,He,ke*oe,(Ge+Je/fe.locationSize*et)*oe,Le)}else{if(ve.isInstancedBufferAttribute){for(let De=0;De<fe.locationSize;De++)g(fe.location+De,ve.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let De=0;De<fe.locationSize;De++)x(fe.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let De=0;De<fe.locationSize;De++)F(fe.location+De,Je/fe.locationSize,me,He,Je*oe,Je/fe.locationSize*De*oe,Le)}}else if(he!==void 0){const He=he[Me];if(He!==void 0)switch(He.length){case 2:i.vertexAttrib2fv(fe.location,He);break;case 3:i.vertexAttrib3fv(fe.location,He);break;case 4:i.vertexAttrib4fv(fe.location,He);break;default:i.vertexAttrib1fv(fe.location,He)}}}}k()}function $(){X();for(const U in n){const W=n[U];for(const ue in W){const ee=W[ue];for(const se in ee)_(ee[se].object),delete ee[se];delete W[ue]}delete n[U]}}function H(U){if(n[U.id]===void 0)return;const W=n[U.id];for(const ue in W){const ee=W[ue];for(const se in ee)_(ee[se].object),delete ee[se];delete W[ue]}delete n[U.id]}function G(U){for(const W in n){const ue=n[W];if(ue[U.id]===void 0)continue;const ee=ue[U.id];for(const se in ee)_(ee[se].object),delete ee[se];delete ue[U.id]}}function X(){N(),u=!0,o!==s&&(o=s,p(o.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:X,resetDefaultState:N,dispose:$,releaseStatesOfGeometry:H,releaseStatesOfProgram:G,initAttributes:T,enableAttribute:x,disableUnusedAttributes:k}}function xm(i,e,t){let n;function s(p){n=p}function o(p,_){i.drawArrays(n,p,_),t.update(_,n,1)}function u(p,_,M){M!==0&&(i.drawArraysInstanced(n,p,_,M),t.update(_,n,M))}function c(p,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,_,0,M);let b=0;for(let C=0;C<M;C++)b+=_[C];t.update(b,n,1)}function d(p,_,M,S){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let C=0;C<p.length;C++)u(p[C],_[C],S[C]);else{b.multiDrawArraysInstancedWEBGL(n,p,0,_,0,S,0,M);let C=0;for(let T=0;T<M;T++)C+=_[T]*S[T];t.update(C,n,1)}}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Mm(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(G){return!(G!==ni&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(G){const X=G===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==Ai&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ei&&!X)}function d(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const M=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),k=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),$=C>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:p,logarithmicDepthBuffer:M,reverseDepthBuffer:S,maxTextures:b,maxVertexTextures:C,maxTextureSize:T,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:k,maxVaryings:F,maxFragmentUniforms:A,vertexTextures:$,maxSamples:H}}function Sm(i){const e=this;let t=null,n=0,s=!1,o=!1;const u=new Ni,c=new St,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(M,S){const b=M.length!==0||S||n!==0||s;return s=S,n=M.length,b},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(M,S){t=_(M,S,0)},this.setState=function(M,S,b){const C=M.clippingPlanes,T=M.clipIntersection,x=M.clipShadows,g=i.get(M);if(!s||C===null||C.length===0||o&&!x)o?_(null):p();else{const k=o?0:n,F=k*4;let A=g.clippingState||null;d.value=A,A=_(C,S,F,b);for(let $=0;$!==F;++$)A[$]=t[$];g.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=k}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(M,S,b,C){const T=M!==null?M.length:0;let x=null;if(T!==0){if(x=d.value,C!==!0||x===null){const g=b+T*4,k=S.matrixWorldInverse;c.getNormalMatrix(k),(x===null||x.length<g)&&(x=new Float32Array(g));for(let F=0,A=b;F!==T;++F,A+=4)u.copy(M[F]).applyMatrix4(k,c),u.normal.toArray(x,A),x[A+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function ym(i){let e=new WeakMap;function t(u,c){return c===Po?u.mapping=qr:c===Lo&&(u.mapping=Yr),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Po||c===Lo)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new If(d.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class bs extends Cu{constructor(e=-1,t=1,n=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,u=o+p*this.view.width,c-=_*this.view.offsetY,d=c-_*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,oc=[.125,.215,.35,.446,.526,.582],sr=20,eo=new bs,lc=new wt;let to=null,no=0,io=0,ro=!1;const ir=(1+Math.sqrt(5))/2,Cr=1/ir,cc=[new Z(-ir,Cr,0),new Z(ir,Cr,0),new Z(-Cr,0,ir),new Z(Cr,0,ir),new Z(0,ir,-Cr),new Z(0,ir,Cr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=ro,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ms,format:ni,colorSpace:Zr,depthBuffer:!1},s=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(o)),this._blurMaterial=Em(o,e,t)}return s}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,s){const c=new Wn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,M=_.autoClear,S=_.toneMapping;_.getClearColor(lc),_.toneMapping=Gi,_.autoClear=!1;const b=new Ta({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),C=new vn(new Jr,b);let T=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,T=!0):(b.color.copy(lc),T=!0);for(let g=0;g<6;g++){const k=g%3;k===0?(c.up.set(0,d[g],0),c.lookAt(p[g],0,0)):k===1?(c.up.set(0,0,d[g]),c.lookAt(0,p[g],0)):(c.up.set(0,d[g],0),c.lookAt(0,0,p[g]));const F=this._cubeSize;Ks(s,k*F,g>2?F:0,F,F),_.setRenderTarget(s),T&&_.render(C,c),_.render(e,c)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=S,_.autoClear=M,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new vn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ks(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=cc[(s-o-1)%cc.length];this._blur(e,o-1,o,u,c)}t.autoClear=n}_blur(e,t,n,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",o),this._halfBlur(u,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,u,c){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,M=new vn(this._lodPlanes[s],p),S=p.uniforms,b=this._sizeLods[n]-1,C=isFinite(o)?Math.PI/(2*b):2*Math.PI/(2*sr-1),T=o/C,x=isFinite(o)?1+Math.floor(_*T):sr;x>sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${sr}`);const g=[];let k=0;for(let G=0;G<sr;++G){const X=G/T,N=Math.exp(-X*X/2);g.push(N),G===0?k+=N:G<x&&(k+=2*N)}for(let G=0;G<g.length;G++)g[G]=g[G]/k;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=u==="latitudinal",c&&(S.poleAxis.value=c);const{_lodMax:F}=this;S.dTheta.value=C,S.mipInt.value=F-n;const A=this._sizeLods[s],$=3*A*(s>F-zr?s-F+zr:0),H=4*(this._cubeSize-A);Ks(t,$,H,3*A,2*A),d.setRenderTarget(t),d.render(M,eo)}}function bm(i){const e=[],t=[],n=[];let s=i;const o=i-zr+1+oc.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>i-zr?d=oc[u-i+zr-1]:u===0&&(d=0),n.push(d);const p=1/(c-2),_=-p,M=1+p,S=[_,_,M,_,M,M,_,_,M,M,_,M],b=6,C=6,T=3,x=2,g=1,k=new Float32Array(T*C*b),F=new Float32Array(x*C*b),A=new Float32Array(g*C*b);for(let H=0;H<b;H++){const G=H%3*2/3-1,X=H>2?0:-1,N=[G,X,0,G+2/3,X,0,G+2/3,X+1,0,G,X,0,G+2/3,X+1,0,G,X+1,0];k.set(N,T*C*H),F.set(S,x*C*H);const U=[H,H,H,H,H,H];A.set(U,g*C*H)}const $=new jt;$.setAttribute("position",new mn(k,T)),$.setAttribute("uv",new mn(F,x)),$.setAttribute("faceIndex",new mn(A,g)),e.push($),s>zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hc(i,e,t){const n=new ur(i,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Em(i,e,t){const n=new Float32Array(sr),s=new Z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fc(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function dc(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function wm(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,p=d===Po||d===Lo,_=d===qr||d===Yr;if(p||_){let M=e.get(c);const S=M!==void 0?M.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==S)return t===null&&(t=new uc(i)),M=p?t.fromEquirectangular(c,M):t.fromCubemap(c,M),M.texture.pmremVersion=c.pmremVersion,e.set(c,M),M.texture;if(M!==void 0)return M.texture;{const b=c.image;return p&&b&&b.height>0||_&&b&&s(b)?(t===null&&(t=new uc(i)),M=p?t.fromEquirectangular(c):t.fromCubemap(c),M.texture.pmremVersion=c.pmremVersion,e.set(c,M),c.addEventListener("dispose",o),M.texture):null}}}return c}function s(c){let d=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&d++;return d===p}function o(c){const d=c.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Tm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,e,t,n){const s={},o=new WeakMap;function u(M){const S=M.target;S.index!==null&&e.remove(S.index);for(const C in S.attributes)e.remove(S.attributes[C]);for(const C in S.morphAttributes){const T=S.morphAttributes[C];for(let x=0,g=T.length;x<g;x++)e.remove(T[x])}S.removeEventListener("dispose",u),delete s[S.id];const b=o.get(S);b&&(e.remove(b),o.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function c(M,S){return s[S.id]===!0||(S.addEventListener("dispose",u),s[S.id]=!0,t.memory.geometries++),S}function d(M){const S=M.attributes;for(const C in S)e.update(S[C],i.ARRAY_BUFFER);const b=M.morphAttributes;for(const C in b){const T=b[C];for(let x=0,g=T.length;x<g;x++)e.update(T[x],i.ARRAY_BUFFER)}}function p(M){const S=[],b=M.index,C=M.attributes.position;let T=0;if(b!==null){const k=b.array;T=b.version;for(let F=0,A=k.length;F<A;F+=3){const $=k[F+0],H=k[F+1],G=k[F+2];S.push($,H,H,G,G,$)}}else if(C!==void 0){const k=C.array;T=C.version;for(let F=0,A=k.length/3-1;F<A;F+=3){const $=F+0,H=F+1,G=F+2;S.push($,H,H,G,G,$)}}else return;const x=new(Su(S)?Tu:wu)(S,1);x.version=T;const g=o.get(M);g&&e.remove(g),o.set(M,x)}function _(M){const S=o.get(M);if(S){const b=M.index;b!==null&&S.version<b.version&&p(M)}else p(M);return o.get(M)}return{get:c,update:d,getWireframeAttribute:_}}function Cm(i,e,t){let n;function s(S){n=S}let o,u;function c(S){o=S.type,u=S.bytesPerElement}function d(S,b){i.drawElements(n,b,o,S*u),t.update(b,n,1)}function p(S,b,C){C!==0&&(i.drawElementsInstanced(n,b,o,S*u,C),t.update(b,n,C))}function _(S,b,C){if(C===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,b,0,o,S,0,C);let x=0;for(let g=0;g<C;g++)x+=b[g];t.update(x,n,1)}function M(S,b,C,T){if(C===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)p(S[g]/u,b[g],T[g]);else{x.multiDrawElementsInstancedWEBGL(n,b,0,o,S,0,T,0,C);let g=0;for(let k=0;k<C;k++)g+=b[k]*T[k];t.update(g,n,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=M}function Rm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,e,t){const n=new WeakMap,s=new nn;function o(u,c,d){const p=u.morphTargetInfluences,_=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=_!==void 0?_.length:0;let S=n.get(c);if(S===void 0||S.count!==M){let N=function(){G.dispose(),n.delete(c),c.removeEventListener("dispose",N)};S!==void 0&&S.texture.dispose();const b=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],k=c.morphAttributes.color||[];let F=0;b===!0&&(F=1),C===!0&&(F=2),T===!0&&(F=3);let A=c.attributes.position.count*F,$=1;A>e.maxTextureSize&&($=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const H=new Float32Array(A*$*4*M),G=new bu(H,A,$,M);G.type=Ei,G.needsUpdate=!0;const X=F*4;for(let U=0;U<M;U++){const W=x[U],ue=g[U],ee=k[U],se=A*$*4*U;for(let Ee=0;Ee<W.count;Ee++){const he=Ee*X;b===!0&&(s.fromBufferAttribute(W,Ee),H[se+he+0]=s.x,H[se+he+1]=s.y,H[se+he+2]=s.z,H[se+he+3]=0),C===!0&&(s.fromBufferAttribute(ue,Ee),H[se+he+4]=s.x,H[se+he+5]=s.y,H[se+he+6]=s.z,H[se+he+7]=0),T===!0&&(s.fromBufferAttribute(ee,Ee),H[se+he+8]=s.x,H[se+he+9]=s.y,H[se+he+10]=s.z,H[se+he+11]=ee.itemSize===4?s.w:1)}}S={count:M,texture:G,size:new lt(A,$)},n.set(c,S),c.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let b=0;for(let T=0;T<p.length;T++)b+=p[T];const C=c.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",C),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}return{update:o}}function Lm(i,e,t,n){let s=new WeakMap;function o(d){const p=n.render.frame,_=d.geometry,M=e.get(d,_);if(s.get(M)!==p&&(e.update(M),s.set(M,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const S=d.skeleton;s.get(S)!==p&&(S.update(),s.set(S,p))}return M}function u(){s=new WeakMap}function c(d){const p=d.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:u}}class Lu extends Cn{constructor(e,t,n,s,o,u,c,d,p,_=Gr){if(_!==Gr&&_!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&_===Gr&&(n=cr),n===void 0&&_===Kr&&(n=$r),super(null,s,o,u,c,d,_,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ii,this.minFilter=d!==void 0?d:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Du=new Cn,pc=new Lu(1,1),Iu=new bu,Uu=new vf,Nu=new Ru,mc=[],_c=[],vc=new Float32Array(16),gc=new Float32Array(9),xc=new Float32Array(4);function Qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=mc[s];if(o===void 0&&(o=new Float32Array(s),mc[s]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(o,c)}return o}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),un(t,n)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),un(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),un(t,n)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=Mu,o=pc):o=Du,t.setTexture2D(e||o,s)}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uu,s)}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nu,s)}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Iu,s)}function Zm(i){switch(i){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function Jm(i,e){i.uniform1fv(this.addr,e)}function Qm(i,e){const t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function e0(i,e){const t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function t0(i,e){const t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function n0(i,e){const t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i0(i,e){const t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r0(i,e){const t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s0(i,e){i.uniform1iv(this.addr,e)}function a0(i,e){i.uniform2iv(this.addr,e)}function o0(i,e){i.uniform3iv(this.addr,e)}function l0(i,e){i.uniform4iv(this.addr,e)}function c0(i,e){i.uniform1uiv(this.addr,e)}function u0(i,e){i.uniform2uiv(this.addr,e)}function h0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function d0(i,e,t){const n=this.cache,s=e.length,o=Ca(t,s);cn(n,o)||(i.uniform1iv(this.addr,o),un(n,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Du,o[u])}function p0(i,e,t){const n=this.cache,s=e.length,o=Ca(t,s);cn(n,o)||(i.uniform1iv(this.addr,o),un(n,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Uu,o[u])}function m0(i,e,t){const n=this.cache,s=e.length,o=Ca(t,s);cn(n,o)||(i.uniform1iv(this.addr,o),un(n,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Nu,o[u])}function _0(i,e,t){const n=this.cache,s=e.length,o=Ca(t,s);cn(n,o)||(i.uniform1iv(this.addr,o),un(n,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Iu,o[u])}function v0(i){switch(i){case 5126:return Jm;case 35664:return Qm;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return _0}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zm(t.type)}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}}class M0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function S0(i,e,t){const n=i.name,s=n.length;for(so.lastIndex=0;;){const o=so.exec(n),u=so.lastIndex;let c=o[1];const d=o[2]==="]",p=o[3];if(d&&(c=c|0),p===void 0||p==="["&&u+2===s){Mc(t,p===void 0?new g0(c,i,e):new x0(c,i,e));break}else{let M=t.map[c];M===void 0&&(M=new M0(c),Mc(t,M)),t=M}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);S0(o,u,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function Sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const y0=37297;let b0=0;function E0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const yc=new St;function w0(i){Nt._getMatrix(yc,Nt.workingColorSpace,i);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(e),u)}else return s}function T0(i,e){const t=w0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A0(i,e){let t;switch(e){case Hh:t="Linear";break;case Gh:t="Reinhard";break;case Wh:t="Cineon";break;case Xh:t="ACESFilmic";break;case Yh:t="AgX";break;case $h:t="Neutral";break;case qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new Z;function C0(){Nt.getLuminanceCoefficients(js);const i=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function P0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),u=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function ms(i){return i!==""}function Ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(D0,U0)}const I0=new Map;function U0(i,e){let t=Et[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(N0,F0)}function F0(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ac(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function k0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dl:e="ENVMAP_BLENDING_MULTIPLY";break;case kh:e="ENVMAP_BLENDING_MIX";break;case Vh:e="ENVMAP_BLENDING_ADD";break}return e}function V0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H0(i,e,t,n){const s=i.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=O0(t),p=B0(t),_=z0(t),M=k0(t),S=V0(t),b=R0(t),C=P0(o),T=s.createProgram();let x,g,k=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ms).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(ms).join(`
`),g.length>0&&(g+=`
`)):(x=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),g=[Ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Gi?A0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,T0("linearToOutputTexel",t.outputColorSpace),C0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),u=ll(u),u=Ec(u,t),u=wc(u,t),c=ll(c),c=Ec(c,t),c=wc(c,t),u=Tc(u),c=Tc(c),t.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,x=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const F=k+x+u,A=k+g+c,$=Sc(s,s.VERTEX_SHADER,F),H=Sc(s,s.FRAGMENT_SHADER,A);s.attachShader(T,$),s.attachShader(T,H),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function G(W){if(i.debug.checkShaderErrors){const ue=s.getProgramInfoLog(T).trim(),ee=s.getShaderInfoLog($).trim(),se=s.getShaderInfoLog(H).trim();let Ee=!0,he=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,$,H);else{const Me=bc(s,$,"vertex"),fe=bc(s,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ue+`
`+Me+`
`+fe)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ee===""||se==="")&&(he=!1);he&&(W.diagnostics={runnable:Ee,programLog:ue,vertexShader:{log:ee,prefix:x},fragmentShader:{log:se,prefix:g}})}s.deleteShader($),s.deleteShader(H),X=new _a(s,T),N=L0(s,T)}let X;this.getUniforms=function(){return X===void 0&&G(this),X};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(T,y0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b0++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=H,this}let G0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}}function q0(i,e,t,n,s,o,u){const c=new Ml,d=new W0,p=new Set,_=[],M=s.logarithmicDepthBuffer,S=s.vertexTextures;let b=s.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return p.add(N),N===0?"uv":`uv${N}`}function x(N,U,W,ue,ee){const se=ue.fog,Ee=ee.geometry,he=N.isMeshStandardMaterial?ue.environment:null,Me=(N.isMeshStandardMaterial?t:e).get(N.envMap||he),fe=Me&&Me.mapping===Ea?Me.image.height:null,ve=C[N.type];N.precision!==null&&(b=s.getMaxPrecision(N.precision),b!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",b,"instead."));const He=Ee.morphAttributes.position||Ee.morphAttributes.normal||Ee.morphAttributes.color,Je=He!==void 0?He.length:0;let de=0;Ee.morphAttributes.position!==void 0&&(de=1),Ee.morphAttributes.normal!==void 0&&(de=2),Ee.morphAttributes.color!==void 0&&(de=3);let Ze,me,oe,Le;if(ve){const Lt=li[ve];Ze=Lt.vertexShader,me=Lt.fragmentShader}else Ze=N.vertexShader,me=N.fragmentShader,d.update(N),oe=d.getVertexShaderID(N),Le=d.getFragmentShaderID(N);const De=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),Ge=ee.isInstancedMesh===!0,et=ee.isBatchedMesh===!0,Dt=!!N.map,Tt=!!N.matcap,qt=!!Me,j=!!N.aoMap,Yt=!!N.lightMap,xt=!!N.bumpMap,yt=!!N.normalMap,tt=!!N.displacementMap,Bt=!!N.emissiveMap,it=!!N.metalnessMap,z=!!N.roughnessMap,D=N.anisotropy>0,re=N.clearcoat>0,be=N.dispersion>0,we=N.iridescence>0,xe=N.sheen>0,je=N.transmission>0,Fe=D&&!!N.anisotropyMap,Be=re&&!!N.clearcoatMap,_t=re&&!!N.clearcoatNormalMap,Ae=re&&!!N.clearcoatRoughnessMap,Ve=we&&!!N.iridescenceMap,nt=we&&!!N.iridescenceThicknessMap,Ie=xe&&!!N.sheenColorMap,We=xe&&!!N.sheenRoughnessMap,rt=!!N.specularMap,ut=!!N.specularColorMap,Ct=!!N.specularIntensityMap,Q=je&&!!N.transmissionMap,Ue=je&&!!N.thicknessMap,pe=!!N.gradientMap,ge=!!N.alphaMap,v=N.alphaTest>0,Se=!!N.alphaHash,ft=!!N.extensions;let It=Gi;N.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(It=i.toneMapping);const Ut={shaderID:ve,shaderType:N.type,shaderName:N.name,vertexShader:Ze,fragmentShader:me,defines:N.defines,customVertexShaderID:oe,customFragmentShaderID:Le,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:b,batching:et,batchingColor:et&&ee._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&ee.instanceColor!==null,instancingMorph:Ge&&ee.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Zr,alphaToCoverage:!!N.alphaToCoverage,map:Dt,matcap:Tt,envMap:qt,envMapMode:qt&&Me.mapping,envMapCubeUVHeight:fe,aoMap:j,lightMap:Yt,bumpMap:xt,normalMap:yt,displacementMap:S&&tt,emissiveMap:Bt,normalMapObjectSpace:yt&&N.normalMapType===Jh,normalMapTangentSpace:yt&&N.normalMapType===xu,metalnessMap:it,roughnessMap:z,anisotropy:D,anisotropyMap:Fe,clearcoat:re,clearcoatMap:Be,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ae,dispersion:be,iridescence:we,iridescenceMap:Ve,iridescenceThicknessMap:nt,sheen:xe,sheenColorMap:Ie,sheenRoughnessMap:We,specularMap:rt,specularColorMap:ut,specularIntensityMap:Ct,transmission:je,transmissionMap:Q,thicknessMap:Ue,gradientMap:pe,opaque:N.transparent===!1&&N.blending===Hr&&N.alphaToCoverage===!1,alphaMap:ge,alphaTest:v,alphaHash:Se,combine:N.combine,mapUv:Dt&&T(N.map.channel),aoMapUv:j&&T(N.aoMap.channel),lightMapUv:Yt&&T(N.lightMap.channel),bumpMapUv:xt&&T(N.bumpMap.channel),normalMapUv:yt&&T(N.normalMap.channel),displacementMapUv:tt&&T(N.displacementMap.channel),emissiveMapUv:Bt&&T(N.emissiveMap.channel),metalnessMapUv:it&&T(N.metalnessMap.channel),roughnessMapUv:z&&T(N.roughnessMap.channel),anisotropyMapUv:Fe&&T(N.anisotropyMap.channel),clearcoatMapUv:Be&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:_t&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(N.sheenRoughnessMap.channel),specularMapUv:rt&&T(N.specularMap.channel),specularColorMapUv:ut&&T(N.specularColorMap.channel),specularIntensityMapUv:Ct&&T(N.specularIntensityMap.channel),transmissionMapUv:Q&&T(N.transmissionMap.channel),thicknessMapUv:Ue&&T(N.thicknessMap.channel),alphaMapUv:ge&&T(N.alphaMap.channel),vertexTangents:!!Ee.attributes.tangent&&(yt||D),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Ee.attributes.color&&Ee.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!Ee.attributes.uv&&(Dt||ge),fog:!!se,useFog:N.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:M,reverseDepthBuffer:ke,skinning:ee.isSkinnedMesh===!0,morphTargets:Ee.morphAttributes.position!==void 0,morphNormals:Ee.morphAttributes.normal!==void 0,morphColors:Ee.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:de,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Dt&&N.map.isVideoTexture===!0&&Nt.getTransfer(N.map.colorSpace)===Gt,decodeVideoTextureEmissive:Bt&&N.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(N.emissiveMap.colorSpace)===Gt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ti,flipSided:N.side===Pn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ft&&N.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&N.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function g(N){const U=[];if(N.shaderID?U.push(N.shaderID):(U.push(N.customVertexShaderID),U.push(N.customFragmentShaderID)),N.defines!==void 0)for(const W in N.defines)U.push(W),U.push(N.defines[W]);return N.isRawShaderMaterial===!1&&(k(U,N),F(U,N),U.push(i.outputColorSpace)),U.push(N.customProgramCacheKey),U.join()}function k(N,U){N.push(U.precision),N.push(U.outputColorSpace),N.push(U.envMapMode),N.push(U.envMapCubeUVHeight),N.push(U.mapUv),N.push(U.alphaMapUv),N.push(U.lightMapUv),N.push(U.aoMapUv),N.push(U.bumpMapUv),N.push(U.normalMapUv),N.push(U.displacementMapUv),N.push(U.emissiveMapUv),N.push(U.metalnessMapUv),N.push(U.roughnessMapUv),N.push(U.anisotropyMapUv),N.push(U.clearcoatMapUv),N.push(U.clearcoatNormalMapUv),N.push(U.clearcoatRoughnessMapUv),N.push(U.iridescenceMapUv),N.push(U.iridescenceThicknessMapUv),N.push(U.sheenColorMapUv),N.push(U.sheenRoughnessMapUv),N.push(U.specularMapUv),N.push(U.specularColorMapUv),N.push(U.specularIntensityMapUv),N.push(U.transmissionMapUv),N.push(U.thicknessMapUv),N.push(U.combine),N.push(U.fogExp2),N.push(U.sizeAttenuation),N.push(U.morphTargetsCount),N.push(U.morphAttributeCount),N.push(U.numDirLights),N.push(U.numPointLights),N.push(U.numSpotLights),N.push(U.numSpotLightMaps),N.push(U.numHemiLights),N.push(U.numRectAreaLights),N.push(U.numDirLightShadows),N.push(U.numPointLightShadows),N.push(U.numSpotLightShadows),N.push(U.numSpotLightShadowsWithMaps),N.push(U.numLightProbes),N.push(U.shadowMapType),N.push(U.toneMapping),N.push(U.numClippingPlanes),N.push(U.numClipIntersection),N.push(U.depthPacking)}function F(N,U){c.disableAll(),U.supportsVertexTextures&&c.enable(0),U.instancing&&c.enable(1),U.instancingColor&&c.enable(2),U.instancingMorph&&c.enable(3),U.matcap&&c.enable(4),U.envMap&&c.enable(5),U.normalMapObjectSpace&&c.enable(6),U.normalMapTangentSpace&&c.enable(7),U.clearcoat&&c.enable(8),U.iridescence&&c.enable(9),U.alphaTest&&c.enable(10),U.vertexColors&&c.enable(11),U.vertexAlphas&&c.enable(12),U.vertexUv1s&&c.enable(13),U.vertexUv2s&&c.enable(14),U.vertexUv3s&&c.enable(15),U.vertexTangents&&c.enable(16),U.anisotropy&&c.enable(17),U.alphaHash&&c.enable(18),U.batching&&c.enable(19),U.dispersion&&c.enable(20),U.batchingColor&&c.enable(21),N.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reverseDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),N.push(c.mask)}function A(N){const U=C[N.type];let W;if(U){const ue=li[U];W=Rf.clone(ue.uniforms)}else W=N.uniforms;return W}function $(N,U){let W;for(let ue=0,ee=_.length;ue<ee;ue++){const se=_[ue];if(se.cacheKey===U){W=se,++W.usedTimes;break}}return W===void 0&&(W=new H0(i,U,N,o),_.push(W)),W}function H(N){if(--N.usedTimes===0){const U=_.indexOf(N);_[U]=_[_.length-1],_.pop(),N.destroy()}}function G(N){d.remove(N)}function X(){d.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:$,releaseProgram:H,releaseShaderCache:G,programs:_,dispose:X}}function Y0(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function n(u){i.delete(u)}function s(u,c,d){i.get(u)[c]=d}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function $0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rc(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function u(M,S,b,C,T,x){let g=i[e];return g===void 0?(g={id:M.id,object:M,geometry:S,material:b,groupOrder:C,renderOrder:M.renderOrder,z:T,group:x},i[e]=g):(g.id=M.id,g.object=M,g.geometry=S,g.material=b,g.groupOrder=C,g.renderOrder=M.renderOrder,g.z=T,g.group=x),e++,g}function c(M,S,b,C,T,x){const g=u(M,S,b,C,T,x);b.transmission>0?n.push(g):b.transparent===!0?s.push(g):t.push(g)}function d(M,S,b,C,T,x){const g=u(M,S,b,C,T,x);b.transmission>0?n.unshift(g):b.transparent===!0?s.unshift(g):t.unshift(g)}function p(M,S){t.length>1&&t.sort(M||$0),n.length>1&&n.sort(S||Cc),s.length>1&&s.sort(S||Cc)}function _(){for(let M=e,S=i.length;M<S;M++){const b=i[M];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:d,finish:_,sort:p}}function K0(){let i=new WeakMap;function e(n,s){const o=i.get(n);let u;return o===void 0?(u=new Rc,i.set(n,[u])):s>=o.length?(u=new Rc,o.push(u)):u=o[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function j0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new wt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function Z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let J0=0;function Q0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e_(i){const e=new j0,t=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new Z);const s=new Z,o=new Zt,u=new Zt;function c(p){let _=0,M=0,S=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let b=0,C=0,T=0,x=0,g=0,k=0,F=0,A=0,$=0,H=0,G=0;p.sort(Q0);for(let N=0,U=p.length;N<U;N++){const W=p[N],ue=W.color,ee=W.intensity,se=W.distance,Ee=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)_+=ue.r*ee,M+=ue.g*ee,S+=ue.b*ee;else if(W.isLightProbe){for(let he=0;he<9;he++)n.probe[he].addScaledVector(W.sh.coefficients[he],ee);G++}else if(W.isDirectionalLight){const he=e.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const Me=W.shadow,fe=t.get(W);fe.shadowIntensity=Me.intensity,fe.shadowBias=Me.bias,fe.shadowNormalBias=Me.normalBias,fe.shadowRadius=Me.radius,fe.shadowMapSize=Me.mapSize,n.directionalShadow[b]=fe,n.directionalShadowMap[b]=Ee,n.directionalShadowMatrix[b]=W.shadow.matrix,k++}n.directional[b]=he,b++}else if(W.isSpotLight){const he=e.get(W);he.position.setFromMatrixPosition(W.matrixWorld),he.color.copy(ue).multiplyScalar(ee),he.distance=se,he.coneCos=Math.cos(W.angle),he.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),he.decay=W.decay,n.spot[T]=he;const Me=W.shadow;if(W.map&&(n.spotLightMap[$]=W.map,$++,Me.updateMatrices(W),W.castShadow&&H++),n.spotLightMatrix[T]=Me.matrix,W.castShadow){const fe=t.get(W);fe.shadowIntensity=Me.intensity,fe.shadowBias=Me.bias,fe.shadowNormalBias=Me.normalBias,fe.shadowRadius=Me.radius,fe.shadowMapSize=Me.mapSize,n.spotShadow[T]=fe,n.spotShadowMap[T]=Ee,A++}T++}else if(W.isRectAreaLight){const he=e.get(W);he.color.copy(ue).multiplyScalar(ee),he.halfWidth.set(W.width*.5,0,0),he.halfHeight.set(0,W.height*.5,0),n.rectArea[x]=he,x++}else if(W.isPointLight){const he=e.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity),he.distance=W.distance,he.decay=W.decay,W.castShadow){const Me=W.shadow,fe=t.get(W);fe.shadowIntensity=Me.intensity,fe.shadowBias=Me.bias,fe.shadowNormalBias=Me.normalBias,fe.shadowRadius=Me.radius,fe.shadowMapSize=Me.mapSize,fe.shadowCameraNear=Me.camera.near,fe.shadowCameraFar=Me.camera.far,n.pointShadow[C]=fe,n.pointShadowMap[C]=Ee,n.pointShadowMatrix[C]=W.shadow.matrix,F++}n.point[C]=he,C++}else if(W.isHemisphereLight){const he=e.get(W);he.skyColor.copy(W.color).multiplyScalar(ee),he.groundColor.copy(W.groundColor).multiplyScalar(ee),n.hemi[g]=he,g++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=M,n.ambient[2]=S;const X=n.hash;(X.directionalLength!==b||X.pointLength!==C||X.spotLength!==T||X.rectAreaLength!==x||X.hemiLength!==g||X.numDirectionalShadows!==k||X.numPointShadows!==F||X.numSpotShadows!==A||X.numSpotMaps!==$||X.numLightProbes!==G)&&(n.directional.length=b,n.spot.length=T,n.rectArea.length=x,n.point.length=C,n.hemi.length=g,n.directionalShadow.length=k,n.directionalShadowMap.length=k,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=k,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=A+$-H,n.spotLightMap.length=$,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=G,X.directionalLength=b,X.pointLength=C,X.spotLength=T,X.rectAreaLength=x,X.hemiLength=g,X.numDirectionalShadows=k,X.numPointShadows=F,X.numSpotShadows=A,X.numSpotMaps=$,X.numLightProbes=G,n.version=J0++)}function d(p,_){let M=0,S=0,b=0,C=0,T=0;const x=_.matrixWorldInverse;for(let g=0,k=p.length;g<k;g++){const F=p[g];if(F.isDirectionalLight){const A=n.directional[M];A.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),M++}else if(F.isSpotLight){const A=n.spot[b];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),b++}else if(F.isRectAreaLight){const A=n.rectArea[C];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(x),u.identity(),o.copy(F.matrixWorld),o.premultiply(x),u.extractRotation(o),A.halfWidth.set(F.width*.5,0,0),A.halfHeight.set(0,F.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),C++}else if(F.isPointLight){const A=n.point[S];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(x),S++}else if(F.isHemisphereLight){const A=n.hemi[T];A.direction.setFromMatrixPosition(F.matrixWorld),A.direction.transformDirection(x),T++}}}return{setup:c,setupView:d,state:n}}function Pc(i){const e=new e_(i),t=[],n=[];function s(_){p.camera=_,t.length=0,n.length=0}function o(_){t.push(_)}function u(_){n.push(_)}function c(){e.setup(t)}function d(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:u}}function t_(i){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new Pc(i),e.set(s,[c])):o>=u.length?(c=new Pc(i),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class n_ extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i_ extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a_(i,e,t){let n=new Sl;const s=new lt,o=new lt,u=new nn,c=new n_({depthPacking:Zh}),d=new i_,p={},_=t.maxTextureSize,M={[Xi]:Pn,[Pn]:Xi,[ti]:ti},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:r_,fragmentShader:s_}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const C=new jt;C.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vn(C,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let g=this.type;this.render=function(H,G,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const N=i.getRenderTarget(),U=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending(Hi),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ee=g!==yi&&this.type===yi,se=g===yi&&this.type!==yi;for(let Ee=0,he=H.length;Ee<he;Ee++){const Me=H[Ee],fe=Me.shadow;if(fe===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(fe.autoUpdate===!1&&fe.needsUpdate===!1)continue;s.copy(fe.mapSize);const ve=fe.getFrameExtents();if(s.multiply(ve),o.copy(fe.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(o.x=Math.floor(_/ve.x),s.x=o.x*ve.x,fe.mapSize.x=o.x),s.y>_&&(o.y=Math.floor(_/ve.y),s.y=o.y*ve.y,fe.mapSize.y=o.y)),fe.map===null||ee===!0||se===!0){const Je=this.type!==yi?{minFilter:ii,magFilter:ii}:{};fe.map!==null&&fe.map.dispose(),fe.map=new ur(s.x,s.y,Je),fe.map.texture.name=Me.name+".shadowMap",fe.camera.updateProjectionMatrix()}i.setRenderTarget(fe.map),i.clear();const He=fe.getViewportCount();for(let Je=0;Je<He;Je++){const de=fe.getViewport(Je);u.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),ue.viewport(u),fe.updateMatrices(Me,Je),n=fe.getFrustum(),A(G,X,fe.camera,Me,this.type)}fe.isPointLightShadow!==!0&&this.type===yi&&k(fe,X),fe.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(N,U,W)};function k(H,G){const X=e.update(T);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ur(s.x,s.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(G,null,X,S,T,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(G,null,X,b,T,null)}function F(H,G,X,N){let U=null;const W=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(W!==void 0)U=W;else if(U=X.isPointLight===!0?d:c,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const ue=U.uuid,ee=G.uuid;let se=p[ue];se===void 0&&(se={},p[ue]=se);let Ee=se[ee];Ee===void 0&&(Ee=U.clone(),se[ee]=Ee,G.addEventListener("dispose",$)),U=Ee}if(U.visible=G.visible,U.wireframe=G.wireframe,N===yi?U.side=G.shadowSide!==null?G.shadowSide:G.side:U.side=G.shadowSide!==null?G.shadowSide:M[G.side],U.alphaMap=G.alphaMap,U.alphaTest=G.alphaTest,U.map=G.map,U.clipShadows=G.clipShadows,U.clippingPlanes=G.clippingPlanes,U.clipIntersection=G.clipIntersection,U.displacementMap=G.displacementMap,U.displacementScale=G.displacementScale,U.displacementBias=G.displacementBias,U.wireframeLinewidth=G.wireframeLinewidth,U.linewidth=G.linewidth,X.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ue=i.properties.get(U);ue.light=X}return U}function A(H,G,X,N,U){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&U===yi)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const ee=e.update(H),se=H.material;if(Array.isArray(se)){const Ee=ee.groups;for(let he=0,Me=Ee.length;he<Me;he++){const fe=Ee[he],ve=se[fe.materialIndex];if(ve&&ve.visible){const He=F(H,ve,N,U);H.onBeforeShadow(i,H,G,X,ee,He,fe),i.renderBufferDirect(X,null,ee,He,H,fe),H.onAfterShadow(i,H,G,X,ee,He,fe)}}}else if(se.visible){const Ee=F(H,se,N,U);H.onBeforeShadow(i,H,G,X,ee,Ee,null),i.renderBufferDirect(X,null,ee,Ee,H,null),H.onAfterShadow(i,H,G,X,ee,Ee,null)}}const ue=H.children;for(let ee=0,se=ue.length;ee<se;ee++)A(ue[ee],G,X,N,U)}function $(H){H.target.removeEventListener("dispose",$);for(const X in p){const N=p[X],U=H.target.uuid;U in N&&(N[U].dispose(),delete N[U])}}}const o_={[bo]:Eo,[wo]:Co,[To]:Ro,[Xr]:Ao,[Eo]:bo,[Co]:wo,[Ro]:To,[Ao]:Xr};function l_(i,e){function t(){let Q=!1;const Ue=new nn;let pe=null;const ge=new nn(0,0,0,0);return{setMask:function(v){pe!==v&&!Q&&(i.colorMask(v,v,v,v),pe=v)},setLocked:function(v){Q=v},setClear:function(v,Se,ft,It,Ut){Ut===!0&&(v*=It,Se*=It,ft*=It),Ue.set(v,Se,ft,It),ge.equals(Ue)===!1&&(i.clearColor(v,Se,ft,It),ge.copy(Ue))},reset:function(){Q=!1,pe=null,ge.set(-1,0,0,0)}}}function n(){let Q=!1,Ue=!1,pe=null,ge=null,v=null;return{setReversed:function(Se){if(Ue!==Se){const ft=e.get("EXT_clip_control");Ue?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const It=v;v=null,this.setClear(It)}Ue=Se},getReversed:function(){return Ue},setTest:function(Se){Se?De(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Se){pe!==Se&&!Q&&(i.depthMask(Se),pe=Se)},setFunc:function(Se){if(Ue&&(Se=o_[Se]),ge!==Se){switch(Se){case bo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Se}},setLocked:function(Se){Q=Se},setClear:function(Se){v!==Se&&(Ue&&(Se=1-Se),i.clearDepth(Se),v=Se)},reset:function(){Q=!1,pe=null,ge=null,v=null,Ue=!1}}}function s(){let Q=!1,Ue=null,pe=null,ge=null,v=null,Se=null,ft=null,It=null,Ut=null;return{setTest:function(Lt){Q||(Lt?De(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Lt){Ue!==Lt&&!Q&&(i.stencilMask(Lt),Ue=Lt)},setFunc:function(Lt,Y,qe){(pe!==Lt||ge!==Y||v!==qe)&&(i.stencilFunc(Lt,Y,qe),pe=Lt,ge=Y,v=qe)},setOp:function(Lt,Y,qe){(Se!==Lt||ft!==Y||It!==qe)&&(i.stencilOp(Lt,Y,qe),Se=Lt,ft=Y,It=qe)},setLocked:function(Lt){Q=Lt},setClear:function(Lt){Ut!==Lt&&(i.clearStencil(Lt),Ut=Lt)},reset:function(){Q=!1,Ue=null,pe=null,ge=null,v=null,Se=null,ft=null,It=null,Ut=null}}}const o=new t,u=new n,c=new s,d=new WeakMap,p=new WeakMap;let _={},M={},S=new WeakMap,b=[],C=null,T=!1,x=null,g=null,k=null,F=null,A=null,$=null,H=null,G=new wt(0,0,0),X=0,N=!1,U=null,W=null,ue=null,ee=null,se=null;const Ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,Me=0;const fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(fe)[1]),he=Me>=1):fe.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),he=Me>=2);let ve=null,He={};const Je=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ze=new nn().fromArray(Je),me=new nn().fromArray(de);function oe(Q,Ue,pe,ge){const v=new Uint8Array(4),Se=i.createTexture();i.bindTexture(Q,Se),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<pe;ft++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,v):i.texImage2D(Ue+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,v);return Se}const Le={};Le[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),De(i.DEPTH_TEST),u.setFunc(Xr),xt(!1),yt(Nl),De(i.CULL_FACE),j(Hi);function De(Q){_[Q]!==!0&&(i.enable(Q),_[Q]=!0)}function ke(Q){_[Q]!==!1&&(i.disable(Q),_[Q]=!1)}function Ge(Q,Ue){return M[Q]!==Ue?(i.bindFramebuffer(Q,Ue),M[Q]=Ue,Q===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=Ue),Q===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function et(Q,Ue){let pe=b,ge=!1;if(Q){pe=S.get(Ue),pe===void 0&&(pe=[],S.set(Ue,pe));const v=Q.textures;if(pe.length!==v.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,ft=v.length;Se<ft;Se++)pe[Se]=i.COLOR_ATTACHMENT0+Se;pe.length=v.length,ge=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,ge=!0);ge&&i.drawBuffers(pe)}function Dt(Q){return C!==Q?(i.useProgram(Q),C=Q,!0):!1}const Tt={[rr]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};Tt[wh]=i.MIN,Tt[Th]=i.MAX;const qt={[Ah]:i.ZERO,[Ch]:i.ONE,[Rh]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function j(Q,Ue,pe,ge,v,Se,ft,It,Ut,Lt){if(Q===Hi){T===!0&&(ke(i.BLEND),T=!1);return}if(T===!1&&(De(i.BLEND),T=!0),Q!==yh){if(Q!==x||Lt!==N){if((g!==rr||A!==rr)&&(i.blendEquation(i.FUNC_ADD),g=rr,A=rr),Lt)switch(Q){case Hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}k=null,F=null,$=null,H=null,G.set(0,0,0),X=0,x=Q,N=Lt}return}v=v||Ue,Se=Se||pe,ft=ft||ge,(Ue!==g||v!==A)&&(i.blendEquationSeparate(Tt[Ue],Tt[v]),g=Ue,A=v),(pe!==k||ge!==F||Se!==$||ft!==H)&&(i.blendFuncSeparate(qt[pe],qt[ge],qt[Se],qt[ft]),k=pe,F=ge,$=Se,H=ft),(It.equals(G)===!1||Ut!==X)&&(i.blendColor(It.r,It.g,It.b,Ut),G.copy(It),X=Ut),x=Q,N=!1}function Yt(Q,Ue){Q.side===ti?ke(i.CULL_FACE):De(i.CULL_FACE);let pe=Q.side===Pn;Ue&&(pe=!pe),xt(pe),Q.blending===Hr&&Q.transparent===!1?j(Hi):j(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),u.setFunc(Q.depthFunc),u.setTest(Q.depthTest),u.setMask(Q.depthWrite),o.setMask(Q.colorWrite);const ge=Q.stencilWrite;c.setTest(ge),ge&&(c.setMask(Q.stencilWriteMask),c.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),c.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Bt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(Q){U!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),U=Q)}function yt(Q){Q!==xh?(De(i.CULL_FACE),Q!==W&&(Q===Nl?i.cullFace(i.BACK):Q===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),W=Q}function tt(Q){Q!==ue&&(he&&i.lineWidth(Q),ue=Q)}function Bt(Q,Ue,pe){Q?(De(i.POLYGON_OFFSET_FILL),(ee!==Ue||se!==pe)&&(i.polygonOffset(Ue,pe),ee=Ue,se=pe)):ke(i.POLYGON_OFFSET_FILL)}function it(Q){Q?De(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function z(Q){Q===void 0&&(Q=i.TEXTURE0+Ee-1),ve!==Q&&(i.activeTexture(Q),ve=Q)}function D(Q,Ue,pe){pe===void 0&&(ve===null?pe=i.TEXTURE0+Ee-1:pe=ve);let ge=He[pe];ge===void 0&&(ge={type:void 0,texture:void 0},He[pe]=ge),(ge.type!==Q||ge.texture!==Ue)&&(ve!==pe&&(i.activeTexture(pe),ve=pe),i.bindTexture(Q,Ue||Le[Q]),ge.type=Q,ge.texture=Ue)}function re(){const Q=He[ve];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function be(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function _t(){try{i.texStorage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ie(Q){Ze.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ze.copy(Q))}function We(Q){me.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),me.copy(Q))}function rt(Q,Ue){let pe=p.get(Ue);pe===void 0&&(pe=new WeakMap,p.set(Ue,pe));let ge=pe.get(Q);ge===void 0&&(ge=i.getUniformBlockIndex(Ue,Q.name),pe.set(Q,ge))}function ut(Q,Ue){const ge=p.get(Ue).get(Q);d.get(Ue)!==ge&&(i.uniformBlockBinding(Ue,ge,Q.__bindingPointIndex),d.set(Ue,ge))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},ve=null,He={},M={},S=new WeakMap,b=[],C=null,T=!1,x=null,g=null,k=null,F=null,A=null,$=null,H=null,G=new wt(0,0,0),X=0,N=!1,U=null,W=null,ue=null,ee=null,se=null,Ze.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:De,disable:ke,bindFramebuffer:Ge,drawBuffers:et,useProgram:Dt,setBlending:j,setMaterial:Yt,setFlipSided:xt,setCullFace:yt,setLineWidth:tt,setPolygonOffset:Bt,setScissorTest:it,activeTexture:z,bindTexture:D,unbindTexture:re,compressedTexImage2D:be,compressedTexImage3D:we,texImage2D:Ve,texImage3D:nt,updateUBOMapping:rt,uniformBlockBinding:ut,texStorage2D:_t,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:je,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Be,scissor:Ie,viewport:We,reset:Ct}}function Lc(i,e,t,n){const s=c_(n);switch(t){case fu:return i*e;case pu:return i*e;case mu:return i*e*2;case _u:return i*e/s.components*s.byteLength;case vl:return i*e/s.components*s.byteLength;case vu:return i*e*2/s.components*s.byteLength;case gl:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case ni:return i*e*4/s.components*s.byteLength;case xl:return i*e*4/s.components*s.byteLength;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:case Oo:return Math.max(i,16)*Math.max(e,8)/4;case Uo:case Fo:return Math.max(i,8)*Math.max(e,8)/2;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gu:case il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rl:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(i){switch(i){case Ai:case cu:return{byteLength:1,components:1};case gs:case uu:case Ms:return{byteLength:2,components:1};case ml:case _l:return{byteLength:2,components:4};case cr:case pl:case Ei:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function u_(i,e,t,n,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,_=new WeakMap;let M;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(z,D){return b?new OffscreenCanvas(z,D):Ma("canvas")}function T(z,D,re){let be=1;const we=it(z);if((we.width>re||we.height>re)&&(be=re/Math.max(we.width,we.height)),be<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const xe=Math.floor(be*we.width),je=Math.floor(be*we.height);M===void 0&&(M=C(xe,je));const Fe=D?C(xe,je):M;return Fe.width=xe,Fe.height=je,Fe.getContext("2d").drawImage(z,0,0,xe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+xe+"x"+je+")."),Fe}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),z;return z}function x(z){return z.generateMipmaps}function g(z){i.generateMipmap(z)}function k(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(z,D,re,be,we=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let xe=D;if(D===i.RED&&(re===i.FLOAT&&(xe=i.R32F),re===i.HALF_FLOAT&&(xe=i.R16F),re===i.UNSIGNED_BYTE&&(xe=i.R8)),D===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(xe=i.R8UI),re===i.UNSIGNED_SHORT&&(xe=i.R16UI),re===i.UNSIGNED_INT&&(xe=i.R32UI),re===i.BYTE&&(xe=i.R8I),re===i.SHORT&&(xe=i.R16I),re===i.INT&&(xe=i.R32I)),D===i.RG&&(re===i.FLOAT&&(xe=i.RG32F),re===i.HALF_FLOAT&&(xe=i.RG16F),re===i.UNSIGNED_BYTE&&(xe=i.RG8)),D===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(xe=i.RG8UI),re===i.UNSIGNED_SHORT&&(xe=i.RG16UI),re===i.UNSIGNED_INT&&(xe=i.RG32UI),re===i.BYTE&&(xe=i.RG8I),re===i.SHORT&&(xe=i.RG16I),re===i.INT&&(xe=i.RG32I)),D===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(xe=i.RGB8UI),re===i.UNSIGNED_SHORT&&(xe=i.RGB16UI),re===i.UNSIGNED_INT&&(xe=i.RGB32UI),re===i.BYTE&&(xe=i.RGB8I),re===i.SHORT&&(xe=i.RGB16I),re===i.INT&&(xe=i.RGB32I)),D===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(xe=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(xe=i.RGBA16UI),re===i.UNSIGNED_INT&&(xe=i.RGBA32UI),re===i.BYTE&&(xe=i.RGBA8I),re===i.SHORT&&(xe=i.RGBA16I),re===i.INT&&(xe=i.RGBA32I)),D===i.RGB&&re===i.UNSIGNED_INT_5_9_9_9_REV&&(xe=i.RGB9_E5),D===i.RGBA){const je=we?wa:Nt.getTransfer(be);re===i.FLOAT&&(xe=i.RGBA32F),re===i.HALF_FLOAT&&(xe=i.RGBA16F),re===i.UNSIGNED_BYTE&&(xe=je===Gt?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(xe=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(xe=i.RGB5_A1)}return(xe===i.R16F||xe===i.R32F||xe===i.RG16F||xe===i.RG32F||xe===i.RGBA16F||xe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function A(z,D){let re;return z?D===null||D===cr||D===$r?re=i.DEPTH24_STENCIL8:D===Ei?re=i.DEPTH32F_STENCIL8:D===gs&&(re=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===cr||D===$r?re=i.DEPTH_COMPONENT24:D===Ei?re=i.DEPTH_COMPONENT32F:D===gs&&(re=i.DEPTH_COMPONENT16),re}function $(z,D){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==ii&&z.minFilter!==qn?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function H(z){const D=z.target;D.removeEventListener("dispose",H),X(D),D.isVideoTexture&&_.delete(D)}function G(z){const D=z.target;D.removeEventListener("dispose",G),U(D)}function X(z){const D=n.get(z);if(D.__webglInit===void 0)return;const re=z.source,be=S.get(re);if(be){const we=be[D.__cacheKey];we.usedTimes--,we.usedTimes===0&&N(z),Object.keys(be).length===0&&S.delete(re)}n.remove(z)}function N(z){const D=n.get(z);i.deleteTexture(D.__webglTexture);const re=z.source,be=S.get(re);delete be[D.__cacheKey],u.memory.textures--}function U(z){const D=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(D.__webglFramebuffer[be]))for(let we=0;we<D.__webglFramebuffer[be].length;we++)i.deleteFramebuffer(D.__webglFramebuffer[be][we]);else i.deleteFramebuffer(D.__webglFramebuffer[be]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[be])}else{if(Array.isArray(D.__webglFramebuffer))for(let be=0;be<D.__webglFramebuffer.length;be++)i.deleteFramebuffer(D.__webglFramebuffer[be]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let be=0;be<D.__webglColorRenderbuffer.length;be++)D.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[be]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const re=z.textures;for(let be=0,we=re.length;be<we;be++){const xe=n.get(re[be]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),u.memory.textures--),n.remove(re[be])}n.remove(z)}let W=0;function ue(){W=0}function ee(){const z=W;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),W+=1,z}function se(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function Ee(z,D){const re=n.get(z);if(z.isVideoTexture&&tt(z),z.isRenderTargetTexture===!1&&z.version>0&&re.__version!==z.version){const be=z.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(re,z,D);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+D)}function he(z,D){const re=n.get(z);if(z.version>0&&re.__version!==z.version){me(re,z,D);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+D)}function Me(z,D){const re=n.get(z);if(z.version>0&&re.__version!==z.version){me(re,z,D);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+D)}function fe(z,D){const re=n.get(z);if(z.version>0&&re.__version!==z.version){oe(re,z,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+D)}const ve={[Do]:i.REPEAT,[or]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},He={[ii]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},Je={[Qh]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[Mu]:i.LEQUAL,[tf]:i.EQUAL,[sf]:i.GEQUAL,[nf]:i.GREATER,[rf]:i.NOTEQUAL};function de(z,D){if(D.type===Ei&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===qn||D.magFilter===Da||D.magFilter===Ps||D.magFilter===lr||D.minFilter===qn||D.minFilter===Da||D.minFilter===Ps||D.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ve[D.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ve[D.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ve[D.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,He[D.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,He[D.minFilter]),D.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Je[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===ii||D.minFilter!==Ps&&D.minFilter!==lr||D.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function Ze(z,D){let re=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",H));const be=D.source;let we=S.get(be);we===void 0&&(we={},S.set(be,we));const xe=se(D);if(xe!==z.__cacheKey){we[xe]===void 0&&(we[xe]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,re=!0),we[xe].usedTimes++;const je=we[z.__cacheKey];je!==void 0&&(we[z.__cacheKey].usedTimes--,je.usedTimes===0&&N(D)),z.__cacheKey=xe,z.__webglTexture=we[xe].texture}return re}function me(z,D,re){let be=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(be=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(be=i.TEXTURE_3D);const we=Ze(z,D),xe=D.source;t.bindTexture(be,z.__webglTexture,i.TEXTURE0+re);const je=n.get(xe);if(xe.version!==je.__version||we===!0){t.activeTexture(i.TEXTURE0+re);const Fe=Nt.getPrimaries(Nt.workingColorSpace),Be=D.colorSpace===Fi?null:Nt.getPrimaries(D.colorSpace),_t=D.colorSpace===Fi||Fe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ae=T(D.image,!1,s.maxTextureSize);Ae=Bt(D,Ae);const Ve=o.convert(D.format,D.colorSpace),nt=o.convert(D.type);let Ie=F(D.internalFormat,Ve,nt,D.colorSpace,D.isVideoTexture);de(be,D);let We;const rt=D.mipmaps,ut=D.isVideoTexture!==!0,Ct=je.__version===void 0||we===!0,Q=xe.dataReady,Ue=$(D,Ae);if(D.isDepthTexture)Ie=A(D.format===Kr,D.type),Ct&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Ie,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,Ve,nt,null));else if(D.isDataTexture)if(rt.length>0){ut&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ue,Ie,rt[0].width,rt[0].height);for(let pe=0,ge=rt.length;pe<ge;pe++)We=rt[pe],ut?Q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,We.width,We.height,Ve,nt,We.data):t.texImage2D(i.TEXTURE_2D,pe,Ie,We.width,We.height,0,Ve,nt,We.data);D.generateMipmaps=!1}else ut?(Ct&&t.texStorage2D(i.TEXTURE_2D,Ue,Ie,Ae.width,Ae.height),Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ve,nt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,Ve,nt,Ae.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){ut&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ie,rt[0].width,rt[0].height,Ae.depth);for(let pe=0,ge=rt.length;pe<ge;pe++)if(We=rt[pe],D.format!==ni)if(Ve!==null)if(ut){if(Q)if(D.layerUpdates.size>0){const v=Lc(We.width,We.height,D.format,D.type);for(const Se of D.layerUpdates){const ft=We.data.subarray(Se*v/We.data.BYTES_PER_ELEMENT,(Se+1)*v/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Se,We.width,We.height,1,Ve,ft)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,We.width,We.height,Ae.depth,Ve,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Ie,We.width,We.height,Ae.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,We.width,We.height,Ae.depth,Ve,nt,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Ie,We.width,We.height,Ae.depth,0,Ve,nt,We.data)}else{ut&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ue,Ie,rt[0].width,rt[0].height);for(let pe=0,ge=rt.length;pe<ge;pe++)We=rt[pe],D.format!==ni?Ve!==null?ut?Q&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,We.width,We.height,Ve,We.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Ie,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,We.width,We.height,Ve,nt,We.data):t.texImage2D(i.TEXTURE_2D,pe,Ie,We.width,We.height,0,Ve,nt,We.data)}else if(D.isDataArrayTexture)if(ut){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ie,Ae.width,Ae.height,Ae.depth),Q)if(D.layerUpdates.size>0){const pe=Lc(Ae.width,Ae.height,D.format,D.type);for(const ge of D.layerUpdates){const v=Ae.data.subarray(ge*pe/Ae.data.BYTES_PER_ELEMENT,(ge+1)*pe/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Ve,nt,v)}D.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,nt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,Ae.width,Ae.height,Ae.depth,0,Ve,nt,Ae.data);else if(D.isData3DTexture)ut?(Ct&&t.texStorage3D(i.TEXTURE_3D,Ue,Ie,Ae.width,Ae.height,Ae.depth),Q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,nt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,Ae.width,Ae.height,Ae.depth,0,Ve,nt,Ae.data);else if(D.isFramebufferTexture){if(Ct)if(ut)t.texStorage2D(i.TEXTURE_2D,Ue,Ie,Ae.width,Ae.height);else{let pe=Ae.width,ge=Ae.height;for(let v=0;v<Ue;v++)t.texImage2D(i.TEXTURE_2D,v,Ie,pe,ge,0,Ve,nt,null),pe>>=1,ge>>=1}}else if(rt.length>0){if(ut&&Ct){const pe=it(rt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ie,pe.width,pe.height)}for(let pe=0,ge=rt.length;pe<ge;pe++)We=rt[pe],ut?Q&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Ve,nt,We):t.texImage2D(i.TEXTURE_2D,pe,Ie,Ve,nt,We);D.generateMipmaps=!1}else if(ut){if(Ct){const pe=it(Ae);t.texStorage2D(i.TEXTURE_2D,Ue,Ie,pe.width,pe.height)}Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,nt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ve,nt,Ae);x(D)&&g(be),je.__version=xe.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function oe(z,D,re){if(D.image.length!==6)return;const be=Ze(z,D),we=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+re);const xe=n.get(we);if(we.version!==xe.__version||be===!0){t.activeTexture(i.TEXTURE0+re);const je=Nt.getPrimaries(Nt.workingColorSpace),Fe=D.colorSpace===Fi?null:Nt.getPrimaries(D.colorSpace),Be=D.colorSpace===Fi||je===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const _t=D.isCompressedTexture||D.image[0].isCompressedTexture,Ae=D.image[0]&&D.image[0].isDataTexture,Ve=[];for(let ge=0;ge<6;ge++)!_t&&!Ae?Ve[ge]=T(D.image[ge],!0,s.maxCubemapSize):Ve[ge]=Ae?D.image[ge].image:D.image[ge],Ve[ge]=Bt(D,Ve[ge]);const nt=Ve[0],Ie=o.convert(D.format,D.colorSpace),We=o.convert(D.type),rt=F(D.internalFormat,Ie,We,D.colorSpace),ut=D.isVideoTexture!==!0,Ct=xe.__version===void 0||be===!0,Q=we.dataReady;let Ue=$(D,nt);de(i.TEXTURE_CUBE_MAP,D);let pe;if(_t){ut&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,rt,nt.width,nt.height);for(let ge=0;ge<6;ge++){pe=Ve[ge].mipmaps;for(let v=0;v<pe.length;v++){const Se=pe[v];D.format!==ni?Ie!==null?ut?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v,rt,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v,0,0,Se.width,Se.height,Ie,We,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v,rt,Se.width,Se.height,0,Ie,We,Se.data)}}}else{if(pe=D.mipmaps,ut&&Ct){pe.length>0&&Ue++;const ge=it(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,rt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve[ge].width,Ve[ge].height,Ie,We,Ve[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ve[ge].width,Ve[ge].height,0,Ie,We,Ve[ge].data);for(let v=0;v<pe.length;v++){const ft=pe[v].image[ge].image;ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v+1,0,0,ft.width,ft.height,Ie,We,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v+1,rt,ft.width,ft.height,0,Ie,We,ft.data)}}else{ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie,We,Ve[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ie,We,Ve[ge]);for(let v=0;v<pe.length;v++){const Se=pe[v];ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v+1,0,0,Ie,We,Se.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,v+1,rt,Ie,We,Se.image[ge])}}}x(D)&&g(i.TEXTURE_CUBE_MAP),xe.__version=we.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Le(z,D,re,be,we,xe){const je=o.convert(re.format,re.colorSpace),Fe=o.convert(re.type),Be=F(re.internalFormat,je,Fe,re.colorSpace),_t=n.get(D),Ae=n.get(re);if(Ae.__renderTarget=D,!_t.__hasExternalTextures){const Ve=Math.max(1,D.width>>xe),nt=Math.max(1,D.height>>xe);we===i.TEXTURE_3D||we===i.TEXTURE_2D_ARRAY?t.texImage3D(we,xe,Be,Ve,nt,D.depth,0,je,Fe,null):t.texImage2D(we,xe,Be,Ve,nt,0,je,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),yt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,we,Ae.__webglTexture,0,xt(D)):(we===i.TEXTURE_2D||we>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,be,we,Ae.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(z,D,re){if(i.bindRenderbuffer(i.RENDERBUFFER,z),D.depthBuffer){const be=D.depthTexture,we=be&&be.isDepthTexture?be.type:null,xe=A(D.stencilBuffer,we),je=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=xt(D);yt(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,xe,D.width,D.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,xe,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,xe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,z)}else{const be=D.textures;for(let we=0;we<be.length;we++){const xe=be[we],je=o.convert(xe.format,xe.colorSpace),Fe=o.convert(xe.type),Be=F(xe.internalFormat,je,Fe,xe.colorSpace),_t=xt(D);re&&yt(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Be,D.width,D.height):yt(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Be,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,Be,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=n.get(D.depthTexture);be.__renderTarget=D,(!be.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),Ee(D.depthTexture,0);const we=be.__webglTexture,xe=xt(D);if(D.depthTexture.format===Gr)yt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0);else if(D.depthTexture.format===Kr)yt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function Ge(z){const D=n.get(z),re=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){const be=z.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),be){const we=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,be.removeEventListener("dispose",we)};be.addEventListener("dispose",we),D.__depthDisposeCallback=we}D.__boundDepthTexture=be}if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");ke(D.__webglFramebuffer,z)}else if(re){D.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[be]),D.__webglDepthbuffer[be]===void 0)D.__webglDepthbuffer[be]=i.createRenderbuffer(),De(D.__webglDepthbuffer[be],z,!1);else{const we=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=D.__webglDepthbuffer[be];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,xe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),De(D.__webglDepthbuffer,z,!1);else{const be=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,we)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(z,D,re){const be=n.get(z);D!==void 0&&Le(be.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&Ge(z)}function Dt(z){const D=z.texture,re=n.get(z),be=n.get(D);z.addEventListener("dispose",G);const we=z.textures,xe=z.isWebGLCubeRenderTarget===!0,je=we.length>1;if(je||(be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture()),be.__version=D.version,u.memory.textures++),xe){re.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(D.mipmaps&&D.mipmaps.length>0){re.__webglFramebuffer[Fe]=[];for(let Be=0;Be<D.mipmaps.length;Be++)re.__webglFramebuffer[Fe][Be]=i.createFramebuffer()}else re.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){re.__webglFramebuffer=[];for(let Fe=0;Fe<D.mipmaps.length;Fe++)re.__webglFramebuffer[Fe]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(je)for(let Fe=0,Be=we.length;Fe<Be;Fe++){const _t=n.get(we[Fe]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),u.memory.textures++)}if(z.samples>0&&yt(z)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Fe=0;Fe<we.length;Fe++){const Be=we[Fe];re.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[Fe]);const _t=o.convert(Be.format,Be.colorSpace),Ae=o.convert(Be.type),Ve=F(Be.internalFormat,_t,Ae,Be.colorSpace,z.isXRRenderTarget===!0),nt=xt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ve,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,re.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),De(re.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),de(i.TEXTURE_CUBE_MAP,D);for(let Fe=0;Fe<6;Fe++)if(D.mipmaps&&D.mipmaps.length>0)for(let Be=0;Be<D.mipmaps.length;Be++)Le(re.__webglFramebuffer[Fe][Be],z,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Be);else Le(re.__webglFramebuffer[Fe],z,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);x(D)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Fe=0,Be=we.length;Fe<Be;Fe++){const _t=we[Fe],Ae=n.get(_t);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),de(i.TEXTURE_2D,_t),Le(re.__webglFramebuffer,z,_t,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),x(_t)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Fe=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,be.__webglTexture),de(Fe,D),D.mipmaps&&D.mipmaps.length>0)for(let Be=0;Be<D.mipmaps.length;Be++)Le(re.__webglFramebuffer[Be],z,D,i.COLOR_ATTACHMENT0,Fe,Be);else Le(re.__webglFramebuffer,z,D,i.COLOR_ATTACHMENT0,Fe,0);x(D)&&g(Fe),t.unbindTexture()}z.depthBuffer&&Ge(z)}function Tt(z){const D=z.textures;for(let re=0,be=D.length;re<be;re++){const we=D[re];if(x(we)){const xe=k(z),je=n.get(we).__webglTexture;t.bindTexture(xe,je),g(xe),t.unbindTexture()}}}const qt=[],j=[];function Yt(z){if(z.samples>0){if(yt(z)===!1){const D=z.textures,re=z.width,be=z.height;let we=i.COLOR_BUFFER_BIT;const xe=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=n.get(z),Fe=D.length>1;if(Fe)for(let Be=0;Be<D.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Be=0;Be<D.length;Be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(we|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(we|=i.STENCIL_BUFFER_BIT)),Fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Be]);const _t=n.get(D[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,re,be,0,0,re,be,we,i.NEAREST),d===!0&&(qt.length=0,j.length=0,qt.push(i.COLOR_ATTACHMENT0+Be),z.depthBuffer&&z.resolveDepthBuffer===!1&&(qt.push(xe),j.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let Be=0;Be<D.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,je.__webglColorRenderbuffer[Be]);const _t=n.get(D[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,_t,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const D=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function xt(z){return Math.min(s.maxSamples,z.samples)}function yt(z){const D=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function tt(z){const D=u.render.frame;_.get(z)!==D&&(_.set(z,D),z.update())}function Bt(z,D){const re=z.colorSpace,be=z.format,we=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||re!==Zr&&re!==Fi&&(Nt.getTransfer(re)===Gt?(be!==ni||we!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),D}function it(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=ue,this.setTexture2D=Ee,this.setTexture2DArray=he,this.setTexture3D=Me,this.setTextureCube=fe,this.rebindTextures=et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=yt}function h_(i,e){function t(n,s=Fi){let o;const u=Nt.getTransfer(s);if(n===Ai)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===uu)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===cr)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===Ms)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===ni)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===Kr)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===vu)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===ha||n===fa||n===da||n===pa)if(u===Gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===No||n===Fo||n===Oo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Uo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===ko)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Bo||n===zo)return u===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ko)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===el)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Vo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return u===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===tl||n===nl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ma)return u===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gu||n===il||n===rl||n===sl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ma)return o.COMPRESSED_RED_RGTC1_EXT;if(n===il)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class f_ extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class An extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,n),g=this._getHandJoint(p,T);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],S=_.position.distanceTo(M.position),b=.02,C=.005;p.inputState.pinching&&S>b+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=b-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Cn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qi({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends pr{constructor(e,t){super();const n=this;let s=null,o=1,u=null,c="local-floor",d=1,p=null,_=null,M=null,S=null,b=null,C=null;const T=new __,x=t.getContextAttributes();let g=null,k=null;const F=[],A=[],$=new lt;let H=null;const G=new Wn;G.viewport=new nn;const X=new Wn;X.viewport=new nn;const N=[G,X],U=new f_;let W=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let oe=F[me];return oe===void 0&&(oe=new ao,F[me]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(me){let oe=F[me];return oe===void 0&&(oe=new ao,F[me]=oe),oe.getGripSpace()},this.getHand=function(me){let oe=F[me];return oe===void 0&&(oe=new ao,F[me]=oe),oe.getHandSpace()};function ee(me){const oe=A.indexOf(me.inputSource);if(oe===-1)return;const Le=F[oe];Le!==void 0&&(Le.update(me.inputSource,me.frame,p||u),Le.dispatchEvent({type:me.type,data:me.inputSource}))}function se(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",Ee);for(let me=0;me<F.length;me++){const oe=A[me];oe!==null&&(A[me]=null,F[me].disconnect(oe))}W=null,ue=null,T.reset(),e.setRenderTarget(g),b=null,S=null,M=null,s=null,k=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize($.width,$.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){o=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){c=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(me){p=me},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return M},this.getFrame=function(){return C},this.getSession=function(){return s},this.setSession=async function(me){if(s=me,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",se),s.addEventListener("inputsourceschange",Ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize($),s.renderState.layers===void 0){const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),k=new ur(b.framebufferWidth,b.framebufferHeight,{format:ni,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,Le=null,De=null;x.depth&&(De=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?Kr:Gr,Le=x.stencil?$r:cr);const ke={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:o};M=new XRWebGLBinding(s,t),S=M.createProjectionLayer(ke),s.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),k=new ur(S.textureWidth,S.textureHeight,{format:ni,type:Ai,depthTexture:new Lu(S.textureWidth,S.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await s.requestReferenceSpace(c),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function Ee(me){for(let oe=0;oe<me.removed.length;oe++){const Le=me.removed[oe],De=A.indexOf(Le);De>=0&&(A[De]=null,F[De].disconnect(Le))}for(let oe=0;oe<me.added.length;oe++){const Le=me.added[oe];let De=A.indexOf(Le);if(De===-1){for(let Ge=0;Ge<F.length;Ge++)if(Ge>=A.length){A.push(Le),De=Ge;break}else if(A[Ge]===null){A[Ge]=Le,De=Ge;break}if(De===-1)break}const ke=F[De];ke&&ke.connect(Le)}}const he=new Z,Me=new Z;function fe(me,oe,Le){he.setFromMatrixPosition(oe.matrixWorld),Me.setFromMatrixPosition(Le.matrixWorld);const De=he.distanceTo(Me),ke=oe.projectionMatrix.elements,Ge=Le.projectionMatrix.elements,et=ke[14]/(ke[10]-1),Dt=ke[14]/(ke[10]+1),Tt=(ke[9]+1)/ke[5],qt=(ke[9]-1)/ke[5],j=(ke[8]-1)/ke[0],Yt=(Ge[8]+1)/Ge[0],xt=et*j,yt=et*Yt,tt=De/(-j+Yt),Bt=tt*-j;if(oe.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Bt),me.translateZ(tt),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),ke[10]===-1)me.projectionMatrix.copy(oe.projectionMatrix),me.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const it=et+tt,z=Dt+tt,D=xt-Bt,re=yt+(De-Bt),be=Tt*Dt/z*it,we=qt*Dt/z*it;me.projectionMatrix.makePerspective(D,re,be,we,it,z),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function ve(me,oe){oe===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(oe.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(s===null)return;let oe=me.near,Le=me.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(Le=T.depthFar)),U.near=X.near=G.near=oe,U.far=X.far=G.far=Le,(W!==U.near||ue!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,ue=U.far),G.layers.mask=me.layers.mask|2,X.layers.mask=me.layers.mask|4,U.layers.mask=G.layers.mask|X.layers.mask;const De=me.parent,ke=U.cameras;ve(U,De);for(let Ge=0;Ge<ke.length;Ge++)ve(ke[Ge],De);ke.length===2?fe(U,G,X):U.projectionMatrix.copy(G.projectionMatrix),He(me,U,De)};function He(me,oe,Le){Le===null?me.matrix.copy(oe.matrixWorld):(me.matrix.copy(Le.matrixWorld),me.matrix.invert(),me.matrix.multiply(oe.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(oe.projectionMatrix),me.projectionMatrixInverse.copy(oe.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=ol*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(S===null&&b===null))return d},this.setFoveation=function(me){d=me,S!==null&&(S.fixedFoveation=me),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=me)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(U)};let Je=null;function de(me,oe){if(_=oe.getViewerPose(p||u),C=oe,_!==null){const Le=_.views;b!==null&&(e.setRenderTargetFramebuffer(k,b.framebuffer),e.setRenderTarget(k));let De=!1;Le.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Ge=0;Ge<Le.length;Ge++){const et=Le[Ge];let Dt=null;if(b!==null)Dt=b.getViewport(et);else{const qt=M.getViewSubImage(S,et);Dt=qt.viewport,Ge===0&&(e.setRenderTargetTextures(k,qt.colorTexture,S.ignoreDepthValues?void 0:qt.depthStencilTexture),e.setRenderTarget(k))}let Tt=N[Ge];Tt===void 0&&(Tt=new Wn,Tt.layers.enable(Ge),Tt.viewport=new nn,N[Ge]=Tt),Tt.matrix.fromArray(et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ge===0&&(U.matrix.copy(Tt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(Tt)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ge=M.getDepthInformation(Le[0]);Ge&&Ge.isValid&&Ge.texture&&T.init(e,Ge,s.renderState)}}for(let Le=0;Le<F.length;Le++){const De=A[Le],ke=F[Le];De!==null&&ke!==void 0&&ke.update(De,oe,p||u)}Je&&Je(me,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),C=null}const Ze=new Pu;Ze.setAnimationLoop(de),this.setAnimationLoop=function(me){Je=me},this.dispose=function(){}}}const nr=new fi,g_=new Zt;function x_(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Au(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,k,F,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),M(x,g)):g.isMeshPhongMaterial?(o(x,g),_(x,g)):g.isMeshStandardMaterial?(o(x,g),S(x,g),g.isMeshPhysicalMaterial&&b(x,g,A)):g.isMeshMatcapMaterial?(o(x,g),C(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),T(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(u(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?d(x,g,k,F):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Pn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Pn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const k=e.get(g),F=k.envMap,A=k.envMapRotation;F&&(x.envMap.value=F,nr.copy(A),nr.x*=-1,nr.y*=-1,nr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),x.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(nr)),x.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function d(x,g,k,F){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*k,x.scale.value=F*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function M(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function b(x,g,k){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=k.texture,x.transmissionSamplerSize.value.set(k.width,k.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function C(x,g){g.matcap&&(x.matcap.value=g.matcap)}function T(x,g){const k=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(k.matrixWorld),x.nearDistance.value=k.shadow.camera.near,x.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M_(i,e,t,n){let s={},o={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(k,F){const A=F.program;n.uniformBlockBinding(k,A)}function p(k,F){let A=s[k.id];A===void 0&&(C(k),A=_(k),s[k.id]=A,k.addEventListener("dispose",x));const $=F.program;n.updateUBOMapping(k,$);const H=e.render.frame;o[k.id]!==H&&(S(k),o[k.id]=H)}function _(k){const F=M();k.__bindingPointIndex=F;const A=i.createBuffer(),$=k.__size,H=k.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,$,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,A),A}function M(){for(let k=0;k<c;k++)if(u.indexOf(k)===-1)return u.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(k){const F=s[k.id],A=k.uniforms,$=k.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let H=0,G=A.length;H<G;H++){const X=Array.isArray(A[H])?A[H]:[A[H]];for(let N=0,U=X.length;N<U;N++){const W=X[N];if(b(W,H,N,$)===!0){const ue=W.__offset,ee=Array.isArray(W.value)?W.value:[W.value];let se=0;for(let Ee=0;Ee<ee.length;Ee++){const he=ee[Ee],Me=T(he);typeof he=="number"||typeof he=="boolean"?(W.__data[0]=he,i.bufferSubData(i.UNIFORM_BUFFER,ue+se,W.__data)):he.isMatrix3?(W.__data[0]=he.elements[0],W.__data[1]=he.elements[1],W.__data[2]=he.elements[2],W.__data[3]=0,W.__data[4]=he.elements[3],W.__data[5]=he.elements[4],W.__data[6]=he.elements[5],W.__data[7]=0,W.__data[8]=he.elements[6],W.__data[9]=he.elements[7],W.__data[10]=he.elements[8],W.__data[11]=0):(he.toArray(W.__data,se),se+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,W.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function b(k,F,A,$){const H=k.value,G=F+"_"+A;if($[G]===void 0)return typeof H=="number"||typeof H=="boolean"?$[G]=H:$[G]=H.clone(),!0;{const X=$[G];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return $[G]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function C(k){const F=k.uniforms;let A=0;const $=16;for(let G=0,X=F.length;G<X;G++){const N=Array.isArray(F[G])?F[G]:[F[G]];for(let U=0,W=N.length;U<W;U++){const ue=N[U],ee=Array.isArray(ue.value)?ue.value:[ue.value];for(let se=0,Ee=ee.length;se<Ee;se++){const he=ee[se],Me=T(he),fe=A%$,ve=fe%Me.boundary,He=fe+ve;A+=ve,He!==0&&$-He<Me.storage&&(A+=$-He),ue.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=A,A+=Me.storage}}}const H=A%$;return H>0&&(A+=$-H),k.__size=A,k.__cache={},this}function T(k){const F={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(F.boundary=4,F.storage=4):k.isVector2?(F.boundary=8,F.storage=8):k.isVector3||k.isColor?(F.boundary=16,F.storage=12):k.isVector4?(F.boundary=16,F.storage=16):k.isMatrix3?(F.boundary=48,F.storage=48):k.isMatrix4?(F.boundary=64,F.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),F}function x(k){const F=k.target;F.removeEventListener("dispose",x);const A=u.indexOf(F.__bindingPointIndex);u.splice(A,1),i.deleteBuffer(s[F.id]),delete s[F.id],delete o[F.id]}function g(){for(const k in s)i.deleteBuffer(s[k]);u=[],s={},o={}}return{bind:d,update:p,dispose:g}}class S_{constructor(e={}){const{canvas:t=cf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=u;const C=new Uint32Array(4),T=new Int32Array(4);let x=null,g=null;const k=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Gi,this.toneMappingExposure=1;const A=this;let $=!1,H=0,G=0,X=null,N=-1,U=null;const W=new nn,ue=new nn;let ee=null;const se=new wt(0);let Ee=0,he=t.width,Me=t.height,fe=1,ve=null,He=null;const Je=new nn(0,0,he,Me),de=new nn(0,0,he,Me);let Ze=!1;const me=new Sl;let oe=!1,Le=!1;const De=new Zt,ke=new Zt,Ge=new Z,et=new nn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function qt(){return X===null?fe:1}let j=n;function Yt(P,te){return t.getContext(P,te)}try{const P={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",v,!1),t.addEventListener("webglcontextcreationerror",Se,!1),j===null){const te="webgl2";if(j=Yt(te,P),j===null)throw Yt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let xt,yt,tt,Bt,it,z,D,re,be,we,xe,je,Fe,Be,_t,Ae,Ve,nt,Ie,We,rt,ut,Ct,Q;function Ue(){xt=new Tm(j),xt.init(),ut=new h_(j,xt),yt=new Mm(j,xt,e,ut),tt=new l_(j,xt),yt.reverseDepthBuffer&&S&&tt.buffers.depth.setReversed(!0),Bt=new Rm(j),it=new Y0,z=new u_(j,xt,tt,it,yt,ut,Bt),D=new ym(A),re=new wm(A),be=new Ff(j),Ct=new gm(j,be),we=new Am(j,be,Bt,Ct),xe=new Lm(j,we,be,Bt),Ie=new Pm(j,yt,z),Ae=new Sm(it),je=new q0(A,D,re,xt,yt,Ct,Ae),Fe=new x_(A,it),Be=new K0,_t=new t_(xt),nt=new vm(A,D,re,tt,xe,b,d),Ve=new a_(A,xe,yt),Q=new M_(j,Bt,yt,tt),We=new xm(j,xt,Bt),rt=new Cm(j,xt,Bt),Bt.programs=je.programs,A.capabilities=yt,A.extensions=xt,A.properties=it,A.renderLists=Be,A.shadowMap=Ve,A.state=tt,A.info=Bt}Ue();const pe=new v_(A,j);this.xr=pe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=xt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=xt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(P){P!==void 0&&(fe=P,this.setSize(he,Me,!1))},this.getSize=function(P){return P.set(he,Me)},this.setSize=function(P,te,le=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=P,Me=te,t.width=Math.floor(P*fe),t.height=Math.floor(te*fe),le===!0&&(t.style.width=P+"px",t.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(he*fe,Me*fe).floor()},this.setDrawingBufferSize=function(P,te,le){he=P,Me=te,fe=le,t.width=Math.floor(P*le),t.height=Math.floor(te*le),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(W)},this.getViewport=function(P){return P.copy(Je)},this.setViewport=function(P,te,le,ae){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,te,le,ae),tt.viewport(W.copy(Je).multiplyScalar(fe).round())},this.getScissor=function(P){return P.copy(de)},this.setScissor=function(P,te,le,ae){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,te,le,ae),tt.scissor(ue.copy(de).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(P){tt.setScissorTest(Ze=P)},this.setOpaqueSort=function(P){ve=P},this.setTransparentSort=function(P){He=P},this.getClearColor=function(P){return P.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(P=!0,te=!0,le=!0){let ae=0;if(P){let ne=!1;if(X!==null){const Re=X.texture.format;ne=Re===xl||Re===gl||Re===vl}if(ne){const Re=X.texture.type,Ne=Re===Ai||Re===cr||Re===gs||Re===$r||Re===ml||Re===_l,Ye=nt.getClearColor(),$e=nt.getClearAlpha(),ct=Ye.r,pt=Ye.g,Oe=Ye.b;Ne?(C[0]=ct,C[1]=pt,C[2]=Oe,C[3]=$e,j.clearBufferuiv(j.COLOR,0,C)):(T[0]=ct,T[1]=pt,T[2]=Oe,T[3]=$e,j.clearBufferiv(j.COLOR,0,T))}else ae|=j.COLOR_BUFFER_BIT}te&&(ae|=j.DEPTH_BUFFER_BIT),le&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",v,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Be.dispose(),_t.dispose(),it.dispose(),D.dispose(),re.dispose(),xe.dispose(),Ct.dispose(),Q.dispose(),je.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",at),pe.removeEventListener("sessionend",dt),bt.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function v(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const P=Bt.autoReset,te=Ve.enabled,le=Ve.autoUpdate,ae=Ve.needsUpdate,ne=Ve.type;Ue(),Bt.autoReset=P,Ve.enabled=te,Ve.autoUpdate=le,Ve.needsUpdate=ae,Ve.type=ne}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){const te=P.target;te.removeEventListener("dispose",ft),It(te)}function It(P){Ut(P),it.remove(P)}function Ut(P){const te=it.get(P).programs;te!==void 0&&(te.forEach(function(le){je.releaseProgram(le)}),P.isShaderMaterial&&je.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,le,ae,ne,Re){te===null&&(te=Dt);const Ne=ne.isMesh&&ne.matrixWorld.determinant()<0,Ye=$i(P,te,le,ae,ne);tt.setMaterial(ae,Ne);let $e=le.index,ct=1;if(ae.wireframe===!0){if($e=we.getWireframeAttribute(le),$e===void 0)return;ct=2}const pt=le.drawRange,Oe=le.attributes.position;let mt=pt.start*ct,Vt=(pt.start+pt.count)*ct;Re!==null&&(mt=Math.max(mt,Re.start*ct),Vt=Math.min(Vt,(Re.start+Re.count)*ct)),$e!==null?(mt=Math.max(mt,0),Vt=Math.min(Vt,$e.count)):Oe!=null&&(mt=Math.max(mt,0),Vt=Math.min(Vt,Oe.count));const $t=Vt-mt;if($t<0||$t===1/0)return;Ct.setup(ne,ae,Ye,le,$e);let gn,Ot=We;if($e!==null&&(gn=be.get($e),Ot=rt,Ot.setIndex(gn)),ne.isMesh)ae.wireframe===!0?(tt.setLineWidth(ae.wireframeLinewidth*qt()),Ot.setMode(j.LINES)):Ot.setMode(j.TRIANGLES);else if(ne.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),tt.setLineWidth(Qe*qt()),ne.isLineSegments?Ot.setMode(j.LINES):ne.isLineLoop?Ot.setMode(j.LINE_LOOP):Ot.setMode(j.LINE_STRIP)}else ne.isPoints?Ot.setMode(j.POINTS):ne.isSprite&&Ot.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Ot.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Qe=ne._multiDrawStarts,zn=ne._multiDrawCounts,r=ne._multiDrawCount,a=$e?be.get($e).bytesPerElement:1,l=it.get(ae).currentProgram.getUniforms();for(let h=0;h<r;h++)l.setValue(j,"_gl_DrawID",h),Ot.render(Qe[h]/a,zn[h])}else if(ne.isInstancedMesh)Ot.renderInstances(mt,$t,ne.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,zn=Math.min(le.instanceCount,Qe);Ot.renderInstances(mt,$t,zn)}else Ot.render(mt,$t)};function Lt(P,te,le){P.transparent===!0&&P.side===ti&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,Bn(P,te,le),P.side=Xi,P.needsUpdate=!0,Bn(P,te,le),P.side=ti):Bn(P,te,le)}this.compile=function(P,te,le=null){le===null&&(le=P),g=_t.get(le),g.init(te),F.push(g),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),P!==le&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights();const ae=new Set;return P.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Re=ne.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ye=Re[Ne];Lt(Ye,le,ne),ae.add(Ye)}else Lt(Re,le,ne),ae.add(Re)}),F.pop(),g=null,ae},this.compileAsync=function(P,te,le=null){const ae=this.compile(P,te,le);return new Promise(ne=>{function Re(){if(ae.forEach(function(Ne){it.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){ne(P);return}setTimeout(Re,10)}xt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Y=null;function qe(P){Y&&Y(P)}function at(){bt.stop()}function dt(){bt.start()}const bt=new Pu;bt.setAnimationLoop(qe),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(P){Y=P,pe.setAnimationLoop(P),P===null?bt.stop():bt.start()},pe.addEventListener("sessionstart",at),pe.addEventListener("sessionend",dt),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(te),te=pe.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,te,X),g=_t.get(P,F.length),g.init(te),F.push(g),ke.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),me.setFromProjectionMatrix(ke),Le=this.localClippingEnabled,oe=Ae.init(this.clippingPlanes,Le),x=Be.get(P,k.length),x.init(),k.push(x),pe.enabled===!0&&pe.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Fn(Re,te,-1/0,A.sortObjects)}Fn(P,te,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ve,He),Tt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Tt&&nt.addToRenderList(x,P),this.info.render.frame++,oe===!0&&Ae.beginShadows();const le=g.state.shadowsArray;Ve.render(le,P,te),oe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=x.opaque,ne=x.transmissive;if(g.setupLights(),te.isArrayCamera){const Re=te.cameras;if(ne.length>0)for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){const $e=Re[Ne];vt(ae,ne,P,$e)}Tt&&nt.render(P);for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++){const $e=Re[Ne];On(x,P,$e,$e.viewport)}}else ne.length>0&&vt(ae,ne,P,te),Tt&&nt.render(P),On(x,P,te);X!==null&&(z.updateMultisampleRenderTarget(X),z.updateRenderTargetMipmap(X)),P.isScene===!0&&P.onAfterRender(A,P,te),Ct.resetDefaultState(),N=-1,U=null,F.pop(),F.length>0?(g=F[F.length-1],oe===!0&&Ae.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,k.pop(),k.length>0?x=k[k.length-1]:x=null};function Fn(P,te,le,ae){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||me.intersectsSprite(P)){ae&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ke);const Ne=xe.update(P),Ye=P.material;Ye.visible&&x.push(P,Ne,Ye,le,et.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||me.intersectsObject(P))){const Ne=xe.update(P),Ye=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),et.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),et.copy(Ne.boundingSphere.center)),et.applyMatrix4(P.matrixWorld).applyMatrix4(ke)),Array.isArray(Ye)){const $e=Ne.groups;for(let ct=0,pt=$e.length;ct<pt;ct++){const Oe=$e[ct],mt=Ye[Oe.materialIndex];mt&&mt.visible&&x.push(P,Ne,mt,le,et.z,Oe)}}else Ye.visible&&x.push(P,Ne,Ye,le,et.z,null)}}const Re=P.children;for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++)Fn(Re[Ne],te,le,ae)}function On(P,te,le,ae){const ne=P.opaque,Re=P.transmissive,Ne=P.transparent;g.setupLightsView(le),oe===!0&&Ae.setGlobalState(A.clippingPlanes,le),ae&&tt.viewport(W.copy(ae)),ne.length>0&&Ln(ne,te,le),Re.length>0&&Ln(Re,te,le),Ne.length>0&&Ln(Ne,te,le),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function vt(P,te,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new ur(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Ms:Ai,minFilter:lr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Re=g.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||W;Re.setSize(Ne.z,Ne.w);const Ye=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(se),Ee=A.getClearAlpha(),Ee<1&&A.setClearColor(16777215,.5),A.clear(),Tt&&nt.render(le);const $e=A.toneMapping;A.toneMapping=Gi;const ct=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),oe===!0&&Ae.setGlobalState(A.clippingPlanes,ae),Ln(P,le,ae),z.updateMultisampleRenderTarget(Re),z.updateRenderTargetMipmap(Re),xt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Oe=0,mt=te.length;Oe<mt;Oe++){const Vt=te[Oe],$t=Vt.object,gn=Vt.geometry,Ot=Vt.material,Qe=Vt.group;if(Ot.side===ti&&$t.layers.test(ae.layers)){const zn=Ot.side;Ot.side=Pn,Ot.needsUpdate=!0,ri($t,le,ae,gn,Ot,Qe),Ot.side=zn,Ot.needsUpdate=!0,pt=!0}}pt===!0&&(z.updateMultisampleRenderTarget(Re),z.updateRenderTargetMipmap(Re))}A.setRenderTarget(Ye),A.setClearColor(se,Ee),ct!==void 0&&(ae.viewport=ct),A.toneMapping=$e}function Ln(P,te,le){const ae=te.isScene===!0?te.overrideMaterial:null;for(let ne=0,Re=P.length;ne<Re;ne++){const Ne=P[ne],Ye=Ne.object,$e=Ne.geometry,ct=ae===null?Ne.material:ae,pt=Ne.group;Ye.layers.test(le.layers)&&ri(Ye,te,le,$e,ct,pt)}}function ri(P,te,le,ae,ne,Re){P.onBeforeRender(A,te,le,ae,ne,Re),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(A,te,le,ae,P,Re),ne.transparent===!0&&ne.side===ti&&ne.forceSinglePass===!1?(ne.side=Pn,ne.needsUpdate=!0,A.renderBufferDirect(le,te,ae,ne,P,Re),ne.side=Xi,ne.needsUpdate=!0,A.renderBufferDirect(le,te,ae,ne,P,Re),ne.side=ti):A.renderBufferDirect(le,te,ae,ne,P,Re),P.onAfterRender(A,te,le,ae,ne,Re)}function Bn(P,te,le){te.isScene!==!0&&(te=Dt);const ae=it.get(P),ne=g.state.lights,Re=g.state.shadowsArray,Ne=ne.state.version,Ye=je.getParameters(P,ne.state,Re,te,le),$e=je.getProgramCacheKey(Ye);let ct=ae.programs;ae.environment=P.isMeshStandardMaterial?te.environment:null,ae.fog=te.fog,ae.envMap=(P.isMeshStandardMaterial?re:D).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?te.environmentRotation:P.envMapRotation,ct===void 0&&(P.addEventListener("dispose",ft),ct=new Map,ae.programs=ct);let pt=ct.get($e);if(pt!==void 0){if(ae.currentProgram===pt&&ae.lightsStateVersion===Ne)return Kn(P,Ye),pt}else Ye.uniforms=je.getUniforms(P),P.onBeforeCompile(Ye,A),pt=je.acquireProgram(Ye,$e),ct.set($e,pt),ae.uniforms=Ye.uniforms;const Oe=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Oe.clippingPlanes=Ae.uniform),Kn(P,Ye),ae.needsLights=pi(P),ae.lightsStateVersion=Ne,ae.needsLights&&(Oe.ambientLightColor.value=ne.state.ambient,Oe.lightProbe.value=ne.state.probe,Oe.directionalLights.value=ne.state.directional,Oe.directionalLightShadows.value=ne.state.directionalShadow,Oe.spotLights.value=ne.state.spot,Oe.spotLightShadows.value=ne.state.spotShadow,Oe.rectAreaLights.value=ne.state.rectArea,Oe.ltc_1.value=ne.state.rectAreaLTC1,Oe.ltc_2.value=ne.state.rectAreaLTC2,Oe.pointLights.value=ne.state.point,Oe.pointLightShadows.value=ne.state.pointShadow,Oe.hemisphereLights.value=ne.state.hemi,Oe.directionalShadowMap.value=ne.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Oe.spotShadowMap.value=ne.state.spotShadowMap,Oe.spotLightMatrix.value=ne.state.spotLightMatrix,Oe.spotLightMap.value=ne.state.spotLightMap,Oe.pointShadowMap.value=ne.state.pointShadowMap,Oe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.currentProgram=pt,ae.uniformsList=null,pt}function Rt(P){if(P.uniformsList===null){const te=P.currentProgram.getUniforms();P.uniformsList=_a.seqWithValue(te.seq,P.uniforms)}return P.uniformsList}function Kn(P,te){const le=it.get(P);le.outputColorSpace=te.outputColorSpace,le.batching=te.batching,le.batchingColor=te.batchingColor,le.instancing=te.instancing,le.instancingColor=te.instancingColor,le.instancingMorph=te.instancingMorph,le.skinning=te.skinning,le.morphTargets=te.morphTargets,le.morphNormals=te.morphNormals,le.morphColors=te.morphColors,le.morphTargetsCount=te.morphTargetsCount,le.numClippingPlanes=te.numClippingPlanes,le.numIntersection=te.numClipIntersection,le.vertexAlphas=te.vertexAlphas,le.vertexTangents=te.vertexTangents,le.toneMapping=te.toneMapping}function $i(P,te,le,ae,ne){te.isScene!==!0&&(te=Dt),z.resetTextureUnits();const Re=te.fog,Ne=ae.isMeshStandardMaterial?te.environment:null,Ye=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Zr,$e=(ae.isMeshStandardMaterial?re:D).get(ae.envMap||Ne),ct=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pt=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Oe=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Vt=!!le.morphAttributes.color;let $t=Gi;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&($t=A.toneMapping);const gn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ot=gn!==void 0?gn.length:0,Qe=it.get(ae),zn=g.state.lights;if(oe===!0&&(Le===!0||P!==U)){const w=P===U&&ae.id===N;Ae.setState(ae,P,w)}let r=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==zn.state.version||Qe.outputColorSpace!==Ye||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isBatchedMesh&&Qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==$e||ae.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ae.numPlanes||Qe.numIntersection!==Ae.numIntersection)||Qe.vertexAlphas!==ct||Qe.vertexTangents!==pt||Qe.morphTargets!==Oe||Qe.morphNormals!==mt||Qe.morphColors!==Vt||Qe.toneMapping!==$t||Qe.morphTargetsCount!==Ot)&&(r=!0):(r=!0,Qe.__version=ae.version);let a=Qe.currentProgram;r===!0&&(a=Bn(ae,te,ne));let l=!1,h=!1,f=!1;const m=a.getUniforms(),y=Qe.uniforms;if(tt.useProgram(a.program)&&(l=!0,h=!0,f=!0),ae.id!==N&&(N=ae.id,h=!0),l||U!==P){tt.buffers.depth.getReversed()?(De.copy(P.projectionMatrix),hf(De),ff(De),m.setValue(j,"projectionMatrix",De)):m.setValue(j,"projectionMatrix",P.projectionMatrix),m.setValue(j,"viewMatrix",P.matrixWorldInverse);const L=m.map.cameraPosition;L!==void 0&&L.setValue(j,Ge.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&m.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&m.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),U!==P&&(U=P,h=!0,f=!0)}if(ne.isSkinnedMesh){m.setOptional(j,ne,"bindMatrix"),m.setOptional(j,ne,"bindMatrixInverse");const w=ne.skeleton;w&&(w.boneTexture===null&&w.computeBoneTexture(),m.setValue(j,"boneTexture",w.boneTexture,z))}ne.isBatchedMesh&&(m.setOptional(j,ne,"batchingTexture"),m.setValue(j,"batchingTexture",ne._matricesTexture,z),m.setOptional(j,ne,"batchingIdTexture"),m.setValue(j,"batchingIdTexture",ne._indirectTexture,z),m.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&m.setValue(j,"batchingColorTexture",ne._colorsTexture,z));const E=le.morphAttributes;if((E.position!==void 0||E.normal!==void 0||E.color!==void 0)&&Ie.update(ne,le,a),(h||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,m.setValue(j,"receiveShadow",ne.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(y.envMap.value=$e,y.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&te.environment!==null&&(y.envMapIntensity.value=te.environmentIntensity),h&&(m.setValue(j,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&Ki(y,f),Re&&ae.fog===!0&&Fe.refreshFogUniforms(y,Re),Fe.refreshMaterialUniforms(y,ae,fe,Me,g.state.transmissionRenderTarget[P.id]),_a.upload(j,Rt(Qe),y,z)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(_a.upload(j,Rt(Qe),y,z),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&m.setValue(j,"center",ne.center),m.setValue(j,"modelViewMatrix",ne.modelViewMatrix),m.setValue(j,"normalMatrix",ne.normalMatrix),m.setValue(j,"modelMatrix",ne.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const w=ae.uniformsGroups;for(let L=0,R=w.length;L<R;L++){const I=w[L];Q.update(I,a),Q.bind(I,a)}}return a}function Ki(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function pi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,te,le){it.get(P.texture).__webglTexture=te,it.get(P.depthTexture).__webglTexture=le;const ae=it.get(P);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=le===void 0,ae.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,te){const le=it.get(P);le.__webglFramebuffer=te,le.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,le=0){X=P,H=te,G=le;let ae=!0,ne=null,Re=!1,Ne=!1;if(P){const $e=it.get(P);if($e.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(j.FRAMEBUFFER,null),ae=!1;else if($e.__webglFramebuffer===void 0)z.setupRenderTarget(P);else if($e.__hasExternalTextures)z.rebindTextures(P,it.get(P.texture).__webglTexture,it.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Oe=P.depthTexture;if($e.__boundDepthTexture!==Oe){if(Oe!==null&&it.has(Oe)&&(P.width!==Oe.image.width||P.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(P)}}const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ne=!0);const pt=it.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pt[te])?ne=pt[te][le]:ne=pt[te],Re=!0):P.samples>0&&z.useMultisampledRTT(P)===!1?ne=it.get(P).__webglMultisampledFramebuffer:Array.isArray(pt)?ne=pt[le]:ne=pt,W.copy(P.viewport),ue.copy(P.scissor),ee=P.scissorTest}else W.copy(Je).multiplyScalar(fe).floor(),ue.copy(de).multiplyScalar(fe).floor(),ee=Ze;if(tt.bindFramebuffer(j.FRAMEBUFFER,ne)&&ae&&tt.drawBuffers(P,ne),tt.viewport(W),tt.scissor(ue),tt.setScissorTest(ee),Re){const $e=it.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+te,$e.__webglTexture,le)}else if(Ne){const $e=it.get(P.texture),ct=te||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,$e.__webglTexture,le||0,ct)}N=-1},this.readRenderTargetPixels=function(P,te,le,ae,ne,Re,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye){tt.bindFramebuffer(j.FRAMEBUFFER,Ye);try{const $e=P.texture,ct=$e.format,pt=$e.type;if(!yt.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-ae&&le>=0&&le<=P.height-ne&&j.readPixels(te,le,ae,ne,ut.convert(ct),ut.convert(pt),Re)}finally{const $e=X!==null?it.get(X).__webglFramebuffer:null;tt.bindFramebuffer(j.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(P,te,le,ae,ne,Re,Ne){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye){const $e=P.texture,ct=$e.format,pt=$e.type;if(!yt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=P.width-ae&&le>=0&&le<=P.height-ne){tt.bindFramebuffer(j.FRAMEBUFFER,Ye);const Oe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Oe),j.bufferData(j.PIXEL_PACK_BUFFER,Re.byteLength,j.STREAM_READ),j.readPixels(te,le,ae,ne,ut.convert(ct),ut.convert(pt),0);const mt=X!==null?it.get(X).__webglFramebuffer:null;tt.bindFramebuffer(j.FRAMEBUFFER,mt);const Vt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await uf(j,Vt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Oe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Re),j.deleteBuffer(Oe),j.deleteSync(Vt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,te=null,le=0){P.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1]);const ae=Math.pow(2,-le),ne=Math.floor(P.image.width*ae),Re=Math.floor(P.image.height*ae),Ne=te!==null?te.x:0,Ye=te!==null?te.y:0;z.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Ne,Ye,ne,Re),tt.unbindTexture()},this.copyTextureToTexture=function(P,te,le=null,ae=null,ne=0){P.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,P=arguments[1],te=arguments[2],ne=arguments[3]||0,le=null);let Re,Ne,Ye,$e,ct,pt,Oe,mt,Vt;const $t=P.isCompressedTexture?P.mipmaps[ne]:P.image;le!==null?(Re=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,$e=le.min.x,ct=le.min.y,pt=le.isBox3?le.min.z:0):(Re=$t.width,Ne=$t.height,Ye=$t.depth||1,$e=0,ct=0,pt=0),ae!==null?(Oe=ae.x,mt=ae.y,Vt=ae.z):(Oe=0,mt=0,Vt=0);const gn=ut.convert(te.format),Ot=ut.convert(te.type);let Qe;te.isData3DTexture?(z.setTexture3D(te,0),Qe=j.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(z.setTexture2DArray(te,0),Qe=j.TEXTURE_2D_ARRAY):(z.setTexture2D(te,0),Qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,te.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,te.unpackAlignment);const zn=j.getParameter(j.UNPACK_ROW_LENGTH),r=j.getParameter(j.UNPACK_IMAGE_HEIGHT),a=j.getParameter(j.UNPACK_SKIP_PIXELS),l=j.getParameter(j.UNPACK_SKIP_ROWS),h=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,$t.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$t.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,$e),j.pixelStorei(j.UNPACK_SKIP_ROWS,ct),j.pixelStorei(j.UNPACK_SKIP_IMAGES,pt);const f=P.isDataArrayTexture||P.isData3DTexture,m=te.isDataArrayTexture||te.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const y=it.get(P),E=it.get(te),w=it.get(y.__renderTarget),L=it.get(E.__renderTarget);tt.bindFramebuffer(j.READ_FRAMEBUFFER,w.__webglFramebuffer),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let R=0;R<Ye;R++)f&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,it.get(P).__webglTexture,ne,pt+R),P.isDepthTexture?(m&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,it.get(te).__webglTexture,ne,Vt+R),j.blitFramebuffer($e,ct,Re,Ne,Oe,mt,Re,Ne,j.DEPTH_BUFFER_BIT,j.NEAREST)):m?j.copyTexSubImage3D(Qe,ne,Oe,mt,Vt+R,$e,ct,Re,Ne):j.copyTexSubImage2D(Qe,ne,Oe,mt,Vt+R,$e,ct,Re,Ne);tt.bindFramebuffer(j.READ_FRAMEBUFFER,null),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else m?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(Qe,ne,Oe,mt,Vt,Re,Ne,Ye,gn,Ot,$t.data):te.isCompressedArrayTexture?j.compressedTexSubImage3D(Qe,ne,Oe,mt,Vt,Re,Ne,Ye,gn,$t.data):j.texSubImage3D(Qe,ne,Oe,mt,Vt,Re,Ne,Ye,gn,Ot,$t):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ne,Oe,mt,Re,Ne,gn,Ot,$t.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ne,Oe,mt,$t.width,$t.height,gn,$t.data):j.texSubImage2D(j.TEXTURE_2D,ne,Oe,mt,Re,Ne,gn,Ot,$t);j.pixelStorei(j.UNPACK_ROW_LENGTH,zn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,r),j.pixelStorei(j.UNPACK_SKIP_PIXELS,a),j.pixelStorei(j.UNPACK_SKIP_ROWS,l),j.pixelStorei(j.UNPACK_SKIP_IMAGES,h),ne===0&&te.generateMipmaps&&j.generateMipmap(Qe),tt.unbindTexture()},this.copyTextureToTexture3D=function(P,te,le=null,ae=null,ne=0){return P.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ae=arguments[1]||null,P=arguments[2],te=arguments[3],ne=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,te,le,ae,ne)},this.initRenderTarget=function(P){it.get(P).__webglFramebuffer===void 0&&z.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?z.setTextureCube(P,0):P.isData3DTexture?z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?z.setTexture2DArray(P,0):z.setTexture2D(P,0),tt.unbindTexture()},this.resetState=function(){H=0,G=0,X=null,tt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}class bl extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class y_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new Z;class Sa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),o=Wt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fu extends Yi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rr;const cs=new Z,Pr=new Z,Lr=new Z,Dr=new lt,us=new lt,Ou=new Zt,Zs=new Z,hs=new Z,Js=new Z,Dc=new lt,oo=new lt,Ic=new lt;class b_ extends on{constructor(e=new Fu){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new y_(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Sa(n,3,0,!1)),Rr.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new lt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Lr.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const u=this.center;Qs(Zs.set(-.5,-.5,0),Lr,u,Pr,s,o),Qs(hs.set(.5,-.5,0),Lr,u,Pr,s,o),Qs(Js.set(.5,.5,0),Lr,u,Pr,s,o),Dc.set(0,0),oo.set(1,0),Ic.set(1,1);let c=e.ray.intersectTriangle(Zs,hs,Js,!1,cs);if(c===null&&(Qs(hs.set(-.5,.5,0),Lr,u,Pr,s,o),oo.set(0,1),c=e.ray.intersectTriangle(Zs,Js,hs,!1,cs),c===null))return;const d=e.ray.origin.distanceTo(cs);d<e.near||d>e.far||t.push({distance:d,point:cs.clone(),uv:Nn.getInterpolation(cs,Zs,hs,Js,Dc,oo,Ic,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qs(i,e,t,n,s,o){Dr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(us.x=o*Dr.x-s*Dr.y,us.y=s*Dr.x+o*Dr.y):us.copy(Dr),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(Ou)}class Yn extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new Z,ba=new Z,Uc=new Zt,fs=new ys,ea=new Ss,lo=new Z,Nc=new Z;class di extends on{constructor(e=new jt,t=new Yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)ya.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ya.distanceTo(ba);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=o,e.ray.intersectsSphere(ea)===!1)return;Uc.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Uc);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=this.isLineSegments?2:1,_=n.index,S=n.attributes.position;if(_!==null){const b=Math.max(0,u.start),C=Math.min(_.count,u.start+u.count);for(let T=b,x=C-1;T<x;T+=p){const g=_.getX(T),k=_.getX(T+1),F=ta(this,e,fs,d,g,k);F&&t.push(F)}if(this.isLineLoop){const T=_.getX(C-1),x=_.getX(b),g=ta(this,e,fs,d,T,x);g&&t.push(g)}}else{const b=Math.max(0,u.start),C=Math.min(S.count,u.start+u.count);for(let T=b,x=C-1;T<x;T+=p){const g=ta(this,e,fs,d,T,T+1);g&&t.push(g)}if(this.isLineLoop){const T=ta(this,e,fs,d,C-1,b);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function ta(i,e,t,n,s,o){const u=i.geometry.attributes.position;if(ya.fromBufferAttribute(u,s),ba.fromBufferAttribute(u,o),t.distanceSqToSegment(ya,ba,lo,Nc)>n)return;lo.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(lo);if(!(d<e.near||d>e.far))return{distance:d,point:Nc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Fc=new Z,Oc=new Z;class Ra extends di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Fc.fromBufferAttribute(t,s),Oc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fc.distanceTo(Oc);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bu extends Yi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new Zt,cl=new ys,na=new Ss,ia=new Z;class E_ extends on{constructor(e=new jt,t=new Bu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=o,e.ray.intersectsSphere(na)===!1)return;Bc.copy(s).invert(),cl.copy(e.ray).applyMatrix4(Bc);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=n.index,M=n.attributes.position;if(p!==null){const S=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let C=S,T=b;C<T;C++){const x=p.getX(C);ia.fromBufferAttribute(M,x),zc(ia,x,d,s,e,t,this)}}else{const S=Math.max(0,u.start),b=Math.min(M.count,u.start+u.count);for(let C=S,T=b;C<T;C++)ia.fromBufferAttribute(M,C),zc(ia,C,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function zc(i,e,t,n,s,o,u){const c=cl.distanceSqToPoint(i);if(c<t){const d=new Z;cl.closestPointToPoint(i,d),d.applyMatrix4(n);const p=s.ray.origin.distanceTo(d);if(p<s.near||p>s.far)return;o.push({distance:p,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class zu extends Cn{constructor(e,t,n,s,o,u,c,d,p){super(e,t,n,s,o,u,c,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ra=new Z,sa=new Z,co=new Z,aa=new Nn;class w_ extends jt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(_s*t),u=e.getIndex(),c=e.getAttribute("position"),d=u?u.count:c.count,p=[0,0,0],_=["a","b","c"],M=new Array(3),S={},b=[];for(let C=0;C<d;C+=3){u?(p[0]=u.getX(C),p[1]=u.getX(C+1),p[2]=u.getX(C+2)):(p[0]=C,p[1]=C+1,p[2]=C+2);const{a:T,b:x,c:g}=aa;if(T.fromBufferAttribute(c,p[0]),x.fromBufferAttribute(c,p[1]),g.fromBufferAttribute(c,p[2]),aa.getNormal(co),M[0]=`${Math.round(T.x*s)},${Math.round(T.y*s)},${Math.round(T.z*s)}`,M[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,M[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let k=0;k<3;k++){const F=(k+1)%3,A=M[k],$=M[F],H=aa[_[k]],G=aa[_[F]],X=`${A}_${$}`,N=`${$}_${A}`;N in S&&S[N]?(co.dot(S[N].normal)<=o&&(b.push(H.x,H.y,H.z),b.push(G.x,G.y,G.z)),S[N]=null):X in S||(S[X]={index0:p[k],index1:p[F],normal:co.clone()})}}for(const C in S)if(S[C]){const{index0:T,index1:x}=S[C];ra.fromBufferAttribute(c,T),sa.fromBufferAttribute(c,x),b.push(ra.x,ra.y,ra.z),b.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new _n(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class es extends jt{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(u+c,Math.PI);let p=0;const _=[],M=new Z,S=new Z,b=[],C=[],T=[],x=[];for(let g=0;g<=n;g++){const k=[],F=g/n;let A=0;g===0&&u===0?A=.5/t:g===n&&d===Math.PI&&(A=-.5/t);for(let $=0;$<=t;$++){const H=$/t;M.x=-e*Math.cos(s+H*o)*Math.sin(u+F*c),M.y=e*Math.cos(u+F*c),M.z=e*Math.sin(s+H*o)*Math.sin(u+F*c),C.push(M.x,M.y,M.z),S.copy(M).normalize(),T.push(S.x,S.y,S.z),x.push(H+A,1-F),k.push(p++)}_.push(k)}for(let g=0;g<n;g++)for(let k=0;k<t;k++){const F=_[g][k+1],A=_[g][k],$=_[g+1][k],H=_[g+1][k+1];(g!==0||u>0)&&b.push(F,A,H),(g!==n-1||d<Math.PI)&&b.push(A,$,H)}this.setIndex(b),this.setAttribute("position",new _n(C,3)),this.setAttribute("normal",new _n(T,3)),this.setAttribute("uv",new _n(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class T_ extends jt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new Z,o=new Z;if(e.index!==null){const u=e.attributes.position,c=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:c.count,materialIndex:0}]);for(let p=0,_=d.length;p<_;++p){const M=d[p],S=M.start,b=M.count;for(let C=S,T=S+b;C<T;C+=3)for(let x=0;x<3;x++){const g=c.getX(C+x),k=c.getX(C+(x+1)%3);s.fromBufferAttribute(u,g),o.fromBufferAttribute(u,k),kc(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const u=e.attributes.position;for(let c=0,d=u.count/3;c<d;c++)for(let p=0;p<3;p++){const _=3*c+p,M=3*c+(p+1)%3;s.fromBufferAttribute(u,_),o.fromBufferAttribute(u,M),kc(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new _n(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function kc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class Es extends Yi{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ku extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class A_ extends ku{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uo=new Zt,Vc=new Z,Hc=new Z;class C_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class R_ extends C_{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P_ extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new R_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gc=new Zt;class Wc{constructor(e,t,n=0,s=1/0){this.ray=new ys(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(Xc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)ul(e[s],this,n,t);return n.sort(Xc),n}}function Xc(i,e){return i.distance-e.distance}function ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let u=0,c=o.length;u<c;u++)ul(o[u],e,t,!0)}}class qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class L_ extends Ra{constructor(e=10,t=10,n=4473924,s=8947848){n=new wt(n),s=new wt(s);const o=t/2,u=e/t,c=e/2,d=[],p=[];for(let S=0,b=0,C=-c;S<=t;S++,C+=u){d.push(-c,0,C,c,0,C),d.push(C,0,-c,C,0,c);const T=S===o?n:s;T.toArray(p,b),b+=3,T.toArray(p,b),b+=3,T.toArray(p,b),b+=3,T.toArray(p,b),b+=3}const _=new jt;_.setAttribute("position",new _n(d,3)),_.setAttribute("color",new _n(p,3));const M=new Yn({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vu extends Ra{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new jt;s.setAttribute("position",new _n(t,3)),s.setAttribute("color",new _n(n,3));const o=new Yn({vertexColors:!0,toneMapped:!1});super(s,o),this.type="AxesHelper"}setColors(e,t,n){const s=new wt,o=this.geometry.attributes.color.array;return s.set(e),s.toArray(o,0),s.toArray(o,3),s.set(t),s.toArray(o,6),s.toArray(o,9),s.set(n),s.toArray(o,12),s.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class D_ extends pr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const Yc={type:"change"},El={type:"start"},Hu={type:"end"},oa=new ys,$c=new Ni,I_=Math.cos(70*lf.DEG2RAD),ln=new Z,Rn=2*Math.PI,Xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ho=1e-6;class Gu extends D_{constructor(e,t=null){super(e,t),this.state=Xt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new hr,this._lastTargetPosition=new Z,this._quat=new hr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new Z,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new Z,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N_.bind(this),this._onPointerDown=U_.bind(this),this._onPointerUp=F_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=z_.bind(this),this._onKeyDown=k_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=O_.bind(this),this._onMouseMove=B_.bind(this),this._interceptControlDown=W_.bind(this),this._interceptControlUp=X_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yc),this.update(),this.state=Xt.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=ln.length();u=this._clampDistance(c*this._scale);const d=c-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(c),this.object.updateMatrixWorld(),u=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<I_?this.object.lookAt(this.target):($c.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane($c,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ho||this._lastTargetPosition.distanceToSquared(this.target)>ho?(this.dispatchEvent(Yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ln.copy(s).sub(this.target);let o=ln.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,u=n.width,c=n.height;this._mouse.x=s/u*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function U_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function N_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function F_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=Xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function O_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Xt.DOLLY;break;case Vr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xt.ROTATE}break;case Vr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Xt.PAN}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(El)}function B_(i){switch(this.state){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function z_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Xt.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hu))}function k_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function V_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Xt.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Xt.TOUCH_PAN;break;default:this.state=Xt.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Xt.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Xt.TOUCH_DOLLY_ROTATE;break;default:this.state=Xt.NONE}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(El)}function H_(i){switch(this._trackPointer(i),this.state){case Xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Xt.NONE}}function G_(i){this.enabled!==!1&&i.preventDefault()}function W_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let pn,Kt,Jt,Qt,Ft,an,hl,bi,vs=null,Nr,Oi,Wu=!1,ei=null,Qn=null;function fo(i,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.font="bold 48px sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=5,n.strokeStyle="rgba(0, 0, 0, 0.9)",n.strokeText(i,32,32),n.fillStyle=e,n.fillText(i,32,32);const s=new zu(t);s.minFilter=qn;const o=new Fu({map:s,transparent:!0,depthTest:!1}),u=new b_(o);return u.scale.set(.4,.4,.4),u}function q_(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,128,128),n.strokeStyle="rgba(0, 0, 0, 0.5)",n.lineWidth=6,n.strokeRect(3,3,122,122),n.font="bold 22px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.fillText(i,64,64);const s=new zu(t);return s.minFilter=qn,s}function Y_(){hl=new bl,bi=new bs(-1,1,1,-1,.1,10),bi.position.set(2,2,2),bi.lookAt(0,0,0);const i=new Jr(1,1,1),t=[["Right","#a04444"],["Left","#a04444"],["Top","#44a044"],["Bottom","#44a044"],["Front","#4444a0"],["Back","#4444a0"]].map(([s,o])=>new Ta({map:q_(s,o)}));vs=new vn(i,t),hl.add(vs);const n=new w_(i);vs.add(new Ra(n,new Yn({color:0})))}function $_(){Nr=new bl,Oi=new bs(-1.5,1.5,1.5,-1.5,.1,10),Oi.position.set(2,2,2),Oi.lookAt(0,0,0),Nr.add(new Vu(1));const i=fo("X","#ff6666");i.position.set(1.15,0,0),Nr.add(i);const e=fo("Y","#66ff66");e.position.set(0,1.15,0),Nr.add(e);const t=fo("Z","#8888ff");t.position.set(0,0,1.15),Nr.add(t)}function K_(i){pn=new bl,pn.background=new wt(1710638);const{width:e,height:t}=i.getBoundingClientRect();Jt=new Wn(50,e/t,.01,100),Jt.position.set(3,2,4),Jt.lookAt(0,0,0);const n=e/t;Qt=new bs(-n,n,1,-1,.01,100),Qt.position.copy(Jt.position),Qt.up.copy(Jt.up),Qt.lookAt(0,0,0),Qt.updateMatrixWorld(),Kt=Jt,Ft=new S_({antialias:!0}),Ft.setSize(e,t),Ft.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(Ft.domElement),an=new Gu(Kt,Ft.domElement),an.enableDamping=!0,an.dampingFactor=.1;const s=new L_(6,20,4473958,2236996);pn.add(s),pn.add(new Vu(2)),pn.add(new A_(16777215,4473924,.8));const o=new P_(16777215,1);o.position.set(2,3,2),pn.add(o),Y_(),$_(),Ft.domElement.addEventListener("click",Q_),window.addEventListener("resize",()=>{const{width:u,height:c}=i.getBoundingClientRect(),d=u/c;if(Kt===Jt)Jt.aspect=d,Jt.updateProjectionMatrix();else{const _=(Qt.top-Qt.bottom)/2*d;Qt.left=-_,Qt.right=_,Qt.updateProjectionMatrix()}Ft.setSize(u,c)}),qu()}function Xu(){const i=new lt;Ft.getSize(i);const e=Math.min(150,Math.max(110,i.x/6))*.8,t=12,n=document.getElementById("panel");let s=i.x;if(n){const c=n.getBoundingClientRect(),d=Ft.domElement.getBoundingClientRect();s=c.left-d.left}const o=Math.max(0,s-e-t),u=i.y-e-t;return{x:o,y:u,size:e,canvasSize:i}}function j_(){const{x:i,y:e,size:t,canvasSize:n}=Xu(),s=Kt.position.clone().sub(an.target).normalize();bi.position.copy(s.multiplyScalar(2)),bi.up.copy(Kt.up),bi.lookAt(0,0,0),bi.updateMatrixWorld(),Ft.setViewport(i,e,t,t),Ft.setScissor(i,e,t,t),Ft.setScissorTest(!0),Ft.autoClear=!1,Ft.clearDepth(),Ft.render(hl,bi),Ft.setScissorTest(!1),Ft.autoClear=!0,Ft.setViewport(0,0,n.x,n.y)}function Z_(){const i=new lt;Ft.getSize(i);const e=100,t=12;return{x:t,y:t,size:e,canvasSize:i}}function J_(){const{x:i,y:e,size:t,canvasSize:n}=Z_(),s=Kt.position.clone().sub(an.target).normalize();Oi.position.copy(s.multiplyScalar(2)),Oi.up.copy(Kt.up),Oi.lookAt(0,0,0),Oi.updateMatrixWorld(),Ft.setViewport(i,e,t,t),Ft.setScissor(i,e,t,t),Ft.setScissorTest(!0),Ft.autoClear=!1,Ft.clearDepth(),Ft.render(Nr,Oi),Ft.setScissorTest(!1),Ft.autoClear=!0,Ft.setViewport(0,0,n.x,n.y)}const Kc=[[new Z(1,0,0),new Z(0,1,0)],[new Z(-1,0,0),new Z(0,1,0)],[new Z(0,1,0),new Z(0,0,-1)],[new Z(0,-1,0),new Z(0,0,1)],[new Z(0,0,1),new Z(0,1,0)],[new Z(0,0,-1),new Z(0,1,0)]];function Q_(i){if(!vs)return;const e=Ft.domElement.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top,{x:s,y:o,size:u,canvasSize:c}=Xu(),d=t-s,p=c.y-n-o;if(d>=0&&d<=u&&p>=0&&p<=u){const M=d/u*2-1,S=p/u*2-1,b=new Wc;b.setFromCamera(new lt(M,S),bi);const C=b.intersectObject(vs,!1);if(C.length===0)return;const T=C[0].face?.materialIndex;if(T===void 0||T<0||T>=Kc.length)return;const[x,g]=Kc[T];ev(x,g);return}if(Wu){const M=t/c.x*2-1,S=-(n/c.y)*2+1,b=new Wc;b.setFromCamera(new lt(M,S),Kt);const T=b.intersectObjects(pn.children,!0).find(x=>x.object!==ei&&x.object instanceof vn);if(T){const x=rv();x.position.copy(T.point),x.visible=!0,an.target.copy(T.point);const g=Kt.position.distanceTo(an.target);Jt.near=Math.max(.001,g/1e3),Jt.far=g*100,Jt.updateProjectionMatrix()}}}function ev(i,e){const t=Kt.position.distanceTo(an.target),n=an.target.clone(),s=n.clone().add(i.clone().normalize().multiplyScalar(t));Qn={startPos:Kt.position.clone(),endPos:s,startUp:Kt.up.clone(),endUp:e.clone(),target:n,startTime:performance.now(),duration:350}}function tv(){if(!Qn)return;const i=Math.min(1,(performance.now()-Qn.startTime)/Qn.duration),e=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;Kt.position.lerpVectors(Qn.startPos,Qn.endPos,e),Kt.up.lerpVectors(Qn.startUp,Qn.endUp,e).normalize(),an.target.copy(Qn.target),Kt.lookAt(Qn.target),i>=1&&(Qn=null)}function qu(){requestAnimationFrame(qu),tv(),an.update(),Ft.render(pn,Kt),j_(),J_()}function nv(){return pn}function iv(i){const e=pn.getObjectByName(i);e&&pn.remove(e)}function dn(i,e){const t=pn.getObjectByName(i);t&&(t.visible=e)}function Yu(i){return pn.getObjectByName(i)!=null}function $n(i,e){iv(e),i.name=e,pn.add(i)}function kr(){const i=[];pn.traverse(e=>{e.name&&e.name!==""&&i.push(e)});for(const e of i)pn.remove(e)}function ts(i){const e=i??pn;if(!e)return;const t=new fr;if(i?(i.updateWorldMatrix(!0,!1),t.setFromObject(i)):e.traverse(p=>{if(p.visible&&p.isMesh){const _=new fr().setFromObject(p);_.min.x!==1/0&&t.union(_)}}),!isFinite(t.min.x))return;const n=t.getSize(new Z),s=t.getCenter(new Z),o=Math.max(n.x,n.y,n.z)||1,u=Jt.fov*Math.PI/180,c=o*.5/Math.tan(u*.5)*1.6,d=new Z(.6,.5,1).normalize();Kt.position.copy(s).addScaledVector(d,c),an.target.copy(s),Kt.near=Math.max(.001,c/1e3),Kt.far=c*100,Kt.updateProjectionMatrix(),an.update(),ei&&(ei.visible=!1)}function rv(){if(ei)return ei;const i=new es(.05,16,12),e=new Ta({color:5227511,depthTest:!1,transparent:!0,opacity:.85});return ei=new vn(i,e),ei.name="pivot-marker",ei.visible=!1,ei.renderOrder=999,pn.add(ei),ei}function jc(i){Wu=i,document.body.style.cursor=i?"crosshair":""}function sv(i){if(i&&Kt===Qt||!i&&Kt===Jt)return;const e=Kt.position.clone(),t=Kt.up.clone(),n=an.target.clone(),s=Ft.domElement.clientWidth/Ft.domElement.clientHeight;if(i){const o=Jt.fov,u=e.distanceTo(n),c=Math.tan(o*Math.PI/360)*u,d=c*s;Qt.left=-d,Qt.right=d,Qt.top=c,Qt.bottom=-c,Qt.near=Jt.near,Qt.far=Jt.far,Qt.position.copy(e),Qt.up.copy(t),Qt.lookAt(n),Qt.updateProjectionMatrix(),Kt=Qt}else Jt.aspect=s,Jt.near=Qt.near,Jt.far=Qt.far,Jt.position.copy(e),Jt.up.copy(t),Jt.lookAt(n),Jt.updateProjectionMatrix(),Kt=Jt;an.dispose(),an=new Gu(Kt,Ft.domElement),an.enableDamping=!0,an.dampingFactor=.1,an.target.copy(n),an.update()}var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function av(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $u={};(function(i){(function(e,t){if(e.setImmediate)return;var n=1,s={},o=!1,u=e.document,c;function d(F){return s[n]=p.apply(t,F),n++}function p(F){var A=[].slice.call(arguments,1);return function(){typeof F=="function"?F.apply(t,A):new Function(""+F)()}}function _(F){if(o)setTimeout(p(_,F),0);else{var A=s[F];if(A){o=!0;try{A()}finally{M(F),o=!1}}}}function M(F){delete s[F]}function S(){c=function(){var F=d(arguments);return process.nextTick(p(_,F)),F}}function b(){if(e.postMessage&&!e.importScripts){var F=!0,A=e.onmessage;return e.onmessage=function(){F=!1},e.postMessage("","*"),e.onmessage=A,F}}function C(){var F="setImmediate$"+Math.random()+"$",A=function($){$.source===e&&typeof $.data=="string"&&$.data.indexOf(F)===0&&_(+$.data.slice(F.length))};e.addEventListener?e.addEventListener("message",A,!1):e.attachEvent("onmessage",A),c=function(){var $=d(arguments);return e.postMessage(F+$,"*"),$}}function T(){var F=new MessageChannel;F.port1.onmessage=function(A){var $=A.data;_($)},c=function(){var A=d(arguments);return F.port2.postMessage(A),A}}function x(){var F=u.documentElement;c=function(){var A=d(arguments),$=u.createElement("script");return $.onreadystatechange=function(){_(A),$.onreadystatechange=null,F.removeChild($),$=null},F.appendChild($),A}}function g(){c=function(){var F=d(arguments);return setTimeout(p(_,F),0),F}}var k=Object.getPrototypeOf&&Object.getPrototypeOf(e);k=k&&k.setTimeout?k:e,{}.toString.call(e.process)==="[object process]"?S():b()?C():e.MessageChannel?T():u&&"onreadystatechange"in u.createElement("script")?x():g(),k.setImmediate=c,k.clearImmediate=M})(new Function("return this")()),(function(e,t){e.promhx=e.promhx||{},e.core=e.core||{},e.eval=e.eval||{},e.exe=e.exe||{},e.geom=e.geom||{};var n={},s=function(){return ee.__string_rec(this,"")},o=o||{},u;function c(r,a){var l=Object.create(r);for(var h in a)l[h]=a[h];return a.toString!==Object.prototype.toString&&(l.toString=a.toString),l}var d=function(){};n.HxOverrides=d,d.__name__="HxOverrides",d.strDate=function(r){switch(r.length){case 8:var l=r.split(":"),a=new Date;return a.setTime(0),a.setUTCHours(l[0]),a.setUTCMinutes(l[1]),a.setUTCSeconds(l[2]),a;case 10:var l=r.split("-");return new Date(l[0],l[1]-1,l[2],0,0,0);case 19:var l=r.split(" "),h=l[0].split("-"),f=l[1].split(":");return new Date(h[0],h[1]-1,h[2],f[0],f[1],f[2]);default:throw x.thrown("Invalid date format : "+r)}},d.cca=function(r,a){var l=r.charCodeAt(a);if(l==l)return l},d.substr=function(r,a,l){if(l==null)l=r.length;else if(l<0)if(a==0)l=r.length+l;else return"";return r.substr(a,l)},d.now=function(){return Date.now()};var p=function(){};n.Lambda=p,p.__name__="Lambda",p.fold=function(r,a,l){for(var h=Oe(r);h.hasNext();){var f=h.next();l=a(f,l)}return l},Math.__name__="Math";var _=function(){};n.Reflect=_,_.__name__="Reflect",_.field=function(r,a){try{return r[a]}catch{return null}},_.fields=function(r){var a=[];if(r!=null){var l=Object.prototype.hasOwnProperty;for(var h in r)h!="__id__"&&h!="hx__closures__"&&l.call(r,h)&&a.push(h)}return a},_.isFunction=function(r){return typeof r=="function"?!(r.__name__||r.__ename__):!1},_.deleteField=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)?(delete r[a],!0):!1};var M=function(){};n.Std=M,M.__name__="Std",M.string=function(r){return ee.__string_rec(r,"")};var S=function(){this.b=""};n.StringBuf=S,S.__name__="StringBuf",S.prototype={__class__:S};var b=o.ValueType={__ename__:"ValueType",__constructs__:null,TNull:{_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:s},TInt:{_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:s},TFloat:{_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:s},TBool:{_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:s},TObject:{_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:s},TFunction:{_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:s},TClass:(u=function(r){return{_hx_index:6,c:r,__enum__:"ValueType",toString:s}},u._hx_name="TClass",u.__params__=["c"],u),TEnum:(u=function(r){return{_hx_index:7,e:r,__enum__:"ValueType",toString:s}},u._hx_name="TEnum",u.__params__=["e"],u),TUnknown:{_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:s}};b.__constructs__=[b.TNull,b.TInt,b.TFloat,b.TBool,b.TObject,b.TFunction,b.TClass,b.TEnum,b.TUnknown];var C=function(){};n.Type=C,C.__name__="Type",C.createEnum=function(r,a,l){var h=_.field(r,a);if(h==null)throw x.thrown("No such constructor "+a);if(_.isFunction(h)){if(l==null)throw x.thrown("Constructor "+a+" need parameters");return h.apply(r,l)}if(l!=null&&l.length!=0)throw x.thrown("Constructor "+a+" does not need parameters");return h},C.typeof=function(r){switch(typeof r){case"boolean":return b.TBool;case"function":return r.__name__||r.__ename__?b.TObject:b.TFunction;case"number":return Math.ceil(r)==r%2147483648?b.TInt:b.TFloat;case"object":if(r==null)return b.TNull;var a=r.__enum__;if(a!=null)return b.TEnum(o[a]);var l=ee.getClass(r);return l!=null?b.TClass(l):b.TObject;case"string":return b.TClass(String);case"undefined":return b.TNull;default:return b.TUnknown}},C.enumParameters=function(r){var a=o[r.__enum__],l=a.__constructs__[r._hx_index].__params__;if(l!=null){for(var h=[],f=0;f<l.length;){var m=l[f];++f,h.push(r[m])}return h}else return[]};var T=function(){};n["haxe.IMap"]=T,T.__name__="haxe.IMap",T.__isInterface__=!0;var x=function(r,a,l){Error.call(this,r),this.message=r,this.__previousException=a,this.__nativeException=l??this};n["haxe.Exception"]=x,x.__name__="haxe.Exception",x.caught=function(r){return r instanceof x?r:r instanceof Error?new x(r.message,null,r):new A(r,null,r)},x.thrown=function(r){if(r instanceof x)return r.get_native();if(r instanceof Error)return r;var a=new A(r);return a},x.__super__=Error,x.prototype=c(Error.prototype,{unwrap:function(){return this.__nativeException},get_native:function(){return this.__nativeException},__class__:x});var g=function(){this.buf=new S,this.cache=[],this.useCache=g.USE_CACHE,this.useEnumIndex=g.USE_ENUM_INDEX,this.shash=new U,this.scount=0};n["haxe.Serializer"]=g,g.__name__="haxe.Serializer",g.prototype={toString:function(){return this.buf.b},serializeString:function(r){var a=this.shash.h[r];if(a!=null){this.buf.b+="R",this.buf.b+=a==null?"null":""+a;return}this.shash.h[r]=this.scount++,this.buf.b+="y",r=encodeURIComponent(r),this.buf.b+=M.string(r.length),this.buf.b+=":",this.buf.b+=r==null?"null":""+r},serializeRef:function(r){for(var a=typeof r,l=0,h=this.cache.length;l<h;){var f=l++,m=this.cache[f];if(typeof m==a&&m==r)return this.buf.b+="r",this.buf.b+=f==null?"null":""+f,!0}return this.cache.push(r),!1},serializeFields:function(r){for(var a=0,l=_.fields(r);a<l.length;){var h=l[a];++a,this.serializeString(h),this.serialize(_.field(r,h))}this.buf.b+="g"},serialize:function(r){var a=C.typeof(r);switch(a._hx_index){case 0:this.buf.b+="n";break;case 1:var l=r;if(l==0){this.buf.b+="z";return}this.buf.b+="i",this.buf.b+=l==null?"null":""+l;break;case 2:var l=r;isNaN(l)?this.buf.b+="k":isFinite(l)?(this.buf.b+="d",this.buf.b+=l==null?"null":""+l):this.buf.b+=l<0?"m":"p";break;case 3:this.buf.b+=r?"t":"f";break;case 4:if(ee.__instanceof(r,Qe)){var h=r.__name__;this.buf.b+="A",this.serializeString(h)}else if(ee.__instanceof(r,zn))this.buf.b+="B",this.serializeString(r.__ename__);else{if(this.useCache&&this.serializeRef(r))return;this.buf.b+="o",this.serializeFields(r)}break;case 5:throw x.thrown("Cannot serialize function");case 6:var f=a.c;if(f==String){this.serializeString(r);return}if(this.useCache&&this.serializeRef(r))return;switch(f){case Array:var m=0;this.buf.b+="a";for(var y=r.length,E=0,w=y;E<w;){var ce=E++;r[ce]==null?++m:(m>0&&(m==1?this.buf.b+="n":(this.buf.b+="u",this.buf.b+=m==null?"null":""+m),m=0),this.serialize(r[ce]))}m>0&&(m==1?this.buf.b+="n":(this.buf.b+="u",this.buf.b+=m==null?"null":""+m)),this.buf.b+="h";break;case Date:var L=r;this.buf.b+="v",this.buf.b+=M.string(L.getTime());break;case $:this.buf.b+="q";for(var l=r,O=l.keys();O.hasNext();){var R=O.next();this.buf.b+=":",this.buf.b+=R==null?"null":""+R,this.serialize(l.h[R])}this.buf.b+="h";break;case H:this.buf.b+="l";for(var l=r,I=l.h;I!=null;){var B=I.item;I=I.next;var ce=B;this.serialize(ce)}this.buf.b+="h";break;case X:this.buf.b+="M";for(var l=r,O=l.keys();O.hasNext();){var R=O.next(),V=_.field(R,"__id__");_.deleteField(R,"__id__"),this.serialize(R),R.__id__=V,this.serialize(l.h[R.__id__])}this.buf.b+="h";break;case U:this.buf.b+="b";for(var l=r,K=l.h,q=Object.keys(K),J=q.length,ie=0;ie<J;){var O=q[ie++];this.serializeString(O),this.serialize(l.h[O])}this.buf.b+="h";break;case W:var l=r;this.buf.b+="s",this.buf.b+=M.string(Math.ceil(l.length*8/6)),this.buf.b+=":";var ce=0,_e=l.length-2,ye=g.BASE64_CODES;if(ye==null){ye=new Array(g.BASE64.length);for(var E=0,w=g.BASE64.length;E<w;){var Ce=E++;ye[Ce]=d.cca(g.BASE64,Ce)}g.BASE64_CODES=ye}for(;ce<_e;){var Te=l.b[ce++],Pe=l.b[ce++],st=l.b[ce++];this.buf.b+=String.fromCodePoint(ye[Te>>2]),this.buf.b+=String.fromCodePoint(ye[(Te<<4|Pe>>4)&63]),this.buf.b+=String.fromCodePoint(ye[(Pe<<2|st>>6)&63]),this.buf.b+=String.fromCodePoint(ye[st&63])}if(ce==_e){var Te=l.b[ce++],Pe=l.b[ce++];this.buf.b+=String.fromCodePoint(ye[Te>>2]),this.buf.b+=String.fromCodePoint(ye[(Te<<4|Pe>>4)&63]),this.buf.b+=String.fromCodePoint(ye[Pe<<2&63])}else if(ce==_e+1){var Te=l.b[ce++];this.buf.b+=String.fromCodePoint(ye[Te>>2]),this.buf.b+=String.fromCodePoint(ye[Te<<4&63])}break;default:this.useCache&&this.cache.pop(),r.hxSerialize!=null?(this.buf.b+="C",this.serializeString(f.__name__),this.useCache&&this.cache.push(r),r.hxSerialize(this),this.buf.b+="g"):(this.buf.b+="c",this.serializeString(f.__name__),this.useCache&&this.cache.push(r),this.serializeFields(r))}break;case 7:var Ke=a.e;if(this.useCache){if(this.serializeRef(r))return;this.cache.pop()}if(this.buf.b+=M.string(this.useEnumIndex?"j":"w"),this.serializeString(Ke.__ename__),this.useEnumIndex)this.buf.b+=":",this.buf.b+=M.string(r._hx_index);else{var Ke=r;this.serializeString(o[Ke.__enum__].__constructs__[Ke._hx_index]._hx_name)}this.buf.b+=":";var Xe=C.enumParameters(r);this.buf.b+=M.string(Xe.length);for(var a=0;a<Xe.length;){var ot=Xe[a];++a,this.serialize(ot)}this.useCache&&this.cache.push(r);break;default:throw x.thrown("Cannot serialize "+M.string(r))}},__class__:g};var k=function(){};n["haxe._Unserializer.DefaultResolver"]=k,k.__name__="haxe._Unserializer.DefaultResolver",k.prototype={resolveClass:function(r){return n[r]},resolveEnum:function(r){return o[r]},__class__:k};var F=function(r){this.buf=r,this.length=this.buf.length,this.pos=0,this.scache=[],this.cache=[];var a=F.DEFAULT_RESOLVER;a==null&&(a=new k,F.DEFAULT_RESOLVER=a),this.resolver=a};n["haxe.Unserializer"]=F,F.__name__="haxe.Unserializer",F.initCodes=function(){for(var r=[],a=0,l=F.BASE64.length;a<l;){var h=a++;r[F.BASE64.charCodeAt(h)]=h}return r},F.prototype={readDigits:function(){for(var r=0,a=!1,l=this.pos;;){var h=this.buf.charCodeAt(this.pos);if(h!=h)break;if(h==45){if(this.pos!=l)break;a=!0,this.pos++;continue}if(h<48||h>57)break;r=r*10+(h-48),this.pos++}return a&&(r*=-1),r},readFloat:function(){for(var r=this.pos;;){var a=this.buf.charCodeAt(this.pos);if(a!=a)break;if(a>=43&&a<58||a==101||a==69)this.pos++;else break}return parseFloat(d.substr(this.buf,r,this.pos-r))},unserializeObject:function(r){for(;;){if(this.pos>=this.length)throw x.thrown("Invalid object");if(this.buf.charCodeAt(this.pos)==103)break;var a=this.unserialize();if(typeof a!="string")throw x.thrown("Invalid object key");var l=this.unserialize();r[a]=l}this.pos++},unserializeEnum:function(r,a){if(this.buf.charCodeAt(this.pos++)!=58)throw x.thrown("Invalid enum format");var l=this.readDigits();if(l==0)return C.createEnum(r,a);for(var h=[];l-- >0;)h.push(this.unserialize());return C.createEnum(r,a,h)},unserialize:function(){switch(this.buf.charCodeAt(this.pos++)){case 65:var Xe=this.unserialize(),l=this.resolver.resolveClass(Xe);if(l==null)throw x.thrown("Class not found "+Xe);return l;case 66:var Xe=this.unserialize(),ht=this.resolver.resolveEnum(Xe);if(ht==null)throw x.thrown("Enum not found "+Xe);return ht;case 67:var Xe=this.unserialize(),l=this.resolver.resolveClass(Xe);if(l==null)throw x.thrown("Class not found "+Xe);var R=Object.create(l.prototype);if(this.cache.push(R),R.hxUnserialize(this),this.buf.charCodeAt(this.pos++)!=103)throw x.thrown("Invalid custom data");return R;case 77:var I=new X;this.cache.push(I);for(var V=this.buf;this.buf.charCodeAt(this.pos)!=104;){var At=this.unserialize();I.set(At,this.unserialize())}return this.pos++,I;case 82:var O=this.readDigits();if(O<0||O>=this.scache.length)throw x.thrown("Invalid string reference");return this.scache[O];case 97:var V=this.buf,r=[];for(this.cache.push(r);;){var B=this.buf.charCodeAt(this.pos);if(B==104){this.pos++;break}if(B==117){this.pos++;var O=this.readDigits();r[r.length+O-1]=null}else r.push(this.unserialize())}return r;case 98:var I=new U;this.cache.push(I);for(var V=this.buf;this.buf.charCodeAt(this.pos)!=104;){var At=this.unserialize(),a=this.unserialize();I.h[At]=a}return this.pos++,I;case 99:var Xe=this.unserialize(),l=this.resolver.resolveClass(Xe);if(l==null)throw x.thrown("Class not found "+Xe);var R=Object.create(l.prototype);return this.cache.push(R),this.unserializeObject(R),R;case 100:return this.readFloat();case 102:return!1;case 105:return this.readDigits();case 106:var Xe=this.unserialize(),ot=this.resolver.resolveEnum(Xe);if(ot==null)throw x.thrown("Enum not found "+Xe);this.pos++;for(var h=this.readDigits(),f=ot.__constructs__,m=new Array(f.length),y=0,E=f.length;y<E;){var q=y++;m[q]=f[q]._hx_name}var w=m[h];if(w==null)throw x.thrown("Unknown enum index "+Xe+"@"+h);var ht=this.unserializeEnum(ot,w);return this.cache.push(ht),ht;case 107:return NaN;case 108:var L=new H;this.cache.push(L);for(var V=this.buf;this.buf.charCodeAt(this.pos)!=104;)L.add(this.unserialize());return this.pos++,L;case 109:return-1/0;case 110:return null;case 111:var R={};return this.cache.push(R),this.unserializeObject(R),R;case 112:return 1/0;case 113:var I=new $;this.cache.push(I);for(var V=this.buf,B=this.buf.charCodeAt(this.pos++);B==58;){var q=this.readDigits(),a=this.unserialize();I.h[q]=a,B=this.buf.charCodeAt(this.pos++)}if(B!=104)throw x.thrown("Invalid IntMap format");return I;case 114:var O=this.readDigits();if(O<0||O>=this.cache.length)throw x.thrown("Invalid reference");return this.cache[O];case 115:var gt=this.readDigits(),V=this.buf;if(this.buf.charCodeAt(this.pos++)!=58||this.length-this.pos<gt)throw x.thrown("Invalid bytes length");var K=F.CODES;K==null&&(K=F.initCodes(),F.CODES=K);for(var q=this.pos,J=gt&3,ie=(gt>>2)*3+(J>=2?J-1:0),ce=q+(gt-J),_e=new W(new ArrayBuffer(ie)),ye=0;q<ce;){var Ce=K[V.charCodeAt(q++)],Te=K[V.charCodeAt(q++)];_e.b[ye++]=Ce<<2|Te>>4;var Pe=K[V.charCodeAt(q++)];_e.b[ye++]=Te<<4|Pe>>2;var st=K[V.charCodeAt(q++)];_e.b[ye++]=Pe<<6|st}if(J>=2){var Ce=K[V.charCodeAt(q++)],Te=K[V.charCodeAt(q++)];if(_e.b[ye++]=Ce<<2|Te>>4,J==3){var Pe=K[V.charCodeAt(q++)];_e.b[ye++]=Te<<4|Pe>>2}}return this.pos+=gt,this.cache.push(_e),_e;case 116:return!0;case 118:var Ke;return this.buf.charCodeAt(this.pos)>=48&&this.buf.charCodeAt(this.pos)<=57&&this.buf.charCodeAt(this.pos+1)>=48&&this.buf.charCodeAt(this.pos+1)<=57&&this.buf.charCodeAt(this.pos+2)>=48&&this.buf.charCodeAt(this.pos+2)<=57&&this.buf.charCodeAt(this.pos+3)>=48&&this.buf.charCodeAt(this.pos+3)<=57&&this.buf.charCodeAt(this.pos+4)==45?(Ke=d.strDate(d.substr(this.buf,this.pos,19)),this.pos+=19):Ke=new Date(this.readFloat()),this.cache.push(Ke),Ke;case 119:var Xe=this.unserialize(),ot=this.resolver.resolveEnum(Xe);if(ot==null)throw x.thrown("Enum not found "+Xe);var ht=this.unserializeEnum(ot,this.unserialize());return this.cache.push(ht),ht;case 120:throw x.thrown(this.unserialize());case 121:var gt=this.readDigits();if(this.buf.charCodeAt(this.pos++)!=58||this.length-this.pos<gt)throw x.thrown("Invalid string length");var At=d.substr(this.buf,this.pos,gt);return this.pos+=gt,At=decodeURIComponent(At.split("+").join(" ")),this.scache.push(At),At;case 122:return 0}throw this.pos--,x.thrown("Invalid char "+this.buf.charAt(this.pos)+" at position "+this.pos)},__class__:F};var A=function(r,a,l){x.call(this,String(r),a,l),this.value=r};n["haxe.ValueException"]=A,A.__name__="haxe.ValueException",A.__super__=x,A.prototype=c(x.prototype,{unwrap:function(){return this.value},__class__:A});var $=function(){this.h={}};n["haxe.ds.IntMap"]=$,$.__name__="haxe.ds.IntMap",$.__interfaces__=[T],$.prototype={remove:function(r){return this.h.hasOwnProperty(r)?(delete this.h[r],!0):!1},keys:function(){var r=[];for(var a in this.h)this.h.hasOwnProperty(a)&&r.push(+a);return new ue(r)},__class__:$};var H=function(){this.length=0};n["haxe.ds.List"]=H,H.__name__="haxe.ds.List",H.prototype={add:function(r){var a=new G(r,null);this.h==null?this.h=a:this.q.next=a,this.q=a,this.length++},pop:function(){if(this.h==null)return null;var r=this.h.item;return this.h=this.h.next,this.h==null&&(this.q=null),this.length--,r},isEmpty:function(){return this.h==null},__class__:H};var G=function(r,a){this.item=r,this.next=a};n["haxe.ds._List.ListNode"]=G,G.__name__="haxe.ds._List.ListNode",G.prototype={__class__:G};var X=function(){this.h={__keys__:{}}};n["haxe.ds.ObjectMap"]=X,X.__name__="haxe.ds.ObjectMap",X.__interfaces__=[T],X.prototype={set:function(r,a){var l=r.__id__;l==null&&(l=r.__id__=t.$haxeUID++),this.h[l]=a,this.h.__keys__[l]=r},keys:function(){var r=[];for(var a in this.h.__keys__)this.h.hasOwnProperty(a)&&r.push(this.h.__keys__[a]);return new ue(r)},__class__:X};var N=o["haxe.ds.Option"]={__ename__:"haxe.ds.Option",__constructs__:null,Some:(u=function(r){return{_hx_index:0,v:r,__enum__:"haxe.ds.Option",toString:s}},u._hx_name="Some",u.__params__=["v"],u),None:{_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:s}};N.__constructs__=[N.Some,N.None];var U=function(){this.h=Object.create(null)};n["haxe.ds.StringMap"]=U,U.__name__="haxe.ds.StringMap",U.__interfaces__=[T],U.prototype={__class__:U};var W=function(r){this.length=r.byteLength,this.b=new Uint8Array(r),this.b.bufferValue=r,r.hxBytes=this,r.bytes=this.b};n["haxe.io.Bytes"]=W,W.__name__="haxe.io.Bytes",W.prototype={__class__:W};var ue=function(r){this.current=0,this.array=r};n["haxe.iterators.ArrayIterator"]=ue,ue.__name__="haxe.iterators.ArrayIterator",ue.prototype={hasNext:function(){return this.current<this.array.length},next:function(){return this.array[this.current++]},__class__:ue};var ee=function(){};n["js.Boot"]=ee,ee.__name__="js.Boot",ee.getClass=function(r){if(r==null)return null;if(r instanceof Array)return Array;var a=r.__class__;if(a!=null)return a;var l=ee.__nativeClassName(r);return l!=null?ee.__resolveNativeClass(l):null},ee.__string_rec=function(r,a){if(r==null)return"null";if(a.length>=5)return"<...>";var l=typeof r;switch(l=="function"&&(r.__name__||r.__ename__)&&(l="object"),l){case"function":return"<function>";case"object":if(r.__enum__){var h=o[r.__enum__],f=h.__constructs__[r._hx_index],m=f._hx_name;return f.__params__?(a=a+"	",m+"("+(function(V){for(var K,q=[],J=0,ie=f.__params__;J<ie.length;){var ce=ie[J];J=J+1,q.push(ee.__string_rec(r[ce],a))}return K=q,K})().join(",")+")"):m}if(r instanceof Array){var I="[";a+="	";for(var y=0,E=r.length;y<E;){var w=y++;I+=(w>0?",":"")+ee.__string_rec(r[w],a)}return I+="]",I}var L;try{L=r.toString}catch{return"???"}if(L!=null&&L!=Object.toString&&typeof L=="function"){var R=r.toString();if(R!="[object Object]")return R}var I=`{
`;a+="	";var B=r.hasOwnProperty!=null,O=null;for(O in r)B&&!r.hasOwnProperty(O)||O=="prototype"||O=="__class__"||O=="__super__"||O=="__interfaces__"||O=="__properties__"||(I.length!=2&&(I+=`, 
`),I+=a+O+" : "+ee.__string_rec(r[O],a));return a=a.substring(1),I+=`
`+a+"}",I;case"string":return r;default:return String(r)}},ee.__interfLoop=function(r,a){if(r==null)return!1;if(r==a)return!0;var l=r.__interfaces__;if(l!=null)for(var h=0,f=l.length;h<f;){var m=h++,y=l[m];if(y==a||ee.__interfLoop(y,a))return!0}return ee.__interfLoop(r.__super__,a)},ee.__instanceof=function(r,a){if(a==null)return!1;switch(a){case Array:return r instanceof Array;case Ot:return typeof r=="boolean";case $t:return r!=null;case gn:return typeof r=="number";case Vt:return typeof r=="number"?(r|0)===r:!1;case String:return typeof r=="string";default:if(r!=null){if(typeof a=="function"){if(ee.__downcastCheck(r,a))return!0}else if(typeof a=="object"&&ee.__isNativeObj(a)&&r instanceof a)return!0}else return!1;return a==Qe&&r.__name__!=null||a==zn&&r.__ename__!=null?!0:r.__enum__!=null?o[r.__enum__]==a:!1}},ee.__downcastCheck=function(r,a){return r instanceof a?!0:a.__isInterface__?ee.__interfLoop(ee.getClass(r),a):!1},ee.__nativeClassName=function(r){var a=ee.__toStr.call(r).slice(8,-1);return a=="Object"||a=="Function"||a=="Math"||a=="JSON"?null:a},ee.__isNativeObj=function(r){return ee.__nativeClassName(r)!=null},ee.__resolveNativeClass=function(r){return t[r]};var se=function(r){if(this._resolved=!1,this._pending=!1,this._errorPending=!1,this._fulfilled=!1,this._update=[],this._error=[],this._errored=!1,r!=null){var a=this,l=function(h){return h};r._update.push({async:a,linkf:function(h){a.handleResolve(l(h))}}),se.immediateLinkUpdate(r,a,l)}};n["promhx.base.AsyncBase"]=se,se.__name__="promhx.base.AsyncBase",se.link=function(r,a,l){r._update.push({async:a,linkf:function(h){a.handleResolve(l(h))}}),se.immediateLinkUpdate(r,a,l)},se.immediateLinkUpdate=function(r,a,l){if(r._errored&&!r._errorPending&&r._error.length<=0&&a.handleError(r._errorVal),r._resolved&&!r._pending)try{a.handleResolve(l(r._val))}catch(f){var h=x.caught(f).unwrap();a.handleError(h)}},se.linkAll=function(r,a){for(var l=function(I,B,O){if(I.length==0||se.allFulfilled(I)){for(var V=[],K=Oe(r);K.hasNext();){var q=K.next();V.push(q==B?O:q._val)}var J=V;a.handleResolve(J)}},h=Oe(r);h.hasNext();){for(var f=h.next(),m=f._update,y=a,E=[l],w=[],L=Oe(r);L.hasNext();){var R=L.next();R!=f&&w.push(R)}m.push({async:y,linkf:(function(I,B,O){return function(V){I[0](O[0],B[0],V)}})(E,[f],[w])})}if(se.allFulfilled(r)){for(var y=a,w=[],h=Oe(r);h.hasNext();){var f=h.next();w.push(f._val)}y.handleResolve(w)}},se.pipeLink=function(r,a,l){var h=!1,f=function(y){if(!h){h=!0;var E=l(y);E._update.push({async:a,linkf:mt(a,a.handleResolve)}),se.immediateLinkUpdate(E,a,function(w){return w})}};if(r._update.push({async:a,linkf:f}),r._resolved&&!r._pending)try{f(r._val)}catch(y){var m=x.caught(y).unwrap();a.handleError(m)}},se.allResolved=function(r){for(var a=Oe(r);a.hasNext();){var l=a.next();if(!l._resolved)return!1}return!0},se.allFulfilled=function(r){for(var a=Oe(r);a.hasNext();){var l=a.next();if(!l._fulfilled)return!1}return!0},se.prototype={catchError:function(r){return this._error.push(r),this},errorThen:function(r){return this._errorMap=r,this},isResolved:function(){return this._resolved},isErrored:function(){return this._errored},isErrorHandled:function(){return this._error.length>0},isErrorPending:function(){return this._errorPending},isFulfilled:function(){return this._fulfilled},isPending:function(){return this._pending},handleResolve:function(r){this._resolve(r)},_resolve:function(r){var a=this;if(this._pending){var l=this,h=r,f=function(){l._resolve(h)};ve.queue.add(f),ve.continueOnNextLoop()}else this._resolved=!0,this._pending=!0,ve.queue.add(function(){a._val=r;for(var m=0,y=a._update;m<y.length;){var E=y[m];++m;try{E.linkf(r)}catch(L){var w=x.caught(L).unwrap();E.async.handleError(w)}}a._fulfilled=!0,a._pending=!1}),ve.continueOnNextLoop()},handleError:function(r){this._handleError(r)},_handleError:function(r){var a=this,l=function(h){if(a._error.length>0)for(var f=0,m=a._error;f<m.length;){var y=m[f];++f,y(h)}else if(a._update.length>0)for(var f=0,m=a._update;f<m.length;){var E=m[f];++f,E.async.handleError(h)}else throw x.thrown(h);a._errorPending=!1};this._errorPending||(this._errorPending=!0,this._errored=!0,this._errorVal=r,ve.queue.add(function(){if(a._errorMap!=null)try{a._resolve(a._errorMap(r))}catch(f){var h=x.caught(f).unwrap();l(h)}else l(r)}),ve.continueOnNextLoop())},then:function(r){var a=new se(null),l=a,h=r;return this._update.push({async:l,linkf:function(f){l.handleResolve(h(f))}}),se.immediateLinkUpdate(this,l,h),a},unlink:function(r){var a=this;ve.queue.add(function(){for(var l=[],h=0,f=a._update;h<f.length;){var m=f[h];++h,m.async!=r&&l.push(m)}a._update=l}),ve.continueOnNextLoop()},isLinked:function(r){for(var a=!1,l=0,h=this._update;l<h.length;){var f=h[l];if(++l,f.async==r)return!0}return a},__class__:se};var Ee=e.promhx.Deferred=function(){se.call(this)};n["promhx.Deferred"]=Ee,Ee.__name__="promhx.Deferred",Ee.__super__=se,Ee.prototype=c(se.prototype,{resolve:function(r){this.handleResolve(r)},throwError:function(r){this.handleError(r)},promise:function(){return new he(this)},stream:function(){return new Me(this)},publicStream:function(){return new fe(this)},__class__:Ee});var he=e.promhx.Promise=function(r){se.call(this,r),this._rejected=!1};n["promhx.Promise"]=he,he.__name__="promhx.Promise",he.whenAll=function(r){for(var a=new he(null),l=r,h=a,f=function(O,V,K){if(O.length==0||se.allFulfilled(O)){for(var q=[],J=Oe(l);J.hasNext();){var ie=J.next();q.push(ie==V?K:ie._val)}var ce=q;h.handleResolve(ce)}},m=Oe(l);m.hasNext();){for(var y=m.next(),E=y._update,w=h,L=[f],R=[],I=Oe(l);I.hasNext();){var B=I.next();B!=y&&R.push(B)}E.push({async:w,linkf:(function(O,V,K){return function(q){K[0](V[0],O[0],q)}})([y],[R],L)})}if(se.allFulfilled(l)){for(var w=h,R=[],m=Oe(l);m.hasNext();){var y=m.next();R.push(y._val)}w.handleResolve(R)}return a},he.promise=function(r){var a=new he;return a.handleResolve(r),a},he.__super__=se,he.prototype=c(se.prototype,{isRejected:function(){return this._rejected},reject:function(r){this._rejected=!0,this.handleError(r)},handleResolve:function(r){if(this._resolved){var a="Promise has already been resolved";throw x.thrown(He.AlreadyResolved(a))}this._resolve(r)},then:function(r){var a=new he(null),l=a,h=r;return this._update.push({async:l,linkf:function(f){l.handleResolve(h(f))}}),se.immediateLinkUpdate(this,l,h),a},unlink:function(r){var a=this;ve.queue.add(function(){if(a._fulfilled){for(var h=[],f=0,m=a._update;f<m.length;){var y=m[f];++f,y.async!=r&&h.push(y)}a._update=h}else{var l="Downstream Promise is not fullfilled";a.handleError(He.DownstreamNotFullfilled(l))}}),ve.continueOnNextLoop()},handleError:function(r){this._rejected=!0,this._handleError(r)},pipe:function(r){var a=new he(null),l=a,h=r,f=!1,m=function(E){if(!f){f=!0;var w=h(E);w._update.push({async:l,linkf:mt(l,l.handleResolve)}),se.immediateLinkUpdate(w,l,function(L){return L})}};if(this._update.push({async:l,linkf:m}),this._resolved&&!this._pending)try{m(this._val)}catch(E){var y=x.caught(E).unwrap();l.handleError(y)}return a},errorPipe:function(r){var a=new he;return this.catchError(function(l){var h=r(l);h.then(mt(a,a._resolve))}),this.then(mt(a,a._resolve)),a},__class__:he});var Me=e.promhx.Stream=function(r){se.call(this,r),this._end_promise=new he};n["promhx.Stream"]=Me,Me.__name__="promhx.Stream",Me.foreach=function(r){for(var a=new Me(null),l=Oe(r);l.hasNext();){var h=l.next();a.handleResolve(h)}return a.end(),a},Me.wheneverAll=function(r){for(var a=new Me(null),l=r,h=a,f=function(O,V,K){if(O.length==0||se.allFulfilled(O)){for(var q=[],J=Oe(l);J.hasNext();){var ie=J.next();q.push(ie==V?K:ie._val)}var ce=q;h.handleResolve(ce)}},m=Oe(l);m.hasNext();){for(var y=m.next(),E=y._update,w=h,L=[f],R=[],I=Oe(l);I.hasNext();){var B=I.next();B!=y&&R.push(B)}E.push({async:w,linkf:(function(O,V,K){return function(q){K[0](V[0],O[0],q)}})([y],[R],L)})}if(se.allFulfilled(l)){for(var w=h,R=[],m=Oe(l);m.hasNext();){var y=m.next();R.push(y._val)}w.handleResolve(R)}return a},Me.concatAll=function(r){for(var a=new Me(null),l=Oe(r);l.hasNext();){var h=l.next();a.concat(h)}return a},Me.mergeAll=function(r){for(var a=new Me(null),l=Oe(r);l.hasNext();){var h=l.next();a.merge(h)}return a},Me.stream=function(r){var a=new Me(null);return a.handleResolve(r),a},Me.__super__=se,Me.prototype=c(se.prototype,{then:function(r){var a=new Me(null),l=a,h=r;return this._update.push({async:l,linkf:function(f){l.handleResolve(h(f))}}),se.immediateLinkUpdate(this,l,h),this._end_promise._update.push({async:a._end_promise,linkf:function(f){a.end()}}),a},detachStream:function(r){for(var a=[],l=!1,h=0,f=this._update;h<f.length;){var m=f[h];if(++h,m.async==r){for(var y=[],E=0,w=this._end_promise._update;E<w.length;){var L=w[E];++E,L.async!=r._end_promise&&y.push(L)}this._end_promise._update=y,l=!0}else a.push(m)}return this._update=a,l},first:function(){var r=new he(null);return this.then(function(a){r._resolved||r.handleResolve(a)}),r},handleResolve:function(r){!this._end&&!this._pause&&this._resolve(r)},pause:function(r){r==null&&(r=!this._pause),this._pause=r},pipe:function(r){var a=new Me(null),l=a,h=r,f=!1,m=function(E){if(!f){f=!0;var w=h(E);w._update.push({async:l,linkf:mt(l,l.handleResolve)}),se.immediateLinkUpdate(w,l,function(L){return L})}};if(this._update.push({async:l,linkf:m}),this._resolved&&!this._pending)try{m(this._val)}catch(E){var y=x.caught(E).unwrap();l.handleError(y)}return this._end_promise.then(function(E){a.end()}),a},errorPipe:function(r){var a=new Me(null);return this.catchError(function(l){var h=r(l);h.then(mt(a,a._resolve)),h._end_promise.then((u=a._end_promise,mt(u,u._resolve)))}),this.then(mt(a,a._resolve)),this._end_promise.then(function(l){a.end()}),a},handleEnd:function(){if(this._pending)ve.queue.add(mt(this,this.handleEnd)),ve.continueOnNextLoop();else{if(this._end_promise._resolved)return;this._end=!0;var r=this._resolved?N.Some(this._val):N.None;this._end_promise.handleResolve(r),this._update=[],this._error=[]}},end:function(){return ve.queue.add(mt(this,this.handleEnd)),ve.continueOnNextLoop(),this},endThen:function(r){return this._end_promise.then(r)},filter:function(r){var a=new Me(null);return this._update.push({async:a,linkf:function(l){r(l)&&a.handleResolve(l)}}),se.immediateLinkUpdate(this,a,function(l){return l}),a},concat:function(r){var a=new Me(null);return this._update.push({async:a,linkf:mt(a,a.handleResolve)}),se.immediateLinkUpdate(this,a,function(l){return l}),this._end_promise.then(function(l){r.pipe(function(h){return a.handleResolve(h),a}),r._end_promise.then(function(h){a.end()})}),a},merge:function(r){var a=new Me(null);return this._update.push({async:a,linkf:mt(a,a.handleResolve)}),r._update.push({async:a,linkf:mt(a,a.handleResolve)}),se.immediateLinkUpdate(this,a,function(l){return l}),se.immediateLinkUpdate(r,a,function(l){return l}),a},__class__:Me});var fe=e.promhx.PublicStream=function(r){Me.call(this,r)};n["promhx.PublicStream"]=fe,fe.__name__="promhx.PublicStream",fe.publicstream=function(r){var a=new fe(null);return a.handleResolve(r),a},fe.__super__=Me,fe.prototype=c(Me.prototype,{resolve:function(r){this.handleResolve(r)},throwError:function(r){this.handleError(r)},update:function(r){this.handleResolve(r)},__class__:fe});var ve=function(){};n["promhx.base.EventLoop"]=ve,ve.__name__="promhx.base.EventLoop",ve.enqueue=function(r){ve.queue.add(r),ve.continueOnNextLoop()},ve.set_nextLoop=function(r){if(ve.nextLoop!=null)throw x.thrown("nextLoop has already been set");return ve.nextLoop=r,ve.nextLoop},ve.queueEmpty=function(){return ve.queue.isEmpty()},ve.finish=function(r){r==null&&(r=1e3);for(var a=null;;){var l;if(r-- >0?(a=ve.queue.pop(),l=a!=null):l=!1,!l)break;a()}return ve.queue.isEmpty()},ve.clear=function(){ve.queue=new H},ve.f=function(){var r=ve.queue.pop();r?.(),ve.queue.isEmpty()||ve.continueOnNextLoop()},ve.continueOnNextLoop=function(){ve.nextLoop!=null?ve.nextLoop(ve.f):setImmediate(ve.f)};var He=o["promhx.error.PromiseError"]={__ename__:"promhx.error.PromiseError",__constructs__:null,AlreadyResolved:(u=function(r){return{_hx_index:0,message:r,__enum__:"promhx.error.PromiseError",toString:s}},u._hx_name="AlreadyResolved",u.__params__=["message"],u),DownstreamNotFullfilled:(u=function(r){return{_hx_index:1,message:r,__enum__:"promhx.error.PromiseError",toString:s}},u._hx_name="DownstreamNotFullfilled",u.__params__=["message"],u)};He.__constructs__=[He.AlreadyResolved,He.DownstreamNotFullfilled];var Je=function(){};n["verb.Verb"]=Je,Je.__name__="verb.Verb",Je.main=function(){console.log("src/verb/Verb.hx:48:",oe.VERSION)};var de=function(){};n["verb.core.ArrayExtensions"]=de,de.__name__="verb.core.ArrayExtensions",de.alloc=function(r,a){if(!(a<0))for(;r.length<a;)r.push(null)},de.reversed=function(r){var a=r.slice();return a.reverse(),a},de.last=function(r){return r[r.length-1]},de.first=function(r){return r[0]},de.spliceAndInsert=function(r,a,l,h){r.splice(a,l),r.splice(a,0,h)},de.left=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(0,a)},de.right=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(a)},de.rightWithPivot=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(a-1)},de.unique=function(r,a){if(r.length==0)return[];for(var l=[r.pop()];r.length>0;){for(var h=r.pop(),f=!0,m=0;m<l.length;){var y=l[m];if(++m,a(h,y)){f=!1;break}}f&&l.push(h)}return l};var Ze=function(){};n["verb.core.Binomial"]=Ze,Ze.__name__="verb.core.Binomial",Ze.get=function(r,a){if(a==0)return 1;if(r==0||a>r)return 0;if(a>r-a&&(a=r-a),Ze.memo_exists(r,a))return Ze.get_memo(r,a);for(var l=1,h=r,f=1,m=a+1;f<m;){var y=f++;if(Ze.memo_exists(h,y)){--r,l=Ze.get_memo(h,y);continue}l*=r--,l/=y,Ze.memoize(h,y,l)}return l},Ze.get_no_memo=function(r,a){if(a==0)return 1;if(r==0||a>r)return 0;a>r-a&&(a=r-a);for(var l=1,h=1,f=a+1;h<f;){var m=h++;l*=r--,l/=m}return l},Ze.memo_exists=function(r,a){return Ze.memo.h.hasOwnProperty(r)?Ze.memo.h[r].h.hasOwnProperty(a):!1},Ze.get_memo=function(r,a){return Ze.memo.h[r].h[a]},Ze.memoize=function(r,a,l){if(!Ze.memo.h.hasOwnProperty(r)){var h=Ze.memo,f=new $;h.h[r]=f}Ze.memo.h[r].h[a]=l};var me=e.core.BoundingBox=function(r){this.max=null,this.min=null,this.dim=3,this.initialized=!1,r!=null&&this.addRange(r)};n["verb.core.BoundingBox"]=me,me.__name__="verb.core.BoundingBox",me.intervalsOverlap=function(r,a,l,h,f){f==null&&(f=-1);var m=f<-.5?oe.TOLERANCE:f,y=Math.min(r,a)-m,E=Math.max(r,a)+m,w=Math.min(l,h)-m,L=Math.max(l,h)+m;return y>=w&&y<=L||E>=w&&E<=L||w>=y&&w<=E?!0:L>=y?L<=E:!1},me.prototype={fromPoint:function(r){return new me([r])},add:function(r){if(!this.initialized)return this.dim=r.length,this.min=r.slice(0),this.max=r.slice(0),this.initialized=!0,this;for(var a=0,l=this.dim;a<l;){var h=a++;r[h]>this.max[h]&&(this.max[h]=r[h]),r[h]<this.min[h]&&(this.min[h]=r[h])}return this},addRange:function(r){for(var a=r.length,l=0,h=a;l<h;){var f=l++;this.add(r[f])}return this},contains:function(r,a){return a==null&&(a=-1),this.initialized?this.intersects(new me([r]),a):!1},intersects:function(r,a){if(a==null&&(a=-1),!this.initialized||!r.initialized)return!1;for(var l=this.min,h=this.max,f=r.min,m=r.max,y=0,E=this.dim;y<E;){var w=y++;if(!me.intervalsOverlap(l[w],h[w],f[w],m[w],a))return!1}return!0},clear:function(){return this.initialized=!1,this},getLongestAxis:function(){for(var r=0,a=0,l=0,h=this.dim;l<h;){var f=l++,m=this.getAxisLength(f);m>r&&(r=m,a=f)}return a},getAxisLength:function(r){return r<0||r>this.dim-1?0:Math.abs(this.min[r]-this.max[r])},intersect:function(r,a){if(!this.initialized)return null;var l=this.min,h=this.max,f=r.min,m=r.max;if(!this.intersects(r,a))return null;for(var y=[],E=[],w=0,L=this.dim;w<L;){var R=w++;y.push(Math.min(h[R],m[R])),E.push(Math.max(l[R],f[R]))}return new me([E,y])},__class__:me};var oe=e.core.Constants=function(){};n["verb.core.Constants"]=oe,oe.__name__="verb.core.Constants";var Le=e.core.SerializableBase=function(){};n["verb.core.SerializableBase"]=Le,Le.__name__="verb.core.SerializableBase",Le.prototype={serialize:function(){var r=new g;return r.serialize(this),r.toString()},__class__:Le};var De=e.core.Plane=function(r,a){this.origin=r,this.normal=a};n["verb.core.Plane"]=De,De.__name__="verb.core.Plane",De.__super__=Le,De.prototype=c(Le.prototype,{__class__:De});var ke=e.core.Ray=function(r,a){this.origin=r,this.dir=a};n["verb.core.Ray"]=ke,ke.__name__="verb.core.Ray",ke.__super__=Le,ke.prototype=c(Le.prototype,{__class__:ke});var Ge=e.core.NurbsCurveData=function(r,a,l){this.degree=r,this.controlPoints=l,this.knots=a};n["verb.core.NurbsCurveData"]=Ge,Ge.__name__="verb.core.NurbsCurveData",Ge.__super__=Le,Ge.prototype=c(Le.prototype,{__class__:Ge});var et=e.core.NurbsSurfaceData=function(r,a,l,h,f){this.degreeU=r,this.degreeV=a,this.knotsU=l,this.knotsV=h,this.controlPoints=f};n["verb.core.NurbsSurfaceData"]=et,et.__name__="verb.core.NurbsSurfaceData",et.__super__=Le,et.prototype=c(Le.prototype,{__class__:et});var Dt=e.core.MeshData=function(r,a,l,h){this.faces=r,this.points=a,this.normals=l,this.uvs=h};n["verb.core.MeshData"]=Dt,Dt.__name__="verb.core.MeshData",Dt.empty=function(){return new Dt([],[],[],[])},Dt.__super__=Le,Dt.prototype=c(Le.prototype,{__class__:Dt});var Tt=e.core.PolylineData=function(r,a){this.points=r,this.params=a};n["verb.core.PolylineData"]=Tt,Tt.__name__="verb.core.PolylineData",Tt.__super__=Le,Tt.prototype=c(Le.prototype,{__class__:Tt});var qt=e.core.VolumeData=function(r,a,l,h,f,m,y){this.degreeU=r,this.degreeV=a,this.degreeW=l,this.knotsU=h,this.knotsV=f,this.knotsW=m,this.controlPoints=y};n["verb.core.VolumeData"]=qt,qt.__name__="verb.core.VolumeData",qt.__super__=Le,qt.prototype=c(Le.prototype,{__class__:qt});var j=e.core.Pair=function(r,a){this.item0=r,this.item1=a};n["verb.core.Pair"]=j,j.__name__="verb.core.Pair",j.prototype={__class__:j};var Yt=e.core.Interval=function(r,a){this.min=r,this.max=a};n["verb.core.Interval"]=Yt,Yt.__name__="verb.core.Interval",Yt.prototype={__class__:Yt};var xt=e.core.CurveCurveIntersection=function(r,a,l,h){this.point0=r,this.point1=a,this.u0=l,this.u1=h};n["verb.core.CurveCurveIntersection"]=xt,xt.__name__="verb.core.CurveCurveIntersection",xt.prototype={__class__:xt};var yt=e.core.CurveSurfaceIntersection=function(r,a,l,h){this.u=r,this.uv=a,this.curvePoint=l,this.surfacePoint=h};n["verb.core.CurveSurfaceIntersection"]=yt,yt.__name__="verb.core.CurveSurfaceIntersection",yt.prototype={__class__:yt};var tt=e.core.MeshIntersectionPoint=function(r,a,l,h,f){this.visited=!1,this.adj=null,this.opp=null,this.uv0=r,this.uv1=a,this.point=l};n["verb.core.MeshIntersectionPoint"]=tt,tt.__name__="verb.core.MeshIntersectionPoint",tt.prototype={__class__:tt};var Bt=e.core.PolylineMeshIntersection=function(r,a,l,h,f){this.point=r,this.u=a,this.uv=l,this.polylineIndex=h,this.faceIndex=f};n["verb.core.PolylineMeshIntersection"]=Bt,Bt.__name__="verb.core.PolylineMeshIntersection",Bt.prototype={__class__:Bt};var it=e.core.SurfaceSurfaceIntersectionPoint=function(r,a,l,h){this.uv0=r,this.uv1=a,this.point=l,this.dist=h};n["verb.core.SurfaceSurfaceIntersectionPoint"]=it,it.__name__="verb.core.SurfaceSurfaceIntersectionPoint",it.prototype={__class__:it};var z=e.core.TriSegmentIntersection=function(r,a,l,h){this.point=r,this.s=a,this.t=l,this.p=h};n["verb.core.TriSegmentIntersection"]=z,z.__name__="verb.core.TriSegmentIntersection",z.prototype={__class__:z};var D=e.core.CurveTriPoint=function(r,a,l){this.u=r,this.point=a,this.uv=l};n["verb.core.CurveTriPoint"]=D,D.__name__="verb.core.CurveTriPoint",D.prototype={__class__:D};var re=function(r,a,l,h,f){f==null&&(f=!1),h==null&&(h=-1),this.uv=l,this.point=r,this.normal=a,this.id=h,this.degen=f};n["verb.core.SurfacePoint"]=re,re.__name__="verb.core.SurfacePoint",re.fromUv=function(r,a){return new re(null,null,[r,a])},re.prototype={__class__:re};var be=e.core.CurvePoint=function(r,a){this.u=r,this.pt=a};n["verb.core.CurvePoint"]=be,be.__name__="verb.core.CurvePoint",be.prototype={__class__:be};var we=e.core.KdTree=function(r,a){this.dim=3,this.points=r,this.distanceFunction=a,this.dim=r[0].point.length,this.root=this.buildTree(r,0,null)};n["verb.core.KdTree"]=we,we.__name__="verb.core.KdTree",we.prototype={buildTree:function(r,a,l){var h=a%this.dim;if(r.length==0)return null;if(r.length==1)return new Fe(r[0],h,l);r.sort(function(y,E){var w=y.point[h]-E.point[h];return w==0?0:w>0?1:-1});var f=Math.floor(r.length/2),m=new Fe(r[f],h,l);return m.left=this.buildTree(r.slice(0,f),a+1,m),m.right=this.buildTree(r.slice(f+1),a+1,m),m},nearest:function(r,a,l){var h=this,f=new xe(function(R){return-R.item1}),m=null;m=function(R){for(var I,B=R.dimension,O=h.distanceFunction(r,R.kdPoint.point),ce=[],_e=0,V=h.dim;_e<V;){var J=_e++;ce.push(0)}for(var K=ce,q,J,ie=function(Ce,Te){f.push(new j(Ce,Te)),f.size()>a&&f.pop()},ce=0,_e=h.dim;ce<_e;){var J=ce++;J==R.dimension?K[J]=r[J]:K[J]=R.kdPoint.point[J]}var ye=h.distanceFunction(K,R.kdPoint.point);if(R.right==null&&R.left==null){(f.size()<a||O<f.peek().item1)&&ie(R,O);return}R.right==null?I=R.left:R.left==null?I=R.right:r[B]<R.kdPoint.point[B]?I=R.left:I=R.right,m(I),(f.size()<a||O<f.peek().item1)&&ie(R,O),(f.size()<a||Math.abs(ye)<f.peek().item1)&&(I==R.left?q=R.right:q=R.left,q!=null&&m(q))};for(var w=0,L=a;w<L;){var y=w++;f.push(new j(null,l))}m(this.root);for(var E=[],w=0,L=a;w<L;){var y=w++;f.content[y].item0!=null&&E.push(new j(f.content[y].item0.kdPoint,f.content[y].item1))}return E},__class__:we};var xe=function(r){this.content=[],this.scoreFunction=r};n["verb.core.BinaryHeap"]=xe,xe.__name__="verb.core.BinaryHeap",xe.prototype={push:function(r){this.content.push(r),this.bubbleUp(this.content.length-1)},pop:function(){var r=this.content[0],a=this.content.pop();return this.content.length>0&&(this.content[0]=a,this.sinkDown(0)),r},peek:function(){return this.content[0]},remove:function(r){for(var a=this.content.length,l=0,h=a;l<h;){var f=l++;if(this.content[f]==r){var m=this.content.pop();f!=a-1&&(this.content[f]=m,this.scoreFunction(m)<this.scoreFunction(r)?this.bubbleUp(f):this.sinkDown(f));return}}throw x.thrown("Node not found.")},size:function(){return this.content.length},bubbleUp:function(r){for(var a=this.content[r];r>0;){var l=Math.floor((r+1)/2)-1,h=this.content[l];if(this.scoreFunction(a)<this.scoreFunction(h))this.content[l]=a,this.content[r]=h,r=l;else break}},sinkDown:function(r){for(var a=this.content.length,l=this.content[r],h=this.scoreFunction(l);;){var f=(r+1)*2,m=f-1,y=-1,E=0;if(m<a){var w=this.content[m];E=this.scoreFunction(w),E<h&&(y=m)}if(f<a){var L=this.content[f],R=this.scoreFunction(L);R<(y==-1?h:E)&&(y=f)}if(y!=-1)this.content[r]=this.content[y],this.content[y]=l,r=y;else break}},__class__:xe};var je=e.core.KdPoint=function(r,a){this.point=r,this.obj=a};n["verb.core.KdPoint"]=je,je.__name__="verb.core.KdPoint",je.prototype={__class__:je};var Fe=e.core.KdNode=function(r,a,l){this.kdPoint=r,this.left=null,this.right=null,this.parent=l,this.dimension=a};n["verb.core.KdNode"]=Fe,Fe.__name__="verb.core.KdNode",Fe.prototype={__class__:Fe};var Be=function(){};n["verb.eval.IBoundingBoxTree"]=Be,Be.__name__="verb.eval.IBoundingBoxTree",Be.__isInterface__=!0,Be.prototype={__class__:Be};var _t=function(r,a){if(this._boundingBox=null,this._curve=r,a==null){var l=this._curve.knots;a=(de.last(l)-de.first(l))/64}this._knotTol=a};n["verb.core.LazyCurveBoundingBoxTree"]=_t,_t.__name__="verb.core.LazyCurveBoundingBoxTree",_t.__interfaces__=[Be],_t.prototype={split:function(){var r=de.first(this._curve.knots),a=de.last(this._curve.knots),l=a-r,h=Ut.curveSplit(this._curve,(a+r)/2+l*.1*Math.random());return new j(new _t(h[0],this._knotTol),new _t(h[1],this._knotTol))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=new me(Y.dehomogenize1d(this._curve.controlPoints))),this._boundingBox},yield:function(){return this._curve},indivisible:function(r){var a=this._curve.knots;return de.last(a)-de.first(a)<this._knotTol},empty:function(){return!1},__class__:_t};var Ae=function(r,a){if(this._boundingBox=null,this._mesh=r,a==null){for(var l=[],h=0,f=r.faces.length;h<f;){var m=h++;l.push(m)}a=l}this._faceIndices=a};n["verb.core.LazyMeshBoundingBoxTree"]=Ae,Ae.__name__="verb.core.LazyMeshBoundingBoxTree",Ae.__interfaces__=[Be],Ae.prototype={split:function(){var r=rt.sortTrianglesOnLongestAxis(this.boundingBox(),this._mesh,this._faceIndices),a=de.left(r),l=de.right(r);return new j(new Ae(this._mesh,a),new Ae(this._mesh,l))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=rt.makeMeshAabb(this._mesh,this._faceIndices)),this._boundingBox},yield:function(){return this._faceIndices[0]},indivisible:function(r){return this._faceIndices.length==1},empty:function(){return this._faceIndices.length==0},__class__:Ae};var Ve=function(r,a){this._boundingBox=null,this._polyline=r,a==null&&(a=new Yt(0,r.points.length!=0?r.points.length-1:0)),this._interval=a};n["verb.core.LazyPolylineBoundingBoxTree"]=Ve,Ve.__name__="verb.core.LazyPolylineBoundingBoxTree",Ve.__interfaces__=[Be],Ve.prototype={split:function(){var r=this._interval.min,a=this._interval.max,l=r+Math.ceil((a-r)/2),h=new Yt(r,l),f=new Yt(l,a);return new j(new Ve(this._polyline,h),new Ve(this._polyline,f))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=new me(this._polyline.points)),this._boundingBox},yield:function(){return this._interval.min},indivisible:function(r){return this._interval.max-this._interval.min==1},empty:function(){return this._interval.max-this._interval.min==0},__class__:Ve};var nt=function(r,a,l,h){if(a==null&&(a=!1),this._boundingBox=null,this._surface=r,this._splitV=a,l==null){var f=r.knotsU;l=(de.last(f)-de.first(f))/16}if(h==null){var f=r.knotsV;h=(de.last(f)-de.first(f))/16}this._knotTolU=l,this._knotTolV=h};n["verb.core.LazySurfaceBoundingBoxTree"]=nt,nt.__name__="verb.core.LazySurfaceBoundingBoxTree",nt.__interfaces__=[Be],nt.prototype={split:function(){var r,a;this._splitV?(r=de.first(this._surface.knotsV),a=de.last(this._surface.knotsV)):(r=de.first(this._surface.knotsU),a=de.last(this._surface.knotsU));var l=(r+a)/2,h=Ut.surfaceSplit(this._surface,l,this._splitV);return new j(new nt(h[0],!this._splitV,this._knotTolU,this._knotTolV),new nt(h[1],!this._splitV,this._knotTolU,this._knotTolV))},boundingBox:function(){if(this._boundingBox==null){this._boundingBox=new me;for(var r=0,a=this._surface.controlPoints;r<a.length;){var l=a[r];++r,this._boundingBox.addRange(Y.dehomogenize1d(l))}}return this._boundingBox},yield:function(){return this._surface},indivisible:function(r){var a=this._surface.knotsV;if(de.last(a)-de.first(a)<this._knotTolV){var a=this._surface.knotsU;return de.last(a)-de.first(a)<this._knotTolU}else return!1},empty:function(){return!1},__class__:nt};var Ie=e.core.Mat=function(){};n["verb.core.Mat"]=Ie,Ie.__name__="verb.core.Mat",Ie.mul=function(r,a){for(var l=[],h=0,f=a.length;h<f;){var m=h++;l.push(v.mul(r,a[m]))}return l},Ie.mult=function(r,a){for(var l,h,f,m,y=r.length,E=a.length,w=a[0].length,L=[],R=y-1,I=0,B=0;R>=0;){for(l=[],h=r[R],B=w-1;B>=0;){for(f=h[E-1]*a[E-1][B],I=E-2;I>=1;)m=I-1,f+=h[I]*a[I][B]+h[m]*a[m][B],I-=2;I==0&&(f+=h[0]*a[0][B]),l[B]=f,--B}L[R]=l,--R}return L},Ie.add=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(v.add(r[m],a[m]))}return l},Ie.div=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(v.div(r[m],a))}return l},Ie.sub=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(v.sub(r[m],a[m]))}return l},Ie.dot=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(v.dot(r[m],a))}return l},Ie.identity=function(r){for(var a=v.zeros2d(r,r),l=0,h=r;l<h;){var f=l++;a[f][f]=1}return a},Ie.transpose=function(r){if(r.length==0)return[];for(var a=[],l=0,h=r[0].length;l<h;){for(var f=l++,m=[],y=0,E=r.length;y<E;){var w=y++;m.push(r[w][f])}a.push(m)}return a},Ie.solve=function(r,a){return Ie.LUsolve(Ie.LU(r),a)},Ie.LUsolve=function(r,a){for(var l,h=r.LU,f=h.length,m=a.slice(),y=r.P,E,w,L,R=f-1;R!=-1;)m[R]=a[R],--R;for(R=0;R<f;){for(E=y[R],y[R]!=R&&(L=m[R],m[R]=m[E],m[E]=L),w=h[R],l=0;l<R;)m[R]-=m[l]*w[l],++l;++R}for(R=f-1;R>=0;){for(w=h[R],l=R+1;l<f;)m[R]-=m[l]*w[l],++l;m[R]/=w[R],--R}return m},Ie.LU=function(r){for(var a,l,h,f,m,y,E,w,L=[],R=0,I=r.length;R<I;){var B=R++;L.push(r[B].slice())}r=L;for(var O=r.length,V=O-1,K=[],q=0;q<O;){for(y=q,m=r[q],w=Math.abs(m[q]),l=q+1;l<O;)h=Math.abs(r[l][q]),w<h&&(w=h,y=l),++l;for(K[q]=y,y!=q&&(r[q]=r[y],r[y]=m,m=r[q]),f=m[q],a=q+1;a<O;)r[a][q]/=f,++a;for(a=q+1;a<O;){for(E=r[a],l=q+1;l<V;)E[l]-=E[q]*m[l],++l,E[l]-=E[q]*m[l],++l;l==V&&(E[l]-=E[q]*m[l]),++a}++q}return new We(r,K)};var We=function(r,a){this.LU=r,this.P=a};n["verb.core._Mat.LUDecomp"]=We,We.__name__="verb.core._Mat.LUDecomp",We.prototype={__class__:We};var rt=e.core.Mesh=function(){};n["verb.core.Mesh"]=rt,rt.__name__="verb.core.Mesh",rt.getTriangleNorm=function(r,a){var l=r[a[0]],h=r[a[1]],f=r[a[2]],m=v.sub(h,l),y=v.sub(f,l),E=v.cross(m,y);return v.mul(1/v.norm(E),E)},rt.makeMeshAabb=function(r,a){for(var l=new me,h=0;h<a.length;){var f=a[h];++h,l.add(r.points[r.faces[f][0]]),l.add(r.points[r.faces[f][1]]),l.add(r.points[r.faces[f][2]])}return l},rt.sortTrianglesOnLongestAxis=function(r,a,l){for(var h=r.getLongestAxis(),f=[],w=0;w<l.length;){var m=l[w];++w;var y=rt.getMinCoordOnAxis(a.points,a.faces[m],h);f.push(new j(y,m))}f.sort(function(I,B){var O=I.item0,V=B.item0;return O==V?0:O>V?1:-1});for(var E=[],w=0,L=f.length;w<L;){var R=w++;E.push(f[R].item1)}return E},rt.getMinCoordOnAxis=function(r,a,l){var h=1/0,f=r[a[0]][l];f<h&&(h=f);var f=r[a[1]][l];f<h&&(h=f);var f=r[a[2]][l];return f<h&&(h=f),h},rt.getTriangleCentroid=function(r,a){var l=[0,0,0];return l[0]+=r[a[0]][0],l[1]+=r[a[0]][1],l[2]+=r[a[0]][2],l[0]+=r[a[1]][0],l[1]+=r[a[1]][1],l[2]+=r[a[1]][2],l[0]+=r[a[2]][0],l[1]+=r[a[2]][1],l[2]+=r[a[2]][2],l[0]/=3,l[1]/=3,l[2]/=3,l},rt.triangleUVFromPoint=function(r,a,l){var h=r.faces[a],f=r.points[h[0]],m=r.points[h[1]],y=r.points[h[2]],E=r.uvs[h[0]],w=r.uvs[h[1]],L=r.uvs[h[2]],R=v.sub(f,l),I=v.sub(m,l),B=v.sub(y,l),O=v.norm(v.cross(v.sub(f,m),v.sub(f,y))),V=v.norm(v.cross(I,B))/O,K=v.norm(v.cross(B,R))/O,q=v.norm(v.cross(R,I))/O;return v.add(v.mul(V,E),v.add(v.mul(K,w),v.mul(q,L)))};var ut=function(r,a){if(this._empty=!1,this._face=-1,a==null){for(var l=[],h=0,f=r.faces.length;h<f;){var m=h++;l.push(m)}a=l}if(this._boundingBox=rt.makeMeshAabb(r,a),a.length<1){this._empty=!0;return}else if(a.length<2){this._face=a[0];return}var y=rt.sortTrianglesOnLongestAxis(this._boundingBox,r,a),E=de.left(y),w=de.right(y);this._children=new j(new ut(r,E),new ut(r,w))};n["verb.core.MeshBoundingBoxTree"]=ut,ut.__name__="verb.core.MeshBoundingBoxTree",ut.__interfaces__=[Be],ut.prototype={split:function(){return this._children},boundingBox:function(){return this._boundingBox},yield:function(){return this._face},indivisible:function(r){return this._children==null},empty:function(){return this._empty},__class__:ut};var Ct=e.core.Minimizer=function(){};n["verb.core.Minimizer"]=Ct,Ct.__name__="verb.core.Minimizer",Ct.uncmin=function(r,a,l,h,f){l==null&&(l=1e-8),h==null&&(h=function(Ce){return Ct.numericalGradient(r,Ce)}),f==null&&(f=1e3),a=a.slice(0);var m=a.length,y=r(a),E=y,w;if(isNaN(y))throw x.thrown("uncmin: f(x0) is a NaN!");l=Math.max(l,oe.EPSILON);for(var L,R,I=Ie.identity(m),B=0,O=[],V,K,q,J,ie,ce,_e="",ye=h(a);B<f;){if(!v.all(v.finite(ye))){_e="Gradient has Infinity or NaN";break}if(L=v.neg(Ie.dot(I,ye)),!v.all(v.finite(L))){_e="Search direction has Infinity or NaN";break}if(ce=v.norm(L),ce<l){_e="Newton step smaller than tol";break}for(ie=1,w=v.dot(ye,L),V=a;B<f&&!(ie*ce<l);){if(O=v.mul(ie,L),V=v.add(a,O),E=r(V),E-y>=.1*ie*w||isNaN(E)){ie*=.5,++B;continue}break}if(ie*ce<l){_e="Line search step size smaller than tol";break}if(B==f){_e="maxit reached during line search";break}R=h(V),K=v.sub(R,ye),J=v.dot(K,O),q=Ie.dot(I,K),I=Ie.sub(Ie.add(I,Ie.mul((J+v.dot(K,q))/(J*J),Ct.tensor(O,O))),Ie.div(Ie.add(Ct.tensor(q,O),Ct.tensor(O,q)),J)),a=V,y=E,ye=R,++B}return new Q(a,y,ye,I,B,_e)},Ct.numericalGradient=function(r,a){var l=a.length,h=r(a);if(h==NaN)throw x.thrown("gradient: f(x) is a NaN!");for(var f,m=a.slice(0),y,E,w=[],L,R=.001,I,B,O,V=0,K,q,J,ie=0,ce=l;ie<ce;)for(var f=ie++,_e=Math.max(1e-6*h,1e-8);;){if(++V,V>20)throw x.thrown("Numerical gradient fails");if(m[f]=a[f]+_e,y=r(m),m[f]=a[f]-_e,E=r(m),m[f]=a[f],isNaN(y)||isNaN(E)){_e/=16;continue}if(w[f]=(y-E)/(2*_e),I=a[f]-_e,B=a[f],O=a[f]+_e,K=(y-h)/_e,q=(h-E)/_e,J=v.max([Math.abs(w[f]),Math.abs(h),Math.abs(y),Math.abs(E),Math.abs(I),Math.abs(B),Math.abs(O),1e-8]),L=Math.min(v.max([Math.abs(K-w[f]),Math.abs(q-w[f]),Math.abs(K-q)])/J,_e/J),L>R)_e/=16;else break}return w},Ct.tensor=function(r,a){for(var l=r.length,h=a.length,f=[],m,y,E=l-1;E>=0;){m=[],y=r[E];for(var w=h-1;w>=3;)m[w]=y*a[w],--w,m[w]=y*a[w],--w,m[w]=y*a[w],--w,m[w]=y*a[w],--w;for(;w>=0;)m[w]=y*a[w],--w;f[E]=m,--E}return f};var Q=function(r,a,l,h,f,m){this.solution=r,this.value=a,this.gradient=l,this.invHessian=h,this.iterations=f,this.message=m};n["verb.core.MinimizationResult"]=Q,Q.__name__="verb.core.MinimizationResult",Q.prototype={__class__:Q};var Ue=function(){};n["verb.core.ISerializable"]=Ue,Ue.__name__="verb.core.ISerializable",Ue.__isInterface__=!0,Ue.prototype={__class__:Ue};var pe=e.core.Deserializer=function(){};n["verb.core.Deserializer"]=pe,pe.__name__="verb.core.Deserializer",pe.deserialize=function(r){var a=new F(r),l=a.unserialize();return l};var ge=e.core.Trig=function(){};n["verb.core.Trig"]=ge,ge.__name__="verb.core.Trig",ge.isPointInPlane=function(r,a,l){return Math.abs(v.dot(v.sub(r,a.origin),a.normal))<l},ge.distToSegment=function(r,a,l){var h=ge.segmentClosestPoint(a,r,l,0,1);return v.dist(a,h.pt)},ge.rayClosestPoint=function(r,a,l){var h=v.sub(r,a),f=v.dot(h,l),m=v.add(a,v.mul(f,l));return m},ge.distToRay=function(r,a,l){var h=ge.rayClosestPoint(r,a,l),f=v.sub(h,r);return v.norm(f)},ge.threePointsAreFlat=function(r,a,l,h){var f=v.sub(a,r),m=v.sub(l,r),y=v.cross(f,m),E=v.dot(y,y);return E<h},ge.segmentClosestPoint=function(r,a,l,h,f){var m=v.sub(l,a),y=v.norm(m);if(y<oe.EPSILON)return{u:h,pt:a};var E=a,w=v.mul(1/y,m),L=v.sub(r,E),R=v.dot(L,w);return R<0?{u:h,pt:a}:R>y?{u:f,pt:l}:{u:h+(f-h)*R/y,pt:v.add(E,v.mul(R,w))}};var v=e.core.Vec=function(){};n["verb.core.Vec"]=v,v.__name__="verb.core.Vec",v.angleBetween=function(r,a){return Math.acos(v.dot(r,a)/(v.norm(r)*v.norm(a)))},v.positiveAngleBetween=function(r,a,l){var h=v.cross(r,a),f=v.norm(r),m=v.norm(a),y=f*m,E=v.dot(r,a),w=v.norm(h)/y,L=E/y,R=Math.atan2(w,L),I=v.dot(l,h);return Math.abs(I)<oe.EPSILON||I>0?R:-R},v.signedAngleBetween=function(r,a,l){var h=v.cross(r,a),f=v.norm(r),m=v.norm(a),y=f*m,E=v.dot(r,a),w=v.norm(h)/y,L=E/y,R=Math.atan2(w,L),I=v.dot(l,h);return I>0?R:2*Math.PI-R},v.angleBetweenNormalized2d=function(r,a){var l=r[0]*a[1]-r[1]*a[0];return Math.atan2(l,v.dot(r,a))},v.domain=function(r){return de.last(r)-de.first(r)},v.range=function(r){for(var a=[],l=0,h=0,f=r;h<f;)h++,a.push(l),l+=1;return a},v.span=function(r,a,l){if(l==null)return[];if(l<oe.EPSILON)return[];if(r>a&&l>0)return[];if(a>r&&l<0)return[];for(var h=[],f=r;f<=a;)h.push(f),f+=l;return h},v.neg=function(r){for(var a=new Array(r.length),l=0,h=r.length;l<h;){var f=l++;a[f]=-r[f]}return a},v.min=function(r){return p.fold(r,function(a,l){return Math.min(a,l)},1/0)},v.max=function(r){return p.fold(r,function(a,l){return Math.max(a,l)},-1/0)},v.all=function(r){return p.fold(r,function(a,l){return l?a:!1},!0)},v.finite=function(r){for(var a=new Array(r.length),l=0,h=r.length;l<h;){var f=l++;a[f]=isFinite(r[f])}return a},v.onRay=function(r,a,l){return v.add(r,v.mul(l,a))},v.lerp=function(r,a,l){return v.add(v.mul(r,a),v.mul(1-r,l))},v.normalized=function(r){return v.div(r,v.norm(r))},v.cross=function(r,a){return[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]]},v.dist=function(r,a){return v.norm(v.sub(r,a))},v.distSquared=function(r,a){return v.normSquared(v.sub(r,a))},v.sum=function(r){return p.fold(r,function(a,l){return l+a},0)},v.addAll=function(r){var a=Oe(r);if(!a.hasNext())return null;var l=a.next().length;return p.fold(r,function(h,f){return v.add(f,h)},v.rep(l,0))},v.addAllMutate=function(r){for(var a=r[0],l=1,h=r.length;l<h;){var f=l++;v.addMutate(a,r[f])}},v.addMulMutate=function(r,a,l){for(var h=0,f=r.length;h<f;){var m=h++;r[m]+=a*l[m]}},v.subMulMutate=function(r,a,l){for(var h=0,f=r.length;h<f;){var m=h++;r[m]-=a*l[m]}},v.addMutate=function(r,a){for(var l=0,h=r.length;l<h;){var f=l++;r[f]+=a[f]}},v.subMutate=function(r,a){for(var l=0,h=r.length;l<h;){var f=l++;r[f]-=a[f]}},v.mulMutate=function(r,a){for(var l=0,h=a.length;l<h;){var f=l++;a[f]*=r}},v.norm=function(r){var a=v.normSquared(r);return a!=0?Math.sqrt(a):a},v.normSquared=function(r){return p.fold(r,function(a,l){return l+a*a},0)},v.rep=function(r,a){for(var l=[],h=0,f=r;h<f;)h++,l.push(a);return l},v.zeros1d=function(r){for(var a=[],l=0,h=r;l<h;)l++,a.push(0);return a},v.zeros2d=function(r,a){for(var l=[],h=0,f=r;h<f;)h++,l.push(v.zeros1d(a));return l},v.zeros3d=function(r,a,l){for(var h=[],f=0,m=r;f<m;)f++,h.push(v.zeros2d(a,l));return h},v.dot=function(r,a){for(var l=0,h=0,f=r.length;h<f;){var m=h++;l+=r[m]*a[m]}return l},v.add=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(r[m]+a[m])}return l},v.mul=function(r,a){for(var l=[],h=0,f=a.length;h<f;){var m=h++;l.push(r*a[m])}return l},v.div=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(r[m]/a)}return l},v.sub=function(r,a){for(var l=[],h=0,f=r.length;h<f;){var m=h++;l.push(r[m]-a[m])}return l},v.isZero=function(r){for(var a=0,l=r.length;a<l;){var h=a++;if(Math.abs(r[h])>oe.TOLERANCE)return!1}return!0},v.sortedSetUnion=function(r,a){for(var l=[],h=0,f=0;h<r.length||f<a.length;){if(h>=r.length){l.push(a[f]),++f;continue}else if(f>=a.length){l.push(r[h]),++h;continue}var m=r[h]-a[f];if(Math.abs(m)<oe.EPSILON){l.push(r[h]),++h,++f;continue}if(m>0){l.push(a[f]),++f;continue}l.push(r[h]),++h}return l},v.sortedSetSub=function(r,a){for(var l=[],h=0,f=0;h<r.length;){if(f>=a.length){l.push(r[h]),++h;continue}if(Math.abs(r[h]-a[f])<oe.EPSILON){++h,++f;continue}l.push(r[h]),++h}return l};var Se=e.eval.Analyze=function(){};n["verb.eval.Analyze"]=Se,Se.__name__="verb.eval.Analyze",Se.knotMultiplicities=function(r){for(var a=[new ft(r[0],0)],l=a[0],h=0;h<r.length;){var f=r[h];++h,Math.abs(f-l.knot)>oe.EPSILON&&(l=new ft(f,0),a.push(l)),l.inc()}return a},Se.isRationalSurfaceClosed=function(r,a){a==null&&(a=!0);for(var l=a?r.controlPoints:Ie.transpose(r.controlPoints),h=0,f=l[0].length;h<f;){var m=h++,y=v.dist(de.first(l)[m],de.last(l)[m])<oe.EPSILON;if(!y)return!1}return!0},Se.rationalSurfaceClosestPoint=function(r,a){var l=Se.rationalSurfaceClosestParam(r,a);return Y.rationalSurfacePoint(r,l[0],l[1])},Se.rationalSurfaceClosestParam=function(r,a){for(var l=5,h=0,f,m=1e-4,y=5e-4,E,w=r.knotsU[0],L=de.last(r.knotsU),R=r.knotsV[0],I=de.last(r.knotsV),B=Se.isRationalSurfaceClosed(r),O=Se.isRationalSurfaceClosed(r,!1),V=[0,0],K=bt.rationalSurfaceAdaptive(r,new Fn),q=1/0,J=0,ie=K.points.length;J<ie;){var ce=J++,_e=K.points[ce],ye=v.normSquared(v.sub(a,_e));ye<q&&(q=ye,V=K.uvs[ce])}for(var Ce=function(tn){return Y.rationalSurfaceDerivatives(r,tn[0],tn[1],2)},Te=function(tn,xn,Dn){var kn=xn[1][0],bn=xn[0][1],si=xn[2][0],mi=xn[0][2],is=xn[1][1],ws=xn[1][1],Ts=v.dot(kn,Dn),As=v.dot(bn,Dn),Cs=[-Ts,-As],Pa=v.dot(kn,kn)+v.dot(si,Dn),Rs=v.dot(kn,bn)+v.dot(is,Dn),La=v.dot(kn,bn)+v.dot(ws,Dn),rs=v.dot(bn,bn)+v.dot(mi,Dn),ai=[[Pa,Rs],[La,rs]],Ci=Ie.solve(ai,Cs);return v.add(Ci,tn)};h<l;){f=Ce(V),E=v.sub(f[0][0],a);var Pe=v.norm(E),st=v.dot(f[1][0],E),Ke=v.norm(f[1][0])*Pe,Xe=v.dot(f[0][1],E),ot=v.norm(f[0][1])*Pe,ht=st/Ke,gt=Xe/ot,At=Pe<m,en=ht<y,Ht=gt<y;if(At&&en&&Ht)return V;var Mt=Te(V,f,E);Mt[0]<w?Mt=B?[L-(Mt[0]-w),Mt[1]]:[w+oe.EPSILON,Mt[1]]:Mt[0]>L&&(Mt=B?[w+(Mt[0]-L),Mt[1]]:[L-oe.EPSILON,Mt[1]]),Mt[1]<R?Mt=O?[Mt[0],I-(Mt[1]-R)]:[Mt[0],R+oe.EPSILON]:Mt[1]>I&&(Mt=O?[Mt[0],R+(Mt[0]-I)]:[Mt[0],I-oe.EPSILON]);var kt=v.norm(v.mul(Mt[0]-V[0],f[1][0])),hn=v.norm(v.mul(Mt[1]-V[1],f[0][1]));if(kt+hn<m)return V;V=Mt,++h}return V},Se.rationalCurveClosestPoint=function(r,a){return Y.rationalCurvePoint(r,Se.rationalCurveClosestParam(r,a))},Se.rationalCurveClosestParam=function(r,a){for(var l=1/0,h=0,f=bt.rationalCurveRegularSample(r,r.controlPoints.length*r.degree,!0),m=0,y=f.length-1;m<y;){var V=m++,E=f[V][0],w=f[V+1][0],L=f[V].slice(1),R=f[V+1].slice(1),I=ge.segmentClosestPoint(a,L,R,E,w),B=v.norm(v.sub(a,I.pt));B<l&&(l=B,h=I.u)}for(var O=5,V=0,K,q=1e-4,J=5e-4,ie,ce=r.knots[0],_e=de.last(r.knots),ye=v.normSquared(v.sub(r.controlPoints[0],de.last(r.controlPoints)))<oe.EPSILON,Ce=h,Te=function(Ht){return Y.rationalCurveDerivatives(r,Ht,2)},Pe=function(Ht,Mt,kt){var hn=v.dot(Mt[1],kt),tn=v.dot(Mt[2],kt),xn=v.dot(Mt[1],Mt[1]),Dn=tn+xn;return Ht-hn/Dn};V<O;){K=Te(Ce),ie=v.sub(K[0],a);var st=v.norm(ie),Ke=v.dot(K[1],ie),Xe=v.norm(K[1])*st,ot=Ke/Xe,ht=st<q,gt=Math.abs(ot)<J;if(ht&&gt)return Ce;var At=Pe(Ce,K,ie);At<ce?At=ye?_e-(At-ce):ce:At>_e&&(At=ye?ce+(At-_e):_e);var en=v.norm(v.mul(At-Ce,K[1]));if(en<q)return Ce;Ce=At,++V}return Ce},Se.rationalCurveParamAtArcLength=function(r,a,l,h,f){if(l==null&&(l=.001),a<oe.EPSILON)return r.knots[0];var m=h??dt.decomposeCurveIntoBeziers(r),y=0;m[y];for(var E=-oe.EPSILON,w=f??[];E<a&&y<m.length;){if(w[y]=y<w.length?w[y]:Se.rationalBezierCurveArcLength(r),E+=w[y],a<E+oe.EPSILON)return Se.rationalBezierCurveParamAtArcLength(r,a,l,w[y]);++y}return-1},Se.rationalBezierCurveParamAtArcLength=function(r,a,l,h){if(a<0)return r.knots[0];var f=h??Se.rationalBezierCurveArcLength(r);if(a>f)return de.last(r.knots);for(var m=r.knots[0],y=0,E=de.last(r.knots),w=f,L=0,R=0,I=l??oe.TOLERANCE*2;w-y>I;)L=(m+E)/2,R=Se.rationalBezierCurveArcLength(r,L),R>a?(E=L,w=R):(m=L,y=R);return(m+E)/2},Se.rationalCurveArcLength=function(r,a,l){l==null&&(l=16),a==null&&(a=de.last(r.knots));for(var h=dt.decomposeCurveIntoBeziers(r),f=0,m=h[0],y=0;f<h.length&&m.knots[0]+oe.EPSILON<a;){var E=Math.min(de.last(m.knots),a);y+=Se.rationalBezierCurveArcLength(m,E,l),m=h[++f]}return y},Se.rationalBezierCurveArcLength=function(r,a,l){l==null&&(l=16);for(var h=a??de.last(r.knots),f=(h-r.knots[0])/2,m=0,y=r.degree+l,E,w,L=0,R=y;L<R;){var I=L++;E=f*Se.Tvalues[y][I]+f+r.knots[0],w=Y.rationalCurveDerivatives(r,E,1),m+=Se.Cvalues[y][I]*v.norm(w[1])}return f*m};var ft=e.eval.KnotMultiplicity=function(r,a){this.knot=r,this.mult=a};n["verb.eval.KnotMultiplicity"]=ft,ft.__name__="verb.eval.KnotMultiplicity",ft.prototype={inc:function(){this.mult++},__class__:ft};var It=e.eval.Check=function(){};n["verb.eval.Check"]=It,It.__name__="verb.eval.Check",It.isValidKnotVector=function(r,a){if(r.length==0||r.length<(a+1)*2)return!1;for(var l=de.first(r),f=0,m=a+1;f<m;){var h=f++;if(Math.abs(r[h]-l)>oe.EPSILON)return!1}l=de.last(r);for(var f=r.length-a-1,m=r.length;f<m;){var h=f++;if(Math.abs(r[h]-l)>oe.EPSILON)return!1}return It.isNonDecreasing(r)},It.isNonDecreasing=function(r){for(var a=de.first(r),l=0,h=r.length;l<h;){var f=l++;if(r[f]<a-oe.EPSILON)return!1;a=r[f]}return!0},It.isValidNurbsCurveData=function(r){if(r.controlPoints==null)throw x.thrown("Control points array cannot be null!");if(r.degree==null)throw x.thrown("Degree cannot be null!");if(r.degree<1)throw x.thrown("Degree must be greater than 1!");if(r.knots==null)throw x.thrown("Knots cannot be null!");if(r.knots.length!=r.controlPoints.length+r.degree+1)throw x.thrown("controlPoints.length + degree + 1 must equal knots.length!");if(!It.isValidKnotVector(r.knots,r.degree))throw x.thrown("Invalid knot vector format!  Should begin with degree + 1 repeats and end with degree + 1 repeats!");return r},It.isValidNurbsSurfaceData=function(r){if(r.controlPoints==null)throw x.thrown("Control points array cannot be null!");if(r.degreeU==null)throw x.thrown("DegreeU cannot be null!");if(r.degreeV==null)throw x.thrown("DegreeV cannot be null!");if(r.degreeU<1)throw x.thrown("DegreeU must be greater than 1!");if(r.degreeV<1)throw x.thrown("DegreeV must be greater than 1!");if(r.knotsU==null)throw x.thrown("KnotsU cannot be null!");if(r.knotsV==null)throw x.thrown("KnotsV cannot be null!");if(r.knotsU.length!=r.controlPoints.length+r.degreeU+1)throw x.thrown("controlPointsU.length + degreeU + 1 must equal knotsU.length!");if(r.knotsV.length!=r.controlPoints[0].length+r.degreeV+1)throw x.thrown("controlPointsV.length + degreeV + 1 must equal knotsV.length!");if(!It.isValidKnotVector(r.knotsU,r.degreeU)||!It.isValidKnotVector(r.knotsV,r.degreeV))throw x.thrown("Invalid knot vector format!  Should begin with degree + 1 repeats and end with degree + 1 repeats!");return r};var Ut=e.eval.Divide=function(){};n["verb.eval.Divide"]=Ut,Ut.__name__="verb.eval.Divide",Ut.surfaceSplit=function(r,a,l){l==null&&(l=!1);var h,f,m;l?(m=r.controlPoints,h=r.knotsV,f=r.degreeV):(m=Ie.transpose(r.controlPoints),h=r.knotsU,f=r.degreeU);for(var O=[],y=0,E=f+1;y<E;)y++,O.push(a);for(var w=O,L=[],R=[],I=Y.knotSpan(f,a,h),B=null,O=0;O<m.length;){var V=m[O];++O,B=dt.curveKnotRefine(new Ge(f,h,V),w),L.push(B.controlPoints.slice(0,I+1)),R.push(B.controlPoints.slice(I+1))}var K=B.knots.slice(0,I+f+2),q=B.knots.slice(I+1);return l?[new et(r.degreeU,f,r.knotsU.slice(),K,L),new et(r.degreeU,f,r.knotsU.slice(),q,R)]:(L=Ie.transpose(L),R=Ie.transpose(R),[new et(f,r.degreeV,K,r.knotsV.slice(),L),new et(f,r.degreeV,q,r.knotsV.slice(),R)])},Ut.curveSplit=function(r,a){var l=r.degree;r.controlPoints;for(var h=r.knots,f=[],m=0,y=l+1;m<y;)m++,f.push(a);var E=f,w=dt.curveKnotRefine(r,E),L=Y.knotSpan(l,a,h),R=w.knots.slice(0,L+l+2),I=w.knots.slice(L+1),B=w.controlPoints.slice(0,L+1),O=w.controlPoints.slice(L+1);return[new Ge(l,R,B),new Ge(l,I,O)]},Ut.rationalCurveByEqualArcLength=function(r,a){var l=Se.rationalCurveArcLength(r),h=l/a;return Ut.rationalCurveByArcLength(r,h)},Ut.rationalCurveByArcLength=function(r,a){for(var l=dt.decomposeCurveIntoBeziers(r),h=new Array(l.length),f=0,m=l.length;f<m;){var R=f++;h[R]=Se.rationalBezierCurveArcLength(l[R])}var y=h,E=v.sum(y),w=[new Lt(r.knots[0],0)];if(a>E)return w;for(var L=a,R=0,I=L,B=0,O=0,V;R<l.length;){for(B+=y[R];I<B+oe.EPSILON;)V=Se.rationalBezierCurveParamAtArcLength(l[R],I-O,oe.TOLERANCE,y[R]),w.push(new Lt(V,I)),I+=L;O+=y[R],++R}return w};var Lt=e.eval.CurveLengthSample=function(r,a){this.u=r,this.len=a};n["verb.eval.CurveLengthSample"]=Lt,Lt.__name__="verb.eval.CurveLengthSample",Lt.prototype={__class__:Lt};var Y=e.eval.Eval=function(){};n["verb.eval.Eval"]=Y,Y.__name__="verb.eval.Eval",Y.rationalCurveTangent=function(r,a){var l=Y.rationalCurveDerivatives(r,a,1);return l[1]},Y.rationalSurfaceNormal=function(r,a,l){var h=Y.rationalSurfaceDerivatives(r,a,l,1);return v.cross(h[1][0],h[0][1])},Y.rationalSurfaceDerivatives=function(r,a,l,h){h==null&&(h=1);for(var f=Y.surfaceDerivatives(r,a,l,h),m=Y.rational2d(f),y=Y.weight2d(f),E=[],w=m[0][0].length,L=0,R=h+1;L<R;){var I=L++;E.push([]);for(var B=0,O=h-I+1;B<O;){for(var V=B++,l=m[I][V],K=1,q=V+1;K<q;){var J=K++;v.subMulMutate(l,Ze.get(V,J)*y[0][J],E[I][V-J])}for(var ie=1,ce=I+1;ie<ce;){var _e=ie++;v.subMulMutate(l,Ze.get(I,_e)*y[_e][0],E[I-_e][V]);for(var ye=v.zeros1d(w),Ce=1,Te=V+1;Ce<Te;){var Pe=Ce++;v.addMulMutate(ye,Ze.get(V,Pe)*y[_e][Pe],E[I-_e][V-Pe])}v.subMulMutate(l,Ze.get(I,_e),ye)}v.mulMutate(1/y[0][0],l),E[I].push(l)}}return E},Y.rationalSurfacePoint=function(r,a,l){return Y.dehomogenize(Y.surfacePoint(r,a,l))},Y.rationalCurveDerivatives=function(r,a,l){l==null&&(l=1);for(var h=Y.curveDerivatives(r,a,l),f=Y.rational1d(h),m=Y.weight1d(h),y=0,E=0,w=[],L=0,R=l+1;L<R;){for(var y=L++,I=f[y],B=1,O=y+1;B<O;){var E=B++;v.subMulMutate(I,Ze.get(y,E)*m[E],w[y-E])}v.mulMutate(1/m[0],I),w.push(I)}return w},Y.rationalCurvePoint=function(r,a){return Y.dehomogenize(Y.curvePoint(r,a))},Y.surfaceDerivatives=function(r,a,l,h){var f=r.knotsU.length-r.degreeU-2,m=r.knotsV.length-r.degreeV-2;return Y.surfaceDerivativesGivenNM(f,m,r,a,l,h)},Y.surfaceDerivativesGivenNM=function(r,a,l,h,f,m){var y=l.degreeU,E=l.degreeV,w=l.controlPoints,L=l.knotsU,R=l.knotsV;if(!Y.areValidRelations(y,w.length,L.length)||!Y.areValidRelations(E,w[0].length,R.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var I=w[0][0].length,B=m<y?m:y,O=m<E?m:E,V=v.zeros3d(m+1,m+1,I),K=Y.knotSpanGivenN(r,y,h,L),q=Y.knotSpanGivenN(a,E,f,R),J=Y.derivativeBasisFunctionsGivenNI(K,h,y,r,L),ie=Y.derivativeBasisFunctionsGivenNI(q,f,E,a,R),ce=v.zeros2d(E+1,I),_e=0,ye=0,Ce=B+1;ye<Ce;){for(var Te=ye++,Pe=0,st=E+1;Pe<st;){var Ke=Pe++;ce[Ke]=v.zeros1d(I);for(var Xe=0,ot=y+1;Xe<ot;){var ht=Xe++;v.addMulMutate(ce[Ke],J[Te][ht],w[K-y+ht][q-E+Ke])}}var gt=m-Te;_e=gt<O?gt:O;for(var At=0,en=_e+1;At<en;){var Ht=At++;V[Te][Ht]=v.zeros1d(I);for(var Mt=0,kt=E+1;Mt<kt;){var hn=Mt++;v.addMulMutate(V[Te][Ht],ie[Ht][hn],ce[hn])}}}return V},Y.surfacePoint=function(r,a,l){var h=r.knotsU.length-r.degreeU-2,f=r.knotsV.length-r.degreeV-2;return Y.surfacePointGivenNM(h,f,r,a,l)},Y.surfacePointGivenNM=function(r,a,l,h,f){var m=l.degreeU,y=l.degreeV,E=l.controlPoints,w=l.knotsU,L=l.knotsV;if(!Y.areValidRelations(m,E.length,w.length)||!Y.areValidRelations(y,E[0].length,L.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var R=E[0][0].length,I=Y.knotSpanGivenN(r,m,h,w),B=Y.knotSpanGivenN(a,y,f,L),O=Y.basisFunctionsGivenKnotSpanIndex(I,h,m,w),V=Y.basisFunctionsGivenKnotSpanIndex(B,f,y,L),K=I-m,q=B,J=v.zeros1d(R),ie=v.zeros1d(R),ce=0,_e=y+1;ce<_e;){var ye=ce++;ie=v.zeros1d(R),q=B-y+ye;for(var Ce=0,Te=m+1;Ce<Te;){var Pe=Ce++;v.addMulMutate(ie,O[Pe],E[K+Pe][q])}v.addMulMutate(J,V[ye],ie)}return J},Y.curveRegularSamplePoints=function(r,a){for(var l=Y.curveDerivatives(r,r.knots[0],r.degree),h=1/a,f=h*h,m=l[0],y=v.mul(h,l[1]),E=v.mul(f*.5,l[2]),w=v.mul(f*h*.5,l[3]),L=v.add(E,E),R=v.add(w,w),I=v.mul(.3333333333333333,w),B=[],O=0,V=a+1;O<V;)O++,B.push(Y.dehomogenize(m)),v.addAllMutate([m,y,E,I]),v.addAllMutate([y,L,w]),v.addAllMutate([L,R]),v.addAllMutate([E,w]);return B},Y.curveRegularSamplePoints2=function(r,a){for(var l=Y.curveDerivatives(r,r.knots[0],r.degree),h=1/a,f=h*h,m=l[0],y=v.mul(h,l[1]),E=v.mul(f*.5,l[2]),w=v.mul(f*h*.5,l[3]),L=v.add(E,E),R=v.add(w,w),I=v.mul(.3333333333333333,w),B=[],O=0,V=a+1;O<V;)O++,B.push(Y.dehomogenize(m)),v.addAllMutate([m,y,E,I]),v.addAllMutate([y,L,w]),v.addAllMutate([L,R]),v.addAllMutate([E,w]);return B},Y.rationalSurfaceRegularSampleDerivatives=function(r,a,l,h){for(var f=Y.surfaceRegularSampleDerivatives(r,a,l,h),m=[],y=a+1,E=l+1,w=h+1,L=0,R=y;L<R;){var I=L++,B=[];m.push(B);for(var O=0,V=E;O<V;){for(var K=O++,q=f[I][K],J=Y.rational2d(q),ie=Y.weight2d(q),ce=[],_e=J[0][0].length,ye=0,Ce=w;ye<Ce;){var Te=ye++;ce.push([]);for(var Pe=0,st=w-Te;Pe<st;){for(var Ke=Pe++,Xe=J[Te][Ke],ot=1,ht=Ke+1;ot<ht;){var gt=ot++;v.subMulMutate(Xe,Ze.get(Ke,gt)*ie[0][gt],ce[Te][Ke-gt])}for(var At=1,en=Te+1;At<en;){var Ht=At++;v.subMulMutate(Xe,Ze.get(Te,Ht)*ie[Ht][0],ce[Te-Ht][Ke]);for(var Mt=v.zeros1d(_e),kt=1,hn=Ke+1;kt<hn;){var tn=kt++;v.addMulMutate(Mt,Ze.get(Ke,tn)*ie[Ht][tn],ce[Te-Ht][Ke-tn])}v.subMulMutate(Xe,Ze.get(Te,Ht),Mt)}v.mulMutate(1/ie[0][0],Xe),ce[Te].push(Xe)}}B.push(ce)}}return m},Y.surfaceRegularSampleDerivatives=function(r,a,l,h){var f=r.degreeU,m=r.degreeV,y=r.controlPoints,E=r.knotsU,w=r.knotsV,L=y[0][0].length;(de.last(E)-E[0])/a,(de.last(w)-w[0])/l;for(var R=Y.regularlySpacedDerivativeBasisFunctions(f,E,a),I=R.item0,B=R.item1,O=Y.regularlySpacedDerivativeBasisFunctions(m,w,l),V=O.item0,K=O.item1,q=[],J=a+1,ie=l+1,ce=0,_e=J;ce<_e;){var ye=ce++,Ce=[];q.push(Ce);for(var Te=0,Pe=ie;Te<Pe;){var st=Te++;Ce.push(Y.surfaceDerivativesGivenBasesKnotSpans(f,m,y,I[ye],V[st],B[ye],K[st],L,h))}}return q},Y.rationalSurfaceRegularSamplePoints=function(r,a,l){return Y.dehomogenize2d(Y.surfaceRegularSamplePoints(r,a,l))},Y.surfaceRegularSamplePoints=function(r,a,l){var h=r.degreeU,f=r.degreeV,m=r.controlPoints,y=r.knotsU,E=r.knotsV,w=m[0][0].length;(de.last(y)-y[0])/a,(de.last(E)-E[0])/l;for(var L=Y.regularlySpacedBasisFunctions(h,y,a),R=L.item0,I=L.item1,B=Y.regularlySpacedBasisFunctions(f,E,l),O=B.item0,V=B.item1,K=[],q=a+1,J=l+1,ie=0,ce=q;ie<ce;){var _e=ie++,ye=[];K.push(ye);for(var Ce=0,Te=J;Ce<Te;){var Pe=Ce++;ye.push(Y.surfacePointGivenBasesKnotSpans(h,f,m,R[_e],O[Pe],I[_e],V[Pe],w))}}return K},Y.regularlySpacedBasisFunctions=function(r,a,l){for(var h=a.length-r-2,f=(de.last(a)-a[0])/l,m=[],y=[],E=a[0],w=Y.knotSpanGivenN(h,r,E,a),L=l+1,R=0,I=L;R<I;){for(R++;E>=a[w+1];)++w;y.push(w),m.push(Y.basisFunctionsGivenKnotSpanIndex(w,E,r,a)),E+=f}return new j(y,m)},Y.regularlySpacedDerivativeBasisFunctions=function(r,a,l){for(var h=a.length-r-2,f=(de.last(a)-a[0])/l,m=[],y=[],E=a[0],w=Y.knotSpanGivenN(h,r,E,a),L=l+1,R=0,I=L;R<I;){for(R++;E>=a[w+1];)++w;y.push(w),m.push(Y.derivativeBasisFunctionsGivenNI(w,E,r,h,a)),E+=f}return new j(y,m)},Y.surfacePointGivenBasesKnotSpans=function(r,a,l,h,f,m,y,E){for(var w=v.zeros1d(E),L,R=h-r,I=f-a,B=0,O=a+1;B<O;){var V=B++;L=v.zeros1d(E);for(var K=0,q=r+1;K<q;){var J=K++;v.addMulMutate(L,m[J],l[R+J][I])}++I,v.addMulMutate(w,y[V],L)}return w},Y.surfaceDerivativesGivenBasesKnotSpans=function(r,a,l,h,f,m,y,L,w){for(var L=l[0][0].length,R=w<r?w:r,I=w<a?w:a,B=v.zeros3d(R+1,I+1,L),O=v.zeros2d(a+1,L),V=0,K=0,q=R+1;K<q;){for(var J=K++,ie=0,ce=a+1;ie<ce;){var _e=ie++;O[_e]=v.zeros1d(L);for(var ye=0,Ce=r+1;ye<Ce;){var Te=ye++;v.addMulMutate(O[_e],m[J][Te],l[h-r+Te][f-a+_e])}}var Pe=w-J;V=Pe<I?Pe:I;for(var st=0,Ke=V+1;st<Ke;){var Xe=st++;B[J][Xe]=v.zeros1d(L);for(var ot=0,ht=a+1;ot<ht;){var gt=ot++;v.addMulMutate(B[J][Xe],y[Xe][gt],O[gt])}}}return B},Y.curveDerivatives=function(r,a,l){var h=r.knots.length-r.degree-2;return Y.curveDerivativesGivenN(h,r,a,l)},Y.curveDerivativesGivenN=function(r,a,l,h){var f=a.degree,m=a.controlPoints,y=a.knots;if(!Y.areValidRelations(f,m.length,y.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var E=m[0].length,w=h<f?h:f,L=v.zeros2d(h+1,E),R=Y.knotSpanGivenN(r,f,l,y),I=Y.derivativeBasisFunctionsGivenNI(R,l,f,w,y),B=0,O=0,V=0,K=w+1;V<K;)for(var B=V++,q=0,J=f+1;q<J;){var O=q++;v.addMulMutate(L[B],I[B][O],m[R-f+O])}return L},Y.curvePoint=function(r,a){var l=r.knots.length-r.degree-2;return Y.curvePointGivenN(l,r,a)},Y.areValidRelations=function(r,a,l){return a+r+1-l==0},Y.curvePointGivenN=function(r,a,l){var h=a.degree,f=a.controlPoints,m=a.knots;if(!Y.areValidRelations(h,f.length,m.length))throw x.thrown("Invalid relations between control points, knot Array, and n");for(var y=Y.knotSpanGivenN(r,h,l,m),E=Y.basisFunctionsGivenKnotSpanIndex(y,l,h,m),w=v.zeros1d(f[0].length),L=0,R=h+1;L<R;){var I=L++;v.addMulMutate(w,E[I],f[y-h+I])}return w},Y.volumePoint=function(r,a,l,h){var f=r.knotsU.length-r.degreeU-2,m=r.knotsV.length-r.degreeV-2,y=r.knotsW.length-r.degreeW-2;return Y.volumePointGivenNML(r,f,m,y,a,l,h)},Y.volumePointGivenNML=function(r,a,l,h,f,m,y){if(!Y.areValidRelations(r.degreeU,r.controlPoints.length,r.knotsU.length)||!Y.areValidRelations(r.degreeV,r.controlPoints[0].length,r.knotsV.length)||!Y.areValidRelations(r.degreeW,r.controlPoints[0][0].length,r.knotsW.length))throw x.thrown("Invalid relations between control points and knot vector");for(var E=r.controlPoints,w=r.degreeU,L=r.degreeV,R=r.degreeW,I=r.knotsU,B=r.knotsV,O=r.knotsW,V=E[0][0][0].length,K=Y.knotSpanGivenN(a,w,f,I),q=Y.knotSpanGivenN(l,L,m,B),J=Y.knotSpanGivenN(h,R,y,O),ie=Y.basisFunctionsGivenKnotSpanIndex(K,f,w,I),ce=Y.basisFunctionsGivenKnotSpanIndex(q,m,L,B),_e=Y.basisFunctionsGivenKnotSpanIndex(J,y,R,O),ye=K-w,Ce=v.zeros1d(V),Te=v.zeros1d(V),Pe=v.zeros1d(V),st=0,Ke=R+1;st<Ke;){var Xe=st++;Pe=v.zeros1d(V);for(var ot=J-R+Xe,ht=0,gt=L+1;ht<gt;){var At=ht++;Te=v.zeros1d(V);for(var en=q-L+At,Ht=0,Mt=w+1;Ht<Mt;){var kt=Ht++;v.addMulMutate(Te,ie[kt],E[ye+kt][en][ot])}v.addMulMutate(Pe,ce[At],Te)}v.addMulMutate(Ce,_e[Xe],Pe)}return Ce},Y.derivativeBasisFunctions=function(r,a,l){var h=Y.knotSpan(a,r,l),f=l.length-1,m=f-a-1;return Y.derivativeBasisFunctionsGivenNI(h,r,a,m,l)},Y.derivativeBasisFunctionsGivenNI=function(r,a,l,h,f){var m=v.zeros2d(l+1,l+1),y=v.zeros1d(l+1),E=v.zeros1d(l+1),w=0,L=0;m[0][0]=1;for(var Xe=1,ot=l+1;Xe<ot;){var R=Xe++;y[R]=a-f[r+1-R],E[R]=f[r+R]-a,w=0;for(var I=0,B=R;I<B;){var O=I++;m[R][O]=E[O+1]+y[R-O],L=m[O][R-1]/m[R][O],m[O][R]=w+E[O+1]*L,w=y[R-O]*L}m[R][R]=w}for(var V=v.zeros2d(h+1,l+1),K=v.zeros2d(2,l+1),q=0,J=1,ie=0,ce=0,_e=0,ye=0,Ce=0,Xe=0,ot=l+1;Xe<ot;){var R=Xe++;V[0][R]=m[R][l]}for(var Xe=0,ot=l+1;Xe<ot;){var O=Xe++;q=0,J=1,K[0][0]=1;for(var I=1,B=h+1;I<B;){var Te=I++;ie=0,ce=O-Te,_e=l-Te,O>=Te&&(K[J][0]=K[q][0]/m[_e+1][ce],ie=K[J][0]*m[ce][_e]),ce>=-1?ye=1:ye=-ce,O-1<=_e?Ce=Te-1:Ce=l-O;for(var Pe=ye,st=Ce+1;Pe<st;){var R=Pe++;K[J][R]=(K[q][R]-K[q][R-1])/m[_e+1][ce+R],ie+=K[J][R]*m[ce+R][_e]}O<=_e&&(K[J][Te]=-K[q][Te-1]/m[_e+1][O],ie+=K[J][Te]*m[O][_e]),V[Te][O]=ie;var L=q;q=J,J=L}}for(var Ke=l,Xe=1,ot=h+1;Xe<ot;){for(var Te=Xe++,I=0,B=l+1;I<B;){var R=I++;V[Te][R]*=Ke}Ke*=l-Te}return V},Y.basisFunctions=function(r,a,l){var h=Y.knotSpan(a,r,l);return Y.basisFunctionsGivenKnotSpanIndex(h,r,a,l)},Y.basisFunctionsGivenKnotSpanIndex=function(r,a,l,h){var f=v.zeros1d(l+1),m=v.zeros1d(l+1),y=v.zeros1d(l+1),E=0,w=0;f[0]=1;for(var L=1,R=l+1;L<R;){var I=L++;m[I]=a-h[r+1-I],y[I]=h[r+I]-a,E=0;for(var B=0,O=I;B<O;){var V=B++;w=f[V]/(y[V+1]+m[I-V]),f[V]=E+y[V+1]*w,E=m[I-V]*w}f[I]=E}return f},Y.knotSpan=function(r,a,l){return Y.knotSpanGivenN(l.length-r-2,r,a,l)},Y.knotSpanGivenN=function(r,a,l,h){if(l>h[r+1]-oe.EPSILON)return r;if(l<h[a]+oe.EPSILON)return a;for(var f=a,m=r+1,y=Math.floor((f+m)/2);l<h[y]||l>=h[y+1];)l<h[y]?m=y:f=y,y=Math.floor((f+m)/2);return y},Y.dehomogenize=function(r){for(var a=r.length,l=[],h=r[a-1],f=r.length-1,m=0,y=f;m<y;){var E=m++;l.push(r[E]/h)}return l},Y.rational1d=function(r){for(var a=r[0].length-1,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=r[m].slice(0,a)}return l},Y.rational2d=function(r){for(var a=Y.rational1d,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=a(r[m])}return l},Y.weight1d=function(r){for(var a=r[0].length-1,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=r[m][a]}return l},Y.weight2d=function(r){for(var a=Y.weight1d,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=a(r[m])}return l},Y.dehomogenize1d=function(r){for(var a=Y.dehomogenize,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=a(r[m])}return l},Y.dehomogenize2d=function(r){for(var a=Y.dehomogenize1d,l=new Array(r.length),h=0,f=r.length;h<f;){var m=h++;l[m]=a(r[m])}return l},Y.homogenize1d=function(r,a){for(var l=r.length,h=r[0].length,f=[],m=0,y=[],E=a??v.rep(r.length,1),w=0,L=l;w<L;){var R=w++,I=[];y=r[R],m=E[R];for(var B=0,O=h;B<O;){var V=B++;I.push(y[V]*m)}I.push(m),f.push(I)}return f},Y.homogenize2d=function(r,a){var l=r.length,h=[],f;if(a!=null)f=a;else{for(var E=[],w=0,m=l;w<m;){var y=w++;E.push(v.rep(r[0].length,1))}f=E}for(var E=0,w=l;E<w;){var y=E++;h.push(Y.homogenize1d(r[y],f[y]))}return h};var qe=e.eval.Intersect=function(){};n["verb.eval.Intersect"]=qe,qe.__name__="verb.eval.Intersect",qe.surfaces=function(r,a,l){for(var h=bt.rationalSurfaceAdaptive(r),f=bt.rationalSurfaceAdaptive(a),m=qe.meshes(h,f),V=new Array(m.length),K=0,q=m.length;K<q;){for(var y=K++,E=m[y],w=new Array(E.length),L=0,R=E.length;L<R;){var I=L++,B=E[I];w[I]=qe.surfacesAtPointWithEstimate(r,a,B.uv0,B.uv1,l)}V[y]=w}for(var O=V,V=new Array(O.length),K=0,q=O.length;K<q;){for(var y=K++,J=O[y],w=new Array(J.length),L=0,R=J.length;L<R;){var I=L++;w[I]=J[I].point}V[y]=at.rationalInterpCurve(w,3)}return V},qe.surfacesAtPointWithEstimate=function(r,a,l,h,f){var m,y,E,w,L,R,I,B,O,V,K,q,J,ie=5,ce=0;do{if(m=Y.rationalSurfaceDerivatives(r,l[0],l[1],1),y=m[0][0],w=m[1][0],L=m[0][1],E=v.normalized(v.cross(w,L)),R=v.dot(E,y),I=Y.rationalSurfaceDerivatives(a,h[0],h[1],1),B=I[0][0],V=I[1][0],K=I[0][1],O=v.normalized(v.cross(V,K)),q=v.dot(O,B),J=v.distSquared(y,B),J<f*f)break;var _e=v.normalized(v.cross(E,O)),ye=v.dot(_e,y),Ce=qe.threePlanes(E,R,O,q,_e,ye);if(Ce==null)throw x.thrown("panic!");var Te=v.sub(Ce,y),Pe=v.sub(Ce,B),st=v.cross(w,E),Ke=v.cross(L,E),Xe=v.cross(V,O),ot=v.cross(K,O),ht=v.dot(Ke,Te)/v.dot(Ke,w),gt=v.dot(st,Te)/v.dot(st,L),At=v.dot(ot,Pe)/v.dot(ot,V),en=v.dot(Xe,Pe)/v.dot(Xe,K);l=v.add([ht,gt],l),h=v.add([At,en],h),++ce}while(ce<ie);return new it(l,h,y,J)},qe.meshes=function(r,a,l,h){l==null&&(l=new Ae(r)),h==null&&(h=new Ae(a));for(var f=qe.boundingBoxTrees(l,h,0),m=new Array(f.length),w=0,R=f.length;w<R;){var y=w++,E=f[y];m[y]=qe.triangles(r,E.item0,a,E.item1)}for(var w=[],R=0,I=m;R<I.length;){var L=I[R];++R,L!=null&&w.push(L)}for(var R=[],I=0,B=w;I<B.length;){var L=B[I];++I,v.distSquared(L.min.point,L.max.point)>oe.EPSILON&&R.push(L)}var O=de.unique(R,function(V,K){var q=v.sub(V.min.uv0,K.min.uv0),J=v.dot(q,q),ie=v.sub(V.max.uv0,K.max.uv0),ce=v.dot(ie,ie),_e=v.sub(V.min.uv0,K.max.uv0),ye=v.dot(_e,_e),Ce=v.sub(V.max.uv0,K.min.uv0),Te=v.dot(Ce,Ce);return J<oe.EPSILON&&ce<oe.EPSILON?!0:ye<oe.EPSILON?Te<oe.EPSILON:!1});return qe.makeMeshIntersectionPolylines(O)},qe.meshSlices=function(r,a,l,h){for(var f=new ut(r),m=f.boundingBox(),y=m.min[0],E=m.min[1],w=m.max[0],L=m.max[1],R=v.span(a,l,h),I=[],B=0;B<R.length;){var O=R[B];++B;var V=[[y,E,O],[w,E,O],[w,L,O],[y,L,O]],K=[[0,0],[1,0],[1,1],[0,1]],q=[[0,1,2],[0,2,3]],J=new Dt(q,V,null,K);I.push(qe.meshes(r,J,f))}return I},qe.makeMeshIntersectionPolylines=function(r){if(r.length==0)return[];for(var E=0;E<r.length;){var a=r[E];++E,a.max.opp=a.min,a.min.opp=a.max}for(var l=qe.kdTreeFromSegments(r),h=[],E=0;E<r.length;){var f=r[E];++E,h.push(f.min),h.push(f.max)}for(var E=0;E<h.length;){var m=h[E];if(++E,m.adj==null){var y=qe.lookupAdjacentSegment(m,l,r.length);y!=null&&y.adj==null&&(m.adj=y,y.adj=m)}}for(var E=[],w=0,L=h;w<L.length;){var R=L[w];++w,R.adj==null&&E.push(R)}var I=E;I.length==0&&(I=h);for(var B=[],O=0,V=!1;I.length!=0;){var K=I.pop();if(!K.visited){for(var q=[],J=K;J!=null&&!(J.visited||(J.visited=!0,J.opp.visited=!0,q.push(J),O+=2,J=J.opp.adj,J==K)););q.length>0&&(q.push(q[q.length-1].opp),B.push(q))}if(I.length==0&&h.length>0&&(V||O<h.length)){V=!0;var ie=h.pop();I.push(ie)}}return B},qe.kdTreeFromSegments=function(r){for(var a=[],l=0;l<r.length;){var h=r[l];++l,a.push(new je(h.min.point,h.min)),a.push(new je(h.max.point,h.max))}return new we(a,v.distSquared)},qe.lookupAdjacentSegment=function(r,a,l){for(var E=[],w=0,h=a.nearest(r.point,l,oe.EPSILON);w<h.length;){var f=h[w];++w,r!=f.item0.obj&&E.push(f)}for(var m=E,y=new Array(m.length),E=0,w=m.length;E<w;){var L=E++;y[L]=m[L].item0.obj}var R=y;return R.length==1?R[0]:null},qe.curveAndSurface=function(r,a,l,h,f){l==null&&(l=.001),h==null&&(h=new _t(r)),f==null&&(f=new nt(a));for(var m=qe.boundingBoxTrees(h,f,l),y=new Array(m.length),ce=0,_e=m.length;ce<_e;){var E=ce++,w=m[E],L=w.item0,R=w.item1,I=de.first(L.knots),B=de.last(L.knots),O=(I+B)/2,V=de.first(R.knotsU),K=de.last(R.knotsU),q=de.first(R.knotsV),J=de.last(R.knotsV),ie=[(V+K)/2,(q+J)/2];y[E]=qe.curveAndSurfaceWithEstimate(L,R,[O].concat(ie),l)}for(var ce=[],_e=0,ye=y;_e<ye.length;){var Ce=ye[_e];++_e,v.distSquared(Ce.curvePoint,Ce.surfacePoint)<l*l&&ce.push(Ce)}return de.unique(ce,function(Te,Pe){return Math.abs(Te.u-Pe.u)<.5*l})},qe.curveAndSurfaceWithEstimate=function(r,a,l,h){h==null&&(h=.001);var f=function(w){var L=Y.rationalCurvePoint(r,w[0]),R=Y.rationalSurfacePoint(a,w[1],w[2]),I=v.sub(L,R);return v.dot(I,I)},m=function(w){var L=Y.rationalCurveDerivatives(r,w[0],1),R=Y.rationalSurfaceDerivatives(a,w[1],w[2],1),I=v.sub(R[0][0],L[0]),B=v.mul(-1,L[1]),O=R[1][0],V=R[0][1];return[2*v.dot(B,I),2*v.dot(O,I),2*v.dot(V,I)]},y=Ct.uncmin(f,l,h*h,m),E=y.solution;return new yt(E[0],[E[1],E[2]],Y.rationalCurvePoint(r,E[0]),Y.rationalSurfacePoint(a,E[1],E[2]))},qe.polylineAndMesh=function(r,a,l){for(var h=qe.boundingBoxTrees(new Ve(r),new Ae(a),l),f=[],m=0;m<h.length;){var y=h[m];++m;var E=y.item0,w=y.item1,L=qe.segmentWithTriangle(r.points[E],r.points[E+1],a.points,a.faces[w]);if(L!=null){var R=L.point,I=v.lerp(L.p,[r.params[E]],[r.params[E+1]])[0],B=rt.triangleUVFromPoint(a,w,R);f.push(new Bt(R,I,B,E,w))}}return f},qe.boundingBoxTrees=function(r,a,l){l==null&&(l=1e-9);var h=[],f=[];h.push(r),f.push(a);for(var m=[];h.length>0;){var y=h.pop(),E=f.pop();if(!(y.empty()||E.empty())&&y.boundingBox().intersects(E.boundingBox(),l)){var r=y.indivisible(l),a=E.indivisible(l);if(r&&a){m.push(new j(y.yield(),E.yield()));continue}else if(r&&!a){var w=E.split();h.push(y),f.push(w.item1),h.push(y),f.push(w.item0);continue}else if(!r&&a){var L=y.split();h.push(L.item1),f.push(E),h.push(L.item0),f.push(E);continue}var R=y.split(),I=E.split();h.push(R.item1),f.push(I.item1),h.push(R.item1),f.push(I.item0),h.push(R.item0),f.push(I.item1),h.push(R.item0),f.push(I.item0)}}return m},qe.curves=function(r,a,l){for(var h=qe.boundingBoxTrees(new _t(r),new _t(a),0),f=new Array(h.length),E=0,w=h.length;E<w;){var m=E++,y=h[m];f[m]=qe.curvesWithEstimate(r,a,de.first(y.item0.knots),de.first(y.item1.knots),l)}for(var E=[],w=0,L=f;w<L.length;){var R=L[w];++w,v.distSquared(R.point0,R.point1)<l&&E.push(R)}return de.unique(E,function(I,B){return Math.abs(I.u0-B.u0)<l*5})},qe.curvesWithEstimate=function(r,a,l,w,f){var m=function(B){var O=Y.rationalCurvePoint(r,B[0]),V=Y.rationalCurvePoint(a,B[1]),K=v.sub(O,V);return v.dot(K,K)},y=function(B){var O=Y.rationalCurveDerivatives(r,B[0],1),V=Y.rationalCurveDerivatives(a,B[1],1),K=v.sub(O[0],V[0]),q=O[1],J=v.mul(-1,V[1]);return[2*v.dot(q,K),2*v.dot(J,K)]},E=Ct.uncmin(m,[l,w],f*f,y),w=E.solution[0],L=E.solution[1],R=Y.rationalCurvePoint(r,w),I=Y.rationalCurvePoint(a,L);return new xt(R,I,w,L)},qe.triangles=function(r,a,l,h){var f=r.faces[a],m=l.faces[h],y=rt.getTriangleNorm(r.points,f),E=rt.getTriangleNorm(l.points,m),w=r.points[f[0]],L=l.points[m[0]],R=qe.planes(w,y,L,E);if(R==null)return null;var I=qe.clipRayInCoplanarTriangle(R,r,a);if(I==null)return null;var B=qe.clipRayInCoplanarTriangle(R,l,h);if(B==null)return null;var O=qe.mergeTriangleClipIntervals(I,B,r,a,l,h);return O==null?null:new Yt(new tt(O.min.uv0,O.min.uv1,O.min.point,a,h),new tt(O.max.uv0,O.max.uv1,O.max.point,a,h))},qe.clipRayInCoplanarTriangle=function(r,a,l){for(var h=a.faces[l],f=[a.points[h[0]],a.points[h[1]],a.points[h[2]]],m=[a.uvs[h[0]],a.uvs[h[1]],a.uvs[h[2]]],y=[v.sub(m[1],m[0]),v.sub(m[2],m[1]),v.sub(m[0],m[2])],E=[v.sub(f[1],f[0]),v.sub(f[2],f[1]),v.sub(f[0],f[2])],R=v.normalized,I=new Array(E.length),q=0,B=E.length;q<B;){var w=q++;I[w]=R(E[w])}for(var L=I,R=v.norm,I=new Array(E.length),q=0,B=E.length;q<B;){var w=q++;I[w]=R(E[w])}for(var O=I,V=null,K=null,q=0;q<3;){var w=q++,J=f[w],ie=L[w],ce=qe.rays(J,ie,r.origin,r.dir);if(ce!=null){var _e=ce.u0,ye=ce.u1;_e<-oe.EPSILON||_e>O[w]+oe.EPSILON||((V==null||ye<V.u)&&(V=new D(ye,v.onRay(r.origin,r.dir,ye),v.onRay(m[w],y[w],_e/O[w]))),(K==null||ye>K.u)&&(K=new D(ye,v.onRay(r.origin,r.dir,ye),v.onRay(m[w],y[w],_e/O[w]))))}}return K==null||V==null?null:new Yt(V,K)},qe.mergeTriangleClipIntervals=function(r,a,l,h,f,m){if(a.min.u>r.max.u+oe.EPSILON||r.min.u>a.max.u+oe.EPSILON)return null;var y=r.min.u>a.min.u?new j(r.min,0):new j(a.min,1),E=r.max.u<a.max.u?new j(r.max,0):new j(a.max,1),w=new Yt(new tt(null,null,y.item0.point,h,m),new tt(null,null,E.item0.point,h,m));return y.item1==0?(w.min.uv0=y.item0.uv,w.min.uv1=rt.triangleUVFromPoint(f,m,y.item0.point)):(w.min.uv0=rt.triangleUVFromPoint(l,h,y.item0.point),w.min.uv1=y.item0.uv),E.item1==0?(w.max.uv0=E.item0.uv,w.max.uv1=rt.triangleUVFromPoint(f,m,E.item0.point)):(w.max.uv0=rt.triangleUVFromPoint(l,h,E.item0.point),w.max.uv1=E.item0.uv),w},qe.planes=function(r,a,l,h){var f=v.cross(a,h);if(v.dot(f,f)<oe.EPSILON)return null;var m=0,y=Math.abs(f[0]),E=Math.abs(f[1]),w=Math.abs(f[2]);E>y&&(m=1,y=E),w>y&&(m=2,y=w);var L,R,I,B;m==0?(L=a[1],R=a[2],I=h[1],B=h[2]):m==1?(L=a[0],R=a[2],I=h[0],B=h[2]):(L=a[0],R=a[1],I=h[0],B=h[1]);var O=-v.dot(r,a),V=-v.dot(l,h),K=L*B-R*I,q=(R*V-O*B)/K,J=(O*I-L*V)/K,ie;return m==0?ie=[0,q,J]:m==1?ie=[q,0,J]:ie=[q,J,0],new ke(ie,v.normalized(f))},qe.threePlanes=function(r,a,l,h,f,m){var y=v.cross(l,f),E=v.dot(r,y);if(Math.abs(E)<oe.EPSILON)return null;var w=v.sub(v.mul(m,l),v.mul(h,f)),L=v.add(v.mul(a,y),v.cross(r,w));return v.mul(1/E,L)},qe.polylines=function(r,a,l){for(var h=qe.boundingBoxTrees(new Ve(r),new Ve(a),l),f=[],m=0;m<h.length;){var y=h[m];++m;var E=y.item0,w=y.item1,L=qe.segments(r.points[E],r.points[E+1],a.points[w],a.points[w+1],l);L!=null&&(L.u0=v.lerp(L.u0,[r.params[E]],[r.params[E+1]])[0],L.u1=v.lerp(L.u1,[a.params[w]],[a.params[w+1]])[0],f.push(L))}return f},qe.segments=function(r,a,l,h,f){var m=v.sub(a,r),y=Math.sqrt(v.dot(m,m)),E=v.mul(1/y,m),w=v.sub(h,l),L=Math.sqrt(v.dot(w,w)),R=v.mul(1/L,w),I=qe.rays(r,E,l,R);if(I!=null){var B=Math.min(Math.max(0,I.u0/y),1),O=Math.min(Math.max(0,I.u1/L),1),V=v.onRay(r,m,B),K=v.onRay(l,w,O),q=v.distSquared(V,K);if(q<f*f)return new xt(V,K,B,O)}return null},qe.rays=function(r,a,l,h){var f=v.dot(a,h),m=v.dot(a,l),y=v.dot(a,r),E=v.dot(h,l),w=v.dot(h,r),L=v.dot(a,a),R=v.dot(h,h),I=L*R-f*f;if(Math.abs(I)<oe.EPSILON)return null;var B=f*(m-y)-L*(E-w),O=B/I,V=(m-y+O*f)/L,K=v.onRay(r,a,V),q=v.onRay(l,h,O);return new xt(K,q,V,O)},qe.segmentWithTriangle=function(r,a,l,h){var f=l[h[0]],m=l[h[1]],y=l[h[2]],E=v.sub(m,f),w=v.sub(y,f),L=v.cross(E,w),R=v.sub(a,r),I=v.sub(r,f),B=-v.dot(L,I),O=v.dot(L,R);if(Math.abs(O)<oe.EPSILON)return null;var V=B/O;if(V<0||V>1)return null;var K=v.add(r,v.mul(V,R)),q=v.dot(E,w),J=v.dot(E,E),ie=v.dot(w,w),ce=v.sub(K,f),_e=v.dot(ce,E),ye=v.dot(ce,w),Ce=q*q-J*ie;if(Math.abs(Ce)<oe.EPSILON)return null;var Te=(q*ye-ie*_e)/Ce,Pe=(q*_e-J*ye)/Ce;return Te>1+oe.EPSILON||Pe>1+oe.EPSILON||Pe<-oe.EPSILON||Te<-oe.EPSILON||Te+Pe>1+oe.EPSILON?null:new z(K,Te,Pe,V)},qe.segmentAndPlane=function(r,a,l,h){var f=v.dot(h,v.sub(a,r));if(Math.abs(f)<oe.EPSILON)return null;var m=v.dot(h,v.sub(l,r)),y=m/f;return y>1+oe.EPSILON||y<-oe.EPSILON?null:{p:y}};var at=e.eval.Make=function(){};n["verb.eval.Make"]=at,at.__name__="verb.eval.Make",at.rationalTranslationalSurface=function(r,a){for(var l=Y.rationalCurvePoint(a,de.first(a.knots)),h=de.first(a.knots),f=de.last(a.knots),m=2*a.controlPoints.length,y=(f-h)/(m-1),E=[],w=0,L=m;w<L;){var R=w++,I=v.sub(Y.rationalCurvePoint(a,h+R*y),l),B=dt.rationalCurveTransform(r,[[1,0,0,I[0]],[0,1,0,I[1]],[0,0,1,I[2]],[0,0,0,1]]);E.push(B)}return at.loftedSurface(E)},at.surfaceBoundaryCurves=function(r){var a=at.surfaceIsocurve(r,de.first(r.knotsU),!1),l=at.surfaceIsocurve(r,de.last(r.knotsU),!1),h=at.surfaceIsocurve(r,de.first(r.knotsV),!0),f=at.surfaceIsocurve(r,de.last(r.knotsV),!0);return[a,l,h,f]},at.surfaceIsocurve=function(r,a,l){l==null&&(l=!1);for(var h=l?r.knotsV:r.knotsU,f=l?r.degreeV:r.degreeU,m=Se.knotMultiplicities(h),y=-1,E=0,w=m.length;E<w;){var L=E++;if(Math.abs(a-m[L].knot)<oe.EPSILON){y=L;break}}var R=f+1;y>=0&&(R-=m[y].mult);var I=R>0?dt.surfaceKnotRefine(r,v.rep(R,a),l):r,B=Y.knotSpan(f,a,h);if(Math.abs(a-de.first(h))<oe.EPSILON?B=0:Math.abs(a-de.last(h))<oe.EPSILON&&(B=(l?I.controlPoints[0].length:I.controlPoints.length)-1),l){for(var O=I.degreeU,V=I.knotsU,E=[],w=0,K=I.controlPoints;w<K.length;){var q=K[w];++w,E.push(q[B])}return new Ge(O,V,E)}return new Ge(I.degreeV,I.knotsV,I.controlPoints[B])},at.loftedSurface=function(r,a){r=dt.unifyCurveKnotVectors(r);var l=r[0].degree;a==null&&(a=3),a>r.length-1&&(a=r.length-1);for(var h=r[0].knots,f=[],m=[],y=0,E=r[0].controlPoints.length;y<E;){for(var w=y++,L=new Array(r.length),R=0,I=r.length;R<I;){var B=R++;L[B]=r[B].controlPoints[w]}var O=L,V=at.rationalInterpCurve(O,a,!0);m.push(V.controlPoints),f=V.knots}return new et(l,a,h,f,m)},at.clonedCurve=function(r){for(var a=r.degree,l=r.knots.slice(),h=r.controlPoints,f=new Array(h.length),m=0,y=h.length;m<y;){var E=m++;f[E]=h[E].slice()}return new Ge(a,l,f)},at.rationalBezierCurve=function(r,a){for(var l=r.length-1,h=[],f=0,m=l+1;f<m;)f++,h.push(0);for(var f=0,m=l+1;f<m;)f++,h.push(1);return a==null&&(a=v.rep(r.length,1)),new Ge(l,h,Y.homogenize1d(r,a))},at.fourPointSurface=function(r,a,l,h,f){f==null&&(f=3);for(var m=f,y=[],E=0,w=f+1;E<w;){for(var L=E++,R=[],I=0,B=f+1;I<B;){var O=I++,V=1-L/m,K=v.lerp(V,r,a),q=v.lerp(V,h,l),J=v.lerp(1-O/m,K,q);J.push(1),R.push(J)}y.push(R)}var ie=v.rep(f+1,0),ce=v.rep(f+1,1);return new et(f,f,ie.concat(ce),ie.concat(ce),y)},at.ellipseArc=function(r,a,l,h,f){var m=v.norm(a),y=v.norm(l);a=v.normalized(a),l=v.normalized(l),f<h&&(f=2*Math.PI+h);var E=f-h,w=0;E<=Math.PI/2?w=1:E<=Math.PI?w=2:E<=3*Math.PI/2?w=3:w=4;var L=E/w,R=Math.cos(L/2),I=v.add(r,v.add(v.mul(m*Math.cos(h),a),v.mul(y*Math.sin(h),l))),B=v.sub(v.mul(Math.cos(h),l),v.mul(Math.sin(h),a)),O=[],V=v.zeros1d(2*w+3),K=0,q=h,J=v.zeros1d(w*2);O[0]=I,J[0]=1;for(var ie=1,ce=w+1;ie<ce;){var _e=ie++;q+=L;var ye=v.add(r,v.add(v.mul(m*Math.cos(q),a),v.mul(y*Math.sin(q),l)));J[K+2]=1,O[K+2]=ye;var Ce=v.sub(v.mul(Math.cos(q),l),v.mul(Math.sin(q),a)),Te=qe.rays(I,v.mul(1/v.norm(B),B),ye,v.mul(1/v.norm(Ce),Ce)),Pe=v.add(I,v.mul(Te.u0,B));J[K+1]=R,O[K+1]=Pe,K+=2,_e<w&&(I=ye,B=Ce)}var st=2*w+1;switch(V[0]=0,V[st]=1,V[1]=0,V[1+st]=1,V[2]=0,V[2+st]=1,w){case 2:V[3]=V[4]=.5;break;case 3:V[3]=V[4]=.3333333333333333,V[5]=V[6]=.6666666666666666;break;case 4:V[3]=V[4]=.25,V[5]=V[6]=.5,V[7]=V[8]=.75;break}return new Ge(2,V,Y.homogenize1d(O,J))},at.arc=function(r,a,l,h,f,m){return at.ellipseArc(r,v.mul(h,v.normalized(a)),v.mul(h,v.normalized(l)),f,m)},at.polyline=function(r){for(var a=[0,0],l=0,f=0,m=r.length-1;f<m;){var h=f++;l+=v.dist(r[h],r[h+1]),a.push(l)}a.push(l),a=v.mul(1/l,a);for(var f=[],m=0,y=r.length;m<y;){var h=m++;f.push(1)}var E=f;return new Ge(1,a,Y.homogenize1d(r.slice(0),E))},at.extrudedSurface=function(r,a,l){for(var h=[[],[],[]],f=[[],[],[]],m=Y.dehomogenize1d(l.controlPoints),y=Y.weight1d(l.controlPoints),E=v.mul(a,r),w=v.mul(.5*a,r),L=0,R=m.length;L<R;){var I=L++;h[2][I]=m[I],h[1][I]=v.add(w,m[I]),h[0][I]=v.add(E,m[I]),f[0][I]=y[I],f[1][I]=y[I],f[2][I]=y[I]}return new et(2,l.degree,[0,0,0,1,1,1],l.knots,Y.homogenize2d(h,f))},at.cylindricalSurface=function(r,a,l,h,f){var m=v.cross(r,a),y=at.arc(l,a,m,f,0,2*Math.PI);return at.extrudedSurface(r,h,y)},at.revolvedSurface=function(r,a,l,h){var f=Y.dehomogenize1d(r.controlPoints),m=Y.weight1d(r.controlPoints),y,E,V,K;h<=Math.PI/2?(y=1,E=v.zeros1d(6+2*(y-1))):h<=Math.PI?(y=2,E=v.zeros1d(6+2*(y-1)),E[3]=E[4]=.5):h<=3*Math.PI/2?(y=3,E=v.zeros1d(6+2*(y-1)),E[3]=E[4]=.3333333333333333,E[5]=E[6]=.6666666666666666):(y=4,E=v.zeros1d(6+2*(y-1)),E[3]=E[4]=.25,E[5]=E[6]=.5,E[7]=E[8]=.75);var w=h/y,L=3+2*(y-1);E[0]=0,E[L]=1,E[1]=0,E[L+1]=1,E[2]=0,E[L+2]=1;for(var R=Math.cos(w/2),I=0,B=v.zeros1d(y+1),O=v.zeros1d(y+1),V=v.zeros3d(2*y+1,f.length,3),K=v.zeros2d(2*y+1,f.length),J=1,ie=y+1;J<ie;){var q=J++;I+=w,O[q]=Math.cos(I),B[q]=Math.sin(I)}for(var J=0,ie=f.length;J<ie;){var L=J++,ce=ge.rayClosestPoint(f[L],a,l),_e=v.sub(f[L],ce),ye=v.norm(_e),Ce=v.cross(l,_e);ye>oe.EPSILON&&(_e=v.mul(1/ye,_e),Ce=v.mul(1/ye,Ce)),V[0][L]=f[L];var Te=f[L];K[0][L]=m[L];for(var Pe=Ce,st=0,I=0,Ke=1,Xe=y+1;Ke<Xe;){var q=Ke++,ot=ye==0?ce:v.add(ce,v.add(v.mul(ye*O[q],_e),v.mul(ye*B[q],Ce)));V[st+2][L]=ot,K[st+2][L]=m[L];var ht=v.sub(v.mul(O[q],Ce),v.mul(B[q],_e));if(ye==0)V[st+1][L]=ce;else{var gt=qe.rays(Te,v.mul(1/v.norm(Pe),Pe),ot,v.mul(1/v.norm(ht),ht)),At=v.add(Te,v.mul(gt.u0,Pe));V[st+1][L]=At}K[st+1][L]=R*m[L],st+=2,q<y&&(Te=ot,Pe=ht)}}return new et(2,r.degree,E,r.knots,Y.homogenize2d(V,K))},at.sphericalSurface=function(r,a,l,h){var f=at.arc(r,v.mul(-1,a),l,h,0,Math.PI);return at.revolvedSurface(f,r,a,2*Math.PI)},at.conicalSurface=function(r,a,l,h,f){var m=2*Math.PI,y=1,E=[v.add(l,v.mul(h,r)),v.add(l,v.mul(f,a))],w=[0,0,1,1],L=[1,1],R=new Ge(y,w,Y.homogenize1d(E,L));return at.revolvedSurface(R,l,r,m)},at.rationalInterpCurve=function(r,a,l,h,f){if(l==null&&(l=!1),a==null&&(a=3),r.length<a+1)throw x.thrown("You need to supply at least degree + 1 points! You only supplied "+r.length+" points.");for(var m=[0],kt=1,hn=r.length;kt<hn;){var y=kt++,E=v.norm(v.sub(r[y],r[y-1])),w=m[m.length-1];m.push(w+E)}for(var L=m[m.length-1],kt=0,hn=m.length;kt<hn;){var y=kt++;m[y]/=L}for(var R=v.rep(a+1,0),I=h!=null&&f!=null,B=I?0:1,O=I?m.length-a+1:m.length-a,kt=B,hn=O;kt<hn;){for(var y=kt++,V=0,K=0,q=a;K<q;){var J=K++;V+=m[y+J]}R.push(1/a*V)}for(var ie=R.concat(v.rep(a+1,1)),ce=[],_e=I?r.length+1:r.length-1,ye=I?r.length-(a-1):r.length-(a+1),kt=0;kt<m.length;){var Ce=m[kt];++kt;var Te=Y.knotSpanGivenN(_e,a,Ce,ie),Pe=Y.basisFunctionsGivenKnotSpanIndex(Te,Ce,a,ie),st=Te-a,Ke=v.zeros1d(st),Xe=v.zeros1d(ye-st);ce.push(Ke.concat(Pe).concat(Xe))}if(I){var ot=ce[0].length-2,ht=[-1,1].concat(v.zeros1d(ot)),gt=v.zeros1d(ot).concat([-1,1]);de.spliceAndInsert(ce,1,0,ht),de.spliceAndInsert(ce,ce.length-1,0,gt)}for(var At=r[0].length,en=[],Ht=(1-ie[ie.length-a-2])/a,Mt=ie[a+1]/a,kt=0,hn=At;kt<hn;){var y=kt++,tn;if(I){tn=[r[0][y]],tn.push(Mt*h[y]);for(var kn=1,bn=r.length-1;kn<bn;){var J=kn++;tn.push(r[J][y])}tn.push(Ht*f[y]),tn.push(de.last(r)[y])}else{for(var xn=new Array(r.length),K=0,q=r.length;K<q;){var Dn=K++;xn[Dn]=r[Dn][y]}tn=xn}var si=Ie.solve(ce,tn);en.push(si)}var mi=Ie.transpose(en);if(!l){var is=v.rep(mi.length,1);mi=Y.homogenize1d(mi,is)}return new Ge(a,ie,mi)};var dt=e.eval.Modify=function(){};n["verb.eval.Modify"]=dt,dt.__name__="verb.eval.Modify",dt.curveReverse=function(r){return new Ge(r.degree,dt.knotsReverse(r.knots),de.reversed(r.controlPoints))},dt.surfaceReverse=function(r,a){if(a==null&&(a=!1),a){for(var l=r.degreeU,h=r.degreeV,f=r.knotsU,m=dt.knotsReverse(r.knotsV),y=[],E=0,w=r.controlPoints;E<w.length;){var L=w[E];++E,y.push(de.reversed(L))}return new et(l,h,f,m,y)}return new et(r.degreeU,r.degreeV,dt.knotsReverse(r.knotsU),r.knotsV,de.reversed(r.controlPoints))},dt.knotsReverse=function(r){var a=de.first(r);de.last(r);for(var l=[a],h=r.length,f=1,m=h;f<m;){var y=f++;l.push(l[y-1]+(r[h-y]-r[h-y-1]))}return l},dt.unifyCurveKnotVectors=function(r){for(var a=at.clonedCurve,I=new Array(r.length),J=0,ie=r.length;J<ie;){var l=J++;I[l]=a(r[l])}r=I;for(var h=p.fold(r,function(_e,ye){return dt.imax(_e.degree,ye)},0),J=0,ie=r.length;J<ie;){var l=J++;r[l].degree<h&&(r[l]=dt.curveElevateDegree(r[l],h))}for(var J=[],ie=0;ie<r.length;){var f=r[ie];++ie,J.push(new Yt(de.first(f.knots),de.last(f.knots)))}for(var m=J,J=0,ie=r.length;J<ie;){for(var l=J++,y=m[l].min,E=r[l].knots,I=new Array(E.length),w=0,L=E.length;w<L;){var R=w++;I[R]=E[R]-y}r[l].knots=I}for(var I=new Array(m.length),J=0,ie=m.length;J<ie;){var l=J++,B=m[l];I[l]=B.max-B.min}for(var O=I,V=p.fold(O,function(_e,ye){return Math.max(_e,ye)},0),J=0,ie=r.length;J<ie;){for(var l=J++,K=V/O[l],E=r[l].knots,I=new Array(E.length),w=0,L=E.length;w<L;){var R=w++;I[R]=E[R]*K}r[l].knots=I}for(var q=p.fold(r,function(_e,ye){return v.sortedSetUnion(_e.knots,ye)},[]),J=0,ie=r.length;J<ie;){var l=J++,ce=v.sortedSetSub(q,r[l].knots);ce.length==0&&(r[l]=r[l]),r[l]=dt.curveKnotRefine(r[l],ce)}return r},dt.imin=function(r,a){return r<a?r:a},dt.imax=function(r,a){return r>a?r:a},dt.curveElevateDegree=function(r,a){if(a<=r.degree)return r;var l=r.knots.length-r.degree-2,h=r.degree,f=r.knots,m=r.controlPoints,y=a-r.degree,E=r.controlPoints[0].length,w=v.zeros2d(h+y+1,h+1),L=[],R=[],I=[],B=l+h+1,O=a,V=Math.floor(O/2),K=[],q=[];w[0][0]=1,w[O][h]=1;for(var ht=1,gt=V+1;ht<gt;)for(var J=ht++,ie=1/Ze.get(O,J),ce=dt.imin(h,J),_e=dt.imax(0,J-y),ye=ce+1;_e<ye;){var Ce=_e++;w[J][Ce]=ie*Ze.get(h,Ce)*Ze.get(y,J-Ce)}for(var ht=V+1,gt=O;ht<gt;)for(var J=ht++,ce=dt.imin(h,J),_e=dt.imax(0,J-y),ye=ce+1;_e<ye;){var Ce=_e++;w[J][Ce]=w[O-J][h-Ce]}var Te=O+1,Pe=-1,st=h,Ke=h+1,Xe=1,ot=f[0];K[0]=m[0];for(var ht=0,gt=O+1;ht<gt;){var J=ht++;q[J]=ot}for(var ht=0,gt=h+1;ht<gt;){var J=ht++;L[J]=m[J]}for(;Ke<B;){for(var J=Ke;Ke<B&&f[Ke]==f[Ke+1];)++Ke;var At=Ke-J+1,en=f[Ke],Ht=Pe;Pe=h-At;var Mt=Ht>0?Math.floor((Ht+2)/2):1,kt=Pe>0?Math.floor(O-(Pe+1)/2):O;if(Pe>0){for(var hn=en-ot,tn=[],xn=h;xn>At;)tn[xn-At-1]=hn/(f[st+xn]-ot),--xn;for(var ht=1,gt=Pe+1;ht<gt;){for(var Ce=ht++,Dn=Pe-Ce,kn=At+Ce,bn=h;bn>=kn;)L[bn]=v.add(v.mul(tn[bn-kn],L[bn]),v.mul(1-tn[bn-kn],L[bn-1])),--bn;I[Dn]=L[h]}}for(var _e=Mt,ye=O+1;_e<ye;){var si=_e++;R[si]=v.zeros1d(E);for(var ce=dt.imin(h,si),mi=dt.imax(0,si-y),is=ce+1;mi<is;){var ws=mi++;R[si]=v.add(R[si],v.mul(w[si][ws],L[ws]))}}if(Ht>1)for(var Ts=Te-2,As=Te,Cs=en-ot,Pa=(en-q[Te-1])/Cs,Rs=1,La=Ht;Rs<La;){for(var rs=Rs++,ai=Ts,Ci=As,ji=Ci-Te+1;Ci-ai>rs;){if(ai<Xe){var uh=(en-q[ai])/(ot-q[ai]);K[ai]=v.lerp(uh,K[ai],K[ai-1])}if(Ci>=Mt){if(Ci-rs<=Te-O+Ht){var hh=(en-q[Ci-rs])/Cs;R[ji]=v.lerp(hh,R[ji],R[ji+1])}}else R[ji]=v.lerp(Pa,R[ji],R[ji+1]);++ai,--Ci,--ji}--Ts,++As}if(st!=h)for(var Cl=0,fh=O-Ht;Cl<fh;)Cl++,q[Te]=ot,++Te;for(var Rl=Mt,dh=kt+1;Rl<dh;){var ph=Rl++;K[Xe]=R[ph],++Xe}if(Ke<B){for(var Pl=0,mh=Pe;Pl<mh;){var Ll=Pl++;L[Ll]=I[Ll]}for(var Dl=Pe,_h=h+1;Dl<_h;){var Il=Dl++;L[Il]=m[Ke-h+Il]}st=Ke,++Ke,ot=en}else for(var Ul=0,vh=O+1;Ul<vh;){var gh=Ul++;q[Te+gh]=en}}return new Ge(a,q,K)},dt.rationalSurfaceTransform=function(r,a){for(var l=Y.dehomogenize2d(r.controlPoints),h=0,f=l.length;h<f;)for(var m=h++,y=0,E=l[m].length;y<E;){var w=y++,L=l[m][w];L.push(1),l[m][w]=Ie.dot(a,L).slice(0,L.length-1)}return new et(r.degreeU,r.degreeV,r.knotsU.slice(),r.knotsV.slice(),Y.homogenize2d(l,Y.weight2d(r.controlPoints)))},dt.rationalCurveTransform=function(r,a){for(var l=Y.dehomogenize1d(r.controlPoints),h=0,f=l.length;h<f;){var m=h++,y=l[m];y.push(1),l[m]=Ie.dot(a,y).slice(0,y.length-1)}return new Ge(r.degree,r.knots.slice(),Y.homogenize1d(l,Y.weight1d(r.controlPoints)))},dt.surfaceKnotRefine=function(r,a,l){var h=[],f,m,y;l?(y=r.controlPoints,f=r.knotsV,m=r.degreeV):(y=Ie.transpose(r.controlPoints),f=r.knotsU,m=r.degreeU);for(var E=null,w=0;w<y.length;){var L=y[w];++w,E=dt.curveKnotRefine(new Ge(m,f,L),a),h.push(E.controlPoints)}var R=E.knots;return l?new et(r.degreeU,r.degreeV,r.knotsU.slice(),R,h):(h=Ie.transpose(h),new et(r.degreeU,r.degreeV,R,r.knotsV.slice(),h))},dt.decomposeCurveIntoBeziers=function(r){for(var a=r.degree,l=r.controlPoints,h=r.knots,f=Se.knotMultiplicities(h),m=a+1,y=0;y<f.length;){var E=f[y];if(++y,E.mult<m){var w=v.rep(m-E.mult,E.knot),L=dt.curveKnotRefine(new Ge(a,h,l),w);h=L.knots,l=L.controlPoints}}h.length/m-1;for(var R=m*2,I=[],B=0;B<l.length;){var O=h.slice(B,B+R),V=l.slice(B,B+m);I.push(new Ge(a,O,V)),B+=m}return I},dt.curveKnotRefine=function(r,a){if(a.length==0)return at.clonedCurve(r);for(var l=r.degree,h=r.controlPoints,f=r.knots,m=h.length-1,y=m+l+1,E=a.length-1,w=Y.knotSpan(l,a[0],f),L=Y.knotSpan(l,a[E],f),R=[],I=[],B=0,O=w-l+1;B<O;){var V=B++;R[V]=h[V]}for(var B=L-1,O=m+1;B<O;){var V=B++;R[V+E+1]=h[V]}for(var B=0,O=w+1;B<O;){var V=B++;I[V]=f[V]}for(var B=L+l,O=y+1;B<O;){var V=B++;I[V+E+1]=f[V]}for(var V=L+l-1,K=L+l+E,q=E;q>=0;){for(;a[q]<=f[V]&&V>w;)R[K-l-1]=h[V-l-1],I[K]=f[V],--K,--V;R[K-l-1]=R[K-l];for(var B=1,O=l+1;B<O;){var J=B++,ie=K-l+J,ce=I[K+J]-a[q];Math.abs(ce)<oe.EPSILON?R[ie-1]=R[ie]:(ce/=I[K+J]-f[V-l+J],R[ie-1]=v.add(v.mul(ce,R[ie-1]),v.mul(1-ce,R[ie])))}I[K]=a[q],--K,--q}return new Ge(l,I,R)},dt.curveKnotInsert=function(r,a,l){for(var h=r.degree,f=r.controlPoints,m=r.knots,y=0,E=f.length,w=Y.knotSpan(h,a,m),L=[],R=[],I=[],B=0,ie=1,ce=w+1;ie<ce;){var B=ie++;R[B]=m[B]}for(var ie=1,ce=l+1;ie<ce;){var B=ie++;R[w+B]=a}for(var ie=w+1,ce=m.length;ie<ce;){var B=ie++;R[B+l]=m[B]}for(var ie=0,ce=w-h+1;ie<ce;){var B=ie++;I[B]=f[B]}for(var ie=w-y,ce=E;ie<ce;){var B=ie++;I[B+l]=f[B]}for(var ie=0,ce=h-y+1;ie<ce;){var B=ie++;L[B]=f[w-h+B]}for(var O=0,V=0,ie=1,ce=l+1;ie<ce;){var K=ie++;O=w-h+K;for(var q=0,J=h-K-y+1;q<J;){var B=q++;V=(a-m[O+B])/(m[B+w+1]-m[O+B]),L[B]=v.add(v.mul(V,L[B+1]),v.mul(1-V,L[B]))}I[O]=L[0],I[w+l-K-y]=L[h-K-y]}for(var ie=O+1,ce=w-y;ie<ce;){var B=ie++;I[B]=L[B-O]}return new Ge(h,R,I)};var bt=e.eval.Tess=function(){};n["verb.eval.Tess"]=bt,bt.__name__="verb.eval.Tess",bt.rationalCurveRegularSample=function(r,a,l){return bt.rationalCurveRegularSampleRange(r,r.knots[0],de.last(r.knots),a,l)},bt.rationalCurveRegularSampleRange=function(r,a,l,h,f){h<1&&(h=2);for(var m=[],y=(l-a)/(h-1),E=0,w=0,L=h;w<L;){var R=w++;E=a+y*R,f?m.push([E].concat(Y.rationalCurvePoint(r,E))):m.push(Y.rationalCurvePoint(r,E))}return m},bt.rationalCurveAdaptiveSample=function(r,a,l){if(l==null&&(l=!1),a==null&&(a=1e-6),r.degree==1)if(l){for(var y=[],E=0,L=r.controlPoints.length;E<L;){var w=E++;y.push([r.knots[w+1]].concat(Y.dehomogenize(r.controlPoints[w])))}return y}else{for(var h=r.controlPoints,f=Y.dehomogenize,m=new Array(h.length),y=0,E=h.length;y<E;){var w=y++;m[w]=f(h[w])}return m}return bt.rationalCurveAdaptiveSampleRange(r,r.knots[0],de.last(r.knots),a,l)},bt.rationalCurveAdaptiveSampleRange=function(r,a,l,h,f){var m=Y.rationalCurvePoint(r,a),y=Y.rationalCurvePoint(r,l),E=.5+.2*Math.random(),w=a+(l-a)*E,L=Y.rationalCurvePoint(r,w),R=v.sub(m,y),I=v.sub(m,L);if(v.dot(R,R)<h&&v.dot(I,I)>h||!ge.threePointsAreFlat(m,L,y,h)){var B=a+(l-a)*.5,O=bt.rationalCurveAdaptiveSampleRange(r,a,B,h,f),V=bt.rationalCurveAdaptiveSampleRange(r,B,l,h,f);return O.slice(0,-1).concat(V)}else return f?[[a].concat(m),[l].concat(y)]:[m,y]},bt.rationalSurfaceNaive=function(r,a,l){a<1&&(a=1),l<1&&(l=1),r.degreeU,r.degreeV,r.controlPoints;for(var h=r.knotsU,f=r.knotsV,m=de.last(h)-h[0],y=de.last(f)-f[0],E=m/a,w=y/l,L=[],R=[],I=[],Ce=0,Te=a+1;Ce<Te;)for(var B=Ce++,O=0,V=l+1;O<V;){var K=O++,q=B*E,J=K*w;R.push([q,J]);var ie=Y.rationalSurfaceDerivatives(r,q,J,1),ce=ie[0][0];L.push(ce);var _e=v.normalized(v.cross(ie[1][0],ie[0][1]));I.push(_e)}for(var ye=[],Ce=0,Te=a;Ce<Te;)for(var B=Ce++,O=0,V=l;O<V;){var K=O++,Pe=B*(l+1)+K,st=(B+1)*(l+1)+K,Ke=st+1,Xe=Pe+1,ot=[Pe,st,Ke],ht=[Pe,Ke,Xe];ye.push(ot),ye.push(ht)}return new Dt(ye,L,I,R)},bt.divideRationalSurfaceAdaptive=function(r,a){a==null&&(a=new Fn),a.minDivsU=a.minDivsU!=null?a.minDivsU:1,a.minDivsU=a.minDivsV!=null?a.minDivsV:1,a.refine=a.refine!=null?a.refine:!0;for(var l=(r.controlPoints.length-1)*2,h=(r.controlPoints[0].length-1)*2,f=a.minDivsU=a.minDivsU>l?a.minDivsU:l,m=a.minDivsV=a.minDivsV>h?a.minDivsV:h,y=de.last(r.knotsU),E=r.knotsU[0],w=de.last(r.knotsV),L=r.knotsV[0],R=(y-E)/f,I=(w-L)/m,B=[],O=[],Pe=0,st=m+1;Pe<st;){for(var V=Pe++,K=[],q=0,J=f+1;q<J;){var ie=q++,ce=E+R*ie,_e=L+I*V,ye=Y.rationalSurfaceDerivatives(r,ce,_e,1),Ce=v.normalized(v.cross(ye[0][1],ye[1][0]));K.push(new re(ye[0][0],Ce,[ce,_e],-1,v.isZero(Ce)))}O.push(K)}for(var Pe=0,st=m;Pe<st;)for(var V=Pe++,q=0,J=f;q<J;){var ie=q++,Te=[O[m-V-1][ie],O[m-V-1][ie+1],O[m-V][ie+1],O[m-V][ie]];B.push(new On(r,Te))}if(!a.refine)return B;for(var Pe=0,st=m;Pe<st;)for(var V=Pe++,q=0,J=f;q<J;){var ie=q++,Ke=V*f+ie,Xe=bt.north(Ke,V,ie,f,m,B),ot=bt.east(Ke,V,ie,f,m,B),ht=bt.south(Ke,V,ie,f,m,B),gt=bt.west(Ke,V,ie,f,m,B);B[Ke].neighbors=[ht,ot,Xe,gt],B[Ke].divide(a)}return B},bt.north=function(r,a,l,h,f,m){return a==0?null:m[r-h]},bt.south=function(r,a,l,h,f,m){return a==f-1?null:m[r+h]},bt.east=function(r,a,l,h,f,m){return l==h-1?null:m[r+1]},bt.west=function(r,a,l,h,f,m){return l==0?null:m[r-1]},bt.triangulateAdaptiveRefinementNodeTree=function(r){for(var a=Dt.empty(),l=0;l<r.length;){var h=r[l];++l,h.triangulate(a)}return a},bt.rationalSurfaceAdaptive=function(r,a){a==null&&(a=new Fn);var l=bt.divideRationalSurfaceAdaptive(r,a);return bt.triangulateAdaptiveRefinementNodeTree(l)};var Fn=e.eval.AdaptiveRefinementOptions=function(){this.minDivsV=1,this.minDivsU=1,this.refine=!0,this.maxDepth=10,this.minDepth=0,this.normTol=.025};n["verb.eval.AdaptiveRefinementOptions"]=Fn,Fn.__name__="verb.eval.AdaptiveRefinementOptions",Fn.prototype={__class__:Fn};var On=e.eval.AdaptiveRefinementNode=function(r,a,l){if(this.srf=r,this.neighbors=l??[null,null,null,null],this.corners=a,this.corners==null){var h=r.knotsU[0],f=de.last(r.knotsU),m=r.knotsV[0],y=de.last(r.knotsV);this.corners=[re.fromUv(h,m),re.fromUv(f,m),re.fromUv(f,y),re.fromUv(h,y)]}};n["verb.eval.AdaptiveRefinementNode"]=On,On.__name__="verb.eval.AdaptiveRefinementNode",On.prototype={isLeaf:function(){return this.children==null},center:function(){return this.centerPoint!=null?this.centerPoint:this.evalSrf(this.u05,this.v05)},evalCorners:function(){if(this.u05=(this.corners[0].uv[0]+this.corners[2].uv[0])/2,this.v05=(this.corners[0].uv[1]+this.corners[2].uv[1])/2,this.corners[0].point==null){var r=this.corners[0];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[1].point==null){var r=this.corners[1];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[2].point==null){var r=this.corners[2];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[3].point==null){var r=this.corners[3];this.evalSrf(r.uv[0],r.uv[1],r)}},evalSrf:function(r,a,l){var h=Y.rationalSurfaceDerivatives(this.srf,r,a,1),f=h[0][0],m=v.cross(h[0][1],h[1][0]),y=v.isZero(m);return y||(m=v.normalized(m)),l!=null?(l.degen=y,l.point=f,l.normal=m,l):new re(f,m,[r,a],-1,y)},getEdgeCorners:function(r){if(this.isLeaf())return[this.corners[r]];if(this.horizontal)switch(r){case 0:return this.children[0].getEdgeCorners(0);case 1:return this.children[0].getEdgeCorners(1).concat(this.children[1].getEdgeCorners(1));case 2:return this.children[1].getEdgeCorners(2);case 3:return this.children[1].getEdgeCorners(3).concat(this.children[0].getEdgeCorners(3))}switch(r){case 0:return this.children[0].getEdgeCorners(0).concat(this.children[1].getEdgeCorners(0));case 1:return this.children[1].getEdgeCorners(1);case 2:return this.children[1].getEdgeCorners(2).concat(this.children[0].getEdgeCorners(2));case 3:return this.children[0].getEdgeCorners(3)}return null},getAllCorners:function(r){var a=[this.corners[r]];if(this.neighbors[r]==null)return a;for(var l=this.neighbors[r].getEdgeCorners((r+2)%4),h=r%2,f=oe.EPSILON,m=this,y=[function(O){return O.uv[0]>m.corners[0].uv[0]+f?O.uv[0]<m.corners[2].uv[0]-f:!1},function(O){return O.uv[1]>m.corners[0].uv[1]+f?O.uv[1]<m.corners[2].uv[1]-f:!1}],E=y[h],w=[],L=0,R=l;L<R.length;){var I=R[L];++L,E(I)&&w.push(I)}var B=w;return B.reverse(),a.concat(B)},midpoint:function(r){if(this.midPoints==null&&(this.midPoints=[null,null,null,null]),this.midPoints[r]!=null)return this.midPoints[r];switch(r){case 0:this.midPoints[0]=this.evalSrf(this.u05,this.corners[0].uv[1]);break;case 1:this.midPoints[1]=this.evalSrf(this.corners[1].uv[0],this.v05);break;case 2:this.midPoints[2]=this.evalSrf(this.u05,this.corners[2].uv[1]);break;case 3:this.midPoints[3]=this.evalSrf(this.corners[0].uv[0],this.v05);break}return this.midPoints[r]},hasBadNormals:function(){return this.corners[0].degen||this.corners[1].degen||this.corners[2].degen?!0:this.corners[3].degen},fixNormals:function(){for(var r=this.corners.length,a=0,l=r;a<l;){var h=a++;if(this.corners[h],this.corners[h].degen){var f=this.corners[(h+1)%r],m=this.corners[(h+3)%r];this.corners[h].normal=f.degen?m.normal:f.normal}}},shouldDivide:function(r,a){if(a<r.minDepth)return!0;if(a>=r.maxDepth)return!1;if(this.hasBadNormals())return this.fixNormals(),!1;if(this.splitVert=v.normSquared(v.sub(this.corners[0].normal,this.corners[1].normal))>r.normTol||v.normSquared(v.sub(this.corners[2].normal,this.corners[3].normal))>r.normTol,this.splitHoriz=v.normSquared(v.sub(this.corners[1].normal,this.corners[2].normal))>r.normTol||v.normSquared(v.sub(this.corners[3].normal,this.corners[0].normal))>r.normTol,this.splitVert||this.splitHoriz)return!0;var l=this.center();return v.normSquared(v.sub(l.normal,this.corners[0].normal))>r.normTol||v.normSquared(v.sub(l.normal,this.corners[1].normal))>r.normTol||v.normSquared(v.sub(l.normal,this.corners[2].normal))>r.normTol?!0:v.normSquared(v.sub(l.normal,this.corners[3].normal))>r.normTol},divide:function(r){r==null&&(r=new Fn),r.normTol==null&&(r.normTol=.085),r.minDepth==null&&(r.minDepth=0),r.maxDepth==null&&(r.maxDepth=10),this._divide(r,0,!0)},_divide:function(r,a,l){if(this.evalCorners(),!!this.shouldDivide(r,a)){if(++a,this.splitVert&&!this.splitHoriz?l=!1:!this.splitVert&&this.splitHoriz&&(l=!0),this.horizontal=l,this.horizontal){var h=[this.corners[0],this.corners[1],this.midpoint(1),this.midpoint(3)],f=[this.midpoint(3),this.midpoint(1),this.corners[2],this.corners[3]];this.children=[new On(this.srf,h),new On(this.srf,f)],this.children[0].neighbors=[this.neighbors[0],this.neighbors[1],this.children[1],this.neighbors[3]],this.children[1].neighbors=[this.children[0],this.neighbors[1],this.neighbors[2],this.neighbors[3]]}else{var m=[this.corners[0],this.midpoint(0),this.midpoint(2),this.corners[3]],y=[this.midpoint(0),this.corners[1],this.corners[2],this.midpoint(2)];this.children=[new On(this.srf,m),new On(this.srf,y)],this.children[0].neighbors=[this.neighbors[0],this.children[1],this.neighbors[2],this.neighbors[3]],this.children[1].neighbors=[this.neighbors[0],this.neighbors[1],this.neighbors[2],this.children[0]]}for(var E=0,w=this.children;E<w.length;){var L=w[E];++E,L._divide(r,a,!l)}}},triangulate:function(r){if(r==null&&(r=Dt.empty()),this.isLeaf())return this.triangulateLeaf(r);for(var a=0,l=this.children;a<l.length;){var h=l[a];if(++a,h==null)break;h.triangulate(r)}return r},triangulateLeaf:function(r){var a=r.points.length,l=[],h=[],f=0,m=this.getAllCorners(0);m.length==2&&(f=1);for(var E=0,y=m.length;E<y;){var O=E++;l.push(m[O])}var m=this.getAllCorners(1);m.length==2&&(f=2);for(var E=0,y=m.length;E<y;){var O=E++;l.push(m[O])}var m=this.getAllCorners(2);m.length==2&&(f=3);for(var E=0,y=m.length;E<y;){var O=E++;l.push(m[O])}var m=this.getAllCorners(3);m.length==2&&(f=4);for(var E=0,y=m.length;E<y;){var O=E++;l.push(m[O])}for(var E=0;E<l.length;){var w=l[E];if(++E,w.id!=-1){h.push(w.id);continue}r.uvs.push(w.uv),r.points.push(w.point),r.normals.push(w.normal),w.id=a,h.push(a),++a}if(l.length==4)return r.faces.push([h[0],h[3],h[1]]),r.faces.push([h[3],h[2],h[1]]),r;if(l.length==5){var L=h.length;return r.faces.push([h[f],h[(f+2)%L],h[(f+1)%L]]),r.faces.push([h[(f+4)%L],h[(f+3)%L],h[f]]),r.faces.push([h[f],h[(f+3)%L],h[(f+2)%L]]),r}var R=this.center();r.uvs.push(R.uv),r.points.push(R.point),r.normals.push(R.normal);for(var I=r.points.length-1,B=0,O=l.length-1;B<l.length;)r.faces.push([I,h[B],h[O]]),++B,O=B-1;return r},__class__:On};var vt=e.exe.Dispatcher=function(){};n["verb.exe.Dispatcher"]=vt,vt.__name__="verb.exe.Dispatcher",vt.init=function(){vt._init||(vt._workerPool=new Ln(vt.THREADS),vt._init=!0)},vt.dispatchMethod=function(r,a,l){vt.init();var h=new Ee,f=function(m){h.resolve(m)};return vt._workerPool.addWork(r.__name__,a,l,f),new he(h)};var Ln=e.exe.WorkerPool=function(r,a){a==null&&(a="verb.js"),r==null&&(r=1),this._callbacks=new $,this._working=new $,this._pool=[],this._queue=[];for(var l=0,h=r;l<h;){l++;var f;try{f=new Worker(Ln.basePath+a)}catch{f=new Worker(Ln.basePath+a.substring(0,-3)+".min.js")}this._pool.push(f)}};n["verb.exe.WorkerPool"]=Ln,Ln.__name__="verb.exe.WorkerPool",Ln.prototype={addWork:function(r,a,l,h){var f=new ri(r,a,l);this._callbacks.h[f.id]=h,this._queue.push(f),this.processQueue()},processQueue:function(){for(var r=this;this._queue.length>0&&this._pool.length>0;){var a=this._queue.shift(),l=[a.id],h=[this._pool.shift()];this._working.h[l[0]]=h[0],h[0].onmessage=(function(f,m){return function(y){r._working.remove(m[0]),r._pool.push(f[0]);try{r._callbacks.h.hasOwnProperty(m[0])&&(r._callbacks.h[m[0]](y.data.result),r._callbacks.remove(m[0]))}catch(w){var E=x.caught(w).unwrap();console.log("src/verb/exe/WorkerPool.hx:82:",E)}r.processQueue()}})(h,l),h[0].postMessage(a)}},__class__:Ln};var ri=function(r,a,l){this.className=r,this.methodName=a,this.args=l,this.id=ri.uuid++};n["verb.exe._WorkerPool.Work"]=ri,ri.__name__="verb.exe._WorkerPool.Work",ri.prototype={__class__:ri};var Bn=function(){};n["verb.geom.ICurve"]=Bn,Bn.__name__="verb.geom.ICurve",Bn.__isInterface__=!0,Bn.__interfaces__=[Ue],Bn.prototype={__class__:Bn};var Rt=e.geom.NurbsCurve=function(r){this._data=It.isValidNurbsCurveData(r)};n["verb.geom.NurbsCurve"]=Rt,Rt.__name__="verb.geom.NurbsCurve",Rt.__interfaces__=[Bn],Rt.byKnotsControlPointsWeights=function(r,a,l,h){return new Rt(new Ge(r,a.slice(),Y.homogenize1d(l,h)))},Rt.byPoints=function(r,a){return a==null&&(a=3),new Rt(at.rationalInterpCurve(r,a))},Rt.__super__=Le,Rt.prototype=c(Le.prototype,{degree:function(){return this._data.degree},knots:function(){return this._data.knots.slice(0)},controlPoints:function(){return Y.dehomogenize1d(this._data.controlPoints)},weights:function(){return Y.weight1d(this._data.controlPoints)},asNurbs:function(){return new Ge(this.degree(),this.knots(),Y.homogenize1d(this.controlPoints(),this.weights()))},clone:function(){return new Rt(this._data)},domain:function(){return new Yt(de.first(this._data.knots),de.last(this._data.knots))},transform:function(r){return new Rt(dt.rationalCurveTransform(this._data,r))},transformAsync:function(r){return vt.dispatchMethod(dt,"rationalCurveTransform",[this._data,r]).then(function(a){return new Rt(a)})},point:function(r){return Y.rationalCurvePoint(this._data,r)},pointAsync:function(r){return vt.dispatchMethod(Y,"rationalCurvePoint",[this._data,r])},tangent:function(r){return Y.rationalCurveTangent(this._data,r)},tangentAsync:function(r){return vt.dispatchMethod(Y,"rationalCurveTangent",[this._data,r])},derivatives:function(r,a){return a==null&&(a=1),Y.rationalCurveDerivatives(this._data,r,a)},derivativesAsync:function(r,a){return a==null&&(a=1),vt.dispatchMethod(Y,"rationalCurveDerivatives",[this._data,r,a])},closestPoint:function(r){return Se.rationalCurveClosestPoint(this._data,r)},closestPointAsync:function(r){return vt.dispatchMethod(Se,"rationalCurveClosestPoint",[this._data,r])},closestParam:function(r){return Se.rationalCurveClosestParam(this._data,r)},closestParamAsync:function(r){return vt.dispatchMethod(Se,"rationalCurveClosestParam",[this._data,r])},length:function(){return Se.rationalCurveArcLength(this._data)},lengthAsync:function(){return vt.dispatchMethod(Se,"rationalCurveArcLength",[this._data])},lengthAtParam:function(r){return Se.rationalCurveArcLength(this._data,r)},lengthAtParamAsync:function(){return vt.dispatchMethod(Se,"rationalCurveArcLength",[this._data])},paramAtLength:function(r,a){return Se.rationalCurveParamAtArcLength(this._data,r,a)},paramAtLengthAsync:function(r,a){return vt.dispatchMethod(Se,"rationalCurveParamAtArcLength",[this._data,r,a])},divideByEqualArcLength:function(r){return Ut.rationalCurveByEqualArcLength(this._data,r)},divideByEqualArcLengthAsync:function(r){return vt.dispatchMethod(Ut,"rationalCurveByEqualArcLength",[this._data,r])},divideByArcLength:function(r){return Ut.rationalCurveByArcLength(this._data,r)},divideByArcLengthAsync:function(r){return vt.dispatchMethod(Ut,"rationalCurveByArcLength",[this._data,r])},split:function(r){for(var a=Ut.curveSplit(this._data,r),l=new Array(a.length),h=0,f=a.length;h<f;){var m=h++;l[m]=new Rt(a[m])}return l},splitAsync:function(r){return vt.dispatchMethod(Ut,"curveSplit",[this._data,r]).then(function(a){for(var l=new Array(a.length),h=0,f=a.length;h<f;){var m=h++;l[m]=new Rt(a[m])}return l})},reverse:function(){return new Rt(dt.curveReverse(this._data))},reverseAsync:function(){return vt.dispatchMethod(dt,"curveReverse",[this._data]).then(function(r){return new Rt(r)})},tessellate:function(r){return bt.rationalCurveAdaptiveSample(this._data,r,!1)},tessellateAsync:function(r){return vt.dispatchMethod(bt,"rationalCurveAdaptiveSample",[this._data,r,!1])},__class__:Rt});var Kn=e.geom.Arc=function(r,a,l,h,f,m){Rt.call(this,at.arc(r,a,l,h,f,m)),this._center=r,this._xaxis=a,this._yaxis=l,this._radius=h,this._minAngle=f,this._maxAngle=m};n["verb.geom.Arc"]=Kn,Kn.__name__="verb.geom.Arc",Kn.__super__=Rt,Kn.prototype=c(Rt.prototype,{center:function(){return this._center},xaxis:function(){return this._xaxis},yaxis:function(){return this._yaxis},radius:function(){return this._radius},minAngle:function(){return this._minAngle},maxAngle:function(){return this._maxAngle},__class__:Kn});var $i=e.geom.BezierCurve=function(r,a){Rt.call(this,at.rationalBezierCurve(r,a))};n["verb.geom.BezierCurve"]=$i,$i.__name__="verb.geom.BezierCurve",$i.__super__=Rt,$i.prototype=c(Rt.prototype,{__class__:$i});var Ki=e.geom.Circle=function(r,a,l,h){Kn.call(this,r,a,l,h,0,Math.PI*2)};n["verb.geom.Circle"]=Ki,Ki.__name__="verb.geom.Circle",Ki.__super__=Kn,Ki.prototype=c(Kn.prototype,{__class__:Ki});var pi=function(){};n["verb.geom.ISurface"]=pi,pi.__name__="verb.geom.ISurface",pi.__isInterface__=!0,pi.__interfaces__=[Ue],pi.prototype={__class__:pi};var P=e.geom.NurbsSurface=function(r){this._data=It.isValidNurbsSurfaceData(r)};n["verb.geom.NurbsSurface"]=P,P.__name__="verb.geom.NurbsSurface",P.__interfaces__=[pi],P.byKnotsControlPointsWeights=function(r,a,l,h,f,m){return new P(new et(r,a,l,h,Y.homogenize2d(f,m)))},P.byCorners=function(r,a,l,h){return new P(at.fourPointSurface(r,a,l,h))},P.byLoftingCurves=function(r,a){for(var l=[],h=0;h<r.length;){var f=r[h];++h,l.push(f.asNurbs())}return new P(at.loftedSurface(l,a))},P.__super__=Le,P.prototype=c(Le.prototype,{degreeU:function(){return this._data.degreeU},degreeV:function(){return this._data.degreeV},knotsU:function(){return this._data.knotsU.slice(0)},knotsV:function(){return this._data.knotsV.slice(0)},controlPoints:function(){return Y.dehomogenize2d(this._data.controlPoints)},weights:function(){return Y.weight2d(this._data.controlPoints)},asNurbs:function(){return new et(this.degreeU(),this.degreeV(),this.knotsU(),this.knotsV(),Y.homogenize2d(this.controlPoints(),this.weights()))},clone:function(){return new P(this.asNurbs())},domainU:function(){return new Yt(de.first(this._data.knotsU),de.last(this._data.knotsU))},domainV:function(){return new Yt(de.first(this._data.knotsV),de.last(this._data.knotsV))},point:function(r,a){return Y.rationalSurfacePoint(this._data,r,a)},pointAsync:function(r,a){return vt.dispatchMethod(Y,"rationalSurfacePoint",[this._data,r,a])},normal:function(r,a){return Y.rationalSurfaceNormal(this._data,r,a)},normalAsync:function(r,a){return vt.dispatchMethod(Y,"rationalSurfaceNormal",[this._data,r,a])},derivatives:function(r,a,l){return l==null&&(l=1),Y.rationalSurfaceDerivatives(this._data,r,a,l)},derivativesAsync:function(r,a,l){return l==null&&(l=1),vt.dispatchMethod(Y,"rationalSurfaceDerivatives",[this._data,r,a,l])},closestParam:function(r){return Se.rationalSurfaceClosestParam(this._data,r)},closestParamAsync:function(r){return vt.dispatchMethod(Se,"rationalSurfaceClosestParam",[this._data,r])},closestPoint:function(r){return Se.rationalSurfaceClosestPoint(this._data,r)},closestPointAsync:function(r){return vt.dispatchMethod(Se,"rationalSurfaceClosestPoint",[this._data,r])},split:function(r,a){a==null&&(a=!1);for(var l=Ut.surfaceSplit(this._data,r,a),h=new Array(l.length),f=0,m=l.length;f<m;){var y=f++;h[y]=new P(l[y])}return h},splitAsync:function(r,a){return a==null&&(a=!1),vt.dispatchMethod(Ut,"surfaceSplit",[this._data,r,a]).then(function(l){return l.map(function(h){return new P(h)})})},reverse:function(r){return r==null&&(r=!1),new P(dt.surfaceReverse(this._data,r))},reverseAsync:function(r){return r==null&&(r=!1),vt.dispatchMethod(dt,"surfaceReverse",[this._data,r]).then(function(a){return new P(a)})},isocurve:function(r,a){return a==null&&(a=!1),new Rt(at.surfaceIsocurve(this._data,r,a))},isocurveAsync:function(r,a){return a==null&&(a=!1),vt.dispatchMethod(at,"surfaceIsocurve",[this._data,r,a]).then(function(l){return new Rt(l)})},boundaries:function(r){for(var a=at.surfaceBoundaryCurves(this._data),l=new Array(a.length),h=0,f=a.length;h<f;){var m=h++;l[m]=new Rt(a[m])}return l},boundariesAsync:function(r){return vt.dispatchMethod(at,"surfaceBoundaryCurves",[this._data]).then(function(a){for(var l=new Array(a.length),h=0,f=a.length;h<f;){var m=h++;l[m]=new Rt(a[m])}return l})},tessellate:function(r){return bt.rationalSurfaceAdaptive(this._data,r)},tessellateAsync:function(r){return vt.dispatchMethod(bt,"rationalSurfaceAdaptive",[this._data,r])},transform:function(r){return new P(dt.rationalSurfaceTransform(this._data,r))},transformAsync:function(r){return vt.dispatchMethod(dt,"rationalSurfaceTransform",[this._data,r]).then(function(a){return new P(a)})},__class__:P});var te=e.geom.ConicalSurface=function(r,a,l,h,f){P.call(this,at.conicalSurface(r,a,l,h,f)),this._axis=r,this._xaxis=a,this._base=l,this._height=h,this._radius=f};n["verb.geom.ConicalSurface"]=te,te.__name__="verb.geom.ConicalSurface",te.__super__=P,te.prototype=c(P.prototype,{axis:function(){return this._axis},xaxis:function(){return this._xaxis},base:function(){return this._base},height:function(){return this._height},radius:function(){return this._radius},__class__:te});var le=e.geom.CylindricalSurface=function(r,a,l,h,f){P.call(this,at.cylindricalSurface(r,a,l,h,f)),this._axis=r,this._xaxis=a,this._base=l,this._height=h,this._radius=f};n["verb.geom.CylindricalSurface"]=le,le.__name__="verb.geom.CylindricalSurface",le.__super__=P,le.prototype=c(P.prototype,{axis:function(){return this._axis},xaxis:function(){return this._xaxis},base:function(){return this._base},height:function(){return this._height},radius:function(){return this._radius},__class__:le});var ae=e.geom.EllipseArc=function(r,a,l,h,f){Rt.call(this,at.ellipseArc(r,a,l,h,f)),this._center=r,this._xaxis=a,this._yaxis=l,this._minAngle=h,this._maxAngle=f};n["verb.geom.EllipseArc"]=ae,ae.__name__="verb.geom.EllipseArc",ae.__super__=Rt,ae.prototype=c(Rt.prototype,{center:function(){return this._center},xaxis:function(){return this._xaxis},yaxis:function(){return this._yaxis},minAngle:function(){return this._minAngle},maxAngle:function(){return this._maxAngle},__class__:ae});var ne=e.geom.Ellipse=function(r,a,l){ae.call(this,r,a,l,0,Math.PI*2)};n["verb.geom.Ellipse"]=ne,ne.__name__="verb.geom.Ellipse",ne.__super__=ae,ne.prototype=c(ae.prototype,{__class__:ne});var Re=e.geom.ExtrudedSurface=function(r,a){P.call(this,at.extrudedSurface(v.normalized(a),v.norm(a),r.asNurbs())),this._profile=r,this._direction=a};n["verb.geom.ExtrudedSurface"]=Re,Re.__name__="verb.geom.ExtrudedSurface",Re.__super__=P,Re.prototype=c(P.prototype,{profile:function(){return this._profile},direction:function(){return this._direction},__class__:Re});var Ne=e.geom.Intersect=function(){};n["verb.geom.Intersect"]=Ne,Ne.__name__="verb.geom.Intersect",Ne.curves=function(r,a,l){return l==null&&(l=.001),qe.curves(r.asNurbs(),a.asNurbs(),l)},Ne.curvesAsync=function(r,a,l){return l==null&&(l=.001),vt.dispatchMethod(qe,"curves",[r.asNurbs(),a.asNurbs(),l])},Ne.curveAndSurface=function(r,a,l){return l==null&&(l=.001),qe.curveAndSurface(r.asNurbs(),a.asNurbs(),l)},Ne.curveAndSurfaceAsync=function(r,a,l){return l==null&&(l=.001),vt.dispatchMethod(qe,"curveAndSurface",[r.asNurbs(),a.asNurbs(),l])},Ne.surfaces=function(r,a,l){l==null&&(l=.001);for(var h=qe.surfaces(r.asNurbs(),a.asNurbs(),l),f=new Array(h.length),m=0,y=h.length;m<y;){var E=m++;f[E]=new Rt(h[E])}return f},Ne.surfacesAsync=function(r,a,l){return l==null&&(l=.001),vt.dispatchMethod(qe,"surfaces",[r.asNurbs(),a.asNurbs(),l]).then(function(h){return h.map(function(f){return new Rt(f)})})};var Ye=e.geom.Line=function(r,a){Rt.call(this,at.polyline([r,a])),this._start=r,this._end=a};n["verb.geom.Line"]=Ye,Ye.__name__="verb.geom.Line",Ye.__super__=Rt,Ye.prototype=c(Rt.prototype,{start:function(){return this._start},end:function(){return this._end},__class__:Ye});var $e=e.geom.RevolvedSurface=function(r,a,l,h){P.call(this,at.revolvedSurface(r.asNurbs(),a,l,h)),this._profile=r,this._center=a,this._axis=l,this._angle=h};n["verb.geom.RevolvedSurface"]=$e,$e.__name__="verb.geom.RevolvedSurface",$e.__super__=P,$e.prototype=c(P.prototype,{profile:function(){return this._profile},center:function(){return this._center},axis:function(){return this._center},angle:function(){return this._angle},__class__:$e});var ct=e.geom.SphericalSurface=function(r,a){P.call(this,at.sphericalSurface(r,[0,0,1],[1,0,0],a)),this._center=r,this._radius=a};n["verb.geom.SphericalSurface"]=ct,ct.__name__="verb.geom.SphericalSurface",ct.__super__=P,ct.prototype=c(P.prototype,{center:function(){return this._center},radius:function(){return this._radius},__class__:ct});var pt=e.geom.SweptSurface=function(r,a){P.call(this,at.rationalTranslationalSurface(r.asNurbs(),a.asNurbs())),this._profile=r,this._rail=a};n["verb.geom.SweptSurface"]=pt,pt.__name__="verb.geom.SweptSurface",pt.__super__=P,pt.prototype=c(P.prototype,{profile:function(){return this._profile},rail:function(){return this._rail},__class__:pt});function Oe(r){return r instanceof Array?new ue(r):r.iterator()}function mt(r,a){if(a==null)return null;a.__id__==null&&(a.__id__=t.$haxeUID++);var l;return r.hx__closures__==null?r.hx__closures__={}:l=r.hx__closures__[a.__id__],l==null&&(l=a.bind(r),r.hx__closures__[a.__id__]=l),l}t.$haxeUID|=0,typeof performance<"u"&&typeof performance.now=="function"&&(d.now=performance.now.bind(performance)),n.Math=Math,String.fromCodePoint==null&&(String.fromCodePoint=function(r){return r<65536?String.fromCharCode(r):String.fromCharCode((r>>10)+55232)+String.fromCharCode((r&1023)+56320)}),Object.defineProperty(String.prototype,"__class__",{value:n.String=String,enumerable:!1,writable:!0}),String.__name__="String",n.Array=Array,Array.__name__="Array",Date.prototype.__class__=n.Date=Date,Date.__name__="Date";var Vt={},$t={},gn=Number,Ot=Boolean,Qe={},zn={};ee.__toStr={}.toString,g.USE_CACHE=!1,g.USE_ENUM_INDEX=!1,g.BASE64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:",F.DEFAULT_RESOLVER=new k,F.BASE64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:",ve.queue=new H,Ze.memo=new $,e.TOLERANCE=oe.TOLERANCE=1e-6,e.EPSILON=oe.EPSILON=1e-10,e.VERSION=oe.VERSION="3.0.3",Se.Tvalues=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],Se.Cvalues=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],vt.THREADS=1,vt._init=!1,Ln.basePath="",ri.uuid=0,Je.main()})(i,typeof window<"u"?window:typeof po<"u"?po:typeof self<"u"?self:po)})($u);const ov=$u;var lv=ov,dr=av(lv);function cv(i,e){const t=new An,n=i.map(s=>new Z(s[0]??0,s[1]??0,s[2]??0));if(n.length>=2){const s=new jt().setFromPoints(n),o=new di(s,new Yn({color:e,transparent:!0,opacity:.5}));t.add(o)}if(n.length<=200){const s=new es(.009,8,8),o=new Es({color:e});for(const u of n){const c=new vn(s,o);c.position.copy(u),t.add(c)}}return t}function va(i,e,t,n,s=16737894){const u=dr.geom.NurbsCurve.byKnotsControlPointsWeights(i.order-1,i.knots,i.coeffs).asNurbs();let c=0;for(const C of u.controlPoints){const T=C[3]??1;for(let x=0;x<3;x++){const g=Math.abs((C[x]??0)/T);g>c&&(c=g)}}const d=Math.min(2e4,Math.max(200,Math.ceil(c*200))),p=dr.eval.Tess.rationalCurveRegularSample(u,d,!1);if(p.length<2)return;const _=p.map(C=>new Z(C[0],C[1],C[2])),M=new An,S=new jt().setFromPoints(_),b=new Yn({color:t});M.add(new di(S,b)),$n(M,e),$n(cv(i.coeffs,s),`${e}-control`),ts(M)}function Ku(i,e,t=4491485){const n=new An,s=i.points.map(T=>new Z(T[0]??0,T[1]??0,T[2]??0));let o=1/0,u=1/0,c=1/0,d=-1/0,p=-1/0,_=-1/0;for(const T of s)T.x<o&&(o=T.x),T.x>d&&(d=T.x),T.y<u&&(u=T.y),T.y>p&&(p=T.y),T.z<c&&(c=T.z),T.z>_&&(_=T.z);const M=Math.max(d-o,p-u,_-c),S=Math.max(.005,Math.min(.4,M*.0017)),b=new es(S,6,6),C=new Es({color:t});for(const T of s){const x=new vn(b,C);x.position.copy(T),n.add(x)}if($n(n,e),s.length<=2e3){const T=new An,x=new jt().setFromPoints(s),g=new Yn({color:t,transparent:!0,opacity:.4});T.add(new di(x,g)),$n(T,`${e}-polyline`)}ts(n)}function ju(i){const e=[];for(let t=0;t<i.nU;t++){const n=[];for(let s=0;s<i.nV;s++){const o=i.coeffs[t*i.nV+s];n.push([o[0]??0,o[1]??0,o[2]??0])}e.push(n)}return e}function uv(i){const e=i.points.length,t=new Float32Array(e*3),n=new Float32Array(e*3);for(let u=0;u<e;u++){const c=i.points[u];t[u*3+0]=c[0],t[u*3+1]=c[1],t[u*3+2]=c[2];const d=i.normals[u]??[0,0,1];n[u*3+0]=d[0],n[u*3+1]=d[1],n[u*3+2]=d[2]}const s=new Uint32Array(i.faces.length*3);for(let u=0;u<i.faces.length;u++){const c=i.faces[u];s[u*3+0]=c[0],s[u*3+1]=c[1],s[u*3+2]=c[2]}const o=new jt;return o.setAttribute("position",new mn(t,3)),o.setAttribute("normal",new mn(n,3)),o.setIndex(new mn(s,1)),o}function Zu(i,e){const t=new An,{nU:n,nV:s,coeffs:o}=i;if(o.length<n*s)return t;const u=[];for(let c=0;c<n;c++)for(let d=0;d<s;d++){const p=o[c*s+d];u.push(new Z(p[0]??0,p[1]??0,p[2]??0))}for(let c=0;c<n;c++){const d=[];for(let M=0;M<s;M++)d.push(u[c*s+M]);const p=new jt().setFromPoints(d),_=new Yn({color:e,transparent:!0,opacity:.4});t.add(new di(p,_))}for(let c=0;c<s;c++){const d=[];for(let M=0;M<n;M++)d.push(u[M*s+c]);const p=new jt().setFromPoints(d),_=new Yn({color:e,transparent:!0,opacity:.4});t.add(new di(p,_))}if(n*s<=200){const c=new es(.012,6,6),d=new Es({color:e});for(const p of u){const _=new vn(c,d);_.position.copy(p),t.add(_)}}return t}function hv(i,e,t,n,s,o={},u=16737894){s?.("Tessellating..."),i.nU*i.nV;const c={maxDepth:o.maxDepth??5,minDivsU:o.minDivsU??8,minDivsV:o.minDivsV??8,normTol:o.normTol??.05},d=dr.geom.NurbsSurface.byKnotsControlPointsWeights(i.orderU-1,i.orderV-1,i.knotsU,i.knotsV,ju(i));let p;try{p=d.tessellate({minDivsU:c.minDivsU,minDivsV:c.minDivsV,maxDepth:c.maxDepth,minDepth:0,normTol:c.normTol,refine:!0})}catch(C){s?.(`Tessellation failed: ${String(C)}`);return}const _=uv(p);_.computeBoundingBox(),_.computeBoundingSphere();const M=new Es({color:t,side:ti,shininess:80,specular:1118481,flatShading:!1}),S=new An,b=new vn(_,M);S.add(b),$n(S,e),$n(Zu(i,u),`${e}-control`),s?.(`Surface rendered with ${p.faces.length/2|0} quads (${p.points.length} verts)`),ts(S)}function ga(i,e,t,n,s,o=16737894){const u=new jt;u.setAttribute("position",new mn(i.positions,3)),u.setAttribute("normal",new mn(i.normals,3)),u.setIndex(new mn(i.indices,1)),u.computeBoundingBox(),u.computeBoundingSphere();const c=new Es({color:t,side:ti,shininess:80,specular:1118481,flatShading:!1}),d=new An;d.add(new vn(u,c)),$n(d,e),$n(Zu(i.surface,o),`${e}-control`),s?.(`Surface rendered with ${i.numQuads} quads (${i.numVerts} verts)`),ts(d)}function fv(i,e){const t=dr.geom.NurbsSurface.byKnotsControlPointsWeights(i.orderU-1,i.orderV-1,i.knotsU,i.knotsV,ju(i)),n=new An,s=16,o=200,u=i.knotsU[0],c=i.knotsU[i.knotsU.length-1],d=i.knotsV[0],p=i.knotsV[i.knotsV.length-1],_=new Yn({color:e,transparent:!0,opacity:.45});for(let M=0;M<s;M++){const S=u+(c-u)*(M/(s-1)),b=[];for(let T=0;T<o;T++){const x=d+(p-d)*(T/(o-1)),g=t.point(S,x);b.push(new Z(g[0],g[1],g[2]))}const C=new jt().setFromPoints(b);n.add(new di(C,_))}for(let M=0;M<s;M++){const S=d+(p-d)*(M/(s-1)),b=[];for(let T=0;T<o;T++){const x=u+(c-u)*(T/(o-1)),g=t.point(x,S);b.push(new Z(g[0],g[1],g[2]))}const C=new jt().setFromPoints(b);n.add(new di(C,_))}return n}function mo(i,e,t=15658734){Yu(i)||$n(fv(e,t),i)}function _o(i,e,t=2236962){if(Yu(e))return;const n=nv().getObjectByName(i);if(!n)return;let s=null;if(n.traverse(d=>{!s&&d.isMesh&&(s=d.geometry)}),!s)return;const o=new T_(s),u=new Yn({color:t,transparent:!0,opacity:.5}),c=new An;c.add(new Ra(o,u)),$n(c,e)}function Ju(i,e,t=4491485){const n=new An,s=new An,{nU:o,nV:u,points:c}=i,d=[];let p=1/0,_=1/0,M=1/0,S=-1/0,b=-1/0,C=-1/0;for(let H=0;H<o;H++){const G=[];for(let X=0;X<u;X++){const N=c[H][X],U=N[0]??0,W=N[1]??0,ue=N[2]??0;U<p&&(p=U),U>S&&(S=U),W<_&&(_=W),W>b&&(b=W),ue<M&&(M=ue),ue>C&&(C=ue),G.push(new Z(U,W,ue))}d.push(G)}const T=Math.max(S-p,b-_,C-M),x=Math.max(.003,Math.min(.4,T*16e-5)),g=new Yn({color:t,transparent:!0,opacity:.4,depthTest:!1});for(let H=0;H<u;H++){const G=[];for(let N=0;N<o;N++)G.push(d[N][H]);const X=new jt().setFromPoints(G);s.add(new di(X,g))}for(let H=0;H<o;H++){const G=[];for(let N=0;N<u;N++)G.push(d[H][N]);const X=new jt().setFromPoints(G);s.add(new di(X,g))}s.renderOrder=9;const k=new Float32Array(o*u*3);for(let H=0;H<o;H++)for(let G=0;G<u;G++){const X=d[H][G],N=(H*u+G)*3;k[N+0]=X.x,k[N+1]=X.y,k[N+2]=X.z}const F=new jt;F.setAttribute("position",new mn(k,3));const A=new Bu({color:t,size:x*2,sizeAttenuation:!0,depthTest:!1,transparent:!0,opacity:.55}),$=new E_(F,A);$.renderOrder=10,n.add($),$n(n,e),$n(s,`${e}-polyline`),ts(n)}function dv(i){return new Worker("/knot-removal-minimax3-app/assets/surface.worker-CAhE0hPi.js",{type:"module",name:i?.name})}let la=null,Qu=1;const ar=new Map;function eh(){if(la)return la;const i=new dv;return la=i,i.onmessage=e=>{const t=e.data;if(t.type==="progress"){const n=ar.get(t.id);if(!n?.onProgress)return;const s=performance.now();if(s-n.lastProgressPost<50)return;n.lastProgressPost=s,n.onProgress(t.phase,t.ratio,t.msg)}else if(t.type==="done"){const n=ar.get(t.id);if(!n)return;ar.delete(t.id),n.resolve({surface:t.surface,positions:t.positions,normals:t.normals,indices:t.indices,numQuads:t.numQuads,numVerts:t.numVerts,ms:t.ms})}else if(t.type==="error"){const n=ar.get(t.id);if(!n)return;ar.delete(t.id),n.reject(new Error(t.message))}},la}function ca(i,e){const t=Qu++,n=eh(),s={type:"tessellate",id:t,url:`/knot-removal-minimax3-app/samples/${i}.json`,tessOpts:{}};return new Promise((o,u)=>{ar.set(t,{resolve:o,reject:u,onProgress:e,lastProgressPost:0}),n instanceof Worker?n.postMessage(s):u(new Error("Worker not initialized"))})}function vo(i,e,t){const n=Qu++,s=eh(),o={type:"tessellate-only",id:n,label:e,surface:i,tessOpts:{}};return new Promise((u,c)=>{ar.set(n,{resolve:u,reject:c,onProgress:t,lastProgressPost:0}),s.postMessage(o)})}async function go(i){const e=await fetch(`/knot-removal-minimax3-app/samples/curve-${i}.json`);if(!e.ok)throw new Error(`Failed to load curve-${i}.json: HTTP ${e.status}`);const t=await e.json();if(t.knots.length!==t.numPoints+t.order)throw new Error(`curve-${i}.json: knot count ${t.knots.length} != ${t.numPoints} + ${t.order}`);if(t.coeffs.length!==t.numPoints)throw new Error(`curve-${i}.json: coeffs length ${t.coeffs.length} != ${t.numPoints}`);return t}async function th(i){const e=await fetch(`/knot-removal-minimax3-app/samples/${i}.json`);if(!e.ok)throw new Error(`Failed to load ${i}.json: HTTP ${e.status}`);return await e.json()}function pv(){const e=[];for(let n=0;n<20;n++){const s=n/20*Math.PI*2;e.push([Math.cos(s),Math.sin(s)])}const t=[0,0,0,0];for(let n=1;n<=16;n++)t.push(n/17);return t.push(1,1,1,1),{order:4,dim:2,numPoints:20,knots:t,coeffs:e}}function nh(){return{order:6,dim:3,numPoints:14,knots:[0,0,0,0,0,0,.1124826442468747,.2186280153221363,.3312257321005593,.4420386028039535,.5509513362085112,.6617226594445149,.7798605488683164,.8929381439918187,1,1,1,1,1,1],coeffs:[[0,0,1],[.07692307692307693,.4647231720437686,.8854560256532099],[.1538461538461539,.8229838658936565,.5680647467311558],[.2307692307692308,.992708874098054,.120536680255323],[.3076923076923077,.9350162426854148,-.3546048870425357],[.3846153846153846,.6631226582407952,-.7485107481711012],[.4615384615384616,.2393156642875577,-.970941817426052],[.5384615384615384,-.2393156642875574,-.9709418174260521],[.6153846153846154,-.6631226582407953,-.748510748171101],[.6923076923076923,-.9350162426854147,-.3546048870425359],[.7692307692307693,-.992708874098054,.1205366802553232],[.8461538461538461,-.8229838658936566,.5680647467311556],[.9230769230769231,-.4647231720437684,.88545602565321],[1,-2449293598294706e-31,1]]}}function ih(i,e){if(i<e+1)throw new Error(`buildHighOrderCurve: n=${i} < order+1=${e+1}`);const t=[];for(let s=0;s<i;s++){const o=s/(i-1)*4;t.push([Math.sin(o)+.3*Math.sin(3*o),Math.cos(o*1.7)+.2*Math.sin(2*o),.4*Math.sin(o*2.3)])}const n=[];for(let s=0;s<e;s++)n.push(0);for(let s=1;s<=i-e;s++)n.push(s/(i-e+1));for(let s=0;s<e;s++)n.push(1);return{order:e,dim:3,numPoints:i,knots:n,coeffs:t}}function mv(){return ih(16,7)}function _v(){return ih(18,9)}function wl(i,e,t,n,s){if(i<t+1)throw new Error(`buildHighOrderSurface: nU=${i} < orderU+1=${t+1}`);if(e<n+1)throw new Error(`buildHighOrderSurface: nV=${e} < orderV+1=${n+1}`);const o=[];for(let c=0;c<i;c++){const d=c/(i-1);for(let p=0;p<e;p++){const _=p/(e-1);o.push(s(d,_))}}const u=(c,d)=>{const p=[];for(let _=0;_<d;_++)p.push(0);for(let _=1;_<=c-d;_++)p.push(_/(c-d+1));for(let _=0;_<d;_++)p.push(1);return p};return{orderU:t,orderV:n,dim:3,nU:i,nV:e,knotsU:u(i,t),knotsV:u(e,n),coeffs:o}}function vv(){return wl(9,9,5,5,(i,e)=>{const t=2*Math.PI*i,n=Math.PI/2*e,s=Math.cos(n);return[Math.cos(t)*s,Math.sin(t)*s,Math.sin(n)]})}function gv(){return wl(9,9,6,6,(i,e)=>{const t=2*i-1,n=2*e-1;return[t,n,t*t-n*n]})}function xv(){return wl(9,9,7,7,(i,e)=>{const t=2*Math.PI*i,n=e-.5,s=Math.cosh(n);return[Math.cos(t)*s,Math.sin(t)*s,n]})}function rh(i){const e=[];for(let t=0;t<i.nU;t++){const n=[];for(let s=0;s<i.nV;s++){const o=i.coeffs[t*i.nV+s];n.push([o[0]??0,o[1]??0,o[2]??0])}e.push(n)}return e}function Mv(i,e){const t=dr.geom.NurbsCurve.byKnotsControlPointsWeights(i.order-1,i.knots,i.coeffs),n=Math.max(e,4)+1,s=[];for(let d=0;d<n;d++){const p=d/(n-1),_=t.point(p);s.push([_[0]??0,_[1]??0,_[2]??0])}if(s.length<2)return Array.from({length:e},()=>i.coeffs[0].slice());const o=[0];for(let d=1;d<s.length;d++){const p=s[d][0]-s[d-1][0],_=s[d][1]-s[d-1][1],M=s[d][2]-s[d-1][2];o.push(o[d-1]+Math.sqrt(p*p+_*_+M*M))}const u=o[o.length-1]||1,c=[];for(let d=0;d<e;d++){const p=d/(e-1)*u;let _=0,M=o.length-1;for(;_<M;){const g=_+M>>1;o[g]<p?_=g+1:M=g}const S=_===0?0:_-1,b=o[_]-o[S]||1,C=(p-o[S])/b,T=(S+C)/(s.length-1),x=t.point(T);c.push([x[0]??0,x[1]??0,x[2]??0])}return c}function Zc(i=30,e=4){const t=[];for(let n=0;n<i;n++){const s=n/i*Math.PI*2;t.push([Math.cos(s),Math.sin(s),0])}return{dim:3,numPoints:i,order:e,points:t}}function Jc(i=40,e=4){const t=nh();return{dim:t.dim,numPoints:i,order:e,points:Mv(t,i)}}async function Qc(i=100,e=100,t=4,n=4){const s=await th("venus"),o=dr.geom.NurbsSurface.byKnotsControlPointsWeights(s.orderU-1,s.orderV-1,s.knotsU,s.knotsV,rh(s)),u=[];for(let c=0;c<i;c++){const d=[],p=c/(i-1);for(let _=0;_<e;_++){const M=_/(e-1),S=o.point(p,M);d.push([S[0],S[1],S[2]])}u.push(d)}return{dim:s.dim,nU:i,nV:e,orderU:t,orderV:n,points:u}}async function eu(i=100,e=100,t=4,n=4){const s=await th("flower"),o=dr.geom.NurbsSurface.byKnotsControlPointsWeights(s.orderU-1,s.orderV-1,s.knotsU,s.knotsV,rh(s)),u=[];for(let c=0;c<i;c++){const d=[],p=c/(i-1);for(let _=0;_<e;_++){const M=_/(e-1),S=o.point(p,M);d.push([S[0],S[1],S[2]])}u.push(d)}return{dim:s.dim,nU:i,nV:e,orderU:t,orderV:n,points:u}}function sh(i){const e=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(i<.5)return Math.PI/(Math.sin(Math.PI*i)*sh(1-i));i-=1;let t=e[0];for(let s=1;s<e.length;s++)t+=e[s]/(i+s);const n=i+e.length-1.5;return Math.sqrt(2*Math.PI)*Math.pow(n,i+.5)*Math.exp(-n)*t}function tu(i,e){if(e===0)return 0;const t=e/2;let n=Math.pow(t,i)/sh(i+1),s=n;for(let o=1;o<80&&(n*=-(t*t)/(o*(o+i)),s+=n,!(Math.abs(n)<1e-16*Math.abs(s)));o++);return s}function Sv(i,e){if(i===0&&e>=-1&&e<=0||!(i>=0||e>=0))return 0;const u=Math.sqrt(i*i+e*e),c=Math.sin(2/3*(Math.atan2(-i,e)+Math.PI));return(1.275*tu(2/3,3.18*u)+.805*tu(2/3,1.96*u))*c}function yv(i=201,e=201,t=4,n=4){const s=[];for(let o=0;o<i;o++){const u=-1+2*o/(i-1),c=[];for(let d=0;d<e;d++){const p=-1+2*d/(e-1);c.push([u,p,Sv(u,p)])}s.push(c)}return{dim:3,nU:i,nV:e,orderU:t,orderV:n,points:s}}function bv(i,e){const t={mode:"curve",algorithm:"remove",tolerance:[.01,.01,.01],leftEnd:1,rightEnd:2,uLeftEnd:0,uRightEnd:0,vLeftEnd:0,vRightEnd:0,maxIter:100,running:!1,showOriginalCurve:!0,showResultCurve:!0,showOriginalControl:!0,showResultControl:!0,showOriginalIso:!1,showResultIso:!1,showOriginalMesh:!1,showResultMesh:!1,showOriginalPoints:!0,showPointPolyline:!1,hasResult:!1};let n=Ev,s=[];function o(){i.innerHTML="";const u=document.createElement("h2");u.textContent="Algorithm",i.appendChild(u),Ir(i,"Mode"),Si(i,"Mode",[["Curve","curve"],["Surface","surface"]],t.mode,T=>{t.mode=T,e.onModeChange(t.mode),o()}),Ir(i,"Algorithm");const c=t.mode==="curve"?"Curve Algorithm":"Surface Algorithm",d=t.mode==="curve"?[["Knot Removal","remove"],["To Cubic","to_cubic"],["Approximate From Points","approximate_from_points"]]:[["Knot Removal","remove"],["To Bicubic","to_cubic"],["Approximate From Points","approximate_from_points"]];Si(i,c,d,t.algorithm,T=>{t.algorithm=T,o(),e.onAlgorithmChange(t.algorithm)}),Ir(i,"Presets");const p=t.algorithm==="approximate_from_points",_=p?t.mode==="curve"?"Load Data Points":"Load Grid Points":"Load NURBS",M=p?t.mode==="curve"?[["Circle samples (30)","circle_pts_30"],["Circle samples (60)","circle_pts_60"],["Quintic samples (40)","quintic_pts_40"],["Quintic samples (80)","quintic_pts_80"]]:[["Venus samples (100x100)","venus_pts_100"],["Venus samples (200x200)","venus_pts_200"],["Flower samples (100x100)","flower_pts_100"],["Flower samples (200x200)","flower_pts_200"],["Matlab samples (201x201)","matlab_pts_201"]]:t.mode==="curve"?t.algorithm==="to_cubic"?[["Quintic (3D, order 6)","quintic"],["High-order curve (order 7)","high_order_curve7"],["High-order curve (order 9)","high_order_curve9"]]:[["Circle","circle"],["Blade (200)","blade"],["Circle (318)","circle-dense"],["Ellipse (318)","ellipse"]]:t.algorithm==="to_cubic"?[["Hemisphere (order 5)","hemisphere5"],["Saddle (order 6)","saddle6"],["Catenoid (order 7)","catenoid7"]]:[["Flower (101x101)","flower"],["Buste (226x226)","buste"],["Venus (46x51)","venus"],["Head (201x1156)","head"]];Si(i,_,[["(none)",""],...M],"",async T=>{const x=i.querySelectorAll("select")[i.querySelectorAll("select").length-1],g=k=>{x.disabled=k};try{if(T==="circle")e.onPreset(pv(),void 0);else if(T==="quintic")e.onPreset(nh(),void 0);else if(T==="high_order_curve7")e.onPreset(mv(),void 0);else if(T==="high_order_curve9")e.onPreset(_v(),void 0);else if(T==="blade")e.onPreset(await go("blade"),void 0);else if(T==="circle-dense")e.onPreset(await go("circle-dense"),void 0);else if(T==="ellipse")e.onPreset(await go("ellipse"),void 0);else if(T==="circle_pts_30")e.onPreset(void 0,void 0,Zc(30));else if(T==="circle_pts_60")e.onPreset(void 0,void 0,Zc(60));else if(T==="quintic_pts_40")e.onPreset(void 0,void 0,Jc(40));else if(T==="quintic_pts_80")e.onPreset(void 0,void 0,Jc(80));else if(T==="hemisphere5")e.onPreset(void 0,vv());else if(T==="saddle6")e.onPreset(void 0,gv());else if(T==="catenoid7")e.onPreset(void 0,xv());else if(T==="venus_pts_100")e.onPreset(void 0,void 0,void 0,await Qc(100,100));else if(T==="venus_pts_200")e.onPreset(void 0,void 0,void 0,await Qc(200,200));else if(T==="flower_pts_100")e.onPreset(void 0,void 0,void 0,await eu(100,100));else if(T==="flower_pts_200")e.onPreset(void 0,void 0,void 0,await eu(200,200));else if(T==="matlab_pts_201")e.onPreset(void 0,void 0,void 0,yv(201,201));else if(T==="flower"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await ca("flower",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="buste"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await ca("buste",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="venus"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await ca("venus",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="head"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await ca("head",n);e.onPreset(void 0,k),e.onLoadEnd?.()}}catch(k){console.error("Preset load failed:",k)}finally{g(!1)}}),Ir(i,"Tolerance");const S=(t.mode==="curve",3);t.tolerance.length<S&&(t.tolerance=Array(S).fill(.01)),s=[];for(let T=0;T<S;T++){const x=nu(i,`Dim ${T}`,t.tolerance[T]??.01,1e-4,1e4,.01,g=>{t.tolerance[T]=g});s.push(x)}Ir(i,"End Conditions");const b=["Free","FixedPosition","FixedTangent","FixedCurvature"];t.mode==="curve"?(Si(i,"Left End",b.map((T,x)=>[T,String(x)]),String(t.leftEnd),T=>{t.leftEnd=Number(T)}),Si(i,"Right End",b.map((T,x)=>[T,String(x)]),String(t.rightEnd),T=>{t.rightEnd=Number(T)})):(Si(i,"U Left",b.map((T,x)=>[T,String(x)]),String(t.uLeftEnd),T=>{t.uLeftEnd=Number(T)}),Si(i,"U Right",b.map((T,x)=>[T,String(x)]),String(t.uRightEnd),T=>{t.uRightEnd=Number(T)}),Si(i,"V Left",b.map((T,x)=>[T,String(x)]),String(t.vLeftEnd),T=>{t.vLeftEnd=Number(T)}),Si(i,"V Right",b.map((T,x)=>[T,String(x)]),String(t.vRightEnd),T=>{t.vRightEnd=Number(T)})),Ir(i,"Options"),nu(i,"Max Iterations",t.maxIter,1,500,1,T=>{t.maxIter=T});const C=document.createElement("button");C.id="run-algo-btn",C.textContent=t.running?"Running...":"Run Algorithm",C.disabled=t.running,C.addEventListener("click",()=>e.onRun(t)),i.appendChild(C)}return o(),{state:t,setLoadProgress:u=>{n=u},setToleranceBounds:u=>{const c=Math.max(1e-4,u);for(let d=0;d<s.length;d++)s[d].slider.max=String(c),s[d].num.max=String(c),t.tolerance[d]>c&&(t.tolerance[d]=c,s[d].slider.value=String(c),s[d].num.value=String(c))},setTolerance:u=>{for(let c=0;c<s.length&&c<u.length;c++){const d=parseFloat(s[c].slider.max)||1e4,p=Math.max(1e-4,Math.min(d,u[c]));t.tolerance[c]=p,s[c].slider.value=String(p),s[c].num.value=String(p)}}}}function Ir(i,e){const t=document.createElement("div");t.className="section";const n=document.createElement("label");n.textContent=e,n.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",t.appendChild(n),i.appendChild(t)}const Ev=(i,e,t)=>{};function Si(i,e,t,n,s){const o=document.createElement("label");o.textContent=e,i.appendChild(o);const u=document.createElement("select");for(const[c,d]of t){const p=document.createElement("option");p.value=d,p.textContent=c,d===n&&(p.selected=!0),u.appendChild(p)}u.addEventListener("change",()=>s(u.value)),i.appendChild(u)}function nu(i,e,t,n,s,o,u){const c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:6px;";const d=document.createElement("span");d.textContent=e,d.style.cssText="font-size:11px;min-width:45px;",c.appendChild(d);const p=document.createElement("input");p.type="range",p.min=String(n),p.max=String(s),p.step=String(o),p.value=String(t),p.style.cssText="flex:1;";const _=document.createElement("input");_.type="number",_.min=String(n),_.max=String(s),_.step=String(o),_.value=String(t),_.style.cssText="font-size:11px;width:70px;text-align:right;background:#0e1626;color:#dde;border:1px solid #2a3a5a;border-radius:3px;padding:2px 4px;";const M=n,S=b=>Math.max(M,Math.min(parseFloat(p.max)||s,b));return p.addEventListener("input",()=>{const b=parseFloat(p.value);_.value=String(b),u(b)}),_.addEventListener("input",()=>{const b=parseFloat(_.value);if(isNaN(b))return;const C=S(b);p.value=String(C),u(C)}),_.addEventListener("change",()=>{const b=parseFloat(_.value);if(isNaN(b))_.value=p.value;else{const C=S(b);_.value=String(C),p.value=String(C)}}),c.appendChild(p),c.appendChild(_),i.appendChild(c),{slider:p,num:_}}function rn(i){if(!Number.isFinite(i))return String(i);if(i===0)return"0";const e=Math.abs(i);return e>=1e6||e<1e-4?i.toExponential(3):i.toFixed(4)}function xo(i){if(i.length===0)return"-";const e=[...new Set(i)].length;return`[${rn(i[0])}, ${rn(i[i.length-1])}] (${i.length} knots, ${e} unique)`}function ua(i){return i<1e3?`${i.toFixed(0)} ms`:`${(i/1e3).toFixed(2)} s`}function oi(i,e,t){const n=document.createElement("label");n.style.cssText="display:block;font-size:12px;cursor:pointer;color:#ddd;line-height:1.4;padding:2px 0;white-space:nowrap;";const s=document.createElement("input");s.type="checkbox",s.checked=e,s.style.cssText="width:13px;height:13px;margin:0 6px 0 0;cursor:pointer;vertical-align:middle;flex:0 0 auto;",s.addEventListener("change",()=>t(s.checked));const o=document.createElement("span");return o.textContent=i,o.style.cssText="vertical-align:middle;",n.appendChild(s),n.appendChild(o),{row:n,checkbox:s,text:o}}function iu(i,e=!1){const t=document.createElement("div");return t.textContent=i,t.style.cssText=e?"font-size:11px;font-weight:bold;color:#aaa;margin-top:8px;padding-top:6px;border-top:1px solid #333;":"font-size:11px;font-weight:bold;color:#aaa;margin-top:2px;",t}function ru(i,e){const t=document.createElement("button");return t.textContent=i,t.type="button",t.style.cssText="display:block;width:100%;font-size:12px;cursor:pointer;color:#ddd;background:#2a3040;border:1px solid #444;border-radius:3px;padding:5px 8px;margin-top:4px;text-align:left;",t.addEventListener("mouseenter",()=>{t.style.background="#354052"}),t.addEventListener("mouseleave",()=>{t.style.background="#2a3040"}),t.addEventListener("click",e),t}function su(i,e){const t=e==="Original"?"#44aadd":"#44dd44",n=i.knotsU,s=i.knotsV;if(n.length===0||s.length===0){alert(`${e} surface has no knot vectors.`);return}const o=n[0],u=n[n.length-1],c=s[0],d=s[s.length-1],p=u-o,_=d-c,M=[...new Set(n)],S=[...new Set(s)],b=document.createElement("div");b.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10000;display:flex;align-items:center;justify-content:center;";const C=document.createElement("div");C.style.cssText="background:#222a3a;border:1px solid #444;border-radius:6px;padding:18px 22px;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,0.6);";const T=document.createElement("div");T.textContent=`${e} surface — Knot Lines`,T.style.cssText=`font-size:16px;font-weight:bold;color:${t};margin-bottom:2px;`,C.appendChild(T);const x=document.createElement("div");x.style.cssText="font-size:12px;font-family:monospace;color:#ccc;line-height:1.5;",x.innerHTML=`U: ${n.length} knots (${M.length} unique), range [${rn(o)}, ${rn(u)}]<br>V: ${s.length} knots (${S.length} unique), range [${rn(c)}, ${rn(d)}]`,C.appendChild(x);const g=document.createElement("canvas"),k=520,F=520;g.width=k,g.height=F,g.style.cssText="display:block;background:#1a1f2e;border:1px solid #333;border-radius:4px;",C.appendChild(g);const A=g.getContext("2d");if(A){const N=k-100,U=F-100;let W,ue;p>0&&_>0?p/_>N/U?(W=N,ue=N*(_/p)):(ue=U,W=U*(p/_)):(W=N,ue=U);const ee=(k-W)/2,se=ee+W,Ee=(F-ue)/2,he=Ee+ue;if(A.fillStyle="#1a1f2e",A.fillRect(0,0,k,F),A.strokeStyle="#556",A.lineWidth=1,A.strokeRect(ee+.5,Ee+.5,W,ue),A.fillStyle="#aaa",A.font="14px sans-serif",A.textAlign="center",A.textBaseline="top",A.fillText("u →",ee+W/2,he+22),A.save(),A.translate(ee-28,Ee+ue/2),A.rotate(-Math.PI/2),A.textBaseline="middle",A.fillText("v →",0,0),A.restore(),p>0){A.strokeStyle="#4fc3f7",A.lineWidth=1;for(const Me of M){const fe=(Me-o)/p,ve=ee+fe*W;A.beginPath(),A.moveTo(ve+.5,Ee),A.lineTo(ve+.5,he),A.stroke()}}if(_>0){A.strokeStyle="#ffaa44",A.lineWidth=1;for(const Me of S){const fe=(Me-c)/_,ve=he-fe*ue;A.beginPath(),A.moveTo(ee,ve+.5),A.lineTo(se,ve+.5),A.stroke()}}A.fillStyle="#aaa",A.font="11px monospace",A.textAlign="left",A.textBaseline="top",A.fillText(`u=${rn(o)}`,ee+4,Ee+4),A.textAlign="right",A.fillText(`u=${rn(u)}`,se-4,Ee+4),A.textAlign="left",A.textBaseline="bottom",A.fillText(`v=${rn(c)}`,ee+4,he-4),A.textAlign="right",A.fillText(`v=${rn(d)}`,se-4,he-4)}const $=document.createElement("button");$.textContent="Close",$.type="button",$.style.cssText="align-self:flex-end;font-size:13px;cursor:pointer;background:#3a4a60;border:1px solid #556;color:#eee;border-radius:4px;padding:6px 16px;",$.addEventListener("mouseenter",()=>{$.style.background="#4a5a70"}),$.addEventListener("mouseleave",()=>{$.style.background="#3a4a60"}),C.appendChild($),b.appendChild(C),document.body.appendChild(b);const H=X=>{X.key==="Escape"&&G()},G=()=>{document.removeEventListener("keydown",H),b.parentNode&&b.parentNode.removeChild(b)};b.addEventListener("click",X=>{X.target===b&&G()}),$.addEventListener("click",G),document.addEventListener("keydown",H)}function Mo(i){return i==="curve"?"curve":"surface"}function wv(i,e,t){let n=null,s=null,o=null;function u(){i.innerHTML="",n=null;const A=document.createElement("h2");A.textContent="Visualization",i.appendChild(A);const $=document.createElement("div");$.className="section";const H=document.createElement("label");H.textContent="Control Points",H.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",$.appendChild(H);const G=document.createElement("div");G.id="info-box",G.style.cssText="font-size:11px;font-family:monospace;background:#222;padding:6px;border-radius:4px;max-height:200px;overflow-y:auto;color:#ddd;line-height:1.4;margin-top:4px;",G.textContent="(none loaded)",$.appendChild(G),i.appendChild($);const X=document.createElement("div");X.className="section",X.id="run-results-section",X.style.display="none";const N=document.createElement("label");N.textContent="Run Results",N.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",X.appendChild(N);const U=document.createElement("div");U.id="results-box",U.style.cssText="font-size:11px;font-family:monospace;background:#222;padding:6px;border-radius:4px;color:#ddd;line-height:1.4;margin-top:4px;",U.textContent="(no run yet)",X.appendChild(U),i.appendChild(X);const W=document.createElement("div");W.className="section";const ue=document.createElement("label");ue.textContent="Visibility",ue.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",W.appendChild(ue);const ee=document.createElement("div");ee.id="vis-box",ee.style.cssText="display:flex;flex-direction:column;gap:4px;margin-top:4px;align-items:stretch;";const se=iu("Original"),Ee=oi(`Original ${Mo(e.mode)}`,e.showOriginalCurve,ke=>{e.showOriginalCurve=ke,t(e)}),he=oi("Original control points",e.showOriginalControl,ke=>{e.showOriginalControl=ke,t(e)}),Me=oi("Original iso lines",e.showOriginalIso,ke=>{e.showOriginalIso=ke,t(e)}),fe=oi("Original mesh",e.showOriginalMesh,ke=>{e.showOriginalMesh=ke,t(e)}),ve=oi("Original points",e.showOriginalPoints,ke=>{e.showOriginalPoints=ke,t(e)}),He=oi("Show point polyline",e.showPointPolyline,ke=>{e.showPointPolyline=ke,t(e)}),Je=iu("Result",!0),de=oi(`Result ${Mo(e.mode)}`,e.showResultCurve,ke=>{e.showResultCurve=ke,t(e)}),Ze=oi("Result control points",e.showResultControl,ke=>{e.showResultControl=ke,t(e)}),me=oi("Result iso lines",e.showResultIso,ke=>{e.showResultIso=ke,t(e)}),oe=oi("Result mesh",e.showResultMesh,ke=>{e.showResultMesh=ke,t(e)}),Le=ru("Show original knot lines",()=>{s&&su(s,"Original")}),De=ru("Show result knot lines",()=>{o&&su(o,"Result")});ee.appendChild(se),ee.appendChild(Ee.row),ee.appendChild(he.row),ee.appendChild(Me.row),ee.appendChild(fe.row),ee.appendChild(ve.row),ee.appendChild(He.row),ee.appendChild(Le),ee.appendChild(Je),ee.appendChild(de.row),ee.appendChild(Ze.row),ee.appendChild(me.row),ee.appendChild(oe.row),ee.appendChild(De),W.appendChild(ee),i.appendChild(W),n={visResultCurve:de,visResultControl:Ze,visOriginalCurve:Ee,visOriginalControl:he,visOriginalIso:Me,visResultIso:me,visOriginalMesh:fe,visResultMesh:oe,visOriginalPoints:ve,visPointPolyline:He,originalKnotsButton:Le,resultKnotsButton:De},g(e.mode),x()}u();const c=i.querySelector("#info-box"),d=i.querySelector("#run-results-section"),p=i.querySelector("#results-box");function _(A){if(!A){d.style.display="none",p.textContent="";return}d.style.display="";const $=[];$.push(`max error: ${A.maxErrors.map(H=>rn(H)).join(", ")}`),$.push(`iterations: ${A.iterations}`),p.innerHTML=$.join("<br>")}function M(A,$,H,G){if(!A){c.textContent="(none loaded)",_(void 0);return}const X=[];X.push(`<b style="color:#4fc3f7">${$}</b>`),G!==void 0&&X.push(`load time: ${ua(G)}`),X.push(`order=${A.order}, dim=${A.dim}`),X.push(`control points: ${A.numPoints}`),X.push(`knots: ${xo(A.knots)}`),X.push('<hr style="border:0;border-top:1px solid #444;margin:4px 0">');const N=A.dim;for(let U=0;U<A.coeffs.length;U++){const ue=A.coeffs[U].slice(0,N).map(rn).join(", ");X.push(`P${U.toString().padStart(String(A.numPoints-1).length," ")} = (${ue})`)}c.innerHTML=X.join("<br>"),_(H)}function S(A,$,H,G,X){if(!A){c.textContent="(none loaded)",_(void 0);return}const N=[];if(N.push(`<b style="color:#4fc3f7">${$}</b>`),G!==void 0&&N.push(`load time: ${ua(G)}`),N.push(`orderU=${A.orderU}, orderV=${A.orderV}, dim=${A.dim}`),N.push(`grid: ${A.nU} x ${A.nV} = ${A.nU*A.nV} ctrl pts`),N.push(`knotsU: ${xo(A.knotsU)}`),N.push(`knotsV: ${xo(A.knotsV)}`),X){const U=["X","Y","Z"];N.push("bbox:");for(let W=0;W<U.length;W++)N.push(`  ${U[W]}: [${rn(X.min[W])}, ${rn(X.max[W])}]  range=${rn(X.range[W])}`);N.push(`max range: ${rn(X.maxRange)}`)}c.innerHTML=N.join("<br>"),_(H)}function b(A,$,H){if(!A){c.textContent="(none loaded)",_(void 0);return}const G=[];G.push(`<b style="color:#4fc3f7">${$}</b>`),H!==void 0&&G.push(`load time: ${ua(H)}`),G.push(`order=${A.order}, dim=${A.dim}`),G.push(`data points: ${A.numPoints}`),G.push('<hr style="border:0;border-top:1px solid #444;margin:4px 0">');const N=[0,A.numPoints-1>>1,A.numPoints-1];for(const U of N){const ue=A.points[U].slice(0,A.dim).map(rn).join(", ");G.push(`P${String(U).padStart(String(A.numPoints-1).length," ")} = (${ue})`)}c.innerHTML=G.join("<br>"),_(void 0)}function C(A,$,H,G){if(!A){c.textContent="(none loaded)",_(void 0);return}const X=[];if(X.push(`<b style="color:#4fc3f7">${$}</b>`),H!==void 0&&X.push(`load time: ${ua(H)}`),X.push(`orderU=${A.orderU}, orderV=${A.orderV}, dim=${A.dim}`),X.push(`grid: ${A.nU} x ${A.nV} = ${A.nU*A.nV} data points`),G){const N=["X","Y","Z"];X.push("bbox:");for(let U=0;U<N.length;U++)X.push(`  ${N[U]}: [${rn(G.min[U])}, ${rn(G.max[U])}]  range=${rn(G.range[U])}`);X.push(`max range: ${rn(G.maxRange)}`)}c.innerHTML=X.join("<br>"),_(void 0)}function T(){if(!n)return;const A=e.hasResult,$=A?"1":"0.4";for(const H of[n.visResultCurve,n.visResultControl,n.visResultIso,n.visResultMesh])H.row.style.opacity=$,H.checkbox.disabled=!A}function x(){if(!n)return;const A=e.mode==="surface"&&s!==null,$=e.mode==="surface"&&o!==null;n.originalKnotsButton.style.display=A?"":"none",n.resultKnotsButton.style.display=$?"":"none"}function g(A,$=e.algorithm){if(!n)return;const H=A==="surface",G=$==="approximate_from_points",X=H&&!G;n.visOriginalCurve.row.style.display=G?"none":"",n.visOriginalControl.row.style.display=G?"none":"",n.visOriginalIso.row.style.display=X?"":"none",n.visOriginalMesh.row.style.display=X?"":"none",n.visOriginalPoints.row.style.display=G?"":"none",n.visPointPolyline.row.style.display=G?"":"none",n.visResultIso.row.style.display=H?"":"none",n.visResultMesh.row.style.display=H?"":"none"}function k(A){if(e.mode=A,!n)return;const $=Mo(A);n.visOriginalCurve.text.textContent=`Original ${$}`,n.visResultCurve.text.textContent=`Result ${$}`,g(A),x()}function F(A){e.algorithm=A,g(e.mode,A)}return{setCurve:M,setSurface:S,setCurvePoints:b,setSurfacePoints:C,clear(){c.textContent="(none loaded)",e.hasResult=!1,s=null,o=null,T(),_(void 0),x()},setHasResult(A){e.hasResult=A,T()},setMode:k,setAlgorithm:F,setOriginalSurfaceForKnots(A){s=A,x()},setResultSurfaceForKnots(A){o=A,x()}}}class Tv{worker=null;nextId=1;pending=new Map;spawn(){const e=new Worker(new URL("/knot-removal-minimax3-app/assets/engine.worker-6T3--moE.js",import.meta.url),{type:"module"});return e.onmessage=t=>{const n=t.data,s=this.pending.get(n.id);s&&(this.pending.delete(n.id),n.type==="error"?s.reject(new Error(n.message)):s.resolve(n))},e.onerror=t=>{const n=new Error(t.message||"engine worker crashed");for(const s of this.pending.values())s.reject(n);this.pending.clear()},e}request(e,t){this.worker??=this.spawn();const n=this.nextId++,s=this.worker;return new Promise((o,u)=>{this.pending.set(n,{resolve:c=>{c.type===t?o(c):u(new Error(`expected ${t}, got ${c.type}`))},reject:u}),s.postMessage({...e,id:n})})}get busy(){return this.pending.size>0}cancel(){this.worker&&(this.worker.terminate(),this.worker=null);const e=new Error("cancelled");for(const t of this.pending.values())t.reject(e);this.pending.clear()}}function ah(i){if(i.length===0)return new Float64Array(0);const e=i[0].length,t=new Float64Array(i.length*e);for(let n=0;n<i.length;n++)for(let s=0;s<e;s++)t[n*e+s]=i[n][s];return t}function oh(i,e,t){const n=[];for(let s=0;s<e;s++){const o=[];for(let u=0;u<t;u++)o.push(i[s*t+u]);n.push(o)}return n}function lh(i){return{order:i.order,dim:i.dim,n:i.numPoints,knots:new Float64Array(i.knots),coeffs:ah(i.coeffs)}}function ch(i){return{orderU:i.orderU,orderV:i.orderV,dim:i.dim,nU:i.nU,nV:i.nV,knotsU:new Float64Array(i.knotsU),knotsV:new Float64Array(i.knotsV),coeffs:ah(i.coeffs)}}function Tl(i){return{order:i.order,dim:i.dim,numPoints:i.n,knots:Array.from(i.knots),coeffs:oh(i.coeffs,i.n,i.dim)}}function Al(i){return{orderU:i.orderU,orderV:i.orderV,dim:i.dim,nU:i.nU,nV:i.nV,knotsU:Array.from(i.knotsU),knotsV:Array.from(i.knotsV),coeffs:oh(i.coeffs,i.nU*i.nV,i.dim)}}const ns=new Tv;function Av(i,e,t={}){return ns.request({type:"run-curve",curve:lh(i),op:0,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(n=>({ok:!0,curve:Tl(n.curve),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function Cv(i,e,t={}){return ns.request({type:"run-curve",curve:lh(i),op:1,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(n=>({ok:!0,curve:Tl(n.curve),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function Rv(i,e,t={}){return ns.request({type:"run-surface",surface:ch(i),op:0,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(n=>({ok:!0,surface:Al(n.surface),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function Pv(i,e,t={}){return ns.request({type:"run-surface",surface:ch(i),op:1,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(n=>({ok:!0,surface:Al(n.surface),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function Lv(i,e,t={}){const n=new Float64Array(i.numPoints*i.dim);for(let s=0;s<i.numPoints;s++)for(let o=0;o<i.dim;o++)n[s*i.dim+o]=i.points[s][o];return ns.request({type:"curve-approx-points",points:n,numPoints:i.numPoints,dim:i.dim,order:i.order,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(s=>({ok:!0,curve:Tl(s.curve),maxErrors:Array.from(s.maxErrors),iterations:s.iterations,status:s.status})).catch(s=>({ok:!1,error:s.message}))}function Dv(i,e,t={}){const n=new Float64Array(i.nU*i.nV*i.dim);for(let s=0;s<i.nU;s++)for(let o=0;o<i.nV;o++){const u=(s*i.nV+o)*i.dim;for(let c=0;c<i.dim;c++)n[u+c]=i.points[s][o][c]}return ns.request({type:"surface-approx-points",points:n,nU:i.nU,nV:i.nV,dim:i.dim,orderU:i.orderU,orderV:i.orderV,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(s=>({ok:!0,surface:Al(s.surface),maxErrors:Array.from(s.maxErrors),iterations:s.iterations,status:s.status})).catch(s=>({ok:!1,error:s.message}))}class Iv{root;label;fill;detail;constructor(){const e=document.getElementById("progress");if(!e)throw new Error("progress overlay element not found");this.root=e;const t=document.getElementById("progress-label"),n=document.getElementById("progress-fill"),s=document.getElementById("progress-detail");if(!t||!n||!s)throw new Error("progress overlay children missing");this.label=t,this.fill=n,this.detail=s}show(e){this.label.textContent=e,this.detail.textContent="",this.fill.classList.add("indeterminate"),this.fill.style.width="",this.root.hidden=!1}setPhase(e,t,n){const s={download:"Downloading",parse:"Parsing JSON",tessellate:"Tessellating"};this.label.textContent=s[e]??e,this.detail.textContent=n,this.fill.classList.remove("indeterminate");const o=Math.max(0,Math.min(1,t));this.fill.style.width=(o*100).toFixed(1)+"%",o>=1&&(this.fill.style.width="100%")}setDetail(e,t){this.detail.textContent=t,this.fill.classList.remove("indeterminate");const n=Math.max(0,Math.min(1,e));this.fill.style.width=(n*100).toFixed(1)+"%",n>=1&&(this.fill.style.width="100%")}hide(){this.root.hidden=!0,this.fill.style.width="0%",this.fill.classList.remove("indeterminate")}}let Bi=null,Xn=null,zi=null,ui=null,xs=null,ki=null,Vi=null,yn,Pt,Hn,Fr=()=>{},Or=()=>{};function hi(){const i=yn.mode==="surface",e=yn.showOriginalCurve,t=yn.showOriginalControl,n=yn.showResultCurve,s=yn.showResultControl,o=yn.showOriginalIso,u=yn.showResultIso,c=yn.showOriginalMesh,d=yn.showResultMesh,p=yn.showOriginalPoints,_=yn.showPointPolyline,M=yn.hasResult;dn("curve",!i&&e),dn("curve-control",!i&&t),dn("surface",i&&e),dn("surface-control",i&&t),dn("original",M&&e),dn("original-control",M&&t),dn("result",M&&n),dn("result-control",M&&s),i&&(o&&!M&&Xn&&mo("surface-iso",Xn),o&&M&&ui&&mo("original-iso",ui),u&&M&&Xn&&mo("result-iso",Xn)),dn("surface-iso",i&&o&&!M),dn("original-iso",i&&o&&M),dn("result-iso",i&&u&&M),i&&(c&&!M&&_o("surface","surface-wire"),c&&M&&_o("original","original-wire"),d&&M&&_o("result","result-wire")),dn("surface-wire",i&&c&&!M),dn("original-wire",i&&c&&M),dn("result-wire",i&&d&&M);const S=!i&&p,b=i&&p;dn("curve-points",S),dn("surface-points",b),dn("curve-points-polyline",S&&_),dn("surface-points-polyline",b&&_)}const Ur=document.getElementById("log"),Uv=200;function zt(i){const e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0"),o=document.createElement("div");o.className="log-entry";const u=document.createElement("span");u.className="log-time",u.textContent=`[${t}:${n}:${s}]`,o.appendChild(u);const c=document.createElement("span");for(/^Error\b/i.test(i)&&(c.className="log-msg-error"),c.textContent=i,o.appendChild(c),Ur.appendChild(o);Ur.children.length>Uv;)Ur.removeChild(Ur.firstChild);Ur.scrollTop=Ur.scrollHeight,console.log(i)}function ds(i){const e=i[0]?.length??3,t=new Array(e).fill(1/0),n=new Array(e).fill(-1/0);for(const o of i)for(let u=0;u<e;u++){const c=o[u]??0;c<t[u]&&(t[u]=c),c>n[u]&&(n[u]=c)}const s=t.map((o,u)=>n[u]-o);return{min:t,max:n,range:s,maxRange:Math.max(...s)}}function au(i){yn.running=i;const e=document.getElementById("run-algo-btn");e&&(e.textContent=i?"Running...":"Run Algorithm",e.disabled=i)}async function Nv(i){au(!0);try{if(i.mode==="curve"){if(i.algorithm==="approximate_from_points"&&ki){const e=ki,t=i.tolerance.slice(0,e.dim),n={left_end:i.leftEnd,right_end:i.rightEnd,max_iter:i.maxIter};zt("Running curve/approximate_from_points...");const s=await Lv(e,t,n);if(!s.ok){zt(`Error: ${s.error}`);return}kr(),Ku(e,"curve-points",4491485),va(s.curve,"result",4513092,!0,16755200),zt(`Done. Data points: ${e.numPoints} → ctrl pts: ${s.curve.numPoints}, Max error: ${s.maxErrors?.map(o=>o.toFixed(4)).join(", ")}, Iterations: ${s.iterations}`),Pt.setCurve(s.curve,`Data points (${e.numPoints}) → Result (${s.curve.numPoints})`,{maxErrors:s.maxErrors??[],iterations:s.iterations??0}),Pt.setHasResult(!0),Pt.setResultSurfaceForKnots(null),hi(),Bi=s.curve;return}if(zi){const e=zi,t=i.tolerance.slice(0,e.dim),n={left_end:i.leftEnd,right_end:i.rightEnd,max_iter:i.maxIter};zt(`Running curve/${i.algorithm}...`);const s=i.algorithm==="remove"?await Av(e,t,n):await Cv(e,t,n);if(!s.ok){zt(`Error: ${s.error}`);return}kr(),va(e,"original",4500189,!0,16737894),va(s.curve,"result",4513092,!0,16755200),zt(`Done. Points: ${e.numPoints} → ${s.curve.numPoints}, Max error: ${s.maxErrors?.map(o=>o.toFixed(4)).join(", ")}, Iterations: ${s.iterations}`),Pt.setCurve(s.curve,`Original (${e.numPoints}) → Result (${s.curve.numPoints})`,{maxErrors:s.maxErrors??[],iterations:s.iterations??0}),Pt.setHasResult(!0),Pt.setResultSurfaceForKnots(null),hi(),Bi=s.curve}else zt("Load a preset first.")}else if(i.mode==="surface"){if(i.algorithm==="approximate_from_points"&&Vi){const e=Vi,t=i.tolerance.slice(0,e.dim),n={u_left:i.uLeftEnd,u_right:i.uRightEnd,v_left:i.vLeftEnd,v_right:i.vRightEnd,max_iter:i.maxIter};zt("Running surface/approximate_from_points...");const s=performance.now(),o=await Dv(e,t,n),u=performance.now();if(!o.ok){zt(`Error: ${o.error}`);return}zt(`Algorithm done in ${(u-s).toFixed(0)} ms. Data points: ${e.nU}x${e.nV} → ctrl pts: ${o.surface.nU}x${o.surface.nV}, Max error: ${o.maxErrors?.map(_=>_.toFixed(4)).join(", ")}, Iterations: ${o.iterations}`),kr(),Ju(e,"surface-points",4491485),Hn.show(`Visualizing result (${o.surface.nU}x${o.surface.nV})`);const c=performance.now(),d=await vo(o.surface,"result",(_,M,S)=>{Hn.setDetail(M,S)}),p=performance.now();ga(d,"result",4513092,!0,void 0,16755200),zt(`Result visualized: ${d.numQuads} quads (${d.numVerts} verts) in ${(p-c).toFixed(0)} ms`),Hn.hide(),Pt.setSurface(o.surface,`Data points (${e.nU}x${e.nV}) → Result (${o.surface.nU}x${o.surface.nV})`,{maxErrors:o.maxErrors??[],iterations:o.iterations??0}),Pt.setHasResult(!0),Pt.setResultSurfaceForKnots(o.surface),hi(),Xn=o.surface;return}if(ui){const e=ui,t=i.tolerance.slice(0,e.dim),n={u_left:i.uLeftEnd,u_right:i.uRightEnd,v_left:i.vLeftEnd,v_right:i.vRightEnd,max_iter:i.maxIter};zt(`Running surface/${i.algorithm}...`);const s=performance.now(),o=i.algorithm==="remove"?await Rv(e,t,n):await Pv(e,t,n),u=performance.now();if(!o.ok){zt(`Error: ${o.error}`);return}zt(`Algorithm done in ${(u-s).toFixed(0)} ms. Ctrl pts: ${e.nU}x${e.nV} → ${o.surface.nU}x${o.surface.nV}, Max error: ${o.maxErrors?.map(b=>b.toFixed(4)).join(", ")}, Iterations: ${o.iterations}`),kr(),Hn.show(`Visualizing original (${e.nU}x${e.nV})`);const c=performance.now();let d;xs?d=xs:d=await vo(e,"original",(b,C,T)=>{Hn.setDetail(C,T)});const p=performance.now();ga(d,"original",4500189,!0,void 0,16737894),zt(`Original visualized: ${d.numQuads} quads (${d.numVerts} verts) in ${(p-c).toFixed(0)} ms`),Hn.show(`Visualizing result (${o.surface.nU}x${o.surface.nV})`);const _=performance.now(),M=await vo(o.surface,"result",(b,C,T)=>{Hn.setDetail(C,T)}),S=performance.now();ga(M,"result",4513092,!0,void 0,16755200),zt(`Result visualized: ${M.numQuads} quads (${M.numVerts} verts) in ${(S-_).toFixed(0)} ms`),Hn.hide(),Pt.setSurface(o.surface,`Original (${e.nU}x${e.nV}) → Result (${o.surface.nU}x${o.surface.nV})`,{maxErrors:o.maxErrors??[],iterations:o.iterations??0}),Pt.setHasResult(!0),Pt.setResultSurfaceForKnots(o.surface),Xn=o.surface}else zt("Load a preset first.")}else zt("Load a preset first.")}catch(e){zt(`Error: ${String(e)}`)}finally{au(!1)}}function Fv(i,e,t,n){if(kr(),i){const s=performance.now();Bi=i,zi=i,Xn=null,ui=null,ki=null,Vi=null,va(i,"curve",4500189);const o=performance.now()-s;zt(`Loaded curve: ${i.numPoints} pts, order ${i.order}, dim ${i.dim} (${o.toFixed(0)} ms)`),Pt.setCurve(i,`Preset: curve (${i.numPoints} ctrl pts)`,void 0,o),Pt.setHasResult(!1),Pt.setOriginalSurfaceForKnots(null),Pt.setResultSurfaceForKnots(null);const u=ds(i.coeffs),c=u.maxRange*.1||.01,d=u.maxRange*.02||.01;Or(c),Fr([d,d,d]),hi()}if(t){const s=performance.now();ki=t,Bi=null,zi=null,Xn=null,ui=null,Vi=null,Ku(t,"curve-points",4491485);const o=performance.now()-s,u=t.points,c=ds(u);zt(`Loaded curve points: ${t.numPoints} pts, order ${t.order}, dim ${t.dim} (${o.toFixed(0)} ms)`),Pt.setCurvePoints(t,`Data points: ${t.numPoints} pts (order ${t.order})`,o),Pt.setHasResult(!1),Pt.setOriginalSurfaceForKnots(null),Pt.setResultSurfaceForKnots(null);const d=c.maxRange*.1||.01,p=c.maxRange*.02||.01;Or(d),Fr([p,p,p]),hi()}if(n){const s=performance.now();Vi=n,Bi=null,zi=null,Xn=null,ui=null,ki=null,Ju(n,"surface-points",4491485);const o=performance.now()-s,u=[];for(let _=0;_<n.nU;_++)for(let M=0;M<n.nV;M++)u.push(n.points[_][M]);const c=ds(u);zt(`Loaded surface points: ${n.nU}x${n.nV} pts, order ${n.orderU}x${n.orderV}, dim ${n.dim} (${o.toFixed(0)} ms)`),Pt.setSurfacePoints(n,`Data points: ${n.nU}x${n.nV} (order ${n.orderU}x${n.orderV})`,o,c),Pt.setHasResult(!1),Pt.setOriginalSurfaceForKnots(null),Pt.setResultSurfaceForKnots(null);const d=c.maxRange*.1||.01,p=c.maxRange*.02||.01;Or(d),Fr([p,p,p]),hi()}if(e)if("positions"in e){const s=e,o=performance.now();Xn=s.surface,ui=s.surface,xs=s,Bi=null,zi=null,ki=null,Vi=null,ga(s,"surface",4500189,!0,zt);const u=performance.now()-o,c=ds(s.surface.coeffs);zt(`Loaded surface: ${s.surface.nU}x${s.surface.nV} pts, order ${s.surface.orderU}x${s.surface.orderV}, dim ${s.surface.dim} (${u.toFixed(0)} ms; download ${s.ms.download.toFixed(0)} ms, parse ${s.ms.parse.toFixed(0)} ms, tessellate ${s.ms.tessellate.toFixed(0)} ms)`),Pt.setSurface(s.surface,`Preset: surface (${s.surface.nU}x${s.surface.nV} ctrl pts)`,void 0,u,c),Pt.setHasResult(!1),Pt.setOriginalSurfaceForKnots(s.surface),Pt.setResultSurfaceForKnots(null);const d=c.maxRange*.1,p=c.maxRange*.02;Or(d),Fr([p,p,p]),hi()}else{const s=e,o=performance.now();Xn=s,ui=s,xs=null,Bi=null,zi=null,ki=null,Vi=null,hv(s,"surface",4500189,!0,zt);const u=performance.now()-o,c=ds(s.coeffs);zt(`Loaded surface: ${s.nU}x${s.nV} pts, order ${s.orderU}x${s.orderV}, dim ${s.dim} (${u.toFixed(0)} ms)`),Pt.setSurface(s,`Preset: surface (${s.nU}x${s.nV} ctrl pts)`,void 0,u,c),Pt.setHasResult(!1),Pt.setOriginalSurfaceForKnots(s),Pt.setResultSurfaceForKnots(null);const d=c.maxRange*.1,p=c.maxRange*.02;Or(d),Fr([p,p,p]),hi()}}function Ov(i){kr(),Bi=null,Xn=null,zi=null,ui=null,ki=null,Vi=null,xs=null,Pt.clear(),Pt.setMode(i),zt(`Switched to ${i} mode`)}function Bv(){const i=document.getElementById("canvas-container");K_(i);const e=document.getElementById("panel"),t=bv(e,{onRun:Nv,onPreset:Fv,onModeChange:Ov,onAlgorithmChange:d=>{Pt.setAlgorithm(d)},onVisibilityChange:()=>hi(),onLoadStart:d=>Hn.show(d),onLoadEnd:()=>Hn.hide()});yn=t.state;const n=t.setLoadProgress;Fr=t.setTolerance,Or=t.setToleranceBounds,n((d,p,_)=>Hn.setPhase(d,p,_));const s=document.getElementById("panel-left");Pt=wv(s,yn,()=>hi()),Pt.setAlgorithm(yn.algorithm);const o=document.getElementById("tool-pivot"),u=document.getElementById("tool-fit"),c=document.getElementById("tool-ortho");o.addEventListener("click",()=>{const d=!o.classList.contains("active");o.classList.toggle("active",d),jc(d),zt(d?"Pivot mode: click a point on the model.":"Pivot mode off.")}),u.addEventListener("click",()=>{ts(),o.classList.remove("active"),jc(!1),zt("Fit to view.")}),c.addEventListener("click",()=>{const d=!c.classList.contains("active");c.classList.toggle("active",d),sv(d),zt(d?"Orthographic view.":"Perspective view.")}),Hn=new Iv,zt('Ready. Select a preset and click "Run Algorithm".')}Bv();
