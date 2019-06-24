
$("button").click(function(){
    var person=$(this).attr("data-person");   // get the data-person of this (the button that is clicked by the user)
   //Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed 
    //to Github Pages.

    var queryUrl= "https://api.giphy.com/v1/gifs/search?q="+person+"&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";

    $.ajax({
        url: queryUrl,
        method:"GET",
    }).then(function(response){

            console.log(queryUrl);
            var results=response.data;     // get data wich is an array with three objects
            $("#gifs-appear-here").empty();   // empty the div
            $.each(results, function(i){        // for each items of array run a function
            // get the giphy
            var gifImg=$("<img>");                
            var giphy= gifImg.attr("src",results[i].images.fixed_height.url); 

            //make new div to put images in it
            var gifDiv= $("<div>")              
            gifDiv.append(gifImg);
            // display the div on the page
            $("#gifs-appear-here").append(gifDiv);

    });

    });


});
