
/* JavaScript for jquery smartmenus*/

function initializeSmartMenu(){
    // SmartMenus init
    $(function() {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });
    });

// SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });
}

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
