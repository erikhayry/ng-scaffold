var MainPage = function() {
    this.title = element(by.binding('title'));

    this.get = function() {
    	browser.get('http://localhost:9001');
  	};

};

module.exports = new MainPage();