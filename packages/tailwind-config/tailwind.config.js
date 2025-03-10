const { fontFamily } = require('@careminder/fonts');

const colors = {
  primary: {
    DEFAULT: '#5D6DBE', // a60
    light: '#AFB6DB', // a90
    paleLight: 'rgba(96, 122, 255, 1)',
    dark: '#000000', // a0
    95: '#EFF1F9', // a95
    foreground: '#FFFFFF', // a100
  },
  secondary: {
    DEFAULT: '#30B4FF', // status.wait
    foreground: '#FFFFFF',
  },
  destructive: {
    DEFAULT: '#F24679', // error
  },
  text: {
    DEFAULT: '#5E5F65',
    secondary: '#5D6DBE',
    dark: '#000000',
  },
  background: {
    DEFAULT: '#F5F5F5',
    paper: '#FFFFFF',
  },
  border: {
    DEFAULT: '#ECECEC',
  },
  disabled: '#C4C5CC',
  admin: '#5DB8BE',
  status: {
    wait: '#30B4FF',
    excute: '#F24679',
    finish: '#5E5F65',
  },
  input: {
    error: '#FF000099',
    success: '#0FBC0C99',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        pretendard: [fontFamily.pretendard],
        sans: [fontFamily.pretendard],
      },
      fontSize: {
        // Typography variants
        'typography-h1': [
          '1.5rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-h2': [
          '1.125rem',
          { lineHeight: '1.44', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-h3': [
          '1rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-h4': [
          '0.875rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-h5': [
          '0.8125rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-title': [
          '2rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'typography-body1': [
          '0.875rem',
          { lineHeight: '1.42', letterSpacing: '-0.03em' },
        ],
        'typography-body2': [
          '0.8125rem',
          { lineHeight: '1.54', letterSpacing: '-0.03em' },
        ],
        'typography-subtitle1': [
          '1rem',
          { lineHeight: '1.5', letterSpacing: '-0.03em' },
        ],
        'typography-subtitle2': [
          '0.875rem',
          { lineHeight: '1.42', letterSpacing: '-0.03em' },
        ],
        'typography-caption': [
          '0.75rem',
          { lineHeight: '1.3', letterSpacing: '-0.03em' },
        ],
        'typography-overline': [
          '0.875rem',
          { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
      },
      borderRadius: {
        input: '12px',
        button: '6px',
      },
      spacing: {
        'button-padding': '6px 16px',
        'form-gap': '8px',
        'form-margin-top': '24px',
      },
      opacity: {
        disabled: '0.6',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      components: {
        '.btn': {
          fontWeight: '600',
          padding: '6px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.03em',
        },
        '.input': {
          fontSize: '16px',
          borderRadius: '12px',
          '&.disabled': {
            backgroundColor: 'colors.background.DEFAULT',
            borderColor: 'colors.disabled',
          },
        },
        '.link': {
          textDecoration: 'none',
          color: 'colors.text.DEFAULT',
          opacity: '0.6',
        },
        '.form-label': {
          color: 'colors.primary.dark',
          position: 'relative',
          fontWeight: '600',
          fontSize: '14px',
        },
        '.form-control': {
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
        },
        '.checkbox': {
          padding: '0',
          borderRadius: '4px',
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-in',
        'slide-in-from-top': 'slide-in-from-top 0.2s ease-out',
        'slide-out-to-top': 'slide-out-to-top 0.2s ease-in',
        'slide-in-from-left': 'slide-in-from-left 0.2s ease-out',
        'slide-out-to-left': 'slide-out-to-left 0.2s ease-in',
        'zoom-in': 'zoom-in 0.2s ease-out',
        'zoom-out': 'zoom-out 0.2s ease-in',
        in: 'in 0.2s ease-out',
        out: 'out 0.2s ease-in',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'slide-in-from-top': {
          from: { transform: 'translateY(-10%)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-10%)' },
        },
        'slide-in-from-left': {
          from: { transform: 'translateX(-10%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-to-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-10%)' },
        },
        'zoom-in': {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
        'zoom-out': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0.95)' },
        },
        in: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        out: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
