import{d as B,k as g,r as f,o,i as w,w as n,a as e,n as l,e as u,c as s,F as d,j as p,u as h,h as C}from"./index.2886c9af.js";import{C as v}from"./CatalogLayout.386281af.js";import{C as t}from"./CategoryButton.adbf869a.js";import{P as D}from"./ProductCard.bc0268de.js";import{_ as E,P as y}from"./ProductListCard.861f3c0c.js";import"./wheel.3cec4271.js";const b={class:"pb-5"},k={class:"mb-5"},A={class:"mb-3"},V={key:0,class:"row g-3"},L={key:1,class:"row g-3"},N={class:"mt-5 row justify-content-center"},$={class:"col-auto"},I=C("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"),T=B({__name:"CatalogChooseCategoryView",setup(P){const r=Array(30).fill(""),c=g(1),m=a=>c.value=a;return(a,F)=>{const _=f("ui-button");return o(),w(v,null,{aside:n(()=>[e("div",{class:l([a.$tt("headline2"),"mb-4"])},"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",2),e("div",null,[u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u043B\u0435\u0433\u043A\u043E\u0432\u044B\u0435"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u0433\u0440\u0443\u0437\u043E\u0432\u044B\u0435"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0435"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u0441\u0435\u043B\u044C\u0441\u043A\u043E\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u043A\u0432\u0430\u0434\u0440\u043E"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u043C\u043E\u0442\u043E"}),u(t,{href:"/catalog/wheels",caption:"\u0428\u0438\u043D\u044B \u0430\u0432\u0442\u043E"}),u(t,{href:"/catalog/wheels",caption:"\u041A\u0430\u043C\u0435\u0440\u044B \u043C\u043E\u0442\u043E"})])]),main:n(()=>[e("div",b,[e("div",k,[e("span",{class:l(a.$tt("headline1"))},"\u0428\u0438\u043D\u044B",2),e("span",{class:l([a.$tt("body2"),"ms-2 hint"])},"250 226 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",2)]),e("div",A,[u(E,{"selected-view-option":c.value,"set-selected-view-option":m},null,8,["selected-view-option"])]),c.value===1?(o(),s("div",V,[(o(!0),s(d,null,p(h(r),i=>(o(),s("article",{key:i,class:"col-12 col-sm-6 col-md-4 col-xxl-3"},[u(D,{productId:"123",productCategory:"wheel",title:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430",image:"@/assets/catalog/oil.png",brand:"BREND",inventoryId:"L03412960404",price:"5841"})]))),128))])):(o(),s("div",L,[(o(!0),s(d,null,p(h(r),i=>(o(),s("article",{key:i,class:"col-12"},[u(y,{productId:"123",productCategory:"wheel",title:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430",image:"@/assets/catalog/oil.png",brand:"BREND",inventoryId:"L03412960404",price:"5841"})]))),128))])),e("div",N,[e("div",$,[u(_,{outlined:"",style:{color:"#76767a"},class:l(a.$tt("body1"))},{default:n(()=>[I]),_:1},8,["class"])])])])]),_:1})}}});export{T as default};