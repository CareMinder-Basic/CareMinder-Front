import{a as e,j as C}from"./jsx-runtime-Cx_VB7oj.js";import{r as ie}from"./index-pGBX_OjP.js";import{c as ue}from"./util-jAU0Cazi.js";import{c as pe}from"./index-CNX7-S-j.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";const he=pe("font-pretendard",{variants:{variant:{h1:"text-typography-h1",h2:"text-typography-h2",h3:"text-typography-h3",h4:"text-typography-h4",h5:"text-typography-h5",body1:"text-typography-body1",body2:"text-typography-body2",subtitle1:"text-typography-subtitle1",subtitle2:"text-typography-subtitle2",caption:"text-typography-caption",overline:"text-typography-overline",title:"text-typography-title"},color:{default:"text-text-DEFAULT",primary:"text-primary",secondary:"text-text-secondary",disabled:"text-disabled",white:"text-white",destructive:"text-destructive"},align:{left:"text-left",center:"text-center",right:"text-right"}},defaultVariants:{color:"default",align:"left"}}),t=ie.forwardRef(({className:d,variant:f,color:g,align:l,fontSize:B,fontWeight:m,as:ee="p",...te},ne)=>{const ae=v=>{switch(v){case 100:return"font-thin";case 200:return"font-extralight";case 300:return"font-light";case 400:return"font-normal";case 500:return"font-medium";case 600:return"font-semibold";case 700:return"font-bold";case 800:return"font-extrabold";case 900:return"font-black";default:return`font-[${v}]`}},re=B?`text-[${B/16}rem]`:"",oe=m?ae(m):"";return e(ee,{className:ue("font-pretendard",f?he({variant:f,color:g,align:l}):"",re,oe,g&&`text-${g}`,l&&`text-${l}`,d),ref:ne,...te})});t.displayName="Typography";try{t.displayName="Typography",t.__docgenInfo={description:"",displayName:"Typography",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"keyof IntrinsicElements | ComponentType<any>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"disabled" | "default" | "destructive" | "secondary" | "primary" | "white" | null'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"center" | "left" | "right" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"h2" | "h3" | "caption" | "h1" | "h4" | "h5" | "title" | "body1" | "body2" | "subtitle1" | "subtitle2" | "overline" | null'}}}}}catch{}const de={title:"Atoms/Typography",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","body1","body2","subtitle1","subtitle2","caption","overline","title"]},color:{control:"select",options:["default","primary","secondary","disabled","white","destructive"]},align:{control:"select",options:["left","center","right"]},fontSize:{control:"number",description:"폰트 크기 (px 단위로 입력, 자동으로 rem으로 변환)"},fontWeight:{control:"number",description:"폰트 두께 (100-900)"}}},n={args:{children:"기본 타이포그래피",variant:"body1"}},a={args:{children:"사용자 정의 폰트 크기와 두께",fontSize:24,fontWeight:700}},r={render:()=>C("div",{className:"space-y-4",children:[e(t,{variant:"h1",children:"기본 h1 variant (변형 스타일만 적용)"}),e(t,{variant:"h1",fontSize:24,children:"h1 + fontSize 24px (fontSize가 우선 적용)"}),e(t,{variant:"h1",fontWeight:400,children:"h1 + fontWeight 400 (fontWeight가 우선 적용)"}),e(t,{variant:"h1",fontSize:24,fontWeight:400,children:"h1 + fontSize 24px + fontWeight 400 (둘 다 우선 적용)"})]})},o={render:()=>C("div",{className:"space-y-4",children:[e(t,{variant:"h1",children:"Heading 1"}),e(t,{variant:"h2",children:"Heading 2"}),e(t,{variant:"h3",children:"Heading 3"}),e(t,{variant:"h4",children:"Heading 4"}),e(t,{variant:"h5",children:"Heading 5"}),e(t,{variant:"body1",children:"Body 1"}),e(t,{variant:"body2",children:"Body 2"}),e(t,{variant:"subtitle1",children:"Subtitle 1"}),e(t,{variant:"subtitle2",children:"Subtitle 2"}),e(t,{variant:"caption",children:"Caption"}),e(t,{variant:"overline",children:"Overline"}),e(t,{variant:"title",children:"Title"})]})},i={args:{children:"기본 텍스트(유동)",fontSize:24,fontWeight:400}},u={args:{children:"제목 1 (Heading 1)",fontSize:24,fontWeight:700}},p={args:{variant:"h2",children:"제목 2 (Heading 2)",fontSize:20,fontWeight:700}},h={args:{variant:"body1",children:"본문 1 텍스트입니다. 일반적인 본문에 사용됩니다.",fontSize:16,fontWeight:400}},y={args:{variant:"body2",children:"본문 2 텍스트입니다. 작은 본문에 사용됩니다.",fontSize:14,fontWeight:400}},s={args:{variant:"caption",color:"secondary",children:"캡션 텍스트입니다. 부가 설명에 사용됩니다.",fontSize:12,fontWeight:400}},c={render:()=>C("div",{className:"space-y-4 p-4 max-w-2xl",children:[e(t,{variant:"title",fontSize:32,fontWeight:700,children:"타이틀 텍스트"}),e(t,{variant:"h1",fontSize:24,fontWeight:700,children:"제목 1 (Heading 1)"}),e(t,{variant:"h2",fontSize:20,fontWeight:700,children:"제목 2 (Heading 2)"}),e(t,{variant:"h3",fontSize:18,fontWeight:600,children:"제목 3 (Heading 3)"}),e(t,{variant:"h4",fontSize:16,fontWeight:600,children:"제목 4 (Heading 4)"}),e(t,{variant:"h5",fontSize:14,fontWeight:600,children:"제목 5 (Heading 5)"}),e("div",{className:"h-8"}),e(t,{variant:"subtitle1",fontSize:18,fontWeight:500,children:"부제목 1 (Subtitle 1)"}),e(t,{variant:"body1",fontSize:16,fontWeight:400,children:"본문 1 텍스트입니다. 일반적인 본문에 사용됩니다. 가독성이 좋고 깔끔한 디자인을 제공합니다."}),e(t,{variant:"subtitle2",fontSize:16,fontWeight:500,children:"부제목 2 (Subtitle 2)"}),e(t,{variant:"body2",fontSize:14,fontWeight:400,children:"본문 2 텍스트입니다. 작은 본문에 사용됩니다. 부가적인 정보를 표시할 때 적합합니다."}),e(t,{variant:"caption",fontSize:12,fontWeight:400,color:"secondary",children:"캡션 텍스트입니다. 부가 설명에 사용됩니다."}),e(t,{variant:"overline",fontSize:12,fontWeight:600,color:"primary",children:"오버라인 텍스트"}),e("div",{className:"h-8"}),e(t,{variant:"h3",fontSize:18,fontWeight:600,children:"동적 폰트 크기"}),e(t,{fontSize:40,fontWeight:700,children:"40px 크기의 텍스트"}),e(t,{fontSize:28,fontWeight:500,children:"28px 크기의 텍스트"}),e(t,{fontSize:20,fontWeight:400,children:"20px 크기의 텍스트"}),e("div",{className:"h-8"}),e(t,{variant:"h3",fontSize:18,fontWeight:600,children:"색상 변형"}),e(t,{fontSize:16,fontWeight:400,color:"default",children:"기본 텍스트 색상"}),e(t,{fontSize:16,fontWeight:400,color:"primary",children:"주요 텍스트 색상"}),e(t,{fontSize:16,fontWeight:400,color:"secondary",children:"보조 텍스트 색상"}),e(t,{fontSize:16,fontWeight:400,color:"disabled",children:"비활성화된 텍스트 색상"}),e("div",{className:"bg-gray-800 p-2 mt-2",children:e(t,{fontSize:16,fontWeight:400,color:"white",children:"흰색 텍스트 색상"})}),e(t,{fontSize:16,fontWeight:400,color:"destructive",children:"경고 텍스트 색상"}),e("div",{className:"h-8"}),e(t,{variant:"h3",fontSize:18,fontWeight:600,children:"정렬 옵션"}),e(t,{fontSize:16,fontWeight:400,align:"left",children:"왼쪽 정렬 텍스트"}),e(t,{fontSize:16,fontWeight:400,align:"center",children:"가운데 정렬 텍스트"}),e(t,{fontSize:16,fontWeight:400,align:"right",children:"오른쪽 정렬 텍스트"})]})};var D,S,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: '기본 타이포그래피',
    variant: 'body1'
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,z,W;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: '사용자 정의 폰트 크기와 두께',
    fontSize: 24,
    fontWeight: 700
  }
}`,...(W=(z=a.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var b,x,E;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h1">
        기본 h1 variant (변형 스타일만 적용)
      </Typography>
      <Typography variant="h1" fontSize={24}>
        h1 + fontSize 24px (fontSize가 우선 적용)
      </Typography>
      <Typography variant="h1" fontWeight={400}>
        h1 + fontWeight 400 (fontWeight가 우선 적용)
      </Typography>
      <Typography variant="h1" fontSize={24} fontWeight={400}>
        h1 + fontSize 24px + fontWeight 400 (둘 다 우선 적용)
      </Typography>
    </div>
}`,...(E=(x=r.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var H,F,N;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="title">Title</Typography>
    </div>
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,_,w;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: '기본 텍스트(유동)',
    fontSize: 24,
    fontWeight: 400
  }
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var q,$,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: '제목 1 (Heading 1)',
    fontSize: 24,
    fontWeight: 700
  }
}`,...(j=($=u.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var O,k,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: '제목 2 (Heading 2)',
    fontSize: 20,
    fontWeight: 700
  }
}`,...(I=(k=p.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var P,L,R;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: '본문 1 텍스트입니다. 일반적인 본문에 사용됩니다.',
    fontSize: 16,
    fontWeight: 400
  }
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var U,G,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'body2',
    children: '본문 2 텍스트입니다. 작은 본문에 사용됩니다.',
    fontSize: 14,
    fontWeight: 400
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    color: 'secondary',
    children: '캡션 텍스트입니다. 부가 설명에 사용됩니다.',
    fontSize: 12,
    fontWeight: 400
  }
}`,...(Q=(M=s.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4 max-w-2xl">
      <Typography variant="title" fontSize={32} fontWeight={700}>타이틀 텍스트</Typography>
      <Typography variant="h1" fontSize={24} fontWeight={700}>제목 1 (Heading 1)</Typography>
      <Typography variant="h2" fontSize={20} fontWeight={700}>제목 2 (Heading 2)</Typography>
      <Typography variant="h3" fontSize={18} fontWeight={600}>제목 3 (Heading 3)</Typography>
      <Typography variant="h4" fontSize={16} fontWeight={600}>제목 4 (Heading 4)</Typography>
      <Typography variant="h5" fontSize={14} fontWeight={600}>제목 5 (Heading 5)</Typography>
      
      <div className="h-8" />
      
      <Typography variant="subtitle1" fontSize={18} fontWeight={500}>부제목 1 (Subtitle 1)</Typography>
      <Typography variant="body1" fontSize={16} fontWeight={400}>
        본문 1 텍스트입니다. 일반적인 본문에 사용됩니다. 가독성이 좋고 깔끔한 디자인을 제공합니다.
      </Typography>
      
      <Typography variant="subtitle2" fontSize={16} fontWeight={500}>부제목 2 (Subtitle 2)</Typography>
      <Typography variant="body2" fontSize={14} fontWeight={400}>
        본문 2 텍스트입니다. 작은 본문에 사용됩니다. 부가적인 정보를 표시할 때 적합합니다.
      </Typography>
      
      <Typography variant="caption" fontSize={12} fontWeight={400} color="secondary">
        캡션 텍스트입니다. 부가 설명에 사용됩니다.
      </Typography>
      
      <Typography variant="overline" fontSize={12} fontWeight={600} color="primary">
        오버라인 텍스트
      </Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>동적 폰트 크기</Typography>
      <Typography fontSize={40} fontWeight={700}>40px 크기의 텍스트</Typography>
      <Typography fontSize={28} fontWeight={500}>28px 크기의 텍스트</Typography>
      <Typography fontSize={20} fontWeight={400}>20px 크기의 텍스트</Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>색상 변형</Typography>
      <Typography fontSize={16} fontWeight={400} color="default">기본 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="primary">주요 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="secondary">보조 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="disabled">비활성화된 텍스트 색상</Typography>
      <div className="bg-gray-800 p-2 mt-2">
        <Typography fontSize={16} fontWeight={400} color="white">흰색 텍스트 색상</Typography>
      </div>
      <Typography fontSize={16} fontWeight={400} color="destructive">경고 텍스트 색상</Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>정렬 옵션</Typography>
      <Typography fontSize={16} fontWeight={400} align="left">왼쪽 정렬 텍스트</Typography>
      <Typography fontSize={16} fontWeight={400} align="center">가운데 정렬 텍스트</Typography>
      <Typography fontSize={16} fontWeight={400} align="right">오른쪽 정렬 텍스트</Typography>
    </div>
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const fe=["Default","CustomFontSize","PriorityExample","AllVariants","Text","Heading1","Heading2","Body1","Body2","Caption","AllTypography"];export{c as AllTypography,o as AllVariants,h as Body1,y as Body2,s as Caption,a as CustomFontSize,n as Default,u as Heading1,p as Heading2,r as PriorityExample,i as Text,fe as __namedExportsOrder,de as default};
