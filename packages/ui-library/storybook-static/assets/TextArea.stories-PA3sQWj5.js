import{a as e,j as r}from"./jsx-runtime-Cx_VB7oj.js";import{r as _}from"./index-pGBX_OjP.js";import{c as S}from"./util-jAU0Cazi.js";import{c as V}from"./index-CNX7-S-j.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";const W=V("rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",{variants:{variant:{admin:["focus:outline-none focus:border-admin focus:ring-1 focus:ring-admin"],staff:["focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"],ward:["focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"]}},defaultVariants:{variant:"admin"}}),a=_.forwardRef(({className:d,width:o,height:c,variant:T,...D},E)=>e("textarea",{className:S(W({variant:T}),d),style:{width:o?`${o}px`:"100%",height:c?`${c}px`:"80px"},ref:E,...D}));a.displayName="Textarea";try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"admin" | "ward" | "staff" | null'}}}}}catch{}const z={title:"Atoms/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["admin","staff","ward"],description:"TextArea의 포커스 색상 variant를 설정합니다"},width:{control:"number",description:"TextArea의 너비를 픽셀 단위로 설정합니다"},height:{control:"number",description:"TextArea의 높이를 픽셀 단위로 설정합니다"},disabled:{control:"boolean",description:"TextArea의 비활성화 상태를 설정합니다"},placeholder:{control:"text",description:"placeholder 텍스트를 설정합니다"}}},t={args:{placeholder:"메모를 입력해주세요.",width:327,height:80,variant:"admin"}},s={args:{placeholder:"메모를 입력해주세요.",width:327,height:160}},n={render:()=>r("div",{className:"space-y-4 ",children:[r("div",{className:"space-y-2 flex flex-col",children:[e("label",{className:"text-sm font-medium",children:"Admin Textarea"}),e(a,{variant:"admin",placeholder:"Admin 포커스 색상",width:327,height:80})]}),r("div",{className:"space-y-2 flex flex-col",children:[e("label",{className:"text-sm font-medium",children:"Staff Textarea"}),e(a,{variant:"staff",placeholder:"Staff 포커스 색상",width:327,height:80})]}),r("div",{className:"space-y-2 flex flex-col",children:[e("label",{className:"text-sm font-medium",children:"Ward Textarea"}),e(a,{variant:"ward",placeholder:"Ward 포커스 색상",width:327,height:80})]})]})},l={args:{disabled:!0,placeholder:"비활성화된 상태",width:327,height:80,value:"수정할 수 없는 내용입니다."}},i={render:()=>r("div",{className:"space-y-2 flex flex-col",children:[e("label",{htmlFor:"message",className:"text-sm font-medium",children:"메모"}),e(a,{id:"message",placeholder:"메모를 입력해주세요.",width:327,height:80})]})};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: '메모를 입력해주세요.',
    width: 327,
    height: 80,
    variant: 'admin'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,f,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: '메모를 입력해주세요.',
    width: 327,
    height: 160
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,g,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 ">
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Admin Textarea</label>
        <Textarea variant="admin" placeholder="Admin 포커스 색상" width={327} height={80} />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Staff Textarea</label>
        <Textarea variant="staff" placeholder="Staff 포커스 색상" width={327} height={80} />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Ward Textarea</label>
        <Textarea variant="ward" placeholder="Ward 포커스 색상" width={327} height={80} />
      </div>
    </div>
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '비활성화된 상태',
    width: 327,
    height: 80,
    value: '수정할 수 없는 내용입니다.'
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var A,N,B;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 flex flex-col">
      <label htmlFor="message" className="text-sm font-medium">
        메모
      </label>
      <Textarea id="message" placeholder="메모를 입력해주세요." width={327} height={80} />
    </div>
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const I=["Default","Large","Variants","Disabled","WithLabel"];export{t as Default,l as Disabled,s as Large,n as Variants,i as WithLabel,I as __namedExportsOrder,z as default};
