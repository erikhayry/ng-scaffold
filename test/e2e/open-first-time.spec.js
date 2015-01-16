describe('mainpage', function() {
    it('should set a title', function() {

        //Arrange
        var _mainPage = require('./pageobjects/main-page.js'),
            _title = _mainPage.title;        

        //Act
        _mainPage.get();

        //Assert
        expect(_title.getText()).toEqual('BoxCtrl');
    });
});