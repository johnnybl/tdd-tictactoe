var webdriver = require("selenium-webdriver");

var expect = require("chai").expect;

describe("user playing", function () {
    this.timeout(30000);
    var driver;

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function () {
        //return driver.quit();
    });

    it("opens the game page", function () {
        return driver.get("http://localhost:3000");
    });

    it("The title should be tic tac toe", function () {
        // Since we want the title from the page, we need to manually handle the Promise
        return driver.getTitle().then(function (title) {
            expect(title).to.equal("tic tac toe");
        });
    });

    it('clicks the buttons', function () {
        return driver.findElement(webdriver.By.id('cell1'))
            .then(function (el) {
                el.click()
            }).then(function () {
                return driver.findElement(webdriver.By.id("textul"))
            }).then(function (textul) {
                return textul.getAttribute("innerText")
            }).then(function (value) {
                expect(value).to.equal("10")

            })


    })
})
