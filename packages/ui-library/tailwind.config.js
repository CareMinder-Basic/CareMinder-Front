import tailwindConfig from '@careminder/tailwind-config';
// import type { Config } from 'tailwindcss';
module.exports = {
  presets: [tailwindConfig], // 공통 설정을 프리셋으로 적용
  darkMode: ['selector'],
  content: [
    `./src/**/*.{js,ts,jsx,tsx}`,
    '../../packages/config/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-library/components/**/*.{ts,tsx}',
  ],
  safelist: [
    {
      pattern: /^text-\[.*\]$/, // text-[*] 패턴의 모든 클래스를 포함
    },
  ],
};
