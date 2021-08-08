class RedactionChoicePage {
    get carousel() {return $('//h3[text()="Выбор редакции"]/following-sibling::div')};
    get snippets() {return $$('.cinema-review-snippet')};
    get posters() {return $$('.cinema-review-snippet img')};
    get refs() {return $$('.cinema-review-snippet')};
    get arrowRight() {return $('//h3[text()="Выбор редакции"]/following-sibling::div').$('.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('//h3[text()="Выбор редакции"]/following-sibling::div').$('.circle-arrow-button_direction_left')};
    get closeBlockWindowBtn() { return $('div.eJXgiU')}; // touch
    get sectionTitle() { return $('//h3[text() = "Выбор редакции"]')}; // touch
}

module.exports = new RedactionChoicePage();