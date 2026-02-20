function main()
{
    var a =[2,3,22]
   

    var n = a.length
    var b = a

     var c=[]

     for(var i=0; i<n;i++)
     {
        c[i]=b[i]
        c.push(b[i])
     }

     c.pop()

    console.log(a)

    console.log(c)
}

main()