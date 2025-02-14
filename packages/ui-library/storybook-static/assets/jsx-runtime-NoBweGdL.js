import{r as j}from"./index-C9rmetsa.js";var o={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function O(){if(p)return t;p=1;var x=j(),c=Symbol.for("react.element"),R=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function f(n,e,_){var r,u={},s=null,a=null;_!==void 0&&(s=""+_),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)d.call(e,r)&&!y.hasOwnProperty(r)&&(u[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)u[r]===void 0&&(u[r]=e[r]);return{$$typeof:c,type:n,key:s,ref:a,props:u,_owner:l.current}}return t.Fragment=R,t.jsx=f,t.jsxs=f,t}var m;function v(){return m||(m=1,o.exports=O()),o.exports}var i=v();const q=i.Fragment,h=i.jsx,k=i.jsxs;export{q as F,k as a,h as j};
