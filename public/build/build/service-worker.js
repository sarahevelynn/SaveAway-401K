"use strict";var precacheConfig=[["/index.html","33c6386def354c359d2fe0b421752191"],["/static/css/main.7a0547b7.css","0b192bf56e8ab9d8f4c6519327f92c31"],["/static/js/main.e929143f.js","a2718d4aed6575e540af7e0900908f6e"],["/static/media/DINAlternateBold.a52d72c3.otf","a52d72c38f5e2f9b4498103567fd7300"],["/static/media/DINAlternateRegular.30ccfb72.otf","30ccfb72498209debe74c42b39616b32"],["/static/media/GDP.ceeaf4d9.png","ceeaf4d9666dc89c843c8921363a0d29"],["/static/media/MarriedTaxbrackets.29b80f06.png","29b80f0602131d9111c0bd36d625be4d"],["/static/media/RothPic.73d235e1.png","73d235e19bfec559c927449b39f585a9"],["/static/media/SAVEAWAY401K_RETIREMENTGUIDE.894b0e17.pdf","894b0e17811c0315a9cbdf24b542a60a"],["/static/media/SaveAway401kConventional.ab7e4268.png","ab7e42680a7212246f022be2433f65cf"],["/static/media/SaveAway401kFull.6ceaf266.png","6ceaf266f25b2aa9bf68c1e34938831b"],["/static/media/SaveAway401kFundChoicesConventional.de4afbc3.pdf","de4afbc3a60e25d83eef75540fb4fbb9"],["/static/media/SaveAway401kFundChoicesFull.564de4e4.pdf","564de4e43085689b3e877b76ed668eef"],["/static/media/SaveAway401kFundChoicesSecure.faeaaef6.pdf","faeaaef666fff6f815ef62c4640d5823"],["/static/media/SaveAway401kFundChoicesSensible.b26da99a.pdf","b26da99a1e1ec1832b7eb927ef37e08c"],["/static/media/SaveAway401kFundChoicesStandard.53e081f2.pdf","53e081f29eeb1c1d1222f1db8465c691"],["/static/media/SaveAway401kFundChoicesVigorous.b9c9585d.pdf","b9c9585dd78abdf2477fd8264680c966"],["/static/media/SaveAway401kSecure.6e57bea3.png","6e57bea32944ac8074ed425a17774fc6"],["/static/media/SaveAway401kSensible.507d2baa.png","507d2baa64ab467a89bd2e3680d35fa7"],["/static/media/SaveAway401kStandard.d2d4b60c.png","d2d4b60c7ed914053a00b379010739fa"],["/static/media/SaveAway401kVigorous.2f0483b0.png","2f0483b0dd8f8d31d33e3f49079dcfd1"],["/static/media/UnmarriedTaxbrackets.017bc2d9.png","017bc2d941298b4a000761c432e256df"],["/static/media/accountInfo.b932da59.png","b932da5991f2cbea977a2f397cc4f986"],["/static/media/crystalBall.8cb8c545.png","8cb8c545241bbc521e135acf1bdc40bd"],["/static/media/fsctx.af72631a.png","af72631ad1a51f3da3194f23d2b58344"],["/static/media/lightBulb.2006b739.jpg","2006b7390ed2f73803a54e3bb3c213fb"],["/static/media/logo.f141c46c.png","f141c46ca318535cd2f9656ad7124016"],["/static/media/priceTop.0139c954.png","0139c9547e08e2a6d0242039577e6b4f"],["/static/media/pricing1.6e78e860.png","6e78e8607d2a70fb0f9ca51cb2f5d324"],["/static/media/pricing2.71ed20fb.png","71ed20fb4b591244cb7dbd75b987166a"],["/static/media/pricing3.c3534582.png","c35345827c8f542d07aa1039bdc07f35"],["/static/media/retirement.200e1e5c.png","200e1e5cb1da4177cedb8b62daa6cb26"],["/static/media/retirement.9d6d012e.png","9d6d012e99c9d04ed7f27b69ba4a1ed1"],["/static/media/simple.ee045eb2.png","ee045eb22faf68ecc9d2e15b8d5983f4"],["/static/media/understandingFees.de63806d.png","de63806ddc4b43dc957f8072698c0510"],["/static/media/yearstoretirement.7135644c.png","7135644c990b1fed78a6d444af3c8f30"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});