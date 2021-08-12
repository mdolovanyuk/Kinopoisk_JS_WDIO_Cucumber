const {Then} = require('@cucumber/cucumber');
const expect = require('chai').expect;
const {checkDisplay, checkText, checkAttribute, getFullTitles, waitElement, littleWait, log} = require('../commands/commands');
const {regForTitle, regForGenre, regForYear, regForFilmRef, regForRating, regForTicketRef, regForRedChoiceRef} = require('../regexp');

Then ('отображаются карточки', function() {
    if (this.mode == 'desctop') {
        while (this.page.arrowRight.isDisplayed()) {
            this.page.arrowRight.click();
            littleWait();
        }
    }
    if (this.mode == 'touch') {
        this.page.blockTitle.click();
        browser.keys("Tab");
        browser.keys("Tab");
        while (1) {
            let startX;
            let finishX;
            try{
                startX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
            } catch {
                littleWait();
                startX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
            }
            browser.keys("ArrowRight");
            try{
                finishX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
            } catch {
                littleWait();
                finishX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
            }
            if (startX == finishX) {
                littleWait();
                browser.keys("ArrowRight");
                try {
                    finishX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
                } catch {
                    littleWait();
                    finishX = this.page.snippets[this.page.snippets.length-1].getLocation('x');
                }
                if (startX ==finishX)
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
    expect(waitElement(this.page.arrowLeft), "Ошибка ожидания загрузки").to.be.equal(1);
})

Then ('появляются новые карточки', function() {
    var newSnippetsCount = 0;
    littleWait();
    this.page.posters.forEach(function(element){
        if (element.isDisplayedInViewport() == true)
            newSnippetsCount++;
    })
    log('!!!!!! newSnippetsCount = ' + newSnippetsCount);
    expect(newSnippetsCount > this.snippetsCount).to.be.true;
})

Then ('слева снизу появляется всплывающее превью', function() {
    expect(this.previewCards.length).to.be.equal(this.page.snippets.length);
})

Then ('название фильма в превью соответствует названию, на которое наведен курсор', function() {
    let fullTitleText = getFullTitles(this.page.snippets, this.page.titles);
    let equalTitlesCount = 0;
    for(let i=0; i<this.page.snippets.length; i++) {
        log('!!!!!! ' + this.previewCardsTitle[i] + ' *= ' + fullTitleText[i]);
        if(fullTitleText[i] != '' && this.previewCardsTitle[i].includes(fullTitleText[i]))
            equalTitlesCount++;
    }
    expect(equalTitlesCount).to.equal(this.page.snippets.length);
})

Then ('появляется большая кнопка с надписью "Билеты"', function() {
    //expect(this.page.bigTicketButton.isDisplayed()).to.be.true;
    expect(this.bigTicketButtonsCount).to.be.equal(this.page.snippets.length);
})

Then ('у кнопки есть корректная ссылка', function() {
    let refsText = [];
    this.page.bigTicketButtons.forEach (function (element){
        refsText.push(element.getProperty('href'));
    })
    expect(checkText(regForTicketRef, refsText)).to.be.equal(this.page.snippets.length);
})

Then ('откроется виджет с плеером', function() {
    expect(this.playerCount).to.be.equal(this.page.snippets.length);
})