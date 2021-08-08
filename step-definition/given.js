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
    this.mode = 'desctop';
})

Given(/^на мобильном устройстве открыт сайт (.*)$/, function(url) {
    browser.url(url);
    this.mode = 'touch';
})

Given(/^открыт блок "(.*)"$/, function(unit) {
    if (this.mode == 'desctop')
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
    if (this.mode == 'touch') {
        switch (unit) {
            case 'Смотрите в кино' :
                this.page = TodayInCinemaTouchPage;
                break;
            case 'Выбор редакции' :
                this.page = RedactionChoiceTouchPage;
                break;
            case 'Новые трейлеры' :
                this.page = NewTrailersTouchPage;
                break;
        }
        try {
            this.page.closeBlockWindowBtn.waitForDisplayed(10000);
            this.page.closeBlockWindowBtn.click();
        } catch(e) {
        }
    }
    this.unit = unit;
    this.page.carousel.scrollIntoView({block : "center"});

  //  browser.pause(300000);
})