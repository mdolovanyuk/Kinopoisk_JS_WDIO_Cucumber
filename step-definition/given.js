const {Given} = require('@cucumber/cucumber');
const TodayInCinemaPage = require('../pageobjects/todayInCinema.page');
const RedactionChoicePage = require('../pageobjects/redactionChoice.page');
const NewTrailersPage = require('../pageobjects/newTrailers.page');
const expect = require('chai').expect;


Given(/^открыт сайт (.*)$/, function(url) {
    browser.maximizeWindow();
    browser.url(url);
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
    this.page.showBlock();
})