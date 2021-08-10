class NewTrailersPage {
    get blockTitle() {return $('//h3[text()="Новые трейлеры"]')};
    get carousel() {return $('.new-trailers__carousel')};
    get snippets() {return $$('[data-tid = "f3f9a9b3"]')};
    get posters() {return $$('[data-tid="f3f9a9b3"] img')};
    get titles() {return $$('[data-tid="f3f9a9b3"] span span span')};
    get wholeTitles() {return $$('[data-tid = "f3f9a9b3"] a')};
    get genresAndYears() {return $$('//div[@data-tid = "f3f9a9b3"]/div[2]')};
    get refs() {return $$('[data-tid = "f3f9a9b3"] a')};
    get arrowRight() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get playButtons() { return $$('//span[@data-tid = "182e6b7c"]/..')};
    get player() { return $('iframe.discovery-trailers-iframe')}; // desctop
    get closePlayerBtn() { return $('.discovery-trailers-closer')};
}

module.exports = new NewTrailersPage();