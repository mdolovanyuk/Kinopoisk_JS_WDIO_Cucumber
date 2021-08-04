const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/commands');

var snippetsCount = 0;

class NewTrailersPage {

    get carousel() {return $('.new-trailers__carousel')};
    get snippets() {return $$('[data-tid = "f3f9a9b3"]')};
    get arrowRight() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_left')};
    get firstTitle() { return $('[data-tid = "f3f9a9b3"]').$('a')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get playButton() { return $('._35qy5akYsP3U1o_dxlSjm7')};
    get player() { return $('iframe.discovery-trailers-iframe')}; // desctop
   // get player() { return $('iframe[data-tid = "bc52a00f"]')}; // touch

    showBlock() {
        this.carousel.scrollIntoView(false);
    }

    //МЕТОДЫ СЦЕНАРИЯ "ОТОБРАЖЕНИЕ КАРТОЧЕК"

    snippetsAreDisplayed() {
        return checkDisplay('snippet', this.snippets);
    }

    postersAreDisplayed() {
        return checkDisplay('poster', this.snippets);
    }

    titlesAreCorrect() {
        return checkCorrect('titleNewTrailers', regForTitle, this.snippets);
    }

    genresAreCorrect() {
        return checkCorrect('genreNewTrailers', regForGenre, this.snippets);
   }

    yearsAreCorrect() {
        return checkCorrect('yearNewTrailers', regForYear, this.snippets);
    }

    refsAreCorrect() {
        return checkCorrect('refNewTrailers', regForFilmRef, this.snippets);
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПРОКРУТКА КАРТОЧЕК"

    clickRightArrow() {
        this.snippets.forEach(function(element){
            if (element.isDisplayed() == true)
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
    //TODO - индекс первого видимого сниппета (вместо 0)
        this.firstTitle.scrollIntoView(false);
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
    //TODO - индекс певого видимого сниппета (вместо 5)
        let fullTitle = getFullTitle(this.firstTitle.$$('span span span'));
    //    console.log('!!!!!! ' + this.previewCardTitle.getText() + ' = ' + fullTitle);
        if (this.previewCardTitle.getText().includes(fullTitle) == true)
            return true;
        else
            return false;
    }

    //МЕТОДЫ СЦЕНАРИЯ "РАБОТА КНОПКИ ЗАПУСКА ВИДЕО"

    clickPlayButton() {
        this.playButton.click();
    }

    playerIsShown() {
        //console.log(this.player + ' ' + this.player.isDisplayed());
        try {
            this.player.waitForDisplayed();
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }
}

module.exports = new NewTrailersPage();