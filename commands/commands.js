checkDisplay = function (testItemType, elements) {
    let displayedItems = [];
    let testItem;
    elements.forEach(function(element, index){
        testItem = getTestItem(testItemType, element);
        console.log("!!!!!!! " + element + ' - [' + index + '] ' + testItem.isDisplayed());
        if (getTestItem(testItemType,element).isDisplayed() == true)
            displayedItems.push(element);
    })
    console.log("!!!!!!! " + testItemType + ' ' + displayedItems.length + ' ' + elements.length + '\n');
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
}



module.exports = {
    checkDisplay : checkDisplay,
    getFullTitle : getFullTitle,
    checkCorrect : checkCorrect
}