/*
    Rule : Use Twitter Graph Protocol meta tags
*/

module.exports = function ogTwitter(){
    var test =  (document.querySelector("meta[name='twitter:card']").content != "") &&
                (document.querySelector("meta[name='twitter:description']").content != "") &&
                (document.querySelector("meta[name='twitter:title']").content != "") &&
                (document.querySelector("meta[name='twitter:image']").content != "") &&
                (document.querySelector("meta[name='twitter:site']").content != "")
        
    ;
    return test;
}