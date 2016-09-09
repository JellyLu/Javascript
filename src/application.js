'use strict';
var Application = function() {
    return {
        init: function() {
            var statisticsCalculator = new StatisticsCalculator();
            document.getElementById('button-id').onclick = function() {
                document.getElementById('result-value').textContent = 'clicked!';
            };

            document.getElementById('max').onclick = function() {
                var max = statisticsCalculator.maximum([2, 4, 8, 0]);
                document.getElementById('result-value').textContent = max;
            };
        }
    };
};
