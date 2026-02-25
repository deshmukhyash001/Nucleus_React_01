const server = require("express")
const app = server()

const {check_directory,directory_login} = require("./mod")
console.log(check_directory("dumy"))

app.get("/file/check_child",(req,res)=>{
    const dirname = req.query.dirname

    let child_info = check_directory(dirname)
    let message = child_info[1]
    let list = child_info[0]

    res.json({
        "message":message,
        "child_list":list
        }
    )
})

app.get("/file/dir_login",(req,res)=>{

    let message = directory_login()

    res.json({
        "message":message,
        }
    )
})

// localhost:3000/file/check_child?dirname="dumy"

app.listen(3000,()=>{
    console.log("App is running on port 3000")
})