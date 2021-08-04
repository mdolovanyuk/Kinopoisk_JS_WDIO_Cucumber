const {When} = require('@cucumber/cucumber');
//const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
//const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
//const newTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;

When ('навести курсор на название фильма', function() {
    this.page.putMouseOnTitle();
})

When ('нажать в карусели стрелку вправо', function() {
    this.page.clickRightArrow();
})

When ('навести курсор на кнопку с билетами', function() {
    this.page.putMouseOnTicketButton();
})

When ('нажать кнопку запуска видео', function() {
    this.page.clickPlayButton();
})

When ('прокрутить карусель влево', function() {
    this.page.touchScroll();
})