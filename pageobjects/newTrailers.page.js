class NewTrailersPage {
    get carousel() {return $('.new-trailers__carousel')};
    get snippets() {return $$('[data-tid = "f3f9a9b3"]')};
    get arrowRight() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.new-trailers__carousel-button.circle-arrow-button_direction_left')};
    get firstTitle() { return $('[data-tid = "f3f9a9b3"]').$('a')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get playButton() { return $('//span[@data-tid = "182e6b7c"]/..')};
    get player() { return $('iframe.discovery-trailers-iframe')}; // desctop
   // get player() { return $('iframe[data-tid = "bc52a00f"]')}; // touch
}

module.exports = new NewTrailersPage();