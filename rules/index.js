module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      "files": ["*.ts"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "./base",
        "./prefer-arrow",
        "./regex",
        "./typescript",
        "./angular",
        "./deprecation",
        "./jsdoc",
        "./rxjs",
        "./ngrx"
      ],
      "rules": {

      }
    },
    {
      "files": ["*.html"],
      "parser": "@angular-eslint/template-parser",
      "extends": [
        "plugin:prettier/recommended",
        "./templates",
        "./html"
      ]
    },
    {
      "files": [
        "*.spec.ts",
        "*.test.module.ts"
      ],
      "extends": [
        "./jest"
      ]
    }
  ],
};
