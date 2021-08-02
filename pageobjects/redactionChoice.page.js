const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/todayInCinema.com');

class RedactionChoicePage {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};


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
}

module.exports = new RedactionChoicePage();