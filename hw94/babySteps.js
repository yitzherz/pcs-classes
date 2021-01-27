

function add(args){
    let sum = 0;
    for(let i = 2; i < args.length; i++){       
        sum += +(args[i]);
    }
    return sum;
    
}
console.log(add(process.argv));