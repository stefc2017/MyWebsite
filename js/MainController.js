
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
        alert("dev");
    }
    else if(getEnvironment() === "localhost"){
        currentUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        alert("localhost");
    }
}

function getUrl(){
    var url;

    if(getEnvironment() === "dev"){
        url = "https://stefc2017.github.io/MyWebsite/";
        alert("dev");
    }
    else if(getEnvironment() === "localhost"){
        url= "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        alert("localhost");
    }
    return url;
}

function setEnvironment(env){
    alert(env + " hola");
    environment = env;
}

function getEnvironment(){
    alert(environment + " uno dos");
    return environment;
}

function setAppEnvironment(){
    //on github
    if(location.hostname === "stefc2017.github.io"){
        alert("dev" + " 29");
        setEnvironment("dev");
    }
    else{ //localhost
        setEnvironment("localhost");
        alert("local");
    }
}

function changeUrl(page){
    alert(window.location.href + " pug");
    alert(getUrl() + " get url");
    alert(page + " page");
    window.location.href = getUrl() + page;
    alert(window.location.href + " pug2");
}