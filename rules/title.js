module.exports = function title(){
    // evaluated in a dom context
    return document.getElementsByTagName('title')[0].innerHTML != "";
}