const {When} = require('@cucumber/cucumber');
//const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
//const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
//const newTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;

When ('навести курсор на название фильма', function() {
        //console.log('Координаты: ' + this.firstTitle.getLocation());
        this.page.firstTitle.scrollIntoView({block : "center"});
        this.page.firstTitle.moveTo();
})

When ('нажать в карусели стрелку вправо', function() {
        var i = 0;
        this.page.snippets.forEach(function(element){
            if (element.$('img').isDisplayed() == true)
                i++;
        })
        this.snippetsCount = i;
        console.log('!!!!!! snippetsCount = ' + this.snippetsCount);
        this.page.arrowRight.click();
})

When ('навести курсор на кнопку с билетами', function() {
//    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
//    browser.pause(5000);
    this.page.ticketButton.scrollIntoView({block : "center"});
    this.page.ticketButton.moveTo();
//    browser.pause(5000);
//    console.log('!!!!! ' + this.bigTicketButton.isDisplayed());
})

When ('нажать кнопку запуска видео', function() {
    this.page.playButton.click();
})

When ('прокрутить карусель влево', function() {
    //this.page.touchScroll();
})