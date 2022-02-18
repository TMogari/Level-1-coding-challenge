// Function that prints out a square
function square(number){
  for(i = 0; i < number; i++){
    let row = ''
      for(j = 0; j < number; j++){
          row+='#'
      }
      console.log(row+" ");
  }
}
square(4);
