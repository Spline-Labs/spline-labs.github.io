(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="170",zr={ROTATE:0,DOLLY:1,PAN:2},Ah=0,Gl=1,Ch=2,vu=1,Rh=2,bi=3,Wi=0,Cn=1,ti=2,Hi=0,kr=1,Wl=2,Xl=3,ql=4,Ph=5,rr=100,Lh=101,Uh=102,Dh=103,Ih=104,Nh=200,Fh=201,Oh=202,Bh=203,Co=204,Ro=205,zh=206,kh=207,Vh=208,Hh=209,Gh=210,Wh=211,Xh=212,qh=213,$h=214,Po=0,Lo=1,Uo=2,Wr=3,Do=4,Io=5,No=6,Fo=7,xl=0,Yh=1,jh=2,Gi=0,Kh=1,Zh=2,Jh=3,Qh=4,ef=5,tf=6,nf=7,_u=300,Xr=301,qr=302,Oo=303,Bo=304,Ca=306,zo=1e3,or=1001,ko=1002,si=1003,rf=1004,Ls=1005,Yn=1006,Fa=1007,lr=1008,Ri=1009,gu=1010,xu=1011,gs=1012,Ml=1013,cr=1014,Ei=1015,Ss=1016,Sl=1017,yl=1018,$r=1020,Mu=35902,Su=1021,yu=1022,ri=1023,bu=1024,wu=1025,Vr=1026,Yr=1027,Eu=1028,bl=1029,Tu=1030,wl=1031,El=1033,ma=33776,va=33777,_a=33778,ga=33779,Vo=35840,Ho=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,$o=37496,Yo=37808,jo=37809,Ko=37810,Zo=37811,Jo=37812,Qo=37813,el=37814,tl=37815,nl=37816,il=37817,rl=37818,sl=37819,al=37820,ol=37821,xa=36492,ll=36494,cl=36495,Au=36283,ul=36284,hl=36285,fl=36286,sf=3200,af=3201,Cu=0,of=1,Bi="",Wn="srgb",Kr="srgb-linear",Ra="linear",$t="srgb",dr=7680,$l=519,lf=512,cf=513,uf=514,Ru=515,hf=516,ff=517,df=518,pf=519,dl=35044,Yl="300 es",Ti=2e3,ba=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Hr=Math.PI/180,xs=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function Tl(i,e){return(i%e+e)%e}function mf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vf(i,e,t){return i!==e?(t-i)/(e-i):0}function vs(i,e,t){return(1-t)*i+t*e}function _f(i,e,t,n){return vs(i,e,1-Math.exp(-t*n))}function gf(i,e=1){return e-Math.abs(Tl(i,e*2)-e)}function xf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yf(i,e){return i+Math.random()*(e-i)}function bf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(jl=i);let e=jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*Hr}function Tf(i){return i*xs}function Af(i){return(i&i-1)===0&&i!==0}function Cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pf(i,e,t,n,s){const o=Math.cos,u=Math.sin,c=o(t/2),f=u(t/2),p=o((e+n)/2),v=u((e+n)/2),M=o((e-n)/2),S=u((e-n)/2),y=o((n-e)/2),A=u((n-e)/2);switch(s){case"XYX":i.set(c*v,f*M,f*S,c*p);break;case"YZY":i.set(f*S,c*v,f*M,c*p);break;case"ZXZ":i.set(f*M,f*S,c*v,c*p);break;case"XZX":i.set(c*v,f*A,f*y,c*p);break;case"YXY":i.set(f*y,c*v,f*A,c*p);break;case"ZYZ":i.set(f*A,f*y,c*v,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kl={DEG2RAD:Hr,RAD2DEG:xs,generateUUID:Ai,clamp:Tn,euclideanModulo:Tl,mapLinear:mf,inverseLerp:vf,lerp:vs,damp:_f,pingpong:gf,smoothstep:xf,smootherstep:Mf,randInt:Sf,randFloat:yf,randFloatSpread:bf,seededRandom:wf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Cf,floorPowerOfTwo:Rf,setQuaternionFromProperEuler:Pf,normalize:Gt,denormalize:ni};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*s+e.x,this.y=o*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,s,o,u,c,f,p){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,f,p)}set(e,t,n,s,o,u,c,f,p){const v=this.elements;return v[0]=e,v[1]=s,v[2]=c,v[3]=t,v[4]=o,v[5]=f,v[6]=n,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[3],f=n[6],p=n[1],v=n[4],M=n[7],S=n[2],y=n[5],A=n[8],T=s[0],x=s[3],g=s[6],k=s[1],F=s[4],P=s[7],J=s[2],O=s[5],W=s[8];return o[0]=u*T+c*k+f*J,o[3]=u*x+c*F+f*O,o[6]=u*g+c*P+f*W,o[1]=p*T+v*k+M*J,o[4]=p*x+v*F+M*O,o[7]=p*g+v*P+M*W,o[2]=S*T+y*k+A*J,o[5]=S*x+y*F+A*O,o[8]=S*g+y*P+A*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],v=e[8];return t*u*v-t*c*p-n*o*v+n*c*f+s*o*p-s*u*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],v=e[8],M=v*u-c*p,S=c*f-v*o,y=p*o-u*f,A=t*M+n*S+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(s*p-v*n)*T,e[2]=(c*n-s*u)*T,e[3]=S*T,e[4]=(v*t-s*f)*T,e[5]=(s*o-c*t)*T,e[6]=y*T,e[7]=(n*f-p*t)*T,e[8]=(u*t-n*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,u,c){const f=Math.cos(o),p=Math.sin(o);return this.set(n*f,n*p,-n*(f*u+p*c)+u+e,-s*p,s*f,-s*(-p*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new wt;function Pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){const i=wa("canvas");return i.style.display="block",i}const Zl={};function ps(i){i in Zl||(Zl[i]=!0,console.warn(i))}function Uf(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Df(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function If(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ft={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===$t&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===$t&&(i.r=Gr(i.r),i.g=Gr(i.g),i.b=Gr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jl=[.64,.33,.3,.6,.15,.06],Ql=[.2126,.7152,.0722],ec=[.3127,.329],tc=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ft.define({[Kr]:{primaries:Jl,whitePoint:ec,transfer:Ra,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:Ql,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:Jl,whitePoint:ec,transfer:$t,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:Ql,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});let pr;class Nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=wa("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Ci(o[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ff=0;class Lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Ba(s[u].image)):o.push(Ba(s[u]))}else o=Ba(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Of=0;class An extends fr{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=or,s=or,o=Yn,u=lr,c=ri,f=Ri,p=An.DEFAULT_ANISOTROPY,v=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ai(),this.name="",this.source=new Lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=_u;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,n=0,s=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const f=e.elements,p=f[0],v=f[4],M=f[8],S=f[1],y=f[5],A=f[9],T=f[2],x=f[6],g=f[10];if(Math.abs(v-S)<.01&&Math.abs(M-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(v+S)<.1&&Math.abs(M+T)<.1&&Math.abs(A+x)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,P=(y+1)/2,J=(g+1)/2,O=(v+S)/4,W=(M+T)/4,X=(A+x)/4;return F>P&&F>J?F<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(F),s=O/n,o=W/n):P>J?P<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(P),n=O/s,o=X/s):J<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(J),n=W/o,s=X/o),this.set(n,s,o,t),this}let k=Math.sqrt((x-A)*(x-A)+(M-T)*(M-T)+(S-v)*(S-v));return Math.abs(k)<.001&&(k=1),this.x=(x-A)/k,this.y=(M-T)/k,this.z=(S-v)/k,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new An(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends Bf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uu extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zf extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,u,c){let f=n[s+0],p=n[s+1],v=n[s+2],M=n[s+3];const S=o[u+0],y=o[u+1],A=o[u+2],T=o[u+3];if(c===0){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=M;return}if(c===1){e[t+0]=S,e[t+1]=y,e[t+2]=A,e[t+3]=T;return}if(M!==T||f!==S||p!==y||v!==A){let x=1-c;const g=f*S+p*y+v*A+M*T,k=g>=0?1:-1,F=1-g*g;if(F>Number.EPSILON){const J=Math.sqrt(F),O=Math.atan2(J,g*k);x=Math.sin(x*O)/J,c=Math.sin(c*O)/J}const P=c*k;if(f=f*x+S*P,p=p*x+y*P,v=v*x+A*P,M=M*x+T*P,x===1-c){const J=1/Math.sqrt(f*f+p*p+v*v+M*M);f*=J,p*=J,v*=J,M*=J}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=M}static multiplyQuaternionsFlat(e,t,n,s,o,u){const c=n[s],f=n[s+1],p=n[s+2],v=n[s+3],M=o[u],S=o[u+1],y=o[u+2],A=o[u+3];return e[t]=c*A+v*M+f*y-p*S,e[t+1]=f*A+v*S+p*M-c*y,e[t+2]=p*A+v*y+c*S-f*M,e[t+3]=v*A-c*M-f*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,f=Math.sin,p=c(n/2),v=c(s/2),M=c(o/2),S=f(n/2),y=f(s/2),A=f(o/2);switch(u){case"XYZ":this._x=S*v*M+p*y*A,this._y=p*y*M-S*v*A,this._z=p*v*A+S*y*M,this._w=p*v*M-S*y*A;break;case"YXZ":this._x=S*v*M+p*y*A,this._y=p*y*M-S*v*A,this._z=p*v*A-S*y*M,this._w=p*v*M+S*y*A;break;case"ZXY":this._x=S*v*M-p*y*A,this._y=p*y*M+S*v*A,this._z=p*v*A+S*y*M,this._w=p*v*M-S*y*A;break;case"ZYX":this._x=S*v*M-p*y*A,this._y=p*y*M+S*v*A,this._z=p*v*A-S*y*M,this._w=p*v*M+S*y*A;break;case"YZX":this._x=S*v*M+p*y*A,this._y=p*y*M+S*v*A,this._z=p*v*A-S*y*M,this._w=p*v*M-S*y*A;break;case"XZY":this._x=S*v*M-p*y*A,this._y=p*y*M-S*v*A,this._z=p*v*A+S*y*M,this._w=p*v*M+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],u=t[1],c=t[5],f=t[9],p=t[2],v=t[6],M=t[10],S=n+c+M;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-f)*y,this._y=(o-p)*y,this._z=(u-s)*y}else if(n>c&&n>M){const y=2*Math.sqrt(1+n-c-M);this._w=(v-f)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(o+p)/y}else if(c>M){const y=2*Math.sqrt(1+c-n-M);this._w=(o-p)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(f+v)/y}else{const y=2*Math.sqrt(1+M-n-c);this._w=(u-s)/y,this._x=(o+p)/y,this._y=(f+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,u=e._w,c=t._x,f=t._y,p=t._z,v=t._w;return this._x=n*v+u*c+s*p-o*f,this._y=s*v+u*f+o*c-n*p,this._z=o*v+u*p+n*f-s*c,this._w=u*v-n*c-s*f-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=o,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const p=Math.sqrt(f),v=Math.atan2(p,c),M=Math.sin((1-t)*v)/p,S=Math.sin(t*v)/p;return this._w=u*M+this._w*S,this._x=n*M+this._x*S,this._y=s*M+this._y*S,this._z=o*M+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,u=e.y,c=e.z,f=e.w,p=2*(u*s-c*n),v=2*(c*t-o*s),M=2*(o*n-u*t);return this.x=t+f*p+u*M-c*v,this.y=n+f*v+c*p-o*M,this.z=s+f*M+o*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*u-n*f,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new j,ic=new Zr;class hr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Kn):Kn.fromBufferAttribute(o,u),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Ds.subVectors(this.max,ss),mr.subVectors(e.a,ss),vr.subVectors(e.b,ss),_r.subVectors(e.c,ss),Li.subVectors(vr,mr),Ui.subVectors(_r,vr),Ki.subVectors(mr,_r);let t=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-Ki.z,Ki.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,Ki.z,0,-Ki.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-Ki.y,Ki.x,0];return!ka(t,mr,vr,_r,Ds)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,mr,vr,_r,Ds))?!1:(Is.crossVectors(Li,Ui),t=[Is.x,Is.y,Is.z],ka(t,mr,vr,_r,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new j,new j,new j,new j,new j,new j,new j,new j],Kn=new j,Us=new hr,mr=new j,vr=new j,_r=new j,Li=new j,Ui=new j,Ki=new j,ss=new j,Ds=new j,Is=new j,Zi=new j;function ka(i,e,t,n,s){for(let o=0,u=i.length-3;o<=u;o+=3){Zi.fromArray(i,o);const c=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),f=e.dot(Zi),p=t.dot(Zi),v=n.dot(Zi);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>c)return!1}return!0}const kf=new hr,as=new j,Va=new j;class ys{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Va)),this.expandByPoint(as.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new j,Ha=new j,Ns=new j,Di=new j,Ga=new j,Fs=new j,Wa=new j;class Pa{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ha.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Ha);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Ns),c=Di.dot(this.direction),f=-Di.dot(Ns),p=Di.lengthSq(),v=Math.abs(1-u*u);let M,S,y,A;if(v>0)if(M=u*f-c,S=u*c-f,A=o*v,M>=0)if(S>=-A)if(S<=A){const T=1/v;M*=T,S*=T,y=M*(M+u*S+2*c)+S*(u*M+S+2*f)+p}else S=o,M=Math.max(0,-(u*S+c)),y=-M*M+S*(S+2*f)+p;else S=-o,M=Math.max(0,-(u*S+c)),y=-M*M+S*(S+2*f)+p;else S<=-A?(M=Math.max(0,-(-u*o+c)),S=M>0?-o:Math.min(Math.max(-o,-f),o),y=-M*M+S*(S+2*f)+p):S<=A?(M=0,S=Math.min(Math.max(-o,-f),o),y=S*(S+2*f)+p):(M=Math.max(0,-(u*o+c)),S=M>0?o:Math.min(Math.max(-o,-f),o),y=-M*M+S*(S+2*f)+p);else S=u>0?-o:o,M=Math.max(0,-(u*S+c)),y=-M*M+S*(S+2*f)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,M),s&&s.copy(Ha).addScaledVector(Ns,S),y}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,u,c,f;const p=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,S=this.origin;return p>=0?(n=(e.min.x-S.x)*p,s=(e.max.x-S.x)*p):(n=(e.max.x-S.x)*p,s=(e.min.x-S.x)*p),v>=0?(o=(e.min.y-S.y)*v,u=(e.max.y-S.y)*v):(o=(e.max.y-S.y)*v,u=(e.min.y-S.y)*v),n>u||o>s||((o>n||isNaN(n))&&(n=o),(u<s||isNaN(s))&&(s=u),M>=0?(c=(e.min.z-S.z)*M,f=(e.max.z-S.z)*M):(c=(e.max.z-S.z)*M,f=(e.min.z-S.z)*M),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,o){Ga.subVectors(t,e),Fs.subVectors(n,e),Wa.crossVectors(Ga,Fs);let u=this.direction.dot(Wa),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Di.subVectors(this.origin,e);const f=c*this.direction.dot(Fs.crossVectors(Di,Fs));if(f<0)return null;const p=c*this.direction.dot(Ga.cross(Di));if(p<0||f+p>u)return null;const v=-c*Di.dot(Wa);return v<0?null:this.at(v/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,n,s,o,u,c,f,p,v,M,S,y,A,T,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,u,c,f,p,v,M,S,y,A,T,x)}set(e,t,n,s,o,u,c,f,p,v,M,S,y,A,T,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=u,g[9]=c,g[13]=f,g[2]=p,g[6]=v,g[10]=M,g[14]=S,g[3]=y,g[7]=A,g[11]=T,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),o=1/gr.setFromMatrixColumn(e,1).length(),u=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(s),p=Math.sin(s),v=Math.cos(o),M=Math.sin(o);if(e.order==="XYZ"){const S=u*v,y=u*M,A=c*v,T=c*M;t[0]=f*v,t[4]=-f*M,t[8]=p,t[1]=y+A*p,t[5]=S-T*p,t[9]=-c*f,t[2]=T-S*p,t[6]=A+y*p,t[10]=u*f}else if(e.order==="YXZ"){const S=f*v,y=f*M,A=p*v,T=p*M;t[0]=S+T*c,t[4]=A*c-y,t[8]=u*p,t[1]=u*M,t[5]=u*v,t[9]=-c,t[2]=y*c-A,t[6]=T+S*c,t[10]=u*f}else if(e.order==="ZXY"){const S=f*v,y=f*M,A=p*v,T=p*M;t[0]=S-T*c,t[4]=-u*M,t[8]=A+y*c,t[1]=y+A*c,t[5]=u*v,t[9]=T-S*c,t[2]=-u*p,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const S=u*v,y=u*M,A=c*v,T=c*M;t[0]=f*v,t[4]=A*p-y,t[8]=S*p+T,t[1]=f*M,t[5]=T*p+S,t[9]=y*p-A,t[2]=-p,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const S=u*f,y=u*p,A=c*f,T=c*p;t[0]=f*v,t[4]=T-S*M,t[8]=A*M+y,t[1]=M,t[5]=u*v,t[9]=-c*v,t[2]=-p*v,t[6]=y*M+A,t[10]=S-T*M}else if(e.order==="XZY"){const S=u*f,y=u*p,A=c*f,T=c*p;t[0]=f*v,t[4]=-M,t[8]=p*v,t[1]=S*M+T,t[5]=u*v,t[9]=y*M-A,t[2]=A*M-y,t[6]=c*v,t[10]=T*M+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vf,e,Hf)}lookAt(e,t,n){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ii.crossVectors(n,Un),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ii.crossVectors(n,Un)),Ii.normalize(),Os.crossVectors(Un,Ii),s[0]=Ii.x,s[4]=Os.x,s[8]=Un.x,s[1]=Ii.y,s[5]=Os.y,s[9]=Un.y,s[2]=Ii.z,s[6]=Os.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,u=n[0],c=n[4],f=n[8],p=n[12],v=n[1],M=n[5],S=n[9],y=n[13],A=n[2],T=n[6],x=n[10],g=n[14],k=n[3],F=n[7],P=n[11],J=n[15],O=s[0],W=s[4],X=s[8],N=s[12],R=s[1],G=s[5],re=s[9],$=s[13],Q=s[2],de=s[6],le=s[10],ge=s[14],he=s[3],_e=s[7],De=s[11],qe=s[15];return o[0]=u*O+c*R+f*Q+p*he,o[4]=u*W+c*G+f*de+p*_e,o[8]=u*X+c*re+f*le+p*De,o[12]=u*N+c*$+f*ge+p*qe,o[1]=v*O+M*R+S*Q+y*he,o[5]=v*W+M*G+S*de+y*_e,o[9]=v*X+M*re+S*le+y*De,o[13]=v*N+M*$+S*ge+y*qe,o[2]=A*O+T*R+x*Q+g*he,o[6]=A*W+T*G+x*de+g*_e,o[10]=A*X+T*re+x*le+g*De,o[14]=A*N+T*$+x*ge+g*qe,o[3]=k*O+F*R+P*Q+J*he,o[7]=k*W+F*G+P*de+J*_e,o[11]=k*X+F*re+P*le+J*De,o[15]=k*N+F*$+P*ge+J*qe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],u=e[1],c=e[5],f=e[9],p=e[13],v=e[2],M=e[6],S=e[10],y=e[14],A=e[3],T=e[7],x=e[11],g=e[15];return A*(+o*f*M-s*p*M-o*c*S+n*p*S+s*c*y-n*f*y)+T*(+t*f*y-t*p*S+o*u*S-s*u*y+s*p*v-o*f*v)+x*(+t*p*M-t*c*y-o*u*M+n*u*y+o*c*v-n*p*v)+g*(-s*c*v-t*f*M+t*c*S+s*u*M-n*u*S+n*f*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],v=e[8],M=e[9],S=e[10],y=e[11],A=e[12],T=e[13],x=e[14],g=e[15],k=M*x*p-T*S*p+T*f*y-c*x*y-M*f*g+c*S*g,F=A*S*p-v*x*p-A*f*y+u*x*y+v*f*g-u*S*g,P=v*T*p-A*M*p+A*c*y-u*T*y-v*c*g+u*M*g,J=A*M*f-v*T*f-A*c*S+u*T*S+v*c*x-u*M*x,O=t*k+n*F+s*P+o*J;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/O;return e[0]=k*W,e[1]=(T*S*o-M*x*o-T*s*y+n*x*y+M*s*g-n*S*g)*W,e[2]=(c*x*o-T*f*o+T*s*p-n*x*p-c*s*g+n*f*g)*W,e[3]=(M*f*o-c*S*o-M*s*p+n*S*p+c*s*y-n*f*y)*W,e[4]=F*W,e[5]=(v*x*o-A*S*o+A*s*y-t*x*y-v*s*g+t*S*g)*W,e[6]=(A*f*o-u*x*o-A*s*p+t*x*p+u*s*g-t*f*g)*W,e[7]=(u*S*o-v*f*o+v*s*p-t*S*p-u*s*y+t*f*y)*W,e[8]=P*W,e[9]=(A*M*o-v*T*o-A*n*y+t*T*y+v*n*g-t*M*g)*W,e[10]=(u*T*o-A*c*o+A*n*p-t*T*p-u*n*g+t*c*g)*W,e[11]=(v*c*o-u*M*o-v*n*p+t*M*p+u*n*y-t*c*y)*W,e[12]=J*W,e[13]=(v*T*s-A*M*s+A*n*S-t*T*S-v*n*x+t*M*x)*W,e[14]=(A*c*s-u*T*s-A*n*f+t*T*f+u*n*x-t*c*x)*W,e[15]=(u*M*s-v*c*s+v*n*f-t*M*f-u*n*S+t*c*S)*W,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,u=e.x,c=e.y,f=e.z,p=o*u,v=o*c;return this.set(p*u+n,p*c-s*f,p*f+s*c,0,p*c+s*f,v*c+n,v*f-s*u,0,p*f-s*c,v*f+s*u,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,u){return this.set(1,n,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,u=t._y,c=t._z,f=t._w,p=o+o,v=u+u,M=c+c,S=o*p,y=o*v,A=o*M,T=u*v,x=u*M,g=c*M,k=f*p,F=f*v,P=f*M,J=n.x,O=n.y,W=n.z;return s[0]=(1-(T+g))*J,s[1]=(y+P)*J,s[2]=(A-F)*J,s[3]=0,s[4]=(y-P)*O,s[5]=(1-(S+g))*O,s[6]=(x+k)*O,s[7]=0,s[8]=(A+F)*W,s[9]=(x-k)*W,s[10]=(1-(S+T))*W,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=gr.set(s[0],s[1],s[2]).length();const u=gr.set(s[4],s[5],s[6]).length(),c=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);const p=1/o,v=1/u,M=1/c;return Zn.elements[0]*=p,Zn.elements[1]*=p,Zn.elements[2]*=p,Zn.elements[4]*=v,Zn.elements[5]*=v,Zn.elements[6]*=v,Zn.elements[8]*=M,Zn.elements[9]*=M,Zn.elements[10]*=M,t.setFromRotationMatrix(Zn),n.x=o,n.y=u,n.z=c,this}makePerspective(e,t,n,s,o,u,c=Ti){const f=this.elements,p=2*o/(t-e),v=2*o/(n-s),M=(t+e)/(t-e),S=(n+s)/(n-s);let y,A;if(c===Ti)y=-(u+o)/(u-o),A=-2*u*o/(u-o);else if(c===ba)y=-u/(u-o),A=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=M,f[12]=0,f[1]=0,f[5]=v,f[9]=S,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,u,c=Ti){const f=this.elements,p=1/(t-e),v=1/(n-s),M=1/(u-o),S=(t+e)*p,y=(n+s)*v;let A,T;if(c===Ti)A=(u+o)*M,T=-2*M;else if(c===ba)A=o*M,T=-1*M;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-S,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gr=new j,Zn=new Zt,Vf=new j(0,0,0),Hf=new j(1,1,1),Ii=new j,Os=new j,Un=new j,rc=new Zt,sc=new Zr;class di{constructor(e=0,t=0,n=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],f=s[1],p=s[5],v=s[9],M=s[2],S=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-M,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Tn(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-M,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gf=0;const ac=new j,xr=new Zr,xi=new Zt,Bs=new j,os=new j,Wf=new j,Xf=new Zr,oc=new j(1,0,0),lc=new j(0,1,0),cc=new j(0,0,1),uc={type:"added"},qf={type:"removed"},Mr={type:"childadded",child:null},Xa={type:"childremoved",child:null};class ln extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new j,t=new di,n=new Zr,s=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new wt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(os,Bs,this.up):xi.lookAt(Bs,os,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(xi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const M=f[p];o(e.shapes,M)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,p=this.material.length;f<p;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),p=u(e.textures),v=u(e.images),M=u(e.shapes),S=u(e.skeletons),y=u(e.animations),A=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),p.length>0&&(n.textures=p),v.length>0&&(n.images=v),M.length>0&&(n.shapes=M),S.length>0&&(n.skeletons=S),y.length>0&&(n.animations=y),A.length>0&&(n.nodes=A)}return n.object=s,n;function u(c){const f=[];for(const p in c){const v=c[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new j(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new j,Mi=new j,qa=new j,Si=new j,Sr=new j,yr=new j,hc=new j,$a=new j,Ya=new j,ja=new j,Ka=new rn,Za=new rn,Ja=new rn;class In{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Jn.subVectors(s,t),Mi.subVectors(n,t),qa.subVectors(e,t);const u=Jn.dot(Jn),c=Jn.dot(Mi),f=Jn.dot(qa),p=Mi.dot(Mi),v=Mi.dot(qa),M=u*p-c*c;if(M===0)return o.set(0,0,0),null;const S=1/M,y=(p*f-c*v)*S,A=(u*v-c*f)*S;return o.set(1-y-A,A,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,o,u,c,f){return this.getBarycoord(e,t,n,s,Si)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Si.x),f.addScaledVector(u,Si.y),f.addScaledVector(c,Si.z),f)}static getInterpolatedAttribute(e,t,n,s,o,u){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ka,o.x),u.addScaledVector(Za,o.y),u.addScaledVector(Ja,o.z),u}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Mi.subVectors(e,t),Jn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return In.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let u,c;Sr.subVectors(s,n),yr.subVectors(o,n),$a.subVectors(e,n);const f=Sr.dot($a),p=yr.dot($a);if(f<=0&&p<=0)return t.copy(n);Ya.subVectors(e,s);const v=Sr.dot(Ya),M=yr.dot(Ya);if(v>=0&&M<=v)return t.copy(s);const S=f*M-v*p;if(S<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(n).addScaledVector(Sr,u);ja.subVectors(e,o);const y=Sr.dot(ja),A=yr.dot(ja);if(A>=0&&y<=A)return t.copy(o);const T=y*p-f*A;if(T<=0&&p>=0&&A<=0)return c=p/(p-A),t.copy(n).addScaledVector(yr,c);const x=v*A-y*M;if(x<=0&&M-v>=0&&y-A>=0)return hc.subVectors(o,s),c=(M-v)/(M-v+(y-A)),t.copy(s).addScaledVector(hc,c);const g=1/(x+T+S);return u=T*g,c=S*g,t.copy(n).addScaledVector(Sr,u).addScaledVector(yr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ft.workingColorSpace){if(e=Tl(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Qa(u,o,e+1/3),this.g=Qa(u,o,e),this.b=Qa(u,o,e-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Wn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ft.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Tn(Sn.r*255,0,255))*65536+Math.round(Tn(Sn.g*255,0,255))*256+Math.round(Tn(Sn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,s=Sn.g,o=Sn.b,u=Math.max(n,s,o),c=Math.min(n,s,o);let f,p;const v=(c+u)/2;if(c===u)f=0,p=0;else{const M=u-c;switch(p=v<=.5?M/(u+c):M/(2-u-c),u){case n:f=(s-o)/M+(s<o?6:0);break;case s:f=(o-n)/M+2;break;case o:f=(n-s)/M+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Wn){Ft.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,s=Sn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(zs);const n=vs(Ni.h,zs.h,t),s=vs(Ni.s,zs.s,t),o=vs(Ni.l,zs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ct;Ct.NAMES=Du;let $f=0;class qi extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ai(),this.name="",this.blending=kr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const u=[];for(const c in o){const f=o[c];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class La extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new j,ks=new ut;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),o=Gt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class Iu extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yf=0;const Vn=new Zt,eo=new ln,br=new j,Dn=new hr,ls=new hr,dn=new j;class Wt extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Nu:Iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new wt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];ls.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Dn.min,ls.min),Dn.expandByPoint(dn),dn.addVectors(Dn.max,ls.max),Dn.expandByPoint(dn)):(Dn.expandByPoint(ls.min),Dn.expandByPoint(ls.max))}Dn.getCenter(n);let s=0;for(let o=0,u=e.count;o<u;o++)dn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],f=this.morphTargetsRelative;for(let p=0,v=c.count;p<v;p++)dn.fromBufferAttribute(c,p),f&&(br.fromBufferAttribute(e,p),dn.add(br)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let X=0;X<n.count;X++)c[X]=new j,f[X]=new j;const p=new j,v=new j,M=new j,S=new ut,y=new ut,A=new ut,T=new j,x=new j;function g(X,N,R){p.fromBufferAttribute(n,X),v.fromBufferAttribute(n,N),M.fromBufferAttribute(n,R),S.fromBufferAttribute(o,X),y.fromBufferAttribute(o,N),A.fromBufferAttribute(o,R),v.sub(p),M.sub(p),y.sub(S),A.sub(S);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(T.copy(v).multiplyScalar(A.y).addScaledVector(M,-y.y).multiplyScalar(G),x.copy(M).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(G),c[X].add(T),c[N].add(T),c[R].add(T),f[X].add(x),f[N].add(x),f[R].add(x))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let X=0,N=k.length;X<N;++X){const R=k[X],G=R.start,re=R.count;for(let $=G,Q=G+re;$<Q;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const F=new j,P=new j,J=new j,O=new j;function W(X){J.fromBufferAttribute(s,X),O.copy(J);const N=c[X];F.copy(N),F.sub(J.multiplyScalar(J.dot(N))).normalize(),P.crossVectors(O,N);const G=P.dot(f[X])<0?-1:1;u.setXYZW(X,F.x,F.y,F.z,G)}for(let X=0,N=k.length;X<N;++X){const R=k[X],G=R.start,re=R.count;for(let $=G,Q=G+re;$<Q;$+=3)W(e.getX($+0)),W(e.getX($+1)),W(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let S=0,y=n.count;S<y;S++)n.setXYZ(S,0,0,0);const s=new j,o=new j,u=new j,c=new j,f=new j,p=new j,v=new j,M=new j;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,T),u.fromBufferAttribute(t,x),v.subVectors(u,o),M.subVectors(s,o),v.cross(M),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,T),p.fromBufferAttribute(n,x),c.add(v),f.add(v),p.add(v),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(T,f.x,f.y,f.z),n.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,y=t.count;S<y;S+=3)s.fromBufferAttribute(t,S+0),o.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),v.subVectors(u,o),M.subVectors(s,o),v.cross(M),n.setXYZ(S+0,v.x,v.y,v.z),n.setXYZ(S+1,v.x,v.y,v.z),n.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,f){const p=c.array,v=c.itemSize,M=c.normalized,S=new p.constructor(f.length*v);let y=0,A=0;for(let T=0,x=f.length;T<x;T++){c.isInterleavedBufferAttribute?y=f[T]*c.data.stride+c.offset:y=f[T]*v;for(let g=0;g<v;g++)S[A++]=p[y++]}return new vn(S,v,M)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],p=e(f,n);t.setAttribute(c,p)}const o=this.morphAttributes;for(const c in o){const f=[],p=o[c];for(let v=0,M=p.length;v<M;v++){const S=p[v],y=e(S,n);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const p=n[f];e.data.attributes[f]=p.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let M=0,S=p.length;M<S;M++){const y=p[M];v.push(y.toJSON(e.data))}v.length>0&&(s[f]=v,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const v=s[p];this.setAttribute(p,v.clone(t))}const o=e.morphAttributes;for(const p in o){const v=[],M=o[p];for(let S=0,y=M.length;S<y;S++)v.push(M[S].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const M=u[p];this.addGroup(M.start,M.count,M.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new Zt,Ji=new Pa,Vs=new ys,dc=new j,Hs=new j,Gs=new j,Ws=new j,to=new j,Xs=new j,pc=new j,qs=new j;class _n extends ln{constructor(e=new Wt,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Xs.set(0,0,0);for(let f=0,p=o.length;f<p;f++){const v=c[f],M=o[f];v!==0&&(to.fromBufferAttribute(M,e),u?Xs.addScaledVector(to,v):Xs.addScaledVector(to.sub(t),v))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(o),Ji.copy(e.ray).recast(e.near),!(Vs.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Vs,dc)===null||Ji.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(fc.copy(o).invert(),Ji.copy(e.ray).applyMatrix4(fc),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s;const o=this.geometry,u=this.material,c=o.index,f=o.attributes.position,p=o.attributes.uv,v=o.attributes.uv1,M=o.attributes.normal,S=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let A=0,T=S.length;A<T;A++){const x=S[A],g=u[x.materialIndex],k=Math.max(x.start,y.start),F=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let P=k,J=F;P<J;P+=3){const O=c.getX(P),W=c.getX(P+1),X=c.getX(P+2);s=$s(this,g,e,n,p,v,M,O,W,X),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const A=Math.max(0,y.start),T=Math.min(c.count,y.start+y.count);for(let x=A,g=T;x<g;x+=3){const k=c.getX(x),F=c.getX(x+1),P=c.getX(x+2);s=$s(this,u,e,n,p,v,M,k,F,P),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let A=0,T=S.length;A<T;A++){const x=S[A],g=u[x.materialIndex],k=Math.max(x.start,y.start),F=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let P=k,J=F;P<J;P+=3){const O=P,W=P+1,X=P+2;s=$s(this,g,e,n,p,v,M,O,W,X),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const A=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let x=A,g=T;x<g;x+=3){const k=x,F=x+1,P=x+2;s=$s(this,u,e,n,p,v,M,k,F,P),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function jf(i,e,t,n,s,o,u,c){let f;if(e.side===Cn?f=n.intersectTriangle(u,o,s,!0,c):f=n.intersectTriangle(s,o,u,e.side===Wi,c),f===null)return null;qs.copy(c),qs.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(qs);return p<t.near||p>t.far?null:{distance:p,point:qs.clone(),object:i}}function $s(i,e,t,n,s,o,u,c,f,p){i.getVertexPosition(c,Hs),i.getVertexPosition(f,Gs),i.getVertexPosition(p,Ws);const v=jf(i,e,t,n,Hs,Gs,Ws,pc);if(v){const M=new j;In.getBarycoord(pc,Hs,Gs,Ws,M),s&&(v.uv=In.getInterpolatedAttribute(s,c,f,p,M,new ut)),o&&(v.uv1=In.getInterpolatedAttribute(o,c,f,p,M,new ut)),u&&(v.normal=In.getInterpolatedAttribute(u,c,f,p,M,new j),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const S={a:c,b:f,c:p,normal:new j,materialIndex:0};In.getNormal(Hs,Gs,Ws,S.normal),v.face=S,v.barycoord=M}return v}class Jr extends Wt{constructor(e=1,t=1,n=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],p=[],v=[],M=[];let S=0,y=0;A("z","y","x",-1,-1,n,t,e,u,o,0),A("z","y","x",1,-1,n,t,-e,u,o,1),A("x","z","y",1,1,e,n,t,s,u,2),A("x","z","y",1,-1,e,n,-t,s,u,3),A("x","y","z",1,-1,e,t,n,s,o,4),A("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(f),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(M,2));function A(T,x,g,k,F,P,J,O,W,X,N){const R=P/W,G=J/X,re=P/2,$=J/2,Q=O/2,de=W+1,le=X+1;let ge=0,he=0;const _e=new j;for(let De=0;De<le;De++){const qe=De*G-$;for(let ce=0;ce<de;ce++){const Xe=ce*R-re;_e[T]=Xe*k,_e[x]=qe*F,_e[g]=Q,p.push(_e.x,_e.y,_e.z),_e[T]=0,_e[x]=0,_e[g]=O>0?1:-1,v.push(_e.x,_e.y,_e.z),M.push(ce/W),M.push(1-De/X),ge+=1}}for(let De=0;De<X;De++)for(let qe=0;qe<W;qe++){const ce=S+qe+de*De,Xe=S+qe+de*(De+1),me=S+(qe+1)+de*(De+1),oe=S+(qe+1)+de*De;f.push(ce,Xe,oe),f.push(Xe,me,oe),he+=6}c.addGroup(y,he,N),y+=he,S+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=jr(i[t]);for(const s in n)e[s]=n[s]}return e}function Kf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const Zf={clone:jr,merge:En};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ou extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new j,mc=new ut,vc=new ut;class Xn extends Ou{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,mc,vc),t.subVectors(vc,mc)}setViewOffset(e,t,n,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*n/p,s*=u.width/f,n*=u.height/p}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Er=1;class ed extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(wr,Er,e,t);s.layers=this.layers,this.add(s);const o=new Xn(wr,Er,e,t);o.layers=this.layers,this.add(o);const u=new Xn(wr,Er,e,t);u.layers=this.layers,this.add(u);const c=new Xn(wr,Er,e,t);c.layers=this.layers,this.add(c);const f=new Xn(wr,Er,e,t);f.layers=this.layers,this.add(f);const p=new Xn(wr,Er,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,u,c,f]=t;for(const p of t)this.remove(p);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,f,p,v]=this.children,M=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),e.render(t,v),e.setRenderTarget(M,S,y),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class Bu extends An{constructor(e,t,n,s,o,u,c,f,p,v){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,n,s,o,u,c,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class td extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),o=new Xi({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Hi});o.uniforms.tEquirect.value=t;const u=new _n(s,o),c=t.minFilter;return t.minFilter===lr&&(t.minFilter=Yn),new ed(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(o)}}const no=new j,nd=new j,id=new wt;class nr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=no.subVectors(n,t).cross(nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||id.getNormalMatrix(e),s=this.coplanarPoint(no).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ys,Ys=new j;class Cl{constructor(e=new nr,t=new nr,n=new nr,s=new nr,o=new nr,u=new nr){this.planes=[e,t,n,s,o,u]}set(e,t,n,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,s=e.elements,o=s[0],u=s[1],c=s[2],f=s[3],p=s[4],v=s[5],M=s[6],S=s[7],y=s[8],A=s[9],T=s[10],x=s[11],g=s[12],k=s[13],F=s[14],P=s[15];if(n[0].setComponents(f-o,S-p,x-y,P-g).normalize(),n[1].setComponents(f+o,S+p,x+y,P+g).normalize(),n[2].setComponents(f+u,S+v,x+A,P+k).normalize(),n[3].setComponents(f-u,S-v,x-A,P-k).normalize(),n[4].setComponents(f-c,S-M,x-T,P-F).normalize(),t===Ti)n[5].setComponents(f+c,S+M,x+T,P+F).normalize();else if(t===ba)n[5].setComponents(c,M,T,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let i=null,e=!1,t=null,n=null;function s(o,u){t(o,u),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function rd(i){const e=new WeakMap;function t(c,f){const p=c.array,v=c.usage,M=p.byteLength,S=i.createBuffer();i.bindBuffer(f,S),i.bufferData(f,p,v),c.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:M}}function n(c,f,p){const v=f.array,M=f.updateRanges;if(i.bindBuffer(p,c),M.length===0)i.bufferSubData(p,0,v);else{M.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<M.length;y++){const A=M[S],T=M[y];T.start<=A.start+A.count+1?A.count=Math.max(A.count,T.start+T.count-A.start):(++S,M[S]=T)}M.length=S+1;for(let y=0,A=M.length;y<A;y++){const T=M[y];i.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const v=e.get(c);(!v||v.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const p=e.get(c);if(p===void 0)e.set(c,t(c,f));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,f),p.version=c.version}}return{get:s,remove:o,update:u}}class Ua extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(n),f=Math.floor(s),p=c+1,v=f+1,M=e/c,S=t/f,y=[],A=[],T=[],x=[];for(let g=0;g<v;g++){const k=g*S-u;for(let F=0;F<p;F++){const P=F*M-o;A.push(P,-k,0),T.push(0,0,1),x.push(F/c),x.push(1-g/f)}}for(let g=0;g<f;g++)for(let k=0;k<c;k++){const F=k+p*g,P=k+p*(g+1),J=k+1+p*(g+1),O=k+1+p*g;y.push(F,P,O),y.push(P,J,O)}this.setIndex(y),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(T,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,xd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:sd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:ud,aomap_fragment:hd,aomap_pars_fragment:fd,batching_pars_vertex:dd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:vd,bsdfs:_d,iridescence_fragment:gd,bumpmap_pars_fragment:xd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:bd,color_fragment:wd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:Ad,common:Cd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Ud,emissivemap_fragment:Dd,emissivemap_pars_fragment:Id,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Zd,envmap_vertex:Vd,fog_vertex:Hd,fog_pars_vertex:Gd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:$d,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:jd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:dp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:vp,morphinstance_vertex:_p,morphcolor_vertex:gp,morphnormal_vertex:xp,morphtarget_pars_vertex:Mp,morphtarget_vertex:Sp,normal_fragment_begin:yp,normal_fragment_maps:bp,normal_pars_fragment:wp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Up,packing:Dp,premultiplied_alpha_fragment:Ip,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:$p,specularmap_fragment:Yp,specularmap_pars_fragment:jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distanceRGBA_vert:fm,distanceRGBA_frag:dm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:vm,linedashed_frag:_m,meshbasic_vert:gm,meshbasic_frag:xm,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:ym,meshmatcap_frag:bm,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Um,points_frag:Dm,shadow_vert:Im,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ui={basic:{uniforms:En([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:En([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:En([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:En([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:En([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:En([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:En([ke.points,ke.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:En([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:En([ke.common,ke.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:En([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:En([ke.sprite,ke.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:En([ke.common,ke.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:En([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ui.physical={uniforms:En([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const js={r:0,b:0,g:0},er=new di,Bm=new Zt;function zm(i,e,t,n,s,o,u){const c=new Ct(0);let f=o===!0?0:1,p,v,M=null,S=0,y=null;function A(k){let F=k.isScene===!0?k.background:null;return F&&F.isTexture&&(F=(k.backgroundBlurriness>0?t:e).get(F)),F}function T(k){let F=!1;const P=A(k);P===null?g(c,f):P&&P.isColor&&(g(P,1),F=!0);const J=i.xr.getEnvironmentBlendMode();J==="additive"?n.buffers.color.setClear(0,0,0,1,u):J==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(k,F){const P=A(F);P&&(P.isCubeTexture||P.mapping===Ca)?(v===void 0&&(v=new _n(new Jr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:jr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(J,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(v)),er.copy(F.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(er)),v.material.toneMapped=Ft.getTransfer(P.colorSpace)!==$t,(M!==P||S!==P.version||y!==i.toneMapping)&&(v.material.needsUpdate=!0,M=P,S=P.version,y=i.toneMapping),v.layers.enableAll(),k.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new _n(new Ua(2,2),new Xi({name:"BackgroundMaterial",uniforms:jr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Ft.getTransfer(P.colorSpace)!==$t,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(M!==P||S!==P.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,M=P,S=P.version,y=i.toneMapping),p.layers.enableAll(),k.unshift(p,p.geometry,p.material,0,0,null))}function g(k,F){k.getRGB(js,Fu(i)),n.buffers.color.setClear(js.r,js.g,js.b,F,u)}return{getClearColor:function(){return c},setClearColor:function(k,F=1){c.set(k),f=F,g(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(k){f=k,g(c,f)},render:T,addToRenderList:x}}function km(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=S(null);let o=s,u=!1;function c(R,G,re,$,Q){let de=!1;const le=M($,re,G);o!==le&&(o=le,p(o.object)),de=y(R,$,re,Q),de&&A(R,$,re,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,P(R,G,re,$),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function f(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function v(R){return i.deleteVertexArray(R)}function M(R,G,re){const $=re.wireframe===!0;let Q=n[R.id];Q===void 0&&(Q={},n[R.id]=Q);let de=Q[G.id];de===void 0&&(de={},Q[G.id]=de);let le=de[$];return le===void 0&&(le=S(f()),de[$]=le),le}function S(R){const G=[],re=[],$=[];for(let Q=0;Q<t;Q++)G[Q]=0,re[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:re,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,G,re,$){const Q=o.attributes,de=G.attributes;let le=0;const ge=re.getAttributes();for(const he in ge)if(ge[he].location>=0){const De=Q[he];let qe=de[he];if(qe===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(qe=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(qe=R.instanceColor)),De===void 0||De.attribute!==qe||qe&&De.data!==qe.data)return!0;le++}return o.attributesNum!==le||o.index!==$}function A(R,G,re,$){const Q={},de=G.attributes;let le=0;const ge=re.getAttributes();for(const he in ge)if(ge[he].location>=0){let De=de[he];De===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(De=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(De=R.instanceColor));const qe={};qe.attribute=De,De&&De.data&&(qe.data=De.data),Q[he]=qe,le++}o.attributes=Q,o.attributesNum=le,o.index=$}function T(){const R=o.newAttributes;for(let G=0,re=R.length;G<re;G++)R[G]=0}function x(R){g(R,0)}function g(R,G){const re=o.newAttributes,$=o.enabledAttributes,Q=o.attributeDivisors;re[R]=1,$[R]===0&&(i.enableVertexAttribArray(R),$[R]=1),Q[R]!==G&&(i.vertexAttribDivisor(R,G),Q[R]=G)}function k(){const R=o.newAttributes,G=o.enabledAttributes;for(let re=0,$=G.length;re<$;re++)G[re]!==R[re]&&(i.disableVertexAttribArray(re),G[re]=0)}function F(R,G,re,$,Q,de,le){le===!0?i.vertexAttribIPointer(R,G,re,Q,de):i.vertexAttribPointer(R,G,re,$,Q,de)}function P(R,G,re,$){T();const Q=$.attributes,de=re.getAttributes(),le=G.defaultAttributeValues;for(const ge in de){const he=de[ge];if(he.location>=0){let _e=Q[ge];if(_e===void 0&&(ge==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),ge==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){const De=_e.normalized,qe=_e.itemSize,ce=e.get(_e);if(ce===void 0)continue;const Xe=ce.buffer,me=ce.type,oe=ce.bytesPerElement,Pe=me===i.INT||me===i.UNSIGNED_INT||_e.gpuType===Ml;if(_e.isInterleavedBufferAttribute){const Ue=_e.data,Qe=Ue.stride,Ve=_e.offset;if(Ue.isInstancedInterleavedBuffer){for(let Ze=0;Ze<he.locationSize;Ze++)g(he.location+Ze,Ue.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ze=0;Ze<he.locationSize;Ze++)x(he.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ze=0;Ze<he.locationSize;Ze++)F(he.location+Ze,qe/he.locationSize,me,De,Qe*oe,(Ve+qe/he.locationSize*Ze)*oe,Pe)}else{if(_e.isInstancedBufferAttribute){for(let Ue=0;Ue<he.locationSize;Ue++)g(he.location+Ue,_e.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ue=0;Ue<he.locationSize;Ue++)x(he.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ue=0;Ue<he.locationSize;Ue++)F(he.location+Ue,qe/he.locationSize,me,De,qe*oe,qe/he.locationSize*Ue*oe,Pe)}}else if(le!==void 0){const De=le[ge];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(he.location,De);break;case 3:i.vertexAttrib3fv(he.location,De);break;case 4:i.vertexAttrib4fv(he.location,De);break;default:i.vertexAttrib1fv(he.location,De)}}}}k()}function J(){X();for(const R in n){const G=n[R];for(const re in G){const $=G[re];for(const Q in $)v($[Q].object),delete $[Q];delete G[re]}delete n[R]}}function O(R){if(n[R.id]===void 0)return;const G=n[R.id];for(const re in G){const $=G[re];for(const Q in $)v($[Q].object),delete $[Q];delete G[re]}delete n[R.id]}function W(R){for(const G in n){const re=n[G];if(re[R.id]===void 0)continue;const $=re[R.id];for(const Q in $)v($[Q].object),delete $[Q];delete re[R.id]}}function X(){N(),u=!0,o!==s&&(o=s,p(o.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:X,resetDefaultState:N,dispose:J,releaseStatesOfGeometry:O,releaseStatesOfProgram:W,initAttributes:T,enableAttribute:x,disableUnusedAttributes:k}}function Vm(i,e,t){let n;function s(p){n=p}function o(p,v){i.drawArrays(n,p,v),t.update(v,n,1)}function u(p,v,M){M!==0&&(i.drawArraysInstanced(n,p,v,M),t.update(v,n,M))}function c(p,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,v,0,M);let y=0;for(let A=0;A<M;A++)y+=v[A];t.update(y,n,1)}function f(p,v,M,S){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)u(p[A],v[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(n,p,0,v,0,S,0,M);let A=0;for(let T=0;T<M;T++)A+=v[T]*S[T];t.update(A,n,1)}}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Hm(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(W){return!(W!==ri&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(W){const X=W===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==Ri&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==Ei&&!X)}function f(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const M=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),k=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),J=A>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:p,logarithmicDepthBuffer:M,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:T,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:k,maxVaryings:F,maxFragmentUniforms:P,vertexTextures:J,maxSamples:O}}function Gm(i){const e=this;let t=null,n=0,s=!1,o=!1;const u=new nr,c=new wt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(M,S){const y=M.length!==0||S||n!==0||s;return s=S,n=M.length,y},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(M,S){t=v(M,S,0)},this.setState=function(M,S,y){const A=M.clippingPlanes,T=M.clipIntersection,x=M.clipShadows,g=i.get(M);if(!s||A===null||A.length===0||o&&!x)o?v(null):p();else{const k=o?0:n,F=k*4;let P=g.clippingState||null;f.value=P,P=v(A,S,F,y);for(let J=0;J!==F;++J)P[J]=t[J];g.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=k}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(M,S,y,A){const T=M!==null?M.length:0;let x=null;if(T!==0){if(x=f.value,A!==!0||x===null){const g=y+T*4,k=S.matrixWorldInverse;c.getNormalMatrix(k),(x===null||x.length<g)&&(x=new Float32Array(g));for(let F=0,P=y;F!==T;++F,P+=4)u.copy(M[F]).applyMatrix4(k,c),u.normal.toArray(x,P),x[P+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function Wm(i){let e=new WeakMap;function t(u,c){return c===Oo?u.mapping=Xr:c===Bo&&(u.mapping=qr),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Oo||c===Bo)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new td(f.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class bs extends Ou{constructor(e=-1,t=1,n=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,u=o+p*this.view.width,c-=v*this.view.offsetY,f=c-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Or=4,_c=[.125,.215,.35,.446,.526,.582],sr=20,io=new bs,gc=new Ct;let ro=null,so=0,ao=0,oo=!1;const ir=(1+Math.sqrt(5))/2,Tr=1/ir,xc=[new j(-ir,Tr,0),new j(ir,Tr,0),new j(-Tr,0,ir),new j(Tr,0,ir),new j(0,ir,-Tr),new j(0,ir,Tr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,ao),this._renderer.xr.enabled=oo,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ss,format:ri,colorSpace:Kr,depthBuffer:!1},s=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(o)),this._blurMaterial=qm(o,e,t)}return s}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,s){const c=new Xn(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,M=v.autoClear,S=v.toneMapping;v.getClearColor(gc),v.toneMapping=Gi,v.autoClear=!1;const y=new La({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),A=new _n(new Jr,y);let T=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,T=!0):(y.color.copy(gc),T=!0);for(let g=0;g<6;g++){const k=g%3;k===0?(c.up.set(0,f[g],0),c.lookAt(p[g],0,0)):k===1?(c.up.set(0,0,f[g]),c.lookAt(0,p[g],0)):(c.up.set(0,f[g],0),c.lookAt(0,0,p[g]));const F=this._cubeSize;Ks(s,k*F,g>2?F:0,F,F),v.setRenderTarget(s),T&&v.render(A,c),v.render(e,c)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=M,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Xr||e.mapping===qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new _n(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;Ks(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=xc[(s-o-1)%xc.length];this._blur(e,o-1,o,u,c)}t.autoClear=n}_blur(e,t,n,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",o),this._halfBlur(u,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,u,c){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,M=new _n(this._lodPlanes[s],p),S=p.uniforms,y=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*sr-1),T=o/A,x=isFinite(o)?1+Math.floor(v*T):sr;x>sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${sr}`);const g=[];let k=0;for(let W=0;W<sr;++W){const X=W/T,N=Math.exp(-X*X/2);g.push(N),W===0?k+=N:W<x&&(k+=2*N)}for(let W=0;W<g.length;W++)g[W]=g[W]/k;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=u==="latitudinal",c&&(S.poleAxis.value=c);const{_lodMax:F}=this;S.dTheta.value=A,S.mipInt.value=F-n;const P=this._sizeLods[s],J=3*P*(s>F-Or?s-F+Or:0),O=4*(this._cubeSize-P);Ks(t,J,O,3*P,2*P),f.setRenderTarget(t),f.render(M,io)}}function Xm(i){const e=[],t=[],n=[];let s=i;const o=i-Or+1+_c.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>i-Or?f=_c[u-i+Or-1]:u===0&&(f=0),n.push(f);const p=1/(c-2),v=-p,M=1+p,S=[v,v,M,v,M,M,v,v,M,M,v,M],y=6,A=6,T=3,x=2,g=1,k=new Float32Array(T*A*y),F=new Float32Array(x*A*y),P=new Float32Array(g*A*y);for(let O=0;O<y;O++){const W=O%3*2/3-1,X=O>2?0:-1,N=[W,X,0,W+2/3,X,0,W+2/3,X+1,0,W,X,0,W+2/3,X+1,0,W,X+1,0];k.set(N,T*A*O),F.set(S,x*A*O);const R=[O,O,O,O,O,O];P.set(R,g*A*O)}const J=new Wt;J.setAttribute("position",new vn(k,T)),J.setAttribute("uv",new vn(F,x)),J.setAttribute("faceIndex",new vn(P,g)),e.push(J),s>Or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(i,e,t){const n=new ur(i,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qm(i,e,t){const n=new Float32Array(sr),s=new j(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function yc(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function bc(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,p=f===Oo||f===Bo,v=f===Xr||f===qr;if(p||v){let M=e.get(c);const S=M!==void 0?M.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==S)return t===null&&(t=new Mc(i)),M=p?t.fromEquirectangular(c,M):t.fromCubemap(c,M),M.texture.pmremVersion=c.pmremVersion,e.set(c,M),M.texture;if(M!==void 0)return M.texture;{const y=c.image;return p&&y&&y.height>0||v&&y&&s(y)?(t===null&&(t=new Mc(i)),M=p?t.fromEquirectangular(c):t.fromCubemap(c),M.texture.pmremVersion=c.pmremVersion,e.set(c,M),c.addEventListener("dispose",o),M.texture):null}}}return c}function s(c){let f=0;const p=6;for(let v=0;v<p;v++)c[v]!==void 0&&f++;return f===p}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Ym(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,e,t,n){const s={},o=new WeakMap;function u(M){const S=M.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const T=S.morphAttributes[A];for(let x=0,g=T.length;x<g;x++)e.remove(T[x])}S.removeEventListener("dispose",u),delete s[S.id];const y=o.get(S);y&&(e.remove(y),o.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function c(M,S){return s[S.id]===!0||(S.addEventListener("dispose",u),s[S.id]=!0,t.memory.geometries++),S}function f(M){const S=M.attributes;for(const A in S)e.update(S[A],i.ARRAY_BUFFER);const y=M.morphAttributes;for(const A in y){const T=y[A];for(let x=0,g=T.length;x<g;x++)e.update(T[x],i.ARRAY_BUFFER)}}function p(M){const S=[],y=M.index,A=M.attributes.position;let T=0;if(y!==null){const k=y.array;T=y.version;for(let F=0,P=k.length;F<P;F+=3){const J=k[F+0],O=k[F+1],W=k[F+2];S.push(J,O,O,W,W,J)}}else if(A!==void 0){const k=A.array;T=A.version;for(let F=0,P=k.length/3-1;F<P;F+=3){const J=F+0,O=F+1,W=F+2;S.push(J,O,O,W,W,J)}}else return;const x=new(Pu(S)?Nu:Iu)(S,1);x.version=T;const g=o.get(M);g&&e.remove(g),o.set(M,x)}function v(M){const S=o.get(M);if(S){const y=M.index;y!==null&&S.version<y.version&&p(M)}else p(M);return o.get(M)}return{get:c,update:f,getWireframeAttribute:v}}function Km(i,e,t){let n;function s(S){n=S}let o,u;function c(S){o=S.type,u=S.bytesPerElement}function f(S,y){i.drawElements(n,y,o,S*u),t.update(y,n,1)}function p(S,y,A){A!==0&&(i.drawElementsInstanced(n,y,o,S*u,A),t.update(y,n,A))}function v(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,S,0,A);let x=0;for(let g=0;g<A;g++)x+=y[g];t.update(x,n,1)}function M(S,y,A,T){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)p(S[g]/u,y[g],T[g]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,o,S,0,T,0,A);let g=0;for(let k=0;k<A;k++)g+=y[k]*T[k];t.update(g,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=M}function Zm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,e,t){const n=new WeakMap,s=new rn;function o(u,c,f){const p=u.morphTargetInfluences,v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=v!==void 0?v.length:0;let S=n.get(c);if(S===void 0||S.count!==M){let N=function(){W.dispose(),n.delete(c),c.removeEventListener("dispose",N)};S!==void 0&&S.texture.dispose();const y=c.morphAttributes.position!==void 0,A=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],k=c.morphAttributes.color||[];let F=0;y===!0&&(F=1),A===!0&&(F=2),T===!0&&(F=3);let P=c.attributes.position.count*F,J=1;P>e.maxTextureSize&&(J=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const O=new Float32Array(P*J*4*M),W=new Uu(O,P,J,M);W.type=Ei,W.needsUpdate=!0;const X=F*4;for(let R=0;R<M;R++){const G=x[R],re=g[R],$=k[R],Q=P*J*4*R;for(let de=0;de<G.count;de++){const le=de*X;y===!0&&(s.fromBufferAttribute(G,de),O[Q+le+0]=s.x,O[Q+le+1]=s.y,O[Q+le+2]=s.z,O[Q+le+3]=0),A===!0&&(s.fromBufferAttribute(re,de),O[Q+le+4]=s.x,O[Q+le+5]=s.y,O[Q+le+6]=s.z,O[Q+le+7]=0),T===!0&&(s.fromBufferAttribute($,de),O[Q+le+8]=s.x,O[Q+le+9]=s.y,O[Q+le+10]=s.z,O[Q+le+11]=$.itemSize===4?s.w:1)}}S={count:M,texture:W,size:new ut(P,J)},n.set(c,S),c.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let y=0;for(let T=0;T<p.length;T++)y+=p[T];const A=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}return{update:o}}function Qm(i,e,t,n){let s=new WeakMap;function o(f){const p=n.render.frame,v=f.geometry,M=e.get(f,v);if(s.get(M)!==p&&(e.update(M),s.set(M,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==p&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),s.set(f,p))),f.isSkinnedMesh){const S=f.skeleton;s.get(S)!==p&&(S.update(),s.set(S,p))}return M}function u(){s=new WeakMap}function c(f){const p=f.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:u}}class ku extends An{constructor(e,t,n,s,o,u,c,f,p,v=Vr){if(v!==Vr&&v!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&v===Vr&&(n=cr),n===void 0&&v===Yr&&(n=$r),super(null,s,o,u,c,f,v,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:si,this.minFilter=f!==void 0?f:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vu=new An,wc=new ku(1,1),Hu=new Uu,Gu=new zf,Wu=new Bu,Ec=[],Tc=[],Ac=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function Qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Ec[s];if(o===void 0&&(o=new Float32Array(s),Ec[s]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(o,c)}return o}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),hn(t,n)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),hn(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),hn(t,n)}}function o0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function m0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=Ru,o=wc):o=Vu,t.setTexture2D(e||o,s)}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gu,s)}function _0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wu,s)}function g0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hu,s)}function x0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return g0}}function M0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function y0(i,e){const t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function b0(i,e){const t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function w0(i,e){const t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E0(i,e){const t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A0(i,e){i.uniform1iv(this.addr,e)}function C0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function P0(i,e){i.uniform4iv(this.addr,e)}function L0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function D0(i,e){i.uniform3uiv(this.addr,e)}function I0(i,e){i.uniform4uiv(this.addr,e)}function N0(i,e,t){const n=this.cache,s=e.length,o=Da(t,s);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Vu,o[u])}function F0(i,e,t){const n=this.cache,s=e.length,o=Da(t,s);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Gu,o[u])}function O0(i,e,t){const n=this.cache,s=e.length,o=Da(t,s);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Wu,o[u])}function B0(i,e,t){const n=this.cache,s=e.length,o=Da(t,s);un(n,o)||(i.uniform1iv(this.addr,o),hn(n,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Hu,o[u])}function z0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return y0;case 35666:return b0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return U0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Pc(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const o=lo.exec(n),u=lo.lastIndex;let c=o[1];const f=o[2]==="]",p=o[3];if(f&&(c=c|0),p===void 0||p==="["&&u+2===s){Pc(t,p===void 0?new k0(c,i,e):new V0(c,i,e));break}else{let M=t.map[c];M===void 0&&(M=new H0(c),Pc(t,M)),t=M}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);G0(o,u,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const W0=37297;let X0=0;function q0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Uc=new wt;function $0(i){Ft._getMatrix(Uc,Ft.workingColorSpace,i);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(i)){case Ra:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+q0(i.getShaderSource(e),u)}else return s}function Y0(i,e){const t=$0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,e){let t;switch(e){case Kh:t="Linear";break;case Zh:t="Reinhard";break;case Jh:t="Cineon";break;case Qh:t="ACESFilmic";break;case tf:t="AgX";break;case nf:t="Neutral";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zs=new j;function K0(){Ft.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function J0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),u=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function ms(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(ev,nv)}const tv=new Map;function nv(i,e){let t=At[e];if(t===void 0){const n=tv.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(iv,rv)}function rv(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Oc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function sv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ov(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function lv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case jh:e="ENVMAP_BLENDING_ADD";break}return e}function cv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uv(i,e,t,n){const s=i.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=sv(t),p=av(t),v=ov(t),M=lv(t),S=cv(t),y=Z0(t),A=J0(o),T=s.createProgram();let x,g,k=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ms).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ms).join(`
`),g.length>0&&(g+=`
`)):(x=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),g=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+M:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?At.tonemapping_pars_fragment:"",t.toneMapping!==Gi?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),u=pl(u),u=Ic(u,t),u=Nc(u,t),c=pl(c),c=Ic(c,t),c=Nc(c,t),u=Fc(u),c=Fc(c),t.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const F=k+x+u,P=k+g+c,J=Lc(s,s.VERTEX_SHADER,F),O=Lc(s,s.FRAGMENT_SHADER,P);s.attachShader(T,J),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function W(G){if(i.debug.checkShaderErrors){const re=s.getProgramInfoLog(T).trim(),$=s.getShaderInfoLog(J).trim(),Q=s.getShaderInfoLog(O).trim();let de=!0,le=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,J,O);else{const ge=Dc(s,J,"vertex"),he=Dc(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+ge+`
`+he)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):($===""||Q==="")&&(le=!1);le&&(G.diagnostics={runnable:de,programLog:re,vertexShader:{log:$,prefix:x},fragmentShader:{log:Q,prefix:g}})}s.deleteShader(J),s.deleteShader(O),X=new Ma(s,T),N=Q0(s,T)}let X;this.getUniforms=function(){return X===void 0&&W(this),X};let N;this.getAttributes=function(){return N===void 0&&W(this),N};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,W0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=J,this.fragmentShader=O,this}let hv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dv(e),t.set(e,n)),n}}class dv{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}}function pv(i,e,t,n,s,o,u){const c=new Al,f=new fv,p=new Set,v=[],M=s.logarithmicDepthBuffer,S=s.vertexTextures;let y=s.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return p.add(N),N===0?"uv":`uv${N}`}function x(N,R,G,re,$){const Q=re.fog,de=$.geometry,le=N.isMeshStandardMaterial?re.environment:null,ge=(N.isMeshStandardMaterial?t:e).get(N.envMap||le),he=ge&&ge.mapping===Ca?ge.image.height:null,_e=A[N.type];N.precision!==null&&(y=s.getMaxPrecision(N.precision),y!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const De=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,qe=De!==void 0?De.length:0;let ce=0;de.morphAttributes.position!==void 0&&(ce=1),de.morphAttributes.normal!==void 0&&(ce=2),de.morphAttributes.color!==void 0&&(ce=3);let Xe,me,oe,Pe;if(_e){const Dt=ui[_e];Xe=Dt.vertexShader,me=Dt.fragmentShader}else Xe=N.vertexShader,me=N.fragmentShader,f.update(N),oe=f.getVertexShaderID(N),Pe=f.getFragmentShaderID(N);const Ue=i.getRenderTarget(),Qe=i.state.buffers.depth.getReversed(),Ve=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,Pt=!!N.map,St=!!N.matcap,lt=!!ge,Z=!!N.aoMap,Yt=!!N.lightMap,yt=!!N.bumpMap,Et=!!N.normalMap,tt=!!N.displacementMap,zt=!!N.emissiveMap,it=!!N.metalnessMap,V=!!N.roughnessMap,D=N.anisotropy>0,ae=N.clearcoat>0,we=N.dispersion>0,Ee=N.iridescence>0,Se=N.sheen>0,Je=N.transmission>0,Oe=D&&!!N.anisotropyMap,ze=ae&&!!N.clearcoatMap,gt=ae&&!!N.clearcoatNormalMap,Ae=ae&&!!N.clearcoatRoughnessMap,He=Ee&&!!N.iridescenceMap,nt=Ee&&!!N.iridescenceThicknessMap,Ie=Se&&!!N.sheenColorMap,Ge=Se&&!!N.sheenRoughnessMap,rt=!!N.specularMap,ht=!!N.specularColorMap,Lt=!!N.specularIntensityMap,te=Je&&!!N.transmissionMap,Ne=Je&&!!N.thicknessMap,ve=!!N.gradientMap,Me=!!N.alphaMap,_=N.alphaTest>0,ye=!!N.alphaHash,pt=!!N.extensions;let It=Gi;N.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(It=i.toneMapping);const Nt={shaderID:_e,shaderType:N.type,shaderName:N.name,vertexShader:Xe,fragmentShader:me,defines:N.defines,customVertexShaderID:oe,customFragmentShaderID:Pe,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&$.instanceColor!==null,instancingMorph:Ve&&$.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Kr,alphaToCoverage:!!N.alphaToCoverage,map:Pt,matcap:St,envMap:lt,envMapMode:lt&&ge.mapping,envMapCubeUVHeight:he,aoMap:Z,lightMap:Yt,bumpMap:yt,normalMap:Et,displacementMap:S&&tt,emissiveMap:zt,normalMapObjectSpace:Et&&N.normalMapType===of,normalMapTangentSpace:Et&&N.normalMapType===Cu,metalnessMap:it,roughnessMap:V,anisotropy:D,anisotropyMap:Oe,clearcoat:ae,clearcoatMap:ze,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ae,dispersion:we,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:nt,sheen:Se,sheenColorMap:Ie,sheenRoughnessMap:Ge,specularMap:rt,specularColorMap:ht,specularIntensityMap:Lt,transmission:Je,transmissionMap:te,thicknessMap:Ne,gradientMap:ve,opaque:N.transparent===!1&&N.blending===kr&&N.alphaToCoverage===!1,alphaMap:Me,alphaTest:_,alphaHash:ye,combine:N.combine,mapUv:Pt&&T(N.map.channel),aoMapUv:Z&&T(N.aoMap.channel),lightMapUv:Yt&&T(N.lightMap.channel),bumpMapUv:yt&&T(N.bumpMap.channel),normalMapUv:Et&&T(N.normalMap.channel),displacementMapUv:tt&&T(N.displacementMap.channel),emissiveMapUv:zt&&T(N.emissiveMap.channel),metalnessMapUv:it&&T(N.metalnessMap.channel),roughnessMapUv:V&&T(N.roughnessMap.channel),anisotropyMapUv:Oe&&T(N.anisotropyMap.channel),clearcoatMapUv:ze&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:gt&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(N.sheenRoughnessMap.channel),specularMapUv:rt&&T(N.specularMap.channel),specularColorMapUv:ht&&T(N.specularColorMap.channel),specularIntensityMapUv:Lt&&T(N.specularIntensityMap.channel),transmissionMapUv:te&&T(N.transmissionMap.channel),thicknessMapUv:Ne&&T(N.thicknessMap.channel),alphaMapUv:Me&&T(N.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Et||D),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!de.attributes.uv&&(Pt||Me),fog:!!Q,useFog:N.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:M,reverseDepthBuffer:Qe,skinning:$.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:qe,morphTextureStride:ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Pt&&N.map.isVideoTexture===!0&&Ft.getTransfer(N.map.colorSpace)===$t,decodeVideoTextureEmissive:zt&&N.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(N.emissiveMap.colorSpace)===$t,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ti,flipSided:N.side===Cn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:pt&&N.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&N.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Nt.vertexUv1s=p.has(1),Nt.vertexUv2s=p.has(2),Nt.vertexUv3s=p.has(3),p.clear(),Nt}function g(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const G in N.defines)R.push(G),R.push(N.defines[G]);return N.isRawShaderMaterial===!1&&(k(R,N),F(R,N),R.push(i.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function k(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function F(N,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),N.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),N.push(c.mask)}function P(N){const R=A[N.type];let G;if(R){const re=ui[R];G=Zf.clone(re.uniforms)}else G=N.uniforms;return G}function J(N,R){let G;for(let re=0,$=v.length;re<$;re++){const Q=v[re];if(Q.cacheKey===R){G=Q,++G.usedTimes;break}}return G===void 0&&(G=new uv(i,R,N,o),v.push(G)),G}function O(N){if(--N.usedTimes===0){const R=v.indexOf(N);v[R]=v[v.length-1],v.pop(),N.destroy()}}function W(N){f.remove(N)}function X(){f.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:P,acquireProgram:J,releaseProgram:O,releaseShaderCache:W,programs:v,dispose:X}}function mv(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function n(u){i.delete(u)}function s(u,c,f){i.get(u)[c]=f}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zc(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function u(M,S,y,A,T,x){let g=i[e];return g===void 0?(g={id:M.id,object:M,geometry:S,material:y,groupOrder:A,renderOrder:M.renderOrder,z:T,group:x},i[e]=g):(g.id=M.id,g.object=M,g.geometry=S,g.material=y,g.groupOrder=A,g.renderOrder=M.renderOrder,g.z=T,g.group=x),e++,g}function c(M,S,y,A,T,x){const g=u(M,S,y,A,T,x);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):t.push(g)}function f(M,S,y,A,T,x){const g=u(M,S,y,A,T,x);y.transmission>0?n.unshift(g):y.transparent===!0?s.unshift(g):t.unshift(g)}function p(M,S){t.length>1&&t.sort(M||vv),n.length>1&&n.sort(S||Bc),s.length>1&&s.sort(S||Bc)}function v(){for(let M=e,S=i.length;M<S;M++){const y=i[M];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:f,finish:v,sort:p}}function _v(){let i=new WeakMap;function e(n,s){const o=i.get(n);let u;return o===void 0?(u=new zc,i.set(n,[u])):s>=o.length?(u=new zc,o.push(u)):u=o[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ct};break;case"SpotLight":t={position:new j,direction:new j,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mv=0;function Sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yv(i){const e=new gv,t=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new j);const s=new j,o=new Zt,u=new Zt;function c(p){let v=0,M=0,S=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let y=0,A=0,T=0,x=0,g=0,k=0,F=0,P=0,J=0,O=0,W=0;p.sort(Sv);for(let N=0,R=p.length;N<R;N++){const G=p[N],re=G.color,$=G.intensity,Q=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=re.r*$,M+=re.g*$,S+=re.b*$;else if(G.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(G.sh.coefficients[le],$);W++}else if(G.isDirectionalLight){const le=e.get(G);if(le.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ge=G.shadow,he=t.get(G);he.shadowIntensity=ge.intensity,he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,n.directionalShadow[y]=he,n.directionalShadowMap[y]=de,n.directionalShadowMatrix[y]=G.shadow.matrix,k++}n.directional[y]=le,y++}else if(G.isSpotLight){const le=e.get(G);le.position.setFromMatrixPosition(G.matrixWorld),le.color.copy(re).multiplyScalar($),le.distance=Q,le.coneCos=Math.cos(G.angle),le.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),le.decay=G.decay,n.spot[T]=le;const ge=G.shadow;if(G.map&&(n.spotLightMap[J]=G.map,J++,ge.updateMatrices(G),G.castShadow&&O++),n.spotLightMatrix[T]=ge.matrix,G.castShadow){const he=t.get(G);he.shadowIntensity=ge.intensity,he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,n.spotShadow[T]=he,n.spotShadowMap[T]=de,P++}T++}else if(G.isRectAreaLight){const le=e.get(G);le.color.copy(re).multiplyScalar($),le.halfWidth.set(G.width*.5,0,0),le.halfHeight.set(0,G.height*.5,0),n.rectArea[x]=le,x++}else if(G.isPointLight){const le=e.get(G);if(le.color.copy(G.color).multiplyScalar(G.intensity),le.distance=G.distance,le.decay=G.decay,G.castShadow){const ge=G.shadow,he=t.get(G);he.shadowIntensity=ge.intensity,he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,he.shadowCameraNear=ge.camera.near,he.shadowCameraFar=ge.camera.far,n.pointShadow[A]=he,n.pointShadowMap[A]=de,n.pointShadowMatrix[A]=G.shadow.matrix,F++}n.point[A]=le,A++}else if(G.isHemisphereLight){const le=e.get(G);le.skyColor.copy(G.color).multiplyScalar($),le.groundColor.copy(G.groundColor).multiplyScalar($),n.hemi[g]=le,g++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=M,n.ambient[2]=S;const X=n.hash;(X.directionalLength!==y||X.pointLength!==A||X.spotLength!==T||X.rectAreaLength!==x||X.hemiLength!==g||X.numDirectionalShadows!==k||X.numPointShadows!==F||X.numSpotShadows!==P||X.numSpotMaps!==J||X.numLightProbes!==W)&&(n.directional.length=y,n.spot.length=T,n.rectArea.length=x,n.point.length=A,n.hemi.length=g,n.directionalShadow.length=k,n.directionalShadowMap.length=k,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=k,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=P+J-O,n.spotLightMap.length=J,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=W,X.directionalLength=y,X.pointLength=A,X.spotLength=T,X.rectAreaLength=x,X.hemiLength=g,X.numDirectionalShadows=k,X.numPointShadows=F,X.numSpotShadows=P,X.numSpotMaps=J,X.numLightProbes=W,n.version=Mv++)}function f(p,v){let M=0,S=0,y=0,A=0,T=0;const x=v.matrixWorldInverse;for(let g=0,k=p.length;g<k;g++){const F=p[g];if(F.isDirectionalLight){const P=n.directional[M];P.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),M++}else if(F.isSpotLight){const P=n.spot[y];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),y++}else if(F.isRectAreaLight){const P=n.rectArea[A];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(x),u.identity(),o.copy(F.matrixWorld),o.premultiply(x),u.extractRotation(o),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),A++}else if(F.isPointLight){const P=n.point[S];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(x),S++}else if(F.isHemisphereLight){const P=n.hemi[T];P.direction.setFromMatrixPosition(F.matrixWorld),P.direction.transformDirection(x),T++}}}return{setup:c,setupView:f,state:n}}function kc(i){const e=new yv(i),t=[],n=[];function s(v){p.camera=v,t.length=0,n.length=0}function o(v){t.push(v)}function u(v){n.push(v)}function c(){e.setup(t)}function f(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:u}}function bv(i){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new kc(i),e.set(s,[c])):o>=u.length?(c=new kc(i),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class wv extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
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
}`;function Cv(i,e,t){let n=new Cl;const s=new ut,o=new ut,u=new rn,c=new wv({depthPacking:af}),f=new Ev,p={},v=t.maxTextureSize,M={[Wi]:Cn,[Cn]:Wi,[ti]:ti},S=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Tv,fragmentShader:Av}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Wt;A.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _n(A,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let g=this.type;this.render=function(O,W,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const N=i.getRenderTarget(),R=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),re=i.state;re.setBlending(Hi),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const $=g!==bi&&this.type===bi,Q=g===bi&&this.type!==bi;for(let de=0,le=O.length;de<le;de++){const ge=O[de],he=ge.shadow;if(he===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;s.copy(he.mapSize);const _e=he.getFrameExtents();if(s.multiply(_e),o.copy(he.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(o.x=Math.floor(v/_e.x),s.x=o.x*_e.x,he.mapSize.x=o.x),s.y>v&&(o.y=Math.floor(v/_e.y),s.y=o.y*_e.y,he.mapSize.y=o.y)),he.map===null||$===!0||Q===!0){const qe=this.type!==bi?{minFilter:si,magFilter:si}:{};he.map!==null&&he.map.dispose(),he.map=new ur(s.x,s.y,qe),he.map.texture.name=ge.name+".shadowMap",he.camera.updateProjectionMatrix()}i.setRenderTarget(he.map),i.clear();const De=he.getViewportCount();for(let qe=0;qe<De;qe++){const ce=he.getViewport(qe);u.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),re.viewport(u),he.updateMatrices(ge,qe),n=he.getFrustum(),P(W,X,he.camera,ge,this.type)}he.isPointLightShadow!==!0&&this.type===bi&&k(he,X),he.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(N,R,G)};function k(O,W){const X=e.update(T);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ur(s.x,s.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(W,null,X,S,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(W,null,X,y,T,null)}function F(O,W,X,N){let R=null;const G=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)R=G;else if(R=X.isPointLight===!0?f:c,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0){const re=R.uuid,$=W.uuid;let Q=p[re];Q===void 0&&(Q={},p[re]=Q);let de=Q[$];de===void 0&&(de=R.clone(),Q[$]=de,W.addEventListener("dispose",J)),R=de}if(R.visible=W.visible,R.wireframe=W.wireframe,N===bi?R.side=W.shadowSide!==null?W.shadowSide:W.side:R.side=W.shadowSide!==null?W.shadowSide:M[W.side],R.alphaMap=W.alphaMap,R.alphaTest=W.alphaTest,R.map=W.map,R.clipShadows=W.clipShadows,R.clippingPlanes=W.clippingPlanes,R.clipIntersection=W.clipIntersection,R.displacementMap=W.displacementMap,R.displacementScale=W.displacementScale,R.displacementBias=W.displacementBias,R.wireframeLinewidth=W.wireframeLinewidth,R.linewidth=W.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=i.properties.get(R);re.light=X}return R}function P(O,W,X,N,R){if(O.visible===!1)return;if(O.layers.test(W.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===bi)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const $=e.update(O),Q=O.material;if(Array.isArray(Q)){const de=$.groups;for(let le=0,ge=de.length;le<ge;le++){const he=de[le],_e=Q[he.materialIndex];if(_e&&_e.visible){const De=F(O,_e,N,R);O.onBeforeShadow(i,O,W,X,$,De,he),i.renderBufferDirect(X,null,$,De,O,he),O.onAfterShadow(i,O,W,X,$,De,he)}}}else if(Q.visible){const de=F(O,Q,N,R);O.onBeforeShadow(i,O,W,X,$,de,null),i.renderBufferDirect(X,null,$,de,O,null),O.onAfterShadow(i,O,W,X,$,de,null)}}const re=O.children;for(let $=0,Q=re.length;$<Q;$++)P(re[$],W,X,N,R)}function J(O){O.target.removeEventListener("dispose",J);for(const X in p){const N=p[X],R=O.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const Rv={[Po]:Lo,[Uo]:No,[Do]:Fo,[Wr]:Io,[Lo]:Po,[No]:Uo,[Fo]:Do,[Io]:Wr};function Pv(i,e){function t(){let te=!1;const Ne=new rn;let ve=null;const Me=new rn(0,0,0,0);return{setMask:function(_){ve!==_&&!te&&(i.colorMask(_,_,_,_),ve=_)},setLocked:function(_){te=_},setClear:function(_,ye,pt,It,Nt){Nt===!0&&(_*=It,ye*=It,pt*=It),Ne.set(_,ye,pt,It),Me.equals(Ne)===!1&&(i.clearColor(_,ye,pt,It),Me.copy(Ne))},reset:function(){te=!1,ve=null,Me.set(-1,0,0,0)}}}function n(){let te=!1,Ne=!1,ve=null,Me=null,_=null;return{setReversed:function(ye){if(Ne!==ye){const pt=e.get("EXT_clip_control");Ne?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const It=_;_=null,this.setClear(It)}Ne=ye},getReversed:function(){return Ne},setTest:function(ye){ye?Ue(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(ye){ve!==ye&&!te&&(i.depthMask(ye),ve=ye)},setFunc:function(ye){if(Ne&&(ye=Rv[ye]),Me!==ye){switch(ye){case Po:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ye}},setLocked:function(ye){te=ye},setClear:function(ye){_!==ye&&(Ne&&(ye=1-ye),i.clearDepth(ye),_=ye)},reset:function(){te=!1,ve=null,Me=null,_=null,Ne=!1}}}function s(){let te=!1,Ne=null,ve=null,Me=null,_=null,ye=null,pt=null,It=null,Nt=null;return{setTest:function(Dt){te||(Dt?Ue(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(Dt){Ne!==Dt&&!te&&(i.stencilMask(Dt),Ne=Dt)},setFunc:function(Dt,Y,$e){(ve!==Dt||Me!==Y||_!==$e)&&(i.stencilFunc(Dt,Y,$e),ve=Dt,Me=Y,_=$e)},setOp:function(Dt,Y,$e){(ye!==Dt||pt!==Y||It!==$e)&&(i.stencilOp(Dt,Y,$e),ye=Dt,pt=Y,It=$e)},setLocked:function(Dt){te=Dt},setClear:function(Dt){Nt!==Dt&&(i.clearStencil(Dt),Nt=Dt)},reset:function(){te=!1,Ne=null,ve=null,Me=null,_=null,ye=null,pt=null,It=null,Nt=null}}}const o=new t,u=new n,c=new s,f=new WeakMap,p=new WeakMap;let v={},M={},S=new WeakMap,y=[],A=null,T=!1,x=null,g=null,k=null,F=null,P=null,J=null,O=null,W=new Ct(0,0,0),X=0,N=!1,R=null,G=null,re=null,$=null,Q=null;const de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ge=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(he)[1]),le=ge>=1):he.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),le=ge>=2);let _e=null,De={};const qe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Xe=new rn().fromArray(qe),me=new rn().fromArray(ce);function oe(te,Ne,ve,Me){const _=new Uint8Array(4),ye=i.createTexture();i.bindTexture(te,ye),i.texParameteri(te,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(te,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<ve;pt++)te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,_):i.texImage2D(Ne+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_);return ye}const Pe={};Pe[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ue(i.DEPTH_TEST),u.setFunc(Wr),yt(!1),Et(Gl),Ue(i.CULL_FACE),Z(Hi);function Ue(te){v[te]!==!0&&(i.enable(te),v[te]=!0)}function Qe(te){v[te]!==!1&&(i.disable(te),v[te]=!1)}function Ve(te,Ne){return M[te]!==Ne?(i.bindFramebuffer(te,Ne),M[te]=Ne,te===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=Ne),te===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ze(te,Ne){let ve=y,Me=!1;if(te){ve=S.get(Ne),ve===void 0&&(ve=[],S.set(Ne,ve));const _=te.textures;if(ve.length!==_.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,pt=_.length;ye<pt;ye++)ve[ye]=i.COLOR_ATTACHMENT0+ye;ve.length=_.length,Me=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ve)}function Pt(te){return A!==te?(i.useProgram(te),A=te,!0):!1}const St={[rr]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};St[Dh]=i.MIN,St[Ih]=i.MAX;const lt={[Nh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[Ro]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[$h]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(te,Ne,ve,Me,_,ye,pt,It,Nt,Dt){if(te===Hi){T===!0&&(Qe(i.BLEND),T=!1);return}if(T===!1&&(Ue(i.BLEND),T=!0),te!==Ph){if(te!==x||Dt!==N){if((g!==rr||P!==rr)&&(i.blendEquation(i.FUNC_ADD),g=rr,P=rr),Dt)switch(te){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}k=null,F=null,J=null,O=null,W.set(0,0,0),X=0,x=te,N=Dt}return}_=_||Ne,ye=ye||ve,pt=pt||Me,(Ne!==g||_!==P)&&(i.blendEquationSeparate(St[Ne],St[_]),g=Ne,P=_),(ve!==k||Me!==F||ye!==J||pt!==O)&&(i.blendFuncSeparate(lt[ve],lt[Me],lt[ye],lt[pt]),k=ve,F=Me,J=ye,O=pt),(It.equals(W)===!1||Nt!==X)&&(i.blendColor(It.r,It.g,It.b,Nt),W.copy(It),X=Nt),x=te,N=!1}function Yt(te,Ne){te.side===ti?Qe(i.CULL_FACE):Ue(i.CULL_FACE);let ve=te.side===Cn;Ne&&(ve=!ve),yt(ve),te.blending===kr&&te.transparent===!1?Z(Hi):Z(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),u.setFunc(te.depthFunc),u.setTest(te.depthTest),u.setMask(te.depthWrite),o.setMask(te.colorWrite);const Me=te.stencilWrite;c.setTest(Me),Me&&(c.setMask(te.stencilWriteMask),c.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),c.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),zt(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(te){R!==te&&(te?i.frontFace(i.CW):i.frontFace(i.CCW),R=te)}function Et(te){te!==Ah?(Ue(i.CULL_FACE),te!==G&&(te===Gl?i.cullFace(i.BACK):te===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),G=te}function tt(te){te!==re&&(le&&i.lineWidth(te),re=te)}function zt(te,Ne,ve){te?(Ue(i.POLYGON_OFFSET_FILL),($!==Ne||Q!==ve)&&(i.polygonOffset(Ne,ve),$=Ne,Q=ve)):Qe(i.POLYGON_OFFSET_FILL)}function it(te){te?Ue(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function V(te){te===void 0&&(te=i.TEXTURE0+de-1),_e!==te&&(i.activeTexture(te),_e=te)}function D(te,Ne,ve){ve===void 0&&(_e===null?ve=i.TEXTURE0+de-1:ve=_e);let Me=De[ve];Me===void 0&&(Me={type:void 0,texture:void 0},De[ve]=Me),(Me.type!==te||Me.texture!==Ne)&&(_e!==ve&&(i.activeTexture(ve),_e=ve),i.bindTexture(te,Ne||Pe[te]),Me.type=te,Me.texture=Ne)}function ae(){const te=De[_e];te!==void 0&&te.type!==void 0&&(i.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Je(){try{i.texSubImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ie(te){Xe.equals(te)===!1&&(i.scissor(te.x,te.y,te.z,te.w),Xe.copy(te))}function Ge(te){me.equals(te)===!1&&(i.viewport(te.x,te.y,te.z,te.w),me.copy(te))}function rt(te,Ne){let ve=p.get(Ne);ve===void 0&&(ve=new WeakMap,p.set(Ne,ve));let Me=ve.get(te);Me===void 0&&(Me=i.getUniformBlockIndex(Ne,te.name),ve.set(te,Me))}function ht(te,Ne){const Me=p.get(Ne).get(te);f.get(Ne)!==Me&&(i.uniformBlockBinding(Ne,Me,te.__bindingPointIndex),f.set(Ne,Me))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},_e=null,De={},M={},S=new WeakMap,y=[],A=null,T=!1,x=null,g=null,k=null,F=null,P=null,J=null,O=null,W=new Ct(0,0,0),X=0,N=!1,R=null,G=null,re=null,$=null,Q=null,Xe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:Ue,disable:Qe,bindFramebuffer:Ve,drawBuffers:Ze,useProgram:Pt,setBlending:Z,setMaterial:Yt,setFlipSided:yt,setCullFace:Et,setLineWidth:tt,setPolygonOffset:zt,setScissorTest:it,activeTexture:V,bindTexture:D,unbindTexture:ae,compressedTexImage2D:we,compressedTexImage3D:Ee,texImage2D:He,texImage3D:nt,updateUBOMapping:rt,uniformBlockBinding:ht,texStorage2D:gt,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Je,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ze,scissor:Ie,viewport:Ge,reset:Lt}}function Vc(i,e,t,n){const s=Lv(n);switch(t){case Su:return i*e;case bu:return i*e;case wu:return i*e*2;case Eu:return i*e/s.components*s.byteLength;case bl:return i*e/s.components*s.byteLength;case Tu:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case yu:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case El:return i*e*4/s.components*s.byteLength;case ma:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case Go:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case ll:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lv(i){switch(i){case Ri:case gu:return{byteLength:1,components:1};case gs:case xu:case Ss:return{byteLength:2,components:1};case Sl:case yl:return{byteLength:2,components:4};case cr:case Ml:case Ei:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uv(i,e,t,n,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,v=new WeakMap;let M;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(V,D){return y?new OffscreenCanvas(V,D):wa("canvas")}function T(V,D,ae){let we=1;const Ee=it(V);if((Ee.width>ae||Ee.height>ae)&&(we=ae/Math.max(Ee.width,Ee.height)),we<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const Se=Math.floor(we*Ee.width),Je=Math.floor(we*Ee.height);M===void 0&&(M=A(Se,Je));const Oe=D?A(Se,Je):M;return Oe.width=Se,Oe.height=Je,Oe.getContext("2d").drawImage(V,0,0,Se,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Se+"x"+Je+")."),Oe}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),V;return V}function x(V){return V.generateMipmaps}function g(V){i.generateMipmap(V)}function k(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(V,D,ae,we,Ee=!1){if(V!==null){if(i[V]!==void 0)return i[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Se=D;if(D===i.RED&&(ae===i.FLOAT&&(Se=i.R32F),ae===i.HALF_FLOAT&&(Se=i.R16F),ae===i.UNSIGNED_BYTE&&(Se=i.R8)),D===i.RED_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Se=i.R8UI),ae===i.UNSIGNED_SHORT&&(Se=i.R16UI),ae===i.UNSIGNED_INT&&(Se=i.R32UI),ae===i.BYTE&&(Se=i.R8I),ae===i.SHORT&&(Se=i.R16I),ae===i.INT&&(Se=i.R32I)),D===i.RG&&(ae===i.FLOAT&&(Se=i.RG32F),ae===i.HALF_FLOAT&&(Se=i.RG16F),ae===i.UNSIGNED_BYTE&&(Se=i.RG8)),D===i.RG_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Se=i.RG8UI),ae===i.UNSIGNED_SHORT&&(Se=i.RG16UI),ae===i.UNSIGNED_INT&&(Se=i.RG32UI),ae===i.BYTE&&(Se=i.RG8I),ae===i.SHORT&&(Se=i.RG16I),ae===i.INT&&(Se=i.RG32I)),D===i.RGB_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Se=i.RGB8UI),ae===i.UNSIGNED_SHORT&&(Se=i.RGB16UI),ae===i.UNSIGNED_INT&&(Se=i.RGB32UI),ae===i.BYTE&&(Se=i.RGB8I),ae===i.SHORT&&(Se=i.RGB16I),ae===i.INT&&(Se=i.RGB32I)),D===i.RGBA_INTEGER&&(ae===i.UNSIGNED_BYTE&&(Se=i.RGBA8UI),ae===i.UNSIGNED_SHORT&&(Se=i.RGBA16UI),ae===i.UNSIGNED_INT&&(Se=i.RGBA32UI),ae===i.BYTE&&(Se=i.RGBA8I),ae===i.SHORT&&(Se=i.RGBA16I),ae===i.INT&&(Se=i.RGBA32I)),D===i.RGB&&ae===i.UNSIGNED_INT_5_9_9_9_REV&&(Se=i.RGB9_E5),D===i.RGBA){const Je=Ee?Ra:Ft.getTransfer(we);ae===i.FLOAT&&(Se=i.RGBA32F),ae===i.HALF_FLOAT&&(Se=i.RGBA16F),ae===i.UNSIGNED_BYTE&&(Se=Je===$t?i.SRGB8_ALPHA8:i.RGBA8),ae===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),ae===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function P(V,D){let ae;return V?D===null||D===cr||D===$r?ae=i.DEPTH24_STENCIL8:D===Ei?ae=i.DEPTH32F_STENCIL8:D===gs&&(ae=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===cr||D===$r?ae=i.DEPTH_COMPONENT24:D===Ei?ae=i.DEPTH_COMPONENT32F:D===gs&&(ae=i.DEPTH_COMPONENT16),ae}function J(V,D){return x(V)===!0||V.isFramebufferTexture&&V.minFilter!==si&&V.minFilter!==Yn?Math.log2(Math.max(D.width,D.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?D.mipmaps.length:1}function O(V){const D=V.target;D.removeEventListener("dispose",O),X(D),D.isVideoTexture&&v.delete(D)}function W(V){const D=V.target;D.removeEventListener("dispose",W),R(D)}function X(V){const D=n.get(V);if(D.__webglInit===void 0)return;const ae=V.source,we=S.get(ae);if(we){const Ee=we[D.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&N(V),Object.keys(we).length===0&&S.delete(ae)}n.remove(V)}function N(V){const D=n.get(V);i.deleteTexture(D.__webglTexture);const ae=V.source,we=S.get(ae);delete we[D.__cacheKey],u.memory.textures--}function R(V){const D=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let we=0;we<6;we++){if(Array.isArray(D.__webglFramebuffer[we]))for(let Ee=0;Ee<D.__webglFramebuffer[we].length;Ee++)i.deleteFramebuffer(D.__webglFramebuffer[we][Ee]);else i.deleteFramebuffer(D.__webglFramebuffer[we]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[we])}else{if(Array.isArray(D.__webglFramebuffer))for(let we=0;we<D.__webglFramebuffer.length;we++)i.deleteFramebuffer(D.__webglFramebuffer[we]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let we=0;we<D.__webglColorRenderbuffer.length;we++)D.__webglColorRenderbuffer[we]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[we]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const ae=V.textures;for(let we=0,Ee=ae.length;we<Ee;we++){const Se=n.get(ae[we]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),u.memory.textures--),n.remove(ae[we])}n.remove(V)}let G=0;function re(){G=0}function $(){const V=G;return V>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+s.maxTextures),G+=1,V}function Q(V){const D=[];return D.push(V.wrapS),D.push(V.wrapT),D.push(V.wrapR||0),D.push(V.magFilter),D.push(V.minFilter),D.push(V.anisotropy),D.push(V.internalFormat),D.push(V.format),D.push(V.type),D.push(V.generateMipmaps),D.push(V.premultiplyAlpha),D.push(V.flipY),D.push(V.unpackAlignment),D.push(V.colorSpace),D.join()}function de(V,D){const ae=n.get(V);if(V.isVideoTexture&&tt(V),V.isRenderTargetTexture===!1&&V.version>0&&ae.__version!==V.version){const we=V.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(ae,V,D);return}}t.bindTexture(i.TEXTURE_2D,ae.__webglTexture,i.TEXTURE0+D)}function le(V,D){const ae=n.get(V);if(V.version>0&&ae.__version!==V.version){me(ae,V,D);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ae.__webglTexture,i.TEXTURE0+D)}function ge(V,D){const ae=n.get(V);if(V.version>0&&ae.__version!==V.version){me(ae,V,D);return}t.bindTexture(i.TEXTURE_3D,ae.__webglTexture,i.TEXTURE0+D)}function he(V,D){const ae=n.get(V);if(V.version>0&&ae.__version!==V.version){oe(ae,V,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture,i.TEXTURE0+D)}const _e={[zo]:i.REPEAT,[or]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},De={[si]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},qe={[lf]:i.NEVER,[pf]:i.ALWAYS,[cf]:i.LESS,[Ru]:i.LEQUAL,[uf]:i.EQUAL,[df]:i.GEQUAL,[hf]:i.GREATER,[ff]:i.NOTEQUAL};function ce(V,D){if(D.type===Ei&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Yn||D.magFilter===Fa||D.magFilter===Ls||D.magFilter===lr||D.minFilter===Yn||D.minFilter===Fa||D.minFilter===Ls||D.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,_e[D.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,_e[D.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,_e[D.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,De[D.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,De[D.minFilter]),D.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,qe[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===si||D.minFilter!==Ls&&D.minFilter!==lr||D.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");i.texParameterf(V,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function Xe(V,D){let ae=!1;V.__webglInit===void 0&&(V.__webglInit=!0,D.addEventListener("dispose",O));const we=D.source;let Ee=S.get(we);Ee===void 0&&(Ee={},S.set(we,Ee));const Se=Q(D);if(Se!==V.__cacheKey){Ee[Se]===void 0&&(Ee[Se]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Ee[Se].usedTimes++;const Je=Ee[V.__cacheKey];Je!==void 0&&(Ee[V.__cacheKey].usedTimes--,Je.usedTimes===0&&N(D)),V.__cacheKey=Se,V.__webglTexture=Ee[Se].texture}return ae}function me(V,D,ae){let we=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(we=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(we=i.TEXTURE_3D);const Ee=Xe(V,D),Se=D.source;t.bindTexture(we,V.__webglTexture,i.TEXTURE0+ae);const Je=n.get(Se);if(Se.version!==Je.__version||Ee===!0){t.activeTexture(i.TEXTURE0+ae);const Oe=Ft.getPrimaries(Ft.workingColorSpace),ze=D.colorSpace===Bi?null:Ft.getPrimaries(D.colorSpace),gt=D.colorSpace===Bi||Oe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ae=T(D.image,!1,s.maxTextureSize);Ae=zt(D,Ae);const He=o.convert(D.format,D.colorSpace),nt=o.convert(D.type);let Ie=F(D.internalFormat,He,nt,D.colorSpace,D.isVideoTexture);ce(we,D);let Ge;const rt=D.mipmaps,ht=D.isVideoTexture!==!0,Lt=Je.__version===void 0||Ee===!0,te=Se.dataReady,Ne=J(D,Ae);if(D.isDepthTexture)Ie=P(D.format===Yr,D.type),Lt&&(ht?t.texStorage2D(i.TEXTURE_2D,1,Ie,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,He,nt,null));else if(D.isDataTexture)if(rt.length>0){ht&&Lt&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,rt[0].width,rt[0].height);for(let ve=0,Me=rt.length;ve<Me;ve++)Ge=rt[ve],ht?te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,He,nt,Ge.data):t.texImage2D(i.TEXTURE_2D,ve,Ie,Ge.width,Ge.height,0,He,nt,Ge.data);D.generateMipmaps=!1}else ht?(Lt&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,Ae.width,Ae.height),te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,nt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,He,nt,Ae.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){ht&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Ie,rt[0].width,rt[0].height,Ae.depth);for(let ve=0,Me=rt.length;ve<Me;ve++)if(Ge=rt[ve],D.format!==ri)if(He!==null)if(ht){if(te)if(D.layerUpdates.size>0){const _=Vc(Ge.width,Ge.height,D.format,D.type);for(const ye of D.layerUpdates){const pt=Ge.data.subarray(ye*_/Ge.data.BYTES_PER_ELEMENT,(ye+1)*_/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,ye,Ge.width,Ge.height,1,He,pt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ge.width,Ge.height,Ae.depth,He,Ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ie,Ge.width,Ge.height,Ae.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ge.width,Ge.height,Ae.depth,He,nt,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ie,Ge.width,Ge.height,Ae.depth,0,He,nt,Ge.data)}else{ht&&Lt&&t.texStorage2D(i.TEXTURE_2D,Ne,Ie,rt[0].width,rt[0].height);for(let ve=0,Me=rt.length;ve<Me;ve++)Ge=rt[ve],D.format!==ri?He!==null?ht?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,He,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ie,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ge.width,Ge.height,He,nt,Ge.data):t.texImage2D(i.TEXTURE_2D,ve,Ie,Ge.width,Ge.height,0,He,nt,Ge.data)}else if(D.isDataArrayTexture)if(ht){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Ie,Ae.width,Ae.height,Ae.depth),te)if(D.layerUpdates.size>0){const ve=Vc(Ae.width,Ae.height,D.format,D.type);for(const Me of D.layerUpdates){const _=Ae.data.subarray(Me*ve/Ae.data.BYTES_PER_ELEMENT,(Me+1)*ve/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,Ae.width,Ae.height,1,He,nt,_)}D.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,nt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,Ae.width,Ae.height,Ae.depth,0,He,nt,Ae.data);else if(D.isData3DTexture)ht?(Lt&&t.texStorage3D(i.TEXTURE_3D,Ne,Ie,Ae.width,Ae.height,Ae.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,nt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,Ae.width,Ae.height,Ae.depth,0,He,nt,Ae.data);else if(D.isFramebufferTexture){if(Lt)if(ht)t.texStorage2D(i.TEXTURE_2D,Ne,Ie,Ae.width,Ae.height);else{let ve=Ae.width,Me=Ae.height;for(let _=0;_<Ne;_++)t.texImage2D(i.TEXTURE_2D,_,Ie,ve,Me,0,He,nt,null),ve>>=1,Me>>=1}}else if(rt.length>0){if(ht&&Lt){const ve=it(rt[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Ie,ve.width,ve.height)}for(let ve=0,Me=rt.length;ve<Me;ve++)Ge=rt[ve],ht?te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,He,nt,Ge):t.texImage2D(i.TEXTURE_2D,ve,Ie,He,nt,Ge);D.generateMipmaps=!1}else if(ht){if(Lt){const ve=it(Ae);t.texStorage2D(i.TEXTURE_2D,Ne,Ie,ve.width,ve.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,nt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,Ie,He,nt,Ae);x(D)&&g(we),Je.__version=Se.version,D.onUpdate&&D.onUpdate(D)}V.__version=D.version}function oe(V,D,ae){if(D.image.length!==6)return;const we=Xe(V,D),Ee=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+ae);const Se=n.get(Ee);if(Ee.version!==Se.__version||we===!0){t.activeTexture(i.TEXTURE0+ae);const Je=Ft.getPrimaries(Ft.workingColorSpace),Oe=D.colorSpace===Bi?null:Ft.getPrimaries(D.colorSpace),ze=D.colorSpace===Bi||Je===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const gt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ae=D.image[0]&&D.image[0].isDataTexture,He=[];for(let Me=0;Me<6;Me++)!gt&&!Ae?He[Me]=T(D.image[Me],!0,s.maxCubemapSize):He[Me]=Ae?D.image[Me].image:D.image[Me],He[Me]=zt(D,He[Me]);const nt=He[0],Ie=o.convert(D.format,D.colorSpace),Ge=o.convert(D.type),rt=F(D.internalFormat,Ie,Ge,D.colorSpace),ht=D.isVideoTexture!==!0,Lt=Se.__version===void 0||we===!0,te=Ee.dataReady;let Ne=J(D,nt);ce(i.TEXTURE_CUBE_MAP,D);let ve;if(gt){ht&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,rt,nt.width,nt.height);for(let Me=0;Me<6;Me++){ve=He[Me].mipmaps;for(let _=0;_<ve.length;_++){const ye=ve[_];D.format!==ri?Ie!==null?ht?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_,0,0,ye.width,ye.height,Ie,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_,rt,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_,0,0,ye.width,ye.height,Ie,Ge,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_,rt,ye.width,ye.height,0,Ie,Ge,ye.data)}}}else{if(ve=D.mipmaps,ht&&Lt){ve.length>0&&Ne++;const Me=it(He[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,rt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ae){ht?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,He[Me].width,He[Me].height,Ie,Ge,He[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,He[Me].width,He[Me].height,0,Ie,Ge,He[Me].data);for(let _=0;_<ve.length;_++){const pt=ve[_].image[Me].image;ht?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_+1,0,0,pt.width,pt.height,Ie,Ge,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_+1,rt,pt.width,pt.height,0,Ie,Ge,pt.data)}}else{ht?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ie,Ge,He[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Ie,Ge,He[Me]);for(let _=0;_<ve.length;_++){const ye=ve[_];ht?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_+1,0,0,Ie,Ge,ye.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_+1,rt,Ie,Ge,ye.image[Me])}}}x(D)&&g(i.TEXTURE_CUBE_MAP),Se.__version=Ee.version,D.onUpdate&&D.onUpdate(D)}V.__version=D.version}function Pe(V,D,ae,we,Ee,Se){const Je=o.convert(ae.format,ae.colorSpace),Oe=o.convert(ae.type),ze=F(ae.internalFormat,Je,Oe,ae.colorSpace),gt=n.get(D),Ae=n.get(ae);if(Ae.__renderTarget=D,!gt.__hasExternalTextures){const He=Math.max(1,D.width>>Se),nt=Math.max(1,D.height>>Se);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Se,ze,He,nt,D.depth,0,Je,Oe,null):t.texImage2D(Ee,Se,ze,He,nt,0,Je,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,V),Et(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,Ee,Ae.__webglTexture,0,yt(D)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,we,Ee,Ae.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(V,D,ae){if(i.bindRenderbuffer(i.RENDERBUFFER,V),D.depthBuffer){const we=D.depthTexture,Ee=we&&we.isDepthTexture?we.type:null,Se=P(D.stencilBuffer,Ee),Je=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=yt(D);Et(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Se,D.width,D.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Se,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,Se,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Je,i.RENDERBUFFER,V)}else{const we=D.textures;for(let Ee=0;Ee<we.length;Ee++){const Se=we[Ee],Je=o.convert(Se.format,Se.colorSpace),Oe=o.convert(Se.type),ze=F(Se.internalFormat,Je,Oe,Se.colorSpace),gt=yt(D);ae&&Et(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,ze,D.width,D.height):Et(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,ze,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ze,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(V,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,V),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=n.get(D.depthTexture);we.__renderTarget=D,(!we.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),de(D.depthTexture,0);const Ee=we.__webglTexture,Se=yt(D);if(D.depthTexture.format===Vr)Et(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0);else if(D.depthTexture.format===Yr)Et(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ve(V){const D=n.get(V),ae=V.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==V.depthTexture){const we=V.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),we){const Ee=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,we.removeEventListener("dispose",Ee)};we.addEventListener("dispose",Ee),D.__depthDisposeCallback=Ee}D.__boundDepthTexture=we}if(V.depthTexture&&!D.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Qe(D.__webglFramebuffer,V)}else if(ae){D.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[we]),D.__webglDepthbuffer[we]===void 0)D.__webglDepthbuffer[we]=i.createRenderbuffer(),Ue(D.__webglDepthbuffer[we],V,!1);else{const Ee=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=D.__webglDepthbuffer[we];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,Se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),Ue(D.__webglDepthbuffer,V,!1);else{const we=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,Ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(V,D,ae){const we=n.get(V);D!==void 0&&Pe(we.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ae!==void 0&&Ve(V)}function Pt(V){const D=V.texture,ae=n.get(V),we=n.get(D);V.addEventListener("dispose",W);const Ee=V.textures,Se=V.isWebGLCubeRenderTarget===!0,Je=Ee.length>1;if(Je||(we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture()),we.__version=D.version,u.memory.textures++),Se){ae.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(D.mipmaps&&D.mipmaps.length>0){ae.__webglFramebuffer[Oe]=[];for(let ze=0;ze<D.mipmaps.length;ze++)ae.__webglFramebuffer[Oe][ze]=i.createFramebuffer()}else ae.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Oe=0;Oe<D.mipmaps.length;Oe++)ae.__webglFramebuffer[Oe]=i.createFramebuffer()}else ae.__webglFramebuffer=i.createFramebuffer();if(Je)for(let Oe=0,ze=Ee.length;Oe<ze;Oe++){const gt=n.get(Ee[Oe]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),u.memory.textures++)}if(V.samples>0&&Et(V)===!1){ae.__webglMultisampledFramebuffer=i.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Ee.length;Oe++){const ze=Ee[Oe];ae.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ae.__webglColorRenderbuffer[Oe]);const gt=o.convert(ze.format,ze.colorSpace),Ae=o.convert(ze.type),He=F(ze.internalFormat,gt,Ae,ze.colorSpace,V.isXRRenderTarget===!0),nt=yt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,He,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(ae.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(ae.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,we.__webglTexture),ce(i.TEXTURE_CUBE_MAP,D);for(let Oe=0;Oe<6;Oe++)if(D.mipmaps&&D.mipmaps.length>0)for(let ze=0;ze<D.mipmaps.length;ze++)Pe(ae.__webglFramebuffer[Oe][ze],V,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ze);else Pe(ae.__webglFramebuffer[Oe],V,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);x(D)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Oe=0,ze=Ee.length;Oe<ze;Oe++){const gt=Ee[Oe],Ae=n.get(gt);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),ce(i.TEXTURE_2D,gt),Pe(ae.__webglFramebuffer,V,gt,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),x(gt)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Oe=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,we.__webglTexture),ce(Oe,D),D.mipmaps&&D.mipmaps.length>0)for(let ze=0;ze<D.mipmaps.length;ze++)Pe(ae.__webglFramebuffer[ze],V,D,i.COLOR_ATTACHMENT0,Oe,ze);else Pe(ae.__webglFramebuffer,V,D,i.COLOR_ATTACHMENT0,Oe,0);x(D)&&g(Oe),t.unbindTexture()}V.depthBuffer&&Ve(V)}function St(V){const D=V.textures;for(let ae=0,we=D.length;ae<we;ae++){const Ee=D[ae];if(x(Ee)){const Se=k(V),Je=n.get(Ee).__webglTexture;t.bindTexture(Se,Je),g(Se),t.unbindTexture()}}}const lt=[],Z=[];function Yt(V){if(V.samples>0){if(Et(V)===!1){const D=V.textures,ae=V.width,we=V.height;let Ee=i.COLOR_BUFFER_BIT;const Se=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Je=n.get(V),Oe=D.length>1;if(Oe)for(let ze=0;ze<D.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let ze=0;ze<D.length;ze++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Je.__webglColorRenderbuffer[ze]);const gt=n.get(D[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,ae,we,0,0,ae,we,Ee,i.NEAREST),f===!0&&(lt.length=0,Z.length=0,lt.push(i.COLOR_ATTACHMENT0+ze),V.depthBuffer&&V.resolveDepthBuffer===!1&&(lt.push(Se),Z.push(Se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let ze=0;ze<D.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Je.__webglColorRenderbuffer[ze]);const gt=n.get(D[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,gt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&f){const D=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function yt(V){return Math.min(s.maxSamples,V.samples)}function Et(V){const D=n.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function tt(V){const D=u.render.frame;v.get(V)!==D&&(v.set(V,D),V.update())}function zt(V,D){const ae=V.colorSpace,we=V.format,Ee=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ae!==Kr&&ae!==Bi&&(Ft.getTransfer(ae)===$t?(we!==ri||Ee!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),D}function it(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(p.width=V.naturalWidth||V.width,p.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(p.width=V.displayWidth,p.height=V.displayHeight):(p.width=V.width,p.height=V.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=re,this.setTexture2D=de,this.setTexture2DArray=le,this.setTexture3D=ge,this.setTextureCube=he,this.rebindTextures=Ze,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Et}function Dv(i,e){function t(n,s=Bi){let o;const u=Ft.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.BYTE;if(n===xu)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===cr)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===yu)return i.RGB;if(n===ri)return i.RGBA;if(n===bu)return i.LUMINANCE;if(n===wu)return i.LUMINANCE_ALPHA;if(n===Vr)return i.DEPTH_COMPONENT;if(n===Yr)return i.DEPTH_STENCIL;if(n===Eu)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===ma||n===va||n===_a||n===ga)if(u===$t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Ho||n===Go||n===Wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Vo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===$o)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xo||n===qo)return u===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===$o)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===jo||n===Ko||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Yo)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return u===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ll||n===cl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===xa)return u===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===ul||n===hl||n===fl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Iv extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yn extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nv={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,u=null;const c=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,n),g=this._getHandJoint(p,T);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const v=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],S=v.position.distanceTo(M.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new An,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:Fv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zv extends fr{constructor(e,t){super();const n=this;let s=null,o=1,u=null,c="local-floor",f=1,p=null,v=null,M=null,S=null,y=null,A=null;const T=new Bv,x=t.getContextAttributes();let g=null,k=null;const F=[],P=[],J=new ut;let O=null;const W=new Xn;W.viewport=new rn;const X=new Xn;X.viewport=new rn;const N=[W,X],R=new Iv;let G=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let oe=F[me];return oe===void 0&&(oe=new co,F[me]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(me){let oe=F[me];return oe===void 0&&(oe=new co,F[me]=oe),oe.getGripSpace()},this.getHand=function(me){let oe=F[me];return oe===void 0&&(oe=new co,F[me]=oe),oe.getHandSpace()};function $(me){const oe=P.indexOf(me.inputSource);if(oe===-1)return;const Pe=F[oe];Pe!==void 0&&(Pe.update(me.inputSource,me.frame,p||u),Pe.dispatchEvent({type:me.type,data:me.inputSource}))}function Q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",de);for(let me=0;me<F.length;me++){const oe=P[me];oe!==null&&(P[me]=null,F[me].disconnect(oe))}G=null,re=null,T.reset(),e.setRenderTarget(g),y=null,S=null,M=null,s=null,k=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(J.width,J.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){o=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){c=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(me){p=me},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return M},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(me){if(s=me,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(J),s.renderState.layers===void 0){const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),k=new ur(y.framebufferWidth,y.framebufferHeight,{format:ri,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,Pe=null,Ue=null;x.depth&&(Ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?Yr:Vr,Pe=x.stencil?$r:cr);const Qe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:o};M=new XRWebGLBinding(s,t),S=M.createProjectionLayer(Qe),s.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),k=new ur(S.textureWidth,S.textureHeight,{format:ri,type:Ri,depthTexture:new ku(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await s.requestReferenceSpace(c),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(me){for(let oe=0;oe<me.removed.length;oe++){const Pe=me.removed[oe],Ue=P.indexOf(Pe);Ue>=0&&(P[Ue]=null,F[Ue].disconnect(Pe))}for(let oe=0;oe<me.added.length;oe++){const Pe=me.added[oe];let Ue=P.indexOf(Pe);if(Ue===-1){for(let Ve=0;Ve<F.length;Ve++)if(Ve>=P.length){P.push(Pe),Ue=Ve;break}else if(P[Ve]===null){P[Ve]=Pe,Ue=Ve;break}if(Ue===-1)break}const Qe=F[Ue];Qe&&Qe.connect(Pe)}}const le=new j,ge=new j;function he(me,oe,Pe){le.setFromMatrixPosition(oe.matrixWorld),ge.setFromMatrixPosition(Pe.matrixWorld);const Ue=le.distanceTo(ge),Qe=oe.projectionMatrix.elements,Ve=Pe.projectionMatrix.elements,Ze=Qe[14]/(Qe[10]-1),Pt=Qe[14]/(Qe[10]+1),St=(Qe[9]+1)/Qe[5],lt=(Qe[9]-1)/Qe[5],Z=(Qe[8]-1)/Qe[0],Yt=(Ve[8]+1)/Ve[0],yt=Ze*Z,Et=Ze*Yt,tt=Ue/(-Z+Yt),zt=tt*-Z;if(oe.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(zt),me.translateZ(tt),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Qe[10]===-1)me.projectionMatrix.copy(oe.projectionMatrix),me.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const it=Ze+tt,V=Pt+tt,D=yt-zt,ae=Et+(Ue-zt),we=St*Pt/V*it,Ee=lt*Pt/V*it;me.projectionMatrix.makePerspective(D,ae,we,Ee,it,V),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function _e(me,oe){oe===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(oe.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(s===null)return;let oe=me.near,Pe=me.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(Pe=T.depthFar)),R.near=X.near=W.near=oe,R.far=X.far=W.far=Pe,(G!==R.near||re!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,re=R.far),W.layers.mask=me.layers.mask|2,X.layers.mask=me.layers.mask|4,R.layers.mask=W.layers.mask|X.layers.mask;const Ue=me.parent,Qe=R.cameras;_e(R,Ue);for(let Ve=0;Ve<Qe.length;Ve++)_e(Qe[Ve],Ue);Qe.length===2?he(R,W,X):R.projectionMatrix.copy(W.projectionMatrix),De(me,R,Ue)};function De(me,oe,Pe){Pe===null?me.matrix.copy(oe.matrixWorld):(me.matrix.copy(Pe.matrixWorld),me.matrix.invert(),me.matrix.multiply(oe.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(oe.projectionMatrix),me.projectionMatrixInverse.copy(oe.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=xs*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return f},this.setFoveation=function(me){f=me,S!==null&&(S.fixedFoveation=me),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=me)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let qe=null;function ce(me,oe){if(v=oe.getViewerPose(p||u),A=oe,v!==null){const Pe=v.views;y!==null&&(e.setRenderTargetFramebuffer(k,y.framebuffer),e.setRenderTarget(k));let Ue=!1;Pe.length!==R.cameras.length&&(R.cameras.length=0,Ue=!0);for(let Ve=0;Ve<Pe.length;Ve++){const Ze=Pe[Ve];let Pt=null;if(y!==null)Pt=y.getViewport(Ze);else{const lt=M.getViewSubImage(S,Ze);Pt=lt.viewport,Ve===0&&(e.setRenderTargetTextures(k,lt.colorTexture,S.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(k))}let St=N[Ve];St===void 0&&(St=new Xn,St.layers.enable(Ve),St.viewport=new rn,N[Ve]=St),St.matrix.fromArray(Ze.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ze.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ve===0&&(R.matrix.copy(St.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ue===!0&&R.cameras.push(St)}const Qe=s.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const Ve=M.getDepthInformation(Pe[0]);Ve&&Ve.isValid&&Ve.texture&&T.init(e,Ve,s.renderState)}}for(let Pe=0;Pe<F.length;Pe++){const Ue=P[Pe],Qe=F[Pe];Ue!==null&&Qe!==void 0&&Qe.update(Ue,oe,p||u)}qe&&qe(me,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),A=null}const Xe=new zu;Xe.setAnimationLoop(ce),this.setAnimationLoop=function(me){qe=me},this.dispose=function(){}}}const tr=new di,kv=new Zt;function Vv(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Fu(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,k,F,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),M(x,g)):g.isMeshPhongMaterial?(o(x,g),v(x,g)):g.isMeshStandardMaterial?(o(x,g),S(x,g),g.isMeshPhysicalMaterial&&y(x,g,P)):g.isMeshMatcapMaterial?(o(x,g),A(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),T(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(u(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?f(x,g,k,F):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Cn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Cn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const k=e.get(g),F=k.envMap,P=k.envMapRotation;F&&(x.envMap.value=F,tr.copy(P),tr.x*=-1,tr.y*=-1,tr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),x.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(tr)),x.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function f(x,g,k,F){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*k,x.scale.value=F*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function v(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function M(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,k){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=k.texture,x.transmissionSamplerSize.value.set(k.width,k.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,g){g.matcap&&(x.matcap.value=g.matcap)}function T(x,g){const k=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(k.matrixWorld),x.nearDistance.value=k.shadow.camera.near,x.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hv(i,e,t,n){let s={},o={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(k,F){const P=F.program;n.uniformBlockBinding(k,P)}function p(k,F){let P=s[k.id];P===void 0&&(A(k),P=v(k),s[k.id]=P,k.addEventListener("dispose",x));const J=F.program;n.updateUBOMapping(k,J);const O=e.render.frame;o[k.id]!==O&&(S(k),o[k.id]=O)}function v(k){const F=M();k.__bindingPointIndex=F;const P=i.createBuffer(),J=k.__size,O=k.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,J,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,P),P}function M(){for(let k=0;k<c;k++)if(u.indexOf(k)===-1)return u.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(k){const F=s[k.id],P=k.uniforms,J=k.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let O=0,W=P.length;O<W;O++){const X=Array.isArray(P[O])?P[O]:[P[O]];for(let N=0,R=X.length;N<R;N++){const G=X[N];if(y(G,O,N,J)===!0){const re=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let de=0;de<$.length;de++){const le=$[de],ge=T(le);typeof le=="number"||typeof le=="boolean"?(G.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,re+Q,G.__data)):le.isMatrix3?(G.__data[0]=le.elements[0],G.__data[1]=le.elements[1],G.__data[2]=le.elements[2],G.__data[3]=0,G.__data[4]=le.elements[3],G.__data[5]=le.elements[4],G.__data[6]=le.elements[5],G.__data[7]=0,G.__data[8]=le.elements[6],G.__data[9]=le.elements[7],G.__data[10]=le.elements[8],G.__data[11]=0):(le.toArray(G.__data,Q),Q+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,re,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(k,F,P,J){const O=k.value,W=F+"_"+P;if(J[W]===void 0)return typeof O=="number"||typeof O=="boolean"?J[W]=O:J[W]=O.clone(),!0;{const X=J[W];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return J[W]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function A(k){const F=k.uniforms;let P=0;const J=16;for(let W=0,X=F.length;W<X;W++){const N=Array.isArray(F[W])?F[W]:[F[W]];for(let R=0,G=N.length;R<G;R++){const re=N[R],$=Array.isArray(re.value)?re.value:[re.value];for(let Q=0,de=$.length;Q<de;Q++){const le=$[Q],ge=T(le),he=P%J,_e=he%ge.boundary,De=he+_e;P+=_e,De!==0&&J-De<ge.storage&&(P+=J-De),re.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=P,P+=ge.storage}}}const O=P%J;return O>0&&(P+=J-O),k.__size=P,k.__cache={},this}function T(k){const F={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(F.boundary=4,F.storage=4):k.isVector2?(F.boundary=8,F.storage=8):k.isVector3||k.isColor?(F.boundary=16,F.storage=12):k.isVector4?(F.boundary=16,F.storage=16):k.isMatrix3?(F.boundary=48,F.storage=48):k.isMatrix4?(F.boundary=64,F.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),F}function x(k){const F=k.target;F.removeEventListener("dispose",x);const P=u.indexOf(F.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(s[F.id]),delete s[F.id],delete o[F.id]}function g(){for(const k in s)i.deleteBuffer(s[k]);u=[],s={},o={}}return{bind:f,update:p,dispose:g}}class Gv{constructor(e={}){const{canvas:t=Lf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const A=new Uint32Array(4),T=new Int32Array(4);let x=null,g=null;const k=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Gi,this.toneMappingExposure=1;const P=this;let J=!1,O=0,W=0,X=null,N=-1,R=null;const G=new rn,re=new rn;let $=null;const Q=new Ct(0);let de=0,le=t.width,ge=t.height,he=1,_e=null,De=null;const qe=new rn(0,0,le,ge),ce=new rn(0,0,le,ge);let Xe=!1;const me=new Cl;let oe=!1,Pe=!1;const Ue=new Zt,Qe=new Zt,Ve=new j,Ze=new rn,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function lt(){return X===null?he:1}let Z=n;function Yt(L,ne){return t.getContext(L,ne)}try{const L={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",_,!1),t.addEventListener("webglcontextcreationerror",ye,!1),Z===null){const ne="webgl2";if(Z=Yt(ne,L),Z===null)throw Yt(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let yt,Et,tt,zt,it,V,D,ae,we,Ee,Se,Je,Oe,ze,gt,Ae,He,nt,Ie,Ge,rt,ht,Lt,te;function Ne(){yt=new Ym(Z),yt.init(),ht=new Dv(Z,yt),Et=new Hm(Z,yt,e,ht),tt=new Pv(Z,yt),Et.reverseDepthBuffer&&S&&tt.buffers.depth.setReversed(!0),zt=new Zm(Z),it=new mv,V=new Uv(Z,yt,tt,it,Et,ht,zt),D=new Wm(P),ae=new $m(P),we=new rd(Z),Lt=new km(Z,we),Ee=new jm(Z,we,zt,Lt),Se=new Qm(Z,Ee,we,zt),Ie=new Jm(Z,Et,V),Ae=new Gm(it),Je=new pv(P,D,ae,yt,Et,Lt,Ae),Oe=new Vv(P,it),ze=new _v,gt=new bv(yt),nt=new zm(P,D,ae,tt,Se,y,f),He=new Cv(P,Se,Et),te=new Hv(Z,zt,Et,tt),Ge=new Vm(Z,yt,zt),rt=new Km(Z,yt,zt),zt.programs=Je.programs,P.capabilities=Et,P.extensions=yt,P.properties=it,P.renderLists=ze,P.shadowMap=He,P.state=tt,P.info=zt}Ne();const ve=new zv(P,Z);this.xr=ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=yt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=yt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(le,ge,!1))},this.getSize=function(L){return L.set(le,ge)},this.setSize=function(L,ne,fe=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=L,ge=ne,t.width=Math.floor(L*he),t.height=Math.floor(ne*he),fe===!0&&(t.style.width=L+"px",t.style.height=ne+"px"),this.setViewport(0,0,L,ne)},this.getDrawingBufferSize=function(L){return L.set(le*he,ge*he).floor()},this.setDrawingBufferSize=function(L,ne,fe){le=L,ge=ne,he=fe,t.width=Math.floor(L*fe),t.height=Math.floor(ne*fe),this.setViewport(0,0,L,ne)},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(qe)},this.setViewport=function(L,ne,fe,ue){L.isVector4?qe.set(L.x,L.y,L.z,L.w):qe.set(L,ne,fe,ue),tt.viewport(G.copy(qe).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,ne,fe,ue){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,ne,fe,ue),tt.scissor(re.copy(ce).multiplyScalar(he).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(L){tt.setScissorTest(Xe=L)},this.setOpaqueSort=function(L){_e=L},this.setTransparentSort=function(L){De=L},this.getClearColor=function(L){return L.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(L=!0,ne=!0,fe=!0){let ue=0;if(L){let ie=!1;if(X!==null){const Re=X.texture.format;ie=Re===El||Re===wl||Re===bl}if(ie){const Re=X.texture.type,Fe=Re===Ri||Re===cr||Re===gs||Re===$r||Re===Sl||Re===yl,Ye=nt.getClearColor(),je=nt.getClearAlpha(),ct=Ye.r,vt=Ye.g,Be=Ye.b;Fe?(A[0]=ct,A[1]=vt,A[2]=Be,A[3]=je,Z.clearBufferuiv(Z.COLOR,0,A)):(T[0]=ct,T[1]=vt,T[2]=Be,T[3]=je,Z.clearBufferiv(Z.COLOR,0,T))}else ue|=Z.COLOR_BUFFER_BIT}ne&&(ue|=Z.DEPTH_BUFFER_BIT),fe&&(ue|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",_,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ze.dispose(),gt.dispose(),it.dispose(),D.dispose(),ae.dispose(),Se.dispose(),Lt.dispose(),te.dispose(),Je.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",at),ve.removeEventListener("sessionend",mt),Tt.stop()};function Me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function _(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const L=zt.autoReset,ne=He.enabled,fe=He.autoUpdate,ue=He.needsUpdate,ie=He.type;Ne(),zt.autoReset=L,He.enabled=ne,He.autoUpdate=fe,He.needsUpdate=ue,He.type=ie}function ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function pt(L){const ne=L.target;ne.removeEventListener("dispose",pt),It(ne)}function It(L){Nt(L),it.remove(L)}function Nt(L){const ne=it.get(L).programs;ne!==void 0&&(ne.forEach(function(fe){Je.releaseProgram(fe)}),L.isShaderMaterial&&Je.releaseShaderCache(L))}this.renderBufferDirect=function(L,ne,fe,ue,ie,Re){ne===null&&(ne=Pt);const Fe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ye=$i(L,ne,fe,ue,ie);tt.setMaterial(ue,Fe);let je=fe.index,ct=1;if(ue.wireframe===!0){if(je=Ee.getWireframeAttribute(fe),je===void 0)return;ct=2}const vt=fe.drawRange,Be=fe.attributes.position;let _t=vt.start*ct,Xt=(vt.start+vt.count)*ct;Re!==null&&(_t=Math.max(_t,Re.start*ct),Xt=Math.min(Xt,(Re.start+Re.count)*ct)),je!==null?(_t=Math.max(_t,0),Xt=Math.min(Xt,je.count)):Be!=null&&(_t=Math.max(_t,0),Xt=Math.min(Xt,Be.count));const jt=Xt-_t;if(jt<0||jt===1/0)return;Lt.setup(ie,ue,Ye,fe,je);let gn,Bt=Ge;if(je!==null&&(gn=we.get(je),Bt=rt,Bt.setIndex(gn)),ie.isMesh)ue.wireframe===!0?(tt.setLineWidth(ue.wireframeLinewidth*lt()),Bt.setMode(Z.LINES)):Bt.setMode(Z.TRIANGLES);else if(ie.isLine){let et=ue.linewidth;et===void 0&&(et=1),tt.setLineWidth(et*lt()),ie.isLineSegments?Bt.setMode(Z.LINES):ie.isLineLoop?Bt.setMode(Z.LINE_LOOP):Bt.setMode(Z.LINE_STRIP)}else ie.isPoints?Bt.setMode(Z.POINTS):ie.isSprite&&Bt.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Bt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const et=ie._multiDrawStarts,zn=ie._multiDrawCounts,r=ie._multiDrawCount,a=je?we.get(je).bytesPerElement:1,l=it.get(ue).currentProgram.getUniforms();for(let h=0;h<r;h++)l.setValue(Z,"_gl_DrawID",h),Bt.render(et[h]/a,zn[h])}else if(ie.isInstancedMesh)Bt.renderInstances(_t,jt,ie.count);else if(fe.isInstancedBufferGeometry){const et=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,zn=Math.min(fe.instanceCount,et);Bt.renderInstances(_t,jt,zn)}else Bt.render(_t,jt)};function Dt(L,ne,fe){L.transparent===!0&&L.side===ti&&L.forceSinglePass===!1?(L.side=Cn,L.needsUpdate=!0,Bn(L,ne,fe),L.side=Wi,L.needsUpdate=!0,Bn(L,ne,fe),L.side=ti):Bn(L,ne,fe)}this.compile=function(L,ne,fe=null){fe===null&&(fe=L),g=gt.get(fe),g.init(ne),F.push(g),fe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ne.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),L!==fe&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ne.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),g.setupLights();const ue=new Set;return L.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Re=ie.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const Ye=Re[Fe];Dt(Ye,fe,ie),ue.add(Ye)}else Dt(Re,fe,ie),ue.add(Re)}),F.pop(),g=null,ue},this.compileAsync=function(L,ne,fe=null){const ue=this.compile(L,ne,fe);return new Promise(ie=>{function Re(){if(ue.forEach(function(Fe){it.get(Fe).currentProgram.isReady()&&ue.delete(Fe)}),ue.size===0){ie(L);return}setTimeout(Re,10)}yt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Y=null;function $e(L){Y&&Y(L)}function at(){Tt.stop()}function mt(){Tt.start()}const Tt=new zu;Tt.setAnimationLoop($e),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(L){Y=L,ve.setAnimationLoop(L),L===null?Tt.stop():Tt.start()},ve.addEventListener("sessionstart",at),ve.addEventListener("sessionend",mt),this.render=function(L,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(ne),ne=ve.getCamera()),L.isScene===!0&&L.onBeforeRender(P,L,ne,X),g=gt.get(L,F.length),g.init(ne),F.push(g),Qe.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),me.setFromProjectionMatrix(Qe),Pe=this.localClippingEnabled,oe=Ae.init(this.clippingPlanes,Pe),x=ze.get(L,k.length),x.init(),k.push(x),ve.enabled===!0&&ve.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&Fn(Re,ne,-1/0,P.sortObjects)}Fn(L,ne,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(_e,De),St=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,St&&nt.addToRenderList(x,L),this.info.render.frame++,oe===!0&&Ae.beginShadows();const fe=g.state.shadowsArray;He.render(fe,L,ne),oe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=x.opaque,ie=x.transmissive;if(g.setupLights(),ne.isArrayCamera){const Re=ne.cameras;if(ie.length>0)for(let Fe=0,Ye=Re.length;Fe<Ye;Fe++){const je=Re[Fe];xt(ue,ie,L,je)}St&&nt.render(L);for(let Fe=0,Ye=Re.length;Fe<Ye;Fe++){const je=Re[Fe];On(x,L,je,je.viewport)}}else ie.length>0&&xt(ue,ie,L,ne),St&&nt.render(L),On(x,L,ne);X!==null&&(V.updateMultisampleRenderTarget(X),V.updateRenderTargetMipmap(X)),L.isScene===!0&&L.onAfterRender(P,L,ne),Lt.resetDefaultState(),N=-1,R=null,F.pop(),F.length>0?(g=F[F.length-1],oe===!0&&Ae.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,k.pop(),k.length>0?x=k[k.length-1]:x=null};function Fn(L,ne,fe,ue){if(L.visible===!1)return;if(L.layers.test(ne.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ne);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||me.intersectsSprite(L)){ue&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Qe);const Fe=Se.update(L),Ye=L.material;Ye.visible&&x.push(L,Fe,Ye,fe,Ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||me.intersectsObject(L))){const Fe=Se.update(L),Ye=L.material;if(ue&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ze.copy(Fe.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ye)){const je=Fe.groups;for(let ct=0,vt=je.length;ct<vt;ct++){const Be=je[ct],_t=Ye[Be.materialIndex];_t&&_t.visible&&x.push(L,Fe,_t,fe,Ze.z,Be)}}else Ye.visible&&x.push(L,Fe,Ye,fe,Ze.z,null)}}const Re=L.children;for(let Fe=0,Ye=Re.length;Fe<Ye;Fe++)Fn(Re[Fe],ne,fe,ue)}function On(L,ne,fe,ue){const ie=L.opaque,Re=L.transmissive,Fe=L.transparent;g.setupLightsView(fe),oe===!0&&Ae.setGlobalState(P.clippingPlanes,fe),ue&&tt.viewport(G.copy(ue)),ie.length>0&&Pn(ie,ne,fe),Re.length>0&&Pn(Re,ne,fe),Fe.length>0&&Pn(Fe,ne,fe),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function xt(L,ne,fe,ue){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new ur(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Ss:Ri,minFilter:lr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));const Re=g.state.transmissionRenderTarget[ue.id],Fe=ue.viewport||G;Re.setSize(Fe.z,Fe.w);const Ye=P.getRenderTarget();P.setRenderTarget(Re),P.getClearColor(Q),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),St&&nt.render(fe);const je=P.toneMapping;P.toneMapping=Gi;const ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),oe===!0&&Ae.setGlobalState(P.clippingPlanes,ue),Pn(L,fe,ue),V.updateMultisampleRenderTarget(Re),V.updateRenderTargetMipmap(Re),yt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Be=0,_t=ne.length;Be<_t;Be++){const Xt=ne[Be],jt=Xt.object,gn=Xt.geometry,Bt=Xt.material,et=Xt.group;if(Bt.side===ti&&jt.layers.test(ue.layers)){const zn=Bt.side;Bt.side=Cn,Bt.needsUpdate=!0,oi(jt,fe,ue,gn,Bt,et),Bt.side=zn,Bt.needsUpdate=!0,vt=!0}}vt===!0&&(V.updateMultisampleRenderTarget(Re),V.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ye),P.setClearColor(Q,de),ct!==void 0&&(ue.viewport=ct),P.toneMapping=je}function Pn(L,ne,fe){const ue=ne.isScene===!0?ne.overrideMaterial:null;for(let ie=0,Re=L.length;ie<Re;ie++){const Fe=L[ie],Ye=Fe.object,je=Fe.geometry,ct=ue===null?Fe.material:ue,vt=Fe.group;Ye.layers.test(fe.layers)&&oi(Ye,ne,fe,je,ct,vt)}}function oi(L,ne,fe,ue,ie,Re){L.onBeforeRender(P,ne,fe,ue,ie,Re),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(P,ne,fe,ue,L,Re),ie.transparent===!0&&ie.side===ti&&ie.forceSinglePass===!1?(ie.side=Cn,ie.needsUpdate=!0,P.renderBufferDirect(fe,ne,ue,ie,L,Re),ie.side=Wi,ie.needsUpdate=!0,P.renderBufferDirect(fe,ne,ue,ie,L,Re),ie.side=ti):P.renderBufferDirect(fe,ne,ue,ie,L,Re),L.onAfterRender(P,ne,fe,ue,ie,Re)}function Bn(L,ne,fe){ne.isScene!==!0&&(ne=Pt);const ue=it.get(L),ie=g.state.lights,Re=g.state.shadowsArray,Fe=ie.state.version,Ye=Je.getParameters(L,ie.state,Re,ne,fe),je=Je.getProgramCacheKey(Ye);let ct=ue.programs;ue.environment=L.isMeshStandardMaterial?ne.environment:null,ue.fog=ne.fog,ue.envMap=(L.isMeshStandardMaterial?ae:D).get(L.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&L.envMap===null?ne.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",pt),ct=new Map,ue.programs=ct);let vt=ct.get(je);if(vt!==void 0){if(ue.currentProgram===vt&&ue.lightsStateVersion===Fe)return jn(L,Ye),vt}else Ye.uniforms=Je.getUniforms(L),L.onBeforeCompile(Ye,P),vt=Je.acquireProgram(Ye,je),ct.set(je,vt),ue.uniforms=Ye.uniforms;const Be=ue.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),jn(L,Ye),ue.needsLights=mi(L),ue.lightsStateVersion=Fe,ue.needsLights&&(Be.ambientLightColor.value=ie.state.ambient,Be.lightProbe.value=ie.state.probe,Be.directionalLights.value=ie.state.directional,Be.directionalLightShadows.value=ie.state.directionalShadow,Be.spotLights.value=ie.state.spot,Be.spotLightShadows.value=ie.state.spotShadow,Be.rectAreaLights.value=ie.state.rectArea,Be.ltc_1.value=ie.state.rectAreaLTC1,Be.ltc_2.value=ie.state.rectAreaLTC2,Be.pointLights.value=ie.state.point,Be.pointLightShadows.value=ie.state.pointShadow,Be.hemisphereLights.value=ie.state.hemi,Be.directionalShadowMap.value=ie.state.directionalShadowMap,Be.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Be.spotShadowMap.value=ie.state.spotShadowMap,Be.spotLightMatrix.value=ie.state.spotLightMatrix,Be.spotLightMap.value=ie.state.spotLightMap,Be.pointShadowMap.value=ie.state.pointShadowMap,Be.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=vt,ue.uniformsList=null,vt}function Ut(L){if(L.uniformsList===null){const ne=L.currentProgram.getUniforms();L.uniformsList=Ma.seqWithValue(ne.seq,L.uniforms)}return L.uniformsList}function jn(L,ne){const fe=it.get(L);fe.outputColorSpace=ne.outputColorSpace,fe.batching=ne.batching,fe.batchingColor=ne.batchingColor,fe.instancing=ne.instancing,fe.instancingColor=ne.instancingColor,fe.instancingMorph=ne.instancingMorph,fe.skinning=ne.skinning,fe.morphTargets=ne.morphTargets,fe.morphNormals=ne.morphNormals,fe.morphColors=ne.morphColors,fe.morphTargetsCount=ne.morphTargetsCount,fe.numClippingPlanes=ne.numClippingPlanes,fe.numIntersection=ne.numClipIntersection,fe.vertexAlphas=ne.vertexAlphas,fe.vertexTangents=ne.vertexTangents,fe.toneMapping=ne.toneMapping}function $i(L,ne,fe,ue,ie){ne.isScene!==!0&&(ne=Pt),V.resetTextureUnits();const Re=ne.fog,Fe=ue.isMeshStandardMaterial?ne.environment:null,Ye=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Kr,je=(ue.isMeshStandardMaterial?ae:D).get(ue.envMap||Fe),ct=ue.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,vt=!!fe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Be=!!fe.morphAttributes.position,_t=!!fe.morphAttributes.normal,Xt=!!fe.morphAttributes.color;let jt=Gi;ue.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=P.toneMapping);const gn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Bt=gn!==void 0?gn.length:0,et=it.get(ue),zn=g.state.lights;if(oe===!0&&(Pe===!0||L!==R)){const E=L===R&&ue.id===N;Ae.setState(ue,L,E)}let r=!1;ue.version===et.__version?(et.needsLights&&et.lightsStateVersion!==zn.state.version||et.outputColorSpace!==Ye||ie.isBatchedMesh&&et.batching===!1||!ie.isBatchedMesh&&et.batching===!0||ie.isBatchedMesh&&et.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&et.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&et.instancing===!1||!ie.isInstancedMesh&&et.instancing===!0||ie.isSkinnedMesh&&et.skinning===!1||!ie.isSkinnedMesh&&et.skinning===!0||ie.isInstancedMesh&&et.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&et.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&et.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&et.instancingMorph===!1&&ie.morphTexture!==null||et.envMap!==je||ue.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==ct||et.vertexTangents!==vt||et.morphTargets!==Be||et.morphNormals!==_t||et.morphColors!==Xt||et.toneMapping!==jt||et.morphTargetsCount!==Bt)&&(r=!0):(r=!0,et.__version=ue.version);let a=et.currentProgram;r===!0&&(a=Bn(ue,ne,ie));let l=!1,h=!1,d=!1;const m=a.getUniforms(),b=et.uniforms;if(tt.useProgram(a.program)&&(l=!0,h=!0,d=!0),ue.id!==N&&(N=ue.id,h=!0),l||R!==L){tt.buffers.depth.getReversed()?(Ue.copy(L.projectionMatrix),Df(Ue),If(Ue),m.setValue(Z,"projectionMatrix",Ue)):m.setValue(Z,"projectionMatrix",L.projectionMatrix),m.setValue(Z,"viewMatrix",L.matrixWorldInverse);const U=m.map.cameraPosition;U!==void 0&&U.setValue(Z,Ve.setFromMatrixPosition(L.matrixWorld)),Et.logarithmicDepthBuffer&&m.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&m.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,h=!0,d=!0)}if(ie.isSkinnedMesh){m.setOptional(Z,ie,"bindMatrix"),m.setOptional(Z,ie,"bindMatrixInverse");const E=ie.skeleton;E&&(E.boneTexture===null&&E.computeBoneTexture(),m.setValue(Z,"boneTexture",E.boneTexture,V))}ie.isBatchedMesh&&(m.setOptional(Z,ie,"batchingTexture"),m.setValue(Z,"batchingTexture",ie._matricesTexture,V),m.setOptional(Z,ie,"batchingIdTexture"),m.setValue(Z,"batchingIdTexture",ie._indirectTexture,V),m.setOptional(Z,ie,"batchingColorTexture"),ie._colorsTexture!==null&&m.setValue(Z,"batchingColorTexture",ie._colorsTexture,V));const w=fe.morphAttributes;if((w.position!==void 0||w.normal!==void 0||w.color!==void 0)&&Ie.update(ie,fe,a),(h||et.receiveShadow!==ie.receiveShadow)&&(et.receiveShadow=ie.receiveShadow,m.setValue(Z,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(b.envMap.value=je,b.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ne.environment!==null&&(b.envMapIntensity.value=ne.environmentIntensity),h&&(m.setValue(Z,"toneMappingExposure",P.toneMappingExposure),et.needsLights&&Yi(b,d),Re&&ue.fog===!0&&Oe.refreshFogUniforms(b,Re),Oe.refreshMaterialUniforms(b,ue,he,ge,g.state.transmissionRenderTarget[L.id]),Ma.upload(Z,Ut(et),b,V)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ma.upload(Z,Ut(et),b,V),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&m.setValue(Z,"center",ie.center),m.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),m.setValue(Z,"normalMatrix",ie.normalMatrix),m.setValue(Z,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const E=ue.uniformsGroups;for(let U=0,C=E.length;U<C;U++){const I=E[U];te.update(I,a),te.bind(I,a)}}return a}function Yi(L,ne){L.ambientLightColor.needsUpdate=ne,L.lightProbe.needsUpdate=ne,L.directionalLights.needsUpdate=ne,L.directionalLightShadows.needsUpdate=ne,L.pointLights.needsUpdate=ne,L.pointLightShadows.needsUpdate=ne,L.spotLights.needsUpdate=ne,L.spotLightShadows.needsUpdate=ne,L.rectAreaLights.needsUpdate=ne,L.hemisphereLights.needsUpdate=ne}function mi(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(L,ne,fe){it.get(L.texture).__webglTexture=ne,it.get(L.depthTexture).__webglTexture=fe;const ue=it.get(L);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=fe===void 0,ue.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,ne){const fe=it.get(L);fe.__webglFramebuffer=ne,fe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(L,ne=0,fe=0){X=L,O=ne,W=fe;let ue=!0,ie=null,Re=!1,Fe=!1;if(L){const je=it.get(L);if(je.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(Z.FRAMEBUFFER,null),ue=!1;else if(je.__webglFramebuffer===void 0)V.setupRenderTarget(L);else if(je.__hasExternalTextures)V.rebindTextures(L,it.get(L.texture).__webglTexture,it.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Be=L.depthTexture;if(je.__boundDepthTexture!==Be){if(Be!==null&&it.has(Be)&&(L.width!==Be.image.width||L.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(L)}}const ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Fe=!0);const vt=it.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(vt[ne])?ie=vt[ne][fe]:ie=vt[ne],Re=!0):L.samples>0&&V.useMultisampledRTT(L)===!1?ie=it.get(L).__webglMultisampledFramebuffer:Array.isArray(vt)?ie=vt[fe]:ie=vt,G.copy(L.viewport),re.copy(L.scissor),$=L.scissorTest}else G.copy(qe).multiplyScalar(he).floor(),re.copy(ce).multiplyScalar(he).floor(),$=Xe;if(tt.bindFramebuffer(Z.FRAMEBUFFER,ie)&&ue&&tt.drawBuffers(L,ie),tt.viewport(G),tt.scissor(re),tt.setScissorTest($),Re){const je=it.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+ne,je.__webglTexture,fe)}else if(Fe){const je=it.get(L.texture),ct=ne||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,je.__webglTexture,fe||0,ct)}N=-1},this.readRenderTargetPixels=function(L,ne,fe,ue,ie,Re,Fe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye){tt.bindFramebuffer(Z.FRAMEBUFFER,Ye);try{const je=L.texture,ct=je.format,vt=je.type;if(!Et.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=L.width-ue&&fe>=0&&fe<=L.height-ie&&Z.readPixels(ne,fe,ue,ie,ht.convert(ct),ht.convert(vt),Re)}finally{const je=X!==null?it.get(X).__webglFramebuffer:null;tt.bindFramebuffer(Z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(L,ne,fe,ue,ie,Re,Fe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ye=Ye[Fe]),Ye){const je=L.texture,ct=je.format,vt=je.type;if(!Et.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ne>=0&&ne<=L.width-ue&&fe>=0&&fe<=L.height-ie){tt.bindFramebuffer(Z.FRAMEBUFFER,Ye);const Be=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Be),Z.bufferData(Z.PIXEL_PACK_BUFFER,Re.byteLength,Z.STREAM_READ),Z.readPixels(ne,fe,ue,ie,ht.convert(ct),ht.convert(vt),0);const _t=X!==null?it.get(X).__webglFramebuffer:null;tt.bindFramebuffer(Z.FRAMEBUFFER,_t);const Xt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Uf(Z,Xt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Be),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Re),Z.deleteBuffer(Be),Z.deleteSync(Xt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,ne=null,fe=0){L.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ne=arguments[0]||null,L=arguments[1]);const ue=Math.pow(2,-fe),ie=Math.floor(L.image.width*ue),Re=Math.floor(L.image.height*ue),Fe=ne!==null?ne.x:0,Ye=ne!==null?ne.y:0;V.setTexture2D(L,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,fe,0,0,Fe,Ye,ie,Re),tt.unbindTexture()},this.copyTextureToTexture=function(L,ne,fe=null,ue=null,ie=0){L.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,L=arguments[1],ne=arguments[2],ie=arguments[3]||0,fe=null);let Re,Fe,Ye,je,ct,vt,Be,_t,Xt;const jt=L.isCompressedTexture?L.mipmaps[ie]:L.image;fe!==null?(Re=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,Ye=fe.isBox3?fe.max.z-fe.min.z:1,je=fe.min.x,ct=fe.min.y,vt=fe.isBox3?fe.min.z:0):(Re=jt.width,Fe=jt.height,Ye=jt.depth||1,je=0,ct=0,vt=0),ue!==null?(Be=ue.x,_t=ue.y,Xt=ue.z):(Be=0,_t=0,Xt=0);const gn=ht.convert(ne.format),Bt=ht.convert(ne.type);let et;ne.isData3DTexture?(V.setTexture3D(ne,0),et=Z.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(V.setTexture2DArray(ne,0),et=Z.TEXTURE_2D_ARRAY):(V.setTexture2D(ne,0),et=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ne.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ne.unpackAlignment);const zn=Z.getParameter(Z.UNPACK_ROW_LENGTH),r=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),a=Z.getParameter(Z.UNPACK_SKIP_PIXELS),l=Z.getParameter(Z.UNPACK_SKIP_ROWS),h=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,jt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,jt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,je),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ct),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,vt);const d=L.isDataArrayTexture||L.isData3DTexture,m=ne.isDataArrayTexture||ne.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const b=it.get(L),w=it.get(ne),E=it.get(b.__renderTarget),U=it.get(w.__renderTarget);tt.bindFramebuffer(Z.READ_FRAMEBUFFER,E.__webglFramebuffer),tt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let C=0;C<Ye;C++)d&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,it.get(L).__webglTexture,ie,vt+C),L.isDepthTexture?(m&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,it.get(ne).__webglTexture,ie,Xt+C),Z.blitFramebuffer(je,ct,Re,Fe,Be,_t,Re,Fe,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):m?Z.copyTexSubImage3D(et,ie,Be,_t,Xt+C,je,ct,Re,Fe):Z.copyTexSubImage2D(et,ie,Be,_t,Xt+C,je,ct,Re,Fe);tt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),tt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else m?L.isDataTexture||L.isData3DTexture?Z.texSubImage3D(et,ie,Be,_t,Xt,Re,Fe,Ye,gn,Bt,jt.data):ne.isCompressedArrayTexture?Z.compressedTexSubImage3D(et,ie,Be,_t,Xt,Re,Fe,Ye,gn,jt.data):Z.texSubImage3D(et,ie,Be,_t,Xt,Re,Fe,Ye,gn,Bt,jt):L.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ie,Be,_t,Re,Fe,gn,Bt,jt.data):L.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ie,Be,_t,jt.width,jt.height,gn,jt.data):Z.texSubImage2D(Z.TEXTURE_2D,ie,Be,_t,Re,Fe,gn,Bt,jt);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,zn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,r),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,a),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,l),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,h),ie===0&&ne.generateMipmaps&&Z.generateMipmap(et),tt.unbindTexture()},this.copyTextureToTexture3D=function(L,ne,fe=null,ue=null,ie=0){return L.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),fe=arguments[0]||null,ue=arguments[1]||null,L=arguments[2],ne=arguments[3],ie=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,ne,fe,ue,ie)},this.initRenderTarget=function(L){it.get(L).__webglFramebuffer===void 0&&V.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?V.setTextureCube(L,0):L.isData3DTexture?V.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?V.setTexture2DArray(L,0):V.setTexture2D(L,0),tt.unbindTexture()},this.resetState=function(){O=0,W=0,X=null,tt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}class Pl extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new j;class Ea{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),o=Gt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xu extends qi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ar;const cs=new j,Cr=new j,Rr=new j,Pr=new ut,us=new ut,qu=new Zt,Js=new j,hs=new j,Qs=new j,Hc=new ut,uo=new ut,Gc=new ut;class Xv extends ln{constructor(e=new Xu){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wv(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new Ea(n,3,0,!1)),Ar.setAttribute("uv",new Ea(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new ut(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Rr.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const u=this.center;ea(Js.set(-.5,-.5,0),Rr,u,Cr,s,o),ea(hs.set(.5,-.5,0),Rr,u,Cr,s,o),ea(Qs.set(.5,.5,0),Rr,u,Cr,s,o),Hc.set(0,0),uo.set(1,0),Gc.set(1,1);let c=e.ray.intersectTriangle(Js,hs,Qs,!1,cs);if(c===null&&(ea(hs.set(-.5,.5,0),Rr,u,Cr,s,o),uo.set(0,1),c=e.ray.intersectTriangle(Js,Qs,hs,!1,cs),c===null))return;const f=e.ray.origin.distanceTo(cs);f<e.near||f>e.far||t.push({distance:f,point:cs.clone(),uv:In.getInterpolation(cs,Js,hs,Qs,Hc,uo,Gc,new ut),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ea(i,e,t,n,s,o){Pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(us.x=o*Pr.x-s*Pr.y,us.y=s*Pr.x+o*Pr.y):us.copy(Pr),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(qu)}class Rn extends qi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new j,Aa=new j,Wc=new Zt,fs=new Pa,ta=new ys,ho=new j,Xc=new j;class ai extends ln{constructor(e=new Wt,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=o,e.ray.intersectsSphere(ta)===!1)return;Wc.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Wc);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,p=this.isLineSegments?2:1,v=n.index,S=n.attributes.position;if(v!==null){const y=Math.max(0,u.start),A=Math.min(v.count,u.start+u.count);for(let T=y,x=A-1;T<x;T+=p){const g=v.getX(T),k=v.getX(T+1),F=na(this,e,fs,f,g,k);F&&t.push(F)}if(this.isLineLoop){const T=v.getX(A-1),x=v.getX(y),g=na(this,e,fs,f,T,x);g&&t.push(g)}}else{const y=Math.max(0,u.start),A=Math.min(S.count,u.start+u.count);for(let T=y,x=A-1;T<x;T+=p){const g=na(this,e,fs,f,T,T+1);g&&t.push(g)}if(this.isLineLoop){const T=na(this,e,fs,f,A-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function na(i,e,t,n,s,o){const u=i.geometry.attributes.position;if(Ta.fromBufferAttribute(u,s),Aa.fromBufferAttribute(u,o),t.distanceSqToSegment(Ta,Aa,ho,Xc)>n)return;ho.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(ho);if(!(f<e.near||f>e.far))return{distance:f,point:Xc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new j,$c=new j;class ws extends ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)qc.fromBufferAttribute(t,s),$c.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo($c);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $u extends qi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new Zt,ml=new Pa,ia=new ys,ra=new j;class qv extends ln{constructor(e=new Wt,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=o,e.ray.intersectsSphere(ia)===!1)return;Yc.copy(s).invert(),ml.copy(e.ray).applyMatrix4(Yc);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,p=n.index,M=n.attributes.position;if(p!==null){const S=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let A=S,T=y;A<T;A++){const x=p.getX(A);ra.fromBufferAttribute(M,x),jc(ra,x,f,s,e,t,this)}}else{const S=Math.max(0,u.start),y=Math.min(M.count,u.start+u.count);for(let A=S,T=y;A<T;A++)ra.fromBufferAttribute(M,A),jc(ra,A,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function jc(i,e,t,n,s,o,u){const c=ml.distanceSqToPoint(i);if(c<t){const f=new j;ml.closestPointToPoint(i,f),f.applyMatrix4(n);const p=s.ray.origin.distanceTo(f);if(p<s.near||p>s.far)return;o.push({distance:p,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Yu extends An{constructor(e,t,n,s,o,u,c,f,p){super(e,t,n,s,o,u,c,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}const sa=new j,aa=new j,fo=new j,oa=new In;class $v extends Wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(Hr*t),u=e.getIndex(),c=e.getAttribute("position"),f=u?u.count:c.count,p=[0,0,0],v=["a","b","c"],M=new Array(3),S={},y=[];for(let A=0;A<f;A+=3){u?(p[0]=u.getX(A),p[1]=u.getX(A+1),p[2]=u.getX(A+2)):(p[0]=A,p[1]=A+1,p[2]=A+2);const{a:T,b:x,c:g}=oa;if(T.fromBufferAttribute(c,p[0]),x.fromBufferAttribute(c,p[1]),g.fromBufferAttribute(c,p[2]),oa.getNormal(fo),M[0]=`${Math.round(T.x*s)},${Math.round(T.y*s)},${Math.round(T.z*s)}`,M[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,M[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let k=0;k<3;k++){const F=(k+1)%3,P=M[k],J=M[F],O=oa[v[k]],W=oa[v[F]],X=`${P}_${J}`,N=`${J}_${P}`;N in S&&S[N]?(fo.dot(S[N].normal)<=o&&(y.push(O.x,O.y,O.z),y.push(W.x,W.y,W.z)),S[N]=null):X in S||(S[X]={index0:p[k],index1:p[F],normal:fo.clone()})}}for(const A in S)if(S[A]){const{index0:T,index1:x}=S[A];sa.fromBufferAttribute(c,T),aa.fromBufferAttribute(c,x),y.push(sa.x,sa.y,sa.z),y.push(aa.x,aa.y,aa.z)}this.setAttribute("position",new cn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class es extends Wt{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(u+c,Math.PI);let p=0;const v=[],M=new j,S=new j,y=[],A=[],T=[],x=[];for(let g=0;g<=n;g++){const k=[],F=g/n;let P=0;g===0&&u===0?P=.5/t:g===n&&f===Math.PI&&(P=-.5/t);for(let J=0;J<=t;J++){const O=J/t;M.x=-e*Math.cos(s+O*o)*Math.sin(u+F*c),M.y=e*Math.cos(u+F*c),M.z=e*Math.sin(s+O*o)*Math.sin(u+F*c),A.push(M.x,M.y,M.z),S.copy(M).normalize(),T.push(S.x,S.y,S.z),x.push(O+P,1-F),k.push(p++)}v.push(k)}for(let g=0;g<n;g++)for(let k=0;k<t;k++){const F=v[g][k+1],P=v[g][k],J=v[g+1][k],O=v[g+1][k+1];(g!==0||u>0)&&y.push(F,P,O),(g!==n-1||f<Math.PI)&&y.push(P,J,O)}this.setIndex(y),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(T,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yv extends Wt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new j,o=new j;if(e.index!==null){const u=e.attributes.position,c=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:c.count,materialIndex:0}]);for(let p=0,v=f.length;p<v;++p){const M=f[p],S=M.start,y=M.count;for(let A=S,T=S+y;A<T;A+=3)for(let x=0;x<3;x++){const g=c.getX(A+x),k=c.getX(A+(x+1)%3);s.fromBufferAttribute(u,g),o.fromBufferAttribute(u,k),Kc(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const u=e.attributes.position;for(let c=0,f=u.count/3;c<f;c++)for(let p=0;p<3;p++){const v=3*c+p,M=3*c+(p+1)%3;s.fromBufferAttribute(u,v),o.fromBufferAttribute(u,M),Kc(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new cn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Kc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class Es extends qi{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ju extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jv extends ju{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const po=new Zt,Zc=new j,Jc=new j;class Kv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zv extends Kv{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jv extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Zv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qc=new Zt;class eu{constructor(e,t,n=0,s=1/0){this.ray=new Pa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qc),this}intersectObject(e,t=!0,n=[]){return vl(e,this,n,t),n.sort(tu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)vl(e[s],this,n,t);return n.sort(tu),n}}function tu(i,e){return i.distance-e.distance}function vl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let u=0,c=o.length;u<c;u++)vl(o[u],e,t,!0)}}class Qv extends ws{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ct(n),s=new Ct(s);const o=t/2,u=e/t,c=e/2,f=[],p=[];for(let S=0,y=0,A=-c;S<=t;S++,A+=u){f.push(-c,0,A,c,0,A),f.push(A,0,-c,A,0,c);const T=S===o?n:s;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const v=new Wt;v.setAttribute("position",new cn(f,3)),v.setAttribute("color",new cn(p,3));const M=new Rn({vertexColors:!0,toneMapped:!1});super(v,M),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ku extends ws{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Wt;s.setAttribute("position",new cn(t,3)),s.setAttribute("color",new cn(n,3));const o=new Rn({vertexColors:!0,toneMapped:!1});super(s,o),this.type="AxesHelper"}setColors(e,t,n){const s=new Ct,o=this.geometry.attributes.color.array;return s.set(e),s.toArray(o,0),s.toArray(o,3),s.set(t),s.toArray(o,6),s.toArray(o,9),s.set(n),s.toArray(o,12),s.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class e_ extends fr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const mo={type:"change"},Ll={type:"start"},Ul={type:"end"},nu=1e-6,Vt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},la=new ut,Oi=new ut,t_=new j,ca=new j,vo=new j,Lr=new Zr,iu=new j,ua=new j,_o=new j,ha=new j;class Zu extends e_{constructor(e,t=null){super(e,t),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.state=Vt.NONE,this.keyState=Vt.NONE,this.target=new j,this._lastPosition=new j,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new j,this._movePrev=new ut,this._moveCurr=new ut,this._lastAxis=new j,this._zoomStart=new ut,this._zoomEnd=new ut,this._panStart=new ut,this._panEnd=new ut,this._pointers=[],this._pointerPositions={},this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=r_.bind(this),this._onPointerCancel=s_.bind(this),this._onContextMenu=f_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=o_.bind(this),this._onKeyUp=a_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=p_.bind(this),this._onTouchEnd=m_.bind(this),this._onMouseDown=l_.bind(this),this._onMouseMove=c_.bind(this),this._onMouseUp=u_.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>nu&&(this.dispatchEvent(mo),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>nu||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(mo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Vt.NONE,this.keyState=Vt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(mo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Oi.copy(this._panEnd).sub(this._panStart),Oi.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Oi.x*=e,Oi.y*=t}Oi.multiplyScalar(this._eye.length()*this.panSpeed),ca.copy(this._eye).cross(this.object.up).setLength(Oi.x),ca.add(t_.copy(this.object.up).setLength(Oi.y)),this.object.position.add(ca),this.target.add(ca),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Oi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){ha.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=ha.length();e?(this._eye.copy(this.object.position).sub(this.target),iu.copy(this._eye).normalize(),ua.copy(this.object.up).normalize(),_o.crossVectors(ua,iu).normalize(),ua.setLength(this._moveCurr.y-this._movePrev.y),_o.setLength(this._moveCurr.x-this._movePrev.x),ha.copy(ua.add(_o)),vo.crossVectors(ha,this._eye).normalize(),e*=this.rotateSpeed,Lr.setFromAxisAngle(vo,e),this._eye.applyQuaternion(Lr),this.object.up.applyQuaternion(Lr),this._lastAxis.copy(vo),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Lr.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Lr),this.object.up.applyQuaternion(Lr)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===Vt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Kl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Kl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return la.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),la}_getMouseOnCircle(e,t){return la.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),la}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function n_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function i_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function r_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function s_(i){this._removePointer(i)}function a_(){this.enabled!==!1&&(this.keyState=Vt.NONE,window.addEventListener("keydown",this._onKeyDown))}function o_(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Vt.NONE&&(i.code===this.keys[Vt.ROTATE]&&!this.noRotate?this.keyState=Vt.ROTATE:i.code===this.keys[Vt.ZOOM]&&!this.noZoom?this.keyState=Vt.ZOOM:i.code===this.keys[Vt.PAN]&&!this.noPan&&(this.keyState=Vt.PAN)))}function l_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zr.DOLLY:this.state=Vt.ZOOM;break;case zr.ROTATE:this.state=Vt.ROTATE;break;case zr.PAN:this.state=Vt.PAN;break;default:this.state=Vt.NONE}const t=this.keyState!==Vt.NONE?this.keyState:this.state;t===Vt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===Vt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===Vt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(Ll)}function c_(i){const e=this.keyState!==Vt.NONE?this.keyState:this.state;e===Vt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===Vt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===Vt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function u_(){this.state=Vt.NONE,this.dispatchEvent(Ul)}function h_(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(Ll),this.dispatchEvent(Ul)}}function f_(i){this.enabled!==!1&&i.preventDefault()}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=Vt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=Vt.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(Ll)}function p_(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const s=(i.pageX+e.x)/2,o=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,o));break}}function m_(i){switch(this._pointers.length){case 0:this.state=Vt.NONE;break;case 1:this.state=Vt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Vt.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Ul)}let mn,Kt,Jt,en,Ot,on,_l,wi,_s=null,Ir,zi,Ju=!1,ei=null,Qn=null;function go(i,e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.font="bold 48px sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=5,n.strokeStyle="rgba(0, 0, 0, 0.9)",n.strokeText(i,32,32),n.fillStyle=e,n.fillText(i,32,32);const s=new Yu(t);s.minFilter=Yn;const o=new Xu({map:s,transparent:!0,depthTest:!1}),u=new Xv(o);return u.scale.set(.4,.4,.4),u}function v_(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,128,128),n.strokeStyle="rgba(0, 0, 0, 0.5)",n.lineWidth=6,n.strokeRect(3,3,122,122),n.font="bold 22px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ffffff",n.fillText(i,64,64);const s=new Yu(t);return s.minFilter=Yn,s}function __(){_l=new Pl,wi=new bs(-1,1,1,-1,.1,10),wi.position.set(2,2,2),wi.lookAt(0,0,0);const i=new Jr(1,1,1),t=[["Right","#a04444"],["Left","#a04444"],["Top","#44a044"],["Bottom","#44a044"],["Front","#4444a0"],["Back","#4444a0"]].map(([s,o])=>new La({map:v_(s,o)}));_s=new _n(i,t),_l.add(_s);const n=new $v(i);_s.add(new ws(n,new Rn({color:0})))}function g_(){Ir=new Pl,zi=new bs(-1.5,1.5,1.5,-1.5,.1,10),zi.position.set(2,2,2),zi.lookAt(0,0,0),Ir.add(new Ku(1));const i=go("X","#ff6666");i.position.set(1.15,0,0),Ir.add(i);const e=go("Y","#66ff66");e.position.set(0,1.15,0),Ir.add(e);const t=go("Z","#8888ff");t.position.set(0,0,1.15),Ir.add(t)}function x_(i){mn=new Pl,mn.background=new Ct(1710638);const{width:e,height:t}=i.getBoundingClientRect();Jt=new Xn(50,e/t,.01,100),Jt.position.set(3,2,4),Jt.lookAt(0,0,0);const n=e/t;en=new bs(-n,n,1,-1,.01,100),en.position.copy(Jt.position),en.up.copy(Jt.up),en.lookAt(0,0,0),en.updateMatrixWorld(),Kt=Jt,Ot=new Gv({antialias:!0}),Ot.setSize(e,t),Ot.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(Ot.domElement),on=new Zu(Kt,Ot.domElement),on.rotateSpeed=2,on.staticMoving=!0;const s=new Qv(6,20,4473958,2236996);mn.add(s),mn.add(new Ku(2)),mn.add(new jv(16777215,4473924,.8));const o=new Jv(16777215,1);o.position.set(2,3,2),mn.add(o),__(),g_(),Ot.domElement.addEventListener("click",b_),window.addEventListener("resize",()=>{const{width:u,height:c}=i.getBoundingClientRect(),f=u/c;if(Kt===Jt)Jt.aspect=f,Jt.updateProjectionMatrix();else{const v=(en.top-en.bottom)/2*f;en.left=-v,en.right=v,en.updateProjectionMatrix()}Ot.setSize(u,c)}),eh()}function Qu(){const i=new ut;Ot.getSize(i);const e=Math.min(150,Math.max(110,i.x/6))*.8,t=12,n=document.getElementById("panel");let s=i.x;if(n){const c=n.getBoundingClientRect(),f=Ot.domElement.getBoundingClientRect();s=c.left-f.left}const o=Math.max(0,s-e-t),u=i.y-e-t;return{x:o,y:u,size:e,canvasSize:i}}function M_(){const{x:i,y:e,size:t,canvasSize:n}=Qu(),s=Kt.position.clone().sub(on.target).normalize();wi.position.copy(s.multiplyScalar(2)),wi.up.copy(Kt.up),wi.lookAt(0,0,0),wi.updateMatrixWorld(),Ot.setViewport(i,e,t,t),Ot.setScissor(i,e,t,t),Ot.setScissorTest(!0),Ot.autoClear=!1,Ot.clearDepth(),Ot.render(_l,wi),Ot.setScissorTest(!1),Ot.autoClear=!0,Ot.setViewport(0,0,n.x,n.y)}function S_(){const i=new ut;Ot.getSize(i);const e=100,t=12;return{x:t,y:t,size:e,canvasSize:i}}function y_(){const{x:i,y:e,size:t,canvasSize:n}=S_(),s=Kt.position.clone().sub(on.target).normalize();zi.position.copy(s.multiplyScalar(2)),zi.up.copy(Kt.up),zi.lookAt(0,0,0),zi.updateMatrixWorld(),Ot.setViewport(i,e,t,t),Ot.setScissor(i,e,t,t),Ot.setScissorTest(!0),Ot.autoClear=!1,Ot.clearDepth(),Ot.render(Ir,zi),Ot.setScissorTest(!1),Ot.autoClear=!0,Ot.setViewport(0,0,n.x,n.y)}const ru=[[new j(1,0,0),new j(0,1,0)],[new j(-1,0,0),new j(0,1,0)],[new j(0,1,0),new j(0,0,-1)],[new j(0,-1,0),new j(0,0,1)],[new j(0,0,1),new j(0,1,0)],[new j(0,0,-1),new j(0,1,0)]];function b_(i){if(!_s)return;const e=Ot.domElement.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top,{x:s,y:o,size:u,canvasSize:c}=Qu(),f=t-s,p=c.y-n-o;if(f>=0&&f<=u&&p>=0&&p<=u){const M=f/u*2-1,S=p/u*2-1,y=new eu;y.setFromCamera(new ut(M,S),wi);const A=y.intersectObject(_s,!1);if(A.length===0)return;const T=A[0].face?.materialIndex;if(T===void 0||T<0||T>=ru.length)return;const[x,g]=ru[T];w_(x,g);return}if(Ju){const M=t/c.x*2-1,S=-(n/c.y)*2+1,y=new eu;y.setFromCamera(new ut(M,S),Kt);const T=y.intersectObjects(mn.children,!0).find(x=>x.object!==ei&&x.object instanceof _n);if(T){const x=C_();x.position.copy(T.point),x.visible=!0,on.target.copy(T.point);const g=Kt.position.distanceTo(on.target);Jt.near=Math.max(.001,g/1e3),Jt.far=g*100,Jt.updateProjectionMatrix()}}}function w_(i,e){const t=Kt.position.distanceTo(on.target),n=on.target.clone(),s=n.clone().add(i.clone().normalize().multiplyScalar(t));Qn={startPos:Kt.position.clone(),endPos:s,startUp:Kt.up.clone(),endUp:e.clone(),target:n,startTime:performance.now(),duration:350}}function E_(){if(!Qn)return;const i=Math.min(1,(performance.now()-Qn.startTime)/Qn.duration),e=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;Kt.position.lerpVectors(Qn.startPos,Qn.endPos,e),Kt.up.lerpVectors(Qn.startUp,Qn.endUp,e).normalize(),on.target.copy(Qn.target),Kt.lookAt(Qn.target),i>=1&&(Qn=null)}function eh(){requestAnimationFrame(eh),E_(),on.update(),Ot.render(mn,Kt),M_(),y_()}function T_(){return mn}function A_(i){const e=mn.getObjectByName(i);e&&mn.remove(e)}function sn(i,e){const t=mn.getObjectByName(i);t&&(t.visible=e)}function th(i){return mn.getObjectByName(i)!=null}function Nn(i,e){A_(e),i.name=e,mn.add(i)}function Br(){const i=[];mn.traverse(e=>{e.name&&e.name!==""&&i.push(e)});for(const e of i)mn.remove(e)}function ts(i){const e=i??mn;if(!e)return;const t=new hr;if(i?(i.updateWorldMatrix(!0,!1),t.setFromObject(i)):e.traverse(p=>{if(p.visible&&p.isMesh){const v=new hr().setFromObject(p);v.min.x!==1/0&&t.union(v)}}),!isFinite(t.min.x))return;const n=t.getSize(new j),s=t.getCenter(new j),o=Math.max(n.x,n.y,n.z)||1,u=Jt.fov*Math.PI/180,c=o*.5/Math.tan(u*.5)*1.6,f=new j(.6,.5,1).normalize();Kt.position.copy(s).addScaledVector(f,c),on.target.copy(s),Kt.near=Math.max(.001,c/1e3),Kt.far=c*100,Kt.updateProjectionMatrix(),on.update(),ei&&(ei.visible=!1)}function C_(){if(ei)return ei;const i=new es(.05,16,12),e=new La({color:5227511,depthTest:!1,transparent:!0,opacity:.85});return ei=new _n(i,e),ei.name="pivot-marker",ei.visible=!1,ei.renderOrder=999,mn.add(ei),ei}function su(i){Ju=i,document.body.style.cursor=i?"crosshair":""}function R_(i){if(i&&Kt===en||!i&&Kt===Jt)return;const e=Kt.position.clone(),t=Kt.up.clone(),n=on.target.clone(),s=Ot.domElement.clientWidth/Ot.domElement.clientHeight;if(i){const o=Jt.fov,u=e.distanceTo(n),c=Math.tan(o*Math.PI/360)*u,f=c*s;en.left=-f,en.right=f,en.top=c,en.bottom=-c,en.near=Jt.near,en.far=Jt.far,en.position.copy(e),en.up.copy(t),en.lookAt(n),en.updateProjectionMatrix(),Kt=en}else Jt.aspect=s,Jt.near=en.near,Jt.far=en.far,Jt.position.copy(e),Jt.up.copy(t),Jt.lookAt(n),Jt.updateProjectionMatrix(),Kt=Jt;on.dispose(),on=new Zu(Kt,Ot.domElement),on.rotateSpeed=2,on.staticMoving=!0,on.target.copy(n),on.update()}var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nh={};(function(i){(function(e,t){if(e.setImmediate)return;var n=1,s={},o=!1,u=e.document,c;function f(F){return s[n]=p.apply(t,F),n++}function p(F){var P=[].slice.call(arguments,1);return function(){typeof F=="function"?F.apply(t,P):new Function(""+F)()}}function v(F){if(o)setTimeout(p(v,F),0);else{var P=s[F];if(P){o=!0;try{P()}finally{M(F),o=!1}}}}function M(F){delete s[F]}function S(){c=function(){var F=f(arguments);return process.nextTick(p(v,F)),F}}function y(){if(e.postMessage&&!e.importScripts){var F=!0,P=e.onmessage;return e.onmessage=function(){F=!1},e.postMessage("","*"),e.onmessage=P,F}}function A(){var F="setImmediate$"+Math.random()+"$",P=function(J){J.source===e&&typeof J.data=="string"&&J.data.indexOf(F)===0&&v(+J.data.slice(F.length))};e.addEventListener?e.addEventListener("message",P,!1):e.attachEvent("onmessage",P),c=function(){var J=f(arguments);return e.postMessage(F+J,"*"),J}}function T(){var F=new MessageChannel;F.port1.onmessage=function(P){var J=P.data;v(J)},c=function(){var P=f(arguments);return F.port2.postMessage(P),P}}function x(){var F=u.documentElement;c=function(){var P=f(arguments),J=u.createElement("script");return J.onreadystatechange=function(){v(P),J.onreadystatechange=null,F.removeChild(J),J=null},F.appendChild(J),P}}function g(){c=function(){var F=f(arguments);return setTimeout(p(v,F),0),F}}var k=Object.getPrototypeOf&&Object.getPrototypeOf(e);k=k&&k.setTimeout?k:e,{}.toString.call(e.process)==="[object process]"?S():y()?A():e.MessageChannel?T():u&&"onreadystatechange"in u.createElement("script")?x():g(),k.setImmediate=c,k.clearImmediate=M})(new Function("return this")()),(function(e,t){e.promhx=e.promhx||{},e.core=e.core||{},e.eval=e.eval||{},e.exe=e.exe||{},e.geom=e.geom||{};var n={},s=function(){return $.__string_rec(this,"")},o=o||{},u;function c(r,a){var l=Object.create(r);for(var h in a)l[h]=a[h];return a.toString!==Object.prototype.toString&&(l.toString=a.toString),l}var f=function(){};n.HxOverrides=f,f.__name__="HxOverrides",f.strDate=function(r){switch(r.length){case 8:var l=r.split(":"),a=new Date;return a.setTime(0),a.setUTCHours(l[0]),a.setUTCMinutes(l[1]),a.setUTCSeconds(l[2]),a;case 10:var l=r.split("-");return new Date(l[0],l[1]-1,l[2],0,0,0);case 19:var l=r.split(" "),h=l[0].split("-"),d=l[1].split(":");return new Date(h[0],h[1]-1,h[2],d[0],d[1],d[2]);default:throw x.thrown("Invalid date format : "+r)}},f.cca=function(r,a){var l=r.charCodeAt(a);if(l==l)return l},f.substr=function(r,a,l){if(l==null)l=r.length;else if(l<0)if(a==0)l=r.length+l;else return"";return r.substr(a,l)},f.now=function(){return Date.now()};var p=function(){};n.Lambda=p,p.__name__="Lambda",p.fold=function(r,a,l){for(var h=Be(r);h.hasNext();){var d=h.next();l=a(d,l)}return l},Math.__name__="Math";var v=function(){};n.Reflect=v,v.__name__="Reflect",v.field=function(r,a){try{return r[a]}catch{return null}},v.fields=function(r){var a=[];if(r!=null){var l=Object.prototype.hasOwnProperty;for(var h in r)h!="__id__"&&h!="hx__closures__"&&l.call(r,h)&&a.push(h)}return a},v.isFunction=function(r){return typeof r=="function"?!(r.__name__||r.__ename__):!1},v.deleteField=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)?(delete r[a],!0):!1};var M=function(){};n.Std=M,M.__name__="Std",M.string=function(r){return $.__string_rec(r,"")};var S=function(){this.b=""};n.StringBuf=S,S.__name__="StringBuf",S.prototype={__class__:S};var y=o.ValueType={__ename__:"ValueType",__constructs__:null,TNull:{_hx_name:"TNull",_hx_index:0,__enum__:"ValueType",toString:s},TInt:{_hx_name:"TInt",_hx_index:1,__enum__:"ValueType",toString:s},TFloat:{_hx_name:"TFloat",_hx_index:2,__enum__:"ValueType",toString:s},TBool:{_hx_name:"TBool",_hx_index:3,__enum__:"ValueType",toString:s},TObject:{_hx_name:"TObject",_hx_index:4,__enum__:"ValueType",toString:s},TFunction:{_hx_name:"TFunction",_hx_index:5,__enum__:"ValueType",toString:s},TClass:(u=function(r){return{_hx_index:6,c:r,__enum__:"ValueType",toString:s}},u._hx_name="TClass",u.__params__=["c"],u),TEnum:(u=function(r){return{_hx_index:7,e:r,__enum__:"ValueType",toString:s}},u._hx_name="TEnum",u.__params__=["e"],u),TUnknown:{_hx_name:"TUnknown",_hx_index:8,__enum__:"ValueType",toString:s}};y.__constructs__=[y.TNull,y.TInt,y.TFloat,y.TBool,y.TObject,y.TFunction,y.TClass,y.TEnum,y.TUnknown];var A=function(){};n.Type=A,A.__name__="Type",A.createEnum=function(r,a,l){var h=v.field(r,a);if(h==null)throw x.thrown("No such constructor "+a);if(v.isFunction(h)){if(l==null)throw x.thrown("Constructor "+a+" need parameters");return h.apply(r,l)}if(l!=null&&l.length!=0)throw x.thrown("Constructor "+a+" does not need parameters");return h},A.typeof=function(r){switch(typeof r){case"boolean":return y.TBool;case"function":return r.__name__||r.__ename__?y.TObject:y.TFunction;case"number":return Math.ceil(r)==r%2147483648?y.TInt:y.TFloat;case"object":if(r==null)return y.TNull;var a=r.__enum__;if(a!=null)return y.TEnum(o[a]);var l=$.getClass(r);return l!=null?y.TClass(l):y.TObject;case"string":return y.TClass(String);case"undefined":return y.TNull;default:return y.TUnknown}},A.enumParameters=function(r){var a=o[r.__enum__],l=a.__constructs__[r._hx_index].__params__;if(l!=null){for(var h=[],d=0;d<l.length;){var m=l[d];++d,h.push(r[m])}return h}else return[]};var T=function(){};n["haxe.IMap"]=T,T.__name__="haxe.IMap",T.__isInterface__=!0;var x=function(r,a,l){Error.call(this,r),this.message=r,this.__previousException=a,this.__nativeException=l??this};n["haxe.Exception"]=x,x.__name__="haxe.Exception",x.caught=function(r){return r instanceof x?r:r instanceof Error?new x(r.message,null,r):new P(r,null,r)},x.thrown=function(r){if(r instanceof x)return r.get_native();if(r instanceof Error)return r;var a=new P(r);return a},x.__super__=Error,x.prototype=c(Error.prototype,{unwrap:function(){return this.__nativeException},get_native:function(){return this.__nativeException},__class__:x});var g=function(){this.buf=new S,this.cache=[],this.useCache=g.USE_CACHE,this.useEnumIndex=g.USE_ENUM_INDEX,this.shash=new R,this.scount=0};n["haxe.Serializer"]=g,g.__name__="haxe.Serializer",g.prototype={toString:function(){return this.buf.b},serializeString:function(r){var a=this.shash.h[r];if(a!=null){this.buf.b+="R",this.buf.b+=a==null?"null":""+a;return}this.shash.h[r]=this.scount++,this.buf.b+="y",r=encodeURIComponent(r),this.buf.b+=M.string(r.length),this.buf.b+=":",this.buf.b+=r==null?"null":""+r},serializeRef:function(r){for(var a=typeof r,l=0,h=this.cache.length;l<h;){var d=l++,m=this.cache[d];if(typeof m==a&&m==r)return this.buf.b+="r",this.buf.b+=d==null?"null":""+d,!0}return this.cache.push(r),!1},serializeFields:function(r){for(var a=0,l=v.fields(r);a<l.length;){var h=l[a];++a,this.serializeString(h),this.serialize(v.field(r,h))}this.buf.b+="g"},serialize:function(r){var a=A.typeof(r);switch(a._hx_index){case 0:this.buf.b+="n";break;case 1:var l=r;if(l==0){this.buf.b+="z";return}this.buf.b+="i",this.buf.b+=l==null?"null":""+l;break;case 2:var l=r;isNaN(l)?this.buf.b+="k":isFinite(l)?(this.buf.b+="d",this.buf.b+=l==null?"null":""+l):this.buf.b+=l<0?"m":"p";break;case 3:this.buf.b+=r?"t":"f";break;case 4:if($.__instanceof(r,et)){var h=r.__name__;this.buf.b+="A",this.serializeString(h)}else if($.__instanceof(r,zn))this.buf.b+="B",this.serializeString(r.__ename__);else{if(this.useCache&&this.serializeRef(r))return;this.buf.b+="o",this.serializeFields(r)}break;case 5:throw x.thrown("Cannot serialize function");case 6:var d=a.c;if(d==String){this.serializeString(r);return}if(this.useCache&&this.serializeRef(r))return;switch(d){case Array:var m=0;this.buf.b+="a";for(var b=r.length,w=0,E=b;w<E;){var pe=w++;r[pe]==null?++m:(m>0&&(m==1?this.buf.b+="n":(this.buf.b+="u",this.buf.b+=m==null?"null":""+m),m=0),this.serialize(r[pe]))}m>0&&(m==1?this.buf.b+="n":(this.buf.b+="u",this.buf.b+=m==null?"null":""+m)),this.buf.b+="h";break;case Date:var U=r;this.buf.b+="v",this.buf.b+=M.string(U.getTime());break;case J:this.buf.b+="q";for(var l=r,B=l.keys();B.hasNext();){var C=B.next();this.buf.b+=":",this.buf.b+=C==null?"null":""+C,this.serialize(l.h[C])}this.buf.b+="h";break;case O:this.buf.b+="l";for(var l=r,I=l.h;I!=null;){var z=I.item;I=I.next;var pe=z;this.serialize(pe)}this.buf.b+="h";break;case X:this.buf.b+="M";for(var l=r,B=l.keys();B.hasNext();){var C=B.next(),H=v.field(C,"__id__");v.deleteField(C,"__id__"),this.serialize(C),C.__id__=H,this.serialize(l.h[C.__id__])}this.buf.b+="h";break;case R:this.buf.b+="b";for(var l=r,K=l.h,q=Object.keys(K),ee=q.length,se=0;se<ee;){var B=q[se++];this.serializeString(B),this.serialize(l.h[B])}this.buf.b+="h";break;case G:var l=r;this.buf.b+="s",this.buf.b+=M.string(Math.ceil(l.length*8/6)),this.buf.b+=":";var pe=0,xe=l.length-2,be=g.BASE64_CODES;if(be==null){be=new Array(g.BASE64.length);for(var w=0,E=g.BASE64.length;w<E;){var Ce=w++;be[Ce]=f.cca(g.BASE64,Ce)}g.BASE64_CODES=be}for(;pe<xe;){var Te=l.b[pe++],Le=l.b[pe++],st=l.b[pe++];this.buf.b+=String.fromCodePoint(be[Te>>2]),this.buf.b+=String.fromCodePoint(be[(Te<<4|Le>>4)&63]),this.buf.b+=String.fromCodePoint(be[(Le<<2|st>>6)&63]),this.buf.b+=String.fromCodePoint(be[st&63])}if(pe==xe){var Te=l.b[pe++],Le=l.b[pe++];this.buf.b+=String.fromCodePoint(be[Te>>2]),this.buf.b+=String.fromCodePoint(be[(Te<<4|Le>>4)&63]),this.buf.b+=String.fromCodePoint(be[Le<<2&63])}else if(pe==xe+1){var Te=l.b[pe++];this.buf.b+=String.fromCodePoint(be[Te>>2]),this.buf.b+=String.fromCodePoint(be[Te<<4&63])}break;default:this.useCache&&this.cache.pop(),r.hxSerialize!=null?(this.buf.b+="C",this.serializeString(d.__name__),this.useCache&&this.cache.push(r),r.hxSerialize(this),this.buf.b+="g"):(this.buf.b+="c",this.serializeString(d.__name__),this.useCache&&this.cache.push(r),this.serializeFields(r))}break;case 7:var Ke=a.e;if(this.useCache){if(this.serializeRef(r))return;this.cache.pop()}if(this.buf.b+=M.string(this.useEnumIndex?"j":"w"),this.serializeString(Ke.__ename__),this.useEnumIndex)this.buf.b+=":",this.buf.b+=M.string(r._hx_index);else{var Ke=r;this.serializeString(o[Ke.__enum__].__constructs__[Ke._hx_index]._hx_name)}this.buf.b+=":";var We=A.enumParameters(r);this.buf.b+=M.string(We.length);for(var a=0;a<We.length;){var ot=We[a];++a,this.serialize(ot)}this.useCache&&this.cache.push(r);break;default:throw x.thrown("Cannot serialize "+M.string(r))}},__class__:g};var k=function(){};n["haxe._Unserializer.DefaultResolver"]=k,k.__name__="haxe._Unserializer.DefaultResolver",k.prototype={resolveClass:function(r){return n[r]},resolveEnum:function(r){return o[r]},__class__:k};var F=function(r){this.buf=r,this.length=this.buf.length,this.pos=0,this.scache=[],this.cache=[];var a=F.DEFAULT_RESOLVER;a==null&&(a=new k,F.DEFAULT_RESOLVER=a),this.resolver=a};n["haxe.Unserializer"]=F,F.__name__="haxe.Unserializer",F.initCodes=function(){for(var r=[],a=0,l=F.BASE64.length;a<l;){var h=a++;r[F.BASE64.charCodeAt(h)]=h}return r},F.prototype={readDigits:function(){for(var r=0,a=!1,l=this.pos;;){var h=this.buf.charCodeAt(this.pos);if(h!=h)break;if(h==45){if(this.pos!=l)break;a=!0,this.pos++;continue}if(h<48||h>57)break;r=r*10+(h-48),this.pos++}return a&&(r*=-1),r},readFloat:function(){for(var r=this.pos;;){var a=this.buf.charCodeAt(this.pos);if(a!=a)break;if(a>=43&&a<58||a==101||a==69)this.pos++;else break}return parseFloat(f.substr(this.buf,r,this.pos-r))},unserializeObject:function(r){for(;;){if(this.pos>=this.length)throw x.thrown("Invalid object");if(this.buf.charCodeAt(this.pos)==103)break;var a=this.unserialize();if(typeof a!="string")throw x.thrown("Invalid object key");var l=this.unserialize();r[a]=l}this.pos++},unserializeEnum:function(r,a){if(this.buf.charCodeAt(this.pos++)!=58)throw x.thrown("Invalid enum format");var l=this.readDigits();if(l==0)return A.createEnum(r,a);for(var h=[];l-- >0;)h.push(this.unserialize());return A.createEnum(r,a,h)},unserialize:function(){switch(this.buf.charCodeAt(this.pos++)){case 65:var We=this.unserialize(),l=this.resolver.resolveClass(We);if(l==null)throw x.thrown("Class not found "+We);return l;case 66:var We=this.unserialize(),ft=this.resolver.resolveEnum(We);if(ft==null)throw x.thrown("Enum not found "+We);return ft;case 67:var We=this.unserialize(),l=this.resolver.resolveClass(We);if(l==null)throw x.thrown("Class not found "+We);var C=Object.create(l.prototype);if(this.cache.push(C),C.hxUnserialize(this),this.buf.charCodeAt(this.pos++)!=103)throw x.thrown("Invalid custom data");return C;case 77:var I=new X;this.cache.push(I);for(var H=this.buf;this.buf.charCodeAt(this.pos)!=104;){var Rt=this.unserialize();I.set(Rt,this.unserialize())}return this.pos++,I;case 82:var B=this.readDigits();if(B<0||B>=this.scache.length)throw x.thrown("Invalid string reference");return this.scache[B];case 97:var H=this.buf,r=[];for(this.cache.push(r);;){var z=this.buf.charCodeAt(this.pos);if(z==104){this.pos++;break}if(z==117){this.pos++;var B=this.readDigits();r[r.length+B-1]=null}else r.push(this.unserialize())}return r;case 98:var I=new R;this.cache.push(I);for(var H=this.buf;this.buf.charCodeAt(this.pos)!=104;){var Rt=this.unserialize(),a=this.unserialize();I.h[Rt]=a}return this.pos++,I;case 99:var We=this.unserialize(),l=this.resolver.resolveClass(We);if(l==null)throw x.thrown("Class not found "+We);var C=Object.create(l.prototype);return this.cache.push(C),this.unserializeObject(C),C;case 100:return this.readFloat();case 102:return!1;case 105:return this.readDigits();case 106:var We=this.unserialize(),ot=this.resolver.resolveEnum(We);if(ot==null)throw x.thrown("Enum not found "+We);this.pos++;for(var h=this.readDigits(),d=ot.__constructs__,m=new Array(d.length),b=0,w=d.length;b<w;){var q=b++;m[q]=d[q]._hx_name}var E=m[h];if(E==null)throw x.thrown("Unknown enum index "+We+"@"+h);var ft=this.unserializeEnum(ot,E);return this.cache.push(ft),ft;case 107:return NaN;case 108:var U=new O;this.cache.push(U);for(var H=this.buf;this.buf.charCodeAt(this.pos)!=104;)U.add(this.unserialize());return this.pos++,U;case 109:return-1/0;case 110:return null;case 111:var C={};return this.cache.push(C),this.unserializeObject(C),C;case 112:return 1/0;case 113:var I=new J;this.cache.push(I);for(var H=this.buf,z=this.buf.charCodeAt(this.pos++);z==58;){var q=this.readDigits(),a=this.unserialize();I.h[q]=a,z=this.buf.charCodeAt(this.pos++)}if(z!=104)throw x.thrown("Invalid IntMap format");return I;case 114:var B=this.readDigits();if(B<0||B>=this.cache.length)throw x.thrown("Invalid reference");return this.cache[B];case 115:var Mt=this.readDigits(),H=this.buf;if(this.buf.charCodeAt(this.pos++)!=58||this.length-this.pos<Mt)throw x.thrown("Invalid bytes length");var K=F.CODES;K==null&&(K=F.initCodes(),F.CODES=K);for(var q=this.pos,ee=Mt&3,se=(Mt>>2)*3+(ee>=2?ee-1:0),pe=q+(Mt-ee),xe=new G(new ArrayBuffer(se)),be=0;q<pe;){var Ce=K[H.charCodeAt(q++)],Te=K[H.charCodeAt(q++)];xe.b[be++]=Ce<<2|Te>>4;var Le=K[H.charCodeAt(q++)];xe.b[be++]=Te<<4|Le>>2;var st=K[H.charCodeAt(q++)];xe.b[be++]=Le<<6|st}if(ee>=2){var Ce=K[H.charCodeAt(q++)],Te=K[H.charCodeAt(q++)];if(xe.b[be++]=Ce<<2|Te>>4,ee==3){var Le=K[H.charCodeAt(q++)];xe.b[be++]=Te<<4|Le>>2}}return this.pos+=Mt,this.cache.push(xe),xe;case 116:return!0;case 118:var Ke;return this.buf.charCodeAt(this.pos)>=48&&this.buf.charCodeAt(this.pos)<=57&&this.buf.charCodeAt(this.pos+1)>=48&&this.buf.charCodeAt(this.pos+1)<=57&&this.buf.charCodeAt(this.pos+2)>=48&&this.buf.charCodeAt(this.pos+2)<=57&&this.buf.charCodeAt(this.pos+3)>=48&&this.buf.charCodeAt(this.pos+3)<=57&&this.buf.charCodeAt(this.pos+4)==45?(Ke=f.strDate(f.substr(this.buf,this.pos,19)),this.pos+=19):Ke=new Date(this.readFloat()),this.cache.push(Ke),Ke;case 119:var We=this.unserialize(),ot=this.resolver.resolveEnum(We);if(ot==null)throw x.thrown("Enum not found "+We);var ft=this.unserializeEnum(ot,this.unserialize());return this.cache.push(ft),ft;case 120:throw x.thrown(this.unserialize());case 121:var Mt=this.readDigits();if(this.buf.charCodeAt(this.pos++)!=58||this.length-this.pos<Mt)throw x.thrown("Invalid string length");var Rt=f.substr(this.buf,this.pos,Mt);return this.pos+=Mt,Rt=decodeURIComponent(Rt.split("+").join(" ")),this.scache.push(Rt),Rt;case 122:return 0}throw this.pos--,x.thrown("Invalid char "+this.buf.charAt(this.pos)+" at position "+this.pos)},__class__:F};var P=function(r,a,l){x.call(this,String(r),a,l),this.value=r};n["haxe.ValueException"]=P,P.__name__="haxe.ValueException",P.__super__=x,P.prototype=c(x.prototype,{unwrap:function(){return this.value},__class__:P});var J=function(){this.h={}};n["haxe.ds.IntMap"]=J,J.__name__="haxe.ds.IntMap",J.__interfaces__=[T],J.prototype={remove:function(r){return this.h.hasOwnProperty(r)?(delete this.h[r],!0):!1},keys:function(){var r=[];for(var a in this.h)this.h.hasOwnProperty(a)&&r.push(+a);return new re(r)},__class__:J};var O=function(){this.length=0};n["haxe.ds.List"]=O,O.__name__="haxe.ds.List",O.prototype={add:function(r){var a=new W(r,null);this.h==null?this.h=a:this.q.next=a,this.q=a,this.length++},pop:function(){if(this.h==null)return null;var r=this.h.item;return this.h=this.h.next,this.h==null&&(this.q=null),this.length--,r},isEmpty:function(){return this.h==null},__class__:O};var W=function(r,a){this.item=r,this.next=a};n["haxe.ds._List.ListNode"]=W,W.__name__="haxe.ds._List.ListNode",W.prototype={__class__:W};var X=function(){this.h={__keys__:{}}};n["haxe.ds.ObjectMap"]=X,X.__name__="haxe.ds.ObjectMap",X.__interfaces__=[T],X.prototype={set:function(r,a){var l=r.__id__;l==null&&(l=r.__id__=t.$haxeUID++),this.h[l]=a,this.h.__keys__[l]=r},keys:function(){var r=[];for(var a in this.h.__keys__)this.h.hasOwnProperty(a)&&r.push(this.h.__keys__[a]);return new re(r)},__class__:X};var N=o["haxe.ds.Option"]={__ename__:"haxe.ds.Option",__constructs__:null,Some:(u=function(r){return{_hx_index:0,v:r,__enum__:"haxe.ds.Option",toString:s}},u._hx_name="Some",u.__params__=["v"],u),None:{_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:s}};N.__constructs__=[N.Some,N.None];var R=function(){this.h=Object.create(null)};n["haxe.ds.StringMap"]=R,R.__name__="haxe.ds.StringMap",R.__interfaces__=[T],R.prototype={__class__:R};var G=function(r){this.length=r.byteLength,this.b=new Uint8Array(r),this.b.bufferValue=r,r.hxBytes=this,r.bytes=this.b};n["haxe.io.Bytes"]=G,G.__name__="haxe.io.Bytes",G.prototype={__class__:G};var re=function(r){this.current=0,this.array=r};n["haxe.iterators.ArrayIterator"]=re,re.__name__="haxe.iterators.ArrayIterator",re.prototype={hasNext:function(){return this.current<this.array.length},next:function(){return this.array[this.current++]},__class__:re};var $=function(){};n["js.Boot"]=$,$.__name__="js.Boot",$.getClass=function(r){if(r==null)return null;if(r instanceof Array)return Array;var a=r.__class__;if(a!=null)return a;var l=$.__nativeClassName(r);return l!=null?$.__resolveNativeClass(l):null},$.__string_rec=function(r,a){if(r==null)return"null";if(a.length>=5)return"<...>";var l=typeof r;switch(l=="function"&&(r.__name__||r.__ename__)&&(l="object"),l){case"function":return"<function>";case"object":if(r.__enum__){var h=o[r.__enum__],d=h.__constructs__[r._hx_index],m=d._hx_name;return d.__params__?(a=a+"	",m+"("+(function(H){for(var K,q=[],ee=0,se=d.__params__;ee<se.length;){var pe=se[ee];ee=ee+1,q.push($.__string_rec(r[pe],a))}return K=q,K})().join(",")+")"):m}if(r instanceof Array){var I="[";a+="	";for(var b=0,w=r.length;b<w;){var E=b++;I+=(E>0?",":"")+$.__string_rec(r[E],a)}return I+="]",I}var U;try{U=r.toString}catch{return"???"}if(U!=null&&U!=Object.toString&&typeof U=="function"){var C=r.toString();if(C!="[object Object]")return C}var I=`{
`;a+="	";var z=r.hasOwnProperty!=null,B=null;for(B in r)z&&!r.hasOwnProperty(B)||B=="prototype"||B=="__class__"||B=="__super__"||B=="__interfaces__"||B=="__properties__"||(I.length!=2&&(I+=`, 
`),I+=a+B+" : "+$.__string_rec(r[B],a));return a=a.substring(1),I+=`
`+a+"}",I;case"string":return r;default:return String(r)}},$.__interfLoop=function(r,a){if(r==null)return!1;if(r==a)return!0;var l=r.__interfaces__;if(l!=null)for(var h=0,d=l.length;h<d;){var m=h++,b=l[m];if(b==a||$.__interfLoop(b,a))return!0}return $.__interfLoop(r.__super__,a)},$.__instanceof=function(r,a){if(a==null)return!1;switch(a){case Array:return r instanceof Array;case Bt:return typeof r=="boolean";case jt:return r!=null;case gn:return typeof r=="number";case Xt:return typeof r=="number"?(r|0)===r:!1;case String:return typeof r=="string";default:if(r!=null){if(typeof a=="function"){if($.__downcastCheck(r,a))return!0}else if(typeof a=="object"&&$.__isNativeObj(a)&&r instanceof a)return!0}else return!1;return a==et&&r.__name__!=null||a==zn&&r.__ename__!=null?!0:r.__enum__!=null?o[r.__enum__]==a:!1}},$.__downcastCheck=function(r,a){return r instanceof a?!0:a.__isInterface__?$.__interfLoop($.getClass(r),a):!1},$.__nativeClassName=function(r){var a=$.__toStr.call(r).slice(8,-1);return a=="Object"||a=="Function"||a=="Math"||a=="JSON"?null:a},$.__isNativeObj=function(r){return $.__nativeClassName(r)!=null},$.__resolveNativeClass=function(r){return t[r]};var Q=function(r){if(this._resolved=!1,this._pending=!1,this._errorPending=!1,this._fulfilled=!1,this._update=[],this._error=[],this._errored=!1,r!=null){var a=this,l=function(h){return h};r._update.push({async:a,linkf:function(h){a.handleResolve(l(h))}}),Q.immediateLinkUpdate(r,a,l)}};n["promhx.base.AsyncBase"]=Q,Q.__name__="promhx.base.AsyncBase",Q.link=function(r,a,l){r._update.push({async:a,linkf:function(h){a.handleResolve(l(h))}}),Q.immediateLinkUpdate(r,a,l)},Q.immediateLinkUpdate=function(r,a,l){if(r._errored&&!r._errorPending&&r._error.length<=0&&a.handleError(r._errorVal),r._resolved&&!r._pending)try{a.handleResolve(l(r._val))}catch(d){var h=x.caught(d).unwrap();a.handleError(h)}},Q.linkAll=function(r,a){for(var l=function(I,z,B){if(I.length==0||Q.allFulfilled(I)){for(var H=[],K=Be(r);K.hasNext();){var q=K.next();H.push(q==z?B:q._val)}var ee=H;a.handleResolve(ee)}},h=Be(r);h.hasNext();){for(var d=h.next(),m=d._update,b=a,w=[l],E=[],U=Be(r);U.hasNext();){var C=U.next();C!=d&&E.push(C)}m.push({async:b,linkf:(function(I,z,B){return function(H){I[0](B[0],z[0],H)}})(w,[d],[E])})}if(Q.allFulfilled(r)){for(var b=a,E=[],h=Be(r);h.hasNext();){var d=h.next();E.push(d._val)}b.handleResolve(E)}},Q.pipeLink=function(r,a,l){var h=!1,d=function(b){if(!h){h=!0;var w=l(b);w._update.push({async:a,linkf:_t(a,a.handleResolve)}),Q.immediateLinkUpdate(w,a,function(E){return E})}};if(r._update.push({async:a,linkf:d}),r._resolved&&!r._pending)try{d(r._val)}catch(b){var m=x.caught(b).unwrap();a.handleError(m)}},Q.allResolved=function(r){for(var a=Be(r);a.hasNext();){var l=a.next();if(!l._resolved)return!1}return!0},Q.allFulfilled=function(r){for(var a=Be(r);a.hasNext();){var l=a.next();if(!l._fulfilled)return!1}return!0},Q.prototype={catchError:function(r){return this._error.push(r),this},errorThen:function(r){return this._errorMap=r,this},isResolved:function(){return this._resolved},isErrored:function(){return this._errored},isErrorHandled:function(){return this._error.length>0},isErrorPending:function(){return this._errorPending},isFulfilled:function(){return this._fulfilled},isPending:function(){return this._pending},handleResolve:function(r){this._resolve(r)},_resolve:function(r){var a=this;if(this._pending){var l=this,h=r,d=function(){l._resolve(h)};_e.queue.add(d),_e.continueOnNextLoop()}else this._resolved=!0,this._pending=!0,_e.queue.add(function(){a._val=r;for(var m=0,b=a._update;m<b.length;){var w=b[m];++m;try{w.linkf(r)}catch(U){var E=x.caught(U).unwrap();w.async.handleError(E)}}a._fulfilled=!0,a._pending=!1}),_e.continueOnNextLoop()},handleError:function(r){this._handleError(r)},_handleError:function(r){var a=this,l=function(h){if(a._error.length>0)for(var d=0,m=a._error;d<m.length;){var b=m[d];++d,b(h)}else if(a._update.length>0)for(var d=0,m=a._update;d<m.length;){var w=m[d];++d,w.async.handleError(h)}else throw x.thrown(h);a._errorPending=!1};this._errorPending||(this._errorPending=!0,this._errored=!0,this._errorVal=r,_e.queue.add(function(){if(a._errorMap!=null)try{a._resolve(a._errorMap(r))}catch(d){var h=x.caught(d).unwrap();l(h)}else l(r)}),_e.continueOnNextLoop())},then:function(r){var a=new Q(null),l=a,h=r;return this._update.push({async:l,linkf:function(d){l.handleResolve(h(d))}}),Q.immediateLinkUpdate(this,l,h),a},unlink:function(r){var a=this;_e.queue.add(function(){for(var l=[],h=0,d=a._update;h<d.length;){var m=d[h];++h,m.async!=r&&l.push(m)}a._update=l}),_e.continueOnNextLoop()},isLinked:function(r){for(var a=!1,l=0,h=this._update;l<h.length;){var d=h[l];if(++l,d.async==r)return!0}return a},__class__:Q};var de=e.promhx.Deferred=function(){Q.call(this)};n["promhx.Deferred"]=de,de.__name__="promhx.Deferred",de.__super__=Q,de.prototype=c(Q.prototype,{resolve:function(r){this.handleResolve(r)},throwError:function(r){this.handleError(r)},promise:function(){return new le(this)},stream:function(){return new ge(this)},publicStream:function(){return new he(this)},__class__:de});var le=e.promhx.Promise=function(r){Q.call(this,r),this._rejected=!1};n["promhx.Promise"]=le,le.__name__="promhx.Promise",le.whenAll=function(r){for(var a=new le(null),l=r,h=a,d=function(B,H,K){if(B.length==0||Q.allFulfilled(B)){for(var q=[],ee=Be(l);ee.hasNext();){var se=ee.next();q.push(se==H?K:se._val)}var pe=q;h.handleResolve(pe)}},m=Be(l);m.hasNext();){for(var b=m.next(),w=b._update,E=h,U=[d],C=[],I=Be(l);I.hasNext();){var z=I.next();z!=b&&C.push(z)}w.push({async:E,linkf:(function(B,H,K){return function(q){K[0](H[0],B[0],q)}})([b],[C],U)})}if(Q.allFulfilled(l)){for(var E=h,C=[],m=Be(l);m.hasNext();){var b=m.next();C.push(b._val)}E.handleResolve(C)}return a},le.promise=function(r){var a=new le;return a.handleResolve(r),a},le.__super__=Q,le.prototype=c(Q.prototype,{isRejected:function(){return this._rejected},reject:function(r){this._rejected=!0,this.handleError(r)},handleResolve:function(r){if(this._resolved){var a="Promise has already been resolved";throw x.thrown(De.AlreadyResolved(a))}this._resolve(r)},then:function(r){var a=new le(null),l=a,h=r;return this._update.push({async:l,linkf:function(d){l.handleResolve(h(d))}}),Q.immediateLinkUpdate(this,l,h),a},unlink:function(r){var a=this;_e.queue.add(function(){if(a._fulfilled){for(var h=[],d=0,m=a._update;d<m.length;){var b=m[d];++d,b.async!=r&&h.push(b)}a._update=h}else{var l="Downstream Promise is not fullfilled";a.handleError(De.DownstreamNotFullfilled(l))}}),_e.continueOnNextLoop()},handleError:function(r){this._rejected=!0,this._handleError(r)},pipe:function(r){var a=new le(null),l=a,h=r,d=!1,m=function(w){if(!d){d=!0;var E=h(w);E._update.push({async:l,linkf:_t(l,l.handleResolve)}),Q.immediateLinkUpdate(E,l,function(U){return U})}};if(this._update.push({async:l,linkf:m}),this._resolved&&!this._pending)try{m(this._val)}catch(w){var b=x.caught(w).unwrap();l.handleError(b)}return a},errorPipe:function(r){var a=new le;return this.catchError(function(l){var h=r(l);h.then(_t(a,a._resolve))}),this.then(_t(a,a._resolve)),a},__class__:le});var ge=e.promhx.Stream=function(r){Q.call(this,r),this._end_promise=new le};n["promhx.Stream"]=ge,ge.__name__="promhx.Stream",ge.foreach=function(r){for(var a=new ge(null),l=Be(r);l.hasNext();){var h=l.next();a.handleResolve(h)}return a.end(),a},ge.wheneverAll=function(r){for(var a=new ge(null),l=r,h=a,d=function(B,H,K){if(B.length==0||Q.allFulfilled(B)){for(var q=[],ee=Be(l);ee.hasNext();){var se=ee.next();q.push(se==H?K:se._val)}var pe=q;h.handleResolve(pe)}},m=Be(l);m.hasNext();){for(var b=m.next(),w=b._update,E=h,U=[d],C=[],I=Be(l);I.hasNext();){var z=I.next();z!=b&&C.push(z)}w.push({async:E,linkf:(function(B,H,K){return function(q){K[0](H[0],B[0],q)}})([b],[C],U)})}if(Q.allFulfilled(l)){for(var E=h,C=[],m=Be(l);m.hasNext();){var b=m.next();C.push(b._val)}E.handleResolve(C)}return a},ge.concatAll=function(r){for(var a=new ge(null),l=Be(r);l.hasNext();){var h=l.next();a.concat(h)}return a},ge.mergeAll=function(r){for(var a=new ge(null),l=Be(r);l.hasNext();){var h=l.next();a.merge(h)}return a},ge.stream=function(r){var a=new ge(null);return a.handleResolve(r),a},ge.__super__=Q,ge.prototype=c(Q.prototype,{then:function(r){var a=new ge(null),l=a,h=r;return this._update.push({async:l,linkf:function(d){l.handleResolve(h(d))}}),Q.immediateLinkUpdate(this,l,h),this._end_promise._update.push({async:a._end_promise,linkf:function(d){a.end()}}),a},detachStream:function(r){for(var a=[],l=!1,h=0,d=this._update;h<d.length;){var m=d[h];if(++h,m.async==r){for(var b=[],w=0,E=this._end_promise._update;w<E.length;){var U=E[w];++w,U.async!=r._end_promise&&b.push(U)}this._end_promise._update=b,l=!0}else a.push(m)}return this._update=a,l},first:function(){var r=new le(null);return this.then(function(a){r._resolved||r.handleResolve(a)}),r},handleResolve:function(r){!this._end&&!this._pause&&this._resolve(r)},pause:function(r){r==null&&(r=!this._pause),this._pause=r},pipe:function(r){var a=new ge(null),l=a,h=r,d=!1,m=function(w){if(!d){d=!0;var E=h(w);E._update.push({async:l,linkf:_t(l,l.handleResolve)}),Q.immediateLinkUpdate(E,l,function(U){return U})}};if(this._update.push({async:l,linkf:m}),this._resolved&&!this._pending)try{m(this._val)}catch(w){var b=x.caught(w).unwrap();l.handleError(b)}return this._end_promise.then(function(w){a.end()}),a},errorPipe:function(r){var a=new ge(null);return this.catchError(function(l){var h=r(l);h.then(_t(a,a._resolve)),h._end_promise.then((u=a._end_promise,_t(u,u._resolve)))}),this.then(_t(a,a._resolve)),this._end_promise.then(function(l){a.end()}),a},handleEnd:function(){if(this._pending)_e.queue.add(_t(this,this.handleEnd)),_e.continueOnNextLoop();else{if(this._end_promise._resolved)return;this._end=!0;var r=this._resolved?N.Some(this._val):N.None;this._end_promise.handleResolve(r),this._update=[],this._error=[]}},end:function(){return _e.queue.add(_t(this,this.handleEnd)),_e.continueOnNextLoop(),this},endThen:function(r){return this._end_promise.then(r)},filter:function(r){var a=new ge(null);return this._update.push({async:a,linkf:function(l){r(l)&&a.handleResolve(l)}}),Q.immediateLinkUpdate(this,a,function(l){return l}),a},concat:function(r){var a=new ge(null);return this._update.push({async:a,linkf:_t(a,a.handleResolve)}),Q.immediateLinkUpdate(this,a,function(l){return l}),this._end_promise.then(function(l){r.pipe(function(h){return a.handleResolve(h),a}),r._end_promise.then(function(h){a.end()})}),a},merge:function(r){var a=new ge(null);return this._update.push({async:a,linkf:_t(a,a.handleResolve)}),r._update.push({async:a,linkf:_t(a,a.handleResolve)}),Q.immediateLinkUpdate(this,a,function(l){return l}),Q.immediateLinkUpdate(r,a,function(l){return l}),a},__class__:ge});var he=e.promhx.PublicStream=function(r){ge.call(this,r)};n["promhx.PublicStream"]=he,he.__name__="promhx.PublicStream",he.publicstream=function(r){var a=new he(null);return a.handleResolve(r),a},he.__super__=ge,he.prototype=c(ge.prototype,{resolve:function(r){this.handleResolve(r)},throwError:function(r){this.handleError(r)},update:function(r){this.handleResolve(r)},__class__:he});var _e=function(){};n["promhx.base.EventLoop"]=_e,_e.__name__="promhx.base.EventLoop",_e.enqueue=function(r){_e.queue.add(r),_e.continueOnNextLoop()},_e.set_nextLoop=function(r){if(_e.nextLoop!=null)throw x.thrown("nextLoop has already been set");return _e.nextLoop=r,_e.nextLoop},_e.queueEmpty=function(){return _e.queue.isEmpty()},_e.finish=function(r){r==null&&(r=1e3);for(var a=null;;){var l;if(r-- >0?(a=_e.queue.pop(),l=a!=null):l=!1,!l)break;a()}return _e.queue.isEmpty()},_e.clear=function(){_e.queue=new O},_e.f=function(){var r=_e.queue.pop();r?.(),_e.queue.isEmpty()||_e.continueOnNextLoop()},_e.continueOnNextLoop=function(){_e.nextLoop!=null?_e.nextLoop(_e.f):setImmediate(_e.f)};var De=o["promhx.error.PromiseError"]={__ename__:"promhx.error.PromiseError",__constructs__:null,AlreadyResolved:(u=function(r){return{_hx_index:0,message:r,__enum__:"promhx.error.PromiseError",toString:s}},u._hx_name="AlreadyResolved",u.__params__=["message"],u),DownstreamNotFullfilled:(u=function(r){return{_hx_index:1,message:r,__enum__:"promhx.error.PromiseError",toString:s}},u._hx_name="DownstreamNotFullfilled",u.__params__=["message"],u)};De.__constructs__=[De.AlreadyResolved,De.DownstreamNotFullfilled];var qe=function(){};n["verb.Verb"]=qe,qe.__name__="verb.Verb",qe.main=function(){console.log("src/verb/Verb.hx:48:",oe.VERSION)};var ce=function(){};n["verb.core.ArrayExtensions"]=ce,ce.__name__="verb.core.ArrayExtensions",ce.alloc=function(r,a){if(!(a<0))for(;r.length<a;)r.push(null)},ce.reversed=function(r){var a=r.slice();return a.reverse(),a},ce.last=function(r){return r[r.length-1]},ce.first=function(r){return r[0]},ce.spliceAndInsert=function(r,a,l,h){r.splice(a,l),r.splice(a,0,h)},ce.left=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(0,a)},ce.right=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(a)},ce.rightWithPivot=function(r){if(r.length==0)return[];var a=Math.ceil(r.length/2);return r.slice(a-1)},ce.unique=function(r,a){if(r.length==0)return[];for(var l=[r.pop()];r.length>0;){for(var h=r.pop(),d=!0,m=0;m<l.length;){var b=l[m];if(++m,a(h,b)){d=!1;break}}d&&l.push(h)}return l};var Xe=function(){};n["verb.core.Binomial"]=Xe,Xe.__name__="verb.core.Binomial",Xe.get=function(r,a){if(a==0)return 1;if(r==0||a>r)return 0;if(a>r-a&&(a=r-a),Xe.memo_exists(r,a))return Xe.get_memo(r,a);for(var l=1,h=r,d=1,m=a+1;d<m;){var b=d++;if(Xe.memo_exists(h,b)){--r,l=Xe.get_memo(h,b);continue}l*=r--,l/=b,Xe.memoize(h,b,l)}return l},Xe.get_no_memo=function(r,a){if(a==0)return 1;if(r==0||a>r)return 0;a>r-a&&(a=r-a);for(var l=1,h=1,d=a+1;h<d;){var m=h++;l*=r--,l/=m}return l},Xe.memo_exists=function(r,a){return Xe.memo.h.hasOwnProperty(r)?Xe.memo.h[r].h.hasOwnProperty(a):!1},Xe.get_memo=function(r,a){return Xe.memo.h[r].h[a]},Xe.memoize=function(r,a,l){if(!Xe.memo.h.hasOwnProperty(r)){var h=Xe.memo,d=new J;h.h[r]=d}Xe.memo.h[r].h[a]=l};var me=e.core.BoundingBox=function(r){this.max=null,this.min=null,this.dim=3,this.initialized=!1,r!=null&&this.addRange(r)};n["verb.core.BoundingBox"]=me,me.__name__="verb.core.BoundingBox",me.intervalsOverlap=function(r,a,l,h,d){d==null&&(d=-1);var m=d<-.5?oe.TOLERANCE:d,b=Math.min(r,a)-m,w=Math.max(r,a)+m,E=Math.min(l,h)-m,U=Math.max(l,h)+m;return b>=E&&b<=U||w>=E&&w<=U||E>=b&&E<=w?!0:U>=b?U<=w:!1},me.prototype={fromPoint:function(r){return new me([r])},add:function(r){if(!this.initialized)return this.dim=r.length,this.min=r.slice(0),this.max=r.slice(0),this.initialized=!0,this;for(var a=0,l=this.dim;a<l;){var h=a++;r[h]>this.max[h]&&(this.max[h]=r[h]),r[h]<this.min[h]&&(this.min[h]=r[h])}return this},addRange:function(r){for(var a=r.length,l=0,h=a;l<h;){var d=l++;this.add(r[d])}return this},contains:function(r,a){return a==null&&(a=-1),this.initialized?this.intersects(new me([r]),a):!1},intersects:function(r,a){if(a==null&&(a=-1),!this.initialized||!r.initialized)return!1;for(var l=this.min,h=this.max,d=r.min,m=r.max,b=0,w=this.dim;b<w;){var E=b++;if(!me.intervalsOverlap(l[E],h[E],d[E],m[E],a))return!1}return!0},clear:function(){return this.initialized=!1,this},getLongestAxis:function(){for(var r=0,a=0,l=0,h=this.dim;l<h;){var d=l++,m=this.getAxisLength(d);m>r&&(r=m,a=d)}return a},getAxisLength:function(r){return r<0||r>this.dim-1?0:Math.abs(this.min[r]-this.max[r])},intersect:function(r,a){if(!this.initialized)return null;var l=this.min,h=this.max,d=r.min,m=r.max;if(!this.intersects(r,a))return null;for(var b=[],w=[],E=0,U=this.dim;E<U;){var C=E++;b.push(Math.min(h[C],m[C])),w.push(Math.max(l[C],d[C]))}return new me([w,b])},__class__:me};var oe=e.core.Constants=function(){};n["verb.core.Constants"]=oe,oe.__name__="verb.core.Constants";var Pe=e.core.SerializableBase=function(){};n["verb.core.SerializableBase"]=Pe,Pe.__name__="verb.core.SerializableBase",Pe.prototype={serialize:function(){var r=new g;return r.serialize(this),r.toString()},__class__:Pe};var Ue=e.core.Plane=function(r,a){this.origin=r,this.normal=a};n["verb.core.Plane"]=Ue,Ue.__name__="verb.core.Plane",Ue.__super__=Pe,Ue.prototype=c(Pe.prototype,{__class__:Ue});var Qe=e.core.Ray=function(r,a){this.origin=r,this.dir=a};n["verb.core.Ray"]=Qe,Qe.__name__="verb.core.Ray",Qe.__super__=Pe,Qe.prototype=c(Pe.prototype,{__class__:Qe});var Ve=e.core.NurbsCurveData=function(r,a,l){this.degree=r,this.controlPoints=l,this.knots=a};n["verb.core.NurbsCurveData"]=Ve,Ve.__name__="verb.core.NurbsCurveData",Ve.__super__=Pe,Ve.prototype=c(Pe.prototype,{__class__:Ve});var Ze=e.core.NurbsSurfaceData=function(r,a,l,h,d){this.degreeU=r,this.degreeV=a,this.knotsU=l,this.knotsV=h,this.controlPoints=d};n["verb.core.NurbsSurfaceData"]=Ze,Ze.__name__="verb.core.NurbsSurfaceData",Ze.__super__=Pe,Ze.prototype=c(Pe.prototype,{__class__:Ze});var Pt=e.core.MeshData=function(r,a,l,h){this.faces=r,this.points=a,this.normals=l,this.uvs=h};n["verb.core.MeshData"]=Pt,Pt.__name__="verb.core.MeshData",Pt.empty=function(){return new Pt([],[],[],[])},Pt.__super__=Pe,Pt.prototype=c(Pe.prototype,{__class__:Pt});var St=e.core.PolylineData=function(r,a){this.points=r,this.params=a};n["verb.core.PolylineData"]=St,St.__name__="verb.core.PolylineData",St.__super__=Pe,St.prototype=c(Pe.prototype,{__class__:St});var lt=e.core.VolumeData=function(r,a,l,h,d,m,b){this.degreeU=r,this.degreeV=a,this.degreeW=l,this.knotsU=h,this.knotsV=d,this.knotsW=m,this.controlPoints=b};n["verb.core.VolumeData"]=lt,lt.__name__="verb.core.VolumeData",lt.__super__=Pe,lt.prototype=c(Pe.prototype,{__class__:lt});var Z=e.core.Pair=function(r,a){this.item0=r,this.item1=a};n["verb.core.Pair"]=Z,Z.__name__="verb.core.Pair",Z.prototype={__class__:Z};var Yt=e.core.Interval=function(r,a){this.min=r,this.max=a};n["verb.core.Interval"]=Yt,Yt.__name__="verb.core.Interval",Yt.prototype={__class__:Yt};var yt=e.core.CurveCurveIntersection=function(r,a,l,h){this.point0=r,this.point1=a,this.u0=l,this.u1=h};n["verb.core.CurveCurveIntersection"]=yt,yt.__name__="verb.core.CurveCurveIntersection",yt.prototype={__class__:yt};var Et=e.core.CurveSurfaceIntersection=function(r,a,l,h){this.u=r,this.uv=a,this.curvePoint=l,this.surfacePoint=h};n["verb.core.CurveSurfaceIntersection"]=Et,Et.__name__="verb.core.CurveSurfaceIntersection",Et.prototype={__class__:Et};var tt=e.core.MeshIntersectionPoint=function(r,a,l,h,d){this.visited=!1,this.adj=null,this.opp=null,this.uv0=r,this.uv1=a,this.point=l};n["verb.core.MeshIntersectionPoint"]=tt,tt.__name__="verb.core.MeshIntersectionPoint",tt.prototype={__class__:tt};var zt=e.core.PolylineMeshIntersection=function(r,a,l,h,d){this.point=r,this.u=a,this.uv=l,this.polylineIndex=h,this.faceIndex=d};n["verb.core.PolylineMeshIntersection"]=zt,zt.__name__="verb.core.PolylineMeshIntersection",zt.prototype={__class__:zt};var it=e.core.SurfaceSurfaceIntersectionPoint=function(r,a,l,h){this.uv0=r,this.uv1=a,this.point=l,this.dist=h};n["verb.core.SurfaceSurfaceIntersectionPoint"]=it,it.__name__="verb.core.SurfaceSurfaceIntersectionPoint",it.prototype={__class__:it};var V=e.core.TriSegmentIntersection=function(r,a,l,h){this.point=r,this.s=a,this.t=l,this.p=h};n["verb.core.TriSegmentIntersection"]=V,V.__name__="verb.core.TriSegmentIntersection",V.prototype={__class__:V};var D=e.core.CurveTriPoint=function(r,a,l){this.u=r,this.point=a,this.uv=l};n["verb.core.CurveTriPoint"]=D,D.__name__="verb.core.CurveTriPoint",D.prototype={__class__:D};var ae=function(r,a,l,h,d){d==null&&(d=!1),h==null&&(h=-1),this.uv=l,this.point=r,this.normal=a,this.id=h,this.degen=d};n["verb.core.SurfacePoint"]=ae,ae.__name__="verb.core.SurfacePoint",ae.fromUv=function(r,a){return new ae(null,null,[r,a])},ae.prototype={__class__:ae};var we=e.core.CurvePoint=function(r,a){this.u=r,this.pt=a};n["verb.core.CurvePoint"]=we,we.__name__="verb.core.CurvePoint",we.prototype={__class__:we};var Ee=e.core.KdTree=function(r,a){this.dim=3,this.points=r,this.distanceFunction=a,this.dim=r[0].point.length,this.root=this.buildTree(r,0,null)};n["verb.core.KdTree"]=Ee,Ee.__name__="verb.core.KdTree",Ee.prototype={buildTree:function(r,a,l){var h=a%this.dim;if(r.length==0)return null;if(r.length==1)return new Oe(r[0],h,l);r.sort(function(b,w){var E=b.point[h]-w.point[h];return E==0?0:E>0?1:-1});var d=Math.floor(r.length/2),m=new Oe(r[d],h,l);return m.left=this.buildTree(r.slice(0,d),a+1,m),m.right=this.buildTree(r.slice(d+1),a+1,m),m},nearest:function(r,a,l){var h=this,d=new Se(function(C){return-C.item1}),m=null;m=function(C){for(var I,z=C.dimension,B=h.distanceFunction(r,C.kdPoint.point),pe=[],xe=0,H=h.dim;xe<H;){var ee=xe++;pe.push(0)}for(var K=pe,q,ee,se=function(Ce,Te){d.push(new Z(Ce,Te)),d.size()>a&&d.pop()},pe=0,xe=h.dim;pe<xe;){var ee=pe++;ee==C.dimension?K[ee]=r[ee]:K[ee]=C.kdPoint.point[ee]}var be=h.distanceFunction(K,C.kdPoint.point);if(C.right==null&&C.left==null){(d.size()<a||B<d.peek().item1)&&se(C,B);return}C.right==null?I=C.left:C.left==null?I=C.right:r[z]<C.kdPoint.point[z]?I=C.left:I=C.right,m(I),(d.size()<a||B<d.peek().item1)&&se(C,B),(d.size()<a||Math.abs(be)<d.peek().item1)&&(I==C.left?q=C.right:q=C.left,q!=null&&m(q))};for(var E=0,U=a;E<U;){var b=E++;d.push(new Z(null,l))}m(this.root);for(var w=[],E=0,U=a;E<U;){var b=E++;d.content[b].item0!=null&&w.push(new Z(d.content[b].item0.kdPoint,d.content[b].item1))}return w},__class__:Ee};var Se=function(r){this.content=[],this.scoreFunction=r};n["verb.core.BinaryHeap"]=Se,Se.__name__="verb.core.BinaryHeap",Se.prototype={push:function(r){this.content.push(r),this.bubbleUp(this.content.length-1)},pop:function(){var r=this.content[0],a=this.content.pop();return this.content.length>0&&(this.content[0]=a,this.sinkDown(0)),r},peek:function(){return this.content[0]},remove:function(r){for(var a=this.content.length,l=0,h=a;l<h;){var d=l++;if(this.content[d]==r){var m=this.content.pop();d!=a-1&&(this.content[d]=m,this.scoreFunction(m)<this.scoreFunction(r)?this.bubbleUp(d):this.sinkDown(d));return}}throw x.thrown("Node not found.")},size:function(){return this.content.length},bubbleUp:function(r){for(var a=this.content[r];r>0;){var l=Math.floor((r+1)/2)-1,h=this.content[l];if(this.scoreFunction(a)<this.scoreFunction(h))this.content[l]=a,this.content[r]=h,r=l;else break}},sinkDown:function(r){for(var a=this.content.length,l=this.content[r],h=this.scoreFunction(l);;){var d=(r+1)*2,m=d-1,b=-1,w=0;if(m<a){var E=this.content[m];w=this.scoreFunction(E),w<h&&(b=m)}if(d<a){var U=this.content[d],C=this.scoreFunction(U);C<(b==-1?h:w)&&(b=d)}if(b!=-1)this.content[r]=this.content[b],this.content[b]=l,r=b;else break}},__class__:Se};var Je=e.core.KdPoint=function(r,a){this.point=r,this.obj=a};n["verb.core.KdPoint"]=Je,Je.__name__="verb.core.KdPoint",Je.prototype={__class__:Je};var Oe=e.core.KdNode=function(r,a,l){this.kdPoint=r,this.left=null,this.right=null,this.parent=l,this.dimension=a};n["verb.core.KdNode"]=Oe,Oe.__name__="verb.core.KdNode",Oe.prototype={__class__:Oe};var ze=function(){};n["verb.eval.IBoundingBoxTree"]=ze,ze.__name__="verb.eval.IBoundingBoxTree",ze.__isInterface__=!0,ze.prototype={__class__:ze};var gt=function(r,a){if(this._boundingBox=null,this._curve=r,a==null){var l=this._curve.knots;a=(ce.last(l)-ce.first(l))/64}this._knotTol=a};n["verb.core.LazyCurveBoundingBoxTree"]=gt,gt.__name__="verb.core.LazyCurveBoundingBoxTree",gt.__interfaces__=[ze],gt.prototype={split:function(){var r=ce.first(this._curve.knots),a=ce.last(this._curve.knots),l=a-r,h=Nt.curveSplit(this._curve,(a+r)/2+l*.1*Math.random());return new Z(new gt(h[0],this._knotTol),new gt(h[1],this._knotTol))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=new me(Y.dehomogenize1d(this._curve.controlPoints))),this._boundingBox},yield:function(){return this._curve},indivisible:function(r){var a=this._curve.knots;return ce.last(a)-ce.first(a)<this._knotTol},empty:function(){return!1},__class__:gt};var Ae=function(r,a){if(this._boundingBox=null,this._mesh=r,a==null){for(var l=[],h=0,d=r.faces.length;h<d;){var m=h++;l.push(m)}a=l}this._faceIndices=a};n["verb.core.LazyMeshBoundingBoxTree"]=Ae,Ae.__name__="verb.core.LazyMeshBoundingBoxTree",Ae.__interfaces__=[ze],Ae.prototype={split:function(){var r=rt.sortTrianglesOnLongestAxis(this.boundingBox(),this._mesh,this._faceIndices),a=ce.left(r),l=ce.right(r);return new Z(new Ae(this._mesh,a),new Ae(this._mesh,l))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=rt.makeMeshAabb(this._mesh,this._faceIndices)),this._boundingBox},yield:function(){return this._faceIndices[0]},indivisible:function(r){return this._faceIndices.length==1},empty:function(){return this._faceIndices.length==0},__class__:Ae};var He=function(r,a){this._boundingBox=null,this._polyline=r,a==null&&(a=new Yt(0,r.points.length!=0?r.points.length-1:0)),this._interval=a};n["verb.core.LazyPolylineBoundingBoxTree"]=He,He.__name__="verb.core.LazyPolylineBoundingBoxTree",He.__interfaces__=[ze],He.prototype={split:function(){var r=this._interval.min,a=this._interval.max,l=r+Math.ceil((a-r)/2),h=new Yt(r,l),d=new Yt(l,a);return new Z(new He(this._polyline,h),new He(this._polyline,d))},boundingBox:function(){return this._boundingBox==null&&(this._boundingBox=new me(this._polyline.points)),this._boundingBox},yield:function(){return this._interval.min},indivisible:function(r){return this._interval.max-this._interval.min==1},empty:function(){return this._interval.max-this._interval.min==0},__class__:He};var nt=function(r,a,l,h){if(a==null&&(a=!1),this._boundingBox=null,this._surface=r,this._splitV=a,l==null){var d=r.knotsU;l=(ce.last(d)-ce.first(d))/16}if(h==null){var d=r.knotsV;h=(ce.last(d)-ce.first(d))/16}this._knotTolU=l,this._knotTolV=h};n["verb.core.LazySurfaceBoundingBoxTree"]=nt,nt.__name__="verb.core.LazySurfaceBoundingBoxTree",nt.__interfaces__=[ze],nt.prototype={split:function(){var r,a;this._splitV?(r=ce.first(this._surface.knotsV),a=ce.last(this._surface.knotsV)):(r=ce.first(this._surface.knotsU),a=ce.last(this._surface.knotsU));var l=(r+a)/2,h=Nt.surfaceSplit(this._surface,l,this._splitV);return new Z(new nt(h[0],!this._splitV,this._knotTolU,this._knotTolV),new nt(h[1],!this._splitV,this._knotTolU,this._knotTolV))},boundingBox:function(){if(this._boundingBox==null){this._boundingBox=new me;for(var r=0,a=this._surface.controlPoints;r<a.length;){var l=a[r];++r,this._boundingBox.addRange(Y.dehomogenize1d(l))}}return this._boundingBox},yield:function(){return this._surface},indivisible:function(r){var a=this._surface.knotsV;if(ce.last(a)-ce.first(a)<this._knotTolV){var a=this._surface.knotsU;return ce.last(a)-ce.first(a)<this._knotTolU}else return!1},empty:function(){return!1},__class__:nt};var Ie=e.core.Mat=function(){};n["verb.core.Mat"]=Ie,Ie.__name__="verb.core.Mat",Ie.mul=function(r,a){for(var l=[],h=0,d=a.length;h<d;){var m=h++;l.push(_.mul(r,a[m]))}return l},Ie.mult=function(r,a){for(var l,h,d,m,b=r.length,w=a.length,E=a[0].length,U=[],C=b-1,I=0,z=0;C>=0;){for(l=[],h=r[C],z=E-1;z>=0;){for(d=h[w-1]*a[w-1][z],I=w-2;I>=1;)m=I-1,d+=h[I]*a[I][z]+h[m]*a[m][z],I-=2;I==0&&(d+=h[0]*a[0][z]),l[z]=d,--z}U[C]=l,--C}return U},Ie.add=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(_.add(r[m],a[m]))}return l},Ie.div=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(_.div(r[m],a))}return l},Ie.sub=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(_.sub(r[m],a[m]))}return l},Ie.dot=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(_.dot(r[m],a))}return l},Ie.identity=function(r){for(var a=_.zeros2d(r,r),l=0,h=r;l<h;){var d=l++;a[d][d]=1}return a},Ie.transpose=function(r){if(r.length==0)return[];for(var a=[],l=0,h=r[0].length;l<h;){for(var d=l++,m=[],b=0,w=r.length;b<w;){var E=b++;m.push(r[E][d])}a.push(m)}return a},Ie.solve=function(r,a){return Ie.LUsolve(Ie.LU(r),a)},Ie.LUsolve=function(r,a){for(var l,h=r.LU,d=h.length,m=a.slice(),b=r.P,w,E,U,C=d-1;C!=-1;)m[C]=a[C],--C;for(C=0;C<d;){for(w=b[C],b[C]!=C&&(U=m[C],m[C]=m[w],m[w]=U),E=h[C],l=0;l<C;)m[C]-=m[l]*E[l],++l;++C}for(C=d-1;C>=0;){for(E=h[C],l=C+1;l<d;)m[C]-=m[l]*E[l],++l;m[C]/=E[C],--C}return m},Ie.LU=function(r){for(var a,l,h,d,m,b,w,E,U=[],C=0,I=r.length;C<I;){var z=C++;U.push(r[z].slice())}r=U;for(var B=r.length,H=B-1,K=[],q=0;q<B;){for(b=q,m=r[q],E=Math.abs(m[q]),l=q+1;l<B;)h=Math.abs(r[l][q]),E<h&&(E=h,b=l),++l;for(K[q]=b,b!=q&&(r[q]=r[b],r[b]=m,m=r[q]),d=m[q],a=q+1;a<B;)r[a][q]/=d,++a;for(a=q+1;a<B;){for(w=r[a],l=q+1;l<H;)w[l]-=w[q]*m[l],++l,w[l]-=w[q]*m[l],++l;l==H&&(w[l]-=w[q]*m[l]),++a}++q}return new Ge(r,K)};var Ge=function(r,a){this.LU=r,this.P=a};n["verb.core._Mat.LUDecomp"]=Ge,Ge.__name__="verb.core._Mat.LUDecomp",Ge.prototype={__class__:Ge};var rt=e.core.Mesh=function(){};n["verb.core.Mesh"]=rt,rt.__name__="verb.core.Mesh",rt.getTriangleNorm=function(r,a){var l=r[a[0]],h=r[a[1]],d=r[a[2]],m=_.sub(h,l),b=_.sub(d,l),w=_.cross(m,b);return _.mul(1/_.norm(w),w)},rt.makeMeshAabb=function(r,a){for(var l=new me,h=0;h<a.length;){var d=a[h];++h,l.add(r.points[r.faces[d][0]]),l.add(r.points[r.faces[d][1]]),l.add(r.points[r.faces[d][2]])}return l},rt.sortTrianglesOnLongestAxis=function(r,a,l){for(var h=r.getLongestAxis(),d=[],E=0;E<l.length;){var m=l[E];++E;var b=rt.getMinCoordOnAxis(a.points,a.faces[m],h);d.push(new Z(b,m))}d.sort(function(I,z){var B=I.item0,H=z.item0;return B==H?0:B>H?1:-1});for(var w=[],E=0,U=d.length;E<U;){var C=E++;w.push(d[C].item1)}return w},rt.getMinCoordOnAxis=function(r,a,l){var h=1/0,d=r[a[0]][l];d<h&&(h=d);var d=r[a[1]][l];d<h&&(h=d);var d=r[a[2]][l];return d<h&&(h=d),h},rt.getTriangleCentroid=function(r,a){var l=[0,0,0];return l[0]+=r[a[0]][0],l[1]+=r[a[0]][1],l[2]+=r[a[0]][2],l[0]+=r[a[1]][0],l[1]+=r[a[1]][1],l[2]+=r[a[1]][2],l[0]+=r[a[2]][0],l[1]+=r[a[2]][1],l[2]+=r[a[2]][2],l[0]/=3,l[1]/=3,l[2]/=3,l},rt.triangleUVFromPoint=function(r,a,l){var h=r.faces[a],d=r.points[h[0]],m=r.points[h[1]],b=r.points[h[2]],w=r.uvs[h[0]],E=r.uvs[h[1]],U=r.uvs[h[2]],C=_.sub(d,l),I=_.sub(m,l),z=_.sub(b,l),B=_.norm(_.cross(_.sub(d,m),_.sub(d,b))),H=_.norm(_.cross(I,z))/B,K=_.norm(_.cross(z,C))/B,q=_.norm(_.cross(C,I))/B;return _.add(_.mul(H,w),_.add(_.mul(K,E),_.mul(q,U)))};var ht=function(r,a){if(this._empty=!1,this._face=-1,a==null){for(var l=[],h=0,d=r.faces.length;h<d;){var m=h++;l.push(m)}a=l}if(this._boundingBox=rt.makeMeshAabb(r,a),a.length<1){this._empty=!0;return}else if(a.length<2){this._face=a[0];return}var b=rt.sortTrianglesOnLongestAxis(this._boundingBox,r,a),w=ce.left(b),E=ce.right(b);this._children=new Z(new ht(r,w),new ht(r,E))};n["verb.core.MeshBoundingBoxTree"]=ht,ht.__name__="verb.core.MeshBoundingBoxTree",ht.__interfaces__=[ze],ht.prototype={split:function(){return this._children},boundingBox:function(){return this._boundingBox},yield:function(){return this._face},indivisible:function(r){return this._children==null},empty:function(){return this._empty},__class__:ht};var Lt=e.core.Minimizer=function(){};n["verb.core.Minimizer"]=Lt,Lt.__name__="verb.core.Minimizer",Lt.uncmin=function(r,a,l,h,d){l==null&&(l=1e-8),h==null&&(h=function(Ce){return Lt.numericalGradient(r,Ce)}),d==null&&(d=1e3),a=a.slice(0);var m=a.length,b=r(a),w=b,E;if(isNaN(b))throw x.thrown("uncmin: f(x0) is a NaN!");l=Math.max(l,oe.EPSILON);for(var U,C,I=Ie.identity(m),z=0,B=[],H,K,q,ee,se,pe,xe="",be=h(a);z<d;){if(!_.all(_.finite(be))){xe="Gradient has Infinity or NaN";break}if(U=_.neg(Ie.dot(I,be)),!_.all(_.finite(U))){xe="Search direction has Infinity or NaN";break}if(pe=_.norm(U),pe<l){xe="Newton step smaller than tol";break}for(se=1,E=_.dot(be,U),H=a;z<d&&!(se*pe<l);){if(B=_.mul(se,U),H=_.add(a,B),w=r(H),w-b>=.1*se*E||isNaN(w)){se*=.5,++z;continue}break}if(se*pe<l){xe="Line search step size smaller than tol";break}if(z==d){xe="maxit reached during line search";break}C=h(H),K=_.sub(C,be),ee=_.dot(K,B),q=Ie.dot(I,K),I=Ie.sub(Ie.add(I,Ie.mul((ee+_.dot(K,q))/(ee*ee),Lt.tensor(B,B))),Ie.div(Ie.add(Lt.tensor(q,B),Lt.tensor(B,q)),ee)),a=H,b=w,be=C,++z}return new te(a,b,be,I,z,xe)},Lt.numericalGradient=function(r,a){var l=a.length,h=r(a);if(h==NaN)throw x.thrown("gradient: f(x) is a NaN!");for(var d,m=a.slice(0),b,w,E=[],U,C=.001,I,z,B,H=0,K,q,ee,se=0,pe=l;se<pe;)for(var d=se++,xe=Math.max(1e-6*h,1e-8);;){if(++H,H>20)throw x.thrown("Numerical gradient fails");if(m[d]=a[d]+xe,b=r(m),m[d]=a[d]-xe,w=r(m),m[d]=a[d],isNaN(b)||isNaN(w)){xe/=16;continue}if(E[d]=(b-w)/(2*xe),I=a[d]-xe,z=a[d],B=a[d]+xe,K=(b-h)/xe,q=(h-w)/xe,ee=_.max([Math.abs(E[d]),Math.abs(h),Math.abs(b),Math.abs(w),Math.abs(I),Math.abs(z),Math.abs(B),1e-8]),U=Math.min(_.max([Math.abs(K-E[d]),Math.abs(q-E[d]),Math.abs(K-q)])/ee,xe/ee),U>C)xe/=16;else break}return E},Lt.tensor=function(r,a){for(var l=r.length,h=a.length,d=[],m,b,w=l-1;w>=0;){m=[],b=r[w];for(var E=h-1;E>=3;)m[E]=b*a[E],--E,m[E]=b*a[E],--E,m[E]=b*a[E],--E,m[E]=b*a[E],--E;for(;E>=0;)m[E]=b*a[E],--E;d[w]=m,--w}return d};var te=function(r,a,l,h,d,m){this.solution=r,this.value=a,this.gradient=l,this.invHessian=h,this.iterations=d,this.message=m};n["verb.core.MinimizationResult"]=te,te.__name__="verb.core.MinimizationResult",te.prototype={__class__:te};var Ne=function(){};n["verb.core.ISerializable"]=Ne,Ne.__name__="verb.core.ISerializable",Ne.__isInterface__=!0,Ne.prototype={__class__:Ne};var ve=e.core.Deserializer=function(){};n["verb.core.Deserializer"]=ve,ve.__name__="verb.core.Deserializer",ve.deserialize=function(r){var a=new F(r),l=a.unserialize();return l};var Me=e.core.Trig=function(){};n["verb.core.Trig"]=Me,Me.__name__="verb.core.Trig",Me.isPointInPlane=function(r,a,l){return Math.abs(_.dot(_.sub(r,a.origin),a.normal))<l},Me.distToSegment=function(r,a,l){var h=Me.segmentClosestPoint(a,r,l,0,1);return _.dist(a,h.pt)},Me.rayClosestPoint=function(r,a,l){var h=_.sub(r,a),d=_.dot(h,l),m=_.add(a,_.mul(d,l));return m},Me.distToRay=function(r,a,l){var h=Me.rayClosestPoint(r,a,l),d=_.sub(h,r);return _.norm(d)},Me.threePointsAreFlat=function(r,a,l,h){var d=_.sub(a,r),m=_.sub(l,r),b=_.cross(d,m),w=_.dot(b,b);return w<h},Me.segmentClosestPoint=function(r,a,l,h,d){var m=_.sub(l,a),b=_.norm(m);if(b<oe.EPSILON)return{u:h,pt:a};var w=a,E=_.mul(1/b,m),U=_.sub(r,w),C=_.dot(U,E);return C<0?{u:h,pt:a}:C>b?{u:d,pt:l}:{u:h+(d-h)*C/b,pt:_.add(w,_.mul(C,E))}};var _=e.core.Vec=function(){};n["verb.core.Vec"]=_,_.__name__="verb.core.Vec",_.angleBetween=function(r,a){return Math.acos(_.dot(r,a)/(_.norm(r)*_.norm(a)))},_.positiveAngleBetween=function(r,a,l){var h=_.cross(r,a),d=_.norm(r),m=_.norm(a),b=d*m,w=_.dot(r,a),E=_.norm(h)/b,U=w/b,C=Math.atan2(E,U),I=_.dot(l,h);return Math.abs(I)<oe.EPSILON||I>0?C:-C},_.signedAngleBetween=function(r,a,l){var h=_.cross(r,a),d=_.norm(r),m=_.norm(a),b=d*m,w=_.dot(r,a),E=_.norm(h)/b,U=w/b,C=Math.atan2(E,U),I=_.dot(l,h);return I>0?C:2*Math.PI-C},_.angleBetweenNormalized2d=function(r,a){var l=r[0]*a[1]-r[1]*a[0];return Math.atan2(l,_.dot(r,a))},_.domain=function(r){return ce.last(r)-ce.first(r)},_.range=function(r){for(var a=[],l=0,h=0,d=r;h<d;)h++,a.push(l),l+=1;return a},_.span=function(r,a,l){if(l==null)return[];if(l<oe.EPSILON)return[];if(r>a&&l>0)return[];if(a>r&&l<0)return[];for(var h=[],d=r;d<=a;)h.push(d),d+=l;return h},_.neg=function(r){for(var a=new Array(r.length),l=0,h=r.length;l<h;){var d=l++;a[d]=-r[d]}return a},_.min=function(r){return p.fold(r,function(a,l){return Math.min(a,l)},1/0)},_.max=function(r){return p.fold(r,function(a,l){return Math.max(a,l)},-1/0)},_.all=function(r){return p.fold(r,function(a,l){return l?a:!1},!0)},_.finite=function(r){for(var a=new Array(r.length),l=0,h=r.length;l<h;){var d=l++;a[d]=isFinite(r[d])}return a},_.onRay=function(r,a,l){return _.add(r,_.mul(l,a))},_.lerp=function(r,a,l){return _.add(_.mul(r,a),_.mul(1-r,l))},_.normalized=function(r){return _.div(r,_.norm(r))},_.cross=function(r,a){return[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]]},_.dist=function(r,a){return _.norm(_.sub(r,a))},_.distSquared=function(r,a){return _.normSquared(_.sub(r,a))},_.sum=function(r){return p.fold(r,function(a,l){return l+a},0)},_.addAll=function(r){var a=Be(r);if(!a.hasNext())return null;var l=a.next().length;return p.fold(r,function(h,d){return _.add(d,h)},_.rep(l,0))},_.addAllMutate=function(r){for(var a=r[0],l=1,h=r.length;l<h;){var d=l++;_.addMutate(a,r[d])}},_.addMulMutate=function(r,a,l){for(var h=0,d=r.length;h<d;){var m=h++;r[m]+=a*l[m]}},_.subMulMutate=function(r,a,l){for(var h=0,d=r.length;h<d;){var m=h++;r[m]-=a*l[m]}},_.addMutate=function(r,a){for(var l=0,h=r.length;l<h;){var d=l++;r[d]+=a[d]}},_.subMutate=function(r,a){for(var l=0,h=r.length;l<h;){var d=l++;r[d]-=a[d]}},_.mulMutate=function(r,a){for(var l=0,h=a.length;l<h;){var d=l++;a[d]*=r}},_.norm=function(r){var a=_.normSquared(r);return a!=0?Math.sqrt(a):a},_.normSquared=function(r){return p.fold(r,function(a,l){return l+a*a},0)},_.rep=function(r,a){for(var l=[],h=0,d=r;h<d;)h++,l.push(a);return l},_.zeros1d=function(r){for(var a=[],l=0,h=r;l<h;)l++,a.push(0);return a},_.zeros2d=function(r,a){for(var l=[],h=0,d=r;h<d;)h++,l.push(_.zeros1d(a));return l},_.zeros3d=function(r,a,l){for(var h=[],d=0,m=r;d<m;)d++,h.push(_.zeros2d(a,l));return h},_.dot=function(r,a){for(var l=0,h=0,d=r.length;h<d;){var m=h++;l+=r[m]*a[m]}return l},_.add=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(r[m]+a[m])}return l},_.mul=function(r,a){for(var l=[],h=0,d=a.length;h<d;){var m=h++;l.push(r*a[m])}return l},_.div=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(r[m]/a)}return l},_.sub=function(r,a){for(var l=[],h=0,d=r.length;h<d;){var m=h++;l.push(r[m]-a[m])}return l},_.isZero=function(r){for(var a=0,l=r.length;a<l;){var h=a++;if(Math.abs(r[h])>oe.TOLERANCE)return!1}return!0},_.sortedSetUnion=function(r,a){for(var l=[],h=0,d=0;h<r.length||d<a.length;){if(h>=r.length){l.push(a[d]),++d;continue}else if(d>=a.length){l.push(r[h]),++h;continue}var m=r[h]-a[d];if(Math.abs(m)<oe.EPSILON){l.push(r[h]),++h,++d;continue}if(m>0){l.push(a[d]),++d;continue}l.push(r[h]),++h}return l},_.sortedSetSub=function(r,a){for(var l=[],h=0,d=0;h<r.length;){if(d>=a.length){l.push(r[h]),++h;continue}if(Math.abs(r[h]-a[d])<oe.EPSILON){++h,++d;continue}l.push(r[h]),++h}return l};var ye=e.eval.Analyze=function(){};n["verb.eval.Analyze"]=ye,ye.__name__="verb.eval.Analyze",ye.knotMultiplicities=function(r){for(var a=[new pt(r[0],0)],l=a[0],h=0;h<r.length;){var d=r[h];++h,Math.abs(d-l.knot)>oe.EPSILON&&(l=new pt(d,0),a.push(l)),l.inc()}return a},ye.isRationalSurfaceClosed=function(r,a){a==null&&(a=!0);for(var l=a?r.controlPoints:Ie.transpose(r.controlPoints),h=0,d=l[0].length;h<d;){var m=h++,b=_.dist(ce.first(l)[m],ce.last(l)[m])<oe.EPSILON;if(!b)return!1}return!0},ye.rationalSurfaceClosestPoint=function(r,a){var l=ye.rationalSurfaceClosestParam(r,a);return Y.rationalSurfacePoint(r,l[0],l[1])},ye.rationalSurfaceClosestParam=function(r,a){for(var l=5,h=0,d,m=1e-4,b=5e-4,w,E=r.knotsU[0],U=ce.last(r.knotsU),C=r.knotsV[0],I=ce.last(r.knotsV),z=ye.isRationalSurfaceClosed(r),B=ye.isRationalSurfaceClosed(r,!1),H=[0,0],K=Tt.rationalSurfaceAdaptive(r,new Fn),q=1/0,ee=0,se=K.points.length;ee<se;){var pe=ee++,xe=K.points[pe],be=_.normSquared(_.sub(a,xe));be<q&&(q=be,H=K.uvs[pe])}for(var Ce=function(nn){return Y.rationalSurfaceDerivatives(r,nn[0],nn[1],2)},Te=function(nn,xn,Ln){var kn=xn[1][0],bn=xn[0][1],li=xn[2][0],vi=xn[0][2],is=xn[1][1],Ts=xn[1][1],As=_.dot(kn,Ln),Cs=_.dot(bn,Ln),Rs=[-As,-Cs],Ia=_.dot(kn,kn)+_.dot(li,Ln),Ps=_.dot(kn,bn)+_.dot(is,Ln),Na=_.dot(kn,bn)+_.dot(Ts,Ln),rs=_.dot(bn,bn)+_.dot(vi,Ln),ci=[[Ia,Ps],[Na,rs]],Pi=Ie.solve(ci,Rs);return _.add(Pi,nn)};h<l;){d=Ce(H),w=_.sub(d[0][0],a);var Le=_.norm(w),st=_.dot(d[1][0],w),Ke=_.norm(d[1][0])*Le,We=_.dot(d[0][1],w),ot=_.norm(d[0][1])*Le,ft=st/Ke,Mt=We/ot,Rt=Le<m,tn=ft<b,qt=Mt<b;if(Rt&&tn&&qt)return H;var bt=Te(H,d,w);bt[0]<E?bt=z?[U-(bt[0]-E),bt[1]]:[E+oe.EPSILON,bt[1]]:bt[0]>U&&(bt=z?[E+(bt[0]-U),bt[1]]:[U-oe.EPSILON,bt[1]]),bt[1]<C?bt=B?[bt[0],I-(bt[1]-C)]:[bt[0],C+oe.EPSILON]:bt[1]>I&&(bt=B?[bt[0],C+(bt[0]-I)]:[bt[0],I-oe.EPSILON]);var Ht=_.norm(_.mul(bt[0]-H[0],d[1][0])),fn=_.norm(_.mul(bt[1]-H[1],d[0][1]));if(Ht+fn<m)return H;H=bt,++h}return H},ye.rationalCurveClosestPoint=function(r,a){return Y.rationalCurvePoint(r,ye.rationalCurveClosestParam(r,a))},ye.rationalCurveClosestParam=function(r,a){for(var l=1/0,h=0,d=Tt.rationalCurveRegularSample(r,r.controlPoints.length*r.degree,!0),m=0,b=d.length-1;m<b;){var H=m++,w=d[H][0],E=d[H+1][0],U=d[H].slice(1),C=d[H+1].slice(1),I=Me.segmentClosestPoint(a,U,C,w,E),z=_.norm(_.sub(a,I.pt));z<l&&(l=z,h=I.u)}for(var B=5,H=0,K,q=1e-4,ee=5e-4,se,pe=r.knots[0],xe=ce.last(r.knots),be=_.normSquared(_.sub(r.controlPoints[0],ce.last(r.controlPoints)))<oe.EPSILON,Ce=h,Te=function(qt){return Y.rationalCurveDerivatives(r,qt,2)},Le=function(qt,bt,Ht){var fn=_.dot(bt[1],Ht),nn=_.dot(bt[2],Ht),xn=_.dot(bt[1],bt[1]),Ln=nn+xn;return qt-fn/Ln};H<B;){K=Te(Ce),se=_.sub(K[0],a);var st=_.norm(se),Ke=_.dot(K[1],se),We=_.norm(K[1])*st,ot=Ke/We,ft=st<q,Mt=Math.abs(ot)<ee;if(ft&&Mt)return Ce;var Rt=Le(Ce,K,se);Rt<pe?Rt=be?xe-(Rt-pe):pe:Rt>xe&&(Rt=be?pe+(Rt-xe):xe);var tn=_.norm(_.mul(Rt-Ce,K[1]));if(tn<q)return Ce;Ce=Rt,++H}return Ce},ye.rationalCurveParamAtArcLength=function(r,a,l,h,d){if(l==null&&(l=.001),a<oe.EPSILON)return r.knots[0];var m=h??mt.decomposeCurveIntoBeziers(r),b=0;m[b];for(var w=-oe.EPSILON,E=d??[];w<a&&b<m.length;){if(E[b]=b<E.length?E[b]:ye.rationalBezierCurveArcLength(r),w+=E[b],a<w+oe.EPSILON)return ye.rationalBezierCurveParamAtArcLength(r,a,l,E[b]);++b}return-1},ye.rationalBezierCurveParamAtArcLength=function(r,a,l,h){if(a<0)return r.knots[0];var d=h??ye.rationalBezierCurveArcLength(r);if(a>d)return ce.last(r.knots);for(var m=r.knots[0],b=0,w=ce.last(r.knots),E=d,U=0,C=0,I=l??oe.TOLERANCE*2;E-b>I;)U=(m+w)/2,C=ye.rationalBezierCurveArcLength(r,U),C>a?(w=U,E=C):(m=U,b=C);return(m+w)/2},ye.rationalCurveArcLength=function(r,a,l){l==null&&(l=16),a==null&&(a=ce.last(r.knots));for(var h=mt.decomposeCurveIntoBeziers(r),d=0,m=h[0],b=0;d<h.length&&m.knots[0]+oe.EPSILON<a;){var w=Math.min(ce.last(m.knots),a);b+=ye.rationalBezierCurveArcLength(m,w,l),m=h[++d]}return b},ye.rationalBezierCurveArcLength=function(r,a,l){l==null&&(l=16);for(var h=a??ce.last(r.knots),d=(h-r.knots[0])/2,m=0,b=r.degree+l,w,E,U=0,C=b;U<C;){var I=U++;w=d*ye.Tvalues[b][I]+d+r.knots[0],E=Y.rationalCurveDerivatives(r,w,1),m+=ye.Cvalues[b][I]*_.norm(E[1])}return d*m};var pt=e.eval.KnotMultiplicity=function(r,a){this.knot=r,this.mult=a};n["verb.eval.KnotMultiplicity"]=pt,pt.__name__="verb.eval.KnotMultiplicity",pt.prototype={inc:function(){this.mult++},__class__:pt};var It=e.eval.Check=function(){};n["verb.eval.Check"]=It,It.__name__="verb.eval.Check",It.isValidKnotVector=function(r,a){if(r.length==0||r.length<(a+1)*2)return!1;for(var l=ce.first(r),d=0,m=a+1;d<m;){var h=d++;if(Math.abs(r[h]-l)>oe.EPSILON)return!1}l=ce.last(r);for(var d=r.length-a-1,m=r.length;d<m;){var h=d++;if(Math.abs(r[h]-l)>oe.EPSILON)return!1}return It.isNonDecreasing(r)},It.isNonDecreasing=function(r){for(var a=ce.first(r),l=0,h=r.length;l<h;){var d=l++;if(r[d]<a-oe.EPSILON)return!1;a=r[d]}return!0},It.isValidNurbsCurveData=function(r){if(r.controlPoints==null)throw x.thrown("Control points array cannot be null!");if(r.degree==null)throw x.thrown("Degree cannot be null!");if(r.degree<1)throw x.thrown("Degree must be greater than 1!");if(r.knots==null)throw x.thrown("Knots cannot be null!");if(r.knots.length!=r.controlPoints.length+r.degree+1)throw x.thrown("controlPoints.length + degree + 1 must equal knots.length!");if(!It.isValidKnotVector(r.knots,r.degree))throw x.thrown("Invalid knot vector format!  Should begin with degree + 1 repeats and end with degree + 1 repeats!");return r},It.isValidNurbsSurfaceData=function(r){if(r.controlPoints==null)throw x.thrown("Control points array cannot be null!");if(r.degreeU==null)throw x.thrown("DegreeU cannot be null!");if(r.degreeV==null)throw x.thrown("DegreeV cannot be null!");if(r.degreeU<1)throw x.thrown("DegreeU must be greater than 1!");if(r.degreeV<1)throw x.thrown("DegreeV must be greater than 1!");if(r.knotsU==null)throw x.thrown("KnotsU cannot be null!");if(r.knotsV==null)throw x.thrown("KnotsV cannot be null!");if(r.knotsU.length!=r.controlPoints.length+r.degreeU+1)throw x.thrown("controlPointsU.length + degreeU + 1 must equal knotsU.length!");if(r.knotsV.length!=r.controlPoints[0].length+r.degreeV+1)throw x.thrown("controlPointsV.length + degreeV + 1 must equal knotsV.length!");if(!It.isValidKnotVector(r.knotsU,r.degreeU)||!It.isValidKnotVector(r.knotsV,r.degreeV))throw x.thrown("Invalid knot vector format!  Should begin with degree + 1 repeats and end with degree + 1 repeats!");return r};var Nt=e.eval.Divide=function(){};n["verb.eval.Divide"]=Nt,Nt.__name__="verb.eval.Divide",Nt.surfaceSplit=function(r,a,l){l==null&&(l=!1);var h,d,m;l?(m=r.controlPoints,h=r.knotsV,d=r.degreeV):(m=Ie.transpose(r.controlPoints),h=r.knotsU,d=r.degreeU);for(var B=[],b=0,w=d+1;b<w;)b++,B.push(a);for(var E=B,U=[],C=[],I=Y.knotSpan(d,a,h),z=null,B=0;B<m.length;){var H=m[B];++B,z=mt.curveKnotRefine(new Ve(d,h,H),E),U.push(z.controlPoints.slice(0,I+1)),C.push(z.controlPoints.slice(I+1))}var K=z.knots.slice(0,I+d+2),q=z.knots.slice(I+1);return l?[new Ze(r.degreeU,d,r.knotsU.slice(),K,U),new Ze(r.degreeU,d,r.knotsU.slice(),q,C)]:(U=Ie.transpose(U),C=Ie.transpose(C),[new Ze(d,r.degreeV,K,r.knotsV.slice(),U),new Ze(d,r.degreeV,q,r.knotsV.slice(),C)])},Nt.curveSplit=function(r,a){var l=r.degree;r.controlPoints;for(var h=r.knots,d=[],m=0,b=l+1;m<b;)m++,d.push(a);var w=d,E=mt.curveKnotRefine(r,w),U=Y.knotSpan(l,a,h),C=E.knots.slice(0,U+l+2),I=E.knots.slice(U+1),z=E.controlPoints.slice(0,U+1),B=E.controlPoints.slice(U+1);return[new Ve(l,C,z),new Ve(l,I,B)]},Nt.rationalCurveByEqualArcLength=function(r,a){var l=ye.rationalCurveArcLength(r),h=l/a;return Nt.rationalCurveByArcLength(r,h)},Nt.rationalCurveByArcLength=function(r,a){for(var l=mt.decomposeCurveIntoBeziers(r),h=new Array(l.length),d=0,m=l.length;d<m;){var C=d++;h[C]=ye.rationalBezierCurveArcLength(l[C])}var b=h,w=_.sum(b),E=[new Dt(r.knots[0],0)];if(a>w)return E;for(var U=a,C=0,I=U,z=0,B=0,H;C<l.length;){for(z+=b[C];I<z+oe.EPSILON;)H=ye.rationalBezierCurveParamAtArcLength(l[C],I-B,oe.TOLERANCE,b[C]),E.push(new Dt(H,I)),I+=U;B+=b[C],++C}return E};var Dt=e.eval.CurveLengthSample=function(r,a){this.u=r,this.len=a};n["verb.eval.CurveLengthSample"]=Dt,Dt.__name__="verb.eval.CurveLengthSample",Dt.prototype={__class__:Dt};var Y=e.eval.Eval=function(){};n["verb.eval.Eval"]=Y,Y.__name__="verb.eval.Eval",Y.rationalCurveTangent=function(r,a){var l=Y.rationalCurveDerivatives(r,a,1);return l[1]},Y.rationalSurfaceNormal=function(r,a,l){var h=Y.rationalSurfaceDerivatives(r,a,l,1);return _.cross(h[1][0],h[0][1])},Y.rationalSurfaceDerivatives=function(r,a,l,h){h==null&&(h=1);for(var d=Y.surfaceDerivatives(r,a,l,h),m=Y.rational2d(d),b=Y.weight2d(d),w=[],E=m[0][0].length,U=0,C=h+1;U<C;){var I=U++;w.push([]);for(var z=0,B=h-I+1;z<B;){for(var H=z++,l=m[I][H],K=1,q=H+1;K<q;){var ee=K++;_.subMulMutate(l,Xe.get(H,ee)*b[0][ee],w[I][H-ee])}for(var se=1,pe=I+1;se<pe;){var xe=se++;_.subMulMutate(l,Xe.get(I,xe)*b[xe][0],w[I-xe][H]);for(var be=_.zeros1d(E),Ce=1,Te=H+1;Ce<Te;){var Le=Ce++;_.addMulMutate(be,Xe.get(H,Le)*b[xe][Le],w[I-xe][H-Le])}_.subMulMutate(l,Xe.get(I,xe),be)}_.mulMutate(1/b[0][0],l),w[I].push(l)}}return w},Y.rationalSurfacePoint=function(r,a,l){return Y.dehomogenize(Y.surfacePoint(r,a,l))},Y.rationalCurveDerivatives=function(r,a,l){l==null&&(l=1);for(var h=Y.curveDerivatives(r,a,l),d=Y.rational1d(h),m=Y.weight1d(h),b=0,w=0,E=[],U=0,C=l+1;U<C;){for(var b=U++,I=d[b],z=1,B=b+1;z<B;){var w=z++;_.subMulMutate(I,Xe.get(b,w)*m[w],E[b-w])}_.mulMutate(1/m[0],I),E.push(I)}return E},Y.rationalCurvePoint=function(r,a){return Y.dehomogenize(Y.curvePoint(r,a))},Y.surfaceDerivatives=function(r,a,l,h){var d=r.knotsU.length-r.degreeU-2,m=r.knotsV.length-r.degreeV-2;return Y.surfaceDerivativesGivenNM(d,m,r,a,l,h)},Y.surfaceDerivativesGivenNM=function(r,a,l,h,d,m){var b=l.degreeU,w=l.degreeV,E=l.controlPoints,U=l.knotsU,C=l.knotsV;if(!Y.areValidRelations(b,E.length,U.length)||!Y.areValidRelations(w,E[0].length,C.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var I=E[0][0].length,z=m<b?m:b,B=m<w?m:w,H=_.zeros3d(m+1,m+1,I),K=Y.knotSpanGivenN(r,b,h,U),q=Y.knotSpanGivenN(a,w,d,C),ee=Y.derivativeBasisFunctionsGivenNI(K,h,b,r,U),se=Y.derivativeBasisFunctionsGivenNI(q,d,w,a,C),pe=_.zeros2d(w+1,I),xe=0,be=0,Ce=z+1;be<Ce;){for(var Te=be++,Le=0,st=w+1;Le<st;){var Ke=Le++;pe[Ke]=_.zeros1d(I);for(var We=0,ot=b+1;We<ot;){var ft=We++;_.addMulMutate(pe[Ke],ee[Te][ft],E[K-b+ft][q-w+Ke])}}var Mt=m-Te;xe=Mt<B?Mt:B;for(var Rt=0,tn=xe+1;Rt<tn;){var qt=Rt++;H[Te][qt]=_.zeros1d(I);for(var bt=0,Ht=w+1;bt<Ht;){var fn=bt++;_.addMulMutate(H[Te][qt],se[qt][fn],pe[fn])}}}return H},Y.surfacePoint=function(r,a,l){var h=r.knotsU.length-r.degreeU-2,d=r.knotsV.length-r.degreeV-2;return Y.surfacePointGivenNM(h,d,r,a,l)},Y.surfacePointGivenNM=function(r,a,l,h,d){var m=l.degreeU,b=l.degreeV,w=l.controlPoints,E=l.knotsU,U=l.knotsV;if(!Y.areValidRelations(m,w.length,E.length)||!Y.areValidRelations(b,w[0].length,U.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var C=w[0][0].length,I=Y.knotSpanGivenN(r,m,h,E),z=Y.knotSpanGivenN(a,b,d,U),B=Y.basisFunctionsGivenKnotSpanIndex(I,h,m,E),H=Y.basisFunctionsGivenKnotSpanIndex(z,d,b,U),K=I-m,q=z,ee=_.zeros1d(C),se=_.zeros1d(C),pe=0,xe=b+1;pe<xe;){var be=pe++;se=_.zeros1d(C),q=z-b+be;for(var Ce=0,Te=m+1;Ce<Te;){var Le=Ce++;_.addMulMutate(se,B[Le],w[K+Le][q])}_.addMulMutate(ee,H[be],se)}return ee},Y.curveRegularSamplePoints=function(r,a){for(var l=Y.curveDerivatives(r,r.knots[0],r.degree),h=1/a,d=h*h,m=l[0],b=_.mul(h,l[1]),w=_.mul(d*.5,l[2]),E=_.mul(d*h*.5,l[3]),U=_.add(w,w),C=_.add(E,E),I=_.mul(.3333333333333333,E),z=[],B=0,H=a+1;B<H;)B++,z.push(Y.dehomogenize(m)),_.addAllMutate([m,b,w,I]),_.addAllMutate([b,U,E]),_.addAllMutate([U,C]),_.addAllMutate([w,E]);return z},Y.curveRegularSamplePoints2=function(r,a){for(var l=Y.curveDerivatives(r,r.knots[0],r.degree),h=1/a,d=h*h,m=l[0],b=_.mul(h,l[1]),w=_.mul(d*.5,l[2]),E=_.mul(d*h*.5,l[3]),U=_.add(w,w),C=_.add(E,E),I=_.mul(.3333333333333333,E),z=[],B=0,H=a+1;B<H;)B++,z.push(Y.dehomogenize(m)),_.addAllMutate([m,b,w,I]),_.addAllMutate([b,U,E]),_.addAllMutate([U,C]),_.addAllMutate([w,E]);return z},Y.rationalSurfaceRegularSampleDerivatives=function(r,a,l,h){for(var d=Y.surfaceRegularSampleDerivatives(r,a,l,h),m=[],b=a+1,w=l+1,E=h+1,U=0,C=b;U<C;){var I=U++,z=[];m.push(z);for(var B=0,H=w;B<H;){for(var K=B++,q=d[I][K],ee=Y.rational2d(q),se=Y.weight2d(q),pe=[],xe=ee[0][0].length,be=0,Ce=E;be<Ce;){var Te=be++;pe.push([]);for(var Le=0,st=E-Te;Le<st;){for(var Ke=Le++,We=ee[Te][Ke],ot=1,ft=Ke+1;ot<ft;){var Mt=ot++;_.subMulMutate(We,Xe.get(Ke,Mt)*se[0][Mt],pe[Te][Ke-Mt])}for(var Rt=1,tn=Te+1;Rt<tn;){var qt=Rt++;_.subMulMutate(We,Xe.get(Te,qt)*se[qt][0],pe[Te-qt][Ke]);for(var bt=_.zeros1d(xe),Ht=1,fn=Ke+1;Ht<fn;){var nn=Ht++;_.addMulMutate(bt,Xe.get(Ke,nn)*se[qt][nn],pe[Te-qt][Ke-nn])}_.subMulMutate(We,Xe.get(Te,qt),bt)}_.mulMutate(1/se[0][0],We),pe[Te].push(We)}}z.push(pe)}}return m},Y.surfaceRegularSampleDerivatives=function(r,a,l,h){var d=r.degreeU,m=r.degreeV,b=r.controlPoints,w=r.knotsU,E=r.knotsV,U=b[0][0].length;(ce.last(w)-w[0])/a,(ce.last(E)-E[0])/l;for(var C=Y.regularlySpacedDerivativeBasisFunctions(d,w,a),I=C.item0,z=C.item1,B=Y.regularlySpacedDerivativeBasisFunctions(m,E,l),H=B.item0,K=B.item1,q=[],ee=a+1,se=l+1,pe=0,xe=ee;pe<xe;){var be=pe++,Ce=[];q.push(Ce);for(var Te=0,Le=se;Te<Le;){var st=Te++;Ce.push(Y.surfaceDerivativesGivenBasesKnotSpans(d,m,b,I[be],H[st],z[be],K[st],U,h))}}return q},Y.rationalSurfaceRegularSamplePoints=function(r,a,l){return Y.dehomogenize2d(Y.surfaceRegularSamplePoints(r,a,l))},Y.surfaceRegularSamplePoints=function(r,a,l){var h=r.degreeU,d=r.degreeV,m=r.controlPoints,b=r.knotsU,w=r.knotsV,E=m[0][0].length;(ce.last(b)-b[0])/a,(ce.last(w)-w[0])/l;for(var U=Y.regularlySpacedBasisFunctions(h,b,a),C=U.item0,I=U.item1,z=Y.regularlySpacedBasisFunctions(d,w,l),B=z.item0,H=z.item1,K=[],q=a+1,ee=l+1,se=0,pe=q;se<pe;){var xe=se++,be=[];K.push(be);for(var Ce=0,Te=ee;Ce<Te;){var Le=Ce++;be.push(Y.surfacePointGivenBasesKnotSpans(h,d,m,C[xe],B[Le],I[xe],H[Le],E))}}return K},Y.regularlySpacedBasisFunctions=function(r,a,l){for(var h=a.length-r-2,d=(ce.last(a)-a[0])/l,m=[],b=[],w=a[0],E=Y.knotSpanGivenN(h,r,w,a),U=l+1,C=0,I=U;C<I;){for(C++;w>=a[E+1];)++E;b.push(E),m.push(Y.basisFunctionsGivenKnotSpanIndex(E,w,r,a)),w+=d}return new Z(b,m)},Y.regularlySpacedDerivativeBasisFunctions=function(r,a,l){for(var h=a.length-r-2,d=(ce.last(a)-a[0])/l,m=[],b=[],w=a[0],E=Y.knotSpanGivenN(h,r,w,a),U=l+1,C=0,I=U;C<I;){for(C++;w>=a[E+1];)++E;b.push(E),m.push(Y.derivativeBasisFunctionsGivenNI(E,w,r,h,a)),w+=d}return new Z(b,m)},Y.surfacePointGivenBasesKnotSpans=function(r,a,l,h,d,m,b,w){for(var E=_.zeros1d(w),U,C=h-r,I=d-a,z=0,B=a+1;z<B;){var H=z++;U=_.zeros1d(w);for(var K=0,q=r+1;K<q;){var ee=K++;_.addMulMutate(U,m[ee],l[C+ee][I])}++I,_.addMulMutate(E,b[H],U)}return E},Y.surfaceDerivativesGivenBasesKnotSpans=function(r,a,l,h,d,m,b,U,E){for(var U=l[0][0].length,C=E<r?E:r,I=E<a?E:a,z=_.zeros3d(C+1,I+1,U),B=_.zeros2d(a+1,U),H=0,K=0,q=C+1;K<q;){for(var ee=K++,se=0,pe=a+1;se<pe;){var xe=se++;B[xe]=_.zeros1d(U);for(var be=0,Ce=r+1;be<Ce;){var Te=be++;_.addMulMutate(B[xe],m[ee][Te],l[h-r+Te][d-a+xe])}}var Le=E-ee;H=Le<I?Le:I;for(var st=0,Ke=H+1;st<Ke;){var We=st++;z[ee][We]=_.zeros1d(U);for(var ot=0,ft=a+1;ot<ft;){var Mt=ot++;_.addMulMutate(z[ee][We],b[We][Mt],B[Mt])}}}return z},Y.curveDerivatives=function(r,a,l){var h=r.knots.length-r.degree-2;return Y.curveDerivativesGivenN(h,r,a,l)},Y.curveDerivativesGivenN=function(r,a,l,h){var d=a.degree,m=a.controlPoints,b=a.knots;if(!Y.areValidRelations(d,m.length,b.length))throw x.thrown("Invalid relations between control points, knot vector, and n");for(var w=m[0].length,E=h<d?h:d,U=_.zeros2d(h+1,w),C=Y.knotSpanGivenN(r,d,l,b),I=Y.derivativeBasisFunctionsGivenNI(C,l,d,E,b),z=0,B=0,H=0,K=E+1;H<K;)for(var z=H++,q=0,ee=d+1;q<ee;){var B=q++;_.addMulMutate(U[z],I[z][B],m[C-d+B])}return U},Y.curvePoint=function(r,a){var l=r.knots.length-r.degree-2;return Y.curvePointGivenN(l,r,a)},Y.areValidRelations=function(r,a,l){return a+r+1-l==0},Y.curvePointGivenN=function(r,a,l){var h=a.degree,d=a.controlPoints,m=a.knots;if(!Y.areValidRelations(h,d.length,m.length))throw x.thrown("Invalid relations between control points, knot Array, and n");for(var b=Y.knotSpanGivenN(r,h,l,m),w=Y.basisFunctionsGivenKnotSpanIndex(b,l,h,m),E=_.zeros1d(d[0].length),U=0,C=h+1;U<C;){var I=U++;_.addMulMutate(E,w[I],d[b-h+I])}return E},Y.volumePoint=function(r,a,l,h){var d=r.knotsU.length-r.degreeU-2,m=r.knotsV.length-r.degreeV-2,b=r.knotsW.length-r.degreeW-2;return Y.volumePointGivenNML(r,d,m,b,a,l,h)},Y.volumePointGivenNML=function(r,a,l,h,d,m,b){if(!Y.areValidRelations(r.degreeU,r.controlPoints.length,r.knotsU.length)||!Y.areValidRelations(r.degreeV,r.controlPoints[0].length,r.knotsV.length)||!Y.areValidRelations(r.degreeW,r.controlPoints[0][0].length,r.knotsW.length))throw x.thrown("Invalid relations between control points and knot vector");for(var w=r.controlPoints,E=r.degreeU,U=r.degreeV,C=r.degreeW,I=r.knotsU,z=r.knotsV,B=r.knotsW,H=w[0][0][0].length,K=Y.knotSpanGivenN(a,E,d,I),q=Y.knotSpanGivenN(l,U,m,z),ee=Y.knotSpanGivenN(h,C,b,B),se=Y.basisFunctionsGivenKnotSpanIndex(K,d,E,I),pe=Y.basisFunctionsGivenKnotSpanIndex(q,m,U,z),xe=Y.basisFunctionsGivenKnotSpanIndex(ee,b,C,B),be=K-E,Ce=_.zeros1d(H),Te=_.zeros1d(H),Le=_.zeros1d(H),st=0,Ke=C+1;st<Ke;){var We=st++;Le=_.zeros1d(H);for(var ot=ee-C+We,ft=0,Mt=U+1;ft<Mt;){var Rt=ft++;Te=_.zeros1d(H);for(var tn=q-U+Rt,qt=0,bt=E+1;qt<bt;){var Ht=qt++;_.addMulMutate(Te,se[Ht],w[be+Ht][tn][ot])}_.addMulMutate(Le,pe[Rt],Te)}_.addMulMutate(Ce,xe[We],Le)}return Ce},Y.derivativeBasisFunctions=function(r,a,l){var h=Y.knotSpan(a,r,l),d=l.length-1,m=d-a-1;return Y.derivativeBasisFunctionsGivenNI(h,r,a,m,l)},Y.derivativeBasisFunctionsGivenNI=function(r,a,l,h,d){var m=_.zeros2d(l+1,l+1),b=_.zeros1d(l+1),w=_.zeros1d(l+1),E=0,U=0;m[0][0]=1;for(var We=1,ot=l+1;We<ot;){var C=We++;b[C]=a-d[r+1-C],w[C]=d[r+C]-a,E=0;for(var I=0,z=C;I<z;){var B=I++;m[C][B]=w[B+1]+b[C-B],U=m[B][C-1]/m[C][B],m[B][C]=E+w[B+1]*U,E=b[C-B]*U}m[C][C]=E}for(var H=_.zeros2d(h+1,l+1),K=_.zeros2d(2,l+1),q=0,ee=1,se=0,pe=0,xe=0,be=0,Ce=0,We=0,ot=l+1;We<ot;){var C=We++;H[0][C]=m[C][l]}for(var We=0,ot=l+1;We<ot;){var B=We++;q=0,ee=1,K[0][0]=1;for(var I=1,z=h+1;I<z;){var Te=I++;se=0,pe=B-Te,xe=l-Te,B>=Te&&(K[ee][0]=K[q][0]/m[xe+1][pe],se=K[ee][0]*m[pe][xe]),pe>=-1?be=1:be=-pe,B-1<=xe?Ce=Te-1:Ce=l-B;for(var Le=be,st=Ce+1;Le<st;){var C=Le++;K[ee][C]=(K[q][C]-K[q][C-1])/m[xe+1][pe+C],se+=K[ee][C]*m[pe+C][xe]}B<=xe&&(K[ee][Te]=-K[q][Te-1]/m[xe+1][B],se+=K[ee][Te]*m[B][xe]),H[Te][B]=se;var U=q;q=ee,ee=U}}for(var Ke=l,We=1,ot=h+1;We<ot;){for(var Te=We++,I=0,z=l+1;I<z;){var C=I++;H[Te][C]*=Ke}Ke*=l-Te}return H},Y.basisFunctions=function(r,a,l){var h=Y.knotSpan(a,r,l);return Y.basisFunctionsGivenKnotSpanIndex(h,r,a,l)},Y.basisFunctionsGivenKnotSpanIndex=function(r,a,l,h){var d=_.zeros1d(l+1),m=_.zeros1d(l+1),b=_.zeros1d(l+1),w=0,E=0;d[0]=1;for(var U=1,C=l+1;U<C;){var I=U++;m[I]=a-h[r+1-I],b[I]=h[r+I]-a,w=0;for(var z=0,B=I;z<B;){var H=z++;E=d[H]/(b[H+1]+m[I-H]),d[H]=w+b[H+1]*E,w=m[I-H]*E}d[I]=w}return d},Y.knotSpan=function(r,a,l){return Y.knotSpanGivenN(l.length-r-2,r,a,l)},Y.knotSpanGivenN=function(r,a,l,h){if(l>h[r+1]-oe.EPSILON)return r;if(l<h[a]+oe.EPSILON)return a;for(var d=a,m=r+1,b=Math.floor((d+m)/2);l<h[b]||l>=h[b+1];)l<h[b]?m=b:d=b,b=Math.floor((d+m)/2);return b},Y.dehomogenize=function(r){for(var a=r.length,l=[],h=r[a-1],d=r.length-1,m=0,b=d;m<b;){var w=m++;l.push(r[w]/h)}return l},Y.rational1d=function(r){for(var a=r[0].length-1,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=r[m].slice(0,a)}return l},Y.rational2d=function(r){for(var a=Y.rational1d,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=a(r[m])}return l},Y.weight1d=function(r){for(var a=r[0].length-1,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=r[m][a]}return l},Y.weight2d=function(r){for(var a=Y.weight1d,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=a(r[m])}return l},Y.dehomogenize1d=function(r){for(var a=Y.dehomogenize,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=a(r[m])}return l},Y.dehomogenize2d=function(r){for(var a=Y.dehomogenize1d,l=new Array(r.length),h=0,d=r.length;h<d;){var m=h++;l[m]=a(r[m])}return l},Y.homogenize1d=function(r,a){for(var l=r.length,h=r[0].length,d=[],m=0,b=[],w=a??_.rep(r.length,1),E=0,U=l;E<U;){var C=E++,I=[];b=r[C],m=w[C];for(var z=0,B=h;z<B;){var H=z++;I.push(b[H]*m)}I.push(m),d.push(I)}return d},Y.homogenize2d=function(r,a){var l=r.length,h=[],d;if(a!=null)d=a;else{for(var w=[],E=0,m=l;E<m;){var b=E++;w.push(_.rep(r[0].length,1))}d=w}for(var w=0,E=l;w<E;){var b=w++;h.push(Y.homogenize1d(r[b],d[b]))}return h};var $e=e.eval.Intersect=function(){};n["verb.eval.Intersect"]=$e,$e.__name__="verb.eval.Intersect",$e.surfaces=function(r,a,l){for(var h=Tt.rationalSurfaceAdaptive(r),d=Tt.rationalSurfaceAdaptive(a),m=$e.meshes(h,d),H=new Array(m.length),K=0,q=m.length;K<q;){for(var b=K++,w=m[b],E=new Array(w.length),U=0,C=w.length;U<C;){var I=U++,z=w[I];E[I]=$e.surfacesAtPointWithEstimate(r,a,z.uv0,z.uv1,l)}H[b]=E}for(var B=H,H=new Array(B.length),K=0,q=B.length;K<q;){for(var b=K++,ee=B[b],E=new Array(ee.length),U=0,C=ee.length;U<C;){var I=U++;E[I]=ee[I].point}H[b]=at.rationalInterpCurve(E,3)}return H},$e.surfacesAtPointWithEstimate=function(r,a,l,h,d){var m,b,w,E,U,C,I,z,B,H,K,q,ee,se=5,pe=0;do{if(m=Y.rationalSurfaceDerivatives(r,l[0],l[1],1),b=m[0][0],E=m[1][0],U=m[0][1],w=_.normalized(_.cross(E,U)),C=_.dot(w,b),I=Y.rationalSurfaceDerivatives(a,h[0],h[1],1),z=I[0][0],H=I[1][0],K=I[0][1],B=_.normalized(_.cross(H,K)),q=_.dot(B,z),ee=_.distSquared(b,z),ee<d*d)break;var xe=_.normalized(_.cross(w,B)),be=_.dot(xe,b),Ce=$e.threePlanes(w,C,B,q,xe,be);if(Ce==null)throw x.thrown("panic!");var Te=_.sub(Ce,b),Le=_.sub(Ce,z),st=_.cross(E,w),Ke=_.cross(U,w),We=_.cross(H,B),ot=_.cross(K,B),ft=_.dot(Ke,Te)/_.dot(Ke,E),Mt=_.dot(st,Te)/_.dot(st,U),Rt=_.dot(ot,Le)/_.dot(ot,H),tn=_.dot(We,Le)/_.dot(We,K);l=_.add([ft,Mt],l),h=_.add([Rt,tn],h),++pe}while(pe<se);return new it(l,h,b,ee)},$e.meshes=function(r,a,l,h){l==null&&(l=new Ae(r)),h==null&&(h=new Ae(a));for(var d=$e.boundingBoxTrees(l,h,0),m=new Array(d.length),E=0,C=d.length;E<C;){var b=E++,w=d[b];m[b]=$e.triangles(r,w.item0,a,w.item1)}for(var E=[],C=0,I=m;C<I.length;){var U=I[C];++C,U!=null&&E.push(U)}for(var C=[],I=0,z=E;I<z.length;){var U=z[I];++I,_.distSquared(U.min.point,U.max.point)>oe.EPSILON&&C.push(U)}var B=ce.unique(C,function(H,K){var q=_.sub(H.min.uv0,K.min.uv0),ee=_.dot(q,q),se=_.sub(H.max.uv0,K.max.uv0),pe=_.dot(se,se),xe=_.sub(H.min.uv0,K.max.uv0),be=_.dot(xe,xe),Ce=_.sub(H.max.uv0,K.min.uv0),Te=_.dot(Ce,Ce);return ee<oe.EPSILON&&pe<oe.EPSILON?!0:be<oe.EPSILON?Te<oe.EPSILON:!1});return $e.makeMeshIntersectionPolylines(B)},$e.meshSlices=function(r,a,l,h){for(var d=new ht(r),m=d.boundingBox(),b=m.min[0],w=m.min[1],E=m.max[0],U=m.max[1],C=_.span(a,l,h),I=[],z=0;z<C.length;){var B=C[z];++z;var H=[[b,w,B],[E,w,B],[E,U,B],[b,U,B]],K=[[0,0],[1,0],[1,1],[0,1]],q=[[0,1,2],[0,2,3]],ee=new Pt(q,H,null,K);I.push($e.meshes(r,ee,d))}return I},$e.makeMeshIntersectionPolylines=function(r){if(r.length==0)return[];for(var w=0;w<r.length;){var a=r[w];++w,a.max.opp=a.min,a.min.opp=a.max}for(var l=$e.kdTreeFromSegments(r),h=[],w=0;w<r.length;){var d=r[w];++w,h.push(d.min),h.push(d.max)}for(var w=0;w<h.length;){var m=h[w];if(++w,m.adj==null){var b=$e.lookupAdjacentSegment(m,l,r.length);b!=null&&b.adj==null&&(m.adj=b,b.adj=m)}}for(var w=[],E=0,U=h;E<U.length;){var C=U[E];++E,C.adj==null&&w.push(C)}var I=w;I.length==0&&(I=h);for(var z=[],B=0,H=!1;I.length!=0;){var K=I.pop();if(!K.visited){for(var q=[],ee=K;ee!=null&&!(ee.visited||(ee.visited=!0,ee.opp.visited=!0,q.push(ee),B+=2,ee=ee.opp.adj,ee==K)););q.length>0&&(q.push(q[q.length-1].opp),z.push(q))}if(I.length==0&&h.length>0&&(H||B<h.length)){H=!0;var se=h.pop();I.push(se)}}return z},$e.kdTreeFromSegments=function(r){for(var a=[],l=0;l<r.length;){var h=r[l];++l,a.push(new Je(h.min.point,h.min)),a.push(new Je(h.max.point,h.max))}return new Ee(a,_.distSquared)},$e.lookupAdjacentSegment=function(r,a,l){for(var w=[],E=0,h=a.nearest(r.point,l,oe.EPSILON);E<h.length;){var d=h[E];++E,r!=d.item0.obj&&w.push(d)}for(var m=w,b=new Array(m.length),w=0,E=m.length;w<E;){var U=w++;b[U]=m[U].item0.obj}var C=b;return C.length==1?C[0]:null},$e.curveAndSurface=function(r,a,l,h,d){l==null&&(l=.001),h==null&&(h=new gt(r)),d==null&&(d=new nt(a));for(var m=$e.boundingBoxTrees(h,d,l),b=new Array(m.length),pe=0,xe=m.length;pe<xe;){var w=pe++,E=m[w],U=E.item0,C=E.item1,I=ce.first(U.knots),z=ce.last(U.knots),B=(I+z)/2,H=ce.first(C.knotsU),K=ce.last(C.knotsU),q=ce.first(C.knotsV),ee=ce.last(C.knotsV),se=[(H+K)/2,(q+ee)/2];b[w]=$e.curveAndSurfaceWithEstimate(U,C,[B].concat(se),l)}for(var pe=[],xe=0,be=b;xe<be.length;){var Ce=be[xe];++xe,_.distSquared(Ce.curvePoint,Ce.surfacePoint)<l*l&&pe.push(Ce)}return ce.unique(pe,function(Te,Le){return Math.abs(Te.u-Le.u)<.5*l})},$e.curveAndSurfaceWithEstimate=function(r,a,l,h){h==null&&(h=.001);var d=function(E){var U=Y.rationalCurvePoint(r,E[0]),C=Y.rationalSurfacePoint(a,E[1],E[2]),I=_.sub(U,C);return _.dot(I,I)},m=function(E){var U=Y.rationalCurveDerivatives(r,E[0],1),C=Y.rationalSurfaceDerivatives(a,E[1],E[2],1),I=_.sub(C[0][0],U[0]),z=_.mul(-1,U[1]),B=C[1][0],H=C[0][1];return[2*_.dot(z,I),2*_.dot(B,I),2*_.dot(H,I)]},b=Lt.uncmin(d,l,h*h,m),w=b.solution;return new Et(w[0],[w[1],w[2]],Y.rationalCurvePoint(r,w[0]),Y.rationalSurfacePoint(a,w[1],w[2]))},$e.polylineAndMesh=function(r,a,l){for(var h=$e.boundingBoxTrees(new He(r),new Ae(a),l),d=[],m=0;m<h.length;){var b=h[m];++m;var w=b.item0,E=b.item1,U=$e.segmentWithTriangle(r.points[w],r.points[w+1],a.points,a.faces[E]);if(U!=null){var C=U.point,I=_.lerp(U.p,[r.params[w]],[r.params[w+1]])[0],z=rt.triangleUVFromPoint(a,E,C);d.push(new zt(C,I,z,w,E))}}return d},$e.boundingBoxTrees=function(r,a,l){l==null&&(l=1e-9);var h=[],d=[];h.push(r),d.push(a);for(var m=[];h.length>0;){var b=h.pop(),w=d.pop();if(!(b.empty()||w.empty())&&b.boundingBox().intersects(w.boundingBox(),l)){var r=b.indivisible(l),a=w.indivisible(l);if(r&&a){m.push(new Z(b.yield(),w.yield()));continue}else if(r&&!a){var E=w.split();h.push(b),d.push(E.item1),h.push(b),d.push(E.item0);continue}else if(!r&&a){var U=b.split();h.push(U.item1),d.push(w),h.push(U.item0),d.push(w);continue}var C=b.split(),I=w.split();h.push(C.item1),d.push(I.item1),h.push(C.item1),d.push(I.item0),h.push(C.item0),d.push(I.item1),h.push(C.item0),d.push(I.item0)}}return m},$e.curves=function(r,a,l){for(var h=$e.boundingBoxTrees(new gt(r),new gt(a),0),d=new Array(h.length),w=0,E=h.length;w<E;){var m=w++,b=h[m];d[m]=$e.curvesWithEstimate(r,a,ce.first(b.item0.knots),ce.first(b.item1.knots),l)}for(var w=[],E=0,U=d;E<U.length;){var C=U[E];++E,_.distSquared(C.point0,C.point1)<l&&w.push(C)}return ce.unique(w,function(I,z){return Math.abs(I.u0-z.u0)<l*5})},$e.curvesWithEstimate=function(r,a,l,E,d){var m=function(z){var B=Y.rationalCurvePoint(r,z[0]),H=Y.rationalCurvePoint(a,z[1]),K=_.sub(B,H);return _.dot(K,K)},b=function(z){var B=Y.rationalCurveDerivatives(r,z[0],1),H=Y.rationalCurveDerivatives(a,z[1],1),K=_.sub(B[0],H[0]),q=B[1],ee=_.mul(-1,H[1]);return[2*_.dot(q,K),2*_.dot(ee,K)]},w=Lt.uncmin(m,[l,E],d*d,b),E=w.solution[0],U=w.solution[1],C=Y.rationalCurvePoint(r,E),I=Y.rationalCurvePoint(a,U);return new yt(C,I,E,U)},$e.triangles=function(r,a,l,h){var d=r.faces[a],m=l.faces[h],b=rt.getTriangleNorm(r.points,d),w=rt.getTriangleNorm(l.points,m),E=r.points[d[0]],U=l.points[m[0]],C=$e.planes(E,b,U,w);if(C==null)return null;var I=$e.clipRayInCoplanarTriangle(C,r,a);if(I==null)return null;var z=$e.clipRayInCoplanarTriangle(C,l,h);if(z==null)return null;var B=$e.mergeTriangleClipIntervals(I,z,r,a,l,h);return B==null?null:new Yt(new tt(B.min.uv0,B.min.uv1,B.min.point,a,h),new tt(B.max.uv0,B.max.uv1,B.max.point,a,h))},$e.clipRayInCoplanarTriangle=function(r,a,l){for(var h=a.faces[l],d=[a.points[h[0]],a.points[h[1]],a.points[h[2]]],m=[a.uvs[h[0]],a.uvs[h[1]],a.uvs[h[2]]],b=[_.sub(m[1],m[0]),_.sub(m[2],m[1]),_.sub(m[0],m[2])],w=[_.sub(d[1],d[0]),_.sub(d[2],d[1]),_.sub(d[0],d[2])],C=_.normalized,I=new Array(w.length),q=0,z=w.length;q<z;){var E=q++;I[E]=C(w[E])}for(var U=I,C=_.norm,I=new Array(w.length),q=0,z=w.length;q<z;){var E=q++;I[E]=C(w[E])}for(var B=I,H=null,K=null,q=0;q<3;){var E=q++,ee=d[E],se=U[E],pe=$e.rays(ee,se,r.origin,r.dir);if(pe!=null){var xe=pe.u0,be=pe.u1;xe<-oe.EPSILON||xe>B[E]+oe.EPSILON||((H==null||be<H.u)&&(H=new D(be,_.onRay(r.origin,r.dir,be),_.onRay(m[E],b[E],xe/B[E]))),(K==null||be>K.u)&&(K=new D(be,_.onRay(r.origin,r.dir,be),_.onRay(m[E],b[E],xe/B[E]))))}}return K==null||H==null?null:new Yt(H,K)},$e.mergeTriangleClipIntervals=function(r,a,l,h,d,m){if(a.min.u>r.max.u+oe.EPSILON||r.min.u>a.max.u+oe.EPSILON)return null;var b=r.min.u>a.min.u?new Z(r.min,0):new Z(a.min,1),w=r.max.u<a.max.u?new Z(r.max,0):new Z(a.max,1),E=new Yt(new tt(null,null,b.item0.point,h,m),new tt(null,null,w.item0.point,h,m));return b.item1==0?(E.min.uv0=b.item0.uv,E.min.uv1=rt.triangleUVFromPoint(d,m,b.item0.point)):(E.min.uv0=rt.triangleUVFromPoint(l,h,b.item0.point),E.min.uv1=b.item0.uv),w.item1==0?(E.max.uv0=w.item0.uv,E.max.uv1=rt.triangleUVFromPoint(d,m,w.item0.point)):(E.max.uv0=rt.triangleUVFromPoint(l,h,w.item0.point),E.max.uv1=w.item0.uv),E},$e.planes=function(r,a,l,h){var d=_.cross(a,h);if(_.dot(d,d)<oe.EPSILON)return null;var m=0,b=Math.abs(d[0]),w=Math.abs(d[1]),E=Math.abs(d[2]);w>b&&(m=1,b=w),E>b&&(m=2,b=E);var U,C,I,z;m==0?(U=a[1],C=a[2],I=h[1],z=h[2]):m==1?(U=a[0],C=a[2],I=h[0],z=h[2]):(U=a[0],C=a[1],I=h[0],z=h[1]);var B=-_.dot(r,a),H=-_.dot(l,h),K=U*z-C*I,q=(C*H-B*z)/K,ee=(B*I-U*H)/K,se;return m==0?se=[0,q,ee]:m==1?se=[q,0,ee]:se=[q,ee,0],new Qe(se,_.normalized(d))},$e.threePlanes=function(r,a,l,h,d,m){var b=_.cross(l,d),w=_.dot(r,b);if(Math.abs(w)<oe.EPSILON)return null;var E=_.sub(_.mul(m,l),_.mul(h,d)),U=_.add(_.mul(a,b),_.cross(r,E));return _.mul(1/w,U)},$e.polylines=function(r,a,l){for(var h=$e.boundingBoxTrees(new He(r),new He(a),l),d=[],m=0;m<h.length;){var b=h[m];++m;var w=b.item0,E=b.item1,U=$e.segments(r.points[w],r.points[w+1],a.points[E],a.points[E+1],l);U!=null&&(U.u0=_.lerp(U.u0,[r.params[w]],[r.params[w+1]])[0],U.u1=_.lerp(U.u1,[a.params[E]],[a.params[E+1]])[0],d.push(U))}return d},$e.segments=function(r,a,l,h,d){var m=_.sub(a,r),b=Math.sqrt(_.dot(m,m)),w=_.mul(1/b,m),E=_.sub(h,l),U=Math.sqrt(_.dot(E,E)),C=_.mul(1/U,E),I=$e.rays(r,w,l,C);if(I!=null){var z=Math.min(Math.max(0,I.u0/b),1),B=Math.min(Math.max(0,I.u1/U),1),H=_.onRay(r,m,z),K=_.onRay(l,E,B),q=_.distSquared(H,K);if(q<d*d)return new yt(H,K,z,B)}return null},$e.rays=function(r,a,l,h){var d=_.dot(a,h),m=_.dot(a,l),b=_.dot(a,r),w=_.dot(h,l),E=_.dot(h,r),U=_.dot(a,a),C=_.dot(h,h),I=U*C-d*d;if(Math.abs(I)<oe.EPSILON)return null;var z=d*(m-b)-U*(w-E),B=z/I,H=(m-b+B*d)/U,K=_.onRay(r,a,H),q=_.onRay(l,h,B);return new yt(K,q,H,B)},$e.segmentWithTriangle=function(r,a,l,h){var d=l[h[0]],m=l[h[1]],b=l[h[2]],w=_.sub(m,d),E=_.sub(b,d),U=_.cross(w,E),C=_.sub(a,r),I=_.sub(r,d),z=-_.dot(U,I),B=_.dot(U,C);if(Math.abs(B)<oe.EPSILON)return null;var H=z/B;if(H<0||H>1)return null;var K=_.add(r,_.mul(H,C)),q=_.dot(w,E),ee=_.dot(w,w),se=_.dot(E,E),pe=_.sub(K,d),xe=_.dot(pe,w),be=_.dot(pe,E),Ce=q*q-ee*se;if(Math.abs(Ce)<oe.EPSILON)return null;var Te=(q*be-se*xe)/Ce,Le=(q*xe-ee*be)/Ce;return Te>1+oe.EPSILON||Le>1+oe.EPSILON||Le<-oe.EPSILON||Te<-oe.EPSILON||Te+Le>1+oe.EPSILON?null:new V(K,Te,Le,H)},$e.segmentAndPlane=function(r,a,l,h){var d=_.dot(h,_.sub(a,r));if(Math.abs(d)<oe.EPSILON)return null;var m=_.dot(h,_.sub(l,r)),b=m/d;return b>1+oe.EPSILON||b<-oe.EPSILON?null:{p:b}};var at=e.eval.Make=function(){};n["verb.eval.Make"]=at,at.__name__="verb.eval.Make",at.rationalTranslationalSurface=function(r,a){for(var l=Y.rationalCurvePoint(a,ce.first(a.knots)),h=ce.first(a.knots),d=ce.last(a.knots),m=2*a.controlPoints.length,b=(d-h)/(m-1),w=[],E=0,U=m;E<U;){var C=E++,I=_.sub(Y.rationalCurvePoint(a,h+C*b),l),z=mt.rationalCurveTransform(r,[[1,0,0,I[0]],[0,1,0,I[1]],[0,0,1,I[2]],[0,0,0,1]]);w.push(z)}return at.loftedSurface(w)},at.surfaceBoundaryCurves=function(r){var a=at.surfaceIsocurve(r,ce.first(r.knotsU),!1),l=at.surfaceIsocurve(r,ce.last(r.knotsU),!1),h=at.surfaceIsocurve(r,ce.first(r.knotsV),!0),d=at.surfaceIsocurve(r,ce.last(r.knotsV),!0);return[a,l,h,d]},at.surfaceIsocurve=function(r,a,l){l==null&&(l=!1);for(var h=l?r.knotsV:r.knotsU,d=l?r.degreeV:r.degreeU,m=ye.knotMultiplicities(h),b=-1,w=0,E=m.length;w<E;){var U=w++;if(Math.abs(a-m[U].knot)<oe.EPSILON){b=U;break}}var C=d+1;b>=0&&(C-=m[b].mult);var I=C>0?mt.surfaceKnotRefine(r,_.rep(C,a),l):r,z=Y.knotSpan(d,a,h);if(Math.abs(a-ce.first(h))<oe.EPSILON?z=0:Math.abs(a-ce.last(h))<oe.EPSILON&&(z=(l?I.controlPoints[0].length:I.controlPoints.length)-1),l){for(var B=I.degreeU,H=I.knotsU,w=[],E=0,K=I.controlPoints;E<K.length;){var q=K[E];++E,w.push(q[z])}return new Ve(B,H,w)}return new Ve(I.degreeV,I.knotsV,I.controlPoints[z])},at.loftedSurface=function(r,a){r=mt.unifyCurveKnotVectors(r);var l=r[0].degree;a==null&&(a=3),a>r.length-1&&(a=r.length-1);for(var h=r[0].knots,d=[],m=[],b=0,w=r[0].controlPoints.length;b<w;){for(var E=b++,U=new Array(r.length),C=0,I=r.length;C<I;){var z=C++;U[z]=r[z].controlPoints[E]}var B=U,H=at.rationalInterpCurve(B,a,!0);m.push(H.controlPoints),d=H.knots}return new Ze(l,a,h,d,m)},at.clonedCurve=function(r){for(var a=r.degree,l=r.knots.slice(),h=r.controlPoints,d=new Array(h.length),m=0,b=h.length;m<b;){var w=m++;d[w]=h[w].slice()}return new Ve(a,l,d)},at.rationalBezierCurve=function(r,a){for(var l=r.length-1,h=[],d=0,m=l+1;d<m;)d++,h.push(0);for(var d=0,m=l+1;d<m;)d++,h.push(1);return a==null&&(a=_.rep(r.length,1)),new Ve(l,h,Y.homogenize1d(r,a))},at.fourPointSurface=function(r,a,l,h,d){d==null&&(d=3);for(var m=d,b=[],w=0,E=d+1;w<E;){for(var U=w++,C=[],I=0,z=d+1;I<z;){var B=I++,H=1-U/m,K=_.lerp(H,r,a),q=_.lerp(H,h,l),ee=_.lerp(1-B/m,K,q);ee.push(1),C.push(ee)}b.push(C)}var se=_.rep(d+1,0),pe=_.rep(d+1,1);return new Ze(d,d,se.concat(pe),se.concat(pe),b)},at.ellipseArc=function(r,a,l,h,d){var m=_.norm(a),b=_.norm(l);a=_.normalized(a),l=_.normalized(l),d<h&&(d=2*Math.PI+h);var w=d-h,E=0;w<=Math.PI/2?E=1:w<=Math.PI?E=2:w<=3*Math.PI/2?E=3:E=4;var U=w/E,C=Math.cos(U/2),I=_.add(r,_.add(_.mul(m*Math.cos(h),a),_.mul(b*Math.sin(h),l))),z=_.sub(_.mul(Math.cos(h),l),_.mul(Math.sin(h),a)),B=[],H=_.zeros1d(2*E+3),K=0,q=h,ee=_.zeros1d(E*2);B[0]=I,ee[0]=1;for(var se=1,pe=E+1;se<pe;){var xe=se++;q+=U;var be=_.add(r,_.add(_.mul(m*Math.cos(q),a),_.mul(b*Math.sin(q),l)));ee[K+2]=1,B[K+2]=be;var Ce=_.sub(_.mul(Math.cos(q),l),_.mul(Math.sin(q),a)),Te=$e.rays(I,_.mul(1/_.norm(z),z),be,_.mul(1/_.norm(Ce),Ce)),Le=_.add(I,_.mul(Te.u0,z));ee[K+1]=C,B[K+1]=Le,K+=2,xe<E&&(I=be,z=Ce)}var st=2*E+1;switch(H[0]=0,H[st]=1,H[1]=0,H[1+st]=1,H[2]=0,H[2+st]=1,E){case 2:H[3]=H[4]=.5;break;case 3:H[3]=H[4]=.3333333333333333,H[5]=H[6]=.6666666666666666;break;case 4:H[3]=H[4]=.25,H[5]=H[6]=.5,H[7]=H[8]=.75;break}return new Ve(2,H,Y.homogenize1d(B,ee))},at.arc=function(r,a,l,h,d,m){return at.ellipseArc(r,_.mul(h,_.normalized(a)),_.mul(h,_.normalized(l)),d,m)},at.polyline=function(r){for(var a=[0,0],l=0,d=0,m=r.length-1;d<m;){var h=d++;l+=_.dist(r[h],r[h+1]),a.push(l)}a.push(l),a=_.mul(1/l,a);for(var d=[],m=0,b=r.length;m<b;){var h=m++;d.push(1)}var w=d;return new Ve(1,a,Y.homogenize1d(r.slice(0),w))},at.extrudedSurface=function(r,a,l){for(var h=[[],[],[]],d=[[],[],[]],m=Y.dehomogenize1d(l.controlPoints),b=Y.weight1d(l.controlPoints),w=_.mul(a,r),E=_.mul(.5*a,r),U=0,C=m.length;U<C;){var I=U++;h[2][I]=m[I],h[1][I]=_.add(E,m[I]),h[0][I]=_.add(w,m[I]),d[0][I]=b[I],d[1][I]=b[I],d[2][I]=b[I]}return new Ze(2,l.degree,[0,0,0,1,1,1],l.knots,Y.homogenize2d(h,d))},at.cylindricalSurface=function(r,a,l,h,d){var m=_.cross(r,a),b=at.arc(l,a,m,d,0,2*Math.PI);return at.extrudedSurface(r,h,b)},at.revolvedSurface=function(r,a,l,h){var d=Y.dehomogenize1d(r.controlPoints),m=Y.weight1d(r.controlPoints),b,w,H,K;h<=Math.PI/2?(b=1,w=_.zeros1d(6+2*(b-1))):h<=Math.PI?(b=2,w=_.zeros1d(6+2*(b-1)),w[3]=w[4]=.5):h<=3*Math.PI/2?(b=3,w=_.zeros1d(6+2*(b-1)),w[3]=w[4]=.3333333333333333,w[5]=w[6]=.6666666666666666):(b=4,w=_.zeros1d(6+2*(b-1)),w[3]=w[4]=.25,w[5]=w[6]=.5,w[7]=w[8]=.75);var E=h/b,U=3+2*(b-1);w[0]=0,w[U]=1,w[1]=0,w[U+1]=1,w[2]=0,w[U+2]=1;for(var C=Math.cos(E/2),I=0,z=_.zeros1d(b+1),B=_.zeros1d(b+1),H=_.zeros3d(2*b+1,d.length,3),K=_.zeros2d(2*b+1,d.length),ee=1,se=b+1;ee<se;){var q=ee++;I+=E,B[q]=Math.cos(I),z[q]=Math.sin(I)}for(var ee=0,se=d.length;ee<se;){var U=ee++,pe=Me.rayClosestPoint(d[U],a,l),xe=_.sub(d[U],pe),be=_.norm(xe),Ce=_.cross(l,xe);be>oe.EPSILON&&(xe=_.mul(1/be,xe),Ce=_.mul(1/be,Ce)),H[0][U]=d[U];var Te=d[U];K[0][U]=m[U];for(var Le=Ce,st=0,I=0,Ke=1,We=b+1;Ke<We;){var q=Ke++,ot=be==0?pe:_.add(pe,_.add(_.mul(be*B[q],xe),_.mul(be*z[q],Ce)));H[st+2][U]=ot,K[st+2][U]=m[U];var ft=_.sub(_.mul(B[q],Ce),_.mul(z[q],xe));if(be==0)H[st+1][U]=pe;else{var Mt=$e.rays(Te,_.mul(1/_.norm(Le),Le),ot,_.mul(1/_.norm(ft),ft)),Rt=_.add(Te,_.mul(Mt.u0,Le));H[st+1][U]=Rt}K[st+1][U]=C*m[U],st+=2,q<b&&(Te=ot,Le=ft)}}return new Ze(2,r.degree,w,r.knots,Y.homogenize2d(H,K))},at.sphericalSurface=function(r,a,l,h){var d=at.arc(r,_.mul(-1,a),l,h,0,Math.PI);return at.revolvedSurface(d,r,a,2*Math.PI)},at.conicalSurface=function(r,a,l,h,d){var m=2*Math.PI,b=1,w=[_.add(l,_.mul(h,r)),_.add(l,_.mul(d,a))],E=[0,0,1,1],U=[1,1],C=new Ve(b,E,Y.homogenize1d(w,U));return at.revolvedSurface(C,l,r,m)},at.rationalInterpCurve=function(r,a,l,h,d){if(l==null&&(l=!1),a==null&&(a=3),r.length<a+1)throw x.thrown("You need to supply at least degree + 1 points! You only supplied "+r.length+" points.");for(var m=[0],Ht=1,fn=r.length;Ht<fn;){var b=Ht++,w=_.norm(_.sub(r[b],r[b-1])),E=m[m.length-1];m.push(E+w)}for(var U=m[m.length-1],Ht=0,fn=m.length;Ht<fn;){var b=Ht++;m[b]/=U}for(var C=_.rep(a+1,0),I=h!=null&&d!=null,z=I?0:1,B=I?m.length-a+1:m.length-a,Ht=z,fn=B;Ht<fn;){for(var b=Ht++,H=0,K=0,q=a;K<q;){var ee=K++;H+=m[b+ee]}C.push(1/a*H)}for(var se=C.concat(_.rep(a+1,1)),pe=[],xe=I?r.length+1:r.length-1,be=I?r.length-(a-1):r.length-(a+1),Ht=0;Ht<m.length;){var Ce=m[Ht];++Ht;var Te=Y.knotSpanGivenN(xe,a,Ce,se),Le=Y.basisFunctionsGivenKnotSpanIndex(Te,Ce,a,se),st=Te-a,Ke=_.zeros1d(st),We=_.zeros1d(be-st);pe.push(Ke.concat(Le).concat(We))}if(I){var ot=pe[0].length-2,ft=[-1,1].concat(_.zeros1d(ot)),Mt=_.zeros1d(ot).concat([-1,1]);ce.spliceAndInsert(pe,1,0,ft),ce.spliceAndInsert(pe,pe.length-1,0,Mt)}for(var Rt=r[0].length,tn=[],qt=(1-se[se.length-a-2])/a,bt=se[a+1]/a,Ht=0,fn=Rt;Ht<fn;){var b=Ht++,nn;if(I){nn=[r[0][b]],nn.push(bt*h[b]);for(var kn=1,bn=r.length-1;kn<bn;){var ee=kn++;nn.push(r[ee][b])}nn.push(qt*d[b]),nn.push(ce.last(r)[b])}else{for(var xn=new Array(r.length),K=0,q=r.length;K<q;){var Ln=K++;xn[Ln]=r[Ln][b]}nn=xn}var li=Ie.solve(pe,nn);tn.push(li)}var vi=Ie.transpose(tn);if(!l){var is=_.rep(vi.length,1);vi=Y.homogenize1d(vi,is)}return new Ve(a,se,vi)};var mt=e.eval.Modify=function(){};n["verb.eval.Modify"]=mt,mt.__name__="verb.eval.Modify",mt.curveReverse=function(r){return new Ve(r.degree,mt.knotsReverse(r.knots),ce.reversed(r.controlPoints))},mt.surfaceReverse=function(r,a){if(a==null&&(a=!1),a){for(var l=r.degreeU,h=r.degreeV,d=r.knotsU,m=mt.knotsReverse(r.knotsV),b=[],w=0,E=r.controlPoints;w<E.length;){var U=E[w];++w,b.push(ce.reversed(U))}return new Ze(l,h,d,m,b)}return new Ze(r.degreeU,r.degreeV,mt.knotsReverse(r.knotsU),r.knotsV,ce.reversed(r.controlPoints))},mt.knotsReverse=function(r){var a=ce.first(r);ce.last(r);for(var l=[a],h=r.length,d=1,m=h;d<m;){var b=d++;l.push(l[b-1]+(r[h-b]-r[h-b-1]))}return l},mt.unifyCurveKnotVectors=function(r){for(var a=at.clonedCurve,I=new Array(r.length),ee=0,se=r.length;ee<se;){var l=ee++;I[l]=a(r[l])}r=I;for(var h=p.fold(r,function(xe,be){return mt.imax(xe.degree,be)},0),ee=0,se=r.length;ee<se;){var l=ee++;r[l].degree<h&&(r[l]=mt.curveElevateDegree(r[l],h))}for(var ee=[],se=0;se<r.length;){var d=r[se];++se,ee.push(new Yt(ce.first(d.knots),ce.last(d.knots)))}for(var m=ee,ee=0,se=r.length;ee<se;){for(var l=ee++,b=m[l].min,w=r[l].knots,I=new Array(w.length),E=0,U=w.length;E<U;){var C=E++;I[C]=w[C]-b}r[l].knots=I}for(var I=new Array(m.length),ee=0,se=m.length;ee<se;){var l=ee++,z=m[l];I[l]=z.max-z.min}for(var B=I,H=p.fold(B,function(xe,be){return Math.max(xe,be)},0),ee=0,se=r.length;ee<se;){for(var l=ee++,K=H/B[l],w=r[l].knots,I=new Array(w.length),E=0,U=w.length;E<U;){var C=E++;I[C]=w[C]*K}r[l].knots=I}for(var q=p.fold(r,function(xe,be){return _.sortedSetUnion(xe.knots,be)},[]),ee=0,se=r.length;ee<se;){var l=ee++,pe=_.sortedSetSub(q,r[l].knots);pe.length==0&&(r[l]=r[l]),r[l]=mt.curveKnotRefine(r[l],pe)}return r},mt.imin=function(r,a){return r<a?r:a},mt.imax=function(r,a){return r>a?r:a},mt.curveElevateDegree=function(r,a){if(a<=r.degree)return r;var l=r.knots.length-r.degree-2,h=r.degree,d=r.knots,m=r.controlPoints,b=a-r.degree,w=r.controlPoints[0].length,E=_.zeros2d(h+b+1,h+1),U=[],C=[],I=[],z=l+h+1,B=a,H=Math.floor(B/2),K=[],q=[];E[0][0]=1,E[B][h]=1;for(var ft=1,Mt=H+1;ft<Mt;)for(var ee=ft++,se=1/Xe.get(B,ee),pe=mt.imin(h,ee),xe=mt.imax(0,ee-b),be=pe+1;xe<be;){var Ce=xe++;E[ee][Ce]=se*Xe.get(h,Ce)*Xe.get(b,ee-Ce)}for(var ft=H+1,Mt=B;ft<Mt;)for(var ee=ft++,pe=mt.imin(h,ee),xe=mt.imax(0,ee-b),be=pe+1;xe<be;){var Ce=xe++;E[ee][Ce]=E[B-ee][h-Ce]}var Te=B+1,Le=-1,st=h,Ke=h+1,We=1,ot=d[0];K[0]=m[0];for(var ft=0,Mt=B+1;ft<Mt;){var ee=ft++;q[ee]=ot}for(var ft=0,Mt=h+1;ft<Mt;){var ee=ft++;U[ee]=m[ee]}for(;Ke<z;){for(var ee=Ke;Ke<z&&d[Ke]==d[Ke+1];)++Ke;var Rt=Ke-ee+1,tn=d[Ke],qt=Le;Le=h-Rt;var bt=qt>0?Math.floor((qt+2)/2):1,Ht=Le>0?Math.floor(B-(Le+1)/2):B;if(Le>0){for(var fn=tn-ot,nn=[],xn=h;xn>Rt;)nn[xn-Rt-1]=fn/(d[st+xn]-ot),--xn;for(var ft=1,Mt=Le+1;ft<Mt;){for(var Ce=ft++,Ln=Le-Ce,kn=Rt+Ce,bn=h;bn>=kn;)U[bn]=_.add(_.mul(nn[bn-kn],U[bn]),_.mul(1-nn[bn-kn],U[bn-1])),--bn;I[Ln]=U[h]}}for(var xe=bt,be=B+1;xe<be;){var li=xe++;C[li]=_.zeros1d(w);for(var pe=mt.imin(h,li),vi=mt.imax(0,li-b),is=pe+1;vi<is;){var Ts=vi++;C[li]=_.add(C[li],_.mul(E[li][Ts],U[Ts]))}}if(qt>1)for(var As=Te-2,Cs=Te,Rs=tn-ot,Ia=(tn-q[Te-1])/Rs,Ps=1,Na=qt;Ps<Na;){for(var rs=Ps++,ci=As,Pi=Cs,ji=Pi-Te+1;Pi-ci>rs;){if(ci<We){var gh=(tn-q[ci])/(ot-q[ci]);K[ci]=_.lerp(gh,K[ci],K[ci-1])}if(Pi>=bt){if(Pi-rs<=Te-B+qt){var xh=(tn-q[Pi-rs])/Rs;C[ji]=_.lerp(xh,C[ji],C[ji+1])}}else C[ji]=_.lerp(Ia,C[ji],C[ji+1]);++ci,--Pi,--ji}--As,++Cs}if(st!=h)for(var Fl=0,Mh=B-qt;Fl<Mh;)Fl++,q[Te]=ot,++Te;for(var Ol=bt,Sh=Ht+1;Ol<Sh;){var yh=Ol++;K[We]=C[yh],++We}if(Ke<z){for(var Bl=0,bh=Le;Bl<bh;){var zl=Bl++;U[zl]=I[zl]}for(var kl=Le,wh=h+1;kl<wh;){var Vl=kl++;U[Vl]=m[Ke-h+Vl]}st=Ke,++Ke,ot=tn}else for(var Hl=0,Eh=B+1;Hl<Eh;){var Th=Hl++;q[Te+Th]=tn}}return new Ve(a,q,K)},mt.rationalSurfaceTransform=function(r,a){for(var l=Y.dehomogenize2d(r.controlPoints),h=0,d=l.length;h<d;)for(var m=h++,b=0,w=l[m].length;b<w;){var E=b++,U=l[m][E];U.push(1),l[m][E]=Ie.dot(a,U).slice(0,U.length-1)}return new Ze(r.degreeU,r.degreeV,r.knotsU.slice(),r.knotsV.slice(),Y.homogenize2d(l,Y.weight2d(r.controlPoints)))},mt.rationalCurveTransform=function(r,a){for(var l=Y.dehomogenize1d(r.controlPoints),h=0,d=l.length;h<d;){var m=h++,b=l[m];b.push(1),l[m]=Ie.dot(a,b).slice(0,b.length-1)}return new Ve(r.degree,r.knots.slice(),Y.homogenize1d(l,Y.weight1d(r.controlPoints)))},mt.surfaceKnotRefine=function(r,a,l){var h=[],d,m,b;l?(b=r.controlPoints,d=r.knotsV,m=r.degreeV):(b=Ie.transpose(r.controlPoints),d=r.knotsU,m=r.degreeU);for(var w=null,E=0;E<b.length;){var U=b[E];++E,w=mt.curveKnotRefine(new Ve(m,d,U),a),h.push(w.controlPoints)}var C=w.knots;return l?new Ze(r.degreeU,r.degreeV,r.knotsU.slice(),C,h):(h=Ie.transpose(h),new Ze(r.degreeU,r.degreeV,C,r.knotsV.slice(),h))},mt.decomposeCurveIntoBeziers=function(r){for(var a=r.degree,l=r.controlPoints,h=r.knots,d=ye.knotMultiplicities(h),m=a+1,b=0;b<d.length;){var w=d[b];if(++b,w.mult<m){var E=_.rep(m-w.mult,w.knot),U=mt.curveKnotRefine(new Ve(a,h,l),E);h=U.knots,l=U.controlPoints}}h.length/m-1;for(var C=m*2,I=[],z=0;z<l.length;){var B=h.slice(z,z+C),H=l.slice(z,z+m);I.push(new Ve(a,B,H)),z+=m}return I},mt.curveKnotRefine=function(r,a){if(a.length==0)return at.clonedCurve(r);for(var l=r.degree,h=r.controlPoints,d=r.knots,m=h.length-1,b=m+l+1,w=a.length-1,E=Y.knotSpan(l,a[0],d),U=Y.knotSpan(l,a[w],d),C=[],I=[],z=0,B=E-l+1;z<B;){var H=z++;C[H]=h[H]}for(var z=U-1,B=m+1;z<B;){var H=z++;C[H+w+1]=h[H]}for(var z=0,B=E+1;z<B;){var H=z++;I[H]=d[H]}for(var z=U+l,B=b+1;z<B;){var H=z++;I[H+w+1]=d[H]}for(var H=U+l-1,K=U+l+w,q=w;q>=0;){for(;a[q]<=d[H]&&H>E;)C[K-l-1]=h[H-l-1],I[K]=d[H],--K,--H;C[K-l-1]=C[K-l];for(var z=1,B=l+1;z<B;){var ee=z++,se=K-l+ee,pe=I[K+ee]-a[q];Math.abs(pe)<oe.EPSILON?C[se-1]=C[se]:(pe/=I[K+ee]-d[H-l+ee],C[se-1]=_.add(_.mul(pe,C[se-1]),_.mul(1-pe,C[se])))}I[K]=a[q],--K,--q}return new Ve(l,I,C)},mt.curveKnotInsert=function(r,a,l){for(var h=r.degree,d=r.controlPoints,m=r.knots,b=0,w=d.length,E=Y.knotSpan(h,a,m),U=[],C=[],I=[],z=0,se=1,pe=E+1;se<pe;){var z=se++;C[z]=m[z]}for(var se=1,pe=l+1;se<pe;){var z=se++;C[E+z]=a}for(var se=E+1,pe=m.length;se<pe;){var z=se++;C[z+l]=m[z]}for(var se=0,pe=E-h+1;se<pe;){var z=se++;I[z]=d[z]}for(var se=E-b,pe=w;se<pe;){var z=se++;I[z+l]=d[z]}for(var se=0,pe=h-b+1;se<pe;){var z=se++;U[z]=d[E-h+z]}for(var B=0,H=0,se=1,pe=l+1;se<pe;){var K=se++;B=E-h+K;for(var q=0,ee=h-K-b+1;q<ee;){var z=q++;H=(a-m[B+z])/(m[z+E+1]-m[B+z]),U[z]=_.add(_.mul(H,U[z+1]),_.mul(1-H,U[z]))}I[B]=U[0],I[E+l-K-b]=U[h-K-b]}for(var se=B+1,pe=E-b;se<pe;){var z=se++;I[z]=U[z-B]}return new Ve(h,C,I)};var Tt=e.eval.Tess=function(){};n["verb.eval.Tess"]=Tt,Tt.__name__="verb.eval.Tess",Tt.rationalCurveRegularSample=function(r,a,l){return Tt.rationalCurveRegularSampleRange(r,r.knots[0],ce.last(r.knots),a,l)},Tt.rationalCurveRegularSampleRange=function(r,a,l,h,d){h<1&&(h=2);for(var m=[],b=(l-a)/(h-1),w=0,E=0,U=h;E<U;){var C=E++;w=a+b*C,d?m.push([w].concat(Y.rationalCurvePoint(r,w))):m.push(Y.rationalCurvePoint(r,w))}return m},Tt.rationalCurveAdaptiveSample=function(r,a,l){if(l==null&&(l=!1),a==null&&(a=1e-6),r.degree==1)if(l){for(var b=[],w=0,U=r.controlPoints.length;w<U;){var E=w++;b.push([r.knots[E+1]].concat(Y.dehomogenize(r.controlPoints[E])))}return b}else{for(var h=r.controlPoints,d=Y.dehomogenize,m=new Array(h.length),b=0,w=h.length;b<w;){var E=b++;m[E]=d(h[E])}return m}return Tt.rationalCurveAdaptiveSampleRange(r,r.knots[0],ce.last(r.knots),a,l)},Tt.rationalCurveAdaptiveSampleRange=function(r,a,l,h,d){var m=Y.rationalCurvePoint(r,a),b=Y.rationalCurvePoint(r,l),w=.5+.2*Math.random(),E=a+(l-a)*w,U=Y.rationalCurvePoint(r,E),C=_.sub(m,b),I=_.sub(m,U);if(_.dot(C,C)<h&&_.dot(I,I)>h||!Me.threePointsAreFlat(m,U,b,h)){var z=a+(l-a)*.5,B=Tt.rationalCurveAdaptiveSampleRange(r,a,z,h,d),H=Tt.rationalCurveAdaptiveSampleRange(r,z,l,h,d);return B.slice(0,-1).concat(H)}else return d?[[a].concat(m),[l].concat(b)]:[m,b]},Tt.rationalSurfaceNaive=function(r,a,l){a<1&&(a=1),l<1&&(l=1),r.degreeU,r.degreeV,r.controlPoints;for(var h=r.knotsU,d=r.knotsV,m=ce.last(h)-h[0],b=ce.last(d)-d[0],w=m/a,E=b/l,U=[],C=[],I=[],Ce=0,Te=a+1;Ce<Te;)for(var z=Ce++,B=0,H=l+1;B<H;){var K=B++,q=z*w,ee=K*E;C.push([q,ee]);var se=Y.rationalSurfaceDerivatives(r,q,ee,1),pe=se[0][0];U.push(pe);var xe=_.normalized(_.cross(se[1][0],se[0][1]));I.push(xe)}for(var be=[],Ce=0,Te=a;Ce<Te;)for(var z=Ce++,B=0,H=l;B<H;){var K=B++,Le=z*(l+1)+K,st=(z+1)*(l+1)+K,Ke=st+1,We=Le+1,ot=[Le,st,Ke],ft=[Le,Ke,We];be.push(ot),be.push(ft)}return new Pt(be,U,I,C)},Tt.divideRationalSurfaceAdaptive=function(r,a){a==null&&(a=new Fn),a.minDivsU=a.minDivsU!=null?a.minDivsU:1,a.minDivsU=a.minDivsV!=null?a.minDivsV:1,a.refine=a.refine!=null?a.refine:!0;for(var l=(r.controlPoints.length-1)*2,h=(r.controlPoints[0].length-1)*2,d=a.minDivsU=a.minDivsU>l?a.minDivsU:l,m=a.minDivsV=a.minDivsV>h?a.minDivsV:h,b=ce.last(r.knotsU),w=r.knotsU[0],E=ce.last(r.knotsV),U=r.knotsV[0],C=(b-w)/d,I=(E-U)/m,z=[],B=[],Le=0,st=m+1;Le<st;){for(var H=Le++,K=[],q=0,ee=d+1;q<ee;){var se=q++,pe=w+C*se,xe=U+I*H,be=Y.rationalSurfaceDerivatives(r,pe,xe,1),Ce=_.normalized(_.cross(be[0][1],be[1][0]));K.push(new ae(be[0][0],Ce,[pe,xe],-1,_.isZero(Ce)))}B.push(K)}for(var Le=0,st=m;Le<st;)for(var H=Le++,q=0,ee=d;q<ee;){var se=q++,Te=[B[m-H-1][se],B[m-H-1][se+1],B[m-H][se+1],B[m-H][se]];z.push(new On(r,Te))}if(!a.refine)return z;for(var Le=0,st=m;Le<st;)for(var H=Le++,q=0,ee=d;q<ee;){var se=q++,Ke=H*d+se,We=Tt.north(Ke,H,se,d,m,z),ot=Tt.east(Ke,H,se,d,m,z),ft=Tt.south(Ke,H,se,d,m,z),Mt=Tt.west(Ke,H,se,d,m,z);z[Ke].neighbors=[ft,ot,We,Mt],z[Ke].divide(a)}return z},Tt.north=function(r,a,l,h,d,m){return a==0?null:m[r-h]},Tt.south=function(r,a,l,h,d,m){return a==d-1?null:m[r+h]},Tt.east=function(r,a,l,h,d,m){return l==h-1?null:m[r+1]},Tt.west=function(r,a,l,h,d,m){return l==0?null:m[r-1]},Tt.triangulateAdaptiveRefinementNodeTree=function(r){for(var a=Pt.empty(),l=0;l<r.length;){var h=r[l];++l,h.triangulate(a)}return a},Tt.rationalSurfaceAdaptive=function(r,a){a==null&&(a=new Fn);var l=Tt.divideRationalSurfaceAdaptive(r,a);return Tt.triangulateAdaptiveRefinementNodeTree(l)};var Fn=e.eval.AdaptiveRefinementOptions=function(){this.minDivsV=1,this.minDivsU=1,this.refine=!0,this.maxDepth=10,this.minDepth=0,this.normTol=.025};n["verb.eval.AdaptiveRefinementOptions"]=Fn,Fn.__name__="verb.eval.AdaptiveRefinementOptions",Fn.prototype={__class__:Fn};var On=e.eval.AdaptiveRefinementNode=function(r,a,l){if(this.srf=r,this.neighbors=l??[null,null,null,null],this.corners=a,this.corners==null){var h=r.knotsU[0],d=ce.last(r.knotsU),m=r.knotsV[0],b=ce.last(r.knotsV);this.corners=[ae.fromUv(h,m),ae.fromUv(d,m),ae.fromUv(d,b),ae.fromUv(h,b)]}};n["verb.eval.AdaptiveRefinementNode"]=On,On.__name__="verb.eval.AdaptiveRefinementNode",On.prototype={isLeaf:function(){return this.children==null},center:function(){return this.centerPoint!=null?this.centerPoint:this.evalSrf(this.u05,this.v05)},evalCorners:function(){if(this.u05=(this.corners[0].uv[0]+this.corners[2].uv[0])/2,this.v05=(this.corners[0].uv[1]+this.corners[2].uv[1])/2,this.corners[0].point==null){var r=this.corners[0];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[1].point==null){var r=this.corners[1];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[2].point==null){var r=this.corners[2];this.evalSrf(r.uv[0],r.uv[1],r)}if(this.corners[3].point==null){var r=this.corners[3];this.evalSrf(r.uv[0],r.uv[1],r)}},evalSrf:function(r,a,l){var h=Y.rationalSurfaceDerivatives(this.srf,r,a,1),d=h[0][0],m=_.cross(h[0][1],h[1][0]),b=_.isZero(m);return b||(m=_.normalized(m)),l!=null?(l.degen=b,l.point=d,l.normal=m,l):new ae(d,m,[r,a],-1,b)},getEdgeCorners:function(r){if(this.isLeaf())return[this.corners[r]];if(this.horizontal)switch(r){case 0:return this.children[0].getEdgeCorners(0);case 1:return this.children[0].getEdgeCorners(1).concat(this.children[1].getEdgeCorners(1));case 2:return this.children[1].getEdgeCorners(2);case 3:return this.children[1].getEdgeCorners(3).concat(this.children[0].getEdgeCorners(3))}switch(r){case 0:return this.children[0].getEdgeCorners(0).concat(this.children[1].getEdgeCorners(0));case 1:return this.children[1].getEdgeCorners(1);case 2:return this.children[1].getEdgeCorners(2).concat(this.children[0].getEdgeCorners(2));case 3:return this.children[0].getEdgeCorners(3)}return null},getAllCorners:function(r){var a=[this.corners[r]];if(this.neighbors[r]==null)return a;for(var l=this.neighbors[r].getEdgeCorners((r+2)%4),h=r%2,d=oe.EPSILON,m=this,b=[function(B){return B.uv[0]>m.corners[0].uv[0]+d?B.uv[0]<m.corners[2].uv[0]-d:!1},function(B){return B.uv[1]>m.corners[0].uv[1]+d?B.uv[1]<m.corners[2].uv[1]-d:!1}],w=b[h],E=[],U=0,C=l;U<C.length;){var I=C[U];++U,w(I)&&E.push(I)}var z=E;return z.reverse(),a.concat(z)},midpoint:function(r){if(this.midPoints==null&&(this.midPoints=[null,null,null,null]),this.midPoints[r]!=null)return this.midPoints[r];switch(r){case 0:this.midPoints[0]=this.evalSrf(this.u05,this.corners[0].uv[1]);break;case 1:this.midPoints[1]=this.evalSrf(this.corners[1].uv[0],this.v05);break;case 2:this.midPoints[2]=this.evalSrf(this.u05,this.corners[2].uv[1]);break;case 3:this.midPoints[3]=this.evalSrf(this.corners[0].uv[0],this.v05);break}return this.midPoints[r]},hasBadNormals:function(){return this.corners[0].degen||this.corners[1].degen||this.corners[2].degen?!0:this.corners[3].degen},fixNormals:function(){for(var r=this.corners.length,a=0,l=r;a<l;){var h=a++;if(this.corners[h],this.corners[h].degen){var d=this.corners[(h+1)%r],m=this.corners[(h+3)%r];this.corners[h].normal=d.degen?m.normal:d.normal}}},shouldDivide:function(r,a){if(a<r.minDepth)return!0;if(a>=r.maxDepth)return!1;if(this.hasBadNormals())return this.fixNormals(),!1;if(this.splitVert=_.normSquared(_.sub(this.corners[0].normal,this.corners[1].normal))>r.normTol||_.normSquared(_.sub(this.corners[2].normal,this.corners[3].normal))>r.normTol,this.splitHoriz=_.normSquared(_.sub(this.corners[1].normal,this.corners[2].normal))>r.normTol||_.normSquared(_.sub(this.corners[3].normal,this.corners[0].normal))>r.normTol,this.splitVert||this.splitHoriz)return!0;var l=this.center();return _.normSquared(_.sub(l.normal,this.corners[0].normal))>r.normTol||_.normSquared(_.sub(l.normal,this.corners[1].normal))>r.normTol||_.normSquared(_.sub(l.normal,this.corners[2].normal))>r.normTol?!0:_.normSquared(_.sub(l.normal,this.corners[3].normal))>r.normTol},divide:function(r){r==null&&(r=new Fn),r.normTol==null&&(r.normTol=.085),r.minDepth==null&&(r.minDepth=0),r.maxDepth==null&&(r.maxDepth=10),this._divide(r,0,!0)},_divide:function(r,a,l){if(this.evalCorners(),!!this.shouldDivide(r,a)){if(++a,this.splitVert&&!this.splitHoriz?l=!1:!this.splitVert&&this.splitHoriz&&(l=!0),this.horizontal=l,this.horizontal){var h=[this.corners[0],this.corners[1],this.midpoint(1),this.midpoint(3)],d=[this.midpoint(3),this.midpoint(1),this.corners[2],this.corners[3]];this.children=[new On(this.srf,h),new On(this.srf,d)],this.children[0].neighbors=[this.neighbors[0],this.neighbors[1],this.children[1],this.neighbors[3]],this.children[1].neighbors=[this.children[0],this.neighbors[1],this.neighbors[2],this.neighbors[3]]}else{var m=[this.corners[0],this.midpoint(0),this.midpoint(2),this.corners[3]],b=[this.midpoint(0),this.corners[1],this.corners[2],this.midpoint(2)];this.children=[new On(this.srf,m),new On(this.srf,b)],this.children[0].neighbors=[this.neighbors[0],this.children[1],this.neighbors[2],this.neighbors[3]],this.children[1].neighbors=[this.neighbors[0],this.neighbors[1],this.neighbors[2],this.children[0]]}for(var w=0,E=this.children;w<E.length;){var U=E[w];++w,U._divide(r,a,!l)}}},triangulate:function(r){if(r==null&&(r=Pt.empty()),this.isLeaf())return this.triangulateLeaf(r);for(var a=0,l=this.children;a<l.length;){var h=l[a];if(++a,h==null)break;h.triangulate(r)}return r},triangulateLeaf:function(r){var a=r.points.length,l=[],h=[],d=0,m=this.getAllCorners(0);m.length==2&&(d=1);for(var w=0,b=m.length;w<b;){var B=w++;l.push(m[B])}var m=this.getAllCorners(1);m.length==2&&(d=2);for(var w=0,b=m.length;w<b;){var B=w++;l.push(m[B])}var m=this.getAllCorners(2);m.length==2&&(d=3);for(var w=0,b=m.length;w<b;){var B=w++;l.push(m[B])}var m=this.getAllCorners(3);m.length==2&&(d=4);for(var w=0,b=m.length;w<b;){var B=w++;l.push(m[B])}for(var w=0;w<l.length;){var E=l[w];if(++w,E.id!=-1){h.push(E.id);continue}r.uvs.push(E.uv),r.points.push(E.point),r.normals.push(E.normal),E.id=a,h.push(a),++a}if(l.length==4)return r.faces.push([h[0],h[3],h[1]]),r.faces.push([h[3],h[2],h[1]]),r;if(l.length==5){var U=h.length;return r.faces.push([h[d],h[(d+2)%U],h[(d+1)%U]]),r.faces.push([h[(d+4)%U],h[(d+3)%U],h[d]]),r.faces.push([h[d],h[(d+3)%U],h[(d+2)%U]]),r}var C=this.center();r.uvs.push(C.uv),r.points.push(C.point),r.normals.push(C.normal);for(var I=r.points.length-1,z=0,B=l.length-1;z<l.length;)r.faces.push([I,h[z],h[B]]),++z,B=z-1;return r},__class__:On};var xt=e.exe.Dispatcher=function(){};n["verb.exe.Dispatcher"]=xt,xt.__name__="verb.exe.Dispatcher",xt.init=function(){xt._init||(xt._workerPool=new Pn(xt.THREADS),xt._init=!0)},xt.dispatchMethod=function(r,a,l){xt.init();var h=new de,d=function(m){h.resolve(m)};return xt._workerPool.addWork(r.__name__,a,l,d),new le(h)};var Pn=e.exe.WorkerPool=function(r,a){a==null&&(a="verb.js"),r==null&&(r=1),this._callbacks=new J,this._working=new J,this._pool=[],this._queue=[];for(var l=0,h=r;l<h;){l++;var d;try{d=new Worker(Pn.basePath+a)}catch{d=new Worker(Pn.basePath+a.substring(0,-3)+".min.js")}this._pool.push(d)}};n["verb.exe.WorkerPool"]=Pn,Pn.__name__="verb.exe.WorkerPool",Pn.prototype={addWork:function(r,a,l,h){var d=new oi(r,a,l);this._callbacks.h[d.id]=h,this._queue.push(d),this.processQueue()},processQueue:function(){for(var r=this;this._queue.length>0&&this._pool.length>0;){var a=this._queue.shift(),l=[a.id],h=[this._pool.shift()];this._working.h[l[0]]=h[0],h[0].onmessage=(function(d,m){return function(b){r._working.remove(m[0]),r._pool.push(d[0]);try{r._callbacks.h.hasOwnProperty(m[0])&&(r._callbacks.h[m[0]](b.data.result),r._callbacks.remove(m[0]))}catch(E){var w=x.caught(E).unwrap();console.log("src/verb/exe/WorkerPool.hx:82:",w)}r.processQueue()}})(h,l),h[0].postMessage(a)}},__class__:Pn};var oi=function(r,a,l){this.className=r,this.methodName=a,this.args=l,this.id=oi.uuid++};n["verb.exe._WorkerPool.Work"]=oi,oi.__name__="verb.exe._WorkerPool.Work",oi.prototype={__class__:oi};var Bn=function(){};n["verb.geom.ICurve"]=Bn,Bn.__name__="verb.geom.ICurve",Bn.__isInterface__=!0,Bn.__interfaces__=[Ne],Bn.prototype={__class__:Bn};var Ut=e.geom.NurbsCurve=function(r){this._data=It.isValidNurbsCurveData(r)};n["verb.geom.NurbsCurve"]=Ut,Ut.__name__="verb.geom.NurbsCurve",Ut.__interfaces__=[Bn],Ut.byKnotsControlPointsWeights=function(r,a,l,h){return new Ut(new Ve(r,a.slice(),Y.homogenize1d(l,h)))},Ut.byPoints=function(r,a){return a==null&&(a=3),new Ut(at.rationalInterpCurve(r,a))},Ut.__super__=Pe,Ut.prototype=c(Pe.prototype,{degree:function(){return this._data.degree},knots:function(){return this._data.knots.slice(0)},controlPoints:function(){return Y.dehomogenize1d(this._data.controlPoints)},weights:function(){return Y.weight1d(this._data.controlPoints)},asNurbs:function(){return new Ve(this.degree(),this.knots(),Y.homogenize1d(this.controlPoints(),this.weights()))},clone:function(){return new Ut(this._data)},domain:function(){return new Yt(ce.first(this._data.knots),ce.last(this._data.knots))},transform:function(r){return new Ut(mt.rationalCurveTransform(this._data,r))},transformAsync:function(r){return xt.dispatchMethod(mt,"rationalCurveTransform",[this._data,r]).then(function(a){return new Ut(a)})},point:function(r){return Y.rationalCurvePoint(this._data,r)},pointAsync:function(r){return xt.dispatchMethod(Y,"rationalCurvePoint",[this._data,r])},tangent:function(r){return Y.rationalCurveTangent(this._data,r)},tangentAsync:function(r){return xt.dispatchMethod(Y,"rationalCurveTangent",[this._data,r])},derivatives:function(r,a){return a==null&&(a=1),Y.rationalCurveDerivatives(this._data,r,a)},derivativesAsync:function(r,a){return a==null&&(a=1),xt.dispatchMethod(Y,"rationalCurveDerivatives",[this._data,r,a])},closestPoint:function(r){return ye.rationalCurveClosestPoint(this._data,r)},closestPointAsync:function(r){return xt.dispatchMethod(ye,"rationalCurveClosestPoint",[this._data,r])},closestParam:function(r){return ye.rationalCurveClosestParam(this._data,r)},closestParamAsync:function(r){return xt.dispatchMethod(ye,"rationalCurveClosestParam",[this._data,r])},length:function(){return ye.rationalCurveArcLength(this._data)},lengthAsync:function(){return xt.dispatchMethod(ye,"rationalCurveArcLength",[this._data])},lengthAtParam:function(r){return ye.rationalCurveArcLength(this._data,r)},lengthAtParamAsync:function(){return xt.dispatchMethod(ye,"rationalCurveArcLength",[this._data])},paramAtLength:function(r,a){return ye.rationalCurveParamAtArcLength(this._data,r,a)},paramAtLengthAsync:function(r,a){return xt.dispatchMethod(ye,"rationalCurveParamAtArcLength",[this._data,r,a])},divideByEqualArcLength:function(r){return Nt.rationalCurveByEqualArcLength(this._data,r)},divideByEqualArcLengthAsync:function(r){return xt.dispatchMethod(Nt,"rationalCurveByEqualArcLength",[this._data,r])},divideByArcLength:function(r){return Nt.rationalCurveByArcLength(this._data,r)},divideByArcLengthAsync:function(r){return xt.dispatchMethod(Nt,"rationalCurveByArcLength",[this._data,r])},split:function(r){for(var a=Nt.curveSplit(this._data,r),l=new Array(a.length),h=0,d=a.length;h<d;){var m=h++;l[m]=new Ut(a[m])}return l},splitAsync:function(r){return xt.dispatchMethod(Nt,"curveSplit",[this._data,r]).then(function(a){for(var l=new Array(a.length),h=0,d=a.length;h<d;){var m=h++;l[m]=new Ut(a[m])}return l})},reverse:function(){return new Ut(mt.curveReverse(this._data))},reverseAsync:function(){return xt.dispatchMethod(mt,"curveReverse",[this._data]).then(function(r){return new Ut(r)})},tessellate:function(r){return Tt.rationalCurveAdaptiveSample(this._data,r,!1)},tessellateAsync:function(r){return xt.dispatchMethod(Tt,"rationalCurveAdaptiveSample",[this._data,r,!1])},__class__:Ut});var jn=e.geom.Arc=function(r,a,l,h,d,m){Ut.call(this,at.arc(r,a,l,h,d,m)),this._center=r,this._xaxis=a,this._yaxis=l,this._radius=h,this._minAngle=d,this._maxAngle=m};n["verb.geom.Arc"]=jn,jn.__name__="verb.geom.Arc",jn.__super__=Ut,jn.prototype=c(Ut.prototype,{center:function(){return this._center},xaxis:function(){return this._xaxis},yaxis:function(){return this._yaxis},radius:function(){return this._radius},minAngle:function(){return this._minAngle},maxAngle:function(){return this._maxAngle},__class__:jn});var $i=e.geom.BezierCurve=function(r,a){Ut.call(this,at.rationalBezierCurve(r,a))};n["verb.geom.BezierCurve"]=$i,$i.__name__="verb.geom.BezierCurve",$i.__super__=Ut,$i.prototype=c(Ut.prototype,{__class__:$i});var Yi=e.geom.Circle=function(r,a,l,h){jn.call(this,r,a,l,h,0,Math.PI*2)};n["verb.geom.Circle"]=Yi,Yi.__name__="verb.geom.Circle",Yi.__super__=jn,Yi.prototype=c(jn.prototype,{__class__:Yi});var mi=function(){};n["verb.geom.ISurface"]=mi,mi.__name__="verb.geom.ISurface",mi.__isInterface__=!0,mi.__interfaces__=[Ne],mi.prototype={__class__:mi};var L=e.geom.NurbsSurface=function(r){this._data=It.isValidNurbsSurfaceData(r)};n["verb.geom.NurbsSurface"]=L,L.__name__="verb.geom.NurbsSurface",L.__interfaces__=[mi],L.byKnotsControlPointsWeights=function(r,a,l,h,d,m){return new L(new Ze(r,a,l,h,Y.homogenize2d(d,m)))},L.byCorners=function(r,a,l,h){return new L(at.fourPointSurface(r,a,l,h))},L.byLoftingCurves=function(r,a){for(var l=[],h=0;h<r.length;){var d=r[h];++h,l.push(d.asNurbs())}return new L(at.loftedSurface(l,a))},L.__super__=Pe,L.prototype=c(Pe.prototype,{degreeU:function(){return this._data.degreeU},degreeV:function(){return this._data.degreeV},knotsU:function(){return this._data.knotsU.slice(0)},knotsV:function(){return this._data.knotsV.slice(0)},controlPoints:function(){return Y.dehomogenize2d(this._data.controlPoints)},weights:function(){return Y.weight2d(this._data.controlPoints)},asNurbs:function(){return new Ze(this.degreeU(),this.degreeV(),this.knotsU(),this.knotsV(),Y.homogenize2d(this.controlPoints(),this.weights()))},clone:function(){return new L(this.asNurbs())},domainU:function(){return new Yt(ce.first(this._data.knotsU),ce.last(this._data.knotsU))},domainV:function(){return new Yt(ce.first(this._data.knotsV),ce.last(this._data.knotsV))},point:function(r,a){return Y.rationalSurfacePoint(this._data,r,a)},pointAsync:function(r,a){return xt.dispatchMethod(Y,"rationalSurfacePoint",[this._data,r,a])},normal:function(r,a){return Y.rationalSurfaceNormal(this._data,r,a)},normalAsync:function(r,a){return xt.dispatchMethod(Y,"rationalSurfaceNormal",[this._data,r,a])},derivatives:function(r,a,l){return l==null&&(l=1),Y.rationalSurfaceDerivatives(this._data,r,a,l)},derivativesAsync:function(r,a,l){return l==null&&(l=1),xt.dispatchMethod(Y,"rationalSurfaceDerivatives",[this._data,r,a,l])},closestParam:function(r){return ye.rationalSurfaceClosestParam(this._data,r)},closestParamAsync:function(r){return xt.dispatchMethod(ye,"rationalSurfaceClosestParam",[this._data,r])},closestPoint:function(r){return ye.rationalSurfaceClosestPoint(this._data,r)},closestPointAsync:function(r){return xt.dispatchMethod(ye,"rationalSurfaceClosestPoint",[this._data,r])},split:function(r,a){a==null&&(a=!1);for(var l=Nt.surfaceSplit(this._data,r,a),h=new Array(l.length),d=0,m=l.length;d<m;){var b=d++;h[b]=new L(l[b])}return h},splitAsync:function(r,a){return a==null&&(a=!1),xt.dispatchMethod(Nt,"surfaceSplit",[this._data,r,a]).then(function(l){return l.map(function(h){return new L(h)})})},reverse:function(r){return r==null&&(r=!1),new L(mt.surfaceReverse(this._data,r))},reverseAsync:function(r){return r==null&&(r=!1),xt.dispatchMethod(mt,"surfaceReverse",[this._data,r]).then(function(a){return new L(a)})},isocurve:function(r,a){return a==null&&(a=!1),new Ut(at.surfaceIsocurve(this._data,r,a))},isocurveAsync:function(r,a){return a==null&&(a=!1),xt.dispatchMethod(at,"surfaceIsocurve",[this._data,r,a]).then(function(l){return new Ut(l)})},boundaries:function(r){for(var a=at.surfaceBoundaryCurves(this._data),l=new Array(a.length),h=0,d=a.length;h<d;){var m=h++;l[m]=new Ut(a[m])}return l},boundariesAsync:function(r){return xt.dispatchMethod(at,"surfaceBoundaryCurves",[this._data]).then(function(a){for(var l=new Array(a.length),h=0,d=a.length;h<d;){var m=h++;l[m]=new Ut(a[m])}return l})},tessellate:function(r){return Tt.rationalSurfaceAdaptive(this._data,r)},tessellateAsync:function(r){return xt.dispatchMethod(Tt,"rationalSurfaceAdaptive",[this._data,r])},transform:function(r){return new L(mt.rationalSurfaceTransform(this._data,r))},transformAsync:function(r){return xt.dispatchMethod(mt,"rationalSurfaceTransform",[this._data,r]).then(function(a){return new L(a)})},__class__:L});var ne=e.geom.ConicalSurface=function(r,a,l,h,d){L.call(this,at.conicalSurface(r,a,l,h,d)),this._axis=r,this._xaxis=a,this._base=l,this._height=h,this._radius=d};n["verb.geom.ConicalSurface"]=ne,ne.__name__="verb.geom.ConicalSurface",ne.__super__=L,ne.prototype=c(L.prototype,{axis:function(){return this._axis},xaxis:function(){return this._xaxis},base:function(){return this._base},height:function(){return this._height},radius:function(){return this._radius},__class__:ne});var fe=e.geom.CylindricalSurface=function(r,a,l,h,d){L.call(this,at.cylindricalSurface(r,a,l,h,d)),this._axis=r,this._xaxis=a,this._base=l,this._height=h,this._radius=d};n["verb.geom.CylindricalSurface"]=fe,fe.__name__="verb.geom.CylindricalSurface",fe.__super__=L,fe.prototype=c(L.prototype,{axis:function(){return this._axis},xaxis:function(){return this._xaxis},base:function(){return this._base},height:function(){return this._height},radius:function(){return this._radius},__class__:fe});var ue=e.geom.EllipseArc=function(r,a,l,h,d){Ut.call(this,at.ellipseArc(r,a,l,h,d)),this._center=r,this._xaxis=a,this._yaxis=l,this._minAngle=h,this._maxAngle=d};n["verb.geom.EllipseArc"]=ue,ue.__name__="verb.geom.EllipseArc",ue.__super__=Ut,ue.prototype=c(Ut.prototype,{center:function(){return this._center},xaxis:function(){return this._xaxis},yaxis:function(){return this._yaxis},minAngle:function(){return this._minAngle},maxAngle:function(){return this._maxAngle},__class__:ue});var ie=e.geom.Ellipse=function(r,a,l){ue.call(this,r,a,l,0,Math.PI*2)};n["verb.geom.Ellipse"]=ie,ie.__name__="verb.geom.Ellipse",ie.__super__=ue,ie.prototype=c(ue.prototype,{__class__:ie});var Re=e.geom.ExtrudedSurface=function(r,a){L.call(this,at.extrudedSurface(_.normalized(a),_.norm(a),r.asNurbs())),this._profile=r,this._direction=a};n["verb.geom.ExtrudedSurface"]=Re,Re.__name__="verb.geom.ExtrudedSurface",Re.__super__=L,Re.prototype=c(L.prototype,{profile:function(){return this._profile},direction:function(){return this._direction},__class__:Re});var Fe=e.geom.Intersect=function(){};n["verb.geom.Intersect"]=Fe,Fe.__name__="verb.geom.Intersect",Fe.curves=function(r,a,l){return l==null&&(l=.001),$e.curves(r.asNurbs(),a.asNurbs(),l)},Fe.curvesAsync=function(r,a,l){return l==null&&(l=.001),xt.dispatchMethod($e,"curves",[r.asNurbs(),a.asNurbs(),l])},Fe.curveAndSurface=function(r,a,l){return l==null&&(l=.001),$e.curveAndSurface(r.asNurbs(),a.asNurbs(),l)},Fe.curveAndSurfaceAsync=function(r,a,l){return l==null&&(l=.001),xt.dispatchMethod($e,"curveAndSurface",[r.asNurbs(),a.asNurbs(),l])},Fe.surfaces=function(r,a,l){l==null&&(l=.001);for(var h=$e.surfaces(r.asNurbs(),a.asNurbs(),l),d=new Array(h.length),m=0,b=h.length;m<b;){var w=m++;d[w]=new Ut(h[w])}return d},Fe.surfacesAsync=function(r,a,l){return l==null&&(l=.001),xt.dispatchMethod($e,"surfaces",[r.asNurbs(),a.asNurbs(),l]).then(function(h){return h.map(function(d){return new Ut(d)})})};var Ye=e.geom.Line=function(r,a){Ut.call(this,at.polyline([r,a])),this._start=r,this._end=a};n["verb.geom.Line"]=Ye,Ye.__name__="verb.geom.Line",Ye.__super__=Ut,Ye.prototype=c(Ut.prototype,{start:function(){return this._start},end:function(){return this._end},__class__:Ye});var je=e.geom.RevolvedSurface=function(r,a,l,h){L.call(this,at.revolvedSurface(r.asNurbs(),a,l,h)),this._profile=r,this._center=a,this._axis=l,this._angle=h};n["verb.geom.RevolvedSurface"]=je,je.__name__="verb.geom.RevolvedSurface",je.__super__=L,je.prototype=c(L.prototype,{profile:function(){return this._profile},center:function(){return this._center},axis:function(){return this._center},angle:function(){return this._angle},__class__:je});var ct=e.geom.SphericalSurface=function(r,a){L.call(this,at.sphericalSurface(r,[0,0,1],[1,0,0],a)),this._center=r,this._radius=a};n["verb.geom.SphericalSurface"]=ct,ct.__name__="verb.geom.SphericalSurface",ct.__super__=L,ct.prototype=c(L.prototype,{center:function(){return this._center},radius:function(){return this._radius},__class__:ct});var vt=e.geom.SweptSurface=function(r,a){L.call(this,at.rationalTranslationalSurface(r.asNurbs(),a.asNurbs())),this._profile=r,this._rail=a};n["verb.geom.SweptSurface"]=vt,vt.__name__="verb.geom.SweptSurface",vt.__super__=L,vt.prototype=c(L.prototype,{profile:function(){return this._profile},rail:function(){return this._rail},__class__:vt});function Be(r){return r instanceof Array?new re(r):r.iterator()}function _t(r,a){if(a==null)return null;a.__id__==null&&(a.__id__=t.$haxeUID++);var l;return r.hx__closures__==null?r.hx__closures__={}:l=r.hx__closures__[a.__id__],l==null&&(l=a.bind(r),r.hx__closures__[a.__id__]=l),l}t.$haxeUID|=0,typeof performance<"u"&&typeof performance.now=="function"&&(f.now=performance.now.bind(performance)),n.Math=Math,String.fromCodePoint==null&&(String.fromCodePoint=function(r){return r<65536?String.fromCharCode(r):String.fromCharCode((r>>10)+55232)+String.fromCharCode((r&1023)+56320)}),Object.defineProperty(String.prototype,"__class__",{value:n.String=String,enumerable:!1,writable:!0}),String.__name__="String",n.Array=Array,Array.__name__="Array",Date.prototype.__class__=n.Date=Date,Date.__name__="Date";var Xt={},jt={},gn=Number,Bt=Boolean,et={},zn={};$.__toStr={}.toString,g.USE_CACHE=!1,g.USE_ENUM_INDEX=!1,g.BASE64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:",F.DEFAULT_RESOLVER=new k,F.BASE64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:",_e.queue=new O,Xe.memo=new J,e.TOLERANCE=oe.TOLERANCE=1e-6,e.EPSILON=oe.EPSILON=1e-10,e.VERSION=oe.VERSION="3.0.3",ye.Tvalues=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],ye.Cvalues=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],xt.THREADS=1,xt._init=!1,Pn.basePath="",oi.uuid=0,qe.main()})(i,typeof window<"u"?window:typeof xo<"u"?xo:typeof self<"u"?self:xo)})(nh);const L_=nh;var U_=L_,pi=P_(U_);function D_(i,e){const t=new yn,n=i.map(s=>new j(s[0]??0,s[1]??0,s[2]??0));if(n.length>=2){const s=new Wt().setFromPoints(n),o=new ai(s,new Rn({color:e,transparent:!0,opacity:.5}));t.add(o)}if(n.length<=200){const s=new es(.009,8,8),o=new Es({color:e});for(const u of n){const c=new _n(s,o);c.position.copy(u),t.add(c)}}return t}function Sa(i,e,t,n,s=16737894){const u=pi.geom.NurbsCurve.byKnotsControlPointsWeights(i.order-1,i.knots,i.coeffs).asNurbs();let c=0;for(const A of u.controlPoints){const T=A[3]??1;for(let x=0;x<3;x++){const g=Math.abs((A[x]??0)/T);g>c&&(c=g)}}const f=Math.min(2e4,Math.max(200,Math.ceil(c*200))),p=pi.eval.Tess.rationalCurveRegularSample(u,f,!1);if(p.length<2)return;const v=p.map(A=>new j(A[0],A[1],A[2])),M=new yn,S=new Wt().setFromPoints(v),y=new Rn({color:t});M.add(new ai(S,y)),Nn(M,e),Nn(D_(i.coeffs,s),`${e}-control`),ts(M)}function ih(i,e,t=4491485){const n=new yn,s=i.points.map(T=>new j(T[0]??0,T[1]??0,T[2]??0));let o=1/0,u=1/0,c=1/0,f=-1/0,p=-1/0,v=-1/0;for(const T of s)T.x<o&&(o=T.x),T.x>f&&(f=T.x),T.y<u&&(u=T.y),T.y>p&&(p=T.y),T.z<c&&(c=T.z),T.z>v&&(v=T.z);const M=Math.max(f-o,p-u,v-c),S=Math.max(.005,Math.min(.4,M*.0017)),y=new es(S,6,6),A=new Es({color:t});for(const T of s){const x=new _n(y,A);x.position.copy(T),n.add(x)}if(Nn(n,e),s.length<=2e3){const T=new yn,x=new Wt().setFromPoints(s),g=new Rn({color:t,transparent:!0,opacity:.4});T.add(new ai(x,g)),Nn(T,`${e}-polyline`)}ts(n)}function Mo(i,e,t=16746496){const n=pi.geom.NurbsCurve.byKnotsControlPointsWeights(i.order-1,i.knots,i.coeffs),s=i.knots[i.order-1],u=i.knots[i.numPoints]-s;let c=0;for(const R of i.coeffs)for(const G of R){const re=Math.abs(G);re>c&&(c=re)}const f=Math.max(c*2,1),p=1e3,v=[];let M=0;for(let R=0;R<p;R++){const G=s+R/(p-1)*u,re=n.derivatives(G,2),$=new j(re[1][0],re[1][1],re[1][2]),Q=new j(re[2][0],re[2][1],re[2][2]),de=$.length();if(de<1e-12)continue;const ge=new j().crossVectors($,Q).length()/(de*de*de),he=$.clone().multiplyScalar(1/de),_e=Q.clone().addScaledVector(he,-Q.dot(he)),De=_e.length();if(De<1e-12)continue;const qe=_e.multiplyScalar(1/De);v.push({p:new j(re[0][0],re[0][1],re[0][2]),n:qe,k:ge,u:G}),ge>M&&(M=ge)}if(v.length<2||M<1e-12)return;const S=[];let y=0;for(let R=1;R<v.length;R++){const G=v[R].p.distanceTo(v[R-1].p),re=(v[R].k+v[R-1].k)*.5+1e-6,$=G*Math.sqrt(re);S.push($),y+=$}const A=Math.min(500,Math.max(300,Math.ceil(v.length/4))),T=[];let x=0,g=0;for(let R=0;R<A;R++){const G=R/(A-1)*y;for(;x<S.length&&g+S[x]<G;)g+=S[x],x++;x>=S.length&&(x=S.length-1);const re=S[x]||1,$=(G-g)/re,Q=v[x],de=v[Math.min(x+1,v.length-1)],le=new j().lerpVectors(Q.p,de.p,$),ge=new j().lerpVectors(Q.n,de.n,$).normalize(),he=Q.k+(de.k-Q.k)*$;T.push({p:le,n:ge,k:he})}const k=f*.15/M,F=new yn,P=[],J=[];for(const R of T){const G=R.p.clone().addScaledVector(R.n,-R.k*k);P.push(R.p.x,R.p.y,R.p.z,G.x,G.y,G.z),J.push(G)}const O=new Wt;O.setAttribute("position",new cn(P,3));const W=new Rn({color:t,transparent:!0,opacity:.7});F.add(new ws(O,W));const X=new Wt().setFromPoints(J),N=new Rn({color:t,transparent:!0,opacity:.35});F.add(new ai(X,N)),Nn(F,e)}function rh(i){const e=[];for(let t=0;t<i.nU;t++){const n=[];for(let s=0;s<i.nV;s++){const o=i.coeffs[t*i.nV+s];n.push([o[0]??0,o[1]??0,o[2]??0])}e.push(n)}return e}function I_(i){const e=i.points.length,t=new Float32Array(e*3),n=new Float32Array(e*3);for(let u=0;u<e;u++){const c=i.points[u];t[u*3+0]=c[0],t[u*3+1]=c[1],t[u*3+2]=c[2];const f=i.normals[u]??[0,0,1];n[u*3+0]=f[0],n[u*3+1]=f[1],n[u*3+2]=f[2]}const s=new Uint32Array(i.faces.length*3);for(let u=0;u<i.faces.length;u++){const c=i.faces[u];s[u*3+0]=c[0],s[u*3+1]=c[1],s[u*3+2]=c[2]}const o=new Wt;return o.setAttribute("position",new vn(t,3)),o.setAttribute("normal",new vn(n,3)),o.setIndex(new vn(s,1)),o}function sh(i,e){const t=new yn,{nU:n,nV:s,coeffs:o}=i;if(o.length<n*s)return t;const u=[];for(let c=0;c<n;c++)for(let f=0;f<s;f++){const p=o[c*s+f];u.push(new j(p[0]??0,p[1]??0,p[2]??0))}for(let c=0;c<n;c++){const f=[];for(let M=0;M<s;M++)f.push(u[c*s+M]);const p=new Wt().setFromPoints(f),v=new Rn({color:e,transparent:!0,opacity:.4});t.add(new ai(p,v))}for(let c=0;c<s;c++){const f=[];for(let M=0;M<n;M++)f.push(u[M*s+c]);const p=new Wt().setFromPoints(f),v=new Rn({color:e,transparent:!0,opacity:.4});t.add(new ai(p,v))}if(n*s<=200){const c=new es(.012,6,6),f=new Es({color:e});for(const p of u){const v=new _n(c,f);v.position.copy(p),t.add(v)}}return t}function N_(i,e,t,n,s,o={},u=16737894){s?.("Tessellating..."),i.nU*i.nV;const c={maxDepth:o.maxDepth??5,minDivsU:o.minDivsU??8,minDivsV:o.minDivsV??8,normTol:o.normTol??.05},f=pi.geom.NurbsSurface.byKnotsControlPointsWeights(i.orderU-1,i.orderV-1,i.knotsU,i.knotsV,rh(i));let p;try{p=f.tessellate({minDivsU:c.minDivsU,minDivsV:c.minDivsV,maxDepth:c.maxDepth,minDepth:0,normTol:c.normTol,refine:!0})}catch(A){s?.(`Tessellation failed: ${String(A)}`);return}const v=I_(p);v.computeBoundingBox(),v.computeBoundingSphere();const M=new Es({color:t,side:ti,shininess:80,specular:1118481,flatShading:!1}),S=new yn,y=new _n(v,M);S.add(y),Nn(S,e),Nn(sh(i,u),`${e}-control`),s?.(`Surface rendered with ${p.faces.length/2|0} quads (${p.points.length} verts)`),ts(S)}function ya(i,e,t,n,s,o=16737894){const u=new Wt;u.setAttribute("position",new vn(i.positions,3)),u.setAttribute("normal",new vn(i.normals,3)),u.setIndex(new vn(i.indices,1)),u.computeBoundingBox(),u.computeBoundingSphere();const c=new Es({color:t,side:ti,shininess:80,specular:1118481,flatShading:!1}),f=new yn;f.add(new _n(u,c)),Nn(f,e),Nn(sh(i.surface,o),`${e}-control`),s?.(`Surface rendered with ${i.numQuads} quads (${i.numVerts} verts)`),ts(f)}function F_(i,e){const t=pi.geom.NurbsSurface.byKnotsControlPointsWeights(i.orderU-1,i.orderV-1,i.knotsU,i.knotsV,rh(i)),n=new yn,s=16,o=200,u=i.knotsU[0],c=i.knotsU[i.knotsU.length-1],f=i.knotsV[0],p=i.knotsV[i.knotsV.length-1],v=new Rn({color:e,transparent:!0,opacity:.45});for(let M=0;M<s;M++){const S=u+(c-u)*(M/(s-1)),y=[];for(let T=0;T<o;T++){const x=f+(p-f)*(T/(o-1)),g=t.point(S,x);y.push(new j(g[0],g[1],g[2]))}const A=new Wt().setFromPoints(y);n.add(new ai(A,v))}for(let M=0;M<s;M++){const S=f+(p-f)*(M/(s-1)),y=[];for(let T=0;T<o;T++){const x=u+(c-u)*(T/(o-1)),g=t.point(x,S);y.push(new j(g[0],g[1],g[2]))}const A=new Wt().setFromPoints(y);n.add(new ai(A,v))}return n}function So(i,e,t=15658734){th(i)||Nn(F_(e,t),i)}function yo(i,e,t=2236962){if(th(e))return;const n=T_().getObjectByName(i);if(!n)return;let s=null;if(n.traverse(f=>{!s&&f.isMesh&&(s=f.geometry)}),!s)return;const o=new Yv(s),u=new Rn({color:t,transparent:!0,opacity:.5}),c=new yn;c.add(new ws(o,u)),Nn(c,e)}function ah(i,e,t=4491485){const n=new yn,s=new yn,{nU:o,nV:u,points:c}=i,f=[];let p=1/0,v=1/0,M=1/0,S=-1/0,y=-1/0,A=-1/0;for(let O=0;O<o;O++){const W=[];for(let X=0;X<u;X++){const N=c[O][X],R=N[0]??0,G=N[1]??0,re=N[2]??0;R<p&&(p=R),R>S&&(S=R),G<v&&(v=G),G>y&&(y=G),re<M&&(M=re),re>A&&(A=re),W.push(new j(R,G,re))}f.push(W)}const T=Math.max(S-p,y-v,A-M),x=Math.max(.003,Math.min(.4,T*16e-5)),g=new Rn({color:t,transparent:!0,opacity:.4,depthTest:!1});for(let O=0;O<u;O++){const W=[];for(let N=0;N<o;N++)W.push(f[N][O]);const X=new Wt().setFromPoints(W);s.add(new ai(X,g))}for(let O=0;O<o;O++){const W=[];for(let N=0;N<u;N++)W.push(f[O][N]);const X=new Wt().setFromPoints(W);s.add(new ai(X,g))}s.renderOrder=9;const k=new Float32Array(o*u*3);for(let O=0;O<o;O++)for(let W=0;W<u;W++){const X=f[O][W],N=(O*u+W)*3;k[N+0]=X.x,k[N+1]=X.y,k[N+2]=X.z}const F=new Wt;F.setAttribute("position",new vn(k,3));const P=new $u({color:t,size:x*2,sizeAttenuation:!0,depthTest:!1,transparent:!0,opacity:.55}),J=new qv(F,P);J.renderOrder=10,n.add(J),Nn(n,e),Nn(s,`${e}-polyline`),ts(n)}function O_(i){return new Worker("/knot-removal-minimax3-app/assets/surface.worker-CAhE0hPi.js",{type:"module",name:i?.name})}let fa=null,oh=1;const ar=new Map;function lh(){if(fa)return fa;const i=new O_;return fa=i,i.onmessage=e=>{const t=e.data;if(t.type==="progress"){const n=ar.get(t.id);if(!n?.onProgress)return;const s=performance.now();if(s-n.lastProgressPost<50)return;n.lastProgressPost=s,n.onProgress(t.phase,t.ratio,t.msg)}else if(t.type==="done"){const n=ar.get(t.id);if(!n)return;ar.delete(t.id),n.resolve({surface:t.surface,positions:t.positions,normals:t.normals,indices:t.indices,numQuads:t.numQuads,numVerts:t.numVerts,ms:t.ms})}else if(t.type==="error"){const n=ar.get(t.id);if(!n)return;ar.delete(t.id),n.reject(new Error(t.message))}},fa}function da(i,e){const t=oh++,n=lh(),s={type:"tessellate",id:t,url:`/knot-removal-minimax3-app/samples/${i}.json`,tessOpts:{}};return new Promise((o,u)=>{ar.set(t,{resolve:o,reject:u,onProgress:e,lastProgressPost:0}),n instanceof Worker?n.postMessage(s):u(new Error("Worker not initialized"))})}function bo(i,e,t){const n=oh++,s=lh(),o={type:"tessellate-only",id:n,label:e,surface:i,tessOpts:{}};return new Promise((u,c)=>{ar.set(n,{resolve:u,reject:c,onProgress:t,lastProgressPost:0}),s.postMessage(o)})}async function wo(i){const e=await fetch(`/knot-removal-minimax3-app/samples/curve-${i}.json`);if(!e.ok)throw new Error(`Failed to load curve-${i}.json: HTTP ${e.status}`);const t=await e.json();if(t.knots.length!==t.numPoints+t.order)throw new Error(`curve-${i}.json: knot count ${t.knots.length} != ${t.numPoints} + ${t.order}`);if(t.coeffs.length!==t.numPoints)throw new Error(`curve-${i}.json: coeffs length ${t.coeffs.length} != ${t.numPoints}`);return t}async function ch(i){const e=await fetch(`/knot-removal-minimax3-app/samples/${i}.json`);if(!e.ok)throw new Error(`Failed to load ${i}.json: HTTP ${e.status}`);return await e.json()}function B_(){const e=[];for(let n=0;n<20;n++){const s=n/20*Math.PI*2;e.push([Math.cos(s),Math.sin(s)])}const t=[0,0,0,0];for(let n=1;n<=16;n++)t.push(n/17);return t.push(1,1,1,1),{order:4,dim:2,numPoints:20,knots:t,coeffs:e}}function uh(){return{order:6,dim:3,numPoints:14,knots:[0,0,0,0,0,0,.1124826442468747,.2186280153221363,.3312257321005593,.4420386028039535,.5509513362085112,.6617226594445149,.7798605488683164,.8929381439918187,1,1,1,1,1,1],coeffs:[[0,0,1],[.07692307692307693,.4647231720437686,.8854560256532099],[.1538461538461539,.8229838658936565,.5680647467311558],[.2307692307692308,.992708874098054,.120536680255323],[.3076923076923077,.9350162426854148,-.3546048870425357],[.3846153846153846,.6631226582407952,-.7485107481711012],[.4615384615384616,.2393156642875577,-.970941817426052],[.5384615384615384,-.2393156642875574,-.9709418174260521],[.6153846153846154,-.6631226582407953,-.748510748171101],[.6923076923076923,-.9350162426854147,-.3546048870425359],[.7692307692307693,-.992708874098054,.1205366802553232],[.8461538461538461,-.8229838658936566,.5680647467311556],[.9230769230769231,-.4647231720437684,.88545602565321],[1,-2449293598294706e-31,1]]}}function hh(i,e){if(i<e+1)throw new Error(`buildHighOrderCurve: n=${i} < order+1=${e+1}`);const t=[];for(let s=0;s<i;s++){const o=s/(i-1)*4;t.push([Math.sin(o)+.3*Math.sin(3*o),Math.cos(o*1.7)+.2*Math.sin(2*o),.4*Math.sin(o*2.3)])}const n=[];for(let s=0;s<e;s++)n.push(0);for(let s=1;s<=i-e;s++)n.push(s/(i-e+1));for(let s=0;s<e;s++)n.push(1);return{order:e,dim:3,numPoints:i,knots:n,coeffs:t}}function z_(){return hh(16,7)}function k_(){return hh(18,9)}function Dl(i,e,t,n,s){if(i<t+1)throw new Error(`buildHighOrderSurface: nU=${i} < orderU+1=${t+1}`);if(e<n+1)throw new Error(`buildHighOrderSurface: nV=${e} < orderV+1=${n+1}`);const o=[];for(let c=0;c<i;c++){const f=c/(i-1);for(let p=0;p<e;p++){const v=p/(e-1);o.push(s(f,v))}}const u=(c,f)=>{const p=[];for(let v=0;v<f;v++)p.push(0);for(let v=1;v<=c-f;v++)p.push(v/(c-f+1));for(let v=0;v<f;v++)p.push(1);return p};return{orderU:t,orderV:n,dim:3,nU:i,nV:e,knotsU:u(i,t),knotsV:u(e,n),coeffs:o}}function V_(){return Dl(9,9,5,5,(i,e)=>{const t=2*Math.PI*i,n=Math.PI/2*e,s=Math.cos(n);return[Math.cos(t)*s,Math.sin(t)*s,Math.sin(n)]})}function H_(){return Dl(9,9,6,6,(i,e)=>{const t=2*i-1,n=2*e-1;return[t,n,t*t-n*n]})}function G_(){return Dl(9,9,7,7,(i,e)=>{const t=2*Math.PI*i,n=e-.5,s=Math.cosh(n);return[Math.cos(t)*s,Math.sin(t)*s,n]})}function fh(i){const e=[];for(let t=0;t<i.nU;t++){const n=[];for(let s=0;s<i.nV;s++){const o=i.coeffs[t*i.nV+s];n.push([o[0]??0,o[1]??0,o[2]??0])}e.push(n)}return e}function W_(i,e){const t=pi.geom.NurbsCurve.byKnotsControlPointsWeights(i.order-1,i.knots,i.coeffs),n=Math.max(e,4)+1,s=[];for(let f=0;f<n;f++){const p=f/(n-1),v=t.point(p);s.push([v[0]??0,v[1]??0,v[2]??0])}if(s.length<2)return Array.from({length:e},()=>i.coeffs[0].slice());const o=[0];for(let f=1;f<s.length;f++){const p=s[f][0]-s[f-1][0],v=s[f][1]-s[f-1][1],M=s[f][2]-s[f-1][2];o.push(o[f-1]+Math.sqrt(p*p+v*v+M*M))}const u=o[o.length-1]||1,c=[];for(let f=0;f<e;f++){const p=f/(e-1)*u;let v=0,M=o.length-1;for(;v<M;){const g=v+M>>1;o[g]<p?v=g+1:M=g}const S=v===0?0:v-1,y=o[v]-o[S]||1,A=(p-o[S])/y,T=(S+A)/(s.length-1),x=t.point(T);c.push([x[0]??0,x[1]??0,x[2]??0])}return c}function au(i=30,e=4){const t=[];for(let n=0;n<i;n++){const s=n/i*Math.PI*2;t.push([Math.cos(s),Math.sin(s),0])}return{dim:3,numPoints:i,order:e,points:t}}function ou(i=40,e=4){const t=uh();return{dim:t.dim,numPoints:i,order:e,points:W_(t,i)}}async function lu(i=100,e=100,t=4,n=4){const s=await ch("venus"),o=pi.geom.NurbsSurface.byKnotsControlPointsWeights(s.orderU-1,s.orderV-1,s.knotsU,s.knotsV,fh(s)),u=[];for(let c=0;c<i;c++){const f=[],p=c/(i-1);for(let v=0;v<e;v++){const M=v/(e-1),S=o.point(p,M);f.push([S[0],S[1],S[2]])}u.push(f)}return{dim:s.dim,nU:i,nV:e,orderU:t,orderV:n,points:u}}async function cu(i=100,e=100,t=4,n=4){const s=await ch("flower"),o=pi.geom.NurbsSurface.byKnotsControlPointsWeights(s.orderU-1,s.orderV-1,s.knotsU,s.knotsV,fh(s)),u=[];for(let c=0;c<i;c++){const f=[],p=c/(i-1);for(let v=0;v<e;v++){const M=v/(e-1),S=o.point(p,M);f.push([S[0],S[1],S[2]])}u.push(f)}return{dim:s.dim,nU:i,nV:e,orderU:t,orderV:n,points:u}}function dh(i){const e=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(i<.5)return Math.PI/(Math.sin(Math.PI*i)*dh(1-i));i-=1;let t=e[0];for(let s=1;s<e.length;s++)t+=e[s]/(i+s);const n=i+e.length-1.5;return Math.sqrt(2*Math.PI)*Math.pow(n,i+.5)*Math.exp(-n)*t}function uu(i,e){if(e===0)return 0;const t=e/2;let n=Math.pow(t,i)/dh(i+1),s=n;for(let o=1;o<80&&(n*=-(t*t)/(o*(o+i)),s+=n,!(Math.abs(n)<1e-16*Math.abs(s)));o++);return s}function X_(i,e){if(i===0&&e>=-1&&e<=0||!(i>=0||e>=0))return 0;const u=Math.sqrt(i*i+e*e),c=Math.sin(2/3*(Math.atan2(-i,e)+Math.PI));return(1.275*uu(2/3,3.18*u)+.805*uu(2/3,1.96*u))*c}function q_(i=201,e=201,t=4,n=4){const s=[];for(let o=0;o<i;o++){const u=-1+2*o/(i-1),c=[];for(let f=0;f<e;f++){const p=-1+2*f/(e-1);c.push([u,p,X_(u,p)])}s.push(c)}return{dim:3,nU:i,nV:e,orderU:t,orderV:n,points:s}}function $_(i,e){const t={mode:"curve",algorithm:"remove",tolerance:[.01,.01,.01],leftEnd:1,rightEnd:2,uLeftEnd:0,uRightEnd:0,vLeftEnd:0,vRightEnd:0,maxIter:100,running:!1,showOriginalCurve:!0,showResultCurve:!0,showOriginalControl:!0,showResultControl:!0,showOriginalIso:!1,showResultIso:!1,showOriginalMesh:!1,showResultMesh:!1,showOriginalPoints:!0,showPointPolyline:!1,showOriginalCurvatureComb:!1,showResultCurvatureComb:!1,hasResult:!1};let n=Y_,s=[];function o(){i.innerHTML="";const u=document.createElement("h2");u.textContent="Algorithm",i.appendChild(u),Ur(i,"Mode"),yi(i,"Mode",[["Curve","curve"],["Surface","surface"]],t.mode,T=>{t.mode=T,e.onModeChange(t.mode),o()}),Ur(i,"Algorithm");const c=t.mode==="curve"?"Curve Algorithm":"Surface Algorithm",f=t.mode==="curve"?[["Knot Removal","remove"],["To Cubic","to_cubic"],["Approximate From Points","approximate_from_points"]]:[["Knot Removal","remove"],["To Bicubic","to_cubic"],["Approximate From Points","approximate_from_points"]];yi(i,c,f,t.algorithm,T=>{t.algorithm=T,o(),e.onAlgorithmChange(t.algorithm)}),Ur(i,"Presets");const p=t.algorithm==="approximate_from_points",v=p?t.mode==="curve"?"Load Data Points":"Load Grid Points":"Load NURBS",M=p?t.mode==="curve"?[["Circle samples (150)","circle_pts_150"],["Circle samples (300)","circle_pts_300"],["Quintic samples (200)","quintic_pts_200"],["Quintic samples (400)","quintic_pts_400"]]:[["Venus samples (100x100)","venus_pts_100"],["Venus samples (200x200)","venus_pts_200"],["Flower samples (100x100)","flower_pts_100"],["Flower samples (200x200)","flower_pts_200"],["Matlab samples (201x201)","matlab_pts_201"]]:t.mode==="curve"?t.algorithm==="to_cubic"?[["Quintic (3D, order 6)","quintic"],["High-order curve (order 7)","high_order_curve7"],["High-order curve (order 9)","high_order_curve9"]]:[["Circle","circle"],["Blade (200)","blade"],["Circle (318)","circle-dense"],["Ellipse (318)","ellipse"]]:t.algorithm==="to_cubic"?[["Hemisphere (order 5)","hemisphere5"],["Saddle (order 6)","saddle6"],["Catenoid (order 7)","catenoid7"]]:[["Flower (101x101)","flower"],["Buste (226x226)","buste"],["Venus (46x51)","venus"],["Head (201x1156)","head"]];yi(i,v,[["(none)",""],...M],"",async T=>{const x=i.querySelectorAll("select")[i.querySelectorAll("select").length-1],g=k=>{x.disabled=k};try{if(T==="circle")e.onPreset(B_(),void 0);else if(T==="quintic")e.onPreset(uh(),void 0);else if(T==="high_order_curve7")e.onPreset(z_(),void 0);else if(T==="high_order_curve9")e.onPreset(k_(),void 0);else if(T==="blade")e.onPreset(await wo("blade"),void 0);else if(T==="circle-dense")e.onPreset(await wo("circle-dense"),void 0);else if(T==="ellipse")e.onPreset(await wo("ellipse"),void 0);else if(T==="circle_pts_150")e.onPreset(void 0,void 0,au(150));else if(T==="circle_pts_300")e.onPreset(void 0,void 0,au(300));else if(T==="quintic_pts_200")e.onPreset(void 0,void 0,ou(200));else if(T==="quintic_pts_400")e.onPreset(void 0,void 0,ou(400));else if(T==="hemisphere5")e.onPreset(void 0,V_());else if(T==="saddle6")e.onPreset(void 0,H_());else if(T==="catenoid7")e.onPreset(void 0,G_());else if(T==="venus_pts_100")e.onPreset(void 0,void 0,void 0,await lu(100,100));else if(T==="venus_pts_200")e.onPreset(void 0,void 0,void 0,await lu(200,200));else if(T==="flower_pts_100")e.onPreset(void 0,void 0,void 0,await cu(100,100));else if(T==="flower_pts_200")e.onPreset(void 0,void 0,void 0,await cu(200,200));else if(T==="matlab_pts_201")e.onPreset(void 0,void 0,void 0,q_(201,201));else if(T==="flower"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await da("flower",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="buste"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await da("buste",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="venus"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await da("venus",n);e.onPreset(void 0,k),e.onLoadEnd?.()}else if(T==="head"){g(!0),e.onLoadStart?.(`Loading ${T}.json`);const k=await da("head",n);e.onPreset(void 0,k),e.onLoadEnd?.()}}catch(k){console.error("Preset load failed:",k)}finally{g(!1)}}),Ur(i,"Tolerance");const S=(t.mode==="curve",3);t.tolerance.length<S&&(t.tolerance=Array(S).fill(.01)),s=[];for(let T=0;T<S;T++){const x=hu(i,`Dim ${T}`,t.tolerance[T]??.01,1e-4,1e4,.01,g=>{t.tolerance[T]=g});s.push(x)}Ur(i,"End Conditions");const y=["Free","FixedPosition","FixedTangent","FixedCurvature"];t.mode==="curve"?(yi(i,"Left End",y.map((T,x)=>[T,String(x)]),String(t.leftEnd),T=>{t.leftEnd=Number(T)}),yi(i,"Right End",y.map((T,x)=>[T,String(x)]),String(t.rightEnd),T=>{t.rightEnd=Number(T)})):(yi(i,"U Left",y.map((T,x)=>[T,String(x)]),String(t.uLeftEnd),T=>{t.uLeftEnd=Number(T)}),yi(i,"U Right",y.map((T,x)=>[T,String(x)]),String(t.uRightEnd),T=>{t.uRightEnd=Number(T)}),yi(i,"V Left",y.map((T,x)=>[T,String(x)]),String(t.vLeftEnd),T=>{t.vLeftEnd=Number(T)}),yi(i,"V Right",y.map((T,x)=>[T,String(x)]),String(t.vRightEnd),T=>{t.vRightEnd=Number(T)})),Ur(i,"Options"),hu(i,"Max Iterations",t.maxIter,1,500,1,T=>{t.maxIter=T});const A=document.createElement("button");A.id="run-algo-btn",A.textContent=t.running?"Running...":"Run Algorithm",A.disabled=t.running,A.addEventListener("click",()=>e.onRun(t)),i.appendChild(A)}return o(),{state:t,setLoadProgress:u=>{n=u},setToleranceBounds:u=>{const c=Math.max(1e-4,u);for(let f=0;f<s.length;f++)s[f].slider.max=String(c),s[f].num.max=String(c),t.tolerance[f]>c&&(t.tolerance[f]=c,s[f].slider.value=String(c),s[f].num.value=String(c))},setTolerance:u=>{for(let c=0;c<s.length&&c<u.length;c++){const f=parseFloat(s[c].slider.max)||1e4,p=Math.max(1e-4,Math.min(f,u[c]));t.tolerance[c]=p,s[c].slider.value=String(p),s[c].num.value=String(p)}}}}function Ur(i,e){const t=document.createElement("div");t.className="section";const n=document.createElement("label");n.textContent=e,n.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",t.appendChild(n),i.appendChild(t)}const Y_=(i,e,t)=>{};function yi(i,e,t,n,s){const o=document.createElement("label");o.textContent=e,i.appendChild(o);const u=document.createElement("select");for(const[c,f]of t){const p=document.createElement("option");p.value=f,p.textContent=c,f===n&&(p.selected=!0),u.appendChild(p)}u.addEventListener("change",()=>s(u.value)),i.appendChild(u)}function hu(i,e,t,n,s,o,u){const c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:6px;";const f=document.createElement("span");f.textContent=e,f.style.cssText="font-size:11px;min-width:45px;",c.appendChild(f);const p=document.createElement("input");p.type="range",p.min=String(n),p.max=String(s),p.step=String(o),p.value=String(t),p.style.cssText="flex:1;";const v=document.createElement("input");v.type="number",v.min=String(n),v.max=String(s),v.step=String(o),v.value=String(t),v.style.cssText="font-size:11px;width:70px;text-align:right;background:#0e1626;color:#dde;border:1px solid #2a3a5a;border-radius:3px;padding:2px 4px;";const M=n,S=y=>Math.max(M,Math.min(parseFloat(p.max)||s,y));return p.addEventListener("input",()=>{const y=parseFloat(p.value);v.value=String(y),u(y)}),v.addEventListener("input",()=>{const y=parseFloat(v.value);if(isNaN(y))return;const A=S(y);p.value=String(A),u(A)}),v.addEventListener("change",()=>{const y=parseFloat(v.value);if(isNaN(y))v.value=p.value;else{const A=S(y);v.value=String(A),p.value=String(A)}}),c.appendChild(p),c.appendChild(v),i.appendChild(c),{slider:p,num:v}}function Qt(i){if(!Number.isFinite(i))return String(i);if(i===0)return"0";const e=Math.abs(i);return e>=1e6||e<1e-4?i.toExponential(3):i.toFixed(4)}function Eo(i){if(i.length===0)return"-";const e=[...new Set(i)].length;return`[${Qt(i[0])}, ${Qt(i[i.length-1])}] (${i.length} knots, ${e} unique)`}function pa(i){return i<1e3?`${i.toFixed(0)} ms`:`${(i/1e3).toFixed(2)} s`}function Hn(i,e,t){const n=document.createElement("label");n.style.cssText="display:block;font-size:12px;cursor:pointer;color:#ddd;line-height:1.4;padding:2px 0;white-space:nowrap;";const s=document.createElement("input");s.type="checkbox",s.checked=e,s.style.cssText="width:13px;height:13px;margin:0 6px 0 0;cursor:pointer;vertical-align:middle;flex:0 0 auto;",s.addEventListener("change",()=>t(s.checked));const o=document.createElement("span");return o.textContent=i,o.style.cssText="vertical-align:middle;",n.appendChild(s),n.appendChild(o),{row:n,checkbox:s,text:o}}function fu(i,e=!1){const t=document.createElement("div");return t.textContent=i,t.style.cssText=e?"font-size:11px;font-weight:bold;color:#aaa;margin-top:8px;padding-top:6px;border-top:1px solid #333;":"font-size:11px;font-weight:bold;color:#aaa;margin-top:2px;",t}function To(i,e){const t=document.createElement("button");return t.textContent=i,t.type="button",t.style.cssText="display:block;width:100%;font-size:12px;cursor:pointer;color:#ddd;background:#2a3040;border:1px solid #444;border-radius:3px;padding:5px 8px;margin-top:4px;text-align:left;",t.addEventListener("mouseenter",()=>{t.style.background="#354052"}),t.addEventListener("mouseleave",()=>{t.style.background="#2a3040"}),t.addEventListener("click",e),t}function du(i,e){const t=e==="Original"?"#44aadd":"#44dd44",n=i.knotsU,s=i.knotsV;if(n.length===0||s.length===0){alert(`${e} surface has no knot vectors.`);return}const o=n[0],u=n[n.length-1],c=s[0],f=s[s.length-1],p=u-o,v=f-c,M=[...new Set(n)],S=[...new Set(s)],y=document.createElement("div");y.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10000;display:flex;align-items:center;justify-content:center;";const A=document.createElement("div");A.style.cssText="background:#222a3a;border:1px solid #444;border-radius:6px;padding:18px 22px;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,0.6);";const T=document.createElement("div");T.textContent=`${e} surface — Knot Lines`,T.style.cssText=`font-size:16px;font-weight:bold;color:${t};margin-bottom:2px;`,A.appendChild(T);const x=document.createElement("div");x.style.cssText="font-size:12px;font-family:monospace;color:#ccc;line-height:1.5;",x.innerHTML=`U: ${n.length} knots (${M.length} unique), range [${Qt(o)}, ${Qt(u)}]<br>V: ${s.length} knots (${S.length} unique), range [${Qt(c)}, ${Qt(f)}]`,A.appendChild(x);const g=document.createElement("canvas"),k=520,F=520;g.width=k,g.height=F,g.style.cssText="display:block;background:#1a1f2e;border:1px solid #333;border-radius:4px;",A.appendChild(g);const P=g.getContext("2d");if(P){const N=k-100,R=F-100;let G,re;p>0&&v>0?p/v>N/R?(G=N,re=N*(v/p)):(re=R,G=R*(p/v)):(G=N,re=R);const $=(k-G)/2,Q=$+G,de=(F-re)/2,le=de+re;if(P.fillStyle="#1a1f2e",P.fillRect(0,0,k,F),P.strokeStyle="#556",P.lineWidth=1,P.strokeRect($+.5,de+.5,G,re),P.fillStyle="#aaa",P.font="14px sans-serif",P.textAlign="center",P.textBaseline="top",P.fillText("u →",$+G/2,le+22),P.save(),P.translate($-28,de+re/2),P.rotate(-Math.PI/2),P.textBaseline="middle",P.fillText("v →",0,0),P.restore(),p>0){P.strokeStyle="#4fc3f7",P.lineWidth=1;for(const ge of M){const he=(ge-o)/p,_e=$+he*G;P.beginPath(),P.moveTo(_e+.5,de),P.lineTo(_e+.5,le),P.stroke()}}if(v>0){P.strokeStyle="#ffaa44",P.lineWidth=1;for(const ge of S){const he=(ge-c)/v,_e=le-he*re;P.beginPath(),P.moveTo($,_e+.5),P.lineTo(Q,_e+.5),P.stroke()}}P.fillStyle="#aaa",P.font="11px monospace",P.textAlign="left",P.textBaseline="top",P.fillText(`u=${Qt(o)}`,$+4,de+4),P.textAlign="right",P.fillText(`u=${Qt(u)}`,Q-4,de+4),P.textAlign="left",P.textBaseline="bottom",P.fillText(`v=${Qt(c)}`,$+4,le-4),P.textAlign="right",P.fillText(`v=${Qt(f)}`,Q-4,le-4)}const J=document.createElement("button");J.textContent="Close",J.type="button",J.style.cssText="align-self:flex-end;font-size:13px;cursor:pointer;background:#3a4a60;border:1px solid #556;color:#eee;border-radius:4px;padding:6px 16px;",J.addEventListener("mouseenter",()=>{J.style.background="#4a5a70"}),J.addEventListener("mouseleave",()=>{J.style.background="#3a4a60"}),A.appendChild(J),y.appendChild(A),document.body.appendChild(y);const O=X=>{X.key==="Escape"&&W()},W=()=>{document.removeEventListener("keydown",O),y.parentNode&&y.parentNode.removeChild(y)};y.addEventListener("click",X=>{X.target===y&&W()}),J.addEventListener("click",W),document.addEventListener("keydown",O)}function j_(i,e){const t=e.dim,n=e.knotsU[e.orderU-1],s=e.knotsU[e.nU],o=e.knotsV[e.orderV-1],u=e.knotsV[e.nV],c=120,f=120,p=[];let v=0;const M=pi.geom.NurbsSurface.byKnotsControlPointsWeights(e.orderU-1,e.orderV-1,e.knotsU,e.knotsV,pu(e)),S=pi.geom.NurbsSurface.byKnotsControlPointsWeights(i.orderU-1,i.orderV-1,i.knotsU,i.knotsV,pu(i));for(let X=0;X<c;X++){const N=n+(s-n)*X/(c-1);for(let R=0;R<f;R++){const G=o+(u-o)*R/(f-1),re=M.point(N,G),$=S.point(N,G);let Q=0;for(let de=0;de<t;de++){const le=(re[de]??0)-($[de]??0);Q+=le*le}Q=Math.sqrt(Q),p.push(Q),Q>v&&(v=Q)}}const y=document.createElement("div");y.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10000;display:flex;align-items:center;justify-content:center;";const A=document.createElement("div");A.style.cssText="background:#222a3a;border:1px solid #444;border-radius:6px;padding:18px 22px;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,0.6);";const T=document.createElement("div");T.textContent="Error Map — Surface Deviation",T.style.cssText="font-size:16px;font-weight:bold;color:#ff9944;margin-bottom:2px;",A.appendChild(T);const x=document.createElement("div");x.style.cssText="font-size:12px;font-family:monospace;color:#ccc;line-height:1.5;",x.innerHTML=`max error: ${v.toExponential(3)} &nbsp; grid: ${c}×${f}`,A.appendChild(x);const g=document.createElement("canvas"),k=600,F=520;g.width=k,g.height=F,g.style.cssText="display:block;background:#1a1f2e;border:1px solid #333;border-radius:4px;",A.appendChild(g);const P=g.getContext("2d");if(P&&v>0){const N=k-220,R=F-220,G=s-n,re=u-o;let $,Q;G>0&&re>0?G/re>=N/R?($=N,Q=N*re/G):(Q=R,$=R*G/re):($=N,Q=R);const de=110+(N-$)/2,le=110+(R-Q)/2,ge=P.createImageData($,Q);for(let ce=0;ce<$;ce++){const Xe=Math.floor(ce/$*c);for(let me=0;me<Q;me++){const oe=Math.floor(me/Q*f),Pe=p[Xe*f+oe]/v,Ue=(me*$+ce)*4,Qe=Math.min(1,Pe*2),Ve=Math.min(1,(1-Pe)*2),Ze=Math.max(0,1-Pe*2);ge.data[Ue]=Qe*255,ge.data[Ue+1]=Ve*255,ge.data[Ue+2]=Ze*255,ge.data[Ue+3]=255}}P.putImageData(ge,de,le),P.strokeStyle="#555",P.lineWidth=1,P.strokeRect(de,le,$,Q),P.fillStyle="#aaa",P.font="11px monospace",P.textAlign="center",P.fillText(`U: [${Qt(n)}, ${Qt(s)}]`,de+$/2,F-10),P.save(),P.translate(12,le+Q/2),P.rotate(-Math.PI/2),P.fillText(`V: [${Qt(o)}, ${Qt(u)}]`,0,0),P.restore();const he=14,_e=Q,De=110-he-12,qe=le;for(let ce=0;ce<_e;ce++){const Xe=ce/_e,me=Math.min(1,Xe*2),oe=Math.min(1,(1-Xe)*2),Pe=Math.max(0,1-Xe*2);P.fillStyle=`rgb(${me*255},${oe*255},${Pe*255})`,P.fillRect(De,qe+_e-ce-1,he,1)}P.fillStyle="#ccc",P.font="11px monospace",P.textAlign="right",P.textBaseline="top",P.fillText(v.toExponential(1),De-4,qe),P.textBaseline="bottom",P.fillText("0",De-4,qe+_e)}const J=document.createElement("button");J.textContent="Close",J.type="button",J.style.cssText="background:#444;color:#ddd;border:1px solid #555;border-radius:3px;padding:6px 16px;font-size:13px;cursor:pointer;align-self:flex-end;",A.appendChild(J),y.appendChild(A),document.body.appendChild(y);const O=()=>{y.remove(),document.removeEventListener("keydown",W)},W=X=>{X.key==="Escape"&&O()};y.addEventListener("click",X=>{X.target===y&&O()}),J.addEventListener("click",O),document.addEventListener("keydown",W)}function Ao(i){return i==="curve"?"curve":"surface"}function pu(i){const e=[];for(let t=0;t<i.nU;t++){const n=[];for(let s=0;s<i.nV;s++){const o=i.coeffs[t*i.nV+s];n.push([o[0]??0,o[1]??0,o[2]??0])}e.push(n)}return e}function K_(i,e,t){let n=null,s=null,o=null,u=null,c=null;function f(){i.innerHTML="",n=null;const O=document.createElement("h2");O.textContent="Visualization",i.appendChild(O);const W=document.createElement("div");W.className="section";const X=document.createElement("label");X.textContent="Control Points",X.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",W.appendChild(X);const N=document.createElement("div");N.id="info-box",N.style.cssText="font-size:11px;font-family:monospace;background:#222;padding:6px;border-radius:4px;max-height:200px;overflow-y:auto;color:#ddd;line-height:1.4;margin-top:4px;",N.textContent="(none loaded)",W.appendChild(N),i.appendChild(W);const R=document.createElement("div");R.className="section",R.id="run-results-section",R.style.display="none";const G=document.createElement("label");G.textContent="Run Results",G.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",R.appendChild(G);const re=document.createElement("div");re.id="results-box",re.style.cssText="font-size:11px;font-family:monospace;background:#222;padding:6px;border-radius:4px;color:#ddd;line-height:1.4;margin-top:4px;",re.textContent="(no run yet)",R.appendChild(re),i.appendChild(R);const $=document.createElement("div");$.className="section";const Q=document.createElement("label");Q.textContent="Visibility",Q.style.cssText="font-weight:bold;color:#4fc3f7;margin-top:4px;",$.appendChild(Q);const de=document.createElement("div");de.id="vis-box",de.style.cssText="display:flex;flex-direction:column;gap:4px;margin-top:4px;align-items:stretch;";const le=fu("Original"),ge=Hn(`Original ${Ao(e.mode)}`,e.showOriginalCurve,lt=>{e.showOriginalCurve=lt,t(e)}),he=Hn("Original control points",e.showOriginalControl,lt=>{e.showOriginalControl=lt,t(e)}),_e=Hn("Original iso lines",e.showOriginalIso,lt=>{e.showOriginalIso=lt,t(e)}),De=Hn("Original mesh",e.showOriginalMesh,lt=>{e.showOriginalMesh=lt,t(e)}),qe=Hn("Original points",e.showOriginalPoints,lt=>{e.showOriginalPoints=lt,t(e)}),ce=Hn("Show point polyline",e.showPointPolyline,lt=>{e.showPointPolyline=lt,t(e)}),Xe=Hn("Original curvature comb",e.showOriginalCurvatureComb,lt=>{e.showOriginalCurvatureComb=lt,t(e)}),me=fu("Result",!0),oe=Hn(`Result ${Ao(e.mode)}`,e.showResultCurve,lt=>{e.showResultCurve=lt,t(e)}),Pe=Hn("Result control points",e.showResultControl,lt=>{e.showResultControl=lt,t(e)}),Ue=Hn("Result iso lines",e.showResultIso,lt=>{e.showResultIso=lt,t(e)}),Qe=Hn("Result mesh",e.showResultMesh,lt=>{e.showResultMesh=lt,t(e)}),Ve=Hn("Result curvature comb",e.showResultCurvatureComb,lt=>{e.showResultCurvatureComb=lt,t(e)}),Ze=To("Show error map",()=>{c&&j_(c,u)}),Pt=To("Show original knot lines",()=>{s&&du(s,"Original")}),St=To("Show result knot lines",()=>{o&&du(o,"Result")});de.appendChild(le),de.appendChild(ge.row),de.appendChild(he.row),de.appendChild(_e.row),de.appendChild(De.row),de.appendChild(qe.row),de.appendChild(ce.row),de.appendChild(Xe.row),de.appendChild(Pt),de.appendChild(me),de.appendChild(oe.row),de.appendChild(Pe.row),de.appendChild(Ue.row),de.appendChild(Qe.row),de.appendChild(Ve.row),de.appendChild(Ze),de.appendChild(St),$.appendChild(de),i.appendChild($),n={visResultCurve:oe,visResultControl:Pe,visOriginalCurve:ge,visOriginalControl:he,visOriginalIso:_e,visResultIso:Ue,visOriginalMesh:De,visResultMesh:Qe,visOriginalPoints:qe,visPointPolyline:ce,visOriginalCurvatureComb:Xe,visResultCurvatureComb:Ve,errorMapButton:Ze,originalKnotsButton:Pt,resultKnotsButton:St},F(e.mode),k()}f();const p=i.querySelector("#info-box"),v=i.querySelector("#run-results-section"),M=i.querySelector("#results-box");function S(O){if(!O){v.style.display="none",M.textContent="";return}v.style.display="";const W=[];W.push(`max error: ${O.maxErrors.map(X=>Qt(X)).join(", ")}`),W.push(`iterations: ${O.iterations}`),M.innerHTML=W.join("<br>")}function y(O,W,X,N){if(!O){p.textContent="(none loaded)",S(void 0);return}const R=[];R.push(`<b style="color:#4fc3f7">${W}</b>`),N!==void 0&&R.push(`load time: ${pa(N)}`),R.push(`order=${O.order}, dim=${O.dim}`),R.push(`control points: ${O.numPoints}`),R.push(`knots: ${Eo(O.knots)}`),R.push('<hr style="border:0;border-top:1px solid #444;margin:4px 0">');const G=O.dim;for(let re=0;re<O.coeffs.length;re++){const Q=O.coeffs[re].slice(0,G).map(Qt).join(", ");R.push(`P${re.toString().padStart(String(O.numPoints-1).length," ")} = (${Q})`)}p.innerHTML=R.join("<br>"),S(X)}function A(O,W,X,N,R){if(!O){p.textContent="(none loaded)",S(void 0);return}const G=[];if(G.push(`<b style="color:#4fc3f7">${W}</b>`),N!==void 0&&G.push(`load time: ${pa(N)}`),G.push(`orderU=${O.orderU}, orderV=${O.orderV}, dim=${O.dim}`),G.push(`grid: ${O.nU} x ${O.nV} = ${O.nU*O.nV} ctrl pts`),G.push(`knotsU: ${Eo(O.knotsU)}`),G.push(`knotsV: ${Eo(O.knotsV)}`),R){const re=["X","Y","Z"];G.push("bbox:");for(let $=0;$<re.length;$++)G.push(`  ${re[$]}: [${Qt(R.min[$])}, ${Qt(R.max[$])}]  range=${Qt(R.range[$])}`);G.push(`max range: ${Qt(R.maxRange)}`)}p.innerHTML=G.join("<br>"),S(X)}function T(O,W,X){if(!O){p.textContent="(none loaded)",S(void 0);return}const N=[];N.push(`<b style="color:#4fc3f7">${W}</b>`),X!==void 0&&N.push(`load time: ${pa(X)}`),N.push(`order=${O.order}, dim=${O.dim}`),N.push(`data points: ${O.numPoints}`),N.push('<hr style="border:0;border-top:1px solid #444;margin:4px 0">');const G=[0,O.numPoints-1>>1,O.numPoints-1];for(const re of G){const Q=O.points[re].slice(0,O.dim).map(Qt).join(", ");N.push(`P${String(re).padStart(String(O.numPoints-1).length," ")} = (${Q})`)}p.innerHTML=N.join("<br>"),S(void 0)}function x(O,W,X,N){if(!O){p.textContent="(none loaded)",S(void 0);return}const R=[];if(R.push(`<b style="color:#4fc3f7">${W}</b>`),X!==void 0&&R.push(`load time: ${pa(X)}`),R.push(`orderU=${O.orderU}, orderV=${O.orderV}, dim=${O.dim}`),R.push(`grid: ${O.nU} x ${O.nV} = ${O.nU*O.nV} data points`),N){const G=["X","Y","Z"];R.push("bbox:");for(let re=0;re<G.length;re++)R.push(`  ${G[re]}: [${Qt(N.min[re])}, ${Qt(N.max[re])}]  range=${Qt(N.range[re])}`);R.push(`max range: ${Qt(N.maxRange)}`)}p.innerHTML=R.join("<br>"),S(void 0)}function g(){if(!n)return;const O=e.hasResult,W=O?"1":"0.4";for(const X of[n.visResultCurve,n.visResultControl,n.visResultIso,n.visResultMesh,n.visResultCurvatureComb])X.row.style.opacity=W,X.checkbox.disabled=!O}function k(){if(!n)return;const O=e.mode==="surface"&&s!==null,W=e.mode==="surface"&&o!==null;n.originalKnotsButton.style.display=O?"":"none",n.resultKnotsButton.style.display=W?"":"none";const X=e.mode==="surface"&&u!==null&&c!==null;n.errorMapButton.style.display=X?"":"none"}function F(O,W=e.algorithm){if(!n)return;const X=O==="surface",N=W==="approximate_from_points",R=X&&!N;n.visOriginalCurve.row.style.display=N?"none":"",n.visOriginalControl.row.style.display=N?"none":"",n.visOriginalIso.row.style.display=R?"":"none",n.visOriginalMesh.row.style.display=R?"":"none",n.visOriginalPoints.row.style.display=N?"":"none",n.visPointPolyline.row.style.display=N?"":"none",n.visResultIso.row.style.display=X?"":"none",n.visResultMesh.row.style.display=X?"":"none";const G=O==="curve";n.visOriginalCurvatureComb.row.style.display=O==="curve"&&!N?"":"none",n.visResultCurvatureComb.row.style.display=G?"":"none",n.errorMapButton.style.display=O==="surface"&&!N?"":"none"}function P(O){if(e.mode=O,!n)return;const W=Ao(O);n.visOriginalCurve.text.textContent=`Original ${W}`,n.visResultCurve.text.textContent=`Result ${W}`,F(O),k()}function J(O){e.algorithm=O,F(e.mode,O)}return{setCurve:y,setSurface:A,setCurvePoints:T,setSurfacePoints:x,clear(){p.textContent="(none loaded)",e.hasResult=!1,s=null,o=null,g(),S(void 0),k()},setHasResult(O){e.hasResult=O,g()},setMode:P,setAlgorithm:J,setOriginalSurfaceForKnots(O){s=O,k()},setResultSurfaceForKnots(O){o=O,k()},setOriginalSurfaceForErrorMap(O){u=O,k()},setResultSurfaceForErrorMap(O){c=O,k()}}}class Z_{worker=null;nextId=1;pending=new Map;spawn(){const e=new Worker(new URL("/knot-removal-minimax3-app/assets/engine.worker-6T3--moE.js",import.meta.url),{type:"module"});return e.onmessage=t=>{const n=t.data,s=this.pending.get(n.id);s&&(this.pending.delete(n.id),n.type==="error"?s.reject(new Error(n.message)):s.resolve(n))},e.onerror=t=>{const n=new Error(t.message||"engine worker crashed");for(const s of this.pending.values())s.reject(n);this.pending.clear()},e}request(e,t){this.worker??=this.spawn();const n=this.nextId++,s=this.worker;return new Promise((o,u)=>{this.pending.set(n,{resolve:c=>{c.type===t?o(c):u(new Error(`expected ${t}, got ${c.type}`))},reject:u}),s.postMessage({...e,id:n})})}get busy(){return this.pending.size>0}cancel(){this.worker&&(this.worker.terminate(),this.worker=null);const e=new Error("cancelled");for(const t of this.pending.values())t.reject(e);this.pending.clear()}}function ph(i){if(i.length===0)return new Float64Array(0);const e=i[0].length,t=new Float64Array(i.length*e);for(let n=0;n<i.length;n++)for(let s=0;s<e;s++)t[n*e+s]=i[n][s];return t}function mh(i,e,t){const n=[];for(let s=0;s<e;s++){const o=[];for(let u=0;u<t;u++)o.push(i[s*t+u]);n.push(o)}return n}function vh(i){return{order:i.order,dim:i.dim,n:i.numPoints,knots:new Float64Array(i.knots),coeffs:ph(i.coeffs)}}function _h(i){return{orderU:i.orderU,orderV:i.orderV,dim:i.dim,nU:i.nU,nV:i.nV,knotsU:new Float64Array(i.knotsU),knotsV:new Float64Array(i.knotsV),coeffs:ph(i.coeffs)}}function Il(i){return{order:i.order,dim:i.dim,numPoints:i.n,knots:Array.from(i.knots),coeffs:mh(i.coeffs,i.n,i.dim)}}function Nl(i){return{orderU:i.orderU,orderV:i.orderV,dim:i.dim,nU:i.nU,nV:i.nV,knotsU:Array.from(i.knotsU),knotsV:Array.from(i.knotsV),coeffs:mh(i.coeffs,i.nU*i.nV,i.dim)}}const ns=new Z_;function J_(i,e,t={}){return ns.request({type:"run-curve",curve:vh(i),op:0,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(n=>({ok:!0,curve:Il(n.curve),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function Q_(i,e,t={}){return ns.request({type:"run-curve",curve:vh(i),op:1,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(n=>({ok:!0,curve:Il(n.curve),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function eg(i,e,t={}){return ns.request({type:"run-surface",surface:_h(i),op:0,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(n=>({ok:!0,surface:Nl(n.surface),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function tg(i,e,t={}){return ns.request({type:"run-surface",surface:_h(i),op:1,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(n=>({ok:!0,surface:Nl(n.surface),maxErrors:Array.from(n.maxErrors),iterations:n.iterations,status:n.status})).catch(n=>({ok:!1,error:n.message}))}function ng(i,e,t={}){const n=new Float64Array(i.numPoints*i.dim);for(let s=0;s<i.numPoints;s++)for(let o=0;o<i.dim;o++)n[s*i.dim+o]=i.points[s][o];return ns.request({type:"curve-approx-points",points:n,numPoints:i.numPoints,dim:i.dim,order:i.order,tolerance:e,leftEnd:t.left_end??0,rightEnd:t.right_end??0,maxIter:t.max_iter??100},"curve-done").then(s=>({ok:!0,curve:Il(s.curve),maxErrors:Array.from(s.maxErrors),iterations:s.iterations,status:s.status})).catch(s=>({ok:!1,error:s.message}))}function ig(i,e,t={}){const n=new Float64Array(i.nU*i.nV*i.dim);for(let s=0;s<i.nU;s++)for(let o=0;o<i.nV;o++){const u=(s*i.nV+o)*i.dim;for(let c=0;c<i.dim;c++)n[u+c]=i.points[s][o][c]}return ns.request({type:"surface-approx-points",points:n,nU:i.nU,nV:i.nV,dim:i.dim,orderU:i.orderU,orderV:i.orderV,tolerance:e,ends:[t.u_left??0,t.u_right??0,t.v_left??0,t.v_right??0],maxIter:t.max_iter??100},"surface-done").then(s=>({ok:!0,surface:Nl(s.surface),maxErrors:Array.from(s.maxErrors),iterations:s.iterations,status:s.status})).catch(s=>({ok:!1,error:s.message}))}class rg{root;label;fill;detail;constructor(){const e=document.getElementById("progress");if(!e)throw new Error("progress overlay element not found");this.root=e;const t=document.getElementById("progress-label"),n=document.getElementById("progress-fill"),s=document.getElementById("progress-detail");if(!t||!n||!s)throw new Error("progress overlay children missing");this.label=t,this.fill=n,this.detail=s}show(e){this.label.textContent=e,this.detail.textContent="",this.fill.classList.add("indeterminate"),this.fill.style.width="",this.root.hidden=!1}setPhase(e,t,n){const s={download:"Downloading",parse:"Parsing JSON",tessellate:"Tessellating"};this.label.textContent=s[e]??e,this.detail.textContent=n,this.fill.classList.remove("indeterminate");const o=Math.max(0,Math.min(1,t));this.fill.style.width=(o*100).toFixed(1)+"%",o>=1&&(this.fill.style.width="100%")}setDetail(e,t){this.detail.textContent=t,this.fill.classList.remove("indeterminate");const n=Math.max(0,Math.min(1,e));this.fill.style.width=(n*100).toFixed(1)+"%",n>=1&&(this.fill.style.width="100%")}hide(){this.root.hidden=!0,this.fill.style.width="0%",this.fill.classList.remove("indeterminate")}}let qn=null,$n=null,hi=null,ii=null,Ms=null,ki=null,Vi=null,pn,dt,Gn,Nr=()=>{},Fr=()=>{};function fi(){const i=pn.mode==="surface",e=pn.showOriginalCurve,t=pn.showOriginalControl,n=pn.showResultCurve,s=pn.showResultControl,o=pn.showOriginalIso,u=pn.showResultIso,c=pn.showOriginalMesh,f=pn.showResultMesh,p=pn.showOriginalPoints,v=pn.showPointPolyline,M=pn.hasResult;sn("curve",!i&&e),sn("curve-control",!i&&t),sn("surface",i&&e),sn("surface-control",i&&t),sn("original",M&&e),sn("original-control",M&&t),sn("result",M&&n),sn("result-control",M&&s),i&&(o&&!M&&$n&&So("surface-iso",$n),o&&M&&ii&&So("original-iso",ii),u&&M&&$n&&So("result-iso",$n)),sn("surface-iso",i&&o&&!M),sn("original-iso",i&&o&&M),sn("result-iso",i&&u&&M),i&&(c&&!M&&yo("surface","surface-wire"),c&&M&&yo("original","original-wire"),f&&M&&yo("result","result-wire")),sn("surface-wire",i&&c&&!M),sn("original-wire",i&&c&&M),sn("result-wire",i&&f&&M);const S=!i&&p,y=i&&p;sn("curve-points",S),sn("surface-points",y),sn("curve-points-polyline",S&&v),sn("surface-points-polyline",y&&v);const A=pn.showOriginalCurvatureComb,T=pn.showResultCurvatureComb;i||(A&&!M&&qn&&Mo(qn,"curve-comb",16746496),A&&M&&hi&&Mo(hi,"original-comb",16746496),T&&M&&qn&&Mo(qn,"result-comb",16737792)),sn("curve-comb",!i&&A&&!M),sn("original-comb",!i&&A&&M),sn("result-comb",!i&&T&&M)}const Dr=document.getElementById("log"),sg=200;function kt(i){const e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0"),o=document.createElement("div");o.className="log-entry";const u=document.createElement("span");u.className="log-time",u.textContent=`[${t}:${n}:${s}]`,o.appendChild(u);const c=document.createElement("span");for(/^Error\b/i.test(i)&&(c.className="log-msg-error"),c.textContent=i,o.appendChild(c),Dr.appendChild(o);Dr.children.length>sg;)Dr.removeChild(Dr.firstChild);Dr.scrollTop=Dr.scrollHeight,console.log(i)}function ds(i){const e=i[0]?.length??3,t=new Array(e).fill(1/0),n=new Array(e).fill(-1/0);for(const o of i)for(let u=0;u<e;u++){const c=o[u]??0;c<t[u]&&(t[u]=c),c>n[u]&&(n[u]=c)}const s=t.map((o,u)=>n[u]-o);return{min:t,max:n,range:s,maxRange:Math.max(...s)}}function mu(i){pn.running=i;const e=document.getElementById("run-algo-btn");e&&(e.textContent=i?"Running...":"Run Algorithm",e.disabled=i)}async function ag(i){mu(!0);try{if(i.mode==="curve"){if(i.algorithm==="approximate_from_points"&&ki){const e=ki,t=i.tolerance.slice(0,e.dim),n={left_end:i.leftEnd,right_end:i.rightEnd,max_iter:i.maxIter};kt("Running curve/approximate_from_points...");const s=await ng(e,t,n);if(!s.ok){kt(`Error: ${s.error}`);return}Br(),ih(e,"curve-points",4491485),Sa(s.curve,"result",4513092,!0,16755200),kt(`Done. Data points: ${e.numPoints} → ctrl pts: ${s.curve.numPoints}, Max error: ${s.maxErrors?.map(o=>o.toFixed(4)).join(", ")}, Iterations: ${s.iterations}`),dt.setCurve(s.curve,`Data points (${e.numPoints}) → Result (${s.curve.numPoints})`,{maxErrors:s.maxErrors??[],iterations:s.iterations??0}),dt.setHasResult(!0),dt.setResultSurfaceForKnots(null),qn=s.curve,fi();return}if(hi){const e=hi,t=i.tolerance.slice(0,e.dim),n={left_end:i.leftEnd,right_end:i.rightEnd,max_iter:i.maxIter};kt(`Running curve/${i.algorithm}...`);const s=i.algorithm==="remove"?await J_(e,t,n):await Q_(e,t,n);if(!s.ok){kt(`Error: ${s.error}`);return}Br(),Sa(e,"original",4500189,!0,16737894),Sa(s.curve,"result",4513092,!0,16755200),kt(`Done. Points: ${e.numPoints} → ${s.curve.numPoints}, Max error: ${s.maxErrors?.map(o=>o.toFixed(4)).join(", ")}, Iterations: ${s.iterations}`),dt.setCurve(s.curve,`Original (${e.numPoints}) → Result (${s.curve.numPoints})`,{maxErrors:s.maxErrors??[],iterations:s.iterations??0}),dt.setHasResult(!0),dt.setResultSurfaceForKnots(null),qn=s.curve,fi()}else kt("Load a preset first.")}else if(i.mode==="surface"){if(i.algorithm==="approximate_from_points"&&Vi){const e=Vi,t=i.tolerance.slice(0,e.dim),n={u_left:i.uLeftEnd,u_right:i.uRightEnd,v_left:i.vLeftEnd,v_right:i.vRightEnd,max_iter:i.maxIter};kt("Running surface/approximate_from_points...");const s=performance.now(),o=await ig(e,t,n),u=performance.now();if(!o.ok){kt(`Error: ${o.error}`);return}kt(`Algorithm done in ${(u-s).toFixed(0)} ms. Data points: ${e.nU}x${e.nV} → ctrl pts: ${o.surface.nU}x${o.surface.nV}, Max error: ${o.maxErrors?.map(v=>v.toFixed(4)).join(", ")}, Iterations: ${o.iterations}`),Br(),ah(e,"surface-points",4491485),Gn.show(`Visualizing result (${o.surface.nU}x${o.surface.nV})`);const c=performance.now(),f=await bo(o.surface,"result",(v,M,S)=>{Gn.setDetail(M,S)}),p=performance.now();ya(f,"result",4513092,!0,void 0,16755200),kt(`Result visualized: ${f.numQuads} quads (${f.numVerts} verts) in ${(p-c).toFixed(0)} ms`),Gn.hide(),dt.setSurface(o.surface,`Data points (${e.nU}x${e.nV}) → Result (${o.surface.nU}x${o.surface.nV})`,{maxErrors:o.maxErrors??[],iterations:o.iterations??0}),dt.setHasResult(!0),dt.setResultSurfaceForKnots(o.surface),$n=o.surface,fi();return}if(ii){const e=ii,t=i.tolerance.slice(0,e.dim),n={u_left:i.uLeftEnd,u_right:i.uRightEnd,v_left:i.vLeftEnd,v_right:i.vRightEnd,max_iter:i.maxIter};kt(`Running surface/${i.algorithm}...`);const s=performance.now(),o=i.algorithm==="remove"?await eg(e,t,n):await tg(e,t,n),u=performance.now();if(!o.ok){kt(`Error: ${o.error}`);return}kt(`Algorithm done in ${(u-s).toFixed(0)} ms. Ctrl pts: ${e.nU}x${e.nV} → ${o.surface.nU}x${o.surface.nV}, Max error: ${o.maxErrors?.map(y=>y.toFixed(4)).join(", ")}, Iterations: ${o.iterations}`),Br(),Gn.show(`Visualizing original (${e.nU}x${e.nV})`);const c=performance.now();let f;Ms?f=Ms:f=await bo(e,"original",(y,A,T)=>{Gn.setDetail(A,T)});const p=performance.now();ya(f,"original",4500189,!0,void 0,16737894),kt(`Original visualized: ${f.numQuads} quads (${f.numVerts} verts) in ${(p-c).toFixed(0)} ms`),Gn.show(`Visualizing result (${o.surface.nU}x${o.surface.nV})`);const v=performance.now(),M=await bo(o.surface,"result",(y,A,T)=>{Gn.setDetail(A,T)}),S=performance.now();ya(M,"result",4513092,!0,void 0,16755200),kt(`Result visualized: ${M.numQuads} quads (${M.numVerts} verts) in ${(S-v).toFixed(0)} ms`),Gn.hide(),dt.setSurface(o.surface,`Original (${e.nU}x${e.nV}) → Result (${o.surface.nU}x${o.surface.nV})`,{maxErrors:o.maxErrors??[],iterations:o.iterations??0}),dt.setHasResult(!0),dt.setResultSurfaceForKnots(o.surface),dt.setOriginalSurfaceForErrorMap(ii),dt.setResultSurfaceForErrorMap(o.surface),$n=o.surface}else kt("Load a preset first.")}else kt("Load a preset first.")}catch(e){kt(`Error: ${String(e)}`)}finally{mu(!1)}}function og(i,e,t,n){if(Br(),i){const s=performance.now();qn=i,hi=i,$n=null,ii=null,ki=null,Vi=null,Sa(i,"curve",4500189);const o=performance.now()-s;kt(`Loaded curve: ${i.numPoints} pts, order ${i.order}, dim ${i.dim} (${o.toFixed(0)} ms)`),dt.setCurve(i,`Preset: curve (${i.numPoints} ctrl pts)`,void 0,o),dt.setHasResult(!1),dt.setOriginalSurfaceForKnots(null),dt.setResultSurfaceForKnots(null),dt.setOriginalSurfaceForErrorMap(null),dt.setResultSurfaceForErrorMap(null);const u=ds(i.coeffs),c=u.maxRange*.1||.01,f=u.maxRange*.02||.01;Fr(c),Nr([f,f,f]),fi()}if(t){const s=performance.now();ki=t,qn=null,hi=null,$n=null,ii=null,Vi=null,ih(t,"curve-points",4491485);const o=performance.now()-s,u=t.points,c=ds(u);kt(`Loaded curve points: ${t.numPoints} pts, order ${t.order}, dim ${t.dim} (${o.toFixed(0)} ms)`),dt.setCurvePoints(t,`Data points: ${t.numPoints} pts (order ${t.order})`,o),dt.setHasResult(!1),dt.setOriginalSurfaceForKnots(null),dt.setResultSurfaceForKnots(null),dt.setOriginalSurfaceForErrorMap(null),dt.setResultSurfaceForErrorMap(null);const f=c.maxRange*.1||.01,p=c.maxRange*.02||.01;Fr(f),Nr([p,p,p]),fi()}if(n){const s=performance.now();Vi=n,qn=null,hi=null,$n=null,ii=null,ki=null,ah(n,"surface-points",4491485);const o=performance.now()-s,u=[];for(let v=0;v<n.nU;v++)for(let M=0;M<n.nV;M++)u.push(n.points[v][M]);const c=ds(u);kt(`Loaded surface points: ${n.nU}x${n.nV} pts, order ${n.orderU}x${n.orderV}, dim ${n.dim} (${o.toFixed(0)} ms)`),dt.setSurfacePoints(n,`Data points: ${n.nU}x${n.nV} (order ${n.orderU}x${n.orderV})`,o,c),dt.setHasResult(!1),dt.setOriginalSurfaceForKnots(null),dt.setResultSurfaceForKnots(null),dt.setOriginalSurfaceForErrorMap(null),dt.setResultSurfaceForErrorMap(null);const f=c.maxRange*.1||.01,p=c.maxRange*.02||.01;Fr(f),Nr([p,p,p]),fi()}if(e)if("positions"in e){const s=e,o=performance.now();$n=s.surface,ii=s.surface,Ms=s,qn=null,hi=null,ki=null,Vi=null,ya(s,"surface",4500189,!0,kt);const u=performance.now()-o,c=ds(s.surface.coeffs);kt(`Loaded surface: ${s.surface.nU}x${s.surface.nV} pts, order ${s.surface.orderU}x${s.surface.orderV}, dim ${s.surface.dim} (${u.toFixed(0)} ms; download ${s.ms.download.toFixed(0)} ms, parse ${s.ms.parse.toFixed(0)} ms, tessellate ${s.ms.tessellate.toFixed(0)} ms)`),dt.setSurface(s.surface,`Preset: surface (${s.surface.nU}x${s.surface.nV} ctrl pts)`,void 0,u,c),dt.setHasResult(!1),dt.setOriginalSurfaceForKnots(s.surface),dt.setResultSurfaceForKnots(null),dt.setOriginalSurfaceForErrorMap(s.surface),dt.setResultSurfaceForErrorMap(null);const f=c.maxRange*.1,p=c.maxRange*.02;Fr(f),Nr([p,p,p]),fi()}else{const s=e,o=performance.now();$n=s,ii=s,Ms=null,qn=null,hi=null,ki=null,Vi=null,N_(s,"surface",4500189,!0,kt);const u=performance.now()-o,c=ds(s.coeffs);kt(`Loaded surface: ${s.nU}x${s.nV} pts, order ${s.orderU}x${s.orderV}, dim ${s.dim} (${u.toFixed(0)} ms)`),dt.setSurface(s,`Preset: surface (${s.nU}x${s.nV} ctrl pts)`,void 0,u,c),dt.setHasResult(!1),dt.setOriginalSurfaceForKnots(s),dt.setResultSurfaceForKnots(null),dt.setOriginalSurfaceForErrorMap(s),dt.setResultSurfaceForErrorMap(null);const f=c.maxRange*.1,p=c.maxRange*.02;Fr(f),Nr([p,p,p]),fi()}}function lg(i){Br(),qn=null,$n=null,hi=null,ii=null,ki=null,Vi=null,Ms=null,dt.clear(),dt.setMode(i),kt(`Switched to ${i} mode`)}function cg(){const i=document.getElementById("canvas-container");x_(i);const e=document.getElementById("panel"),t=$_(e,{onRun:ag,onPreset:og,onModeChange:lg,onAlgorithmChange:f=>{dt.setAlgorithm(f)},onVisibilityChange:()=>fi(),onLoadStart:f=>Gn.show(f),onLoadEnd:()=>Gn.hide()});pn=t.state;const n=t.setLoadProgress;Nr=t.setTolerance,Fr=t.setToleranceBounds,n((f,p,v)=>Gn.setPhase(f,p,v));const s=document.getElementById("panel-left");dt=K_(s,pn,()=>fi()),dt.setAlgorithm(pn.algorithm);const o=document.getElementById("tool-pivot"),u=document.getElementById("tool-fit"),c=document.getElementById("tool-ortho");o.addEventListener("click",()=>{const f=!o.classList.contains("active");o.classList.toggle("active",f),su(f),kt(f?"Pivot mode: click a point on the model.":"Pivot mode off.")}),u.addEventListener("click",()=>{ts(),o.classList.remove("active"),su(!1),kt("Fit to view.")}),c.addEventListener("click",()=>{const f=!c.classList.contains("active");c.classList.toggle("active",f),R_(f),kt(f?"Orthographic view.":"Perspective view.")}),Gn=new rg,kt('Ready. Select a preset and click "Run Algorithm".')}cg();
