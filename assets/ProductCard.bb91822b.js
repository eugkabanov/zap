import{d as u,r as a,o as l,i as r,w as s,a as o,t as e,n as i,e as _,h as p,p as m,q as h,_ as v}from"./index.b4d1589e.js";import{_ as b}from"./wheel.3cec4271.js";const f=t=>(m("data-v-b521d13f"),t=t(),h(),t),g=f(()=>o("img",{class:"product-card__image mb-3",src:b,alt:"product image"},null,-1)),y={class:"small bold"},C={class:"small hint"},I={class:"small hint"},x=p("\u0412\xA0\u043A\u043E\u0440\u0437\u0438\u043D\u0443"),B=u({__name:"ProductCard",props:{productId:null,productCategory:null,title:null,image:null,brand:null,inventoryId:null,price:null},setup(t){return(d,k)=>{const c=a("ui-button"),n=a("RouterLink");return l(),r(n,{to:`/catalog/${t.productCategory}/${t.productId}`,class:"product-card"},{default:s(()=>[g,o("div",y,e(t.title),1),o("div",C,e(t.brand),1),o("div",I,"\u0410\u0440\u0442\u0438\u043A\u0443\u043B: "+e(t.inventoryId),1),o("div",{class:i([d.$tt("body1"),"large my-2"])},e(t.price)+"\xA0\u20BD",3),_(c,{raised:""},{default:s(()=>[x]),_:1})]),_:1},8,["to"])}}});const S=v(B,[["__scopeId","data-v-b521d13f"]]);export{S as P};
