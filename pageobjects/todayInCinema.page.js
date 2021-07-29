const {regForTitle, regForGenre, regForYear} = require('../regexp');

class TodayInCinema {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get titles() {return $$('.today-in-cinema-carousel-item__snippet-title')};
    get refs() {return $('')};
    get ratings() {return $('')};
    get arrowLeft() {return $('.today-in-cinema-carousel-item__snippet-title.circle-arrow-button_direction_left')}; //data-tid у всех стрелок одинаковый
    get arrowRight() {return $('.today-in-cinema-carousel-item__snippet-title.circle-arrow-button_direction_right')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return previewCard.$('.preview-card-film__title')};


    testMeth() {
        //  \s!@#\$%&\*\(\)\-\+=№;:\?\.\,
        //  /[^\'\\\/\<\>\^\|]/
        //  /^(ftp|http|https):\/\/[^ "]+$/
        //var re =
        //var str = '';
        //console.log("!!!!!!!" + ' ' +re.test(str));
        //console.log("Количество карточек Сегодня в кино - " + this.snippet.length);
        //this.title.scrollIntoView()
        //this.title.moveTo(0,0);
        //browser.pause(5000);
    }

    snippetsAreDisplayed() {
        let displayedItems = [];
        this.snippets.forEach(function(element){
            if(element.isDisplayed() == true)
                displayedItems.push(element);
        })
        if(displayedItems.length > 0)
            return true;
        else
            return false;
    }

    postersAreDisplayed() {
        let displayedItems = [];
        this.snippets.forEach(function(element){
            if (element.$('img').isDisplayed() == true)
                displayedItems.push(element);
            //console.log(index + ' ' + element.$('span span span').getText() + ' ' + element.$('img').isDisplayed());
        })
        if(displayedItems.length > 0)
            return true;
        else
            return false;
    }

    titlesAreCorrect() {
        let correctItems = [];
        this.titles.forEach(function(element){
            let titleStrings = element.$$('span span span');
            let fullTitle = '';
            titleStrings.forEach(function(str){
                if(str.getHTML(false).includes('<') == false){
                    fullTitle = fullTitle + str.getText() + ' ';
                }
            })
            fullTitle = fullTitle.trim();
        //    console.log("!!!!!!!" +fullTitle + ' ' +regForTitle.test(fullTitle));
            if (regForTitle.test(fullTitle) == true)
                correctItems.push(element);
        })
      //  console.log(correctItems.length + ' ' + this.titles.length);
        if(correctItems.length == this.titles.length)
            return true;
        else
            return false;
    }

    genresAreCorrect() {
        let correctItems = [];
     //   console.log(regForGenre);
        this.snippets.forEach(function(element){
            let genreAndYear = element.$('.film-poster-snippet-partial-component__caption').getText();
            let genre = genreAndYear.slice(genreAndYear.indexOf(', ') + 2);
    //        console.log(genre + ' ' + regForGenre.test(genre));
            if (regForGenre.test(genre) == true)
                correctItems.push(element);
        })
   //     console.log(correctItems.length + ' ' + this.snippets.length);
        if(correctItems.length == this.snippets.length)
            return true;
        else
            return false;    }

    yearsAreCorrect() {
        return true;
    }

    refsAreCorrect() {
        return true;
    }

    ratingsAreCorrect() {
        return true;
    }

}

module.exports = new TodayInCinema();