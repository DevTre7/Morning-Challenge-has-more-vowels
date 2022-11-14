// phraseVowels = 0;

// function hasMoreVowels(word){
// // if word contains "a, e, i , o, u,"
// for(i= 0; i< word.lenth; i++){
//     if( word[i]=== "a"){
//         return true;
//     }
// }
//     if(word)
// }

//Alternative Way To Solve!:

function getCount(word) {
    let vowelCount = 0;
    word = word.toLowerCase();
    for (letter in word) {
      switch (word[letter]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          vowelCount += 1;
      }
    }
    return vowelCount > word.length / 2;
  }
  
  console.log(getCount("moose"));
  console.log(getCount("mice"));
  console.log(getCount("graph"));
  console.log(getCount("yay"));
  console.log(getCount("Aal"));