import{d as m,r as e,o as v,c as f,e as c,w as d,a as o,h as b,i as w,t as a,n as t,p as g,q as D,_ as E}from"./index.8870d4e3.js";import{_ as A}from"./CustomSelect.vue_vue_type_script_setup_true_lang.7290aa6a.js";import{_ as k}from"./wheel.3cec4271.js";const C={class:"row g-3"},B=b("search"),V=o("label",{class:"me-3 d-none d-md-inline"},"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:",-1),F={class:"col-auto ms-auto ms-md-3"},eo=m({__name:"ViewOptions",props:{selectedViewOption:null,setSelectedViewOption:null},setup(l){const u=[{label:"\u041F\u043E \u0446\u0435\u043D\u0435, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0435\u0432\u044B\u0435",value:"price"},{label:"\u041F\u043E \u0446\u0435\u043D\u0435, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435",value:"price"}],n=[{icon:"view_list"},{icon:"view_module"}];return(_,i)=>{const h=e("ui-textfield-icon"),p=e("ui-textfield"),r=e("ui-form-field"),y=e("ui-segmented-buttons");return v(),f("div",C,[c(r,{class:"col-12 col-md-5"},{default:d(()=>[c(p,{outlined:"",fullwidth:"",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{after:d(()=>[c(h,{trailing:""},{default:d(()=>[B]),_:1})]),_:1})]),_:1}),c(r,{class:"col-8 col-md-5 ms-md-auto"},{default:d(()=>[V,c(A,{outlined:"",fullwidth:"",options:u})]),_:1}),o("div",F,[c(y,{"model-value":l.selectedViewOption,"onUpdate:modelValue":i[0]||(i[0]=$=>l.setSelectedViewOption($)),items:n,"single-select":""},null,8,["model-value"])])])}}}),s=l=>(g("data-v-565c3834"),l=l(),D(),l),I={class:"row gy-4"},O=s(()=>o("div",{class:"col-12 col-md-6 col-xxl-2"},[o("img",{class:"product-card__image mb-3",src:k,alt:"product image"})],-1)),S={class:"col-12 col-md-6 col-xxl-3"},x={class:"bold large mb-4"},L={class:"col-12 col-md-6 col-xxl-5 pe-5"},P={class:"hint"},N={class:"row mb-2"},R=s(()=>o("div",{class:"col dotted"},null,-1)),T={class:"row mb-2"},q=s(()=>o("div",{class:"col dotted"},null,-1)),z={class:"row mb-2"},U=s(()=>o("div",{class:"col dotted"},null,-1)),j={class:"row mb-2"},G=s(()=>o("div",{class:"col dotted"},null,-1)),H={class:"row mb-2"},J=s(()=>o("div",{class:"col dotted"},null,-1)),K={class:"row mb-2"},M=s(()=>o("div",{class:"col dotted"},null,-1)),Q={class:"row mb-2"},W=s(()=>o("div",{class:"col dotted"},null,-1)),X={class:"row mb-2"},Y=s(()=>o("div",{class:"col dotted"},null,-1)),Z={class:"col-12 col-md-6 col-xxl-2"},oo={class:"row g-0 flex-column",style:{height:"100%"}},uo=b("\u0412\xA0\u043A\u043E\u0440\u0437\u0438\u043D\u0443"),to=m({__name:"ProductListCard",props:{productId:null,productCategory:null,title:null,image:null,brand:null,inventoryId:null,price:null},setup(l){return(u,n)=>{const _=e("ui-button"),i=e("RouterLink");return v(),w(i,{to:`/catalog/${l.productCategory}/${l.productId}`,class:"product-card"},{default:d(()=>[o("div",I,[O,o("div",S,[o("div",x,a(l.title),1),o("div",{class:t([u.$tt("body2"),"hint"])},a(l.brand),3),o("div",{class:t([u.$tt("body2"),"hint"])},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B: "+a(l.inventoryId),3),o("div",{class:t([u.$tt("body1"),"large d-md-none my-2"])},a(l.price)+"\xA0\u20BD ",3)]),o("div",L,[o("div",P,[o("div",N,[o("div",{class:t(["col-auto small",u.$tt("body2")])},"\u0428\u0438\u0440\u0438\u043D\u0430",2),R,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," 245 ",2)]),o("div",T,[o("div",{class:t(["col-auto small",u.$tt("body2")])},"\u0412\u044B\u0441\u043E\u0442\u0430",2),q,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," 60 ",2)]),o("div",z,[o("div",{class:t(["col-auto small",u.$tt("body2")])},"\u0414\u0438\u0430\u043C\u0435\u0442\u0440",2),U,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," 18 ",2)]),o("div",j,[o("div",{class:t(["col-auto small",u.$tt("body2")])},"\u0421\u0435\u0437\u043E\u043D",2),G,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," \u0417\u0438\u043C\u043D\u044F\u044F ",2)]),o("div",H,[o("div",{class:t(["col-auto small",u.$tt("body2")])}," \u0418\u043D\u0434\u0435\u043A\u0441 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 ",2),J,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," 109 ",2)]),o("div",K,[o("div",{class:t(["col-auto small",u.$tt("body2")])}," \u0418\u043D\u0434\u0435\u043A\u0441 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 ",2),M,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," T ",2)]),o("div",Q,[o("div",{class:t(["col-auto small",u.$tt("body2")])}," \u0422\u0438\u043F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 ",2),W,o("div",{style:{color:"black"},class:t(["col-auto small",u.$tt("body2")])}," R ",2)]),o("div",X,[o("div",{class:t(["small col-auto",u.$tt("body2")])}," \u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u0430\u044F\xA0\u0433\u0440\u0443\u0437\u043E\u043F\u043E\u0434\u044A\u0435\u043C\u043D\u043E\u0441\u0442\u044C ",2),Y,o("div",{style:{color:"black"},class:t(["small col-auto",u.$tt("body2")])}," \u0434\u0430 ",2)])])]),o("div",Z,[o("div",oo,[o("div",{class:t([u.$tt("body1"),"large bold col-auto d-none d-md-block"]),style:{"text-align":"right"}},a(l.price)+"\xA0\u20BD ",3),c(_,{raised:"",class:"mt-auto col-auto"},{default:d(()=>[uo]),_:1})])])])]),_:1},8,["to"])}}});const ao=E(to,[["__scopeId","data-v-565c3834"]]);export{ao as P,eo as _};