
function add1(a,b)
{
    return a+b;
}

var add2 = function(a , b)
{
  return a + b;    
}

var add3 = (a,b)=>{
   return a + b;   
}




function main()
{
   console.log(add1(19,3))

   console.log(add2(22, 4))

   console.log(add3(3,4))
}

main()