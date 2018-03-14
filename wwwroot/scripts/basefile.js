var basefile = (function(){
    var drawWord = function(element, word){
        $("#" + element).text(word);
    };

    return {
        drawWord: drawWord
    };
})();
