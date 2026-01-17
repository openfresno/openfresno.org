import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...nextVitals]);

export default eslintConfig;
