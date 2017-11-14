var initialHeight;

function setClientWindowHeight(backgroundHeight){
    initialHeight = ($(backgroundHeight).height());
}

function updateBackgroundHeight(backgroundElement){
    setTimeout(function(){
        if(document.body.clientHeight < initialHeight){
            $(backgroundElement).height(initialHeight);
        }
        else{
            $(backgroundElement).height(document.body.clientHeight);
        }
    }, 350);

}

    function resizeIframe(obj) {
        resizeHeight(obj);
        resizeWidth(obj);
    }

    function resizeHeight(obj) {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }

    function resizeWidth(obj){
        if(obj.id === "iframe_footer"){
            obj.style.width = window.innerWidth + 'px';
        }
        else if(obj.id === "iframe_navbar"){
            resizeNavbarWidth(obj);
        }
        else {
            obj.style.width = $("div .jumbotron").innerWidth() + 'px';
        }
    }

    /* This will change my website's page to another tab*/
    function changeUrl(page){
        window.top.location.href = getUrl() + page;
    }

    /* This will change the current url to the url given as the parameter (ex. github, linkedIn)*/
    function changeToUrl(url){
        window.top.location.href = url;
    }
