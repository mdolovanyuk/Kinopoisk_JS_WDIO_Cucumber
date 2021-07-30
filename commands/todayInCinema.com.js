getFullTitle = function (titleStrings) {
            let fullTitle = '';
            titleStrings.forEach(function(str){
                if(str.getHTML(false).includes('<') == false){
                    fullTitle = fullTitle + str.getText() + ' ';
                }
            })
            return fullTitle = fullTitle.trim();
}

module.exports = {
    getFullTitle : getFullTitle
}