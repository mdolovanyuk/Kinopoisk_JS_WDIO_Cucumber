class TodayInCinemaPage {
    get carousel() {return $('.today-in-cinema__carousel')};
    get snippets() {return $$('.today-in-cinema-carousel-item__snippet')};
    get arrowRight() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_right')};
    get arrowLeft() {return $('.today-in-cinema__carousel-button.circle-arrow-button_direction_left')};
    get firstTitle() { return $('.today-in-cinema-carousel-item__snippet').$('.today-in-cinema-carousel-item__snippet-title')};
    get previewCard() {return $('div[data-tid = "f0448ef1"]')};
    get previewCardTitle() {return $('.preview-card-film__title')};
    get ticketButton() {return $('.nameplate__item_type_tickets')};
    get bigTicketButton() {return $('.nameplate__button_type_tickets')};
}

module.exports = new TodayInCinemaPage();