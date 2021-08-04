const {regForRedChoiceRef} = require('../regexp');
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/commands');

var snippetsCount = 0;

class RedactionChoicePage {

    get carousel() {return $('._26U9ddckRECoOhWRhmdv4k')};
    get snippets() {return $$('.cinema-review-snippet')};
    get arrowRight() {return $('.J47sOuGcNwDHkHCQlPPju.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.J47sOuGcNwDHkHCQlPPju.circle-arrow-button_direction_left')};

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

    refsAreCorrect() {
        return checkCorrect('ref', regForRedChoiceRef, this.snippets);
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
}

module.exports = new RedactionChoicePage();