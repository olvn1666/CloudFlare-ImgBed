"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[905],{4318:function(){},1905:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var n=a(6023),o=(a(5331),a(8736),a(213),a(5970),a(8785),a(4880)),i=(a(7128),a(1450)),s=a(6768);const h={class:"container"},l={class:"header-content"},c={class:"header-action"},r={class:"main-container"};function u(t,e,a,u,d,m){const f=(0,s.g2)("font-awesome-icon"),p=i.R7,b=o.bZ,k=n.o8,g=n.Up;return(0,s.uX)(),(0,s.CE)("div",h,[(0,s.bF)(b,null,{default:(0,s.k6)((()=>[(0,s.Lk)("div",l,[e[0]||(e[0]=(0,s.Lk)("span",{class:"title"},"用户管理",-1)),(0,s.Lk)("div",c,[(0,s.bF)(p,{content:"返回主管理页",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(f,{icon:"home",class:"header-icon",onClick:m.handleGoHome},null,8,["onClick"])])),_:1}),(0,s.bF)(p,{content:"返回上传页",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(f,{icon:"upload",class:"header-icon",onClick:m.handleGoUpload},null,8,["onClick"])])),_:1}),(0,s.bF)(p,{content:"退出登录",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(f,{icon:"sign-out-alt",class:"header-icon",onClick:m.handleLogout},null,8,["onClick"])])),_:1})])])])),_:1}),(0,s.Lk)("div",r,[(0,s.bF)(g,{data:d.dealedData,style:{width:"90%"}},{default:(0,s.k6)((()=>[(0,s.bF)(k,{prop:"ip",label:"IP地址"}),(0,s.bF)(k,{prop:"count",label:"上传次数",sortable:""})])),_:1},8,["data"])])])}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698);var d=a(782),m={name:"CustomerConfig",data(){return{tableData:[],dealedData:[]}},computed:{...(0,d.L8)(["credentials"])},methods:{async fetchWithAuth(t,e={}){this.credentials&&(e.headers={...e.headers,Authorization:`Basic ${this.credentials}`},e.credentials="include");const a=await fetch(t,e);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},dealByIP(t){let e=[],a=new Set;return t.forEach((t=>{t.metadata?.UploadIP&&a.add(t.metadata.UploadIP)})),a.forEach((a=>{let n=t.filter((t=>t.metadata?.UploadIP===a)),o=n.length;e.push({ip:a,count:o,data:n})})),e},handleGoUpload(){this.$router.push("/")},handleLogout(){this.$store.commit("setCredentials",null),this.$router.push("/adminLogin")},handleGoHome(){this.$router.push("/dashboard")}},mounted(){this.fetchWithAuth("/api/manage/check",{method:"GET"}).then((t=>t.text())).then((t=>{if("true"==t)return this.showLogoutButton=!0,this.fetchWithAuth("/api/manage/list",{method:"GET"});if("Not using basic auth."==t)return this.fetchWithAuth("/api/manage/list",{method:"GET"});throw new Error("Unauthorized")})).then((t=>t.json())).then((t=>{this.tableData=t,this.dealedData=this.dealByIP(t)})).catch((t=>{"Unauthorized"!==t.message&&this.$message.error("同步数据时出错，请检查网络连接")}))}},f=a(1241);const p=(0,f.A)(m,[["render",u]]);var b=p},8736:function(t,e,a){a(5331)},7128:function(t,e,a){a(5331),a(4318)},9104:function(t,e,a){a(5331)},5970:function(t,e,a){a(5331)},8785:function(t,e,a){a(5331)},213:function(t,e,a){a(5331),a(9104)}}]);
//# sourceMappingURL=905.953573b6.js.map