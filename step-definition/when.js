const {When} = require('@cucumber/cucumber');
const expect = require('chai').expect;
const {waitElement, littleWait, log} = require('../commands/commands');

When ('навести курсор на название фильма', function() {
    this.previewCards = [];
    this.previewCardsTitle = [];
    for(let i=0; i<this.page.snippets.length; i++) {
        this.page.wholeTitles[i].moveTo();
        if (this.page.wholeTitles[i].getLocation('x') >= this.page.carousel.getLocation('x') + this.page.carousel.getSize('width')) {
            this.page.arrowRight.click();
            littleWait();
            this.page.wholeTitles[i].moveTo();
            waitElement(this.page.previewCard);
        }
        if (i!=0) {
            while(this.previewCardsTitle[i-1] == this.page.previewCardTitle.getText())
                waitElement(this.page.previewCard);
        }
        this.previewCards.push(this.page.previewCard);
        try {
            this.previewCardsTitle.push(this.page.previewCardTitle.getText());
        } catch {
            this.page.wholeTitles[i].moveTo();
            this.previewCardsTitle.push(this.page.previewCardTitle.getText());
        }
        this.page.blockTitle.moveTo();
    }
})

When ('нажать в карусели стрелку вправо', function() {
        var i = 0;
        this.page.posters.forEach(function(element){
            if (element.isDisplayedInViewport() == true)
                i++;
        })
        this.snippetsCount = i;
        log('!!!!!! snippetsCount = ' + this.snippetsCount);
        this.page.arrowRight.click();
})

When ('навести курсор на кнопку с билетами', function() {
    if (this.page.ticketButtons.length != this.page.snippets.length)
        console.log ("Не у всех карточек есть кнопки");
    this.bigTicketButtonsCount = 0;
    for(let i=0; i<this.page.ticketButtons.length; i++) {
        this.page.ticketButtons[i].moveTo();
        if (this.page.ticketButtons[i].getLocation('x') >= this.page.carousel.getLocation('x') + this.page.carousel.getSize('width')) {
            this.page.arrowRight.click();
            littleWait();
            this.page.ticketButtons[i].moveTo();
        }
        if(waitElement(this.page.bigTicketButtons[i]) == 1) {
            this.bigTicketButtonsCount++;
        }
    }
})

When ('нажать кнопку запуска видео', function() {
    this.playerCount = 0;
    for(let i=0; i<this.page.snippets.length; i++) {
        this.page.playButtons[i].waitForDisplayed();
        if (this.page.playButtons[i].getLocation('x') >= this.page.carousel.getLocation('x') + this.page.carousel.getSize('width')) {
            this.page.arrowRight.click();
            littleWait();
            this.page.playButtons[i].waitForDisplayed();
        }
        this.page.playButtons[i].click();
        if (waitElement(this.page.player) == 1){
            this.playerCount++;
            this.page.closePlayerBtn.waitForDisplayed();
            this.page.closePlayerBtn.click();
        }
    }
})
