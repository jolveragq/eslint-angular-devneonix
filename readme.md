# ESLINT ANGULAR DEVNEONIX
> Hi everyone this tool is a eslint extension for angular projects.
###### Instalation
> Terminal
```
$ npm install -D eslint-angular-devneonix
```
> eslintrc.js or eslintrc.json
```javascript
    {
        "files": ["*.ts", "*.tsx"],
        "extends": [
            ...
            "./node_modules/eslint-angular-devneonix/index.js" // Add this line (use relative path)
        ],
        "rules": {},
        "parserOptions": { // Add this line
            "project": ["tsconfig.app.json"] // Add this line
        } // Add this line (use relative path)
    },
    {
      "files": ["*.html"],
      "extends": [
        ...
        "./node_modules/eslint-angular-devneonix/index.js" // Add this line (use relative path)
      ],
      "rules": {}
    }
```