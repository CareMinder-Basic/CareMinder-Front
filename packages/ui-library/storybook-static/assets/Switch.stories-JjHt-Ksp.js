import{j as t,a as e}from"./jsx-runtime-Cx_VB7oj.js";import{r as c}from"./index-pGBX_OjP.js";import{a as me,c as ue,P as ae,b as pe}from"./index-BcyFVrrw.js";import{u as fe}from"./index-DhYsA3FQ.js";import{u as he,a as be}from"./index-CwKaYpZV.js";import{c as B}from"./util-jAU0Cazi.js";import{c as ke}from"./index-CNX7-S-j.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cbdv_-CT.js";import"./index-BvPtJTUJ.js";var D="Switch",[Ce,Oe]=ue(D),[ve,ge]=Ce(D),te=c.forwardRef((a,n)=>{const{__scopeSwitch:r,name:i,checked:d,defaultChecked:p,required:l,disabled:o,value:m="on",onCheckedChange:S,form:j,...f}=a,[u,ie]=c.useState(null),de=fe(n,b=>ie(b)),_=c.useRef(!1),P=u?j||!!u.closest("form"):!0,[h=!1,oe]=me({prop:d,defaultProp:p,onChange:S});return t(ve,{scope:r,checked:h,disabled:o,children:[e(ae.button,{type:"button",role:"switch","aria-checked":h,"aria-required":l,"data-state":re(h),"data-disabled":o?"":void 0,disabled:o,value:m,...f,ref:de,onClick:pe(a.onClick,b=>{oe(le=>!le),P&&(_.current=b.isPropagationStopped(),_.current||b.stopPropagation())})}),P&&e(we,{control:u,bubbles:!_.current,name:i,value:m,checked:h,required:l,disabled:o,form:j,style:{transform:"translateX(-100%)"}})]})});te.displayName=D;var se="SwitchThumb",ne=c.forwardRef((a,n)=>{const{__scopeSwitch:r,...i}=a,d=ge(se,r);return e(ae.span,{"data-state":re(d.checked),"data-disabled":d.disabled?"":void 0,...i,ref:n})});ne.displayName=se;var we=a=>{const{control:n,checked:r,bubbles:i=!0,...d}=a,p=c.useRef(null),l=he(r),o=be(n);return c.useEffect(()=>{const m=p.current,S=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(S,"checked").set;if(l!==r&&f){const u=new Event("click",{bubbles:i});f.call(m,r),m.dispatchEvent(u)}},[l,r,i]),e("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...d,tabIndex:-1,ref:p,style:{...a.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function re(a){return a?"checked":"unchecked"}var ce=te,xe=ne;const ye=ke("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{admin:["data-[state=checked]:bg-admin","data-[state=unchecked]:bg-primary/30"],staff:["data-[state=checked]:bg-secondary","data-[state=unchecked]:bg-secondary/30"],ward:["data-[state=checked]:bg-primary","data-[state=unchecked]:bg-primary/30"]}},defaultVariants:{variant:"admin"}}),s=c.forwardRef(({className:a,variant:n,...r},i)=>e(ce,{className:B(ye({variant:n}),a),...r,ref:i,children:e(xe,{className:B("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));s.displayName=ce.displayName;try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"admin" | "ward" | "staff" | null'}}}}}catch{}const Te={title:"Atoms/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["admin","staff","ward"],description:"스위치의 색상 variant를 설정합니다"},checked:{control:"boolean",description:"스위치의 on/off 상태를 설정합니다"},disabled:{control:"boolean",description:"스위치의 비활성화 상태를 설정합니다"},onCheckedChange:{action:"checked changed",description:"스위치 상태가 변경될 때 호출되는 함수입니다"}}},k={render:()=>t("div",{className:"space-y-4",children:[t("div",{className:"flex items-center justify-between space-x-4",children:[e("span",{className:"text-sm font-medium",children:"Admin"}),e(s,{variant:"admin",defaultChecked:!0})]}),t("div",{className:"flex items-center justify-between space-x-4",children:[e("span",{className:"text-sm font-medium",children:"Staff"}),e(s,{variant:"staff",defaultChecked:!0})]}),t("div",{className:"flex items-center justify-between space-x-4",children:[e("span",{className:"text-sm font-medium",children:"Ward"}),e(s,{variant:"ward",defaultChecked:!0})]})]})},C={args:{checked:!1}},v={args:{checked:!0}},g={args:{disabled:!0}},w={args:{checked:!0,disabled:!0}},x={render:()=>{const[a,n]=c.useState(!1);return t("div",{className:"flex items-center space-x-2",children:[e(s,{id:"airplane-mode",checked:a,onCheckedChange:n}),e("label",{htmlFor:"airplane-mode",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"비행기 모드"})]})}},y={render:()=>t("div",{className:"space-y-4",children:[t("div",{className:"flex items-center justify-between",children:[e("label",{htmlFor:"notifications",className:"text-sm font-medium leading-none",children:"알림 설정"}),e(s,{id:"notifications",defaultChecked:!0})]}),t("div",{className:"flex items-center justify-between",children:[e("label",{htmlFor:"email-notifications",className:"text-sm font-medium leading-none",children:"이메일 알림"}),e(s,{id:"email-notifications"})]}),t("div",{className:"flex items-center justify-between",children:[e("label",{htmlFor:"marketing-emails",className:"text-sm font-medium leading-none",children:"마케팅 수신 동의"}),e(s,{id:"marketing-emails",disabled:!0})]})]})},N={render:()=>{const[a,n]=c.useState(!1);return e("div",{className:"space-y-4",children:t("div",{className:"flex items-center justify-between space-x-4",children:[e(s,{checked:a,onCheckedChange:n}),t("span",{className:"text-sm",children:["현재 상태: ",a?"On":"Off"]})]})})}};var E,A,F;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Admin</span>
        <Switch variant="admin" defaultChecked />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Staff</span>
        <Switch variant="staff" defaultChecked />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Ward</span>
        <Switch variant="ward" defaultChecked />
      </div>
    </div>
}`,...(F=(A=k.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var R,O,T;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(T=(O=C.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var V,I,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(W=(I=v.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var q,H,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var L,z,G;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(G=(z=w.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var U,X,$;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
        <label htmlFor="airplane-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          비행기 모드
        </label>
      </div>;
  }
}`,...($=(X=x.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="notifications" className="text-sm font-medium leading-none">
            알림 설정
          </label>
          <Switch id="notifications" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <label htmlFor="email-notifications" className="text-sm font-medium leading-none">
            이메일 알림
          </label>
          <Switch id="email-notifications" />
        </div>
        
        <div className="flex items-center justify-between">
          <label htmlFor="marketing-emails" className="text-sm font-medium leading-none">
            마케팅 수신 동의
          </label>
          <Switch id="marketing-emails" disabled />
        </div>
      </div>;
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <Switch checked={checked} onCheckedChange={setChecked} />
          <span className="text-sm">
            현재 상태: {checked ? 'On' : 'Off'}
          </span>
        </div>
      </div>;
  }
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ve=["Variants","Default","Checked","Disabled","CheckedAndDisabled","WithLabel","SwitchGroup","Controlled"];export{v as Checked,w as CheckedAndDisabled,N as Controlled,C as Default,g as Disabled,y as SwitchGroup,k as Variants,x as WithLabel,Ve as __namedExportsOrder,Te as default};
