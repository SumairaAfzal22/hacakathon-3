import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
{
  export default {
  rules: {
    'react/no-unescaped-entities': ['warn', { forbid: ['>', '}'] }], // Customize what to forbid
  },
};




export default eslintConfig;
