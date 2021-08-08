class NewTrailersPage {
    get carousel() {return $('.new-trailers__carousel')};
    get snippets() {return $$('[data-tid = "f3f9a9b3"]')};
    get posters() {return $$('[data-tid="f3f9a9b3"] img')};
    get titles() {return $$('[data-tid="f3f9a9b3"] span span span')};
    get genresAndYears() {return $$('//div[@data-tid = "f3f9a9b3"]/div[2]')};
    get refs() {return $$('[data-tid = "f3f9a9b3"] a')};
    get arrowRight() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get playButton() { return $('//span[@data-tid = "182e6b7c"]/..')};
    get player() { return $('iframe[data-tid = "bc52a00f"]')}; // touch
    get closeBlockWindowBtn() { return $('div.eJXgiU')}; // touch
    get sectionTitle() { return $('//h3[text() = "Новые трейлеры"]')}; // touch
}
/*
closeBlockWindow = function() {
    if (this.closeBlockWindowBtn.isExisting())
        this.closeBlockWindowBtn.click();
}

snippetsSwipe = function() {
    this.carousel.focus();
    browser.keys("ArrowRight");
}
*/

module.exports = new NewTrailersPage();