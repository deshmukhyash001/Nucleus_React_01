
function multiple(...array)
{ 

    console.log(array);
}

function add(...arr) // rest parameters
{
    var n = arr.length

    add = 0;

    for(var i = 0; i < n ; i++ )
    {
        add = add + arr[i];
    }

    console.log(add)
}


function add4(a=10, b=11)
{
    return a + b;
}

function main()
{
//    multiple(3,6,8,"Yash")

    //  add(22,4,2,5) ;  
    
    console.log(add4(22))

}

main()