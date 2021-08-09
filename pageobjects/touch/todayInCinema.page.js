class TodayInCinemaPage {
    get blockTitle() {return $('//h3[text()="Смотрите в кино"]')}; // touch
    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get posters() {return $$('.today-in-cinema__carousel img')};
    get titles() {return $$('.today-in-cinema__carousel .today-in-cinema-carousel-item__snippet-title span span span')};
    get genresAndYears() {return $$('.film-poster-snippet__caption.film-poster-snippet__caption_theme_default')}; // touch
    get ratings() {return $$('.film-rating-bar_scaled')}; // touch
    get refs() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get ticketButton() {return $('.nameplate__item_type_tickets')};
    get bigTicketButton() {return $('.nameplate__button_type_tickets')};
    get closeBlockingWindowBtn() { return $('.eJXgiU')}; //touch
}

module.exports = new TodayInCinemaPage();