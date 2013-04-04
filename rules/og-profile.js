/*
    Rule : Use Open Graph Protocol meta tags
*/

module.exports = function ogProfile(){

    var 
        selectors = [
            "meta[property='og:locale']",
            "meta[property='og:site_name']"
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