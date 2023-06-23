const arr = [2,4,5,1,3];

const result = arr.reduce(function(accmulator,currVal){
    console.log(accmulator,currVal);
    return (accmulator+currVal);
},0);

console.log("result",result);