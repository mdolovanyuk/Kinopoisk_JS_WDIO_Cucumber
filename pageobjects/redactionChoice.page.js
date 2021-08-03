const {regForRedChoiceRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/commands');

class RedactionChoicePage {

    get carousel() {return $('._26U9ddckRECoOhWRhmdv4k')};
    get snippets() {return $$('.cinema-review-snippet')};
    get arrowRight() {return $('.J47sOuGcNwDHkHCQlPPju.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.J47sOuGcNwDHkHCQlPPju.circle-arrow-button_direction_left')};

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

    refsAreCorrect() {
        return checkCorrect('ref', regForRedChoiceRef, this.snippets);
    }

    //МЕТОДЫ СЦЕНАРИЯ "ПРОКРУТКА КАРТОЧЕК"

    clickRightArrow() {
        this.arrowRight.click();
    }

    newSnippetsAreShown() {

    //TODO - можно через индекс отображаемого элемента
        this.snippets.forEach(function(element){

            console.log("!!!!!!! " + element + ' ' + element.$('img').isDisplayed());
        })
        return true;
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
}

module.exports = new RedactionChoicePage();