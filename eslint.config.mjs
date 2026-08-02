import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...nextVitals, prettier]);

export default eslintConfig;
