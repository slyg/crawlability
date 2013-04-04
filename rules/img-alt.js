/*
    Rule : Use alt text in images
*/

module.exports = function imgAlt(){

    var 
        imgs = document.querySelectorAll("img"),
        len = imgs.length,
        alt = null,
        altVal = "",
        result = true
    ;
    
    while(len--){
        
        alt = imgs[len].getAttribute('alt');
        if(alt) { result = (alt != "") } else { result = false; break; };
        
    }
    
    return result;
    
}