webpackJsonp([52],{174:function(e,o,t){var n=t(0)(t(763),t(833),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/form/form1.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] form1.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},763:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{isLoading:!1,labelPosition:"left",labels:{left:"Label左对齐",right:"Label右对齐"},model:{name:"",password:""},validationRules:{required:["name","password"]}}}}},833:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}]},[t("div",{directives:[{name:"height",rawName:"v-height",value:50,expression:"50"}]},[t("SwitchList",{attrs:{datas:e.labels,small:!0},model:{value:e.labelPosition,callback:function(o){e.labelPosition=o},expression:"labelPosition"}})],1),e._v(" "),t("Form",{attrs:{"label-position":e.labelPosition,"label-width":90,rules:e.validationRules,model:e.model}},[t("FormItem",{attrs:{label:"用户名",prop:"name"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.name,expression:"model.name"}],attrs:{type:"text"},domProps:{value:e.model.name},on:{input:function(o){o.target.composing||(e.model.name=o.target.value)}}})]),e._v(" "),t("FormItem",{attrs:{label:"密码",prop:"password"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.password,expression:"model.password"}],attrs:{type:"password"},domProps:{value:e.model.password},on:{input:function(o){o.target.composing||(e.model.password=o.target.value)}}})]),e._v(" "),t("FormItem",[t("Button",{attrs:{color:"primary",loading:e.isLoading},on:{click:function(o){e.isLoading=!e.isLoading}}},[e._v("提交")]),e._v("   "),t("Button",{on:{click:function(o){e.isLoading=!e.isLoading}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});