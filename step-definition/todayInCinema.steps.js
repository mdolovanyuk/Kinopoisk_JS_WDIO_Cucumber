const {Given, When, Then} = require('@cucumber/cucumber');
const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
     browser.maximizeWindow();
     browser.url(url);
})

When ('навести курсор на название фильма', function() {
    TodayInCinemaPage.testMeth();
})

Then ('отображаются карточки', function() {
    expect(TodayInCinemaPage.snippetsAreDisplayed()).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(TodayInCinemaPage.postersAreDisplayed()).to.be.true;
})

Then ('есть корректные названия', function() {
    expect(TodayInCinemaPage.titlesAreCorrect()).to.be.true;
})

Then ('есть корректный жанр', function() {
    expect(TodayInCinemaPage.genresAreCorrect()).to.be.true;
})

Then ('есть корректный год', function() {
    expect(TodayInCinemaPage.yearsAreCorrect()).to.be.true;
})

Then ('есть корректная ссылка', function() {
    expect(TodayInCinemaPage.refsAreCorrect()).to.be.true;
})

Then ('есть корректный рейтинг', function() {
    expect(TodayInCinemaPage.ratingsAreCorrect()).to.be.true;
})
Then ('название фильма в окошке соответствует названию, на которое наведен курсор', function() {
    //TodayInCinemaPage.checkTitle();
})