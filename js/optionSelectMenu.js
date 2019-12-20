$(document).ready(function() {
    //Create the dropdown base
    $("<select />").appendTo("nav");

    //Create Default Option Go To..
    $("<option />",{
        "selected": "selected",
        "value":"",
        "text":"Go To..",
    }).appendTo("nav select");
   
    //Populate dropdown with menu items
    $("nav a").each(function(){
        var el = $(this);
        $("<option />",{
            "value": el.attr("href"),
            "text": el.text(),

        }).appendTo("nav select")
    });

    //To make dropdown actually work
   $("nav select").change(function(){
       window.location = $(this).find("option:selected").val()
   });

});