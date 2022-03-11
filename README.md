# Setup Babel
1. npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0
2. create file .babelrc in root folder<br />

    `
        {
            "presets": ["env","stage-0"]
        }
    `
3. package.json

    `
        "script": "nodemon ./src/app.js --exec babel-node -e js" 
    `

> neu loi babel-node <br />
> ![alt text](./error/babel-node.jpg)
> `npm i -g babel-node `