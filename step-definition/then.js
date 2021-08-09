const {Then} = require('@cucumber/cucumber');
const expect = require('chai').expect;
const {checkDisplay, checkText, checkAttribute, getFullTitles, waitElement} = require('../commands/commands');
const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef, regForRedChoiceRef} = require('../regexp');

Then ('отображаются карточки', function() {
    if (this.mode == 'desctop') {
        while (this.page.arrowRight.isDisplayed()) {
            this.page.arrowRight.click();
            browser.pause(1000);
        }
    }
    if (this.mode == 'touch') {
        this.page.blockTitle.click();
        browser.keys("Tab");
        browser.keys("Tab");
        while (1) {
            browser.keys("ArrowRight");
            if(this.page.posters[this.page.snippets.length-1].isDisplayedInViewport()) {
                browser.pause(1000);
                if(this.page.posters[this.page.snippets.length-1].isDisplayedInViewport)
                    break;
            }
        }
    }
    expect(checkDisplay(this.page.snippets)).to.be.equal(this.page.snippets.length);
})

Then ('у карточек есть картинки', function() {
    expect(checkDisplay(this.page.posters)).to.be.equal(this.page.snippets.length);
})

Then ('есть корректные названия', function() {
    let fullTitlesText = getFullTitles(this.page.snippets, this.page.titles);
    expect(checkText(regForTitle, fullTitlesText)).to.be.equal(this.page.snippets.length);
})

Then ('есть корректный жанр', function() {
    let genresText = [];
    this.page.genresAndYears.forEach (function (element){
        genresText.push(element.getText().slice(element.getText().indexOf(', ') + 2));
    })
    expect(checkText(regForGenre, genresText)).to.be.equal(this.page.snippets.length);
})

Then ('есть корректный год', function() {
    let yearsText = [];
    this.page.genresAndYears.forEach (function (element){
        yearsText.push(element.getText().slice(0, element.getText().indexOf(', ')));
    })
    expect(checkText(regForYear, yearsText)).to.be.equal(this.page.snippets.length);
})

Then ('есть корректная ссылка', function() {
     let refsText = [];
     this.page.refs.forEach (function (element){
         refsText.push(element.getProperty('href'));
     })
     switch (this.unit) {
        case 'Смотрите в кино' :
        case 'Новые трейлеры' :
            expect(checkText(regForFilmRef, refsText)).to.be.equal(this.page.snippets.length);
            break;
        case 'Выбор редакции' :
            expect(checkText(regForRedChoiceRef, refsText)).to.be.equal(this.page.snippets.length);
            break;
    }
})

Then ('есть корректный рейтинг', function() {
    expect(checkAttribute(regForRating, this.page.ratings)).to.be.equal(this.page.snippets.length);
})

Then ('появляется стрелка прокрутки влево', function() {
    expect(waitElement(this.page.arrowLeft), "Ошибка ожидания загрузки").to.be.undefined;
})

Then ('появляются новые карточки', function() {
    var newSnippetsCount = 0;
    browser.pause(1000);
    this.page.posters.forEach(function(element){
        if (element.isDisplayedInViewport() == true)
            newSnippetsCount++;
    })
    console.log('!!!!!! newSnippetsCount = ' + newSnippetsCount);
    expect(newSnippetsCount > this.snippetsCount).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
    expect(waitElement(this.page.previewCard), "Ошибка ожидания загрузки").to.be.undefined;
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    let fullTitleText = getFullTitles([this.page.snippets[0]], this.page.titles);
    console.log('!!!!!! ' + this.page.previewCardTitle.getText() + ' *= ' + fullTitleText);
    expect(fullTitleText).is.not.equal('');
    expect(this.page.previewCardTitle.getText()).to.include(fullTitleText);
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    //expect(this.page.bigTicketButton.isDisplayed()).to.be.true;
    expect(waitElement(this.page.bigTicketButton), "Ошибка ожидания загрузки").to.be.undefined;
})

Then ('у кнопки есть корректная ссылка', function() {
    expect(checkText(regForTicketRef, [this.page.bigTicketButton.getProperty('href')])).to.be.equal(1);
})

Then ('откроется виджет с плеером', function() {
    expect(waitElement(this.page.player), "Ошибка ожидания загрузки").to.be.undefined;
})