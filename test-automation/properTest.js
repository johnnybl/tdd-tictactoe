var webdriver = require("selenium-webdriver");
var assert = require("chai").assert;

describe("Demonstrating webdriver promises", function() {
    this.timeout(30000);
    var driver;

    before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function() {
        return driver.quit();
    });

    it("I open the blog website", function() {
        return driver.get("http://www.scottlogic.com/blog");
    });

    it("The title is 'Scott Logic Blog'", function() {
        // Since we want the title from the page, we need to manually handle the Promise
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Scott Logic Blog");
        });
    });
});