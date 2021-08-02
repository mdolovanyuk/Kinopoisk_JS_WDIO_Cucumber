checkDisplay = function (testItemType, elements) {
    let displayedItems = [];
    let testItem;
    elements.forEach(function(element){
        testItem = getTestItem(testItemType, element);
    //    console.log("!!!!!!! " + element.$('span span span').getText() + ' ' + testItem.isDisplayed());
        if (getTestItem(testItemType,element).isDisplayed() == true)
            displayedItems.push(element);
    })
    //console.log("!!!!!!! " + testItemType + ' ' + displayedItems.length + ' ' + elements.length + '\n');
    if (displayedItems.length > 0)
        return true;
    else
        return false;
}

checkCorrect = function (testItemType, regExp, elements) {
    let correctItems = [];
    let testItem;
    elements.forEach(function(element){
        testItem = getTestItem(testItemType, element);
         console.log("!!!!!!! " + testItem + ' ' + regExp.test(testItem));
        if (regExp.test(testItem) == true)
            correctItems.push(element);
    })
    console.log("!!!!!!! " + testItemType + ' ' + regExp + ' ' + correctItems.length + ' ' + elements.length + '\n');
    if (correctItems.length == elements.length)
        return true;
    else
        return false;
}


getFullTitle = function (titleStrings) {
    let fullTitle = '';
    titleStrings.forEach(function(str){
        if(str.getHTML(false).includes('<') == false){
            fullTitle = fullTitle + str.getText() + ' ';
        }
    })
    return fullTitle = fullTitle.trim();
}


getTestItem = function (testItemType, element) {
    let testItem;
    let genreAndYear;
    switch (testItemType) {
        case 'snippet':
            testItem = element;
            break;
        case 'poster':
            testItem = element.$('img');
            break;
        case 'title':
            let titleStrings = element.$('.today-in-cinema-carousel-item__snippet-title').$$('span span span');
            testItem = getFullTitle(titleStrings);
            break;
        case 'genre':
            genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText();
            testItem = genreAndYear.slice(genreAndYear.indexOf(', ') + 2);
            break;
        case 'year':
            genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText();
            testItem = genreAndYear.slice(0, genreAndYear.indexOf(', '));
            break;
        case 'ref':
            testItem = element.getProperty('href');
            break;
        case 'rating':
            testItem = element.$('.film-rating-bar-partial-component').getText();
            break;
    }
    return testItem;
}

module.exports = {
    checkDisplay : checkDisplay,
    getFullTitle : getFullTitle,
    checkCorrect : checkCorrect
}