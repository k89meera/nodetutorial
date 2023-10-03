  //json package
const colors=require('colors');
console.log("package.json".green);

//to start nodemon

console.warn("try nodemon with node js");
console.log("code step by step"); 

//   to create api

const http =require('http');
const data =require('./data');
http.createServer((req,res)=>{

  res.writeHead(200,{'content-Type':'application\json'});
  res.write(JSON.stringify(data));
  res.end();
}).listen(5000);


//make files in a folder

const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'files');

for(i=0;i<5;i++)
{
  fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple text file");
}
fs.readdir(dirPath,(err,files)=>{
 files.forEach((item)=>{
    console.log("file name is",item);
  })//
  console.warn(files);
})

//crud with file system



const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;
//  fs.writeFileSync(filepath,'this is simple text file');
  
fs.readFile(filepath,'utf8',(err,item)=>{
 console.log(item);
})

//fs.appendFile(filepath,'  and file name is apple.txt',(err)=>{
// if(!err) console.log("file is updated");
//})

// asynchronous method

console.log("start exe......");

setTimeout(()=>{
  console.log("logic exe....");
},2000)

console.log("complete exe...");

let a=10;
let b=0;


setTimeout(()=>{
  b=20;
},2000)

console.log(a+b);

// asynchronous method resolve


let waitingData= new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(30)
  })
})

  waitingData.then((data)=>{
    console.log(a+data);
  })

  //render html

  const express =require('express');

  const app=express();

  app.get('',(req,res)=>{
    res.send(`<h1>Welcome,This is Home Page</h>
    
        <a href="/about">Go to about page</a>
    
    `); 
  }) 

  app.get('/About',(req,res)=>{
    res.send(`

     <input type="text" placeholder="User Name"/>
     <button>click me</button>
    
    `);
  }) 


  // make html page



  
  const publicpath=path.join(__dirname,'public');
  app.use(express.static(publicpath));

  // app.listen(5000);