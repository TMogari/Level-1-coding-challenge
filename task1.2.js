//Finding number 3 or numbers containing number 3
function numbersConditions(num1, num2) {
  var sumOfNums = num1 + num2
  var containsThree = sumOfNums.toString().indexOf("3") > -1; //returns true if 3 is in the sum
  if(num1 === 3 || num2 === 3 && containsThree === true) {
     console.log( true)
  } else {
      console.log( false)
  }
}
numbersConditions(4,33);
