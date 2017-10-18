
var environment;
var currentUrl;

function initialize(){
    setClientWindowHeight("#canvas-radial");
    setAppEnvironment();
    setUrl();
}

function setUrl(){
    if(getEnvironment() === "dev"){
        currentUrl = "https://stefc2017.github.io/MyWebsite/";
    }
    else{
        currentUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
    }
}

function getUrl(){
    var url;

    if(getEnvironment() === "dev"){
        url = "https://stefc2017.github.io/MyWebsite/";
    }
    else{
        url= "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
    }
    return url;
}

function setEnvironment(env){
    environment = env;
}

function getEnvironment(){
    return environment;
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

function changeUrl(page){
    window.location.href = getUrl() + page;
}