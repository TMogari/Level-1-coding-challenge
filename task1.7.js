//combining two lists
function twoLists(firstArr, secondArr){
  //method joins two or more strings.
  var newArr = firstArr.concat(secondArr);
  var finalArr = [];

  for(let i = 0, j = 0; i < firstArr.length, j < secondArr.length; i++, j++){
    finalArr.push(firstArr[i]);
    finalArr.push(secondArr[j]);
  }
  console.log(finalArr);
}

twoLists([11, 22, 33], [1, 2, 3]);
