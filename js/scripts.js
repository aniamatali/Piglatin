$(document).ready(function() {
   $("#formOne").submit(function(event) {

     var sentence = $("#sentence").val().split(" ");
     var splitwords = [];
    //  var letters = [];
    //  console.log(sentence);

     sentence.forEach(function(word) {
       var letters = word.split("");
       splitwords.push(letters);
     });
     console.log(splitwords);




     event.preventDefault();

   });
});
