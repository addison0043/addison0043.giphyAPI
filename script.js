var not_one_number_right = new Audio("Assets/gentlemen.wav");

window.onload = function begin() {
	not_one_number_right.play();     	

var queryURL;
    // click main three buttons at top to generate gifs
    $(document.body).on("click", ".fail-button", function() {

      var typeFail = $(this).attr("data-fail");
      
      queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + typeFail;

      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .done(function(response) {
        console.log(response);

        var imageUrl = response.data.image_original_url;
        var failImg = $("<img>");

        failImg.attr("src", imageUrl);
        failImg.attr("alt", "epic fail");
        failImg.attr("class", "fail_gif");

        $("#images").prepend(failImg);
      });
    });

    // pauses and stops the gifs
    $('body').on('click', '.fail_gif', function() {
    	var src = $(this).attr("src");
 		if($(this).hasClass('playing')){
		    //stop
		    $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
		    $(this).removeClass('playing');
  		}
   		
   		else {
		    //play
		    $(this).addClass('playing');
		    $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
  		}
	});

     // enter text, click submit button, and then new buttons appear
    $("#submit_button").on("click", function(event) {
    event.preventDefault();
    var submit = $("#submit_form").val();

      // populates the buttons
      var button = $("<button>").attr("class", "fail-button");
      button.addClass("new_button");
      button.attr("data-fail", submit);
      button.text(submit);
      $("#added_buttons").append(button);

    })

    $("#clear_button").on("click", function(event) {
   
    	$("#added_buttons").empty();
    	$("#images").empty();

    })

}