
var environment = "dev";

function initialize(){
    setClientWindowHeight("#canvas-radial");
    //setAppEnvironment();
}

function getUrl(){
    var url;

    if(environment === "dev"){
        url = "https://stefc2017.github.io/MyWebsite/";
    }
    return url;
}
// //will be coded to choose between environments
// function setAppEnvironment(){
// //use for localhost
//     //const defaultUrl = "file:///C:/Users/Stefan/Desktop/Programming/web/MyWebsite/";
// //use for github pages
// const defaultUrl = "https://stefc2017.github.io/MyWebsite/";
// }