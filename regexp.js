module.exports = {
    regForTitle : /^[A-Za-zА-ЯЁа-яё0-9!@#\$%&\*\(\)—\-\+=№;:\?\.\,]+(\s[A-Za-zА-ЯЁа-яё0-9!@#\$%&\*\(\)—\-\+=№;:\?\.\,]+)*$/,
    regForGenre : /^[а-яё]+$/,
    regForYear : /^(с\s)?\d{4}(\s–\s\d{4})?$/,
    regForFilmRef : /^https:\/\/www\.kinopoisk\.ru\/film\/\d+\/$/,
    regForRating : /^(\—|\d\.\d|\d{1,3}%|)$/,
    regForTicketRef : /^https:\/\/www\.kinopoisk\.ru\/afisha\/new\/film\/\d+\/$/,
    regForRedChoiceRef : /^https:\/\/www\.kinopoisk\.ru\/[\w\/]+\/\?from_block=editorial_choice$/,
}
