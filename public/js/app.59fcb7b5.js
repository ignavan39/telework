(function(t){function e(e){for(var r,c,l=e[0],i=e[1],s=e[2],f=0,p=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0fbf":function(t,e,a){"use strict";var r=a("c36f"),n=a.n(r);n.a},3112:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.teacherMap?a("div",[a("Status1",{attrs:{keys:t.teacherMap.keys(),values:t.teacherMap.values(),label:"Наиболее часто используемые платформы в Омской области и Самаре"}}),a("hr"),a("StatusSchool",{attrs:{schoolMap:t.schoolMap,teachers:t.teachers}})],1):t._e()])},o=[],c=(a("4ec9"),a("d3b7"),a("6062"),a("3ca3"),a("498a"),a("ddb0"),a("b85c")),l=(a("96cf"),a("1da1")),i=a("bc3a"),s=a.n(i),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.datacollection?a("div",{staticClass:"small"},[a("line-chart",{attrs:{chartData:t.datacollection,options:t.options}})],1):t._e()},f=[],p=(a("99af"),a("b680"),a("1fca")),h=p["b"].reactiveProp,d={extends:p["a"],mixins:[h],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},v={components:{LineChart:d},props:["keys","label","values"],data:function(){return{datacollection:null,color:["rgb(25, 152, 161)","rgb(190, 255, 115)","red","rgb(148, 42, 0)","rgb(0, 85, 196)","rgb(0, 190, 196)","rgb(255, 224, 139)","rgb(24, 67, 255)","rgb(21, 104, 0)","#fcac45","#f87979"],options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.fillData()},methods:{fillData:function(){var t,e=[],a=[],r=0,n=0,o=Object(c["a"])(this.keys);try{for(o.s();!(t=o.n()).done;){var l=t.value;e[n]=l,n++}}catch(h){o.e(h)}finally{o.f()}n=0;var i,s=Object(c["a"])(this.values);try{for(s.s();!(i=s.n()).done;){var u=i.value;r+=u,a[n]=u,n++}}catch(h){s.e(h)}finally{s.f()}for(var f=[],p=0;p<a.length;p++)f[p]={label:"".concat(p+1,":").concat(e[p],"(").concat((a[p]/r*100).toFixed(2),"%)"),backgroundColor:this.color[p],data:[a[p]]};this.datacollection={labels:["".concat(this.label," (").concat(r," человек)")],datasets:f},console.log(this.datacollection),console.log()}}},b=v,g=(a("93a5"),a("2877")),m=Object(g["a"])(b,u,f,!1,null,null,null),y=m.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Выберете школу")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?a:a[0]}}},t._l(t.schoolMap,(function(e,r){return a("option",{key:r,attrs:{"value:item":""}},[t._v(t._s(e))])})),0),t.teacherMap2?a("div",{staticClass:"small"},[a("line-chart",{attrs:{chartData:t.datacollection,options:t.options}})],1):t._e()])},O=[],_=(a("4de4"),a("a9e3"),{props:["schoolMap","teachers"],name:"StatusSchool",data:function(){return{filter:String,teacherMap2:null,size:Number,root:"",datacollection:null,color:["rgb(25, 152, 161)","rgb(190, 255, 115)","red","rgb(148, 42, 0)","rgb(0, 85, 196)","rgb(0, 190, 196)","rgb(255, 224, 139)","rgb(24, 67, 255)","rgb(21, 104, 0)","#fcac45","#f87979"],options:{responsive:!0,maintainAspectRatio:!1}}},components:{LineChart:d},watch:{filter:function(t){t!==this.root&&(console.log(this.filter),this.root=t,this.fillData(this.filter))}},methods:{fillData:function(t){this.root=t,this.teacherMap2=new Map;var e,a=Object(c["a"])(this.teachers);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(r.school===t)if(this.teacherMap2.has(r.platform)){var n=this.teacherMap2.get(r.platform);n++,this.teacherMap2.set(r.platform,n)}else this.teacherMap2.set(r.platform,1)}}catch(m){a.e(m)}finally{a.f()}var o,l=[],i=[],s=0,u=0,f=Object(c["a"])(this.teacherMap2.keys());try{for(f.s();!(o=f.n()).done;){var p=o.value;l[u]=p,u++}}catch(m){f.e(m)}finally{f.f()}u=0;var h,d=Object(c["a"])(this.teacherMap2.values());try{for(d.s();!(h=d.n()).done;){var v=h.value;s+=v,i[u]=v,u++}}catch(m){d.e(m)}finally{d.f()}for(var b=[],g=0;g<i.length;g++)b[g]={label:"".concat(g+1,":").concat(l[g],"(").concat((i[g]/s*100).toFixed(2),"%)"),backgroundColor:this.color[g],data:[i[g]]};this.datacollection={labels:["".concat(t," (").concat(s," человек)")],datasets:b}}}}),j=_,w=(a("0fbf"),Object(g["a"])(j,M,O,!1,null,"7c955d48",null)),x=w.exports,S={name:"App",components:{Status1:y,StatusSchool:x},data:function(){return{teachers:[],teacherMap:{},schoolMap:{},datacollection:null,color:["rgb(25, 152, 161)","rgb(190, 255, 115)","red","rgb(148, 42, 0)","rgb(0, 85, 196)","rgb(0, 190, 196)","rgb(255, 224, 139)","rgb(24, 67, 255)","rgb(21, 104, 0)","#fcac45","#f87979"],options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api").then((function(e){console.log(e.data),t.teachers=e.data,t.teacherMap=new Map,t.schoolMap=new Set;var a,r=Object(c["a"])(t.teachers);try{for(r.s();!(a=r.n()).done;){var n=a.value;if(t.schoolMap.add(n.school),t.teacherMap.has(n.platform.trim())){var o=t.teacherMap.get(n.platform.trim());o++,t.teacherMap.set(n.platform.trim(),o)}else t.teacherMap.set(n.platform.trim(),1)}}catch(l){r.e(l)}finally{r.f()}})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})))()}},k=S,P=(a("034f"),Object(g["a"])(k,n,o,!1,null,null,null)),C=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,a){},"93a5":function(t,e,a){"use strict";var r=a("3112"),n=a.n(r);n.a},c36f:function(t,e,a){}});
//# sourceMappingURL=app.59fcb7b5.js.map