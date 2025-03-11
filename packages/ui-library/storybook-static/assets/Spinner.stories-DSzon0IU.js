import{a as e,j as s}from"./jsx-runtime-Cx_VB7oj.js";import{r as C}from"./index-pGBX_OjP.js";import{c as d}from"./util-jAU0Cazi.js";import{c as W}from"./createLucideIcon-HGHrfBBx.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],L=W("LoaderCircle",A),a=C.forwardRef(({className:m,size:y="md",variant:h="admin",...w},_)=>{const V={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"},j={admin:"text-admin",staff:"text-secondary",ward:"text-primary"};return e("div",{ref:_,className:d("flex items-center justify-center",m),...w,children:e(L,{className:d("animate-spin",V[y],j[h])})})});a.displayName="Spinner";try{a.displayName="Spinner",a.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"admin"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"admin"'},{value:'"ward"'},{value:'"staff"'}]}}}}}catch{}const O={title:"Atoms/Spinner",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["admin","staff","ward"],description:"스피너의 색상 variant를 설정합니다"},size:{control:"select",options:["sm","md","lg"],description:"스피너의 크기를 설정합니다"}}},n={args:{variant:"admin",size:"md"}},i={render:()=>s("div",{className:"flex items-center space-x-4",children:[e(a,{variant:"admin"}),e(a,{variant:"staff"}),e(a,{variant:"ward"})]})},r={render:()=>s("div",{className:"flex items-center space-x-4",children:[e(a,{size:"sm"}),e(a,{size:"md"}),e(a,{size:"lg"})]})},t={render:()=>s("div",{className:"space-y-4",children:[s("div",{className:"space-y-2",children:[e("p",{className:"text-sm font-medium",children:"Admin"}),s("div",{className:"flex items-center space-x-4",children:[e(a,{variant:"admin",size:"sm"}),e(a,{variant:"admin",size:"md"}),e(a,{variant:"admin",size:"lg"})]})]}),s("div",{className:"space-y-2",children:[e("p",{className:"text-sm font-medium",children:"Staff"}),s("div",{className:"flex items-center space-x-4",children:[e(a,{variant:"staff",size:"sm"}),e(a,{variant:"staff",size:"md"}),e(a,{variant:"staff",size:"lg"})]})]}),s("div",{className:"space-y-2",children:[e("p",{className:"text-sm font-medium",children:"Ward"}),s("div",{className:"flex items-center space-x-4",children:[e(a,{variant:"ward",size:"sm"}),e(a,{variant:"ward",size:"md"}),e(a,{variant:"ward",size:"lg"})]})]})]})};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'admin',
    size: 'md'
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var o,v,f;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Spinner variant="admin" />
      <Spinner variant="staff" />
      <Spinner variant="ward" />
    </div>
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var u,x,z;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(z=(x=r.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var N,S,g;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Admin</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="admin" size="sm" />
          <Spinner variant="admin" size="md" />
          <Spinner variant="admin" size="lg" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Staff</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="staff" size="sm" />
          <Spinner variant="staff" size="md" />
          <Spinner variant="staff" size="lg" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Ward</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="ward" size="sm" />
          <Spinner variant="ward" size="md" />
          <Spinner variant="ward" size="lg" />
        </div>
      </div>
    </div>
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const R=["Default","Variants","Sizes","VariantsWithSizes"];export{n as Default,r as Sizes,i as Variants,t as VariantsWithSizes,R as __namedExportsOrder,O as default};
