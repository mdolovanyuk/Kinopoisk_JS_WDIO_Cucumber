const {Given, When, Then} = require('@cucumber/cucumber');
const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
     browser.maximizeWindow();
     browser.url(url);
})

When ('навести курсор на название фильма', function() {
    TodayInCinemaPage.putMouseOnTitle();
})

When ('нажать в карусели стрелку вправо', function() {
    TodayInCinemaPage.clickRightArrow();
})

When ('навести курсор на кнопку с билетами', function() {
    TodayInCinemaPage.putMouseOnTicketButton();
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

Then ('появляются новые карточки', function() {
    expect(TodayInCinemaPage.newSnippetsAreShown()).to.be.true;
})

Then ('появляется стрелка прокрутки влево', function() {
    expect(TodayInCinemaPage.leftArrowIsShown()).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
    expect(TodayInCinemaPage.previewIsShown()).to.be.true;
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    expect(TodayInCinemaPage.titlesAreEqual()).to.be.true;
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    expect(TodayInCinemaPage.bigTicketButtonIsShown()).to.be.true;
})

Then ('у кнопки есть корректная ссылка', function() {
    expect(TodayInCinemaPage.ticketRefIsCorrect()).to.be.true;
})