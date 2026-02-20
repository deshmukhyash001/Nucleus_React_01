/** 
 * PROJECT TITLE : OS FILE UTILITI
 * AUTHER : NUCLEUS PROGRAMMING
 * DATE : 16/02/2026
 * MODULE USED : FS
 * **/

const FS = require("fs")
const path = require("path")


function file_infoo(file_name){
    return FS.statSync(file_name)
}


function directory_login(){

    let dir_name = "virtual_root_dir"
    let new_path = path.join(__dirname,dir_name)

    //      Desktop/Reacs.js/Projects/Project1 + /virtual_root_dir 
    //      Desktop/Reacs.js/Projects/Project1/virtual_root_dir

    let new_path_exists = FS.existsSync(new_path)

    if(new_path_exists){

        return "Message : The root path exists already"
        
    }

    else{
        FS.mkdir(dir_name,(err,data)=>{
            if(err) throw err
        })
        return "Message : The new root directry created successfully!"
    }
}

function path_exists(path_type, new_name){

    if(path_type =="dirname"){

        let new_path = path.join(new_name)
        return FS.existsSync(new_path)
    }

    else if(path_type=="filename"){

        let new_path = path.join(new_name)
        return FS.existsSync(new_path)
    }

    else{
        console.log( "Message(err) : First argument must be either 'dirname' or 'filename'\n condition (path_type = 'dirname' || 'filename')" )
        return false
    }
}

function create_file(filename="untitled_file.txt",data=" "){
    
    console.log("get 1")

    if(path_exists("filename",filename)){
        console.log("get2")
        return "Message : File already exists choose another name for your file"
    }

    if(filename=="untitled_file.txt"){

        let file_end = path_exists("filename",filename)
        let num_end = None

        while(file_end){
            num_end += 1
            console.log(num_end)
            file_end = path_exists("filename",filename+num_end)
            break
        }

        filename = filename + num_end //untitled_file4
    }

    console.log("get3")

    FS.writeFile(filename,data,"utf-8",function(err,data){
        if(err) throw err;
    })
}

function append_file(filename,data){
    FS.appendFile(filename,data,"utf-8",(err,data)=>{
        if(err) throw err;
        return "Message : File changes done."
    })
}

function edit_complete_file(filename,data){
    FS.writeFile(filename,data,"utf-8",(err,data)=>{
        if(err) throw err;
        return "Message : data successfully edited"
    })
}

function edit_file(filename,data){
    let dataa = FS.readFileSync(filename,"utf-8")
    console.log(dataa)
}

// Entry point function
function main(){
    console.log(create_file(filename=".txt","My name is"))
    edit_file("demo.txt","Helo suraj")
    console.log(file_infoo("demo.txt"))
}

main()