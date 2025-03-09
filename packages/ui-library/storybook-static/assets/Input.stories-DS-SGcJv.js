import{j as r,a as e}from"./jsx-runtime-Cx_VB7oj.js";import{I as t}from"./Input-CF6t1RVu.js";import"./index-C9rmetsa.js";import"./index-pGBX_OjP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./util-BRMhMjhB.js";const ye={title:"Atoms/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"},type:{control:"select",options:["text","password","email","number","search","tel","url"]},width:{control:"text"},height:{control:"text"},radius:{control:"select",options:["none","sm","md","lg","xl","full"]},textSize:{control:"select",options:["xs","sm","base","lg","xl","2xl","3xl"]},fontWeight:{control:"select",options:["thin","light","normal","medium","semibold","bold","extrabold"]}}},i={args:{placeholder:"입력해주세요",width:"300px",height:"40px"}},h={args:{placeholder:"비활성화된 입력 필드",disabled:!0,width:"300px",height:"40px"}},o={args:{type:"email",placeholder:"example@email.com",width:"300px",height:"40px"}},l={args:{type:"password",placeholder:"비밀번호를 입력해주세요",width:"300px",height:"40px"}},p={args:{type:"search",placeholder:"검색어를 입력해주세요",width:"300px",height:"40px"}},d={args:{placeholder:"에러 상태",className:"border-destructive","aria-invalid":!0,width:"300px",height:"40px"}},s={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{placeholder:"기본 입력 필드",width:"",height:""}),e(t,{placeholder:"비활성화된 입력 필드",disabled:!0,width:"",height:""}),e(t,{type:"email",placeholder:"이메일 입력",width:"",height:""}),e(t,{type:"password",placeholder:"비밀번호 입력",width:"",height:""}),e(t,{type:"search",placeholder:"검색어 입력",width:"",height:""}),e(t,{placeholder:"에러 상태",className:"border-destructive","aria-invalid":!0,width:"",height:""})]})},n={render:()=>r("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e("label",{htmlFor:"email",className:"text-sm font-medium leading-none",children:"이메일"}),e(t,{type:"email",id:"email",placeholder:"example@email.com",width:"",height:""})]})},a=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.3-4.3"})]}),B=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),Ie=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),c={args:{placeholder:"검색어를 입력하세요",leftIcon:e(a,{})}},u={args:{placeholder:"검색어를 입력하세요",rightIcon:e(a,{})}},x={args:{placeholder:"검색어를 입력하세요",leftIcon:e(a,{}),rightIcon:e(B,{})}},g={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{placeholder:"이메일을 입력하세요",leftIcon:e(B,{}),width:"",height:""}),e(t,{type:"password",placeholder:"비밀번호를 입력하세요",leftIcon:e(Ie,{}),width:"",height:""}),e(t,{placeholder:"검색어를 입력하세요",leftIcon:e(a,{}),width:"",height:""}),e(t,{placeholder:"클릭 가능한 아이콘",rightIcon:e("button",{onClick:()=>alert("clicked!"),className:"hover:text-primary",children:e(a,{})}),width:"",height:""})]})},m={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{radius:"none",placeholder:"No Radius",width:"300px",height:"40px"}),e(t,{radius:"sm",placeholder:"Small Radius",width:"300px",height:"40px"}),e(t,{radius:"md",placeholder:"Medium Radius",width:"300px",height:"40px"}),e(t,{radius:"lg",placeholder:"Large Radius",width:"300px",height:"40px"}),e(t,{radius:"xl",placeholder:"Extra Large Radius",width:"300px",height:"40px"}),e(t,{radius:"full",placeholder:"Full Radius",width:"300px",height:"40px"})]})},w={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{radius:"full",placeholder:"Search with rounded corners",leftIcon:e(a,{}),width:"300px",height:"40px"}),e(t,{radius:"lg",placeholder:"Email with large radius",leftIcon:e(B,{}),width:"300px",height:"40px"}),e(t,{radius:"none",placeholder:"Password with no radius",leftIcon:e(Ie,{}),width:"300px",height:"40px"})]})},C={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{textSize:"xs",placeholder:"Extra Small (12px)",width:"300px",height:"40px"}),e(t,{textSize:"sm",placeholder:"Small (14px)",width:"300px",height:"40px"}),e(t,{textSize:"base",placeholder:"Base (16px)",width:"300px",height:"40px"}),e(t,{textSize:"lg",placeholder:"Large (18px)",width:"300px",height:"40px"}),e(t,{textSize:"xl",placeholder:"Extra Large (20px)",width:"300px",height:"40px"}),e(t,{textSize:"2xl",placeholder:"2XL (24px)",width:"300px",height:"40px"}),e(t,{textSize:"3xl",placeholder:"3XL (30px)",width:"300px",height:"40px"})]})},I={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{fontWeight:"thin",placeholder:"Thin Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"light",placeholder:"Light Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"normal",placeholder:"Normal Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"medium",placeholder:"Medium Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"semibold",placeholder:"Semibold Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"bold",placeholder:"Bold Font Weight",width:"300px",height:"40px"}),e(t,{fontWeight:"extrabold",placeholder:"Extra Bold Font Weight",width:"300px",height:"40px"})]})},f={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{textSize:"2xl",fontWeight:"bold",placeholder:"2XL Bold",width:"300px",height:"40px"}),e(t,{textSize:"base",fontWeight:"medium",placeholder:"Base Medium",width:"300px",height:"40px"}),e(t,{textSize:"xs",fontWeight:"light",placeholder:"XS Light",width:"300px",height:"40px"})]})};var S,W,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: '입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(v=(W=i.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var b,y,D;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: '비활성화된 입력 필드',
    disabled: true,
    width: '300px',
    height: '40px'
  }
}`,...(D=(y=h.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var L,N,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'example@email.com',
    width: '300px',
    height: '40px'
  }
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,z,A;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var k,R,X;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: '검색어를 입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(X=(R=p.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var M,T,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: '에러 상태',
    className: 'border-destructive',
    'aria-invalid': true,
    width: '300px',
    height: '40px'
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var j,P,_;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input placeholder="기본 입력 필드" width={''} height={''} />
      <Input placeholder="비활성화된 입력 필드" disabled width={''} height={''} />
      <Input type="email" placeholder="이메일 입력" width={''} height={''} />
      <Input type="password" placeholder="비밀번호 입력" width={''} height={''} />
      <Input type="search" placeholder="검색어 입력" width={''} height={''} />
      <Input placeholder="에러 상태" className="border-destructive" aria-invalid width={''} height={''} />
    </div>
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,q,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium leading-none">
        이메일
      </label>
      <Input type="email" id="email" placeholder="example@email.com" width={''} height={''} />
    </div>
}`,...(G=(q=n.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    rightIcon: <SearchIcon />
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    rightIcon: <EmailIcon />
  }
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input placeholder="이메일을 입력하세요" leftIcon={<EmailIcon />} width={''} height={''} />
      <Input type="password" placeholder="비밀번호를 입력하세요" leftIcon={<LockIcon />} width={''} height={''} />
      <Input placeholder="검색어를 입력하세요" leftIcon={<SearchIcon />} width={''} height={''} />
      <Input placeholder="클릭 가능한 아이콘" rightIcon={<button onClick={() => alert('clicked!')} className="hover:text-primary">
          <SearchIcon />
        </button>} width={''} height={''} />
    </div>
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,he,oe;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input radius="none" placeholder="No Radius" width="300px" height="40px" />
      <Input radius="sm" placeholder="Small Radius" width="300px" height="40px" />
      <Input radius="md" placeholder="Medium Radius" width="300px" height="40px" />
      <Input radius="lg" placeholder="Large Radius" width="300px" height="40px" />
      <Input radius="xl" placeholder="Extra Large Radius" width="300px" height="40px" />
      <Input radius="full" placeholder="Full Radius" width="300px" height="40px" />
    </div>
}`,...(oe=(he=m.parameters)==null?void 0:he.docs)==null?void 0:oe.source}}};var le,pe,de;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input radius="full" placeholder="Search with rounded corners" leftIcon={<SearchIcon />} width="300px" height="40px" />
      <Input radius="lg" placeholder="Email with large radius" leftIcon={<EmailIcon />} width="300px" height="40px" />
      <Input radius="none" placeholder="Password with no radius" leftIcon={<LockIcon />} width="300px" height="40px" />
    </div>
}`,...(de=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var se,ne,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input textSize="xs" placeholder="Extra Small (12px)" width="300px" height="40px" />
      <Input textSize="sm" placeholder="Small (14px)" width="300px" height="40px" />
      <Input textSize="base" placeholder="Base (16px)" width="300px" height="40px" />
      <Input textSize="lg" placeholder="Large (18px)" width="300px" height="40px" />
      <Input textSize="xl" placeholder="Extra Large (20px)" width="300px" height="40px" />
      <Input textSize="2xl" placeholder="2XL (24px)" width="300px" height="40px" />
      <Input textSize="3xl" placeholder="3XL (30px)" width="300px" height="40px" />
    </div>
}`,...(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ue,xe,ge;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input fontWeight="thin" placeholder="Thin Font Weight" width="300px" height="40px" />
      <Input fontWeight="light" placeholder="Light Font Weight" width="300px" height="40px" />
      <Input fontWeight="normal" placeholder="Normal Font Weight" width="300px" height="40px" />
      <Input fontWeight="medium" placeholder="Medium Font Weight" width="300px" height="40px" />
      <Input fontWeight="semibold" placeholder="Semibold Font Weight" width="300px" height="40px" />
      <Input fontWeight="bold" placeholder="Bold Font Weight" width="300px" height="40px" />
      <Input fontWeight="extrabold" placeholder="Extra Bold Font Weight" width="300px" height="40px" />
    </div>
}`,...(ge=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var me,we,Ce;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input textSize="2xl" fontWeight="bold" placeholder="2XL Bold" width="300px" height="40px" />
      <Input textSize="base" fontWeight="medium" placeholder="Base Medium" width="300px" height="40px" />
      <Input textSize="xs" fontWeight="light" placeholder="XS Light" width="300px" height="40px" />
    </div>
}`,...(Ce=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};const De=["Default","Disabled","Email","Password","Search","WithError","AllVariants","WithLabel","WithLeftIcon","WithRightIcon","WithBothIcons","IconInputVariants","AllRadiusVariants","IconWithRadius","AllTextSizes","AllFontWeights","TextSizeWithFontWeight"];export{I as AllFontWeights,m as AllRadiusVariants,C as AllTextSizes,s as AllVariants,i as Default,h as Disabled,o as Email,g as IconInputVariants,w as IconWithRadius,l as Password,p as Search,f as TextSizeWithFontWeight,x as WithBothIcons,d as WithError,n as WithLabel,c as WithLeftIcon,u as WithRightIcon,De as __namedExportsOrder,ye as default};
