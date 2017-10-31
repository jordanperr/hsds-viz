webpackJsonp([2],{112:function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(6),s=a(l),u=n(113),d=a(u),c=n(244),f=a(c),h=n(252),p=a(h);n(274);var m=n(276),v=i(m),y=n(37),g=i(y),w=function(){function t(){o(this,t),this.setStatus("Page load"),this.initUI(),this.initWTKClient()}return r(t,[{key:"initWTKClient",value:function(){var t=this;this.wtkClient=new d.default(function(){console.log(t.wtkClient.datasets),t.wtkClient.t=t.timeInput.t,t.wtkClient.altitude=t.altitudeInput.val(),t.reloadData()},function(e){429==e.status?v.showAPIModal(t):403==e.status?v.showAPIModal(t):v.showErrorModal()})}},{key:"initUI",value:function(){var t=this;this.vizmap=new p.default("mapid",function(e){t.reloadData()}),this.timeInput=new f.default("datepicker","timepicker",function(e){t.wtkClient.t=e,t.reloadData()}),this.altitudeInput=(0,s.default)("#altitidepicker"),this.altitudeInput.change(function(e){t.wtkClient.altitude=t.altitudeInput.val(),t.reloadData()}),v.initInfoModal(),v.initSettingsModal(this)}},{key:"setStatus",value:function(t){document.getElementById("status").innerHTML=t}},{key:"limit",value:function(t,e,n){return t>n?n:t<e?e:t}},{key:"setWTKBounds",value:function(){var t=this.wtkClient,e=this.vizmap.map,n=e.getBounds(),i=t.ijForCoord(n.getWest(),n.getSouth()),a=t.ijForCoord(n.getEast(),n.getSouth()),o=t.ijForCoord(n.getEast(),n.getNorth()),r=t.ijForCoord(n.getWest(),n.getNorth()),l=[Math.min(i[0],a[0]),Math.min(i[1],r[1])],s=[Math.max(r[0],o[0]),Math.max(a[1],o[1])];t.jstart=this.limit(l[1],0,g.jMax),t.jstop=this.limit(s[1],0,g.jMax),t.istart=this.limit(l[0],0,g.iMax),t.istop=this.limit(s[0],0,g.iMax);var u=e.getZoom()-g.MAPINIT.minZoom,d=Math.round(g.maxSkip/Math.pow(1.7,u));d=d>0?d:1,t.iskip=d,t.jskip=d}},{key:"reloadData",value:function(){var t=this;this.setWTKBounds(),this.setStatus("Downloading data...");var e=this.wtkClient.getHd5WindData(),n=this.wtkClient.getHd5LatLngData(),i=this.wtkClient.getHd5WindDirectionData();s.default.when(e,n,i).done(function(e,n,i){var a=e[0].value[0],o=i[0].value[0],r=n[0].value;t.setStatus("Painting the heatmap..."),t.vizmap.heatmapOverlay.params({data:a,ll:r}),t.vizmap.heatmapOverlay._redraw(),t.setStatus("Preprocessing vector field..."),t.vizmap.animatedVectorFieldOverlay.params({data:!0,windspeed:a,direction:o,ll:r}),t.vizmap.animatedVectorFieldOverlay._redraw(),t.setStatus("Showing every "+Math.pow(t.wtkClient.iskip,2)+" data points.")}).fail(function(a,o,r){e.abort(),n.abort(),i.abort(),429==a.status?v.showAPIModal(t):403==a.status?v.showAPIModal(t):v.showErrorModal()})}}]),t}();(0,s.default)(function(){new w})},113:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(6),l=i(r),s=n(52),u=i(s),d=n(37),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(d),f=n(97),h=i(f),p=function(){function t(e,n){a(this,t),u.default.defs("NREL:01",c.wrfProjection),this.url=c.hsdsURL,this.api_key=h.default.get("nrel.windviz.apikey"),this.api_key||(this.api_key=c.hsdsDemoKey),this.host=c.hsdsHostParam,this.datasets={},this.getDataSets(e,n)}return o(t,[{key:"getDataSets",value:function(t,e){var n=this;l.default.ajax({type:"GET",url:this.url+"/?host="+this.host+"&api_key="+this.api_key}).then(function(t){var e=!0,i=!1,a=void 0;try{for(var o,r=t.hrefs[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var s=o.value;"root"==s.rel&&(n.rootGroupURL=s.href+"&api_key="+n.api_key)}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}return l.default.ajax({type:"GET",url:n.rootGroupURL})}).then(function(t){var e=!0,i=!1,a=void 0;try{for(var o,r=t.hrefs[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var s=o.value;"links"==s.rel&&(n.rootLinksURL=s.href+"&api_key="+n.api_key)}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}return l.default.ajax({type:"GET",url:n.rootLinksURL+"&api_key="+n.api_key})}).done(function(e){var i=!0,a=!1,o=void 0;try{for(var r,l=e.links[Symbol.iterator]();!(i=(r=l.next()).done);i=!0){var s=r.value;n.datasets[s.title]=s}}catch(t){a=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw o}}t()}).fail(function(t){e(t)})}},{key:"getSlice",value:function(t,e){return l.default.ajax({type:"GET",url:this.selectUrlString(this.datasets[t].id,e)})}},{key:"selectStringTime",value:function(){return this.t+":"+(this.t+1)}},{key:"selectStringGeographic",value:function(){return this.istart+":"+this.istop+":"+this.iskip+","+this.jstart+":"+this.jstop+":"+this.jskip}},{key:"selectUrlString",value:function(t,e){var n="value?select="+e,i="&host="+this.host,a="&api_key="+this.api_key;return this.url+"/datasets/"+t+"/"+n+i+a}},{key:"getHd5WindData",value:function(){var t="["+this.selectStringTime()+","+this.selectStringGeographic()+"]";return this.getSlice("windspeed_"+this.altitude+"m",t)}},{key:"getHd5WindDirectionData",value:function(){var t="["+this.selectStringTime()+","+this.selectStringGeographic()+"]";return this.getSlice("winddirection_"+this.altitude+"m",t)}},{key:"getHd5LatLngData",value:function(){var t="["+this.selectStringGeographic()+"]";return this.getSlice("coordinates",t)}},{key:"ijForCoord",value:function(t,e){for(var n=[-2975465.0557618504,-1601248.319293951],i=(0,u.default)("NREL:01",[t,e]),a=[-1,-1],o=0;o<=1;o++)a[1-o]=Math.round((i[o]-n[o])/2e3);return a}}]),t}();e.default=p},244:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(6),l=i(r),s=n(98),u=i(s);n(104);var d=n(105),c=i(d),f=function(){function t(e,n,i){var o=this;a(this,t),this.datepicker=new u.default({field:document.getElementById(e),format:"D MMM YYYY",minDate:new Date(2007,0,1),maxDate:new Date(2013,12,31),value:"1 Jan 2007"}),this.timepicker=document.getElementById(n),(0,l.default)("#datepicker, #timepicker").change(function(t){o.update(),i(o.t)}),this.update()}return o(t,[{key:"update",value:function(){var t=this.datepicker.getDate();t.setHours(this.timepicker.value),this.t=(0,c.default)(t,"2007-01-01T00:00")}}]),t}();e.default=f},252:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),r=i(o),l=n(48),s=i(l);n(106),n(49),n(107);var u=n(257),d=i(u),c=n(258),f=i(c),h=n(37),p=function t(e,n){a(this,t),this.map=s.default.map("mapid"),this.map.setView(new s.default.LatLng(h.MAPINIT.lat,h.MAPINIT.lng),h.MAPINIT.zoom),this.map.addLayer(new s.default.TileLayer(h.MAPINIT.tileURL,{minZoom:h.MAPINIT.minZoom,maxZoom:h.MAPINIT.maxZoom,attribution:h.MAPINIT.tileAttrib})),this.heatmapOverlay=new d.default,this.heatmapOverlay.colorScale=h.colorScale,this.heatmapOverlay.params({data:[],ll:[]}).addTo(this.map),(0,r.default)(this.heatmapOverlay._canvas).addClass("heatmap-overlay"),this.animatedVectorFieldOverlay=new f.default,this.animatedVectorFieldOverlay.params({data:!1,ll:[]}).addTo(this.map),(0,r.default)(this.animatedVectorFieldOverlay._canvas).addClass("animated-vector-field-overlay"),this.map.on("moveend",n)};e.default=p},257:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":l(e))&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":l(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(49);var u=function(t){function e(){a(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._userDrawFunc=t.drawPatchHeatmap,t}return r(e,t),s(e,[{key:"drawPatchHeatmap",value:function(t,e){var n=e.canvas,a=e.options.ll,o=e.options.data,r=e.canvas.getContext("2d");r.clearRect(0,0,n.width,n.height);for(var l=0;l<o.length-1;l++)for(var s=0;s<o[l].length-1;s++){r.beginPath();var u=[a[l][s],a[l+1][s],a[l+1][s+1],a[l][s+1]];u=u.map(function(e){var n=t._map.latLngToContainerPoint(e);return[n.x,n.y]}),r.moveTo.apply(r,i(u[0])),u.forEach(function(t){r.lineTo.apply(r,i(t))}),r.closePath();var d=this.colorScale(o[l][s]);r.fillStyle=d,r.strokeStyle=d,r.fill(),r.stroke()}}}]),e}(L.CanvasOverlay);e.default=u},258:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":r(e))&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":r(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(49);var s=n(108),u=n(109),d=function(t){function e(){i(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._userDrawFunc=t.drawAnimatedVectorField,t}return o(e,t),l(e,[{key:"drawAnimatedVectorField",value:function(t,e){var n=16*Math.pow(2,12-t._map._zoom),i=e.canvas.getContext("2d"),a=e.canvas,o=e.options.windspeed,r=e.options.ll,l=e.options.direction;this.quadtree=(0,s.quadtree)();for(var d=0;d<r.length;d++)for(var c=0;c<r[d].length;c++)this.quadtree.add([r[d][c][0],r[d][c][1],o[d][c],l[d][c],d,c]);if(e.options.data){for(var f=[],h=0;h<o.length;h++)for(var p=0;p<o[h].length;p++)if(Math.random()<.1){var m=new L.LatLng(r[h][p][0],r[h][p][1]),v=[];v.push(m);for(var y=m,g=0;g<40;g++){var w=this.quadtree.find(y.lat,y.lng);y=L.GeometryUtil.destination(y,w[3],w[2]*n),v.push(t._map.latLngToContainerPoint(y))}f.push({points:v,age:Math.floor(40*Math.random())})}i.clearRect(0,0,a.width,a.height),i.restore(),i.save(),this.drawAnimatedVectorFieldClippingMask(t,i,r),i.fillStyle="rgba(255, 255, 255, 0.15)",i.lineWidth=.7,i.strokeStyle="#FFF",self.timer&&self.timer.stop(),self.timer=(0,u.interval)(function(){i.globalCompositeOperation="destination-out",i.fillRect(0,0,a.width,a.height),i.globalCompositeOperation="source-over";for(var t=0;t<f.length;t++){var e=f[t].age,n=f[t].points[e],o=f[t].points[e+1];i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(o.x,o.y),i.stroke(),f[t].age>=40&&(f[t].age=0),f[t].age=(e+1)%40}},33)}}},{key:"drawAnimatedVectorFieldClippingMask",value:function(t,e,n){e.beginPath();var i=0,a=0,o=t._map.latLngToContainerPoint(n[i][a]);for(e.moveTo(o.x,o.y);i<n.length;i++){var r=t._map.latLngToContainerPoint(n[i][a]);e.lineTo(r.x,r.y)}for(i-=1;a<n[0].length;a++){var l=t._map.latLngToContainerPoint(n[i][a]);e.lineTo(l.x,l.y)}for(a-=1;i>0;i--){var s=t._map.latLngToContainerPoint(n[i][a]);e.lineTo(s.x,s.y)}for(;a>0;a--){var u=t._map.latLngToContainerPoint(n[i][a]);e.lineTo(u.x,u.y)}e.closePath(),e.clip()}}]),e}(L.CanvasOverlay);e.default=d},274:function(t,e,n){var i=n(275);"string"==typeof i&&(i=[[t.i,i,""]]);var a={};a.transform=void 0;n(30)(i,a);i.locals&&(t.exports=i.locals)},275:function(t,e,n){e=t.exports=n(29)(void 0),e.push([t.i,"body {\n\tfont-family: sans-serif;\n}\n\n.hidden {\n\tdisplay:none;\n}\n\n\n/**** LEAFLET OVERLAY ****/\n\n#mapid { width:100%; height: 100%; z-index:5; float:left;}\n\n.heatmap-overlay{\n\topacity:0.6;\n}\n\n.vector-field-overlay{\n\topacity:.5;\n}\n\n.animated-vector-field-overlay{\n\topacity:.75;\n}\n\n\n/**** LEGEND OVERLAY ****/\n\n#legend {\n\tbackground: rgba(255, 255, 255, 0.8);;\n\tposition:fixed;\n\tleft:1em;\n\tbottom:5em;\n\theight:10em;\n\twidth:4em;\n\tz-index:5;\n\tborder: 1px solid #ddd;\n\tmargin-bottom:1px;\n}\n\n\n#gradient {\n    background: linear-gradient(#081d59, #7fcdbc, #ffffd9); /* Standard syntax */\n\t\tborder:1px solid #000;\n\t\twidth:1em;\n\t\theight:9em;\n\t\ttop:0px;\n\t\tleft:50%;\n\t\tmargin-left:-1.5em;\n\t\tmargin-top:0.5em;\n\t\tposition:absolute;\n\t\tdisplay:block;\n}\n\n#gradient .tic {\n\tpadding-bottom:6.3em;\n\tmargin-left:2em;\n\tfont-size:0.5em;\n}\n\n/**** TOOLS OVERLAY ****/\n\n#tools {\n\tbackground: rgba(255, 255, 255, 0.8);\n\tposition:fixed;\n\tleft:1em;\n\tbottom:1em;\n\theight:4em;\n\twidth:auto;\n\tmin-width:57em;\n\tz-index:5;\n\tborder: 1px solid #ddd;\n}\n\n#tools div {\n\tdisplay:block;\n\tfloat:left;\n\theight:4em;\n\tpadding-left:1em;\n\tpadding-right:1em;\n\tline-height:4em;\n}\n\n#info_img{\n\tpadding-top:1em;\n\twidth:2em;\n\theight:2em;\n\tcursor: pointer;\n}\n\n#timeslider {\n\tposition:relative;\n\tbottom:2px;\n}\n\nimg .info{\n\twidth:100px;\n}\n\n.border {\n\tborder-left: 1px solid #ddd;\n}\n\n#status_wrap div {\n\tfloat:left;\n\tpadding:0px;\n\tmargin:0px;\n}\n\n#status {\n\tmin-width:20em;\n}\n\n/*** datepicker ****/\n#datepicker{\n\twidth:7em;\n}\n\n/**** Info Modal CSS ****/\n.infotext {\n\tfont-size: 0.9em;\n\tfloat:left;\n\tpadding-left:1em;\n\twidth:430px;\n\tdisplay:block;\n\ttext-align: justify;\n\ttext-justify: inter-word;\n\tline-height:1.4em;\n}\n\n.infomodal {\n\tfloat:left;\n\tdisplay:block;\n}\n\n\n/***** API Modal CSS *****/\n\n.api-input-text {\n\tfont-size:1em;\n\twidth:300px;\n\tvertical-align: bottom;\n}\n\n.api-input-button {\n\tfont-size:1em;\n}\n",""])},276:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(){(0,u.default)("#info_img").click(function(t){new c.default("Modal",{width:800,height:450,title:(0,u.default)("#info_modal_title").html(),content:(0,u.default)("#info_modal").html(),closeButton:!0}).open()})}function o(){new c.default("Modal",{width:300,height:100,title:(0,u.default)("#error_modal_title").html(),content:(0,u.default)("#error_modal").html(),closeButton:!0}).open()}function r(t){var e=new c.default("Modal",{width:600,height:200,title:(0,u.default)("#api_modal_title").html(),content:(0,u.default)("#api_modal").html(),closeButton:!0});e.open();var n=(0,u.default)(e.content).find("input");n.val(t.wtkClient.api_key),(0,u.default)(e.content).find("button").click(function(){var i=n.val();h.default.set("nrel.windviz.apikey",i,{expires:1825}),e.close(),t.initWTKClient()})}function l(t){(0,u.default)("#settings_img").click(function(e){var n=new c.default("Modal",{width:500,height:200,title:(0,u.default)("#settings_modal_title").html(),content:(0,u.default)("#settings_modal").html(),closeButton:!0});n.open();var i=(0,u.default)(n.content).find("input");i.val(t.wtkClient.api_key),(0,u.default)(n.content).find("button").click(function(){var e=i.val();h.default.set("nrel.windviz.apikey",e,{expires:1825}),n.close(),t.initWTKClient()})})}Object.defineProperty(e,"__esModule",{value:!0}),e.initInfoModal=a,e.showErrorModal=o,e.showAPIModal=r,e.initSettingsModal=l;var s=n(6),u=i(s),d=n(110),c=i(d);n(111);var f=n(97),h=i(f)},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hsdsDemoKey=e.hsdsHostParam=e.hsdsURL=e.wrfProjection=e.colorScale=e.MAPINIT=e.iMax=e.jMax=e.maxSkip=void 0;var i=n(64);e.maxSkip=30,e.jMax=2975,e.iMax=1601,e.MAPINIT={lat:37.0902,lng:-95.7129,zoom:6,minZoom:4,maxZoom:10,tileURL:"http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",tileAttrib:'Map data &#169; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'},e.colorScale=(0,i.scaleLinear)().domain([0,5,10]).range(["#ffffd9","#7fcdbc","#081d59"]),e.wrfProjection="+proj=lcc +lat_1=30 +lat_2=60 +lat_0=38.47240422490422 +lon_0=-96.0 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs",e.hsdsURL="https://developer.nrel.gov/api/hsds/",e.hsdsHostParam="/nrel/wtk-us.h5",e.hsdsDemoKey="3K3JQbjZmWctY0xmIfSYvYgtIcM3CN0cb1Y2w9bf"},49:function(t,e,n){"use strict";L.CanvasOverlay=L.Layer.extend({initialize:function(t,e){this._userDrawFunc=t,L.setOptions(this,e)},drawing:function(t){return this._userDrawFunc=t,this},params:function(t){return L.setOptions(this,t),this},canvas:function(){return this._canvas},redraw:function(){return this._frame||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},onAdd:function(t){this._map=t,this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer");var e=this._map.getSize();this._canvas.width=e.x,this._canvas.height=e.y;var n=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(this._canvas,"leaflet-zoom-"+(n?"animated":"hide")),t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.on("resize",this._resize,this),t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._canvas),t.off("moveend",this._reset,this),t.off("resize",this._resize,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},_resize:function(t){this._canvas.width=t.newSize.x,this._canvas.height=t.newSize.y},_reset:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t),this._redraw()},_redraw:function(){var t=this._map.getSize(),e=this._map.getBounds(),n=180*t.x/(20037508.34*(e.getEast()-e.getWest())),i=this._map.getZoom();this._userDrawFunc&&this._userDrawFunc(this,{canvas:this._canvas,bounds:e,size:t,zoomScale:n,zoom:i,options:this.options}),this._frame=null},_animateZoom:function(t){var e=this._map.getBounds(),n=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(e,t.zoom,t.center).min;L.DomUtil.setTransform(this._canvas,i,n)}}),L.canvasOverlay=function(t,e){return new L.CanvasOverlay(t,e)}},97:function(t,e,n){var i,a;!function(o){var r=!1;if(i=o,void 0!==(a="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=a),r=!0,t.exports=o(),r=!0,!r){var l=window.Cookies,s=window.Cookies=o();s.noConflict=function(){return window.Cookies=l,s}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}function e(n){function i(e,a,o){var r;if("undefined"!=typeof document){if(arguments.length>1){if(o=t({path:"/"},i.defaults,o),"number"==typeof o.expires){var l=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*o.expires),o.expires=l}o.expires=o.expires?o.expires.toUTCString():"";try{r=JSON.stringify(a),/^[\{\[]/.test(r)&&(a=r)}catch(t){}a=n.write?n.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[\(\)]/g,escape);var s="";for(var u in o)o[u]&&(s+="; "+u,!0!==o[u]&&(s+="="+o[u]));return document.cookie=e+"="+a+s}e||(r={});for(var d=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,f=0;f<d.length;f++){var h=d[f].split("="),p=h.slice(1).join("=");'"'===p.charAt(0)&&(p=p.slice(1,-1));try{var m=h[0].replace(c,decodeURIComponent);if(p=n.read?n.read(p,m):n(p,m)||p.replace(c,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(t){}if(e===m){r=p;break}e||(r[m]=p)}catch(t){}}return r}}return i.set=i,i.get=function(t){return i.call(i,t)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,n){i(e,"",t(n,{expires:-1}))},i.withConverter=e,i}return e(function(){})})}},[112]);