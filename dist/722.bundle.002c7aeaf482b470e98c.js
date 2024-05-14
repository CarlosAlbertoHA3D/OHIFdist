"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[722],{23722:(e,t,a)=>{a.d(t,{fX:()=>s,Mr:()=>A,FC:()=>F,helpers:()=>O});var s={};a.r(s),a.d(s,{s:()=>R});var r=a(92136),i=a(44753);const{createUint8SharedArray:n,createFloat32SharedArray:o}=r.utilities;const l=(e,t)=>e.reduce(((e,a)=>((e[a[t]]=e[a[t]]||[]).push(a),e)),{});function d(e,t){const a={};let s=[];const r=Object.keys(e);for(let i=0;i<r.length;i++){const n=new Set,o=e[r[i]];for(let e=0;e<o.length;e++){const s=t(o[e].imageId)||0;if(a[s]=a[s]||[],a[s].push({imageId:o[e].imageId}),n.add(s),n.size-1<e)return}if(0==i)s=Array.from(n);else if(!h(s,n))return}return a}function c(e,t){const a=r.metaData.get(t,e);try{return parseFloat(a)}catch{return}}function m(e){const t=r.metaData.get("20011003",e);try{const{InlineBinary:e}=t;if(e){const t=atob(e),a=new ArrayBuffer(t.length),s=new DataView(a);for(let e=0;e<t.length;e++)s.setUint8(e,t.charCodeAt(e));return new Float32Array(a)[0]}return parseFloat(t)}catch{return}}function g(e){let t=r.metaData.get("0019100c",e);try{const{InlineBinary:e}=t;return e&&(t=atob(e)),parseFloat(t)}catch{return}}function u(e){let t=r.metaData.get("00431039",e);try{const{InlineBinary:e}=t;return e&&(t=atob(e).split("//")),parseFloat(t[0])%1e5}catch{return}}function h(e,t){if(e.length!=t.size)return!1;for(let a=0;a<e.length;a++)if(!t.has(e[a]))return!1;return!0}function I(e){const t=r.metaData.get("petImageModule",e);return t?t.frameReferenceTime:0}const f=function(e){const t=function(e){const t=e.map((e=>{const{imagePositionPatient:t}=r.metaData.get("imagePlaneModule",e);return{imageId:e,imagePositionPatient:t}}));if(!t.every((e=>e.imagePositionPatient)))return null;const a=l(t,"imagePositionPatient"),s=Object.keys(a),i=a[s[0]].length;return 1===i?null:s.every((e=>a[e].length===i))?a:null}(e);if(!t)return{imageIdsGroups:[e],splittingTag:null};const a=["TemporalPositionIdentifier","DiffusionBValue","TriggerTime","EchoTime","EchoNumber","PhilipsPrivateBValue","SiemensPrivateBValue","GEPrivateBValue","PetFrameReferenceTime"],s=[e=>c(e,a[0]),e=>c(e,a[1]),e=>c(e,a[2]),e=>c(e,a[3]),e=>c(e,a[4]),m,g,u,I];for(let e=0;e<s.length;e++){const r=d(t,s[e]);if(r){return{imageIdsGroups:Object.keys(r).map(Number.parseFloat).sort(((e,t)=>e-t)).map((e=>r[e].map((e=>e.imageId)))),splittingTag:a[e]}}}return{imageIdsGroups:[e],splittingTag:null}};const p=function(e){const{imageIdsGroups:t,splittingTag:a}=f(e);return{isDynamicVolume:t.length>1,timePoints:t,splittingTag:a}};const P=e=>{const t=function(e){const t=(0,r.getRenderingEngines)(),a=[];for(let s=0;s<t.length;s++){const i=t[s],n=r.utilities.getViewportsWithVolumeId(e,i.id);n.length&&a.push({renderingEngine:i,viewportIds:n.map((e=>e.id))})}return a}(e);t&&t.length&&t.forEach((({renderingEngine:e,viewportIds:t})=>{e.hasBeenDestroyed||e.renderViewports(t)}))};function T(e,t){const a=e.length,{rescaleSlope:s,rescaleIntercept:r,suvbw:i}=t;if("PT"===t.modality&&"number"==typeof i)for(let t=0;t<a;t++)e[t]=i*(e[t]*s+r);else for(let t=0;t<a;t++)e[t]=e[t]*s+r;return e}const y=r.Enums.RequestType.Prefetch,{ProgressiveIterator:E,imageRetrieveMetadataProvider:v,hasFloatScalingParameters:D}=r.utilities,{ImageQualityStatus:S}=r.Enums;class L extends r.ImageVolume{constructor(e,t){super(e),this.framesLoaded=0,this.framesProcessed=0,this.framesUpdated=0,this.autoRenderOnLoad=!0,this.cachedFrames=[],this.reRenderTarget=0,this.reRenderFraction=2,this.imagesLoader=this,this.cancelLoading=()=>{const{loadStatus:e}=this;if(!e||!e.loading)return;e.loading=!1,e.cancelled=!0,this.clearLoadCallbacks();r.imageLoadPoolManager.filterRequests((({additionalDetails:e})=>e.volumeId!==this.volumeId))},this.load=e=>{const{imageIds:t,loadStatus:a,numFrames:s}=this,{transferSyntaxUID:i}=r.metaData.get("transferSyntax",t[0])||{},n=r.metaData.get(v.IMAGE_RETRIEVE_CONFIGURATION,this.volumeId,i,"volume");if(this.imagesLoader=n?(n.create||r.ProgressiveRetrieveImages.createProgressive)(n):this,!0===a.loading)return;const{loaded:o}=this.loadStatus,l=t.length;o?e&&e({success:!0,framesLoaded:l,framesProcessed:l,numFrames:s,totalNumFrames:l}):(e&&this.loadStatus.callbacks.push(e),this._prefetchImageIds())},this.loadStatus=t.loadStatus}invalidateVolume(e){const{imageData:t,vtkOpenGLTexture:a}=this,{numFrames:s}=this;for(let e=0;e<s;e++)a.setUpdatedFrame(e);t.modified(),e&&P(this.volumeId)}clearLoadCallbacks(){this.loadStatus.callbacks=[]}callLoadStatusCallback(e){const{framesUpdated:t,framesProcessed:a,totalNumFrames:s}=e,{volumeId:i,reRenderFraction:n,loadStatus:o,metadata:l}=this,{FrameOfReferenceUID:d}=l;if(this.autoRenderOnLoad&&(t>this.reRenderTarget||a===s)&&(this.reRenderTarget+=n,P(i)),a===s){o.callbacks.forEach((t=>t(e)));const t={FrameOfReferenceUID:d,volumeId:i};(0,r.triggerEvent)(r.eventTarget,r.Enums.Events.IMAGE_VOLUME_LOADING_COMPLETED,t)}}updateTextureAndTriggerEvents(e,t,a=S.FULL_RESOLUTION){const s=this.imageIdIndexToFrameIndex(e),{cachedFrames:i,numFrames:n,totalNumFrames:o}=this,{FrameOfReferenceUID:l}=this.metadata;if(i[s]>a)return;if(i[s]===S.FULL_RESOLUTION)return;const d=a===S.FULL_RESOLUTION;i[e]=a,this.framesUpdated++,d&&(this.framesLoaded++,this.framesProcessed++),this.vtkOpenGLTexture.setUpdatedFrame(s),this.imageData.modified();const c={FrameOfReferenceUID:l,imageVolume:this,numberOfFrames:n,framesProcessed:this.framesProcessed};(0,r.triggerEvent)(r.eventTarget,r.Enums.Events.IMAGE_VOLUME_MODIFIED,c),d&&this.framesProcessed===this.totalNumFrames&&(this.loadStatus.loaded=!0,this.loadStatus.loading=!1),this.callLoadStatusCallback({success:!0,imageIdIndex:e,imageId:t,framesLoaded:this.framesLoaded,framesProcessed:this.framesProcessed,framesUpdated:this.framesUpdated,numFrames:n,totalNumFrames:o,complete:d,imageQualityStatus:a}),this.loadStatus.loaded&&(this.loadStatus.callbacks=[])}successCallback(e,t){const a=this.getImageIdIndex(e),s=this.getLoaderImageOptions(e),i=this.getScalarDataByImageIdIndex(a);!function(e,t,a){if(!(e.buffer instanceof ArrayBuffer))return;const s=a.targetBuffer.offset,r=a.targetBuffer.length,i=t.pixelData?t.pixelData:t.getPixelData();try{if(e instanceof Float32Array){const t=4,a=new Float32Array(i);if(a.length!==r)throw"Error pixelData length does not match frame length";e.set(a,s/t)}if(e instanceof Int16Array){const t=2,a=new Int16Array(i);if(a.length!==r)throw"Error pixelData length does not match frame length";e.set(a,s/t)}if(e instanceof Uint16Array){const t=2,a=new Uint16Array(i);if(a.length!==r)throw"Error pixelData length does not match frame length";e.set(a,s/t)}if(e instanceof Uint8Array){const t=1,a=new Uint8Array(i);if(a.length!==r)throw"Error pixelData length does not match frame length";e.set(a,s/t)}}catch(e){console.error(e)}}(i,t,s);const{scalingParameters:n}=t.preScale||{},{imageQualityStatus:o}=t,l=this.imageIdIndexToFrameIndex(a),d=r.cache.getCachedImageBasedOnImageURI(e),c=r.cache.getVolumeContainingImageId(e);if(this.loadStatus.cancelled)return void console.warn("volume load cancelled, returning for imageIdIndex: ",a);if(!(d||c&&c.volume!==this))return this.updateTextureAndTriggerEvents(a,e,o);const m=!!d;m&&s.targetBuffer&&this.imageCacheOffsetMap.set(e,{imageIdIndex:a,frameIndex:l,offset:s.targetBuffer?.offset||0,length:s.targetBuffer?.length});const g=d||c.volume;this.handleImageComingFromCache(g,m,n,i,l,i.buffer,a,e)}errorCallback(e,t,a){if(!t)return;const{totalNumFrames:s,numFrames:i}=this,n=this.getImageIdIndex(e);this.framesProcessed++,this.framesProcessed===s&&(this.loadStatus.loaded=!0,this.loadStatus.loading=!1),this.callLoadStatusCallback({success:!1,imageId:e,imageIdIndex:n,error:a,framesLoaded:this.framesLoaded,framesProcessed:this.framesProcessed,framesUpdated:this.framesUpdated,numFrames:i,totalNumFrames:s}),this.loadStatus.loaded&&(this.loadStatus.callbacks=[]);const o={error:a,imageIdIndex:n,imageId:e};(0,r.triggerEvent)(r.eventTarget,r.Enums.Events.IMAGE_LOAD_ERROR,o)}getLoaderImageOptions(e){const{transferSyntaxUID:t}=r.metaData.get("transferSyntax",e)||{},a=r.metaData.get("imagePlaneModule",e)||{},{rows:s,columns:i}=a,n=this.getImageIdIndex(e),o=this.getScalarDataByImageIdIndex(n);if(!o)return null;const l=o.buffer,{type:d,length:c,lengthInBytes:m}=function(e,t){let a,s;if(e instanceof Uint8Array)a="Uint8Array",s=1;else if(e instanceof Float32Array)a="Float32Array",s=4;else if(e instanceof Uint16Array)a="Uint16Array",s=2;else{if(!(e instanceof Int16Array))throw new Error("Unsupported array type");a="Int16Array",s=2}const r=e.length/t,i=r*s;return{type:a,byteSize:s,length:r,lengthInBytes:i}}(o,this.numFrames),g=r.metaData.get("modalityLutModule",e)||{},u=r.metaData.get("generalSeriesModule",e)||{},h={rescaleSlope:g.rescaleSlope,rescaleIntercept:g.rescaleIntercept,modality:u.modality};if("PT"===h.modality){const t=r.metaData.get("scalingModule",e);t&&(this._addScalingToVolume(t),h.suvbw=t.suvbw)}const I="number"==typeof h.rescaleSlope&&"number"==typeof h.rescaleIntercept,f=D(h),p=(0,r.canRenderFloatTextures)();this.isPreScaled=I,!p&&f&&(this.isPreScaled=!1);const P=this.imageIdIndexToFrameIndex(n);return{targetBuffer:{arrayBuffer:l instanceof ArrayBuffer?void 0:l,offset:P*m,length:c,type:d,rows:s,columns:i},skipCreateImage:!0,allowFloatRendering:p,preScale:{enabled:this.isPreScaled,scalingParameters:h},transferPixelData:!0,transferSyntaxUID:t,loader:r.imageLoader.loadImage,additionalDetails:{imageId:e,imageIdIndex:n,volumeId:this.volumeId}}}callLoadImage(e,t,a){const{cachedFrames:s}=this;if(s[t]===S.FULL_RESOLUTION)return;return E.as(r.imageLoader.loadImage(e,a)).forEach((t=>{this.successCallback(e,t)}),this.errorCallback.bind(this,t,e))}getImageIdsRequests(e,t){this.totalNumFrames=this.imageIds.length;this.autoRenderOnLoad&&(this.reRenderFraction=.02*this.totalNumFrames,this.reRenderTarget=this.reRenderFraction);return e.map((e=>{const a=this.getImageIdIndex(e),s=y,r=t,i=this.getLoaderImageOptions(e);return{callLoadImage:this.callLoadImage.bind(this),imageId:e,imageIdIndex:a,options:i,priority:r,requestType:s,additionalDetails:{volumeId:this.volumeId}}}))}handleImageComingFromCache(e,t,a,s,r,i,n,o){(t?e.imageLoadObject:e.convertToCornerstoneImage(o,n)).promise.then((e=>{const t=this._scaleIfNecessary(e,a),{pixelsPerImage:l,bytesPerImage:d}=this.cornerstoneImageMetaData,c=s.constructor;let m=d*r;const g=d/l;s.BYTES_PER_ELEMENT!==g&&(m*=s.BYTES_PER_ELEMENT/g);new c(i,m,l).set(t),this.updateTextureAndTriggerEvents(n,o,e.imageQualityStatus)})).catch((e=>{this.errorCallback(o,!0,e)}))}getImageLoadRequests(e){throw new Error("Abstract method")}getImageIdsToLoad(){throw new Error("Abstract method")}loadImages(e,t){this.loadStatus.loading=!0;return this.getImageLoadRequests(5).reverse().forEach((e=>{if(!e)return;const{callLoadImage:t,imageId:a,imageIdIndex:s,options:i,priority:n,requestType:o,additionalDetails:l}=e;r.imageLoadPoolManager.addRequest(t.bind(this,a,s,i),o,l,n)})),Promise.resolve(!0)}_prefetchImageIds(){this.loadStatus.loading=!0;const e=[...this.getImageIdsToLoad()];e.reverse(),this.totalNumFrames=this.imageIds.length;return this.autoRenderOnLoad&&(this.reRenderFraction=.02*this.totalNumFrames,this.reRenderTarget=this.reRenderFraction),this.imagesLoader.loadImages(e,this).catch((e=>{console.debug("progressive loading failed to complete",e)}))}_scaleIfNecessary(e,t){if(!e.preScale?.enabled)return e.getPixelData().slice(0);const a=e.preScale?.scaled,s=!t||!t.rescaleIntercept||!t.rescaleSlope;if(!a&&s)return e.getPixelData().slice(0);if(!a&&t&&void 0!==t.rescaleIntercept&&void 0!==t.rescaleSlope){return T(e.getPixelData().slice(0),t)}const{rescaleSlope:r,rescaleIntercept:i,suvbw:n}=t,{rescaleSlope:o,rescaleIntercept:l,suvbw:d}=e.preScale.scalingParameters;if(r===o&&i===l&&n===d)return e.getPixelData();const c=n/d,m=r/o,g=i-l*m;return T(e.getPixelData().slice(0),{...t,rescaleSlope:m,rescaleIntercept:g,suvbw:c})}_addScalingToVolume(e){if(this.scaling)return;const{suvbw:t,suvlbm:a,suvbsa:s}=e,r={};a&&(r.suvbwToSuvlbm=a/t),s&&(r.suvbwToSuvbsa=s/t),t&&(r.suvbw=t),this.scaling={PT:r}}}class b extends L{constructor(e,t){e.imageIds||(e.imageIds=t.imageIds),super(e,t),this.getImageIdsToLoad=()=>{const{imageIds:e}=this;return this.numFrames=e.length,e}}getScalarData(){return this.scalarData}getImageLoadRequests(e){const{imageIds:t}=this;return this.getImageIdsRequests(t,e)}}const F=function(e,t){if(!t||!t.imageIds||!t.imageIds.length)throw new Error("ImageIds must be provided to create a streaming image volume");const a=async function(){if("wadouri"===t.imageIds[0].split(":")[0]){const[a,s]=[Math.floor(t.imageIds.length/2),t.imageIds.length-1],i=[0,a,s];await Promise.all(i.map((a=>new Promise(((s,i)=>{const n=t.imageIds[a];r.imageLoadPoolManager.addRequest((async()=>{r.imageLoader.loadImage(n).then((()=>{console.log(`Prefetched imageId: ${n}`),s(!0)})).catch((e=>{i(e)}))}),r.Enums.RequestType.Prefetch,{volumeId:e},1)}))))).catch(console.error)}const{dimensions:a,spacing:s,origin:i,scalarData:n,direction:o,sizeInBytes:l,metadata:d,imageIds:c}=r.utilities.generateVolumePropsFromImageIds(t.imageIds,e);return new b({volumeId:e,metadata:d,dimensions:a,spacing:s,origin:i,direction:o,scalarData:n,sizeInBytes:l,imageIds:c},{imageIds:c,loadStatus:{loaded:!1,loading:!1,cancelled:!1,cachedFrames:[],callbacks:[]}})}();return{promise:a,decache:()=>{a.then((e=>{e.destroy(),e=null}))},cancel:()=>{a.then((e=>{e.cancelLoading()}))}}};var _;!function(e){e.DYNAMIC_VOLUME_TIME_POINT_INDEX_CHANGED="DYNAMIC_VOLUME_TIME_POINT_INDEX_CHANGED"}(_||(_={}));const R=_;class x extends L{constructor(e,t){x._ensureValidData(e,t),super(e,t),this._timePointIndex=0,this._getTimePointRequests=(e,t)=>{const{imageIds:a}=e;return this.getImageIdsRequests(a,t)},this._getTimePointsRequests=e=>{const t=this._getTimePointsToLoad();let a=[];return t.forEach((t=>{const s=this._getTimePointRequests(t,e);a=a.concat(s)})),a},this.getImageLoadRequests=e=>this._getTimePointsRequests(e),this._numTimePoints=this.scalarData.length,this._timePoints=this._getTimePointsData(),this._splittingTag=e.splittingTag}static _ensureValidData(e,t){const a=t.imageIds,s=e.scalarData;if(a.length%s.length!=0)throw new Error(`Number of imageIds is not a multiple of ${s.length}`)}_getTimePointsData(){const{imageIds:e}=this,t=this.scalarData,{numFrames:a}=this,s=t.length,r=[];for(let i=0;i<s;i++){const s=i*a,n=s+a;r.push({imageIds:e.slice(s,n),scalarData:t[i]})}return r}_getTimePointsToLoad(){const e=this._timePoints,t=this._timePointIndex,a=[e[t]];let s=t-1,r=t+1;for(;s>=0||r<e.length;)s>=0&&a.push(e[s--]),r<e.length&&a.push(e[r++]);return a}getImageIdsToLoad(){const e=this._getTimePointsToLoad();let t=[];return e.forEach((e=>{const{imageIds:a}=e;t=t.concat(a)})),t}isDynamicVolume(){return!0}get timePointIndex(){return this._timePointIndex}set timePointIndex(e){if(e<0||e>=this.numTimePoints)throw new Error(`Invalid timePointIndex (${e})`);if(this._timePointIndex===e)return;const{imageData:t}=this;this._timePointIndex=e,t.getPointData().setActiveScalars(`timePoint-${e}`),this.invalidateVolume(!0),(0,r.triggerEvent)(r.eventTarget,R.DYNAMIC_VOLUME_TIME_POINT_INDEX_CHANGED,{volumeId:this.volumeId,timePointIndex:e,numTimePoints:this.numTimePoints,splittingTag:this.splittingTag})}get splittingTag(){return this._splittingTag}get numTimePoints(){return this._numTimePoints}getScalarData(){return this.scalarData[this._timePointIndex]}}function w(e){const{imageIdsGroups:t,splittingTag:a}=f(e);return{volumesInfo:t.map((e=>function(e){const t=r.utilities.makeVolumeMetadata(e),{BitsAllocated:a,PixelRepresentation:s,PhotometricInterpretation:l,ImageOrientationPatient:d,PixelSpacing:c,Columns:m,Rows:g}=t,u=i.eR.fromValues(d[0],d[1],d[2]),h=i.eR.fromValues(d[3],d[4],d[5]),I=i.eR.create();i.eR.cross(I,u,h);const{zSpacing:f,origin:p,sortedImageIds:P}=r.utilities.sortImageIdsAndGetSpacing(e,I),T=e.length,y=[c[1],c[0],f],E=[m,g,T],v=[...u,...h,...I],D=1===s;let S=1;"RGB"===l&&(S=3);const L=(16===a?4:1)*E[0]*E[1]*E[2]*S;if(!r.cache.isCacheable(L))throw new Error(r.Enums.Events.CACHE_SIZE_EXCEEDED);let b;switch(r.cache.decacheIfNecessaryUntilBytesAvailable(L),a){case 8:if(D)throw new Error("8 Bit signed images are not yet supported by this plugin.");b=n(E[0]*E[1]*E[2]);break;case 16:b=o(E[0]*E[1]*E[2]);break;case 24:b=n(E[0]*E[1]*E[2]*S)}return{metadata:t,sortedImageIds:P,dimensions:E,spacing:y,origin:p,direction:v,scalarData:b,sizeInBytes:L}}(e))),splittingTag:a}}const A=function(e,t){if(!t||!t.imageIds||!t.imageIds.length)throw new Error("ImageIds must be provided to create a 4D streaming image volume");const{imageIds:a}=t,{volumesInfo:s,splittingTag:r}=w(a),{metadata:i,dimensions:n,spacing:o,origin:l,direction:d,sizeInBytes:c}=s[0],m=[],g=[];s.forEach((e=>{m.push(e.sortedImageIds),g.push(e.scalarData)}));const u=m.flat();let h=new x({volumeId:e,metadata:i,dimensions:n,spacing:o,origin:l,direction:d,scalarData:g,sizeInBytes:c,imageIds:u,splittingTag:r},{imageIds:u,loadStatus:{loaded:!1,loading:!1,cancelled:!1,cachedFrames:[],callbacks:[]}});return{promise:Promise.resolve(h),decache:()=>{h.destroy(),h=null},cancel:()=>{h.cancelLoading()}}},O={getDynamicVolumeInfo:p}}}]);
//# sourceMappingURL=722.bundle.002c7aeaf482b470e98c.js.map