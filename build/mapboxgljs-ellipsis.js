!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ellipsis-js-util")):"function"==typeof define&&define.amd?define(["ellipsis-js-util"],t):"object"==typeof exports?exports.MapboxgljsEllipsis=t(require("ellipsis-js-util")):e.MapboxgljsEllipsis=t(e["ellipsis-js-util"])}(self,(e=>(()=>{"use strict";var t={246:t=>{t.exports=e}},i={};function o(e){var s=i[e];if(void 0!==s)return s.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{o.r(s),o.d(s,{AsyncEllipsisRasterLayer:()=>c,EllipsisApi:()=>d,EllipsisRasterLayer:()=>p,EllipsisVectorLayer:()=>l,default:()=>u});const e=o(246),t=t=>e?e[t]:window.EllipsisUtil[t],i=t("VectorLayerUtil");class r extends i.EllipsisVectorLayerBase{constructor(e={}){super(e),this.sourceId=`${this.id}_source`}getSource(){return this.source}getLayers(){return this.map&&this.map.getStyle()&&this.map.getStyle().layers?this.map.getStyle().layers.filter((e=>e.id.startsWith(this.id))):[]}addTo(e){return this.map=e,e.addSource(this.sourceId,{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:`${this.id}_fill`,type:"fill",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{},paint:{"fill-color":["get","fillColor",["get","compiledStyle"]],"fill-opacity":["get","fillOpacity",["get","compiledStyle"]]},filter:["any",["==","$type","Polygon"]]}),e.addLayer({id:`${this.id}_outline`,type:"line",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{},paint:{"line-color":["get","borderColor",["get","compiledStyle"]],"line-opacity":["get","borderOpacity",["get","compiledStyle"]],"line-width":["get","width",["get","compiledStyle"]]},filter:["any",["==","$type","Polygon"],["==","$type","LineString"]]}),this.options.useMarkers||e.addLayer({id:`${this.id}_points`,type:"circle",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{"circle-sort-key":["get","sortIndex",["get","compiledStyle"]]},paint:{"circle-radius":["get","radius",["get","compiledStyle"]],"circle-color":["get","fillColor",["get","compiledStyle"]],"circle-opacity":["get","fillOpacity",["get","compiledStyle"]],"circle-stroke-color":["get","borderColor",["get","compiledStyle"]],"circle-stroke-opacity":["get","borderOpacity",["get","compiledStyle"]],"circle-stroke-width":["get","width",["get","compiledStyle"]]},filter:["any",["==","$type","Point"]]}),this.options.onFeatureClick&&(this.getLayers().forEach((t=>{e.on("click",t.id,(e=>this.options.onFeatureClick({geometry:e.features[0].geometry,properties:e.features[0].properties},t)))})),e.on("mouseenter",`${this.id}_fill`,(()=>e.getCanvas().style.cursor="pointer")),e.on("mouseleave",`${this.id}_fill`,(()=>e.getCanvas().style.cursor="default")),e.on("mouseenter",`${this.id}_points`,(()=>e.getCanvas().style.cursor="pointer")),e.on("mouseleave",`${this.id}_points`,(()=>e.getCanvas().style.cursor="default"))),this.source=e.getSource(this.sourceId),this.update(),this.options.loadAll||(e.on("zoom",(e=>{this.update()})),e.on("moveend",(e=>{this.update()}))),this}updateView=()=>{const e=this.getFeatures();if(e&&e.length){if(this.options.useMarkers){let t=e.flatMap((e=>"Point"===e.geometry.type?new mapboxgl.Marker({color:e.properties.compiledStyle.fillColor}).setLngLat(e.geometry.coordinates):"MultiPoint"===e.geometry.type?e.geometry.coordinates.map((t=>new mapboxgl.Marker({color:e.properties.compiledStyle.fillColor}).setLngLat(t))):[]));this.markers.forEach((e=>e.remove())),t.forEach((e=>{this.options.onFeatureClick&&e.getElement().addEventListener("click",this.options.onFeatureClick),e.addTo(this.map),this.markers.push(e)}))}this.getSource().setData({type:"FeatureCollection",features:e})}};getMapBounds=()=>{if(!this.map)return;const e=this.map.getBounds(),t=this.map.getZoom();return{bounds:{xMin:e.getWest(),xMax:e.getEast(),yMin:e.getSouth(),yMax:e.getNorth()},zoom:parseInt(t+1,10)}}}const l=r,a=t("RasterLayerUtil"),p=class{constructor(e){e.url?this.url=e.url:this.url=a.getSlippyMapUrl(e),e.id?this.id=e.id:this.id=a.getLayerId(e),this.options=e,console.log(this)}addTo(e){return this.source=`${this.id}_source`,e.addSource(this.source,{type:"raster",tiles:[this.url],tileSize:256}),e.addLayer({id:this.id,type:"raster",source:`${this.id}_source`,maxZoom:this.options.zoom}),this}},n=t("RasterLayerUtil"),c=async e=>{let t=await n.getSlippyMapUrlWithDefaults(e);return new p(t)},d=t("EllipsisApi"),u={RasterLayer:e=>new p(e),VectorLayer:e=>new l(e),AsyncEllipsisRasterLayer:async e=>await c(e),EllipsisApi:d}})(),s})()));