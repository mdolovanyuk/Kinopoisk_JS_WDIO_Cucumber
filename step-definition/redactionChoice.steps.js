/*const {Given, When, Then} = require('@cucumber/cucumber');
const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
     browser.maximizeWindow();
     browser.url(url);
})

When ('нажать в карусели стрелку вправо', function() {
    RedactionChoicePage.clickRightArrow();
})

Then ('отображаются карточки', function() {
    expect(RedactionChoicePage.snippetsAreDisplayed()).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(RedactionChoicePage.postersAreDisplayed()).to.be.true;
})

Then ('есть корректные названия', function() {
    expect(RedactionChoicePage.titlesAreCorrect()).to.be.true;
})

Then ('есть корректный жанр', function() {
    expect(RedactionChoicePage.genresAreCorrect()).to.be.true;
})

Then ('есть корректный год', function() {
    expect(RedactionChoicePage.yearsAreCorrect()).to.be.true;
})

Then ('есть корректная ссылка', function() {
    expect(RedactionChoicePage.refsAreCorrect()).to.be.true;
})

Then ('есть корректный рейтинг', function() {
    expect(RedactionChoicePage.ratingsAreCorrect()).to.be.true;
})

Then ('появляются новые карточки', function() {
    expect(RedactionChoicePage.newSnippetsAreShown()).to.be.true;
})

Then ('появляется стрелка прокрутки влево', function() {
    expect(RedactionChoicePage.leftArrowIsShown()).to.be.true;
})*/