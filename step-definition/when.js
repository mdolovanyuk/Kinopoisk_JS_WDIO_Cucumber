const {When} = require('@cucumber/cucumber');
const expect = require('chai').expect;

When ('навести курсор на название фильма', function() {
  //  console.log('Координаты: ' + this.page.titles[0].getLocation());
   // this.page.titles[0].scrollIntoView({block : "center"});
 //   while(let i < this.page.snippets.length)
    this.page.titles[0].moveTo();
})

When ('нажать в карусели стрелку вправо', function() {
        var i = 0;
        this.page.posters.forEach(function(element){
            if (element.isDisplayed() == true)
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
