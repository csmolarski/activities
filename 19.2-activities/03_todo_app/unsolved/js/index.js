// Step 1: Create Tasks
// Create a click function that targets the id of enter


// Step 2: Delete Tasks
// Create a jQuery selector that targets the document


// tep 3: Complete Tasks 
// Create another jQuery selector that targets the documen
// Attach a click event listener to it with three parameters—a click, the class of task, and an anonymous function.

$("$enter").click(function(){
    var task = $("todoIteam").val();
    $("todoList");
    $("#todoList").append(
        "<div class='task'"
        +task+
        "<i class='x fa-solid fa-xmark'></i></div>"
        );
    );
    $(document).on("click", ".x", function(){
        $(this).parent().remove();
        $(document).on("click", ".task", function(){
            $(this).toggleClass("done")
if($(this).hasClass("done")){
    else{
        $(this).find("i").addClass("fa-xmark");
        $(this).find("i").removeClass("fa-xmark");
    }
  });
