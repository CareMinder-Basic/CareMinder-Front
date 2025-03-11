import{j as r,a as e}from"./jsx-runtime-Cx_VB7oj.js";import{I as t}from"./Input-D7dVYOj6.js";import"./index-C9rmetsa.js";import"./index-pGBX_OjP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./util-jAU0Cazi.js";import"./index-CNX7-S-j.js";const le={title:"Atoms/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"입력 필드가 비활성화되었는지 여부를 나타냅니다"},placeholder:{control:"text",description:"입력 필드의 플레이스홀더 텍스트를 나타냅니다"},type:{control:"select",options:["text","password","email","number","search","tel","url"],description:"입력 필드의 타입을 나타냅니다"},leftIconPosition:{control:"number",description:"왼쪽 아이콘의 위치를 나타냅니다"},rightIconPosition:{control:"number",description:"오른쪽 아이콘의 위치를 나타냅니다",defaultValue:5},width:{control:"text"},height:{control:"text",description:"입력 필드의 높이를 나타냅니다"},radius:{control:"select",options:["none","sm","md","lg","xl","full"],description:"입력 필드의 모서리 반경을 나타냅니다"},textSize:{control:"select",options:["xs","sm","base","lg","xl","2xl","3xl"],description:"입력 필드의 텍스트 크기를 나타냅니다"},fontWeight:{control:"select",options:["thin","light","normal","medium","semibold","bold","extrabold"],description:"입력 필드의 폰트 두께를 나타냅니다"},status:{control:"select",options:["default","error","success","warning"],description:"입력 필드의 상태를 나타냅니다"}}},o={args:{placeholder:"입력해주세요",width:"300px",height:"40px"}},s={args:{type:"email",placeholder:"example@email.com",width:"300px",height:"40px"}},i={args:{type:"password",placeholder:"비밀번호를 입력해주세요",width:"300px",height:"40px"}},l={args:{type:"search",placeholder:"검색어를 입력해주세요",width:"300px",height:"40px"}},p={render:()=>r("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e("label",{htmlFor:"email",className:"text-sm font-medium leading-none",children:"이메일"}),e(t,{type:"email",id:"email",placeholder:"example@email.com",width:"",height:""})]})},a=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.3-4.3"})]}),Z=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),$=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),c={args:{placeholder:"검색어를 입력하세요",leftIcon:e(a,{}),leftIconPosition:5}},n={args:{placeholder:"검색어를 입력하세요",rightIcon:e(a,{})}},h={args:{placeholder:"검색어를 입력하세요",leftIcon:e(a,{}),rightIcon:e(Z,{})}},d={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{placeholder:"이메일을 입력하세요",leftIcon:e(Z,{}),width:"",height:""}),e(t,{type:"password",placeholder:"비밀번호를 입력하세요",leftIcon:e($,{}),width:"",height:""}),e(t,{placeholder:"검색어를 입력하세요",leftIcon:e(a,{}),width:"",height:""}),e(t,{placeholder:"클릭 가능한 아이콘",rightIcon:e("button",{onClick:()=>alert("clicked!"),className:"hover:text-primary",children:e(a,{})}),width:"",height:""})]})},u={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{radius:"none",placeholder:"No Radius",width:"300px",height:"40px"}),e(t,{radius:"sm",placeholder:"Small Radius",width:"300px",height:"40px"}),e(t,{radius:"md",placeholder:"Medium Radius",width:"300px",height:"40px"}),e(t,{radius:"lg",placeholder:"Large Radius",width:"300px",height:"40px"}),e(t,{radius:"xl",placeholder:"Extra Large Radius",width:"300px",height:"40px"}),e(t,{radius:"full",placeholder:"Full Radius",width:"300px",height:"40px"})]})},x={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{textSize:"xs",placeholder:"Extra Small (12px)",width:"300px",height:"40px"}),e(t,{textSize:"sm",placeholder:"Small (14px)",width:"300px",height:"40px"}),e(t,{textSize:"base",placeholder:"Base (16px)",width:"300px",height:"40px"}),e(t,{textSize:"lg",placeholder:"Large (18px)",width:"300px",height:"40px"}),e(t,{textSize:"xl",placeholder:"Extra Large (20px)",width:"300px",height:"40px"}),e(t,{textSize:"2xl",placeholder:"2XL (24px)",width:"300px",height:"40px"}),e(t,{textSize:"3xl",placeholder:"3XL (30px)",width:"300px",height:"40px"})]})},m={render:()=>r("div",{className:"flex flex-col space-y-4 w-[300px]",children:[e(t,{status:"default",placeholder:"기본 상태",width:"300px",height:"40px"}),e(t,{status:"error",placeholder:"에러 상태",width:"300px",height:"40px"}),e(t,{status:"success",placeholder:"성공 상태",width:"300px",height:"40px"}),e(t,{status:"default",disabled:!0,placeholder:"비활성화 상태",width:"300px",height:"40px"})]})};var g,C,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: '입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,f,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'example@email.com',
    width: '300px',
    height: '40px'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,v,y;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var D,L,b;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: '검색어를 입력해주세요',
    width: '300px',
    height: '40px'
  }
}`,...(b=(L=l.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var k,z,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium leading-none">
        이메일
      </label>
      <Input type="email" id="email" placeholder="example@email.com" width={''} height={''} />
    </div>
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,N,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    leftIconPosition: 5
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,F,V;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    rightIcon: <SearchIcon />
  }
}`,...(V=(F=n.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var j,P,X;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    rightIcon: <EmailIcon />
  }
}`,...(X=(P=h.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var M,T,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input placeholder="이메일을 입력하세요" leftIcon={<EmailIcon />} width={''} height={''} />
      <Input type="password" placeholder="비밀번호를 입력하세요" leftIcon={<LockIcon />} width={''} height={''} />
      <Input placeholder="검색어를 입력하세요" leftIcon={<SearchIcon />} width={''} height={''} />
      <Input placeholder="클릭 가능한 아이콘" rightIcon={<button onClick={() => alert('clicked!')} className="hover:text-primary">
          <SearchIcon />
        </button>} width={''} height={''} />
    </div>
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var O,q,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input radius="none" placeholder="No Radius" width="300px" height="40px" />
      <Input radius="sm" placeholder="Small Radius" width="300px" height="40px" />
      <Input radius="md" placeholder="Medium Radius" width="300px" height="40px" />
      <Input radius="lg" placeholder="Large Radius" width="300px" height="40px" />
      <Input radius="xl" placeholder="Extra Large Radius" width="300px" height="40px" />
      <Input radius="full" placeholder="Full Radius" width="300px" height="40px" />
    </div>
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input textSize="xs" placeholder="Extra Small (12px)" width="300px" height="40px" />
      <Input textSize="sm" placeholder="Small (14px)" width="300px" height="40px" />
      <Input textSize="base" placeholder="Base (16px)" width="300px" height="40px" />
      <Input textSize="lg" placeholder="Large (18px)" width="300px" height="40px" />
      <Input textSize="xl" placeholder="Extra Large (20px)" width="300px" height="40px" />
      <Input textSize="2xl" placeholder="2XL (24px)" width="300px" height="40px" />
      <Input textSize="3xl" placeholder="3XL (30px)" width="300px" height="40px" />
    </div>
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-[300px]">
      <Input status="default" placeholder="기본 상태" width="300px" height="40px" />
      <Input status="error" placeholder="에러 상태" width="300px" height="40px" />
      <Input status="success" placeholder="성공 상태" width="300px" height="40px" />  
      <Input status="default" disabled={true} placeholder="비활성화 상태" width="300px" height="40px" />      
    </div>
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const pe=["Default","Email","Password","Search","WithLabel","WithLeftIcon","WithRightIcon","WithBothIcons","IconInputVariants","AllRadiusVariants","AllTextSizes","StatusVariants"];export{u as AllRadiusVariants,x as AllTextSizes,o as Default,s as Email,d as IconInputVariants,i as Password,l as Search,m as StatusVariants,h as WithBothIcons,p as WithLabel,c as WithLeftIcon,n as WithRightIcon,pe as __namedExportsOrder,le as default};
