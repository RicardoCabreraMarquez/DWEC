const { element } = require("protractor");

describe('Protractor Demo App', function() {
    it('Test 1', function() {

      //Paso 1
        
      browser.get('https://www.google.es/');

      const tabla = element(by.model('//tr')).sendKeys(a);
  
      expect(tabla()).toEqual(19);
    });
  });