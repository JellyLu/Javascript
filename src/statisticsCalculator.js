'use strict'

var StatisticsCalculator = function () {
    return {
        'maximum': function (numbers) {
            if (numbers.length == 0) {
                return '';
            }

            var maximum = numbers.reduce(function(numer1, number2) {
                return numer1 > number2 ? numer1 : number2;
            }, numbers[0]);

            return maximum;
        },
        'minimum': function (numbers) {
            if (numbers.length == 0) {
                return '';
            }

            var minimum = numbers.reduce(function(numer1, number2) {
                return numer1 < number2 ? numer1 : number2;
            }, numbers[0]);

            return minimum;
        },
        'average': function (numbers) {
            if (numbers.length == 0) {
                return '';
            }

            var total = numbers.reduce(function(numer, total) {
                return numer + total;
            }, 0);

            return total/numbers.length;
        },
        'length': function (numbers) {
            return numbers.length;
        }

    }
}