/**
 * /providers
 *
 * 전역 Provider 컴포넌트들을 포함하는 폴더
 * - React Query Provider
 * - Theme Provider
 * - Auth Provider
 * - Modal Provider 등
 *
 * 주로 _app.tsx나 layout.tsx에서 사용되는 래퍼 컴포넌트들
 */

export { default as QueryProvider } from './provider-query';
export { default as ErrorProvider } from './provider-error';
export { default as StaffAuthProvider } from './provider-staffAuth';
export { default as WardAuthProvider } from './provider-wardAuth';
