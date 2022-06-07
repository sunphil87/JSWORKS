$(document).ready(function(){
    $("tr:even").css("background", "red");
    $("tr:odd").css("background", "orange");
    $("tr:first").css("background", "yellow");
    $("tr:last").css("background", "green");
    $(":header").css("background", "blue");
    $("li:eq(0)").css("background", "navy");
    $("li:gt(0)").css("background", "purple");
    $("li:lt(3)").css("border", "4px solid gray");
    $(":root").css("background", "lightgray");
    (function upDown(){
        $("h2").slideToggle(1000,upDown);
    })();
    $(":animated").css("border", "4px solid darkred");
});