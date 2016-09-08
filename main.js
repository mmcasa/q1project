var globalData = {};
$(document).ready(function() {


      // click events
      $("#sub").click(function(event){
        event.preventDefault();
        $("#resultss").html(globalData.answer);
        })




  var $randomQuestion;
  var url = "http://jservice.io/api/random";
  $.ajax({
      url: url,
      dataType: "json",
      type: "GET"

  }).done(function(data){

     globalData.question = data[0].question;
     globalData.answer = data[0].answer;

        $("#question").html(globalData.question);

          console.log(data[0].question);

})

})
