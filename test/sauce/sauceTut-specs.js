var wd = require('wd');
require('colors');
var _ = require("lodash");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var url = process.env.TEST_URL;

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// checking sauce credential
if(!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY){
    console.warn(
        '\nPlease configure your sauce credential:\n\n' +
        'export SAUCE_USERNAME=<SAUCE_USERNAME>\n' +
        'export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>\n\n'
    );
    throw new Error("Missing sauce credentials");
}

// http configuration, not needed for simple runs
wd.configureHttp( {
    timeout: 60000,
    retryDelay: 15000,
    retries: 5
});

var desired = JSON.parse(process.env.DESIRED || '{browserName: "chrome"}');
desired.name = 'example with ' + desired.browserName;
desired.tags = ['tutorial'];

describe('sauceTut (' + desired.browserName + ')', function() {
    var browser;
    var allPassed = true;

    before(function(done) {
        var username = process.env.SAUCE_USERNAME;
        var accessKey = process.env.SAUCE_ACCESS_KEY;
        browser = wd.promiseChainRemote(process.env.HOST, process.env.PORT, username, accessKey);
        if(process.env.VERBOSE){
            // optional logging     
            browser.on('status', function(info) {
                console.log(info.cyan);
            });
            browser.on('command', function(meth, path, data) {
                console.log(' > ' + meth.yellow, path.grey, data || '');
            });            
        }
        browser
            .init(desired)
            .nodeify(done);
    });

    afterEach(function(done) {
        allPassed = allPassed && (this.currentTest.state === 'passed');  
        done();
    });

    after(function(done) {
        browser
            .quit()
            .sauceJobStatus(allPassed)
            .nodeify(done);
    });

    it("should get home page", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    _.times(2, function(i) { // repeat twice

        it("should authenticate the user (" + i + ")", function(done) {
            browser
                .get(url)
           		.title()
            	.should.become("Hello World")
            	.nodeify(done);
        });

        it("should log user out(" + i + ")", function(done) {
            browser
                .get(url)
           		.title()
            	.should.become("Hello World")
            	.nodeify(done);
        });

    });

    it("should check incorrect login", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    it("should send user authentication email", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    it("should load settings for user", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    it("should change user's password", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    it("should accept user's credit card information", function(done) {
        browser
            .get(url)
            .title()
            .should.become("Hello World")
            .nodeify(done);
    });

    _.times(4, function(i) { // repeat twice

        it("should clear cache (" + i + ")", function(done) {
            browser
                .get(url)
           		.title()
            	.should.become("Hello World")
            	.nodeify(done);
        });

        it("should load user into to cache(" + i + ")", function(done) {
            browser
                .get(url)
           		.title()
            	.should.become("Hello World")
            	.nodeify(done);
        });

    });
});
