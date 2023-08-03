//CALCULATE FACTORIAL

function calculateFactorial (n){
    
   if(n==0 || n==1){
    return 1;
   }
   else{
    return n * calculateFactorial(n-1);
   }
    
}
console.log('The Factorial is:',calculateFactorial(6));