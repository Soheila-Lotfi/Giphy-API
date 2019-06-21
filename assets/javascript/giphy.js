
$("button").click(function(){
    var person=$(this).attr("data-person");   // get the data-person of this (the button that is clicked by the user)

    var queryUrl= "http://api.giphy.com/v1/gifs/search?q="+person+"&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";

    $.ajax({
        url: queryUrl,
        method:"GET",
    }).then(function(response){

console.log(queryUrl);

    });

});
