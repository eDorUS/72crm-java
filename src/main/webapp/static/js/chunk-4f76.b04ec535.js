(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4f76"],{"3z/A":function(t,e,s){"use strict";var i=s("n1Rs");s.n(i).a},"6eop":function(t,e,s){},"95sd":function(t,e,s){"use strict";var i=s("jjuu");s.n(i).a},Csel:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0OTlCOUZDRERCMjExRTg4MjVEQ0RGOThFMUY2OTEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0OTlCOUZERERCMjExRTg4MjVEQ0RGOThFMUY2OTEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ5OUI5RkFEREIyMTFFODgyNURDREY5OEUxRjY5MTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ5OUI5RkJEREIyMTFFODgyNURDREY5OEUxRjY5MTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iPiS9AAAAY0lEQVR42mI8c+aMLQMDw0IgVmQgHdwH4jgmIDEHiNOBmJEMDNI3lxHokv9QAXLBfyYGKoBRQzABC7bQJkIfIyFDGEdjZxAZcguIXcjUD9J3CxTFKUC8CIgVyDDkARDHAgQYANTlEN4TaBTMAAAAAElFTkSuQmCC"},GBpN:function(t,e,s){"use strict";s.r(e);var i=s("conU"),n={name:"follow-log-type-set",components:{},data:function(){return{loading:!1,list:[]}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.loading=!0,Object(i.l)().then(function(e){t.loading=!1,t.list=e.data.map(function(t){return{value:t}})}).catch(function(){t.loading=!1})},addItem:function(){this.list.push({value:""})},deleteItem:function(t,e){this.list.splice(e,1)},save:function(){for(var t=this,e=[],s=0;s<this.list.length;s++){var n=this.list[s];n.value&&e.push(n.value)}this.loading=!0,Object(i.k)({value:e}).then(function(e){t.loading=!1,t.$message.success(e.data)}).catch(function(){t.loading=!1})}}},a=(s("GhC/"),s("ZrdR")),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"content-title"},[s("span",[t._v("跟进记录类型设置")]),t._v(" "),s("el-button",{staticClass:"rt",attrs:{type:"primary",size:"medium"},on:{click:t.save}},[t._v("保存")])],1),t._v(" "),s("div",{staticClass:"content-body"},[t._l(t.list,function(e,i){return s("div",{key:i,staticClass:"input-item"},[s("el-input",{model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}}),t._v(" "),s("i",{staticClass:"el-icon-remove",on:{click:function(s){t.deleteItem(e,i)}}})],1)}),t._v(" "),s("el-button",{attrs:{type:"text"},on:{click:t.addItem}},[t._v("+添加类型")])],2)])},[],!1,null,"7e429f34",null);o.options.__file="followLogTypeSet.vue";var l=o.exports,c=s("KTTK"),r={data:function(){return{optionsDep:[],businessDep:[],settingList:[],name:"",winSingle:100,loseSingle:0,invalidSingle:0}},props:{businessDialogVisible:Boolean,businessTitle:String,infoData:{type:Object,default:function(){return{}}}},watch:{infoData:function(t){this.name=t.name,this.businessDep=t.businessDep.map(function(t,e){return t.id}),this.settingList=t.settingList,this.settingList&&0!=this.settingList.length||(this.settingList=[{name:"",rate:""}])}},mounted:function(){var t=this;Object(c.h)().then(function(e){t.optionsDep=e.data})},methods:{businessClose:function(){this.$emit("businessClose")},businessSubmit:function(){if(this.name)if(this.businessDep){for(var t=!0,e=0;e<this.settingList.length;e++){var s=this.settingList[e];if(!s.name||!s.rate){t=!1,this.$message.error("请完善阶段信息");break}}t&&this.$emit("businessSubmit",this.name,this.businessDep,this.settingList,this.businessTitle,this.infoData.typeId)}else this.$message.error("请关联应用部门");else this.$message.error("请填写商机组名称")},addIcon:function(){this.settingList.push({name:"",rate:""})},removeIcon:function(t){this.settingList.splice(t,1),this.changeInput()},changeInput:function(t,e){}}},u=(s("3z/A"),Object(a.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:t.businessTitle,visible:t.businessDialogVisible,width:"600px","before-close":t.businessClose},on:{"update:visible":function(e){t.businessDialogVisible=e}}},[s("div",{staticClass:"business-list"},[s("div",{staticClass:"business-label"},[t._v("商机组名称")]),t._v(" "),s("el-input",{staticStyle:{width:"60%"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),s("div",{staticClass:"business-list"},[s("div",{staticClass:"business-label"},[t._v("应用部门")]),t._v(" "),s("el-select",{staticStyle:{width:"60%"},attrs:{placeholder:"请选择",multiple:""},model:{value:t.businessDep,callback:function(e){t.businessDep=e},expression:"businessDep"}},t._l(t.optionsDep,function(t){return s("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),t._v(" "),s("div",{staticClass:"business-des"},[t._v("默认全公司")])],1),t._v(" "),s("div",{staticClass:"business-setting"},[s("div",[t._v("阶段设置")]),t._v(" "),s("div",{staticClass:"business-setting-content"},[s("div",{staticClass:"business-setting-table-header"},[s("span",[t._v("阶段")]),t._v(" "),s("span",[t._v("阶段名称")]),t._v(" "),s("span",[t._v("赢单率")])]),t._v(" "),s("div",{staticClass:"business-setting-table-body"},[t._l(t.settingList,function(e,i){return s("div",{key:i,staticClass:"business-setting-table"},[s("span",[t._v(t._s("阶段"+(i+1)))]),t._v(" "),s("span",[s("el-input",{attrs:{size:"mini"},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"item.name"}})],1),t._v(" "),s("span",{staticClass:"icon-span"},[s("el-input",{attrs:{size:"mini",type:"number"},on:{change:t.changeInput},model:{value:e.rate,callback:function(s){t.$set(e,"rate",s)},expression:"item.rate"}}),t._v(" %\n            "),s("span",{staticClass:"icon-box"},[s("span",{staticClass:"el-icon-circle-plus",on:{click:t.addIcon}}),t._v(" "),0!=i?s("span",{staticClass:"el-icon-remove",on:{click:function(e){t.removeIcon(i)}}}):t._e()])],1)])}),t._v(" "),s("div",{staticClass:"business-setting-table"},[s("span",[t._v("结束")]),t._v(" "),s("span",[t._v("赢单")]),t._v(" "),s("span",[t._v(t._s(t.winSingle)+" %")])]),t._v(" "),s("div",{staticClass:"business-setting-table"},[s("span",[t._v("结束")]),t._v(" "),s("span",[t._v("输单")]),t._v(" "),s("span",[t._v(t._s(t.loseSingle)+" %")])]),t._v(" "),s("div",{staticClass:"business-setting-table"},[s("span",[t._v("结束")]),t._v(" "),s("span",[t._v("无效")]),t._v(" "),s("span",[t._v(t._s(t.invalidSingle)+" %")])])],2)])]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:t.businessSubmit}},[t._v("确 定")]),t._v(" "),s("el-button",{on:{click:t.businessClose}},[t._v("取 消")])],1)])},[],!1,null,"68ec2f5c",null));u.options.__file="businessDialog.vue";var d=u.exports,p=(s("7Qib"),s("a/LZ"),{name:"business-group-set",components:{BusinessDialog:d},data:function(){return{loading:!1,businessObj:{name:"",businessDep:[],settingList:""},businessData:[],businessList:[{label:"商机组名称",field:"name"},{label:"应用部门",field:"deptName"},{label:"创建时间",field:"createTime"},{label:"创建人",field:"createName"}],businessDialogVisible:!1,businessTitle:"添加商机组"}},methods:{headerCellStyle:function(t,e){return{background:"#F2F2F2"}},getBusinessGroupList:function(){var t=this;this.loading=!0,Object(i.c)({page:1,limit:100,search:""}).then(function(e){t.loading=!1,t.businessData=e.data.list}).catch(function(){t.loading=!1})},fieldFormatter:function(t,e){if("deptName"==e.property){var s=t.deptIds,i="";if(s)for(var n=0;n<s.length;n++)i=i+s[n].name+(n===s.length-1?"":"、");return i||"全公司"}return t[e.property]},businessEdit:function(t){var e=this;Object(i.d)({id:t.typeId}).then(function(t){var s=t.data.statusList||[];e.businessObj={typeId:t.data.typeId,name:t.data.name,businessDep:t.data.deptIds||[],settingList:s},e.businessDialogVisible=!0,e.businessTitle="编辑商机组"}).catch(function(){})},businessDelect:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)({id:t.row.typeId}).then(function(s){e.businessData.splice(t.$index,1),e.$message.success("删除成功")}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},addBusiness:function(){this.businessObj={name:"",businessDep:[],settingList:""},this.businessDialogVisible=!0,this.businessTitle="添加商机组"},businessClose:function(){this.businessDialogVisible=!1},businessSubmit:function(t,e,s,n,a){var o=this,l={crmBusinessType:{name:t,typeId:a||null},deptIds:e,crmBusinessStatus:s};("添加商机组"==n?i.a:i.e)(l).then(function(t){o.$message.success("操作成功"),o.getBusinessGroupList(),o.businessClose()}).catch(function(){})}},created:function(){this.getBusinessGroupList()}}),m=(s("KKMz"),Object(a.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"content-title"},[s("span",[t._v("商机组设置")]),t._v(" "),s("el-button",{staticClass:"rt",attrs:{type:"primary",size:"medium"},on:{click:t.addBusiness}},[t._v("添加商机组")])],1),t._v(" "),s("div",{staticClass:"business-table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.businessData,stripe:"","header-cell-style":t.headerCellStyle}},[t._l(t.businessList,function(e,i){return s("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",prop:e.field,label:e.label,formatter:t.fieldFormatter}})}),t._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.businessEdit(e.row)}}},[t._v("编 辑")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.businessDelect(e)}}},[t._v("删 除")])]}}])})],2)],1),t._v(" "),s("business-dialog",{attrs:{infoData:t.businessObj,businessDialogVisible:t.businessDialogVisible,businessTitle:t.businessTitle},on:{businessClose:t.businessClose,businessSubmit:t.businessSubmit}})],1)},[],!1,null,"e0b922ac",null));m.options.__file="businessGroupSet.vue";var g=m.exports,v={name:"product-category-set",components:{},data:function(){return{loading:!1,treeData:[],treeSetTypes:[],productHandleDialog:!1,productForm:{name:"",type:"",pid:"",categoryId:""},defaultProps:{children:"children",label:"label"}}},created:function(){this.getProductCategoryIndex()},methods:{getChild:function(t){this.treeSetTypes=[{type:"create-child",name:"新建子分类"},{type:"create-brother",name:"新建平级分类"},{type:"edit",name:"编辑分类"},{type:"delete",name:"删除分类"}].map(function(e,s,i){return e.node=t,e})},handleTreeSetDrop:function(t){var e=this;"create-one"==t.type&&(this.productForm.type=t.type,this.productForm.name="",this.productHandleDialog=!0),"create-child"==t.type?(this.productForm.type=t.type,this.productForm.pid=t.node.data.categoryId,this.productForm.name="",this.productHandleDialog=!0):"create-brother"==t.type?(this.productForm.type=t.type,this.productForm.pid=t.node.data.pid,this.productForm.name="",this.productHandleDialog=!0):"edit"==t.type?(this.productForm.type=t.type,this.productForm.name=t.node.data.name,this.productForm.categoryId=t.node.data.categoryId,this.productForm.pid=t.node.data.pid,this.productHandleDialog=!0):"delete"==t.type&&this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"}),e.loading=!0,Object(i.p)({id:t.node.data.categoryId}).then(function(t){e.getProductCategoryIndex(),e.loading=!1}).catch(function(){e.loading=!1})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleProduct:function(){var t=this;0!=this.productForm.name.length?(this.productHandleDialog=!1,"create-one"==this.productForm.type&&(this.loading=!0,Object(i.r)({name:this.productForm.name}).then(function(e){t.getProductCategoryIndex(),t.loading=!1}).catch(function(){t.loading=!1})),"create-child"==this.productForm.type?(this.loading=!0,Object(i.r)({pid:this.productForm.pid,name:this.productForm.name}).then(function(e){t.getProductCategoryIndex(),t.loading=!1}).catch(function(){t.loading=!1})):"create-brother"==this.productForm.type?(this.loading=!0,Object(i.r)({pid:this.productForm.pid,name:this.productForm.name}).then(function(e){t.getProductCategoryIndex(),t.loading=!1}).catch(function(){t.loading=!1})):"edit"==this.productForm.type&&(this.loading=!0,Object(i.r)({categoryId:this.productForm.categoryId,pid:this.productForm.pid,name:this.productForm.name}).then(function(e){t.getProductCategoryIndex(),t.loading=!1}).catch(function(){t.loading=!1}))):this.$message({message:"请填写名称",type:"warning"})},getProductCategoryIndex:function(){var t=this;this.loading=!0,Object(i.q)({type:"tree"}).then(function(e){t.loading=!1,t.treeData=e.data}).catch(function(){t.loading=!1})}}},b=(s("95sd"),Object(a.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t._m(0),t._v(" "),i("div",{staticClass:"product-setting"},[i("div",[i("span",{staticClass:"el-icon-plus",staticStyle:{color:"#409EFF"}}),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){t.handleTreeSetDrop({type:"create-one"})}}},[t._v("新增一级分类")])],1),t._v(" "),i("div",{staticClass:"tree-box"},[i("el-tree",{attrs:{data:t.treeData,"default-expand-all":"",props:t.defaultProps},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node;return e.data,i("flexbox",{staticClass:"node-data"},[n.expanded?i("img",{staticClass:"node-img",attrs:{src:s("Csel")}}):t._e(),t._v(" "),n.expanded?t._e():i("img",{staticClass:"node-img",attrs:{src:s("zXZL")}}),t._v(" "),i("div",{staticClass:"node-label"},[t._v(t._s(n.label))]),t._v(" "),i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleTreeSetDrop}},[i("div",{staticClass:"node-label-set",on:{click:function(e){e.stopPropagation(),t.getChild(n)}}},[t._v("设置")]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.treeSetTypes,function(e,s){return i("el-dropdown-item",{key:s,attrs:{command:e}},[t._v(t._s(e.name))])}))],1)],1)}}])})],1)]),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.productHandleDialog,width:"400px"},on:{"update:visible":function(e){t.productHandleDialog=e}}},[i("el-form",{attrs:{model:t.productForm}},[i("el-form-item",{attrs:{label:"类别名称","label-width":"80"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.productForm.name,callback:function(e){t.$set(t.productForm,"name",e)},expression:"productForm.name"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.productHandleDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleProduct}},[t._v("确 定")])],1)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-title"},[e("span",[this._v("产品类别设置")])])}],!1,null,"7f85a913",null));b.options.__file="productCategorySet.vue";var h=b.exports,f={name:"contract-expire-set",components:{},data:function(){return{loading:!1,contractDay:0,contractConfig:0}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.loading=!0,this.$store.dispatch("CRMSettingConfig").then(function(e){t.loading=!1,t.contractDay=e.data.contractDay,t.contractConfig=parseInt(e.data.contractConfig)}).catch(function(){t.loading=!1})},save:function(){var t=this;this.loading=!0;var e={};1==this.contractConfig?(e.contractDay=this.contractDay,e.status=1):e.status=0,Object(i.j)(e).then(function(e){t.loading=!1,t.$message.success("操作成功")}).catch(function(){t.loading=!1})}}},y=(s("reIn"),Object(a.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"content-title"},[s("span",[t._v("合同到期提醒设置")]),t._v(" "),s("el-button",{staticClass:"rt",attrs:{type:"primary",size:"medium"},on:{click:t.save}},[t._v("保存")])],1),t._v(" "),s("div",{staticClass:"content-body"},[s("div",{staticClass:"tips"},[t._v("设置提前提醒天数之后，根据合同的”合同到期时间”计算提醒时间")]),t._v(" "),s("div",{staticClass:"set-content"},[s("el-radio",{attrs:{label:0},model:{value:t.contractConfig,callback:function(e){t.contractConfig=e},expression:"contractConfig"}},[t._v("不提醒")]),t._v(" "),s("el-radio",{attrs:{label:1},model:{value:t.contractConfig,callback:function(e){t.contractConfig=e},expression:"contractConfig"}},[t._v("提前提醒天数")]),t._v(" "),1==t.contractConfig?s("div",{staticClass:"time-set"},[s("el-input",{model:{value:t.contractDay,callback:function(e){t.contractDay=e},expression:"contractDay"}}),s("span",[t._v("天")])],1):t._e()],1)])])},[],!1,null,"1c8a59f7",null));y.options.__file="contractExpireSet.vue";var _={name:"biz-param",components:{BusinessGroupSet:g,ProductCategorySet:h,FollowLogTypeSet:l,ContractExpireSet:y.exports},data:function(){return{menuList:[{label:"跟进记录类型设置",key:"follow-log-type-set"},{label:"商机组设置",key:"business-group-set"},{label:"产品类别设置",key:"product-category-set"},{label:"合同到期提醒设置",key:"contract-expire-set"}],menuIndex:"follow-log-type-set"}},methods:{menuSelect:function(t,e){this.menuIndex=t}}},I=(s("s4cM"),Object(a.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"system-customer"},[s("div",{staticClass:"title"},[t._v("业务参数设置")]),t._v(" "),s("div",{staticClass:"customer-content"},[s("div",{staticClass:"system-view-nav"},[s("el-menu",{attrs:{"default-active":"follow-log-type-set"},on:{select:t.menuSelect}},t._l(t.menuList,function(e,i){return s("el-menu-item",{key:i,attrs:{index:e.key}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}))],1),t._v(" "),s("keep-alive",[s(t.menuIndex,{tag:"component",staticClass:"system-view-content"})],1)],1)])},[],!1,null,"fda5f314",null));I.options.__file="index.vue";e.default=I.exports},"GhC/":function(t,e,s){"use strict";var i=s("ZkQG");s.n(i).a},KKMz:function(t,e,s){"use strict";var i=s("zO7c");s.n(i).a},ZkQG:function(t,e,s){},jjuu:function(t,e,s){},n1Rs:function(t,e,s){},reIn:function(t,e,s){"use strict";var i=s("yi71");s.n(i).a},s4cM:function(t,e,s){"use strict";var i=s("6eop");s.n(i).a},yi71:function(t,e,s){},zO7c:function(t,e,s){},zXZL:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVENzhCOEIzRERCMjExRTg4QjUxREJEMjVGMDBFOUEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVENzhCOEI0RERCMjExRTg4QjUxREJEMjVGMDBFOUEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ3OEI4QjFEREIyMTFFODhCNTFEQkQyNUYwMEU5QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ3OEI4QjJEREIyMTFFODhCNTFEQkQyNUYwMEU5QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zKmg/AAAAcElEQVR42mI8c+aMLQMDw0IgVmQgHdwH4jgmIDEHiNOBmJEMDNI3lxHokv9QAXLBfyYGKgBiDPlPDUMYho4hLESGAboYIyFDGLEYwDiCApYYQxjp5pJbQOxCpn6QvlugKE4B4kVArECGIQ+AOBYgwAB2pxPdB9NdPQAAAABJRU5ErkJggg=="}}]);