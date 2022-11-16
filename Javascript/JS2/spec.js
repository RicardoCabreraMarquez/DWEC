const { element } = require("protractor");

describe('Protractor Demo App', function() {
    it('Test 1', function() {
      browser.waitForAngularEnabled(false);
      //Paso 1
        
      //ACCION - Acceder a la URL
      browser.get('file:///C:/Users/eltra/OneDrive/Documentos/GitHub/DWEC/Javascript/JS2/JS2.html');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      const fila = element.all(by.xpath('//tr'));
      expect(fila.count()).toEqual(19);
      browser.sleep(2000);

      //Paso 2

      //ACCION - Escribir "Berlín" en el buscador

      const buscador = element.all(by.xpath('//input'));
      buscador.click().sendKeys('Berlín');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      expect(fila.count()).toEqual(1);
      browser.sleep(2000);
    });
    it('Test 2', function() {
      //Paso 1
        
      //ACCION - Acceder a la URL
      browser.get('file:///C:/Users/eltra/OneDrive/Documentos/GitHub/DWEC/Javascript/JS2/JS2.html');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      const fila = element.all(by.xpath('//tr'));
      expect(fila.count()).toEqual(19);
      browser.sleep(2000);

      //Paso 2

      //ACCION - Escribir "Berlín" en el buscador

      const buscador = element.all(by.xpath('//input'));
      buscador.click().sendKeys('cú');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      expect(fila.count()).toEqual(2);
      browser.sleep(2000);
    });
    it('Test 3', function() {
      //Paso 1
        
      //ACCION - Acceder a la URL
      browser.get('file:///C:/Users/eltra/OneDrive/Documentos/GitHub/DWEC/Javascript/JS2/JS2.html');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      const fila = element.all(by.xpath('//tr'));
      expect(fila.count()).toEqual(19);
      browser.sleep(2000);

      //Paso 2

      //ACCION - Escribir "Berlín" en el buscador

      const buscador = element.all(by.xpath('//input'));
      buscador.click().sendKeys('cu');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      expect(fila.count()).toEqual(1);
      browser.sleep(2000);
    });
    it('Test 4', function() {
      //Paso 1
        
      //ACCION - Acceder a la URL
      browser.get('file:///C:/Users/eltra/OneDrive/Documentos/GitHub/DWEC/Javascript/JS2/JS2.html');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      const fila = element.all(by.xpath('//tr'));
      expect(fila.count()).toEqual(19);
      browser.sleep(2000);

      //Paso 2

      //ACCION - Escribir "Berlín" en el buscador

      const buscador = element.all(by.xpath('//input'));
      buscador.click().sendKeys('Alemania');
      browser.sleep(2000);

      //CONDICION - Comprobar las filas

      expect(fila.count()).toEqual(1);
      browser.sleep(2000);
    });
  });