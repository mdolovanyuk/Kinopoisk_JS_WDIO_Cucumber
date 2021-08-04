const {When} = require('@cucumber/cucumber');
const expect = require('chai').expect;

When ('навести курсор на название фильма', function() {
    //console.log('Координаты: ' + this.firstTitle.getLocation());
    //this.page.firstTitle.scrollIntoView({block : "center"});
    this.page.firstTitle.moveTo();
})

When ('нажать в карусели стрелку вправо', function() {
        var i = 0;
        this.page.snippets.forEach(function(element){
            if (element.$('img').isDisplayed() == true)
                i++;
        })
        this.snippetsCount = i;
        console.log('!!!!!! snippetsCount = ' + this.snippetsCount);
        this.page.arrowRight.click();
})

When ('навести курсор на кнопку с билетами', function() {
    //this.page.ticketButton.scrollIntoView({block : "center"});
    this.page.ticketButton.moveTo();
})

When ('нажать кнопку запуска видео', function() {
    this.page.playButton.click();
})

When ('прокрутить карусель влево', function() {
    //this.page.touchScroll();
})