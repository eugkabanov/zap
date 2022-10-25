import{d as t,m as a,s as c,r,o as l,c as i,e as d,w as _,g as m,v as p,x as u}from"./index.23d51aee.js";const w=t({__name:"CustomSelect",setup(f){const o=a(null);return c(()=>{const e=o.value;if(e!==null){const n=e.querySelector(".mdc-select__dropdown-icon");n!==null&&(n.innerHTML=`<span class="mdc-select__dropdown-icon-graphic">
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
