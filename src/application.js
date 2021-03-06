'use strict';
var Application = function() {
    var statisticsCalculator = new StatisticsCalculator();
    return {
        init: function() {
            document.getElementById('button-id').onclick = function() {
                document.getElementById('result-value').textContent = 'clicked!';
            };

            document.getElementById('max').onclick = function() {
                var array = retrieveInputNumbers();

                var max = statisticsCalculator.maximum(array);
                document.getElementById('result-value').textContent = max;
            };

            document.getElementById('min').onclick = function() {
                var array = retrieveInputNumbers();

                var min = statisticsCalculator.minimum(array);
                document.getElementById('result-value').textContent = min;
            };

            document.getElementById('average').onclick = function() {
                var array = retrieveInputNumbers();

                var average = statisticsCalculator.average(array);
                document.getElementById('result-value').textContent = average;
            };

            document.getElementById('length').onclick = function() {
                var array = retrieveInputNumbers();


                var length = statisticsCalculator.length(array);
                document.getElementById('result-value').textContent = length;
            };

            function retrieveInputNumbers() {
                return document.getElementById("input-box").value.split(",").map(function (number) {
                    return parseInt(number);
                });
            }
        }
    };
};

