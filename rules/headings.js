/*
    Rule : Use heading tags to emphasize important text
*/

module.exports = function headings(){

    var 
        h1Markup = document.querySelector("h1"),
        h2Markup = document.querySelector("h2")
    ;
    
    if(h1Markup && h2Markup){
    
        var test = (h1Markup.innerHTML != "") && (h2Markup.innerHTML != "");
        return test;
    
    } else { return false; }
    
}