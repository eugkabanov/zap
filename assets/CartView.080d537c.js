import{d as F,k,r as i,q as y,o as _,c as A,a as u,n as r,e as t,w as e,s as g,i as w,h as o}from"./index.dfcc84af.js";const B={class:"container-fluid py-5"},N={class:"mt-5"},V=o("\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),x=o("\u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435"),L=o("\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435"),T={class:"mt-3 dark"},q=o(" schedule "),I=o(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C "),R={class:"mt-4 row justify-content-between justify-content-md-end"},U={class:"col-auto"},H=o("\u042D\u043A\u0441\u043F\u043E\u0440\u0442\xA0(0)"),K={class:"col-auto ml-2"},O=o("\u0418\u043C\u043F\u043E\u0440\u0442"),S={class:"row mt-4"},X={class:"col-12 col-md-8 col-xl-6"},j=u("label",{for:"cart-comments",class:"d-block mb-2"},"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",-1),$={class:"mt-3"},z=u("label",{class:"hint",for:"cart-agree"},"\u0421 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D",-1),G={class:"mt-4"},J=o("\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 (0)"),M=o(" \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: "),P=u("b",null,"0,00 \u20BD",-1),Q=[M,P],Z=F({__name:"CartView",setup(W){const s=k(0),m=[{title:"\u0428\u0438\u043D\u0430 \u0437\u0438\u043C\u043D\u044F\u044F 245/60R18 109T XL Hakkapeliitta 10p SUV TL (\u0448\u0438\u043F.)",delivery:"NOKIAN",time:"2 \u0434\u043D\u044F",price:"1460",quantity:4,total:"5841"},{title:"\u0428\u0438\u043D\u0430 \u0437\u0438\u043C\u043D\u044F\u044F 245/60R18 109T XL Hakkapeliitta 10p SUV TL (\u0448\u0438\u043F.)",delivery:"NOKIAN",time:"2 \u0434\u043D\u044F",price:"1460",quantity:4,total:"5841"},{title:"\u0428\u0438\u043D\u0430 \u0437\u0438\u043C\u043D\u044F\u044F 245/60R18 109T XL Hakkapeliitta 10p SUV TL (\u0448\u0438\u043F.)",delivery:"NOKIAN",time:"2 \u0434\u043D\u044F",price:"1460",quantity:4,total:"5841"},{title:"\u0428\u0438\u043D\u0430 \u0437\u0438\u043C\u043D\u044F\u044F 245/60R18 109T XL Hakkapeliitta 10p SUV TL (\u0448\u0438\u043F.)",delivery:"NOKIAN",time:"2 \u0434\u043D\u044F",price:"1460",quantity:4,total:"5841"}];return(c,d)=>{const a=i("ui-tab"),h=i("ui-tab-bar"),p=i("ui-icon"),l=i("ui-checkbox"),f=i("ui-table"),n=i("ui-button"),D=i("ui-textfield"),v=i("ui-form-field"),C=i("RouterLink"),b=y("tooltip");return _(),A("main",B,[u("h1",{class:r(c.$tt("headline1"))},"\u041A\u043E\u0440\u0437\u0438\u043D\u0430",2),u("div",N,[t(h,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=E=>s.value=E)},{default:e(()=>[t(a,{"min-width":"","content-indicator":""},{default:e(()=>[V]),_:1}),t(a,{"min-width":"","content-indicator":""},{default:e(()=>[x]),_:1}),t(a,{"min-width":"","content-indicator":""},{default:e(()=>[L]),_:1})]),_:1},8,["modelValue"])]),u("div",T,[t(f,{fullwidth:"",data:m,thead:[{value:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{value:"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A"},{slot:"th-time",columnId:"time"},{value:"\u0426\u0435\u043D\u0430",align:"center"},{value:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",align:"center"},{value:"\u0421\u0443\u043C\u043C\u0430",align:"center"},{slot:"th-select",columnId:"select"},"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"],tbody:[{field:"title",align:"center"},{field:"delivery",align:"center"},{field:"time"},{field:"price",align:"center"},{field:"quantity",align:"center"},{field:"total",align:"center"},{slot:"select"},{field:"comments"}]},{"th-time":e(()=>[g((_(),w(p,{style:{"text-align":"center"},"aria-describedby":"th-cell-1"},{default:e(()=>[q]),_:1})),[[b,"\u0412\u0440\u0435\u043C\u044F"]])]),"th-select":e(()=>[t(l),I]),select:e(()=>[t(l)]),_:1}),u("div",R,[u("div",U,[t(n,{outlined:""},{default:e(()=>[H]),_:1})]),u("div",K,[t(n,{raised:""},{default:e(()=>[O]),_:1})])])]),u("div",S,[u("div",X,[u("div",null,[j,t(D,{id:"cart-comments",outlined:"",fullwidth:"","input-type":"textarea",rows:"8",cols:"40"})]),u("div",$,[t(v,null,{default:e(()=>[t(l,{value:"agree","input-id":"cart-agree"}),z]),_:1})]),u("div",G,[t(C,{to:"/order"},{default:e(()=>[t(n,{raised:""},{default:e(()=>[J]),_:1})]),_:1})]),u("div",{class:r(["mt-3 large",c.$tt("body1")])},Q,2)])])])}}});export{Z as default};
