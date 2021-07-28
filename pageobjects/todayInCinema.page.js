class TodayInCinema {

    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get poster() {return $('')};
    get title() {return $('.today-in-cinema-carousel-item__snippet-title')};
    get genre() {return $('')};
    get year() {return $('')};
    get ref() {return $('')};
    get rating() {return $('')};
    get arrowLeft() {return $('.today-in-cinema-carousel-item__snippet-title.circle-arrow-button_direction_left')}; //data-tid у всех стрелок одинаковый
    get arrowRight() {return $('.today-in-cinema-carousel-item__snippet-title.circle-arrow-button_direction_right')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return previewCard.$('.preview-card-film__title')};


    testMeth() {
        console.log("Количество карточек Сегодня в кино - " + this.snippet.length);
        //this.title.scrollIntoView()
        //this.title.moveTo(0,0);
        //browser.pause(5000);
    }

    snippetsAreDisplayed() {
        //browser.pause(10000);
            this.carousel.scrollIntoView();
            this.snippets.forEach(function(element, index){
            console.log(index + " " + element.isDisplayedInViewport());
            if(element.isDisplayedInViewport())

        })
      //  console.log("!!!!!!!" + this.snippets.isDisplayed());
        return true;
    }
}

module.exports = new TodayInCinema();