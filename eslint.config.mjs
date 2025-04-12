import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    }
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    ignores: [
      '**/node_modules/',
      '.next/',
      'out/',
      'dist/'
    ]
  }
]);