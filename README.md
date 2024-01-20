# TICKET API

**This project consits in an API where you can consume or get information about tickets, purchases, check-in and among others**

*Steps used by the creation of the project*
    `npm init -y`
    *It helps to handle when we create scripts on a easy way*
    `npm install express`
    *It helps me to watch what petitions the server makes*
    `npm install morgan`
    *It generates html pages*
    `npm install ejs`
    *It helps to handle some info variety within the methods (PUT, PATCH, DELETE, GET, UPDATE)*
    **express, morgan and ejs are production modules**

**Development modules/dependecies:**
    `npm i nodemon -D`
    *We must specify "-D" because this is a development module*
    *This also helps me to restart the server wuthout disconnect from console with the next command line:*
    `npx nodemon src/index.js`
    *But we've added a script into "packaje.json" like this:*
    `"dev": "nodemon src/index.js"`
    *Now whenever I want to run nodemon, I'll use the next command line instead of before mentioned(or both if you prefer):*
    `npm run dev`

**Adding new feauture into package.json**
    *With the next feauture we tell to node: 'we're going to work with "imports" and "exports" so I don't need to type -require- and thus use the word -import- or -export-'. You must add below of "main": "index.js", or similar*
    `"type": "module",`
    

**More info:**
https://www.youtube.com/watch?v=OVESuyVoPkI
