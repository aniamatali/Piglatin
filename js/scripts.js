function vowelCheck(letter) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowelFound = false;
  for (var i=0; i <= vowels.length; i++) {
    if (letter === vowels[i]) {
      var vowelFound = true;
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
        var firstLetter = babyArray.indexOf(1);
         if (vowelCheck(firstLetter) ===  true);
          finalArray.push(babyArray.join("") +"way");

     });
     console.log(finalArray)
;


     event.preventDefault();

   });
});
