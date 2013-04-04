/*
    Rule : Indicate page titles by using title tags
*/

module.exports = function title(){

    var titleMarkup = document.querySelector('head>title');
    
    if(titleMarkup){
    
        var test = titleMarkup.innerHTML != "";
        return test;
    
    } else { return false; }
    
}