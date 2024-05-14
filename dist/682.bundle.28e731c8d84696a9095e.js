"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[682],{82682:(o,e,t)=>{t.r(e),t.d(e,{default:()=>D,initToolGroups:()=>s,moreTools:()=>v,toolbarButtons:()=>m});var a=t(8633),l=t(92344);const n=JSON.parse('{"UU":"@ohif/mode-longitudinal"}').UU,i={"viewport-0":"rgb(200, 0, 0)","viewport-1":"rgb(200, 200, 0)","viewport-2":"rgb(0, 200, 0)"},r={axial:"rgb(200, 0, 0)",sagittal:"rgb(200, 200, 0)",coronal:"rgb(0, 200, 0)"};const s=function(o,e,t,a){!function(o,e,t,a,l){const n=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:i,Enums:r}=n.exports,s={active:[{toolName:i.WindowLevel,bindings:[{mouseButton:r.MouseBindings.Primary}]},{toolName:i.Pan,bindings:[{mouseButton:r.MouseBindings.Auxiliary}]},{toolName:i.Zoom,bindings:[{mouseButton:r.MouseBindings.Secondary}]},{toolName:i.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:i.Length},{toolName:i.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>{l?o(" "):t.runCommand("arrowTextCallback",{callback:o,eventDetails:e})},changeTextCallback:(o,e,a)=>{void 0===l&&t.runCommand("arrowTextCallback",{callback:a,data:o,eventDetails:e})}}},{toolName:i.Bidirectional},{toolName:i.DragProbe},{toolName:i.Probe},{toolName:i.EllipticalROI},{toolName:i.CircleROI},{toolName:i.RectangleROI},{toolName:i.StackScroll},{toolName:i.Angle},{toolName:i.CobbAngle},{toolName:i.Magnify},{toolName:i.SegmentationDisplay},{toolName:i.CalibrationLine},{toolName:i.UltrasoundDirectional},{toolName:i.PlanarFreehandROI},{toolName:i.SplineROI},{toolName:i.LivewireContour}],enabled:[{toolName:i.ImageOverlayViewer},{toolName:i.ReferenceLines}],disabled:[{toolName:i.AdvancedMagnify}]};e.createToolGroupAndAddTools(a,s)}(o,e,t,"default",a),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone-dicom-sr.utilityModule.tools");if(!t)return;const a=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:l}=t.exports,{toolNames:n,Enums:i}=a.exports,r={active:[{toolName:n.WindowLevel,bindings:[{mouseButton:i.MouseBindings.Primary}]},{toolName:n.Pan,bindings:[{mouseButton:i.MouseBindings.Auxiliary}]},{toolName:n.Zoom,bindings:[{mouseButton:i.MouseBindings.Secondary}]},{toolName:n.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:l.SRLength},{toolName:l.SRArrowAnnotate},{toolName:l.SRBidirectional},{toolName:l.SREllipticalROI},{toolName:l.SRCircleROI},{toolName:l.SRPlanarFreehandROI},{toolName:l.SRRectangleROI}],enabled:[{toolName:l.DICOMSRDisplay,bindings:[]}]};e.createToolGroupAndAddTools("SRToolGroup",r)}(o,e),function(o,e,t,a){const l=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),n=o._servicesManager,{cornerstoneViewportService:s}=n.services,{toolNames:c,Enums:d}=l.exports,m={active:[{toolName:c.WindowLevel,bindings:[{mouseButton:d.MouseBindings.Primary}]},{toolName:c.Pan,bindings:[{mouseButton:d.MouseBindings.Auxiliary}]},{toolName:c.Zoom,bindings:[{mouseButton:d.MouseBindings.Secondary}]},{toolName:c.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:c.Length},{toolName:c.ArrowAnnotate,configuration:{getTextCallback:(o,e)=>{a?o(""):t.runCommand("arrowTextCallback",{callback:o,eventDetails:e})},changeTextCallback:(o,e,l)=>{void 0===a&&t.runCommand("arrowTextCallback",{callback:l,data:o,eventDetails:e})}}},{toolName:c.Bidirectional},{toolName:c.DragProbe},{toolName:c.Probe},{toolName:c.EllipticalROI},{toolName:c.CircleROI},{toolName:c.RectangleROI},{toolName:c.StackScroll},{toolName:c.Angle},{toolName:c.CobbAngle},{toolName:c.PlanarFreehandROI},{toolName:c.SegmentationDisplay}],disabled:[{toolName:c.Crosshairs,configuration:{viewportIndicators:!1,disableOnPassive:!0,autoPan:{enabled:!1,panSize:10},getReferenceLineColor:o=>{const e=s.getViewportInfo(o),t=e?.viewportOptions;return t?i[t.id]||r[t.orientation]||"#0c0":(console.warn("missing viewport?",o),"#0c0")}}},{toolName:c.AdvancedMagnify},{toolName:c.ReferenceLines}]};e.createToolGroupAndAddTools("mpr",m)}(o,e,t,a),function(o,e){const t=o.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:a,Enums:l}=t.exports,n={active:[{toolName:a.TrackballRotateTool,bindings:[{mouseButton:l.MouseBindings.Primary}]},{toolName:a.Zoom,bindings:[{mouseButton:l.MouseBindings.Secondary}]},{toolName:a.Pan,bindings:[{mouseButton:l.MouseBindings.Auxiliary}]}]};e.createToolGroupAndAddTools("volume3d",n)}(o,e)},{createButton:c}=a.ToolbarService,d={commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["default","mpr","SRToolGroup","volume3d"]}},m=[{id:"MeasurementTools",uiType:"ohif.splitButton",props:{groupId:"MeasurementTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:c({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",tooltip:"More Measure Tools"},items:[c({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"Bidirectional",icon:"tool-bidirectional",label:"Bidirectional",tooltip:"Bidirectional Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"ArrowAnnotate",icon:"tool-annotate",label:"Annotation",tooltip:"Arrow Annotate",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"EllipticalROI",icon:"tool-ellipse",label:"Ellipse",tooltip:"Ellipse ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"RectangleROI",icon:"tool-rectangle",label:"Rectangle",tooltip:"Rectangle ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"CircleROI",icon:"tool-circle",label:"Circle",tooltip:"Circle Tool",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"PlanarFreehandROI",icon:"icon-tool-freehand-roi",label:"Freehand ROI",tooltip:"Freehand ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"SplineROI",icon:"icon-tool-spline-roi",label:"Spline ROI",tooltip:"Spline ROI",commands:d,evaluate:"evaluate.cornerstoneTool"}),c({id:"LivewireContour",icon:"icon-tool-livewire",label:"Livewire tool",tooltip:"Livewire tool",commands:d,evaluate:"evaluate.cornerstoneTool"})]}},{id:"Zoom",uiType:"ohif.radioGroup",props:{icon:"tool-zoom",label:"Zoom",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"WindowLevel",uiType:"ohif.radioGroup",props:{icon:"tool-window-level",label:"Window Level",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"Pan",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-move",label:"Pan",commands:d,evaluate:"evaluate.cornerstoneTool"}},{id:"TrackballRotate",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-3d-rotate",label:"3D Rotate",commands:d,evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select a 3D viewport to enable this tool"}}},{id:"Capture",uiType:"ohif.radioGroup",props:{icon:"tool-capture",label:"Capture",commands:"showDownloadViewportModal",evaluate:"evaluate.action"}},{id:"Layout",uiType:"ohif.layoutSelector",props:{rows:3,columns:4,evaluate:"evaluate.action"}},{id:"Crosshairs",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-crosshair",label:"Crosshairs",commands:{commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["mpr"]}},evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select an MPR viewport to enable this tool"}}}];var u=t(92136);const{createButton:p}=a.ToolbarService,g=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"}],v=[{id:"MoreTools",uiType:"ohif.splitButton",props:{groupId:"MoreTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:p({id:"Reset",icon:"tool-reset",tooltip:"Reset View",label:"Reset",commands:"resetViewport",evaluate:"evaluate.action"}),secondary:{icon:"chevron-down",label:"",tooltip:"More Tools"},items:[p({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:"resetViewport",evaluate:"evaluate.action"}),p({id:"rotate-right",icon:"tool-rotate-right",label:"Rotate Right",tooltip:"Rotate +90",commands:"rotateViewportCW",evaluate:"evaluate.action"}),p({id:"flipHorizontal",icon:"tool-flip-horizontal",label:"Flip Horizontal",tooltip:"Flip Horizontally",commands:"flipViewportHorizontal",evaluate:["evaluate.viewportProperties.toggle","evaluate.not3D"]}),p({id:"ImageSliceSync",icon:"link",label:"Image Slice Sync",tooltip:"Enable position synchronization on stack viewports",commands:{commandName:"toggleSynchronizer",commandOptions:{type:"imageSlice"}},listeners:{[u.EVENTS.STACK_VIEWPORT_NEW_STACK]:{commandName:"toggleImageSliceSync",commandOptions:{toggledState:!0}}},evaluate:["evaluate.cornerstone.synchronizer","evaluate.not3D"]}),p({id:"ReferenceLines",icon:"tool-referenceLines",label:"Reference Lines",tooltip:"Show Reference Lines",commands:"toggleEnabledDisabledToolbar",listeners:{[a.sI.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:g,[a.sI.EVENTS.VIEWPORTS_READY]:g},evaluate:"evaluate.cornerstoneTool.toggle"}),p({id:"ImageOverlayViewer",icon:"toggle-dicom-overlay",label:"Image Overlay",tooltip:"Toggle Image Overlay",commands:"toggleEnabledDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle"}),p({id:"StackScroll",icon:"tool-stack-scroll",label:"Stack Scroll",tooltip:"Stack Scroll",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"invert",icon:"tool-invert",label:"Invert",tooltip:"Invert Colors",commands:"invertViewport",evaluate:"evaluate.viewportProperties.toggle"}),p({id:"Probe",icon:"tool-probe",label:"Probe",tooltip:"Probe",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"Cine",icon:"tool-cine",label:"Cine",tooltip:"Cine",commands:"toggleCine",evaluate:["evaluate.cine","evaluate.not3D"]}),p({id:"Angle",icon:"tool-angle",label:"Angle",tooltip:"Angle",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"CobbAngle",icon:"tool-angle",label:"Cobb Angle",tooltip:"Cobb Angle",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"Magnify",icon:"tool-magnify",label:"Zoom-in",tooltip:"Zoom-in",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"CalibrationLine",icon:"tool-calibration",label:"Calibration",tooltip:"Calibration Line",commands:d,evaluate:"evaluate.cornerstoneTool"}),p({id:"TagBrowser",icon:"dicom-tag-browser",label:"Dicom Tag Browser",tooltip:"Dicom Tag Browser",commands:"openDICOMTagViewer"}),p({id:"AdvancedMagnify",icon:"icon-tool-loupe",label:"Magnify Probe",tooltip:"Magnify Probe",commands:"toggleActiveDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle.ifStrictlyDisabled"}),p({id:"UltrasoundDirectionalTool",icon:"icon-tool-ultrasound-bidirectional",label:"Ultrasound Directional",tooltip:"Ultrasound Directional",commands:d,evaluate:["evaluate.cornerstoneTool","evaluate.isUS"]})]}}],b=["SM","ECG","SR","SEG","RTSTRUCT"],T="@ohif/extension-default.layoutTemplateModule.viewerLayout",h="@ohif/extension-default.sopClassHandlerModule.stack",f="@ohif/extension-measurement-tracking.panelModule.trackedMeasurements",y="@ohif/extension-measurement-tracking.panelModule.seriesList",S="@ohif/extension-measurement-tracking.viewportModule.cornerstone-tracked",N="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr",M="@ohif/extension-cornerstone-dicom-sr.viewportModule.dicom-sr",w="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",R="@ohif/extension-dicom-video.viewportModule.dicom-video",C="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",x="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",I="@ohif/extension-cornerstone-dicom-seg.sopClassHandlerModule.dicom-seg",A="@ohif/extension-cornerstone-dicom-seg.viewportModule.dicom-seg",O="@ohif/extension-cornerstone-dicom-seg.panelModule.panelSegmentation",B="@ohif/extension-cornerstone-dicom-rt.viewportModule.dicom-rt",E="@ohif/extension-cornerstone-dicom-rt.sopClassHandlerModule.dicom-rt",k={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-measurement-tracking":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-cornerstone-dicom-seg":"^3.0.0","@ohif/extension-cornerstone-dicom-rt":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1"};const D={id:n,modeFactory:function({modeConfiguration:o}){let e=[];return{id:n,routeName:"viewer",displayName:l.A.t("Modes:Basic Viewer"),onModeEnter:function({servicesManager:o,extensionManager:e,commandsManager:t}){const{measurementService:a,toolbarService:l,toolGroupService:n,customizationService:i}=o.services;a.clearMeasurements(),s(e,n,t,this.labelConfig),l.addButtons([...m,...v]),l.createButtonSection("primary",["MeasurementTools","Zoom","Pan","TrackballRotate","WindowLevel","Capture","Layout","Crosshairs","MoreTools"]),i.addModeCustomizations([{id:"segmentation.panel",disableEditing:!0}])},onModeExit:({servicesManager:o})=>{const{toolGroupService:t,syncGroupService:a,segmentationService:l,cornerstoneViewportService:n,uiDialogService:i,uiModalService:r}=o.services;e.forEach((o=>o.unsubscribe())),e=[],i.dismissAll(),r.hide(),t.destroy(),a.destroy(),l.destroy(),n.destroy()},validationTags:{study:[],series:[]},isValidMode:function({modalities:o}){return{valid:!!o.split("\\").filter((o=>-1===b.indexOf(o))).length,description:"The mode does not support studies that ONLY include the following modalities: SM, ECG, SR, SEG, RTSTRUCT"}},routes:[{path:"longitudinal",layoutTemplate:()=>({id:T,props:{leftPanels:[y],rightPanels:[O,f],rightPanelClosed:!0,viewports:[{namespace:S,displaySetsToDisplay:[h]},{namespace:M,displaySetsToDisplay:[N]},{namespace:R,displaySetsToDisplay:[w]},{namespace:x,displaySetsToDisplay:[C]},{namespace:A,displaySetsToDisplay:[I]},{namespace:B,displaySetsToDisplay:[E]}]}})}],extensions:k,hangingProtocol:"default",sopClassHandlers:[w,I,h,C,N,E],hotkeys:[...a.ot.defaults.hotkeyBindings],...o}},extensionDependencies:k}}}]);
//# sourceMappingURL=682.bundle.28e731c8d84696a9095e.js.map