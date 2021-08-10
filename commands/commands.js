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


/*
getTestItem = function (testItemType, element) {
    let testItem;
    let genreAndYear;
    let titleStrings;
    switch (testItemType) {
        case 'snippet':
            testItem = element;
            break;
        case 'poster':
            testItem = element.$('img');
            break;
        case 'title':
            titleStrings = element.$('.today-in-cinema-carousel-item__snippet-title').$$('span span span');
            testItem = getFullTitle(titleStrings);
            break;
        case 'genre':
            genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText(); //desctop
            //genreAndYear = element.$('.film-poster-snippet__caption_theme_default').getText(); //touch
            testItem = genreAndYear.slice(genreAndYear.indexOf(', ') + 2);
            break;
        case 'year':
            genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText(); //desctop
            //genreAndYear = element.$('.film-poster-snippet__caption_theme_default').getText(); //touch
            testItem = genreAndYear.slice(0, genreAndYear.indexOf(', '));
            break;
        case 'ref':
            testItem = element.getProperty('href');
            break;
        case 'rating':
            testItem = element.$('.film-rating-bar-partial-component').getText(); // desctop
            //testItem = element.$('.film-rating-bar_scaled').getText();
            break;
        case 'titleNewTrailers':
            titleStrings = element.$('.w2NvtugQIJ3G0Xs7Su--H').$$('span span span');
            testItem = getFullTitle(titleStrings);
            break;
        case 'genreNewTrailers':
            genreAndYear = element.$('.lZg9KqrHYgMLpAePYTgnz').getText();
            testItem = genreAndYear.slice(genreAndYear.indexOf(', ') + 2);
            break;
        case 'yearNewTrailers':
            genreAndYear = element.$('.lZg9KqrHYgMLpAePYTgnz').getText();
            testItem = genreAndYear.slice(0, genreAndYear.indexOf(', '));
            break;
        case 'refNewTrailers':
            testItem = element.$('a').getProperty('href');
            break;

    }
    return testItem;
}*/

module.exports = {
    checkDisplay : checkDisplay,
    getFullTitles : getFullTitles,
    checkText : checkText,
    checkAttribute : checkAttribute,
    waitElement : waitElement
}