webpackJsonp([91],{135:function(e,t,n){var r=n(0)(n(724),n(944),null,null);r.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/dataplugins/daterangepicker6.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] daterangepicker6.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},724:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(40),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{value:{},param:{shortcuts:[{title:"近三天",value:function(){return{start:(0,o.default)().add(-3,o.default.DAY),end:(0,o.default)()}}}]}}}}},944:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("value:"+e._s(e.value))]),e._v(" "),n("DateRangePicker",{attrs:{placeholder:"请选择日期",option:e.param},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});