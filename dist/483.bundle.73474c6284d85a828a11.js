(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[483],{79697:(t,o,e)=>{"use strict";e.d(o,{A:()=>u});var n=e(61738),i=e(92136);const r="viewport-element";function s(t,o){if(n.wk.svgNodeCache[t])return n.wk.svgNodeCache[t][o]?n.wk.svgNodeCache[t][o].domRef:void 0}function a(t,o,e,i){if(!n.wk.svgNodeCache[o])return null;n.wk.svgNodeCache[o][i]={touched:!0,domRef:e},t.appendChild(e)}function l(t,o){n.wk.svgNodeCache[t]&&n.wk.svgNodeCache[t][o]&&(n.wk.svgNodeCache[t][o].touched=!0)}function d(t,o){n.wk.svgNodeCache[o]&&Object.keys(n.wk.svgNodeCache[o]).forEach((e=>{const i=n.wk.svgNodeCache[o][e];!i.touched&&i.domRef&&(t.removeChild(i.domRef),delete n.wk.svgNodeCache[o][e])}))}const c=function(t){const o=(0,i.getEnabledElement)(t),{viewportId:e,renderingEngineId:c}=o,u=`${e}:${c}`,h=function(t){const o=`.${r}`,e=t.querySelector(o);return e.querySelector(":scope > .svg-layer")}(t);return Object.keys(n.wk.svgNodeCache[u]).forEach((t=>{n.wk.svgNodeCache[u][t].touched=!1})),{svgLayerElement:h,svgNodeCacheForCanvas:n.wk.svgNodeCache,getSvgNode:s.bind(this,u),appendNode:a.bind(this,h,u),setNodeTouched:l.bind(this,u),clearUntouched:d.bind(this,h,u)}};const u=function(t,o){const e=c(t);o(e),e.clearUntouched()}},12468:(t,o,e)=>{"use strict";var n;e.d(o,{A:()=>i}),function(t){t.Active="Active",t.Passive="Passive",t.Enabled="Enabled",t.Disabled="Disabled"}(n||(n={}));const i=n},27630:(t,o,e)=>{"use strict";e.d(o,{A:()=>w});var n=e(61738),i=e(84901),r=e(51008),s=e.n(r),a=e(48463),l=e.n(a),d=e(92136),c=e(32916),u=e(40233);const{Active:h,Passive:g,Enabled:p,Disabled:f}=i.ToolModes,v=[{mouseButton:i.MouseBindings.Primary}];class m{constructor(t){this.viewportsInfo=[],this.toolOptions={},this.currentActivePrimaryToolName=null,this.prevActivePrimaryToolName=null,this.restoreToolOptions={},this._toolInstances={},this.id=t}getViewportIds(){return this.viewportsInfo.map((({viewportId:t})=>t))}getViewportsInfo(){return this.viewportsInfo.slice()}getToolInstance(t){const o=this._toolInstances[t];if(o)return o;console.warn(`'${t}' is not registered with this toolGroup (${this.id}).`)}getToolInstances(){return this._toolInstances}hasTool(t){return!!this._toolInstances[t]}addTool(t,o={}){const e=n.wk.tools[t],i=void 0!==t&&""!==t,r=this.toolOptions[t];if(!i)return void console.warn("Tool with configuration did not produce a toolName: ",o);if(!e)return void console.warn(`'${t}' is not registered with the library. You need to use cornerstoneTools.addTool to register it.`);if(r)return void console.warn(`'${t}' is already registered for ToolGroup ${this.id}.`);const{toolClass:s}=e,a=new s({name:t,toolGroupId:this.id,configuration:o});this._toolInstances[t]=a}addToolInstance(t,o,e={}){let i=n.wk.tools[t]?.toolClass;if(!i){const e=n.wk.tools[o].toolClass;class r extends e{}r.toolName=t,i=r,n.wk.tools[t]={toolClass:r}}this.addTool(i.toolName,e)}addViewport(t,o){if("string"!=typeof t)throw new Error("viewportId must be defined and be a string");const e=(0,d.getRenderingEngines)();if(!o&&e.length>1)throw new Error("You must specify a renderingEngineId when there are multiple rendering engines.");const n=o||e[0].id;this.viewportsInfo.some((({viewportId:o})=>o===t))||this.viewportsInfo.push({viewportId:t,renderingEngineId:n});const r=this.getActivePrimaryMouseButtonTool();d.Settings.getRuntimeSettings().get("useCursors")&&this.setViewportsCursorByToolName(r);const s={toolGroupId:this.id,viewportId:t,renderingEngineId:n};(0,d.triggerEvent)(d.eventTarget,i.Events.TOOLGROUP_VIEWPORT_ADDED,s)}removeViewports(t,o){const e=[];if(this.viewportsInfo.forEach(((n,i)=>{let r=!1;n.renderingEngineId===t&&(r=!0,o&&n.viewportId!==o&&(r=!1)),r&&e.push(i)})),e.length)for(let t=e.length-1;t>=0;t--)this.viewportsInfo.splice(e[t],1);const n={toolGroupId:this.id,viewportId:o,renderingEngineId:t};(0,d.triggerEvent)(d.eventTarget,i.Events.TOOLGROUP_VIEWPORT_REMOVED,n)}setActiveStrategy(t,o){const e=this._toolInstances[t];void 0!==e?e.setActiveStrategy(o):console.warn(`Tool ${t} not added to toolGroup, can't set tool configuration.`)}setToolMode(t,o,e={}){t?o!==i.ToolModes.Active?o!==i.ToolModes.Passive?o!==i.ToolModes.Enabled?o!==i.ToolModes.Disabled?console.warn("setToolMode: mode must be defined"):this.setToolDisabled(t):this.setToolEnabled(t):this.setToolPassive(t):this.setToolActive(t,e||this.restoreToolOptions[t]):console.warn("setToolMode: toolName must be defined")}setToolActive(t,o={}){const e=this._toolInstances[t];if(void 0===e)return void console.warn(`Tool ${t} not added to toolGroup, can't set tool mode.`);if(!e)return void console.warn(`'${t}' instance ${e} is not registered with this toolGroup, can't set tool mode.`);const n={bindings:[...this.toolOptions[t]?this.toolOptions[t].bindings:[],...o.bindings?o.bindings:[]].reduce(((t,o)=>{const e=void 0!==o.numTouchPoints,n=void 0!==o.mouseButton;return t.some((t=>T(t,o)))||!e&&!n||t.push(o),t}),[]),mode:h};this.toolOptions[t]=n,this._toolInstances[t].mode=h;const r=d.Settings.getRuntimeSettings().get("useCursors");if(this._hasMousePrimaryButtonBinding(o)&&r)this.setViewportsCursorByToolName(t);else{if(!this.getActivePrimaryMouseButtonTool()&&r){const t=c.MouseCursor.getDefinedCursor("default");this._setCursorForViewports(t)}}this._hasMousePrimaryButtonBinding(o)&&(null===this.prevActivePrimaryToolName?this.prevActivePrimaryToolName=t:this.prevActivePrimaryToolName=this.currentActivePrimaryToolName,this.currentActivePrimaryToolName=t),"function"==typeof e.onSetToolActive&&e.onSetToolActive(),this._renderViewports();const s={toolGroupId:this.id,toolName:t,toolBindingsOptions:o};(0,d.triggerEvent)(d.eventTarget,i.Events.TOOL_ACTIVATED,s),this._triggerToolModeChangedEvent(t,h,o)}setToolPassive(t,o){const e=this._toolInstances[t];if(void 0===e)return void console.warn(`Tool ${t} not added to toolGroup, can't set tool mode.`);const n=this.getToolOptions(t),i=Object.assign({bindings:n?n.bindings:[]},n,{mode:g}),r=Array.isArray(o?.removeAllBindings)?o.removeAllBindings:this.getDefaultPrimaryBindings();i.bindings=i.bindings.filter((t=>!0!==o?.removeAllBindings&&!r.some((o=>T(t,o)))));let s=g;0!==i.bindings.length&&(s=h,i.mode=s),this.toolOptions[t]=i,e.mode=s,"function"==typeof e.onSetToolPassive&&e.onSetToolPassive(),this._renderViewports(),this._triggerToolModeChangedEvent(t,g)}setToolEnabled(t){const o=this._toolInstances[t];if(void 0===o)return void console.warn(`Tool ${t} not added to toolGroup, can't set tool mode.`);const e={bindings:[],mode:p};this.toolOptions[t]=e,o.mode=p,"function"==typeof o.onSetToolEnabled&&o.onSetToolEnabled(),this._renderViewports(),this._triggerToolModeChangedEvent(t,p)}setToolDisabled(t){const o=this._toolInstances[t];if(void 0===o)return void console.warn(`Tool ${t} not added to toolGroup, can't set tool mode.`);const e={bindings:[],mode:f};this.restoreToolOptions[t]=this.toolOptions[t],this.toolOptions[t]=e,o.mode=f,"function"==typeof o.onSetToolDisabled&&o.onSetToolDisabled(),this._renderViewports(),this._triggerToolModeChangedEvent(t,f)}getToolOptions(t){const o=this.toolOptions[t];if(void 0!==o)return o}getActivePrimaryMouseButtonTool(){return Object.keys(this.toolOptions).find((t=>{const o=this.toolOptions[t];return o.mode===h&&this._hasMousePrimaryButtonBinding(o)}))}setViewportsCursorByToolName(t,o){const e=this._getCursor(t,o);this._setCursorForViewports(e)}_getCursor(t,o){let e,n;return o&&(e=`${t}.${o}`,n=c.SVGMouseCursor.getDefinedCursor(e,!0),n)?n:(e=`${t}`,n=c.SVGMouseCursor.getDefinedCursor(e,!0),n||(e=t,n=c.SVGMouseCursor.getDefinedCursor(e,!0),n||c.MouseCursor.getDefinedCursor("default")))}_setCursorForViewports(t){this.viewportsInfo.forEach((({renderingEngineId:o,viewportId:e})=>{const n=(0,d.getEnabledElementByIds)(e,o);if(!n)return;const{viewport:i}=n;(0,u.initElementCursor)(i.element,t)}))}setToolConfiguration(t,o,e){const n=this._toolInstances[t];if(void 0===n)return console.warn(`Tool ${t} not present, can't set tool configuration.`),!1;let i;return i=e?o:Object.assign(n.configuration,o),n.configuration=i,"function"==typeof n.onSetToolConfiguration&&n.onSetToolConfiguration(),this._renderViewports(),!0}getDefaultMousePrimary(){return i.MouseBindings.Primary}getDefaultPrimaryBindings(){return v}getToolConfiguration(t,o){if(void 0===this._toolInstances[t])return void console.warn(`Tool ${t} not present, can't set tool configuration.`);const e=s()(this._toolInstances[t].configuration,o)||this._toolInstances[t].configuration;return l()(e)}getPrevActivePrimaryToolName(){return this.prevActivePrimaryToolName}clone(t,o=null){let e=n.dU.getToolGroup(t);return e?(console.warn(`ToolGroup ${t} already exists`),e):(e=n.dU.createToolGroup(t),o=o??(()=>!0),Object.keys(this._toolInstances).filter(o).forEach((t=>{const o=this._toolInstances[t],n=this.toolOptions[t],i=o.mode;e.addTool(t),e.setToolMode(t,i,{bindings:n.bindings??[]})})),e)}_hasMousePrimaryButtonBinding(t){const o=this.getDefaultPrimaryBindings();return t?.bindings?.some((t=>o.some((o=>T(t,o)))))}_renderViewports(){this.viewportsInfo.forEach((({renderingEngineId:t,viewportId:o})=>{(0,d.getRenderingEngine)(t).renderViewport(o)}))}_triggerToolModeChangedEvent(t,o,e){const n={toolGroupId:this.id,toolName:t,mode:o,toolBindingsOptions:e};(0,d.triggerEvent)(d.eventTarget,i.Events.TOOL_MODE_CHANGED,n)}}function T(t,o){return t.mouseButton===o.mouseButton&&(t.numTouchPoints===o.numTouchPoints&&t.modifierKey===o.modifierKey)}const w=function(t){if(n.wk.toolGroups.some((o=>o.id===t)))return void console.warn(`'${t}' already exists.`);const o=new m(t);return n.wk.toolGroups.push(o),o}},648:(t,o,e)=>{"use strict";e.d(o,{A:()=>r});var n=e(61738),i=e(59755);const r=function(){const t=[...n.wk.toolGroups];for(const o of t)(0,i.A)(o.id);n.wk.toolGroups=[]}},59755:(t,o,e)=>{"use strict";e.d(o,{A:()=>s});var n=e(61738),i=e(63421),r=e(49521);const s=function(t){const o=n.wk.toolGroups.findIndex((o=>o.id===t));o>-1&&(r.px.removeToolGroup(t),(0,i.removeSegmentationsFromToolGroup)(t),n.wk.toolGroups.splice(o,1))}},3193:(t,o,e)=>{"use strict";e.d(o,{A:()=>i});var n=e(61738);const i=function(){return n.wk.toolGroups}},29697:(t,o,e)=>{"use strict";e.d(o,{A:()=>i});var n=e(61738);const i=function(t){return n.wk.toolGroups.find((o=>o.id===t))}},64109:(t,o,e)=>{"use strict";e.d(o,{A:()=>s});var n=e(61738),i=e(84901);const r=[i.ToolModes.Active,i.ToolModes.Passive,i.ToolModes.Enabled];const s=function(t){return n.wk.toolGroups.filter((({toolOptions:o})=>{const e=Object.keys(o);for(let n=0;n<e.length;n++)if(t===e[n]&&o[t]&&r.includes(o[t].mode))return!0;return!1}))}},39244:(t,o,e)=>{"use strict";e.d(o,{A:()=>x});var n=e(92136),i=e(44753),r=e(24592),s=e(74119),a=e(73047),l=e(84797),d=e(21090),c=e(90252),u=e(23072),h=e(14695),g=e(1344),p=e(30911),f=e(90511),v=e(72702),m=e(11585),T=e(54177),w=e(2746),y=e(10910),C=e(56634),_=e(75403),b=e(97022),I=e(73801),E=e(83112),A=e(53891),S=e(76840),O=e(84901);const{pointCanProjectOnLine:M}=a.polyline,{EPSILON:P}=n.CONSTANTS,N=1-P;class D extends S.A{constructor(t={},o={supportedInteractionTypes:["Mouse","Touch"],configuration:{shadow:!0,preventHandleOutsideImage:!1,contourHoleAdditionModifierKey:O.KeyboardBindings.Shift,alwaysRenderOpenContourHandles:{enabled:!1,radius:2},allowOpenContours:!0,closeContourProximity:10,checkCanvasEditFallbackProximity:6,makeClockWise:!0,subPixelResolution:4,smoothing:{smoothOnAdd:!1,smoothOnEdit:!1,knotsRatioPercentageOnAdd:40,knotsRatioPercentageOnEdit:40},interpolation:{enabled:!1,onInterpolationComplete:null},decimate:{enabled:!1,epsilon:.1},calculateStats:!0,getTextLines:k,statsCalculator:E.BasicStatsCalculator}}){super(t,o),this.isDrawing=!1,this.isEditingClosed=!1,this.isEditingOpen=!1,this.addNewAnnotation=t=>{const o=t.detail,{element:e}=o,i=(0,n.getEnabledElement)(e),{renderingEngine:r}=i,s=this.createAnnotation(t);this.addAnnotation(s,e);const a=(0,c.getViewportIdsWithToolToRender)(e,this.getToolName());return this.activateDraw(t,s,a),t.preventDefault(),(0,u.A)(r,a),s},this.handleSelectedCallback=(t,o,e)=>{const n=t.detail,{element:i}=n,r=(0,c.getViewportIdsWithToolToRender)(i,this.getToolName());this.activateOpenContourEndEdit(t,o,r,e)},this.toolSelectedCallback=(t,o)=>{const e=t.detail,{element:n}=e,i=(0,c.getViewportIdsWithToolToRender)(n,this.getToolName());o.data.contour.closed?this.activateClosedContourEdit(t,o,i):this.activateOpenContourEdit(t,o,i),t.preventDefault()},this.isPointNearTool=(t,o,e,i)=>{const r=(0,n.getEnabledElement)(t),{viewport:s}=r,{polyline:a}=o.data.contour;let l=s.worldToCanvas(a[0]);for(let t=1;t<a.length;t++){const o=l,n=s.worldToCanvas(a[t]);if(M(e,o,n,i))return!0;l=n}if(!o.data.contour.closed)return!1;const d=s.worldToCanvas(a[0]),c=s.worldToCanvas(a[a.length-1]);return M(e,d,c,i)},this.cancel=t=>{const o=this.isDrawing,e=this.isEditingOpen,n=this.isEditingClosed;o?this.cancelDrawing(t):e?this.cancelOpenContourEdit(t):n&&this.cancelClosedContourEdit(t)},this._calculateCachedStats=(t,o,e,l)=>{const{data:d}=t,{cachedStats:c}=d,{polyline:u,closed:h}=d.contour,g=Object.keys(c);for(let l=0;l<g.length;l++){const p=g[l],f=this.getTargetIdImage(p,e);if(!f)continue;const{imageData:v,metadata:m}=f,T=u.map((t=>o.worldToCanvas(t))),w=T[0],y=o.canvasToWorld(w),E=o.canvasToWorld([w[0]+1,w[1]]),S=o.canvasToWorld([w[0],w[1]+1]),O=i.eR.distance(y,E),M=i.eR.distance(y,S),P=n.utilities.transformWorldToIndex(v,u[0]);P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),P[2]=Math.floor(P[2]);let N=P[0],D=P[0],k=P[1],x=P[1],B=P[2],G=P[2];for(let t=1;t<u.length;t++){const o=n.utilities.transformWorldToIndex(v,u[t]);o[0]=Math.floor(o[0]),o[1]=Math.floor(o[1]),o[2]=Math.floor(o[2]),N=Math.min(N,o[0]),D=Math.max(D,o[0]),k=Math.min(k,o[1]),x=Math.max(x,o[1]),B=Math.min(B,o[2]),G=Math.max(G,o[2])}const $=n.utilities.transformWorldToIndex(v,u[1]);$[0]=Math.floor($[0]),$[1]=Math.floor($[1]),$[2]=Math.floor($[2]);const{scale:R,areaUnits:V}=(0,r.Op)(f,(()=>{const t=d.contour.polyline,e=t.length,i=new Array(e);for(let n=0;n<e;n++)i[n]=o.worldToCanvas(t[n]);const{maxX:r,maxY:a,minX:l,minY:c}=s.math.polyline.getAABB(i),u=o.canvasToWorld([l,c]),h=n.utilities.transformWorldToIndex(v,u),g=o.canvasToWorld([r,a]);return[h,n.utilities.transformWorldToIndex(v,g)]}));let j=a.polyline.getArea(T)/R/R;j*=O*M;const W=.01*(D-N),U=.01*(x-k),F=.01*(G-B);N=Math.floor(N-W),D=Math.ceil(D+W),k=Math.floor(k-U),x=Math.ceil(x+U),B=Math.floor(B-F),G=Math.ceil(G+F);const L=[[N,D],[k,x],[B,G]],H=v.indexToWorld([D,x,G]),K=o.worldToCanvas(H);let Y=0,q=[],X=0;const Z=(0,_.A)(v,((t,e)=>{let n=!0;const i=o.worldToCanvas(t);return i[1]!=Y&&(X=0,Y=i[1],q=(0,C.getLineSegmentIntersectionsCoordinates)(T,i,[K[0],i[1]]),q.sort((function(t,o){return t[0]===o[0]?0:t[0]<o[0]?-1:1}))),q.length&&i[0]>q[0][0]&&(q.shift(),X++),X%2==0&&(n=!1),n}),this.configuration.statsCalculator.statsCallback,L),z={isPreScaled:(0,b.u)(o,p),isSuvScaled:this.isSuvScaled(o,p,t.metadata.referencedImageId)},J=(0,I.c)(m.Modality,t.metadata.referencedImageId,z),Q=this.configuration.statsCalculator.getStatistics();c[p]={Modality:m.Modality,area:j,perimeter:(0,A.A)(T,h),mean:Q.mean?.value,max:Q.max?.value,stdDev:Q.stdDev?.value,statsArray:Q.array,pointsInShape:Z,areaUnit:V,modalityUnit:J}}return(0,T.XF)(t,l.viewport.element,O.ChangeTypes.StatsUpdated),t.invalidated=!1,c},this._renderStats=(t,o,e,n)=>{const{data:i}=t,r=this.getTargetId(o),s={toolGroupId:this.toolGroupId,toolName:this.getToolName(),viewportId:e.viewport.id},a=this.getLinkedTextBoxStyle(s,t);if(!a.visibility)return;const l=this.configuration.getTextLines(i,r);if(!l||0===l.length)return;const d=i.contour.polyline.map((t=>o.worldToCanvas(t)));if(!i.handles.textBox.hasMoved){const t=(0,y.getTextBoxCoordsCanvas)(d);i.handles.textBox.worldPosition=o.canvasToWorld(t)}const c=o.worldToCanvas(i.handles.textBox.worldPosition),u=(0,w.drawLinkedTextBox)(n,t.annotationUID??"","1",l,c,d,{},a),{x:h,y:g,width:p,height:f}=u;i.handles.textBox.worldBoundingBox={topLeft:o.canvasToWorld([h,g]),topRight:o.canvasToWorld([h+p,g]),bottomLeft:o.canvasToWorld([h,g+f]),bottomRight:o.canvasToWorld([h+p,g+f])}},(0,h.A)(this),(0,g.A)(this),(0,p.A)(this),(0,f.A)(this),(0,v.A)(this),(0,m.A)(this),this._throttledCalculateCachedStats=(0,d.A)(this._calculateCachedStats,100,{trailing:!0})}filterInteractableAnnotationsForElement(t,o){if(!o||!o.length)return;const e=(0,n.getEnabledElement)(t),{viewport:i}=e;let r;if(i instanceof n.VolumeViewport){const t=i.getCamera(),{spacingInNormalDirection:e}=n.utilities.getTargetVolumeAndSpacingInNormalDir(i,t);r=this.filterAnnotationsWithinSlice(o,t,e)}else r=(0,l.filterAnnotationsForDisplay)(i,o);return r}filterAnnotationsWithinSlice(t,o,e){const{viewPlaneNormal:n}=o,r=t.filter((t=>{const o=t.metadata.viewPlaneNormal,e=Math.abs(i.eR.dot(n,o))>N;return o&&e}));if(!r.length)return[];const s=e/2,{focalPoint:a}=o,l=[];for(const t of r){const o=t.data.contour.polyline[0];if(!t.isVisible)continue;const e=i.eR.create();i.eR.sub(e,a,o);const r=i.eR.dot(e,n);Math.abs(r)<s&&l.push(t)}return l}isContourSegmentationTool(){return!1}createAnnotation(t){const o=t.detail.currentPoints.world,e=super.createAnnotation(t);return n.utilities.deepMerge(e,{data:{contour:{polyline:[[...o]]},label:"",cachedStats:{}},onInterpolationComplete:t=>{t.data.handles.points.length=0}})}getAnnotationStyle(t){return super.getAnnotationStyle(t)}renderAnnotationInstance(t){const{enabledElement:o,targetId:e,svgDrawingHelper:n}=t,i=t.annotation;let r=!1;const{viewport:s,renderingEngine:a}=o,l=this.isDrawing,d=this.isEditingOpen,c=this.isEditingClosed;if(l||d||c){const t=this.commonData.annotation.annotationUID;if(i.annotationUID===t)if(l)this.renderContourBeingDrawn(o,n,i);else if(c)this.renderClosedContourBeingEdited(o,n,i);else{if(!d)throw new Error(`Unknown ${this.getToolName()} annotation rendering state`);this.renderOpenContourBeingEdited(o,n,i)}else this.renderContour(o,n,i);r=!0}else this.renderContour(o,n,i);if(this.configuration.calculateStats)return this._calculateStatsIfActive(i,e,s,a,o),this._renderStats(i,s,o,n),r}_calculateStatsIfActive(t,o,e,n,i){const r=this.commonData?.annotation.annotationUID;if((t.annotationUID!==r||this.commonData?.movingTextBox)&&!this.commonData?.movingTextBox){const{data:r}=t;r.cachedStats[o]&&null!=r.cachedStats[o].areaUnit?t.invalidated&&this._throttledCalculateCachedStats(t,e,n,i):(r.cachedStats[o]={Modality:null,area:null,max:null,mean:null,stdDev:null,areaUnit:null},this._calculateCachedStats(t,e,n,i))}}}function k(t,o){const e=t.cachedStats[o],{area:n,mean:i,stdDev:r,perimeter:a,max:l,isEmptyArea:d,areaUnit:c,modalityUnit:u}=e||{},h=[];if(n){const t=d?"Area: Oblique not supported":`Area: ${(0,s.roundNumber)(n)} ${c}`;h.push(t)}return i&&h.push(`Mean: ${(0,s.roundNumber)(i)} ${u}`),l&&h.push(`Max: ${(0,s.roundNumber)(l)} ${u}`),r&&h.push(`Std Dev: ${(0,s.roundNumber)(r)} ${u}`),a&&h.push(`Perimeter: ${(0,s.roundNumber)(a)} ${u}`),h}D.toolName="PlanarFreehandROI";const x=D},31163:(t,o,e)=>{"use strict";e.d(o,{A:()=>m});var n=e(92136),i=e(83946),r=e(63421),s=e(23308),a=e(30322),l=e(52610),d=e(96214),c=e(57313),u=e(2884),h=e(94318),g=e(61738),p=e(20070);const f=p.A.toolName;class v extends d.oS{constructor(t={},o={configuration:{}}){super(t,o),this.renderSegmentation=t=>{const o=(0,l.getToolGroup)(t);if(!o)return;const e=(0,a.getSegmentationRepresentations)(t);if(!e||0===e.length)return;const r=o.viewportsInfo.map((({renderingEngineId:t,viewportId:o})=>{const e=(0,n.getEnabledElementByIds)(o,t);if(e)return e.viewport})),s=e.map((o=>{const e=this._getMergedRepresentationsConfig(t),n=[],s={[i.A.Labelmap]:h.Zy,[i.A.Contour]:u.T,[i.A.Surface]:c.u};o.type===i.A.Contour&&this.addPlanarFreeHandToolIfAbsent(t);const a=s[o.type];for(const t of r){const i=a.render(t,o,e);n.push(i)}return n}));Promise.allSettled(s).then((()=>{r.forEach((t=>{t.render()}))}))}}onSetToolEnabled(){const t=this.toolGroupId,o=(0,a.getSegmentationRepresentations)(t);o&&0!==o.length&&o.forEach((o=>{(0,s.setSegmentationVisibility)(t,o.segmentationRepresentationUID,!0)}))}onSetToolDisabled(){const t=this.toolGroupId,o=(0,a.getSegmentationRepresentations)(t);o&&0!==o.length&&o.forEach((o=>{(0,s.setSegmentationVisibility)(t,o.segmentationRepresentationUID,!1)}))}addPlanarFreeHandToolIfAbsent(t){f in g.wk.tools||(0,g.Gx)(p.A);const o=(0,l.getToolGroup)(t);o.hasTool(f)||(o.addTool(f),o.setToolPassive(f))}_getMergedRepresentationsConfig(t){const o=r.config.getToolGroupSpecificConfig(t),e=r.config.getGlobalConfig();return n.utilities.deepMerge(e,o)}}v.toolName="SegmentationDisplay";const m=v},51008:(t,o,e)=>{var n="__lodash_hash_undefined__",i=1/0,r="[object Function]",s="[object GeneratorFunction]",a="[object Symbol]",l=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/,c=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,h=/\\(\\)?/g,g=/^\[object .+?Constructor\]$/,p="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,f="object"==typeof self&&self&&self.Object===Object&&self,v=p||f||Function("return this")();var m,T=Array.prototype,w=Function.prototype,y=Object.prototype,C=v["__core-js_shared__"],_=(m=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",b=w.toString,I=y.hasOwnProperty,E=y.toString,A=RegExp("^"+b.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=v.Symbol,O=T.splice,M=j(v,"Map"),P=j(Object,"create"),N=S?S.prototype:void 0,D=N?N.toString:void 0;function k(t){var o=-1,e=t?t.length:0;for(this.clear();++o<e;){var n=t[o];this.set(n[0],n[1])}}function x(t){var o=-1,e=t?t.length:0;for(this.clear();++o<e;){var n=t[o];this.set(n[0],n[1])}}function B(t){var o=-1,e=t?t.length:0;for(this.clear();++o<e;){var n=t[o];this.set(n[0],n[1])}}function G(t,o){for(var e,n,i=t.length;i--;)if((e=t[i][0])===(n=o)||e!=e&&n!=n)return i;return-1}function $(t,o){var e;o=function(t,o){if(L(t))return!1;var e=typeof t;if("number"==e||"symbol"==e||"boolean"==e||null==t||K(t))return!0;return d.test(t)||!l.test(t)||null!=o&&t in Object(o)}(o,t)?[o]:L(e=o)?e:W(e);for(var n=0,i=o.length;null!=t&&n<i;)t=t[U(o[n++])];return n&&n==i?t:void 0}function R(t){if(!H(t)||(o=t,_&&_ in o))return!1;var o,e=function(t){var o=H(t)?E.call(t):"";return o==r||o==s}(t)||function(t){var o=!1;if(null!=t&&"function"!=typeof t.toString)try{o=!!(t+"")}catch(t){}return o}(t)?A:g;return e.test(function(t){if(null!=t){try{return b.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function V(t,o){var e,n,i=t.__data__;return("string"==(n=typeof(e=o))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?i["string"==typeof o?"string":"hash"]:i.map}function j(t,o){var e=function(t,o){return null==t?void 0:t[o]}(t,o);return R(e)?e:void 0}k.prototype.clear=function(){this.__data__=P?P(null):{}},k.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},k.prototype.get=function(t){var o=this.__data__;if(P){var e=o[t];return e===n?void 0:e}return I.call(o,t)?o[t]:void 0},k.prototype.has=function(t){var o=this.__data__;return P?void 0!==o[t]:I.call(o,t)},k.prototype.set=function(t,o){return this.__data__[t]=P&&void 0===o?n:o,this},x.prototype.clear=function(){this.__data__=[]},x.prototype.delete=function(t){var o=this.__data__,e=G(o,t);return!(e<0)&&(e==o.length-1?o.pop():O.call(o,e,1),!0)},x.prototype.get=function(t){var o=this.__data__,e=G(o,t);return e<0?void 0:o[e][1]},x.prototype.has=function(t){return G(this.__data__,t)>-1},x.prototype.set=function(t,o){var e=this.__data__,n=G(e,t);return n<0?e.push([t,o]):e[n][1]=o,this},B.prototype.clear=function(){this.__data__={hash:new k,map:new(M||x),string:new k}},B.prototype.delete=function(t){return V(this,t).delete(t)},B.prototype.get=function(t){return V(this,t).get(t)},B.prototype.has=function(t){return V(this,t).has(t)},B.prototype.set=function(t,o){return V(this,t).set(t,o),this};var W=F((function(t){var o;t=null==(o=t)?"":function(t){if("string"==typeof t)return t;if(K(t))return D?D.call(t):"";var o=t+"";return"0"==o&&1/t==-i?"-0":o}(o);var e=[];return c.test(t)&&e.push(""),t.replace(u,(function(t,o,n,i){e.push(n?i.replace(h,"$1"):o||t)})),e}));function U(t){if("string"==typeof t||K(t))return t;var o=t+"";return"0"==o&&1/t==-i?"-0":o}function F(t,o){if("function"!=typeof t||o&&"function"!=typeof o)throw new TypeError("Expected a function");var e=function(){var n=arguments,i=o?o.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=t.apply(this,n);return e.cache=r.set(i,s),s};return e.cache=new(F.Cache||B),e}F.Cache=B;var L=Array.isArray;function H(t){var o=typeof t;return!!t&&("object"==o||"function"==o)}function K(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&E.call(t)==a}t.exports=function(t,o,e){var n=null==t?void 0:$(t,o);return void 0===n?e:n}}}]);
//# sourceMappingURL=483.bundle.73474c6284d85a828a11.js.map