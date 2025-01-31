/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        arrowParens: "always",
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: "all",
        bracketSpacing: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        endOfLine: "lf",
      },
    },
  ],
};
