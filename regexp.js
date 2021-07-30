module.exports = {
    regForTitle : /^[A-Za-zА-ЯЁа-яё0-9!@#\$%&\*\(\)—\-\+=№;:\?\.\,]+(\s[A-Za-zА-Яа-я0-9!@#\$%&\*\(\)\-\+=№;:\?\.\,]+)*$/,
    regForGenre : /^[а-яё]+$/,
    regForYear : /^\d{4}$/,
    regForFilmRef : /^https:\/\/www\.kinopoisk\.ru\/film\/\d+\/$/,
    regForRating : /^(\—|\d\.\d|\d{1,3}%)$/,
    regForTicketRef : /^https:\/\/www\.kinopoisk\.ru\/afisha\/new\/film\/\d+\/$/,
}
