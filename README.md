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

> ![alt text](./error/babel-node.jpg) 
> <br />
> run command line line : `npm i -g babel-cli `

# Setup mongodb for Windows
1. Download [MongoDB Community](https://www.mongodb.com/try/download/community)

1. Download [GUI Robo3T](https://robomongo.org/) not Studio Robo3T

# Setup mongodb for Macos

1. Run command line <br />
    ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
2. brew tap mongodb/brew
3. brew install mongodb-community
4. brew services start mongodb-community
