/*const {Given, When, Then} = require('@cucumber/cucumber');
const NewTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
     browser.maximizeWindow();
     browser.url(url);
})

When ('навести курсор на название фильма', function() {
    NewTrailersPage.putMouseOnTitle();
})

When ('нажать в карусели стрелку вправо', function() {
    NewTrailersPage.clickRightArrow();
})

When ('нажать кнопку запуска видео', function() {
    NewTrailersPage.clickPlayButton();
})

Then ('отображаются карточки', function() {
    expect(NewTrailersPage.snippetsAreDisplayed()).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(NewTrailersPage.postersAreDisplayed()).to.be.true;
})

Then ('есть корректные названия', function() {
    expect(NewTrailersPage.titlesAreCorrect()).to.be.true;
})

Then ('есть корректный жанр', function() {
    expect(NewTrailersPage.genresAreCorrect()).to.be.true;
})

Then ('есть корректный год', function() {
    expect(NewTrailersPage.yearsAreCorrect()).to.be.true;
})

Then ('есть корректная ссылка', function() {
    expect(NewTrailersPage.refsAreCorrect()).to.be.true;
})

Then ('есть корректный рейтинг', function() {
    expect(NewTrailersPage.ratingsAreCorrect()).to.be.true;
})

Then ('появляются новые карточки', function() {
    expect(NewTrailersPage.newSnippetsAreShown()).to.be.true;
})

Then ('появляется стрелка прокрутки влево', function() {
    expect(NewTrailersPage.leftArrowIsShown()).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
    expect(NewTrailersPage.previewIsShown()).to.be.true;
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    expect(NewTrailersPage.titlesAreEqual()).to.be.true;
})

Then ('откроется виджет с плеером', function() {
    expect(NewTrailersPage.pleerIsShown()).to.be.true;
})*/