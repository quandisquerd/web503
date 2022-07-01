# Setup folder
# Setup environment
1. npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0 dotenv
2. npm i express mongoose
3. create file .babelrc in root folder<br />

    `
        {
            "presets": ["env","stage-0"]
        }
    `
4. package.json

    `
        "script": "nodemon ./src/app.js --exec babel-node -e js" 
    `
5. app.js
   `
    import 'dotenv\config'
   `
> ![alt text](https://res.cloudinary.com/ecommercer2021/image/upload/v1656487859/babel-node_gdvaek.jpg) 
> <br />
> run command line line : `npm i -g babel-cli `

# Setup mongodb & Robo3T for Windows
1. Download [MongoDB Community](https://www.mongodb.com/try/download/communit

# Setup mongodb for Macos

1. Run command line <br />
    ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
2. brew tap mongodb/brew
3. brew install mongodb-community
4. brew services start mongodb-community
5. Download [GUI Robo3T](https://robomongo.org/) not Studio Robo3T
