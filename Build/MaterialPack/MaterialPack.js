/**
 * Cesium Materials - https://github.com/AnalyticalGraphicsInc/cesium-materials-pack
 *
 * Copyright 2011-2014 Analytical Graphics Inc. and Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium-materials-pack/blob/master/LICENSE.md for full licensing details.
 */
/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license
 * Cellular noise ("Worley noise") in 2D in GLSL.
 * Copyright (c) Stefan Gustavson 2011-04-19. All rights reserved.
 * This code is released under the conditions of the MIT license.
 * See LICENSE file for details.
 */

/**
 * @license
 * Description : Array and textureless GLSL 2D/3D/4D simplex 
 *               noise functions.
 *      Author : Ian McEwan, Ashima Arts.
 *  Maintainer : ijm
 *     Lastmod : 20110822 (ijm)
 *     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
 *               Distributed under the MIT License. See LICENSE file.
 *               https://github.com/ashima/webgl-noise
 */

!function(){var e,n,r;!function(a){function t(e,n){return h.call(e,n)}function i(e,n){var r,a,t,i,o,c,l,s,m,u,f=n&&n.split("/"),p=z.map,d=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(n){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),s=0;s<e.length;s+=1)if(u=e[s],"."===u)e.splice(s,1),s-=1;else if(".."===u){if(1===s&&(".."===e[2]||".."===e[0]))break;s>0&&(e.splice(s-1,2),s-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((f||d)&&p){for(r=e.split("/"),s=r.length;s>0;s-=1){if(a=r.slice(0,s).join("/"),f)for(m=f.length;m>0;m-=1)if(t=p[f.slice(0,m).join("/")],t&&(t=t[a])){i=t,o=s;break}if(i)break;!c&&d&&d[a]&&(c=d[a],l=s)}!i&&c&&(i=c,o=l),i&&(r.splice(0,o,i),e=r.join("/"))}return e}function o(e,n){return function(){return p.apply(a,g.call(arguments,0).concat([e,n]))}}function c(e){return function(n){return i(n,e)}}function l(e){return function(n){v[e]=n}}function s(e){if(t(y,e)){var n=y[e];delete y[e],_[e]=!0,f.apply(a,n)}if(!t(v,e)&&!t(_,e))throw new Error("No "+e);return v[e]}function m(e){var n,r=e?e.indexOf("!"):-1;return r>-1&&(n=e.substring(0,r),e=e.substring(r+1,e.length)),[n,e]}function u(e){return function(){return z&&z.config&&z.config[e]||{}}}var f,p,d,x,v={},y={},z={},_={},h=Object.prototype.hasOwnProperty,g=[].slice;d=function(e,n){var r,a=m(e),t=a[0];return e=a[1],t&&(t=i(t,n),r=s(t)),t?e=r&&r.normalize?r.normalize(e,c(n)):i(e,n):(e=i(e,n),a=m(e),t=a[0],e=a[1],t&&(r=s(t))),{f:t?t+"!"+e:e,n:e,pr:t,p:r}},x={require:function(e){return o(e)},exports:function(e){var n=v[e];return"undefined"!=typeof n?n:v[e]={}},module:function(e){return{id:e,uri:"",exports:v[e],config:u(e)}}},f=function(e,n,r,i){var c,m,u,f,p,z,h=[];if(i=i||e,"function"==typeof r){for(n=!n.length&&r.length?["require","exports","module"]:n,p=0;p<n.length;p+=1)if(f=d(n[p],i),m=f.f,"require"===m)h[p]=x.require(e);else if("exports"===m)h[p]=x.exports(e),z=!0;else if("module"===m)c=h[p]=x.module(e);else if(t(v,m)||t(y,m)||t(_,m))h[p]=s(m);else{if(!f.p)throw new Error(e+" missing "+m);f.p.load(f.n,o(i,!0),l(m),{}),h[p]=v[m]}u=r.apply(v[e],h),e&&(c&&c.exports!==a&&c.exports!==v[e]?v[e]=c.exports:u===a&&z||(v[e]=u))}else e&&(v[e]=r)},e=n=p=function(e,n,r,t,i){return"string"==typeof e?x[e]?x[e](n):s(d(e,n).f):(e.splice||(z=e,n.splice?(e=n,n=r,r=null):e=a),n=n||function(){},"function"==typeof r&&(r=t,t=i),t?f(a,e,n,r):setTimeout(function(){f(a,e,n,r)},4),p)},p.config=function(e){return z=e,z.deps&&p(z.deps,z.callback),p},e._defined=v,r=function(e,n,r){n.splice||(r=n,n=[]),t(v,e)||t(y,e)||(y[e]=[e,n,r])},r.amd={jQuery:!0}}(),r("Shaders/AsphaltMaterial",[],function(){"use strict";return"uniform vec4 asphaltColor;\nuniform float bumpSize;\nuniform float roughness;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec4 color = asphaltColor;\nvec2 st = materialInput.st;\nvec2 F = czm_cellular(st / bumpSize);\ncolor.rgb -= (F.x / F.y) * 0.1;\nfloat noise = czm_snoise(st / bumpSize);\nnoise = pow(noise, 5.0) * roughness;\ncolor.rgb += noise;\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/BlobMaterial",[],function(){"use strict";return"uniform vec4 lightColor;\nuniform vec4 darkColor;\nuniform float frequency;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec2 F = czm_cellular(materialInput.st * frequency);\nfloat t = 1.0 - F.x * F.x;\nvec4 color = mix(lightColor, darkColor, t);\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/BrickMaterial",[],function(){"use strict";return"uniform vec4 brickColor;\nuniform vec4 mortarColor;\nuniform vec2 brickSize;\nuniform vec2 brickPct;\nuniform float brickRoughness;\nuniform float mortarRoughness;\n#define Integral(x, p) ((floor(x) * p) + max(fract(x) - (1.0 - p), 0.0))\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec2 st = materialInput.st;\nvec2 position = st / brickSize;\nif(fract(position.y * 0.5) > 0.5) {\nposition.x += 0.5;\n}\nvec2 filterWidth = vec2(0.02);\nvec2 useBrick = (Integral(position + filterWidth, brickPct) -\nIntegral(position, brickPct)) / filterWidth;\nfloat useBrickFinal = useBrick.x * useBrick.y;\nvec4 color = mix(mortarColor, brickColor, useBrickFinal);\nvec2 brickScaled = vec2(st.x / 0.1, st.y / 0.006);\nfloat brickNoise = abs(czm_snoise(brickScaled) * brickRoughness / 5.0);\ncolor.rg += brickNoise * useBrickFinal;\nvec2 mortarScaled = st / 0.005;\nfloat mortarNoise = max(czm_snoise(mortarScaled) * mortarRoughness, 0.0);\ncolor.rgb += mortarNoise * (1.0 - useBrickFinal);\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/Builtin/Functions/cellular",[],function(){"use strict";return"vec3 _czm_permute289(vec3 x)\n{\nreturn mod((34.0 * x + 1.0) * x, 289.0);\n}\nvec2 czm_cellular(vec2 P)\n{\n#define K 0.142857142857\n#define Ko 0.428571428571\n#define jitter 1.0\nvec2 Pi = mod(floor(P), 289.0);\nvec2 Pf = fract(P);\nvec3 oi = vec3(-1.0, 0.0, 1.0);\nvec3 of = vec3(-0.5, 0.5, 1.5);\nvec3 px = _czm_permute289(Pi.x + oi);\nvec3 p = _czm_permute289(px.x + Pi.y + oi);\nvec3 ox = fract(p*K) - Ko;\nvec3 oy = mod(floor(p*K),7.0)*K - Ko;\nvec3 dx = Pf.x + 0.5 + jitter*ox;\nvec3 dy = Pf.y - of + jitter*oy;\nvec3 d1 = dx * dx + dy * dy;\np = _czm_permute289(px.y + Pi.y + oi);\nox = fract(p*K) - Ko;\noy = mod(floor(p*K),7.0)*K - Ko;\ndx = Pf.x - 0.5 + jitter*ox;\ndy = Pf.y - of + jitter*oy;\nvec3 d2 = dx * dx + dy * dy;\np = _czm_permute289(px.z + Pi.y + oi);\nox = fract(p*K) - Ko;\noy = mod(floor(p*K),7.0)*K - Ko;\ndx = Pf.x - 1.5 + jitter*ox;\ndy = Pf.y - of + jitter*oy;\nvec3 d3 = dx * dx + dy * dy;\nvec3 d1a = min(d1, d2);\nd2 = max(d1, d2);\nd2 = min(d2, d3);\nd1 = min(d1a, d2);\nd2 = max(d1a, d2);\nd1.xy = (d1.x < d1.y) ? d1.xy : d1.yx;\nd1.xz = (d1.x < d1.z) ? d1.xz : d1.zx;\nd1.yz = min(d1.yz, d2.yz);\nd1.y = min(d1.y, d1.z);\nd1.y = min(d1.y, d2.x);\nreturn sqrt(d1.xy);\n}\n"}),r("Shaders/Builtin/Functions/snoise",[],function(){"use strict";return"vec4 _czm_mod289(vec4 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 _czm_mod289(vec3 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 _czm_mod289(vec2 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nfloat _czm_mod289(float x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 _czm_permute(vec4 x)\n{\nreturn _czm_mod289(((x*34.0)+1.0)*x);\n}\nvec3 _czm_permute(vec3 x)\n{\nreturn _czm_mod289(((x*34.0)+1.0)*x);\n}\nfloat _czm_permute(float x)\n{\nreturn _czm_mod289(((x*34.0)+1.0)*x);\n}\nvec4 _czm_taylorInvSqrt(vec4 r)\n{\nreturn 1.79284291400159 - 0.85373472095314 * r;\n}\nfloat _czm_taylorInvSqrt(float r)\n{\nreturn 1.79284291400159 - 0.85373472095314 * r;\n}\nvec4 _czm_grad4(float j, vec4 ip)\n{\nconst vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\nvec4 p,s;\np.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\np.w = 1.5 - dot(abs(p.xyz), ones.xyz);\ns = vec4(lessThan(p, vec4(0.0)));\np.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\nreturn p;\n}\nfloat czm_snoise(vec2 v)\n{\nconst vec4 C = vec4(0.211324865405187,\n0.366025403784439,\n-0.577350269189626,\n0.024390243902439);\nvec2 i  = floor(v + dot(v, C.yy) );\nvec2 x0 = v -   i + dot(i, C.xx);\nvec2 i1;\ni1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\nvec4 x12 = x0.xyxy + C.xxzz;\nx12.xy -= i1;\ni = _czm_mod289(i);\nvec3 p = _czm_permute( _czm_permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));\nvec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\nm = m*m ;\nm = m*m ;\nvec3 x = 2.0 * fract(p * C.www) - 1.0;\nvec3 h = abs(x) - 0.5;\nvec3 ox = floor(x + 0.5);\nvec3 a0 = x - ox;\nm *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\nvec3 g;\ng.x  = a0.x  * x0.x  + h.x  * x0.y;\ng.yz = a0.yz * x12.xz + h.yz * x12.yw;\nreturn 130.0 * dot(m, g);\n}\nfloat czm_snoise(vec3 v)\n{\nconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\nconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\nvec3 i  = floor(v + dot(v, C.yyy) );\nvec3 x0 =   v - i + dot(i, C.xxx) ;\nvec3 g = step(x0.yzx, x0.xyz);\nvec3 l = 1.0 - g;\nvec3 i1 = min( g.xyz, l.zxy );\nvec3 i2 = max( g.xyz, l.zxy );\nvec3 x1 = x0 - i1 + C.xxx;\nvec3 x2 = x0 - i2 + C.yyy;\nvec3 x3 = x0 - D.yyy;\ni = _czm_mod289(i);\nvec4 p = _czm_permute( _czm_permute( _czm_permute(\ni.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\nfloat n_ = 0.142857142857;\nvec3  ns = n_ * D.wyz - D.xzx;\nvec4 j = p - 49.0 * floor(p * ns.z * ns.z);\nvec4 x_ = floor(j * ns.z);\nvec4 y_ = floor(j - 7.0 * x_ );\nvec4 x = x_ *ns.x + ns.yyyy;\nvec4 y = y_ *ns.x + ns.yyyy;\nvec4 h = 1.0 - abs(x) - abs(y);\nvec4 b0 = vec4( x.xy, y.xy );\nvec4 b1 = vec4( x.zw, y.zw );\nvec4 s0 = floor(b0)*2.0 + 1.0;\nvec4 s1 = floor(b1)*2.0 + 1.0;\nvec4 sh = -step(h, vec4(0.0));\nvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\nvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\nvec3 p0 = vec3(a0.xy,h.x);\nvec3 p1 = vec3(a0.zw,h.y);\nvec3 p2 = vec3(a1.xy,h.z);\nvec3 p3 = vec3(a1.zw,h.w);\nvec4 norm = _czm_taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\np0 *= norm.x;\np1 *= norm.y;\np2 *= norm.z;\np3 *= norm.w;\nvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\nm = m * m;\nreturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\ndot(p2,x2), dot(p3,x3) ) );\n}\nfloat czm_snoise(vec4 v)\n{\nconst vec4  C = vec4( 0.138196601125011,\n0.276393202250021,\n0.414589803375032,\n-0.447213595499958);\n#define F4 0.309016994374947451\nvec4 i  = floor(v + dot(v, vec4(F4)) );\nvec4 x0 = v -   i + dot(i, C.xxxx);\nvec4 i0;\nvec3 isX = step( x0.yzw, x0.xxx );\nvec3 isYZ = step( x0.zww, x0.yyz );\ni0.x = isX.x + isX.y + isX.z;\ni0.yzw = 1.0 - isX;\ni0.y += isYZ.x + isYZ.y;\ni0.zw += 1.0 - isYZ.xy;\ni0.z += isYZ.z;\ni0.w += 1.0 - isYZ.z;\nvec4 i3 = clamp( i0, 0.0, 1.0 );\nvec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\nvec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\nvec4 x1 = x0 - i1 + C.xxxx;\nvec4 x2 = x0 - i2 + C.yyyy;\nvec4 x3 = x0 - i3 + C.zzzz;\nvec4 x4 = x0 + C.wwww;\ni = _czm_mod289(i);\nfloat j0 = _czm_permute( _czm_permute( _czm_permute( _czm_permute(i.w) + i.z) + i.y) + i.x);\nvec4 j1 = _czm_permute( _czm_permute( _czm_permute( _czm_permute (\ni.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n+ i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n+ i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n+ i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\nvec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\nvec4 p0 = _czm_grad4(j0,   ip);\nvec4 p1 = _czm_grad4(j1.x, ip);\nvec4 p2 = _czm_grad4(j1.y, ip);\nvec4 p3 = _czm_grad4(j1.z, ip);\nvec4 p4 = _czm_grad4(j1.w, ip);\nvec4 norm = _czm_taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\np0 *= norm.x;\np1 *= norm.y;\np2 *= norm.z;\np3 *= norm.w;\np4 *= _czm_taylorInvSqrt(dot(p4,p4));\nvec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\nvec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\nm0 = m0 * m0;\nm1 = m1 * m1;\nreturn 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n+ dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n}\n"}),r("Shaders/Builtin/CzmBuiltins",["./Functions/cellular","./Functions/snoise"],function(e,n){"use strict";return{czm_cellular:e,czm_snoise:n}}),r("Shaders/CementMaterial",[],function(){"use strict";return"uniform vec4 cementColor;\nuniform float grainScale;\nuniform float roughness;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nfloat noise = czm_snoise(materialInput.st / grainScale);\nnoise = pow(noise, 5.0) * roughness;\nvec4 color = cementColor;\ncolor.rgb += noise;\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/ErosionMaterial",[],function(){"use strict";return"uniform vec4 color;\nuniform float time;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nfloat alpha = 1.0;\nif (time != 1.0)\n{\nfloat t = 0.5 + (0.5 * czm_snoise(materialInput.str / (1.0 / 10.0)));\nif (t > time)\n{\nalpha = 0.0;\n}\n}\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a * alpha;\nreturn material;\n}\n"}),r("Shaders/FacetMaterial",[],function(){"use strict";return"uniform vec4 lightColor;\nuniform vec4 darkColor;\nuniform float frequency;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec2 F = czm_cellular(materialInput.st * frequency);\nfloat t = 0.1 + (F.y - F.x);\nvec4 color = mix(lightColor, darkColor, t);\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/GrassMaterial",[],function(){"use strict";return"uniform vec4 grassColor;\nuniform vec4 dirtColor;\nuniform float patchiness;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec2 st = materialInput.st;\nfloat noise1 = (czm_snoise(st * patchiness * 1.0)) * 1.0;\nfloat noise2 = (czm_snoise(st * patchiness * 2.0)) * 0.5;\nfloat noise3 = (czm_snoise(st * patchiness * 4.0)) * 0.25;\nfloat noise = sin(noise1 + noise2 + noise3) * 0.1;\nvec4 color = mix(grassColor, dirtColor, noise);\nfloat verticalNoise = czm_snoise(vec2(st.x * 100.0, st.y * 20.0)) * 0.02;\nfloat horizontalNoise = czm_snoise(vec2(st.x * 20.0, st.y * 100.0)) * 0.02;\nfloat stripeNoise = min(verticalNoise, horizontalNoise);\ncolor.rgb += stripeNoise;\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/TieDyeMaterial",[],function(){"use strict";return"uniform vec4 lightColor;\nuniform vec4 darkColor;\nuniform float frequency;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec3 scaled = materialInput.str * frequency;\nfloat t = abs(czm_snoise(scaled));\nvec4 color = mix(lightColor, darkColor, t);\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("Shaders/WoodMaterial",[],function(){"use strict";return"uniform vec4 lightWoodColor;\nuniform vec4 darkWoodColor;\nuniform float ringFrequency;\nuniform vec2 noiseScale;\nuniform float grainFrequency;\nczm_material czm_getMaterial(czm_materialInput materialInput)\n{\nczm_material material = czm_getDefaultMaterial(materialInput);\nvec2 st = materialInput.st;\nvec2 noisevec;\nnoisevec.x = czm_snoise(st * noiseScale.x);\nnoisevec.y = czm_snoise(st * noiseScale.y);\nvec2 location = st + noisevec;\nfloat dist = sqrt(location.x * location.x + location.y * location.y);\ndist *= ringFrequency;\nfloat r = fract(dist + noisevec[0] + noisevec[1]) * 2.0;\nif(r > 1.0)\nr = 2.0 - r;\nvec4 color = mix(lightWoodColor, darkWoodColor, r);\nr = abs(czm_snoise(vec2(st.x * grainFrequency, st.y * grainFrequency * 0.02))) * 0.2;\ncolor.rgb += lightWoodColor.rgb * r;\nmaterial.diffuse = color.rgb;\nmaterial.alpha = color.a;\nreturn material;\n}\n"}),r("initialize",["./Shaders/AsphaltMaterial","./Shaders/BlobMaterial","./Shaders/BrickMaterial","./Shaders/CementMaterial","./Shaders/ErosionMaterial","./Shaders/FacetMaterial","./Shaders/GrassMaterial","./Shaders/TieDyeMaterial","./Shaders/WoodMaterial","./Shaders/Builtin/CzmBuiltins"],function(e,n,r,a,t,i,o,c,l,s){"use strict";function m(m){for(var u in s)s.hasOwnProperty(u)&&(m.ShaderProgram._czmBuiltinsAndUniforms[u]=s[u]);m.Material.AsphaltType="Asphalt",m.Material._materialCache.addMaterial(m.Material.AsphaltType,{fabric:{type:m.Material.AsphaltType,uniforms:{asphaltColor:new m.Color(.15,.15,.15,1),bumpSize:.02,roughness:.2},source:e},translucent:function(e){return e.uniforms.asphaltColor.alpha<1}}),m.Material.BlobType="Blob",m.Material._materialCache.addMaterial(m.Material.BlobType,{fabric:{type:m.Material.BlobType,uniforms:{lightColor:new m.Color(1,1,1,.5),darkColor:new m.Color(0,0,1,.5),frequency:10},source:n},translucent:function(e){var n=e.uniforms;return n.lightColor.alpha<1||n.darkColor.alpha<0}}),m.Material.BrickType="Brick",m.Material._materialCache.addMaterial(m.Material.BrickType,{fabric:{type:m.Material.BrickType,uniforms:{brickColor:new m.Color(.6,.3,.1,1),mortarColor:new m.Color(.8,.8,.7,1),brickSize:new m.Cartesian2(.3,.15),brickPct:new m.Cartesian2(.9,.85),brickRoughness:.2,mortarRoughness:.1},source:r},translucent:function(e){var n=e.uniforms;return n.brickColor.alpha<1||n.mortarColor.alpha<1}}),m.Material.CementType="Cement",m.Material._materialCache.addMaterial(m.Material.CementType,{fabric:{type:m.Material.CementType,uniforms:{cementColor:new m.Color(.95,.95,.85,1),grainScale:.01,roughness:.3},source:a},translucent:function(e){return e.uniforms.cementColor.alpha<1}}),m.Material.ErosionType="Erosion",m.Material._materialCache.addMaterial(m.Material.ErosionType,{fabric:{type:m.Material.ErosionType,uniforms:{color:new m.Color(1,0,0,.5),time:1},source:t},translucent:function(e){return e.uniforms.color.alpha<1}}),m.Material.FacetType="Facet",m.Material._materialCache.addMaterial(m.Material.FacetType,{fabric:{type:m.Material.FacetType,uniforms:{lightColor:new m.Color(.25,.25,.25,.75),darkColor:new m.Color(.75,.75,.75,.75),frequency:10},source:i},translucent:function(e){var n=e.uniforms;return n.lightColor.alpha<1||n.darkColor.alpha<0}}),m.Material.GrassType="Grass",m.Material._materialCache.addMaterial(m.Material.GrassType,{fabric:{type:m.Material.GrassType,uniforms:{grassColor:new m.Color(.25,.4,.1,1),dirtColor:new m.Color(.1,.1,.1,1),patchiness:1.5},source:o},translucent:function(e){var n=e.uniforms;return n.grassColor.alpha<1||n.dirtColor.alpha<1}}),m.Material.TyeDyeType="TieDye",m.Material._materialCache.addMaterial(m.Material.TyeDyeType,{fabric:{type:m.Material.TyeDyeType,uniforms:{lightColor:new m.Color(1,1,0,.75),darkColor:new m.Color(1,0,0,.75),frequency:5},source:c},translucent:function(e){var n=e.uniforms;return n.lightColor.alpha<1||n.darkColor.alpha<0}}),m.Material.WoodType="Wood",m.Material._materialCache.addMaterial(m.Material.WoodType,{fabric:{type:m.Material.WoodType,uniforms:{lightWoodColor:new m.Color(.6,.3,.1,1),darkWoodColor:new m.Color(.4,.2,.07,1),ringFrequency:3,noiseScale:new m.Cartesian2(.7,.5),grainFrequency:27},source:l},translucent:function(e){var n=e.uniforms;return n.lightWoodColor.alpha<1||n.darkWoodColor.alpha<1}})}return m}),r("MaterialPack",["./Shaders/AsphaltMaterial","./Shaders/BlobMaterial","./Shaders/BrickMaterial","./Shaders/Builtin/CzmBuiltins","./Shaders/Builtin/Functions/cellular","./Shaders/Builtin/Functions/snoise","./Shaders/CementMaterial","./Shaders/ErosionMaterial","./Shaders/FacetMaterial","./Shaders/GrassMaterial","./Shaders/TieDyeMaterial","./Shaders/WoodMaterial","./initialize"],function(e,n,r,a,t,i,o,c,l,s,m,u,f){"use strict";var p={_shaders:{}};return p._shaders.AsphaltMaterial=e,p._shaders.BlobMaterial=n,p._shaders.BrickMaterial=r,p._shaders.CzmBuiltins=a,p._shaders.cellular=t,p._shaders.snoise=i,p._shaders.CementMaterial=o,p._shaders.ErosionMaterial=c,p._shaders.FacetMaterial=l,p._shaders.GrassMaterial=s,p._shaders.TieDyeMaterial=m,p._shaders.WoodMaterial=u,p.initialize=f,p}),n(["MaterialPack"],function(e){"use strict";var n="undefined"!=typeof window?window:"undefined"!=typeof self?self:{};n.MaterialPack=e},void 0,!0)}();