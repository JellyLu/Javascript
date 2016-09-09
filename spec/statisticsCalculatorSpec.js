describe('StatisticsCalculator', function () {

    beforeEach(function () {
        this.statisticsCalculator = new StatisticsCalculator();
    });

    it('should calculate maximum value from a sequence', function () {
        expect(this.statisticsCalculator.maximum([])).toBe('');
    });

    it('should calculate maximum value from a sequence with only one item', function () {
        expect(this.statisticsCalculator.maximum([4])).toBe(4);
    });

    it('should calculate maximum value from two items', function () {
        expect(this.statisticsCalculator.maximum([4, 6])).toBe(6);
    });

    it('should calculate maximum value from three items', function () {
        expect(this.statisticsCalculator.maximum([4, 6, 5])).toBe(6);
    });


});
