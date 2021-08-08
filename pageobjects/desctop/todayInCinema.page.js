class TodayInCinemaPage {
    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get posters() {return $$('.today-in-cinema__carousel img')};
    get titles() {return $$('.today-in-cinema__carousel .today-in-cinema-carousel-item__snippet-title span span span')};
    get genresAndYears() {return $$('.today-in-cinema__carousel .film-poster-snippet-partial-component__caption')}; //desctop
    get ratings() {return $$('.today-in-cinema__carousel .film-rating-bar-partial-component')}; //desctop
    get refs() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get ticketButton() {return $('.nameplate__item_type_tickets')};
    get bigTicketButton() {return $('.nameplate__button_type_tickets')};
}

module.exports = new TodayInCinemaPage();