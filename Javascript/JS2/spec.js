const { element } = require("protractor");

describe('Protractor Demo App', function() {
    it('should have a title', function() {

        
      browser.get('https://www.google.es/');
  
      expect(element()).toEqual(1);
    });
  });