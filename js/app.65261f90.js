(function(e){function t(t){for(var a,c,s=t[0],u=t[1],i=t[2],p=0,d=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o=[];function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"094f":function(e,t,r){},"4b18":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23");Object(a["m"])("data-v-67df9ba1");var n={class:"container py-16"},o={class:"grid grid-cols-2 sm:grid-cols-1 gap-8"},c=Object(a["g"])('<footer class="text-xs p-4 bg-gray-200 relative" data-v-67df9ba1><p class="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2" data-v-67df9ba1>Made with ❤️ by Ekal</p><div class="text-right text-gray-500" data-v-67df9ba1><a href="https://github.com/haikhalfakhreez" target="_blank" rel="noopener" class="hover:text-gray-800" data-v-67df9ba1>GitHub</a><a href="https://www.linkedin.com/in/haikhalfakhreez" target="_blank" rel="noopener" class="hover:text-gray-800 ml-2" data-v-67df9ba1>LinkedIn</a></div></footer>',1);function s(e,t,r,s,u,i){var l=Object(a["p"])("Create"),p=Object(a["p"])("Browse");return Object(a["k"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("main",n,[Object(a["f"])("div",o,[Object(a["h"])(l),Object(a["h"])(p)])]),c],64)}Object(a["l"])();r("b0c0"),r("a4d3"),r("e01a");var u=r("eef4"),i=r.n(u),l={class:"border border-gray-300 rounded p-4"},p=Object(a["f"])("h2",{class:"mb-6 text-xl font-semibold"},"Create Revenue Group",-1),d={class:"grid mb-4"},b=Object(a["f"])("label",{for:"group_name",class:"font-medium mb-2"},"Group Name",-1),f={class:"grid mb-4"},m=Object(a["f"])("label",{for:"group_description",class:"font-medium mb-2"},"Group Description",-1),O={class:"relative grid"},j={class:"wordcount text-gray-600"},h={class:"special-checkbox mb-4"},g=Object(a["f"])("label",{for:"group_special",class:"font-medium ml-2"},"Special group",-1),v={class:"mt-8"},x={class:"flex justify-between"},y=Object(a["f"])("h3",{class:"text-lg font-medium"},"Rules",-1),k=Object(a["f"])("img",{src:i.a,alt:"",height:"18",width:"18",class:"mr-1"},null,-1),w=Object(a["f"])("span",null,"Add",-1),R=[k,w],P={class:"text-right mt-6"};function D(e,t,r,n,o,c){var s=Object(a["p"])("CreateRule");return Object(a["k"])(),Object(a["e"])("section",null,[Object(a["f"])("div",l,[p,Object(a["f"])("form",null,[Object(a["f"])("div",d,[b,Object(a["v"])(Object(a["f"])("input",{type:"text",id:"group_name",placeholder:"Name",class:"border-2 border-gray-300 rounded py-1 px-2","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.name=e})},null,512),[[a["t"],c.name]])]),Object(a["f"])("div",f,[m,Object(a["f"])("div",O,[Object(a["v"])(Object(a["f"])("textarea",{type:"text",id:"group_description",rows:"5",placeholder:"Add description",maxlength:"200",class:"border-2 border-gray-300 rounded py-1 px-2","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.description=e})},null,512),[[a["t"],c.description]]),Object(a["f"])("div",j,Object(a["q"])(c.wordcount)+" / 200",1)])]),Object(a["f"])("div",h,[Object(a["v"])(Object(a["f"])("input",{type:"checkbox",id:"group_special","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.isSpecial=e})},null,512),[[a["r"],c.isSpecial]]),g]),Object(a["f"])("div",v,[Object(a["f"])("div",x,[y,Object(a["f"])("button",{class:"btn rounded-full bg-blue-100 text-blue-600 flex items-center",onClick:t[3]||(t[3]=Object(a["w"])((function(e){return c.addRule()}),["prevent"]))},R)]),Object(a["f"])("div",{class:Object(a["j"])(["grid grid-cols-1 gap-y-4",{"mt-4":0!==c.rules}])},[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(c.rules,(function(e,t){return Object(a["k"])(),Object(a["c"])(s,{key:t,"group-index":t},null,8,["group-index"])})),128))],2)]),Object(a["f"])("div",P,[Object(a["f"])("button",{class:"btn rounded border border-gray-300",onClick:t[4]||(t[4]=Object(a["w"])((function(e){return c.clearForm()}),["prevent"]))},"Reset"),Object(a["f"])("button",{class:"btn rounded bg-blue-600 text-white border border-blue-700 ml-3",onClick:t[5]||(t[5]=Object(a["w"])((function(e){return c.submitForm()}),["prevent"]))},"Submit")])])])])}var _=r("fe35"),G=r.n(_),I=r("92e4"),$=r.n(I),C={class:"border border-dashed border-gray-400 rounded p-2"},S={class:"flex items-center justify-between mb-2"},F={class:"flex items-start bg-gray-200 rounded p-2 overflow-auto sm:flex-col"},q=Object(a["f"])("p",{class:"p-1"},"If",-1),U=Object(a["f"])("option",{disabled:"",selected:"",value:""},"Select field",-1),V=["value"],B=Object(a["f"])("option",{disabled:"",selected:"",value:""},"Select operator",-1),N=["value"],M={class:"grid gap-y-2 flex-grow sm:gap-y-0"},z=["name","onUpdate:modelValue"],A=Object(a["f"])("img",{src:G.a,alt:"",height:"20",width:"20"},null,-1),E=[A],J=["onClick"],T=Object(a["f"])("img",{src:$.a,alt:"",height:"20",width:"20"},null,-1),H=[T],L={class:"flex items-center mt-2"},K=Object(a["f"])("p",null,"then revenue is",-1),Q={class:"border-2 border-gray-300 rounded ml-2"},W=Object(a["f"])("span",{class:"py-1 px-2"},"%",-1);function X(e,t,r,n,o,c){return Object(a["k"])(),Object(a["e"])("div",C,[Object(a["f"])("div",S,[Object(a["f"])("h4",null,"Rule "+Object(a["q"])(r.groupIndex+1),1),Object(a["f"])("button",{class:"text-xl",onClick:t[0]||(t[0]=Object(a["w"])((function(e){return c.removeRule()}),["prevent"]))},"×")]),Object(a["f"])("div",F,[q,Object(a["v"])(Object(a["f"])("select",{name:"field",class:"border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.field=e})},[U,(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(o.fieldOptions,(function(e,t){return Object(a["k"])(),Object(a["e"])("option",{key:t,value:e},Object(a["q"])(e),9,V)})),128))],512),[[a["s"],c.field]]),Object(a["v"])(Object(a["f"])("select",{name:"operator",class:"border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.operator=e})},[B,(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(o.operatorOptions,(function(e,t){return Object(a["k"])(),Object(a["e"])("option",{key:t,value:e},Object(a["q"])(e),9,N)})),128))],512),[[a["s"],c.operator]]),Object(a["f"])("div",M,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(c.params,(function(e,n){return Object(a["k"])(),Object(a["e"])("div",{key:n,class:"flex items-center justify-between"},[Object(a["v"])(Object(a["f"])("input",{type:"text",name:"parameter"+n+"forRule"+r.groupIndex,placeholder:"Enter parameter",class:"border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2",style:{"line-height":"1.43"},"onUpdate:modelValue":function(e){return c.params[n]=e}},null,8,z),[[a["t"],c.params[n]]]),0===n?(Object(a["k"])(),Object(a["e"])("button",{key:0,class:"flex-shrink-0 px-1",onClick:t[3]||(t[3]=Object(a["w"])((function(e){return c.addParam()}),["prevent"]))},E)):(Object(a["k"])(),Object(a["e"])("button",{key:1,class:"flex-shrink-0 px-1",onClick:Object(a["w"])((function(e){return c.removeParam(n)}),["prevent"])},H,8,J))])})),128))])]),Object(a["f"])("div",L,[K,Object(a["f"])("div",Q,[W,Object(a["v"])(Object(a["f"])("input",{type:"number",placeholder:"Enter amount",class:"py-1 px-2","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.revenue=e})},null,512),[[a["t"],c.revenue]])])])])}r("a9e3");var Y={name:"CreateRule",props:{groupIndex:Number},data:function(){return{fieldOptions:["aff_sub_1","aff_sub_2","aff_sub_3","aff_sub_4"],operatorOptions:["is","is not","starts with","ends with","contains","doesn't contains"],payload:{index:this.groupIndex,name:"",value:null}}},computed:{field:{get:function(){return this.$store.state.groupData.rules[this.groupIndex].field},set:function(e){this.payload.name="field",this.payload.value=e,this.$store.commit("updateRule",this.payload)}},operator:{get:function(){return this.$store.state.groupData.rules[this.groupIndex].operator},set:function(e){this.payload.name="operator",this.payload.value=e,this.$store.commit("updateRule",this.payload)}},params:{get:function(){return this.$store.state.groupData.rules[this.groupIndex].params},set:function(e){this.payload.name="params",this.payload.value=e,this.$store.commit("updateRuleParams",this.payload)}},revenue:{get:function(){return this.$store.state.groupData.rules[this.groupIndex].revenue},set:function(e){this.payload.name="revenue",this.payload.value=e,this.$store.commit("updateRule",this.payload)}}},methods:{removeRule:function(){this.$store.commit("removeRule",this.groupIndex)},addParam:function(){this.$store.commit("addParam",this.groupIndex)},removeParam:function(e){var t={groupIndex:this.groupIndex,paramIndex:e};this.$store.commit("removeParam",t)}}};Y.render=X;var Z=Y,ee={name:"Create",components:{CreateRule:Z},computed:{name:{get:function(){return this.$store.state.groupData.name},set:function(e){this.$store.commit("updateName",e)}},description:{get:function(){return this.$store.state.groupData.description},set:function(e){this.$store.commit("updateDescription",e)}},isSpecial:{get:function(){return this.$store.state.groupData.isSpecial},set:function(e){this.$store.commit("updateSpecial",e)}},rules:function(){return this.$store.state.groupData.rules},wordcount:function(){var e;return null!==(e=this.$store.getters.wordcount)&&void 0!==e?e:0}},methods:{addRule:function(){var e={field:"",operator:"",params:[""],revenue:""};this.$store.commit("addRule",e)},clearForm:function(){this.$store.commit("clearForm")},submitForm:function(){this.$store.dispatch("submitForm")}}};r("78e3");ee.render=D;var te=ee,re=Object(a["f"])("h2",{class:"mb-6 text-xl font-semibold sm:mt-4"},"Browse Revenue Groups",-1),ae={class:"grid grid-cols-1 gap-y-6"};function ne(e,t,r,n,o,c){var s=Object(a["p"])("BrowseGroup");return Object(a["k"])(),Object(a["e"])("section",null,[re,Object(a["f"])("div",ae,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(c.publishedGroups,(function(e,t){return Object(a["k"])(),Object(a["c"])(s,{key:t,"published-group-index":t},null,8,["published-group-index"])})),128))])])}var oe=r("c637"),ce=r.n(oe);Object(a["m"])("data-v-2e55301e");var se={class:"border border-gray-300 rounded"},ue={class:"p-4"},ie={class:"flex items-center justify-between"},le={class:"flex items-center"},pe={class:"font-semibold text-lg"},de={key:0,class:"py-1 px-3 font-semibold rounded-full bg-blue-600 text-white ml-3 text-xs"},be=Object(a["f"])("img",{src:ce.a,alt:"",height:"17",width:"17"},null,-1),fe=[be],me={class:"text-gray-600 mt-2 w-4/5"},Oe={class:"border-t border-gray-300 bg-gray-500 bg-opacity-30 mb-2"},je={class:"overflow-scroll table-wrapper"},he={class:"table-auto w-full mb-2"},ge={key:0,class:"whitespace-nowrap cell"},ve={class:"flex items-center"},xe={key:0,class:"ml-1",style:{"font-size":"10px"}},ye={class:"flex items-center"},ke=Object(a["f"])("span",{class:"ml-1",style:{"font-size":"10px"}},"↕",-1),we={key:0,class:"whitespace-nowrap cell"},Re=["onClick"],Pe=Object(a["f"])("img",{src:ce.a,alt:"",height:"15",width:"15"},null,-1),De=[Pe],_e={key:2,class:"whitespace-nowrap cell"},Ge={key:3,class:"whitespace-nowrap cell"};function Ie(e,t,r,n,o,c){return Object(a["k"])(),Object(a["e"])("div",se,[Object(a["f"])("div",ue,[Object(a["f"])("div",ie,[Object(a["f"])("div",le,[Object(a["f"])("h3",pe,Object(a["q"])(c.groupData.name),1),c.groupData.isSpecial?(Object(a["k"])(),Object(a["e"])("span",de,"Special Group")):Object(a["d"])("",!0)]),Object(a["f"])("button",{class:"rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center",onClick:t[0]||(t[0]=Object(a["w"])((function(e){return c.removePublishedGroup()}),["prevent"]))},fe)]),Object(a["f"])("p",me,Object(a["q"])(c.groupData.description),1)]),Object(a["f"])("div",Oe,[Object(a["f"])("div",je,[Object(a["f"])("table",he,[Object(a["f"])("thead",null,[Object(a["f"])("colgroup",null,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(c.totalColumn,(function(e,t){return Object(a["k"])(),Object(a["e"])("col",{span:"1",key:t})})),128))]),Object(a["f"])("tr",null,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(o.heads,(function(e,t){return Object(a["k"])(),Object(a["e"])(a["a"],{key:t},["params"!==t?(Object(a["k"])(),Object(a["e"])("th",ge,[Object(a["f"])("div",ve,[Object(a["f"])("span",null,Object(a["q"])(e),1),"action"!==t?(Object(a["k"])(),Object(a["e"])("span",xe,"↕")):Object(a["d"])("",!0)])])):(Object(a["k"])(!0),Object(a["e"])(a["a"],{key:1},Object(a["o"])(e,(function(e,t){return Object(a["k"])(),Object(a["e"])("th",{class:"whitespace-nowrap cell",key:t},[Object(a["f"])("div",ye,[Object(a["f"])("span",null,"Parameter "+Object(a["q"])(t+1),1),ke])])})),128))],64)})),128))])]),Object(a["f"])("tbody",null,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(c.groupRules,(function(e,t){return Object(a["k"])(),Object(a["e"])("tr",{key:t},[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["o"])(o.rows,(function(r,n){return Object(a["k"])(),Object(a["e"])(a["a"],{key:n},["action"===n?(Object(a["k"])(),Object(a["e"])("td",we,[Object(a["f"])("button",{onClick:Object(a["w"])((function(e){return c.removePublishedRule(t)}),["prevent"])},De,8,Re)])):"params"===n?(Object(a["k"])(!0),Object(a["e"])(a["a"],{key:1},Object(a["o"])(r,(function(t,r){return Object(a["k"])(),Object(a["e"])("td",{class:"whitespace-nowrap cell",key:r},Object(a["q"])(e.params[r]),1)})),128)):"revenue"===n?(Object(a["k"])(),Object(a["e"])("td",_e,Object(a["q"])(e[n])+"%",1)):(Object(a["k"])(),Object(a["e"])("td",Ge,Object(a["q"])(e[n]),1))],64)})),128))])})),128))])])])])])}Object(a["l"])();r("159b"),r("d81d");var $e={name:"BrowseGroup",props:{publishedGroupIndex:Number},data:function(){return{heads:{rule:"Rule",field:"Field",operator:"Operator",params:1,revenue:"Revenue",action:"Action"},rows:{rule:"",field:"",operator:"",params:1,revenue:"",action:""},maxParamCount:1}},computed:{groupData:function(){return this.$store.state.publishedGroups[this.publishedGroupIndex]},groupRules:function(){var e=this.groupData.rules,t={},r=[];return e.forEach((function(e,a){t={rule:a+1,field:e.field,operator:e.operator,params:e.params,revenue:e.revenue},r.push(t)})),r},totalColumn:function(){return 5+this.maxParamCount}},mounted:function(){var e=this;this.groupData.rules.map((function(t){t.params.length>e.maxParamCount&&(e.maxParamCount=t.params.length)})),this.setParameter(this.maxParamCount)},methods:{setParameter:function(e){this.heads.params=e,this.rows.params=e},removePublishedGroup:function(){this.$store.commit("removePublishedGroup",this.publishedGroupIndex)},removePublishedRule:function(e){var t={publishedGroupIndex:this.publishedGroupIndex,publishedRuleIndex:e};this.$store.commit("removePublishedRule",t)}}};r("b635");$e.render=Ie,$e.__scopeId="data-v-2e55301e";var Ce=$e,Se={name:"Browse",components:{BrowseGroup:Ce},computed:{publishedGroups:function(){return this.$store.state.publishedGroups},groupData:function(){return this.$store.state.groupData}}};Se.render=ne;var Fe=Se,qe={name:"App",components:{Create:te,Browse:Fe}};r("6a87"),r("b739");qe.render=s,qe.__scopeId="data-v-67df9ba1";var Ue=qe,Ve=r("1da1"),Be=(r("96cf"),r("a434"),r("5502")),Ne={state:function(){return{groupData:{name:"",description:"",isSpecial:!1,rules:[]},publishedGroups:[]}},getters:{wordcount:function(e){return e.groupData.description.length}},mutations:{updateName:function(e,t){e.groupData.name=t},updateDescription:function(e,t){e.groupData.description=t},updateSpecial:function(e,t){e.groupData.isSpecial=t},updateRule:function(e,t){e.groupData.rules[t.index][t.name]=t.value},updateRuleParams:function(e,t){e.groupData.rules[t.index].params=t.value},addRule:function(e,t){e.groupData.rules.push(t)},removeRule:function(e,t){e.groupData.rules.splice(t,1)},addParam:function(e,t){e.groupData.rules[t].params.push("")},removeParam:function(e,t){e.groupData.rules[t.groupIndex].params.splice(t.paramIndex,1)},clearForm:function(e){e.groupData={name:"",description:"",isSpecial:!1,rules:[]}},submitForm:function(e){e.publishedGroups.push(e.groupData)},removePublishedGroup:function(e,t){e.publishedGroups.splice(t,1)},removePublishedRule:function(e,t){e.publishedGroups[t.publishedGroupIndex].rules.splice(t.publishedRuleIndex,1)}},actions:{submitForm:function(e){return Object(Ve["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,r("submitForm");case 3:return t.next=5,r("clearForm");case 5:case"end":return t.stop()}}),t)})))()}}},Me=Object(Be["a"])(Ne),ze=(r("a766"),Object(a["b"])(Ue));ze.use(Me),ze.mount("#app")},"6a87":function(e,t,r){"use strict";r("b11f")},"78e3":function(e,t,r){"use strict";r("4b18")},"92e4":function(e,t,r){e.exports=r.p+"img/remove_circle_outline.ae56324b.svg"},a766:function(e,t,r){},a956:function(e,t,r){},b11f:function(e,t,r){},b635:function(e,t,r){"use strict";r("094f")},b739:function(e,t,r){"use strict";r("a956")},c637:function(e,t,r){e.exports=r.p+"img/trash.1cf58f8c.svg"},eef4:function(e,t,r){e.exports=r.p+"img/add.10aae433.svg"},fe35:function(e,t,r){e.exports=r.p+"img/add_circle_outline.632de916.svg"}});
//# sourceMappingURL=app.65261f90.js.map