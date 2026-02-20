const fs = require("fs")

console.log(fs.readFileSync("hello.txt","utf-8"))

let data = fs.readFile("hello.txt","utf-8",function(err,data){
    if(err) throw err;
    console.log(data)
})

fs.writeFileSync("hello.txt","Hello world","utf-8") 

console.log(fs.readFileSync("hello.txt","utf-8"))