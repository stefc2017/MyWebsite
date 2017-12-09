
var environmentProperties;

/******************************************* Initialize *******************************************/
function initialize(){
    environmentProperties = new EnvironmentProperties();
    setAppEnvironment();
    initializeEvents();
    setUrl();
}

function EnvironmentProperties(){
    this.environment = " ";
    this.currentUrl = " ";

    this.getEnvironment = function() {
        return this.environment;
    };

    this.setEnvironment = function(env){
        this.environment = env;
    };

    this.setUrl = function(){
        if(this.environment === "dev"){
            this.currentUrl = "https://stefc2017.github.io/StefansWebsite/";
        }
        else if(this.environment === "localhost"){
            this.currentUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        }
    };

    this.getUrl = function (){
        var url;

        if(this.environment === "dev"){
            url = "https://stefc2017.github.io/StefansWebsite/";
        }
        else if(this.environment === "localhost"){
            url = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        }
        return url;
    }
}

function getEnvironment(){
    return environmentProperties.getEnvironment();
}

function setEnvironment(env){
    environmentProperties.setEnvironment(env);
}

function setUrl(){
    environmentProperties.setUrl();
}

function getUrl(){
    return environmentProperties.getUrl();
}

function setAppEnvironment(){
    //on github
    if(location.hostname === "stefc2017.github.io"){
        setEnvironment("dev");
    }
    else{ //localhost
        setEnvironment("localhost");
    }
}

function getBrowser() {
    var browser;

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        browser = "firefox";
    }
    else{
        browser = "other";
    }

    return browser;
}

function initializeEvents(){
    initializeScrollspyScroll();
}

/*
 * Deals with adjusting when the active navbar button will change. The greater the offset, the sooner the next active
 * button will change.
 */
function initializeScrollspyScroll(){
    $(document).ready(function(){
        $("body").scrollspy({
            target: "#myNavbar",
            offset: 50
        })
    });
}

/*
 * Deals with adjusting the scroll into view when a tab is clicked. Change the offset value to adjust the view
 * after the scroll.
 */
function initializeScrollspyClick(){
    var offset = 30;
    $(document).ready(function() {
        setTimeout(function () {
            $('.navbar li a').on('click', function (event) {
                event.preventDefault();
                $($(this).attr('href'))[0].scrollIntoView();
                scrollBy(0, -offset);
            });
        });
    }, 100);
}