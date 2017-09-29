//Modify this function. You want to make one tab active and the other not
function updateTabs(file, unselected, selected){
    $.get("../Templates/navbar.html", null, function(){
        $("#skillsTab").addClass("active");
    });
}
