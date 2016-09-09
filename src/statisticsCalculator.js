'use strict'

var StatisticsCalculator = function () {
    return {
        'maximum': function (numbers) {
            if (numbers.length == 0) {
                return '';
            }

            var maximum = numbers.reduce(function (numer1, number2) {
                return numer1 > number2 ? numer1 : number2;
            });

            return maximum;
        }
    }
}