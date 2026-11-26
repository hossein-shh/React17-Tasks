import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  // پوشه‌هایی که ESLint نباید بررسی کند
  { ignores: ["dist", "node_modules"] },

  // قوانین آماده
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],

  // تنظیمات پروژه ما
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // فعلاً از PropTypes استفاده نمی‌کنیم (بعداً یاد می‌گیری)
      "react/prop-types": "off",
    },
  },

  // این مورد باید آخر باشد: تداخل ESLint و Prettier را برطرف می‌کند
  prettier,
];
