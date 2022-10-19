
// You already have an event listener
// that listens for a click event in any element with a class of .tab
$('.tab').on("click", function(){
    // Add an if-else statement   
    if($(this).hasClass("tab1"){
        else if($(this).hasClass("tab2"))
    
    }
    

    
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
});

    

    




