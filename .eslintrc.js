module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    "comma-spacing": 0,
    quotes: 0,
    "no-trailing-spaces": 0,
    indent: 0,
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "space-in-parens": 0,
    "arrow-spacing": 0,
    semi: 0,
    "block-spacing": 0,
    "comma-dangle": 0,
    "brace-style": 0,
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "keyword-spacing": 0,
    "space-infix-ops": 0,
    "computed-property-spacing": 0,
    "eol-last": 0,
    "object-curly-spacing": 0,
    "object-curly-newline": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/require-default-prop": 0,
    "vue/no-v-html": 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": 0,
    "array-bracket-spacing": 0,
    "no-multi-spaces": 0,
    "one-var": 0,
    camelcase: 0,
    "no-irregular-whitespace": 0,
    // npm run lint -- --fix
  },
};
