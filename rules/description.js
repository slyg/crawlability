/*
    Rule : Make use of the "description" meta tag
*/

module.exports = function description(){

    var descriptionMarkup = document.querySelector("meta[name='description']");
    
    if(descriptionMarkup){
    
        var test = (descriptionMarkup.content != "");
        return test;
    
    } else { return "void"; }
    
}