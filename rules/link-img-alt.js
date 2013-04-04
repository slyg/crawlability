/*
    Rule : Supply alt text when using images as links
*/

module.exports = function linkImgAlt(){

    var 
        imgs = document.querySelectorAll("a>img"),
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