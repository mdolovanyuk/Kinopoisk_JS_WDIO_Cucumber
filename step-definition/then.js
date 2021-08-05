const {Then} = require('@cucumber/cucumber');
const expect = require('chai').expect;
const {checkDisplay, checkText, checkAttribute, getFullTitles} = require('../commands/commands');
const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef, regForRedChoiceRef} = require('../regexp');

Then ('отображаются карточки', function() {
    expect(checkDisplay(this.page.snippets)).to.be.true;
})

Then ('у карточек есть картинки', function() {
    expect(checkDisplay(this.page.posters)).to.be.true;
})

Then ('есть корректные названия', function() {
    let fullTitlesText = getFullTitles(this.page.snippets, this.page.titles);
    expect(checkText(regForTitle, fullTitlesText)).to.be.true;
})

Then ('есть корректный жанр', function() {
    let genresText = [];
    this.page.genresAndYears.forEach (function (element){
        genresText.push(element.getText().slice(element.getText().indexOf(', ') + 2));
    })
    expect(checkText(regForGenre, genresText)).to.be.true;
})

Then ('есть корректный год', function() {
    let yearsText = [];
    this.page.genresAndYears.forEach (function (element){
        yearsText.push(element.getText().slice(0, element.getText().indexOf(', ')));
    })
    expect(checkText(regForYear, yearsText)).to.be.true;
})

Then ('есть корректная ссылка', function() {
     let refsText = [];
     this.page.refs.forEach (function (element){
         refsText.push(element.getProperty('href'));
     })
     switch (this.unit) {
        case 'Смотрите в кино' :
        case 'Новые трейлеры' :
            expect(checkText(regForFilmRef, refsText)).to.be.true;
            break;
        case 'Выбор редакции' :
            expect(checkText(regForRedChoiceRef, refsText)).to.be.true;
            break;
    }
})

Then ('есть корректный рейтинг', function() {
    expect(checkAttribute(regForRating, this.page.ratings)).to.be.true;
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
    this.page.posters.forEach(function(element){
        if (element.isDisplayed() == true)
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
    let fullTitleText = getFullTitles([this.page.snippets[0]], this.page.titles);
    console.log('!!!!!! ' + this.page.previewCardTitle.getText() + ' *= ' + fullTitleText);
    expect(this.page.previewCardTitle.getText()).to.include(fullTitleText);
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    expect(this.page.bigTicketButton.isDisplayed()).to.be.true;
})

Then ('у кнопки есть корректная ссылка', function() {
    expect(checkText(regForTicketRef, [this.page.bigTicketButton.getProperty('href')])).to.be.true;
})

Then ('откроется виджет с плеером', function() {
    try {
        this.page.player.waitForDisplayed();
    }
    catch (e) {
        expect(e).to.be.null;
    }
})