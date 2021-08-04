const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/commands');

var snippetsCount = 0;

class TodayInCinemaPage {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get firstTitle() { return $('.today-in-cinema-carousel-item__snippet').$('.today-in-cinema-carousel-item__snippet-title')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get ticketButton() {return $('.nameplate__item_type_tickets')};
    get bigTicketButton() {return $('.nameplate__button_type_tickets')};


    showBlock() {
        this.carousel.scrollIntoView({block : "center"});
    }

    //МЕТОДЫ СЦЕНАРИЯ "ОТОБРАЖЕНИЕ КАРТОЧЕК"

    snippetsAreDisplayed() {
        return checkDisplay('snippet', this.snippets);
    }

    postersAreDisplayed() {
        return checkDisplay('poster', this.snippets);
    }

    titlesAreCorrect() {
        return checkCorrect('title', regForTitle, this.snippets);
    }

    genresAreCorrect() {
        return checkCorrect('genre', regForGenre, this.snippets);
   }

    yearsAreCorrect() {
        return checkCorrect('year', regForYear, this.snippets);
    }

    refsAreCorrect() {
        return checkCorrect('ref', regForFilmRef, this.snippets);
    }

    ratingsAreCorrect() {
        return checkCorrect('rating', regForRating, this.snippets);
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПРОКРУТКА КАРТОЧЕК"

    touchScroll() {

    }

    clickRightArrow() {
        this.snippets.forEach(function(element){
            if (element.$('img').isDisplayed() == true)
            snippetsCount++;
        })
        console.log('!!!!!! snippetsCount = ' + snippetsCount);
        this.arrowRight.click();
    }

    newSnippetsAreShown() {
        var newSnippetsCount = 0;
        this.snippets.forEach(function(element){
            if (element.isDisplayed() == true)
                newSnippetsCount++;
        })
        console.log('!!!!!! newSnippetsCount = ' + newSnippetsCount);
        if (newSnippetsCount > snippetsCount)
            return true;
        else
            return false;
    }

    leftArrowIsShown() {
        try {
            this.arrowLeft.waitForDisplayed();
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПОЯВЛЕНИЕ ВСПЛЫВАЮЩЕГО ПРЕВЬЮ"

    putMouseOnTitle() {
        this.firstTitle.scrollIntoView({block : "center"});
        this.firstTitle.moveTo();
    }

    previewIsShown() {
        try {
            this.previewCard.waitForDisplayed();
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    titlesAreEqual() {
        let fullTitle = getFullTitle(this.firstTitle.$$('span span span'));
    //    console.log('!!!!!! ' + this.previewCardTitle.getText() + ' = ' + fullTitle);
        if (this.previewCardTitle.getText().includes(fullTitle) == true)
            return true;
        else
            return false;
    }

    //МЕТОДЫ СЦЕНАРИЯ "НАЛИЧИЕ КНОПКИ ДЛЯ ПОКУПКИ БИЛЕТОВ"

    putMouseOnTicketButton() {
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
        browser.pause(5000);
        this.ticketButton.scrollIntoView({block : "center"});
        this.ticketButton.moveTo();
        browser.pause(5000);
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
    }

    bigTicketButtonIsShown() {
        if (this.bigTicketButton.isDisplayed() == true)
            return true;
        else
            return false;
    }

    ticketRefIsCorrect() {
        return checkCorrect('ref', regForTicketRef, [this.bigTicketButton]);
    }
}

module.exports = new TodayInCinemaPage();