import{d as t,m as c,s as a,r,o as l,c as i,e as d,w as _,g as m,v as p,x as u}from"./index.939b680f.js";const w=t({__name:"CustomSelect",setup(f){const o=c(null);return a(()=>{const e=o.value;if(e!==null){const n=e.querySelector(".mdc-select__dropdown-icon");n!==null&&(console.log(n.innerHTML),n.innerHTML=`<span class="mdc-select__dropdown-icon-graphic">
    <i
      class="material-icons mdc-select__dropdown-icon-inactive"
      aria-hidden="true"
      >expand_more</i
    >
    <i
      class="material-icons mdc-select__dropdown-icon-active"
      aria-hidden="true"
      >expand_less</i
    >
  </span>`)}}),(e,n)=>{const s=r("ui-select");return l(),i("div",{ref_key:"mountedSelect",ref:o},[d(s,p(u(e.$attrs)),{default:_(()=>[m(e.$slots,"default")]),_:3},16)],512)}}});export{w as _};
