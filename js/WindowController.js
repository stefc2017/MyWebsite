//use for localhost
const defaultUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
//use for github pages
//const defaultUrl = "https://stefc2017.github.io/MyWebsite/";

var elementHeaderHeight = -1;

    function setElementHeaderHeight(height){
        elementHeaderHeight = height;
    }

    function changeUrl(page){
        window.location.href = defaultUrl + page;
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
                    ]
                }
            }
        });
    }


    function updateBackgroundHeight(backgroundElement, elementHeader, elementBody){
        var backgroundHeight = $(backgroundElement).height();

        if(elementHeaderHeight == -1){
            setElementHeaderHeight($(elementHeader).height());
        }

        if($(elementBody).attr('aria-expanded') === "false"){
            $(backgroundElement).height(backgroundHeight + elementHeaderHeight);
        }
        else if($(elementBody).attr('aria-expanded') === "true"){
            $(backgroundElement).height(backgroundHeight - elementHeaderHeight);
        }
        else{
            $(backgroundElement).height(backgroundHeight + elementHeaderHeight);
        }
    }