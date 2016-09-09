var globalData = {};
$(document).ready(function() {



    // click events
    $("#sub").click(function(event) {
        event.preventDefault();

        // newCall();
        // var rightCount = 0;
        // var wrongCount = 0;
        // for (count; count < $("#resultss").html(globalData.answer; count++) ){
        //
        // }
        $("#resultss").html(globalData.answer);
        // if ( $(".scoreR").text() == 0 && $(".scoreW").text() == 0) {
        //
        //     if ($("#answer").html() === globalData.answer) {
        //         $(".scoreR").text(( parseInt($(".scoreR").text() ) + 1 ));
        //     } else {
        //         $(".scoreW").text(( parseInt($(".scoreW").text() ) + 1 ));
        //     }

        // } else {
            if ($("#answer").val() === globalData.answer) {

                $(".scoreR").text(( parseInt($(".scoreR").text() ) + 1 ));
            } else {
              $(".scoreW").text(( parseInt($(".scoreW").text() ) + 1 ));
              var buzzer = $('audio')[0];


            }
        // }


    })

    $("#reset").click(function(event) {
        newCall();
        event.preventDefault();
        $("#question").empty();
        $("#answer").val('');
        $("#resultss").empty();
    });
    newCall();

    function newCall() {
        var url = "http://galvanize-cors-proxy.herokuapp.com/jservice.io/api/random";
        var grabRandomQuestion = $.ajax({
            url: url,
            dataType: "json",
            type: "GET"

        })

        grabRandomQuestion.done(setQuestionAndAnswer);

        function setQuestionAndAnswer(data) {
            console.log(data);
            globalData.question = data[0].question;
            globalData.answer = data[0].answer;

            $("#question").html(globalData.question);

            console.log(data[0].question);
        };

    }

})
