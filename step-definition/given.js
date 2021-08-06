const {Given} = require('@cucumber/cucumber');
const TodayInCinemaPage = require('../pageobjects/desctop/todayInCinema.page');
const RedactionChoicePage = require('../pageobjects/desctop/redactionChoice.page');
const NewTrailersPage = require('../pageobjects/desctop/newTrailers.page');
const TodayInCinemaTouchPage = require('../pageobjects/touch/todayInCinema.page');
const RedactionChoiceTouchPage = require('../pageobjects/touch/redactionChoice.page');
const NewTrailersTouchPage = require('../pageobjects/touch/newTrailers.page');
const expect = require('chai').expect;

Given(/^открыт сайт (.*)$/, function(url) {
    browser.maximizeWindow();
    browser.url(url);
    this.mobile = false;
})

Given(/^на мобильном устройстве открыт сайт (.*)$/, function(url) {
    browser.url(url);
    this.mobile = true;
})

Given(/^открыт блок "(.*)"$/, function(unit) {
    switch (unit) {
        case 'Смотрите в кино' :
            this.page = TodayInCinemaPage;
            break;
        case 'Выбор редакции' :
            this.page = RedactionChoicePage;
            break;
        case 'Новые трейлеры' :
            this.page = NewTrailersPage;
            break;
    }
    this.unit = unit;
    this.page.carousel.scrollIntoView({block : "center"});

   // browser.pause(900000);
})