function vowelCheck(letter) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowelFound = false;
  for (var i=0; i <= vowels.length; i++) {
    if (letter === vowels[i]) {
      var vowelFound = true;
    }
  }
  return vowelFound;
}

function consonantCheck(letter) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonantFound = false;
  for (var i=0; i <= vowels.length; i++) {
    if (vowelCheck(letter) === false && letter !== "q" && letter !== "Q") {
      var consonantFound = true;
    }
  }
  return consonantFound;
}

function quCheck(letter) {
  var qu = ["q", "Q"];
  var quFound = false;
  for (var i=0; i <= qu.length; i++) {
    if (letter == qu[i]) {
      var quFound = true;
    }
  }
  return quFound;
}

$(document).ready(function() {
   $("#formOne").submit(function(event) {

     var sentence = $("#sentence").val().split(" ");
     var parentArray = [];
     var finalArray = [];
    //  var letters = [];
    //  console.log(sentence);

//parentArray = [babyArray babyArray babyArray...babyArray]
    //  sentence.forEach(function(word) {
    //    var letters = word.split("");
    //    parentArray.push(letters);
    //  });
    // debugger;
     sentence.forEach(function(word) {
       var letter = word.charAt(0);
      if (vowelCheck(letter) === true) {
        finalArray.push(word + "way");

      } else if (consonantCheck(letter) === true) {
        debugger;
        for (var i=0; i < word.length; i++) {
          if (consonantCheck(letter) === true) {
            word = word.substr(1)+ word.split("",1);
            letter = word.charAt(0);
          }
        }
        for (var i=0; i < word.length; i++) {
          if (quCheck(letter) === true) {
            word = word.substr(1)+ word.split("",1);
            word = word.substr(1)+ word.split("",1);
            letter = word.charAt(0);
          }
        }
        finalArray.push(word +"ay");

      } else if (quCheck(letter) === true) {
        var quWord = word.substr(2)+"qu";
        finalArray.push(quWord +"ay");
      }
        alert(finalArray);
    });

     event.preventDefault();

   });
});
