/*
    Rule : Use Open Graph Protocol meta tags
*/

module.exports = function ogOg(){

    var test =  (document.querySelector("meta[property='og:title']").content != "") &&
                (document.querySelector("meta[property='og:description']").content != "") &&
                (document.querySelector("meta[property='og:type']").content != "") &&
                (document.querySelector("meta[property='og:locale']").content != "") &&
                (document.querySelector("meta[property='og:site_name']").content != "") &&
                (document.querySelector("meta[property='og:image']").content != "")
        
    ;
    return test;
    
}