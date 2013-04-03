module.exports = function altImg(){
    // evaluated in a dom context
    return document.getElementsByTagName('img')[0].border == 0;
}