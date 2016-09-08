// created by Malik Villarreal
$(document).ready(function(){
  $(init);

  function init() {
    //event handler
     $("#searchNasa").click(searchNasa);
     var $nasaImagery = $("#nasaImagery");
     var url = "https://api.nasa.gov/planetary/apod?api_key=GkYxZ4x0k2EPmmrr4qPDZCJrzL28oZ00ufMc3jEq";

     function searchNasa() {
       var $imagery = $nasaImagery.val();
       alert("searchNasa: " + $imagery);
       $.ajax({
         url: url,
         dataType: "json",
         type: "POST",
         success: renderImage(response)

        })
        console.log(response);


     }

     function renderImage(response) {

       console.log($imagery);


     }

}

var url = "https://api.nytimes.com/svc/suggest/v1/timestags.json";
url += '?' + $.param({
'max': 10
});
$.ajax({
url: url,
method: 'GET',
}).done(function(result) {
console.log(result);
}).fail(function(err) {
throw err;
})



})
