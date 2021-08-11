checkDisplay = function (elements) {
    let displayedItems = [];
    elements.forEach (function (element, index) {
        console.log("!!!!!!! " + element + ' - [' + index + '] ' + element.isDisplayed());
        if (element.isDisplayed() == true)
            displayedItems.push(element);
    })
    console.log("!!!!!!! displayedItems.length = " + displayedItems.length + '\n');
    return displayedItems.length;
}

checkText = function (regExp, elementsText) {
    let correctItems = [];
    elementsText.forEach(function(element){
        console.log("!!!!!!! " + element + ' ' + regExp.test(element));
        if (regExp.test(element) == true)
            correctItems.push(element);
    })
    console.log("!!!!!!! " + regExp + ' ' + correctItems.length + ' ' + elementsText.length + '\n');
    return correctItems.length;
}

checkAttribute = function (regExp, elements) {
    let elementsText = [];
    elements.forEach (function (element) {
        elementsText.push(element.getText());
    })
    return checkText(regExp,elementsText);
}


getFullTitles = function (snippets, titles) {
    var fullTitles = [];
    var j = 0;
    for (var i = 0; i < snippets.length; i++) {
        fullTitles[i] = '';
        while (j < titles.length) {
            if (snippets[i].getHTML().includes(titles[j].getHTML()) == false) {
                if (fullTitles[i] == '') {
                    j++;
                    continue;
                }
                break;
            }
            else {
                if (titles[j].getHTML(false).includes('<') == true) {
                    j++;
                    continue;
                }
                else {
                    fullTitles[i] = fullTitles[i] + titles[j].getText()+ ' ';
                    j++;
                }
            }
        }
        fullTitles[i] = fullTitles[i].trim();
    }
    return fullTitles;
}

waitElement = function(element){
    try {
            element.waitForDisplayed();
            return 1;
        }
        catch (error) {
            return 0;
        }
}

module.exports = {
    checkDisplay : checkDisplay,
    getFullTitles : getFullTitles,
    checkText : checkText,
    checkAttribute : checkAttribute,
    waitElement : waitElement
}