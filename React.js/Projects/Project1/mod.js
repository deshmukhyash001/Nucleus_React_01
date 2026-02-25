/** 
 * PROJECT TITLE : OS FILE UTILITI
 * AUTHER : NUCLEUS PROGRAMMING
 * DATE : 16/02/2026
 * MODULE USED : FS
 * **/


const FS = require("fs")
const path = require("path")

 console.log(new Date())
 console.log()
function getLogFileName() {
    const now = new Date()

    const date =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0")

    return date+".log" //2026-02-25.log
}


function loginfo(Message){

    let lFname = getLogFileName()
    let now = new Date()

    full_message = String(now.getHours()).padStart(2, "0") + ":" +
            String(now.getMinutes()).padStart(2, "0") + ":" +
            String(now.getSeconds()).padStart(2, "0")+"    "+Message
        

    FS.appendFileSync(ROOT+"dirlogs/"+lFname,full_message+"\n")
    return 
}

// #######################################################################
//              DIRECTORY OPERATIONS (root: "./virtual_root_dir" )
// #######################################################################

ROOT = "/Users/apple/Desktop/React.js/Projects/Project1/virtual_root_dir/"



function create_directory(dirname = "untitled_dir"){

    if(dirname==="untitled_dir"){

        let num = 0

        while(path_exists("dirname",dirname+num)){
            num += 1;
        }
        dirname = dirname+num
    }

    if(path_exists("dirname",dirname)){
        return "Message : directory already exists."
    }

    FS.mkdir(ROOT+dirname,(err,data)=>{
        if(err) throw err
    })

    loginfo(`directory created : ~:${dirname}`)
    return 'Message : directory "'+dirname+'" Successfully created';
}

function delete_directory(dirname){

    if(path_exists("dirname",dirname) == false){
        return "Message : directory doesent exists."
    }

    FS.renameSync(ROOT+dirname,ROOT+"bin/"+dirname)

    loginfo(`directory moved to bin : ~:${dirname}`)
    return "Message : directory moved to bin"
}

function check_directory(dirname){
    if(path_exists("dirname",dirname) == false){

        return "Message : directory doesent exists."
    }
    
    let child = FS.readdirSync(ROOT+dirname)
    return [child,"Message : Dirictory visited successfully"]
}


// #######################################################################
//                  FILE OPERATIONS (root: "./virtual_root_dir" )
// #######################################################################

// #######################################################################
//         1 return <File Information> : file_infoo("YOUR FILE NAME HERE")
// #######################################################################

function file_infoo(file_name){
    return FS.statSync(file_name)
}

// ###########################################################################
//        2 creates <root directory> : directory_login() -> ./virtual_root_dir
// ###########################################################################

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
    }
    
    create_directory("dirlogs")
    create_directory("bin")
    loginfo("------ USER LOGIN SUCCESSFULLY ------")
    return "Message : The new root directry created successfully!"

}


// ####################################################################################
//        3 tell existance of file/dir : path_exists(path_type,new_name) -> bool
// 
//         path_type    ->    should either "filename" or "dirname"
//         new_name     ->.   the name of file or directory you want to check
// ####################################################################################

function path_exists(path_type, new_name){

    new_name = ROOT+new_name

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


// ##########################################################################
// 4 Create a new file : create_file( <content of file> , <name of the file> )
// ##########################################################################

function create_file(data=" ",filename="untitled_file.txt"){
    

    let name = filename
    let extension = ".txt"


    if(filename.includes(".")){
        let file = filename.split(".")
        name = file[0]
        extension = file[1]

    }

    fullname = name +"."+extension


    if(path_exists("filename",fullname) && name != "untitled_file"){
        return "Message : File already exists choose another name for your file"
    }

    if(name==="untitled_file"){

        let num = 0


        while(path_exists("filename",name+num+"."+extension)){
            num++;
        }

        fullname = name + num + "." + extension //untitled_file4.ext
    }


    FS.writeFile(ROOT+fullname,data,"utf-8",function(err,data){
        if(err) throw err;
    })

    loginfo(`file created : ~:${filename}`)
    return "Message : file created successfully "
}

function append_file(filename,data){
    FS.appendFile(filename,data,"utf-8",(err,data)=>{
        if(err) throw err;
    })

    loginfo(`file updated : ~:${filename}`)
    return "Message : File changes done."
}

function edit_complete_file(filename,data){
    FS.writeFile(filename,data,"utf-8",(err,data)=>{
        if(err) throw err;
    })

    loginfo(`file updated : ~:${filename}`)
    return "Message : File changes done."
}


function delete_file(file_name){

    FS.renameSync(ROOT+file_name,ROOT+"bin/"+file_name)

    loginfo(`file moved to bin : ~:${filename}`)
    return "Message : Moved to bin"
}

function rename(Ofilename,Nfilename){
    if(path_exists("filename",Nfilename)){
        return "Message : This Name already exists choose another name"
    }

    FS.renameSync(ROOT+Ofilename,ROOT+Nfilename)

    loginfo(`file(${Ofilename}) name changed to : ~:${filename}`)
    return "Message : Successfully rename the file"
}

directory_login()
create_directory()

console.log(FS.existsSync("/Users/apple/Desktop/React.js/CSS/style1.css"))


module.exports = {check_directory,directory_login,rename,delete_directory,delete_file,edit_complete_file,create_file,append_file,file_infoo,create_directory}