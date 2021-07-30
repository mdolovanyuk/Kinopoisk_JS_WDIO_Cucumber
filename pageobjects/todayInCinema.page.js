const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef} = require('../regexp');
const {getFullTitle} = require('../commands/todayInCinema.com');

class TodayInCinema {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('div[data-tid = "f0448ef1"]').$('.preview-card-film__title')};
    get ticketButton() {return $('.nameplate__item_type_tickets')};
    get bigTicketButton() {return $('.nameplate__button_type_tickets')};


    //МЕТОДЫ СЦЕНАРИЯ "ОТОБРАЖЕНИЕ КАРТОЧЕК"

    snippetsAreDisplayed() {
        let displayedItems = [];
        this.snippets.forEach(function(element){
            if (element.isDisplayed() == true)
                displayedItems.push(element);
        })
        if (displayedItems.length > 0)
            return true;
        else
            return false;
    }

    postersAreDisplayed() {
        let displayedItems = [];
        this.snippets.forEach(function(element){
            if (element.$('img').isDisplayed() == true)
                displayedItems.push(element);
    //       /console.log(index + ' ' + element.$('span span span').getText() + ' ' + element.$('img').isDisplayed());
        })
        if (displayedItems.length > 0)
            return true;
        else
            return false;
    }

    titlesAreCorrect() {
        let correctItems = [];
        this.snippets.forEach(function(element){
            let titleStrings = element.$('.today-in-cinema-carousel-item__snippet-title').$$('span span span');
            let fullTitle = getFullTitle(titleStrings);
    //        console.log("!!!!!!! " +fullTitle + ' ' +regForTitle.test(fullTitle));
            if (regForTitle.test(fullTitle) == true)
                correctItems.push(element);
        })
    //    console.log(correctItems.length + ' ' + this.snippets.length);
        if (correctItems.length == this.snippets.length)
            return true;
        else
            return false;
    }

    genresAreCorrect() {
        let correctItems = [];
    //    console.log(regForGenre);
        this.snippets.forEach(function(element){
            let genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText();
            let genre = genreAndYear.slice(genreAndYear.indexOf(', ') + 2);
    //        console.log(genre + ' ' + regForGenre.test(genre));
            if (regForGenre.test(genre) == true)
                correctItems.push(element);
        })
    //    console.log(correctItems.length + ' ' + this.snippets.length);
        if (correctItems.length == this.snippets.length)
            return true;
        else
            return false;
   }

    yearsAreCorrect() {
        let correctItems = [];
    //    console.log(regForYear);
        this.snippets.forEach(function(element){
            let genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText();
            let year = genreAndYear.slice(0, genreAndYear.indexOf(', '));
    //        console.log(year + ' ' + regForYear.test(year));
            if (regForYear.test(year) == true)
                correctItems.push(element);
        })
    //    console.log(correctItems.length + ' ' + this.snippets.length);
        if (correctItems.length == this.snippets.length)
            return true;
        else
            return false;
    }

    refsAreCorrect() {
        let correctItems = [];
    //    console.log(regForFilmRef);
        this.snippets.forEach(function(element){
            let ref = element.getProperty('href');
    //        console.log(ref + ' ' + regForFilmRef.test(ref));
            if (regForFilmRef.test(ref) == true)
                correctItems.push(element);
        })
    //    console.log(correctItems.length + ' ' + this.snippets.length);
        if (correctItems.length == this.snippets.length)
            return true;
        else
            return false;
    }

    ratingsAreCorrect() {
        let correctItems = [];
    //    console.log(regForRating);
        this.snippets.forEach(function(element){
            let rating = element.$('.film-rating-bar-partial-component').getText();
    //        console.log(rating + ' ' + regForRating.test(rating));
            if (regForRating.test(rating) == true)
                correctItems.push(element);
        })
    //    console.log(correctItems.length + ' ' + this.snippets.length);
        if (correctItems.length == this.snippets.length)
            return true;
        else
            return false;
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПРОКРУТКА КАРТОЧЕК"

    clickRightArrow() {
        this.arrowRight.click();
    }

    newSnippetsAreShown() {

    //TODO - можно через индекс отображаемого элемента
        this.snippets.forEach(function(element){
            let tit = element.$('.today-in-cinema-carousel-item__snippet-title').$('span span span');
            console.log("!!!!!!! " + tit.getText() + ' ' + element.$('img').isDisplayed());
        })
        return true;
    }

    leftArrowIsShown() {
        try {
            this.arrowLeft.waitForDisplayed();
        }
        catch (e) {
            return false;
        }
        return true;
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПОЯВЛЕНИЕ ВСПЛЫВАЮЩЕГО ПРЕВЬЮ"

    putMouseOnTitle() {
    //TODO - индекс первого видимого сниппета (вместо 5)
        this.snippets[5].scrollIntoView();
        this.snippets[5].moveTo();
        browser.pause(3000);
    }

    previewIsShown() {
        try {
            this.previewCard.waitForDisplayed();
        }
        catch (e) {
            return false;
        }
        return true;
    }

    titlesAreEqual() {
    //TODO - индекс певого видимого сниппета (вместо 5)
        let fullTitle = getFullTitle(this.snippets[5].$('.today-in-cinema-carousel-item__snippet-title').$$('span span span'));
    //    console.log('!!!!!! ' + this.previewCardTitle.getText() + ' = ' + fullTitle);
        if (this.previewCardTitle.getText().includes(fullTitle) == true)
            return true;
        else
            return false;
    }

    //МЕТОДЫ СЦЕНАРИЯ "НАЛИЧИЕ КНОПКИ ДЛЯ ПОКУПКИ БИЛЕТОВ"

    putMouseOnTicketButton() {
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
        this.ticketButton.scrollIntoView(false);
        this.ticketButton.moveTo();
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
    }

    bigTicketButtonIsShown() {
        if (this.bigTicketButton.isDisplayed() == true)
            return true;
        else
            return false;
    }

    ticketRefIsCorrect() {
        let ref = this.bigTicketButton.getProperty('href');
        console.log(ref + ' ' + regForTicketRef.test(ref));
        if (regForTicketRef.test(ref) == true)
            return true;
        else
            return false;
    }
}

module.exports = new TodayInCinema();