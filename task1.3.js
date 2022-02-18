// evaluate number if it is 65 or if sum is 65
function evaluateNumber(num1,num2){
  if(num1 == 65 || num2 == 65){
    return true;
  } else if( num1 + num2 ==65){
      return true;
  }else{
    return false;
  }
}
console.log(evaluateNumber(62,3));
