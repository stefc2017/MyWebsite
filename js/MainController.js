
var environmentProperties;

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
            this.currentUrl = "https://stefc2017.github.io/MyWebsite/";
        }
        else if(this.environment === "localhost"){
            this.currentUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        }
    };

    this.getUrl = function (){
        var url;

        if(this.environment === "dev"){
            url = "https://stefc2017.github.io/MyWebsite/";
        }
        else if(this.environment === "localhost"){
            url = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
        }
        return url;
    }
}

function initialize(){
    environmentProperties = new EnvironmentProperties();
    setClientWindowHeight("#canvas-radial");
    setAppEnvironment();
    setUrl();
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

function changeUrl(page){
    window.top.location.href = getUrl() + page;
}