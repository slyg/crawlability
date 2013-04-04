/*
    Rule : Use Twitter Graph Protocol meta tags
*/

module.exports = function ogTwitter(){
    
    var 
        selectors = [
            "meta[name='twitter:card']", 
            "meta[name='twitter:description']",
            "meta[name='twitter:title']",
            "meta[name='twitter:image']",
            "meta[name='twitter:site']"
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