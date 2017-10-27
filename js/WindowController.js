var initialHeight;

function setClientWindowHeight(backgroundHeight){
    initialHeight = ($(backgroundHeight).height());
}

function animateBackground(){
    var granimInstance = new Granim({
        element: '#canvas-radial',
        name: 'radial-gradient',
        direction: 'radial',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ffb347', '#ffcc33'],
                    ['#83a4d4', '#b6fbff'],
                    ['#9D50BB', '#6E48AA']
                ],
                transitionSpeed: 2500
            }
        }
    });
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

    function resizeWidth(obj) {
        obj.style.width = window.screen.width + 'px';

        if(obj.id === "iframe_navbar"){
            resizeNavbarWidth();
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
