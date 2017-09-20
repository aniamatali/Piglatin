function vowelCheck(letter) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowelFound = false;
  for (var i=0; i <= vowels.length; i++) {
    if (letter === vowels[i]) {
      var vowelFound = true;
    }
  }
}

function consonantCheck(letter) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "qu", "Qu", "qU", "QU"];
  var consonantFound = false;
  for (var i=0; i <= vowels.length; i++) {
    if (letter !== vowels[i]) {
      var consonantFound = true;
    }
  }
}


$(document).ready(function() {
   $("#formOne").submit(function(event) {

     var sentence = $("#sentence").val().split(" ");
     var parentArray = [];
     var finalArray = [];
    //  var letters = [];
    //  console.log(sentence);

//parentArray = [babyArray babyArray babyArray...babyArray]
     sentence.forEach(function(word) {
       var letters = word.split("");
       parentArray.push(letters);
     });

     parentArray.forEach(function(babyArray) {

      // if first letter is vowel add "way"
      var firstLetter = babyArray.indexOf(1);
      if (vowelCheck(firstLetter) ===  true) {
      }
        finalArray.push(babyArray.join("") +"way");
// debugger;
      // move consonants to back and add "ay"
      // babyArray.split("");
      for (var i=0; i <= babyArray.length; i++) {
        if (consonantCheck(babyArray[i]) === true) {
          var consonantWord = babyArray.substr(1)+babyArray.split("",1);
        }
      }
      finalArray.push(consonantWord+"way");

      console.log(consonantWord);
     });
     console.log(finalArray);


     event.preventDefault();

   });
});
