(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a9614d0"],{"2c8b":function(e,t,s){},5126:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-card",{staticStyle:{"max-width":"98%","margin-top":"10px"}},[s("v-card-title",[e._v(" 用户管理 "),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"mx-12",attrs:{depressed:"",dark:"",color:"blue"}},"v-btn",i,!1),a),[e._v("新增用户 ")])]}}]),model:{value:e.addUserDialog,callback:function(t){e.addUserDialog=t},expression:"addUserDialog"}},[s("v-card",[s("v-card-title",[e._v(" 添加新用户 ")]),s("v-card-text",[s("ValidationObserver",{ref:"addUser",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.validated;return[s("VTextFieldWithValidation",{attrs:{validated:a,rules:"required",label:"用户名"},model:{value:e.addUserInfo.username,callback:function(t){e.$set(e.addUserInfo,"username",t)},expression:"addUserInfo.username"}}),s("VTextFieldWithValidation",{attrs:{validated:a,rules:"required",label:"邮箱"},model:{value:e.addUserInfo.email,callback:function(t){e.$set(e.addUserInfo,"email",t)},expression:"addUserInfo.email"}}),s("VTextFieldWithValidation",{attrs:{validated:a,rules:"required",label:"密码"},model:{value:e.addUserInfo.password,callback:function(t){e.$set(e.addUserInfo,"password",t)},expression:"addUserInfo.password"}})]}}])})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addUserDialogClose}},[e._v(e._s(e.$t("appBar.dialogClose")))]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addUser}},[e._v(e._s(e.$t("appBar.dialogAdd")))])],1)],1)],1)],1),s("v-data-table",{attrs:{headers:e.headers,items:e.userInfo,search:e.search,"items-per-page":e.userInfo.length,"hide-default-footer":""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:"",title:"编辑"},on:{click:function(t){return e.setUserInfo(a.id)}}},[e._v(" mdi-pencil ")]),s("v-icon",{staticClass:"mr-2",attrs:{small:"",title:a.isEnabled?"注销账户":"恢复账号"},on:{click:function(t){return e.logoffOrRestore(a,a.isEnabled)}}},[e._v(" "+e._s(a.isEnabled?"mdi-account-remove":"mdi-restore")+" ")]),s("v-btn",{attrs:{dark:"",small:"",depressed:"",color:"blue"},on:{click:function(t){return e.setUserPassw(a.id)}}},[e._v(" 重置密码 ")])]}}],null,!0)})],1),s("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.setUserPasswDialog,callback:function(t){e.setUserPasswDialog=t},expression:"setUserPasswDialog"}},[s("v-card",[s("v-card-title",[e._v(" 设置新密码 ")]),s("v-card-text",[s("ValidationObserver",{ref:"setUserPassw",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.validated;return[s("VTextFieldWithValidation",{attrs:{validated:a,rules:"required",label:"新密码"},model:{value:e.setUserPasswParam.userPassword,callback:function(t){e.$set(e.setUserPasswParam,"userPassword",t)},expression:"setUserPasswParam.userPassword"}})]}}])})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.setUserPwDialogClose}},[e._v(e._s(e.$t("appBar.dialogClose")))]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.setUserPasswConf}},[e._v(e._s(e.$t("appBar.dialogAdd")))])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.setUserInfoDialog,callback:function(t){e.setUserInfoDialog=t},expression:"setUserInfoDialog"}},[s("v-card",[s("v-card-title",[e._v(" 编辑信息 ")]),s("v-card-text",[s("ValidationObserver",{ref:"setUserInfo",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.validated;return[s("VTextFieldWithValidation",{attrs:{validated:a,rules:"required",label:"昵称"},model:{value:e.setUserInfoParam.nickname,callback:function(t){e.$set(e.setUserInfoParam,"nickname",t)},expression:"setUserInfoParam.nickname"}})]}}])})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.setUserInfoDialogClose}},[e._v(e._s(e.$t("appBar.dialogClose")))]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.setUserInfoConf}},[e._v(e._s(e.$t("appBar.dialogAdd")))])],1)],1)],1)],1)},i=[],n=s("6abc"),o=s("7736"),r=s("4cb1"),l=s("deaf"),d={components:{ValidationObserver:r["a"],VTextFieldWithValidation:l["a"]},data:function(){return{search:"",setUserInfoDialog:!1,setUserPasswDialog:!1,addUserDialog:!1,headers:[{text:"用户ID",align:"start",sortable:!1,value:"id"},{text:"用户名",value:"username"},{text:"是否可用",value:"isEnabled",sortable:!1},{text:"操作",value:"actions",sortable:!1}],addUserInfo:{code:"1234",email:"",username:"",password:""},setUserInfoParam:{id:0,nickname:""},logoffOrRestoreParam:{userId:0,index:0},setUserPasswParam:{id:0,userPassword:""}}},computed:Object(n["a"])({},Object(o["b"])(["userInfo"])),created:function(){this.$store.dispatch("getAllUsers")},methods:{addUserDialogClose:function(){this.addUserInfo.username="",this.addUserInfo.email="",this.addUserInfo.password="",this.$refs.addUser.reset(),this.addUserDialog=!1},addUser:function(){var e=this;this.$refs.addUser.validate().then((function(t){t&&(e.$store.dispatch("addUser",JSON.parse(JSON.stringify(e.addUserInfo))),e.addUserInfo.username="",e.addUserInfo.email="",e.addUserInfo.password="",e.addUserDialog=!1)}))},setUserInfo:function(e){this.setUserInfoParam.id=e,this.setUserInfoDialog=!0},setUserInfoDialogClose:function(){this.setUserInfoParam.nickname="",this.setUserInfoDialog=!1},setUserInfoConf:function(){var e=this;this.$refs.setUserInfo.validate().then((function(t){t&&e.$store.dispatch("setUserInfo",e.setUserInfoParam).then((function(){e.setUserInfoParam.nickname="",e.setUserInfoDialog=!1}))}))},logoffOrRestore:function(e,t){this.logoffOrRestoreParam.userId=e.id,this.logoffOrRestoreParam.index=this.userInfo.indexOf(e),t?confirm("是否将该用户注销？")&&this.$store.dispatch("logoffUser",this.logoffOrRestoreParam):this.$store.dispatch("restoreUser",this.logoffOrRestoreParam)},setUserPwDialogClose:function(){this.$refs.setUserPassw.reset(),this.setUserPasswParam.userPassword="",this.setUserPasswDialog=!1},setUserPassw:function(e){this.setUserPasswParam.id=e,this.setUserPasswDialog=!0},setUserPasswConf:function(){var e=this;this.$refs.setUserPassw.validate().then((function(t){t&&(e.$store.dispatch("setUserPassw",e.setUserPasswParam).then((function(){e.setUserPasswParam.userPassword="",alert("修改成功")})),e.setUserPasswDialog=!1)}))}}},c=d,h=s("5d22"),u=s("7aad"),f=s.n(u),v=s("9b1f"),m=s("2275"),g=s("2a28"),p=s("f749"),b=s("9205"),U=s("60ed"),w=s("b4de"),x=s("110a"),k=Object(h["a"])(c,a,i,!1,null,null,null);t["default"]=k.exports;f()(k,{VBtn:v["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VDataTable:p["a"],VDialog:b["a"],VIcon:U["a"],VSpacer:w["a"],VTextField:x["a"]})},9205:function(e,t,s){"use strict";s("2c8b");var a=s("12a6"),i=s("e2b1"),n=s("0e93"),o=s("ed1f"),r=s("411e"),l=s("fa63"),d=s("6e59"),c=s("b767"),h=s("daa8"),u=s("07ca"),f=s("3251"),v=s("eb21");const m=Object(u["a"])(i["a"],n["a"],o["a"],r["a"],l["a"],d["a"],c["a"]);t["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(f["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===v["z"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick(()=>e&&e.focus())}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(e=>e.contains(t))){const e=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find(e=>!e.hasAttribute("disabled"));t&&t.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:"none"===this.maxWidth?void 0:Object(v["h"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["h"])(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})}}]);
//# sourceMappingURL=chunk-0a9614d0.59996df6.js.map