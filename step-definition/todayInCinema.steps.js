const {Given, When, Then} = require('@cucumber/cucumber');
const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
     browser.url(url);
     browser.maximizeWindow();
})

When ('навести курсор на название фильма', function() {
    TodayInCinemaPage.testMeth();
})

Then ('отображаются карточки', function() {
    expect(TodayInCinemaPage.snippetsAreDisplayed()).to.be.true;
})

Then ('у карточек есть картинки', function() {

})

Then ('есть корректные названия', function() {

})

Then ('есть корректный жанр', function() {

})

Then ('есть корректный год', function() {

})

Then ('есть корректная ссылка', function() {

})

Then ('есть корректный рейтинг', function() {

})
Then ('название фильма в окошке соответствует названию, на которое наведен курсор', function() {
    //TodayInCinemaPage.checkTitle();
})