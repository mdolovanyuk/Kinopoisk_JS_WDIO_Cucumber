const {Then} = require('@cucumber/cucumber');
//const this.page = require('../pageobjects/todayInCinema.page');
//const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
//const newTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;
const {checkDisplay, checkCorrect, getFullTitle} = require('../commands/commands');
const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef, regForRedChoiceRef} = require('../regexp');

Then ('отображаются карточки', function() {
    expect(checkDisplay('snippet', this.page.snippets)).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(checkDisplay('poster', this.page.snippets)).to.be.true;
})

Then ('есть корректные названия', function() {
    switch (this.unit) {
        case 'Смотрите в кино' :
            expect(checkCorrect('title', regForTitle, this.page.snippets)).to.be.true;
            break;
        case 'Новые трейлеры' :
            expect(checkCorrect('titleNewTrailers', regForTitle, this.page.snippets)).to.be.true;
            break;
        default:
            expect(false, 'Пропущен шаг \'есть корректные названия\'').to.be.true;
    }
})

Then ('есть корректный жанр', function() {
     switch (this.unit) {
        case 'Смотрите в кино' :
            expect(checkCorrect('genre', regForGenre, this.page.snippets)).to.be.true;
            break;
        case 'Новые трейлеры' :
            expect(checkCorrect('genreNewTrailers', regForGenre, this.page.snippets)).to.be.true;
            break;
        default:
            expect(false, 'Пропущен шаг \'есть корректный жанр\'').to.be.true;
    }
})

Then ('есть корректный год', function() {
     switch (this.unit) {
        case 'Смотрите в кино' :
            expect(checkCorrect('year', regForYear, this.page.snippets)).to.be.true;
            break;
        case 'Новые трейлеры' :
            expect(checkCorrect('yearNewTrailers', regForYear, this.page.snippets)).to.be.true;
            break;
        default:
            expect(false, 'Пропущен шаг \'есть корректный год\'').to.be.true;
    }
})

Then ('есть корректная ссылка', function() {
     switch (this.unit) {
        case 'Смотрите в кино' :
            expect(checkCorrect('ref', regForFilmRef, this.page.snippets)).to.be.true;
            break;
        case 'Выбор редакции' :
            expect(checkCorrect('ref', regForRedChoiceRef, this.page.snippets)).to.be.true;
            break;
        case 'Новые трейлеры' :
            expect(checkCorrect('refNewTrailers', regForFilmRef, this.page.snippets)).to.be.true;
            break;
        default:
            expect(false, 'Пропущен шаг \'есть корректная ссылка\'').to.be.true;
    }
})

Then ('есть корректный рейтинг', function() {
    expect(checkCorrect('rating', regForRating, this.page.snippets)).to.be.true;
})

Then ('появляется стрелка прокрутки влево', function() {
    try {
        this.page.arrowLeft.waitForDisplayed();
    }
    catch (e) {
        expect(e).to.be.null;
    }
})

Then ('появляются новые карточки', function() {
    var newSnippetsCount = 0;
    this.page.snippets.forEach(function(element){
        if (element.$('img').isDisplayed() == true)
            newSnippetsCount++;
    })
    console.log('!!!!!! newSnippetsCount = ' + newSnippetsCount);
    expect(newSnippetsCount > this.snippetsCount).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
        try {
            this.page.previewCard.waitForDisplayed();
        }
        catch (e) {
            expect(e).to.be.null;
        }
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    let fullTitle = getFullTitle(this.page.firstTitle.$$('span span span'));
    console.log('!!!!!! ' + this.page.previewCardTitle.getText() + ' *= ' + fullTitle);
    expect(this.page.previewCardTitle.getText()).to.include(fullTitle);
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    expect(this.page.bigTicketButton.isDisplayed()).to.be.true;
})

Then ('у кнопки есть корректная ссылка', function() {
    expect(checkCorrect('ref', regForTicketRef, [this.page.bigTicketButton])).to.be.true;
})

Then ('откроется виджет с плеером', function() {
    try {
        this.page.player.waitForDisplayed();
    }
    catch (e) {
        expect(e).to.be.null;
    }
})