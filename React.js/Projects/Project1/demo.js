
function readFile(funct){

    // err efining logic herer
    let err = undefined

    //data defining logic here
    let data = "Jay Ganesh"

    return funct(err,data)
}

readFile(function(err,data){
    if(err) throw err;
    
    console.log(data)
})