(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-70aa"],{"08yZ":function(t,e,a){"use strict";a.r(e);var s=a("oj9+"),i=a("JM6l"),n=a.n(i),o=a("oU2a"),l={name:"customer-record-statistics",data:function(){return{loading:!1,axisOption:null,axisChart:null,list:[],postParams:{},axisList:[],fieldList:[{field:"realname",name:"员工姓名"},{field:"recordCount",name:"跟进次数"},{field:"customerCount",name:"跟进客户数"}]}},mixins:[s.a],computed:{},mounted:function(){this.initAxis()},methods:{searchClick:function(t){this.postParams=t,this.getDataList(),this.getRecordList()},getDataList:function(){var t=this;this.loading=!0,Object(o.i)(this.postParams).then(function(e){t.loading=!1,t.axisList=e.data||[];for(var a=[],s=[],i=[],n=0;n<e.data.length;n++){var o=e.data[n];a.push(o.customerCount),s.push(o.recordCount),i.push(o.type)}t.axisOption.xAxis[0].data=i,t.axisOption.series[0].data=a,t.axisOption.series[1].data=s,t.axisChart.setOption(t.axisOption,!0)}).catch(function(){t.loading=!1})},getRecordList:function(t){var e=this;this.list=[];var a={};if(void 0!==t){var s=this.axisList[t];a.userId=this.postParams.userId,a.deptId=this.postParams.deptId,a.startTime=s.startTime,a.endTime=s.endTime}else a=this.postParams;this.loading=!0,Object(o.g)(a).then(function(t){e.loading=!1,e.list=t.data}).catch(function(){e.loading=!1})},initAxis:function(){var t=this,e=n.a.init(document.getElementById("axismain")),a={color:["#6ca2ff","#ff7474"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["跟进客户数","跟进次数"],bottom:"0px",itemWidth:14},grid:{top:"40px",left:"30px",right:"30px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"跟进客户数",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}个"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}},{type:"value",name:"跟进次数",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}次"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{name:"跟进客户数",type:"bar",yAxisIndex:0,barWidth:15,data:[]},{name:"跟进次数",type:"bar",yAxisIndex:1,barWidth:15,data:[]}]};e.setOption(a,!0),e.on("click",function(e){t.getRecordList(e.dataIndex)}),this.axisOption=a,this.axisChart=e}}},r=(a("Kfq3"),a("ZrdR")),u=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{moduleType:"customer"},on:{load:function(e){t.loading=!0},change:t.searchClick}}),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},t._l(t.fieldList,function(t,e){return a("el-table-column",{key:e,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:t.field,label:t.name}})}))],1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"axis-content"},[e("div",{attrs:{id:"axismain"}})])}],!1,null,"5db9f1f5",null);u.options.__file="CustomerRecordStatistics.vue";e.default=u.exports},"9rAH":function(t,e,a){"use strict";var s=a("UcDe");a.n(s).a},EwT0:function(t,e,a){},Kfq3:function(t,e,a){"use strict";var s=a("EwT0");a.n(s).a},SW5X:function(t,e,a){"use strict";var s=a("eQh7");a.n(s).a},UcDe:function(t,e,a){},eQh7:function(t,e,a){},"gXW+":function(t,e,a){"use strict";var s=a("KTTK"),i=a("UcQx"),n=a("conU"),o=a("uKQN"),l=a("a/LZ"),r=a.n(l),u={name:"filtrate-handle-view",components:{timeTypeSelect:o.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=r()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){t.showBusinessSelect?t.getBusinessStatusList(function(){t.postFiltrateValue()}):t.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},getDeptList:function(t){var e=this;Object(s.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){e.deptList=a.data,a.data.length>0?(e.structuresSelectValue=a.data[0].id,e.showUserSelect&&e.getUserList()):e.structuresSelectValue="",t(!0)}).catch(function(){e.$emit("error")})},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.deptId=this.structuresSelectValue,Object(s.i)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(i.o)().then(function(a){e.businessOptions=a.data,a.data.length>0&&(e.businessStatusValue=a.data[0].typeId),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(n.q)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={deptId:this.structuresSelectValue};this.showUserSelect&&(t.userId=this.userSelectValue),this.showBusinessSelect&&(t.typeId=this.businessStatusValue),this.showProductSelect&&(t.categoryId=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.startTime=this.timeTypeValue.startTime,t.endTime=this.timeTypeValue.endTime):t.type=this.timeTypeValue.value,this.$emit("change",t)}},beforeDestroy:function(){}},c=(a("9rAH"),a("ZrdR")),d=Object(c.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filtrate-content"},[t.showYearSelect?t._e():a("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?a("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":t.pickerOptions,placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})):t._e(),t._v(" "),t.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return a("el-option",{key:t.typeId,attrs:{label:t.name,value:t.typeId}})})):t._e(),t._v(" "),t.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"categoryId"}},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")])],1)},[],!1,null,"2880a69d",null);d.options.__file="filtrateHandleView.vue";e.a=d.exports},oU2a:function(t,e,a){"use strict";a.d(e,"j",function(){return i}),a.d(e,"k",function(){return n}),a.d(e,"i",function(){return o}),a.d(e,"g",function(){return l}),a.d(e,"h",function(){return r}),a.d(e,"c",function(){return u}),a.d(e,"b",function(){return c}),a.d(e,"d",function(){return d}),a.d(e,"e",function(){return p}),a.d(e,"l",function(){return h}),a.d(e,"m",function(){return m}),a.d(e,"a",function(){return f}),a.d(e,"f",function(){return y});var s=a("t3Un");function i(t){return Object(s.a)({url:"biCustomer/totalCustomerStats",method:"post",data:t})}function n(t){return Object(s.a)({url:"biCustomer/totalCustomerTable",method:"post",data:t})}function o(t){return Object(s.a)({url:"biCustomer/customerRecordStats",method:"post",data:t})}function l(t){return Object(s.a)({url:"biCustomer/customerRecordInfo",method:"post",data:t})}function r(t){return Object(s.a)({url:"biCustomer/customerRecodCategoryStats",method:"post",data:t})}function u(t){return Object(s.a)({url:"biCustomer/customerConversionInfo",method:"post",data:t})}function c(t){return Object(s.a)({url:"biCustomer/customerConversionStats",method:"post",data:t})}function d(t){return Object(s.a)({url:"biCustomer/poolStats",method:"post",data:t})}function p(t){return Object(s.a)({url:"biCustomer/poolTable",method:"post",data:t})}function h(t){return Object(s.a)({url:"biCustomer/employeeCycle",method:"post",data:t})}function m(t){return Object(s.a)({url:"biCustomer/employeeCycleInfo",method:"post",data:t})}function f(t){return Object(s.a)({url:"biCustomer/districtCycle",method:"post",data:t})}function y(t){return Object(s.a)({url:"biCustomer/productCycle",method:"post",data:t})}},"oj9+":function(t,e,a){"use strict";var s=a("gXW+");e.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:s.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},uKQN:function(t,e,a){"use strict";var s={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},i=(a("SW5X"),a("ZrdR")),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[t._l(t.typeOptions,function(e,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(a){t.typeSelectClick(e)}}},[a("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),a("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),a("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+t.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"8d513086",null);n.options.__file="index.vue";e.a=n.exports}}]);