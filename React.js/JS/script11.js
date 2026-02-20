
function array()
{
     var arr = [1,2,3,4,5]

    console.log(arr);

    console.log(arr.length)

}


function arr_add(arr)
{

    if(typeof(arr)!== "object")
    {
        return "please enter the correct value";
    }
 sum =0;
 for(let i = 0; i<arr.length; i++)
 {
    sum = sum + arr[i];

 }
   return sum;
}


function ascending(arr)
{
    
var temp;

     for (var i =0; i<arr.length; i++)
     {
        for (var j = i +1 ; j <arr.length ; i++)
        {
            if (arr[i]>arr[j])

                temp = arr[i];
                arr[i]=arr[j];
                arr[j]=arr[i];
        }
     }

     return arr;
}
function main()
{
//  console.log(arr_add([1,6,7]))

// console.log(arr_add([7,8,9]))

 console.log(ascending([22,6,7,4,27]))

}

main()