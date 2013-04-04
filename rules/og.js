/*
    Rule : Use Open Graph Protocol meta tags
*/

module.exports = function ogOg(){

    var 
        selectors = [
            "meta[property='og:title']", 
            "meta[property='og:description']",
            "meta[property='og:type']",
            "meta[property='og:locale']",
            "meta[property='og:site_name']",
            "meta[property='og:image']"
        ], 
        attributeName = 'content',
        len = selectors.length,
        currentTarget = null,
        result = "void"
    ;
    
    while(len--){
        currentTarget =  document.querySelector(selectors[len]);
        if(currentTarget) {result = (currentTarget[attributeName] != "") } else { break; }
    }
    
    return result;
    
}