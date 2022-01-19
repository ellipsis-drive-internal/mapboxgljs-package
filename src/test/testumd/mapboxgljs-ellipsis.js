!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ellipsis-js-util")):"function"==typeof define&&define.amd?define(["ellipsis-js-util"],t):"object"==typeof exports?exports.mapboxgljsEllipsis=t(require("ellipsis-js-util")):e.mapboxgljsEllipsis=t(e["ellipsis-js-util"])}(self,(function(e){return(()=>{"use strict";var t={246:t=>{t.exports=e}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{i.r(r),i.d(r,{EllipsisVectorLayer:()=>s});const e=i(246);let t=e?e.VectorLayerUtil:window.EllipsisUtil.VectorLayerUtil;class o extends t.EllipsisVectorLayerBase{constructor(e={}){super(e),this.sourceId=`${this.id}_source`}getSource(){return this.source}getLayers(){return this.map&&this.map.getStyle()&&this.map.getStyle().layers?this.map.getStyle().layers.filter((e=>e.id.startsWith(this.id))):[]}addTo(e){return this.map=e,e.addSource(this.sourceId,{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:`${this.id}_fill`,type:"fill",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{},paint:{"fill-color":["get","fillColor",["get","compiledStyle"]],"fill-opacity":["get","fillOpacity",["get","compiledStyle"]]},filter:["any",["==","$type","Polygon"]]}),e.addLayer({id:`${this.id}_outline`,type:"line",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{},paint:{"line-color":["get","borderColor",["get","compiledStyle"]],"line-opacity":["get","borderOpacity",["get","compiledStyle"]],"line-width":["get","width",["get","compiledStyle"]]},filter:["any",["==","$type","Polygon"],["==","$type","LineString"]]}),this.options.useMarkers||e.addLayer({id:`${this.id}_points`,type:"circle",interactive:!!this.options.onFeatureClick,source:this.sourceId,layout:{"circle-sort-key":["get","sortIndex",["get","compiledStyle"]]},paint:{"circle-radius":["get","radius",["get","compiledStyle"]],"circle-color":["get","fillColor",["get","compiledStyle"]],"circle-opacity":["get","fillOpacity",["get","compiledStyle"]],"circle-stroke-color":["get","borderColor",["get","compiledStyle"]],"circle-stroke-opacity":["get","borderOpacity",["get","compiledStyle"]],"circle-stroke-width":["get","width",["get","compiledStyle"]]},filter:["any",["==","$type","Point"]]}),this.options.onFeatureClick&&(this.getLayers().forEach((t=>{e.on("click",t.id,(e=>this.options.onFeatureClick({geometry:e.features[0].geometry,properties:e.features[0].properties},t)))})),e.on("mouseenter",`${this.id}_fill`,(()=>e.getCanvas().style.cursor="pointer")),e.on("mouseleave",`${this.id}_fill`,(()=>e.getCanvas().style.cursor="default")),e.on("mouseenter",`${this.id}_points`,(()=>e.getCanvas().style.cursor="pointer")),e.on("mouseleave",`${this.id}_points`,(()=>e.getCanvas().style.cursor="default"))),this.source=e.getSource(this.sourceId),this.update(),this.options.loadAll||(e.on("zoom",(e=>{this.update()})),e.on("moveend",(e=>{this.update()}))),this}updateView=()=>{const e=this.getFeatures();if(e&&e.length){if(this.options.useMarkers){let t=e.flatMap((e=>"Point"===e.geometry.type?new mapboxgl.Marker({color:e.properties.compiledStyle.fillColor}).setLngLat(e.geometry.coordinates):"MultiPoint"===e.geometry.type?e.geometry.coordinates.map((t=>new mapboxgl.Marker({color:e.properties.compiledStyle.fillColor}).setLngLat(t))):[]));this.markers.forEach((e=>e.remove())),t.forEach((e=>{this.options.onFeatureClick&&e.getElement().addEventListener("click",this.options.onFeatureClick),e.addTo(this.map),this.markers.push(e)}))}this.getSource().setData({type:"FeatureCollection",features:e})}};getMapBounds=()=>{if(!this.map)return;const e=this.map.getBounds(),t=this.map.getZoom();return{bounds:{xMin:e.getWest(),xMax:e.getEast(),yMin:e.getSouth(),yMax:e.getNorth()},zoom:parseInt(t+1,10)}}}const s=o})(),r})()}));