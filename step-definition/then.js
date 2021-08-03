const {Then} = require('@cucumber/cucumber');
//const this.page = require('../pageobjects/todayInCinema.page');
//const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
//const newTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;

Then ('отображаются карточки', function() {
    expect(this.page.snippetsAreDisplayed()).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(this.page.postersAreDisplayed()).to.be.true;
})

Then ('есть корректные названия', function() {
    expect(this.page.titlesAreCorrect()).to.be.true;
})

Then ('есть корректный жанр', function() {
    expect(this.page.genresAreCorrect()).to.be.true;
})

Then ('есть корректный год', function() {
    expect(this.page.yearsAreCorrect()).to.be.true;
})

Then ('есть корректная ссылка', function() {
    expect(this.page.refsAreCorrect()).to.be.true;
})

Then ('есть корректный рейтинг', function() {
    expect(this.page.ratingsAreCorrect()).to.be.true;
})

Then ('появляются новые карточки', function() {
    expect(this.page.newSnippetsAreShown()).to.be.true;
})

Then ('появляется стрелка прокрутки влево', function() {
    expect(this.page.leftArrowIsShown()).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
    expect(this.page.previewIsShown()).to.be.true;
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    expect(this.page.titlesAreEqual()).to.be.true;
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    expect(this.page.bigTicketButtonIsShown()).to.be.true;
})

Then ('у кнопки есть корректная ссылка', function() {
    expect(this.page.ticketRefIsCorrect()).to.be.true;
})

Then ('откроется виджет с плеером', function() {
    expect(this.page.playerIsShown()).to.be.true;
})