'use strict';

/*
  Note: This test uses an HTML Fixture. Fixture elements are essentially an insertion of HTML onto your DOM for your tests to run on if your JS operates on the DOM.
  Using fixtures is a good practice in JS testing, and generally fixtures should be separated out from the code.
*/

describe('application', function () {
    var container, application;

    beforeEach(function () {
        container = fixture(
          '<div id="result-value">sample html</div>' +
          '<button id="button-id"></button>' +
          '<button id="max"></button>'
        );
        document.body.appendChild(container);
        application = new Application(document);
    });

    afterEach(function () {
        document.body.removeChild(container);
    });

    it('should change results-value when button is clicked', function () {
        application.init()
        document.getElementById('button-id').click();

        expect(document.getElementById('result-value').textContent).toEqual('clicked!');
    });

    it('should change results-value when max-button is clicked', function () {
        application.init();
        document.getElementById('max').click();

        expect(document.getElementById('result-value').textContent).toEqual('8');
    });
});

function fixture(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}
