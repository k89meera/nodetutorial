const app = require('./app')
//console.log(app);


//var x = 20;
const arr=[2,3,4,5,6,7,3,3,9];

  //  console.log(arr[1]);
 let result= arr.filter((item)=>{
   return item===3

  })
    console.log(result);
    const fs=require('fs');
    console.log("code step by step");

    fs.writeFileSync("hello2.txt","like and subscribe")
    const http = require('http');

    http.createServer((req,res)=>{
        res.write("<h1>Hello, World</h1>");
        res.end();
    }).listen(4500);



