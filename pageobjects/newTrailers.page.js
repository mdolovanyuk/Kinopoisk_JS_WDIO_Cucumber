const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/todayInCinema.com');

class NewTrailersPage {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('div[data-tid = "f0448ef1"]').$('.preview-card-film__title')};


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

    //МЕТОДЫ СЦЕНАРИЯ "РАБОТА КНОПКИ ЗАПУСКА ВИДЕО"

    clickPlayButton() {
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
        this.ticketButton.scrollIntoView(false);
        this.ticketButton.moveTo();
    //    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
    }

    pleerIsShown() {
        if (this.bigTicketButton.isDisplayed() == true)
            return true;
        else
            return false;
    }
}

module.exports = new NewTrailersPage();