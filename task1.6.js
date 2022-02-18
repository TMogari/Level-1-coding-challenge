//Function prints out the longest string
function longestString(words){

  var numberOfCharsInWords = [];

  for(let i = 0; i < words.length; i++){

    numberOfCharsInWords.push(words[i].length);
  }

  for(let i = 0; i < words.length; i++){

    if(words[i].length === Math.max(...numberOfCharsInWords)){
      console.log(words[i]);
    }
  }
}

longestString(["the", "quick", "brown", "fox" ,"ate", "my" , "chickens"]);
