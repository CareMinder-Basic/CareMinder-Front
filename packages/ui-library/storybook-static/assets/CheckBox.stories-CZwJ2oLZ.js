import{j as f,a}from"./jsx-runtime-Cx_VB7oj.js";import{r as n}from"./index-pGBX_OjP.js";import{u as oe}from"./index-DhYsA3FQ.js";import{a as ce,c as ie,P as Z,b as A}from"./index-BcyFVrrw.js";import{u as de,a as le}from"./index-CwKaYpZV.js";import{P as ue}from"./index-DqJOoLMa.js";import{c as F}from"./util-jAU0Cazi.js";import{c as me}from"./index-CNX7-S-j.js";import{c as pe}from"./createLucideIcon-HGHrfBBx.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cbdv_-CT.js";import"./index-BvPtJTUJ.js";var R="Checkbox",[fe,Le]=ie(R),[be,he]=fe(R),ee=n.forwardRef((e,l)=>{const{__scopeCheckbox:r,name:c,checked:b,defaultChecked:s,required:h,disabled:u,value:k="on",onCheckedChange:_,form:m,...E}=e,[i,v]=n.useState(null),P=oe(l,t=>v(t)),S=n.useRef(!1),I=i?m||!!i.closest("form"):!0,[p=!1,B]=ce({prop:b,defaultProp:s,onChange:_}),ne=n.useRef(p);return n.useEffect(()=>{const t=i==null?void 0:i.form;if(t){const C=()=>B(ne.current);return t.addEventListener("reset",C),()=>t.removeEventListener("reset",C)}},[i,B]),f(be,{scope:r,state:p,disabled:u,children:[a(Z.button,{type:"button",role:"checkbox","aria-checked":d(p)?"mixed":p,"aria-required":h,"data-state":te(p),"data-disabled":u?"":void 0,disabled:u,value:k,...E,ref:P,onKeyDown:A(e.onKeyDown,t=>{t.key==="Enter"&&t.preventDefault()}),onClick:A(e.onClick,t=>{B(C=>d(C)?!0:!C),I&&(S.current=t.isPropagationStopped(),S.current||t.stopPropagation())})}),I&&a(Ce,{control:i,bubbles:!S.current,name:c,value:k,checked:p,required:h,disabled:u,form:m,style:{transform:"translateX(-100%)"},defaultChecked:d(s)?!1:s})]})});ee.displayName=R;var ae="CheckboxIndicator",re=n.forwardRef((e,l)=>{const{__scopeCheckbox:r,forceMount:c,...b}=e,s=he(ae,r);return a(ue,{present:c||d(s.state)||s.state===!0,children:a(Z.span,{"data-state":te(s.state),"data-disabled":s.disabled?"":void 0,...b,ref:l,style:{pointerEvents:"none",...e.style}})})});re.displayName=ae;var Ce=e=>{const{control:l,checked:r,bubbles:c=!0,defaultChecked:b,...s}=e,h=n.useRef(null),u=de(r),k=le(l);n.useEffect(()=>{const m=h.current,E=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(E,"checked").set;if(u!==r&&v){const P=new Event("click",{bubbles:c});m.indeterminate=d(r),v.call(m,d(r)?!1:r),m.dispatchEvent(P)}},[u,r,c]);const _=n.useRef(d(r)?!1:r);return a("input",{type:"checkbox","aria-hidden":!0,defaultChecked:b??_.current,...s,tabIndex:-1,ref:h,style:{...e.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function d(e){return e==="indeterminate"}function te(e){return d(e)?"indeterminate":e?"checked":"unchecked"}var se=ee,ke=re;/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ge=pe("Check",ve),xe=me("peer h-5 w-5 shrink-0 rounded-md ring-offset-background transition-colors duration-200",{variants:{variant:{admin:["border border-gray-200","data-[state=checked]:bg-admin data-[state=checked]:border-admin","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50"],ward:["border border-gray-200","data-[state=checked]:bg-primary data-[state=checked]:border-primary","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50"],staff:["border border-gray-200","data-[state=checked]:bg-secondary data-[state=checked]:border-secondary","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50"]}},defaultVariants:{variant:"ward"}}),o=n.forwardRef(({className:e,variant:l,...r},c)=>a(se,{ref:c,className:F(xe({variant:l}),e),...r,children:a(ke,{className:F("flex items-center justify-center text-white"),children:a(ge,{className:"h-4 w-4 stroke-[3]"})})}));o.displayName=se.displayName;try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"admin" | "ward" | "staff" | null'}}}}}catch{}const Ve={title:"Atoms/Checkbox",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["mint","blue","gray"],description:"체크박스의 색상을 설정합니다"},checked:{control:"boolean",description:"체크박스의 선택 상태를 설정합니다"},disabled:{control:"boolean",description:"체크박스의 비활성화 상태를 설정합니다"},onCheckedChange:{action:"checked changed",description:"체크박스 상태가 변경될 때 호출되는 함수입니다"}}},g={args:{variant:"ward"}},x={render:()=>f("div",{className:"flex items-center space-x-4",children:[a(o,{variant:"admin",checked:!0}),a(o,{variant:"ward",checked:!0}),a(o,{variant:"staff",checked:!0})]})},y={args:{checked:!0}},N={args:{disabled:!0}},w={args:{checked:!0,disabled:!0}},D={render:()=>f("div",{className:"space-y-4",children:[f("div",{className:"flex items-center space-x-2",children:[a(o,{variant:"admin",id:"mint"}),a("label",{htmlFor:"mint",className:"text-sm font-medium leading-none",children:"어드민 체크박스"})]}),f("div",{className:"flex items-center space-x-2",children:[a(o,{variant:"ward",id:"blue"}),a("label",{htmlFor:"blue",className:"text-sm font-medium leading-none",children:"병동 체크박스"})]}),f("div",{className:"flex items-center space-x-2",children:[a(o,{variant:"staff",id:"gray"}),a("label",{htmlFor:"gray",className:"text-sm font-medium leading-none",children:"스테프 체크박스"})]})]})};var L,V,j;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'ward'
  }
}`,...(j=(V=g.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var M,O,q;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Checkbox variant="admin" checked />
      <Checkbox variant="ward" checked />
      <Checkbox variant="staff" checked />
    </div>
}`,...(q=(O=x.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,K,T;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(T=(K=y.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var z,W,X;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(X=(W=N.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox variant="admin" id="mint" />
        <label htmlFor="mint" className="text-sm font-medium leading-none">
          어드민 체크박스
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox variant="ward" id="blue" />
        <label htmlFor="blue" className="text-sm font-medium leading-none">
          병동 체크박스
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox variant="staff" id="gray" />
        <label htmlFor="gray" className="text-sm font-medium leading-none">
          스테프 체크박스
        </label>
      </div>
    </div>
}`,...(Y=(U=D.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const je=["Default","Variants","Checked","Disabled","CheckedAndDisabled","WithLabel"];export{y as Checked,w as CheckedAndDisabled,g as Default,N as Disabled,x as Variants,D as WithLabel,je as __namedExportsOrder,Ve as default};
