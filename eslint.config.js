import tseslint from "typescript-eslint";

export default tseslint.config([
  { ignores: ["eslint.config.js"] },
  tseslint.configs.strictTypeCheckedOnly,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
