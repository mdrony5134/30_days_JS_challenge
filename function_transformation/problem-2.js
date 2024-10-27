const argumentLength = (...args) =>{
    console.log(args)
    // let arr = args;
    return function(arr){
        console.log(arr)
         return args.length
    }
    

}
const getLength = argumentLength(1)

console.log(getLength())