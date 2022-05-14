function fib(n){
    let a = 0;
    let b = 1;
    let c;
   
    for(let i = a; i <=n; i++){
    
        c = a;
        a += b; 
        b = c;
        console.log(c);
    }
};
fib(10);


// function fibonacci(num)
// {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     for (let i = 0; i < num; i++) 
//     {
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//          console.log( num2);
//     }
   
// }

// fibonacci(10);