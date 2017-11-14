var activeTab = "#home_li";

function resizeNavbarWidth(obj){
        var newWidth;

        if(getBrowser() === "firefox"){
            newWidth = window.innerWidth - 24;
        }
        else{
            newWidth = window.innerWidth - 44;
        }

        var iFrame = $("#"+obj.id);
        iFrame.contents().find("#main-menu").width(newWidth +'px');
}
