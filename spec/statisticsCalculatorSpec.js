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

    it('should calculate minimum value from a sequence', function () {
        expect(this.statisticsCalculator.minimum([])).toBe('');
    });

    it('should calculate minimum value from a sequence with only one item', function () {
        expect(this.statisticsCalculator.minimum([4])).toBe(4);
    });

    it('should calculate minimum value from two items', function () {
        expect(this.statisticsCalculator.minimum([4, 6])).toBe(4);
    });

    it('should calculate minimum value from three items', function () {
        expect(this.statisticsCalculator.minimum([5, 4, 6])).toBe(4);
    });

    it('should calculate average value from a sequence', function () {
        expect(this.statisticsCalculator.average([])).toBe('');
    });

    it('should calculate average value from a sequence with only one item', function () {
        expect(this.statisticsCalculator.average([4])).toBe(4);
    });

    it('should calculate average value from two items', function () {
        expect(this.statisticsCalculator.average([4, 6])).toBe(5);
    });

    it('should calculate average value from three items', function () {
        expect(this.statisticsCalculator.average([8, 10, 6])).toBe(8);
    });

    it('should calculate length of sequence', function () {
        expect(this.statisticsCalculator.length([])).toBe(0);
    });

    it('should calculate length of sequence with only one item', function () {
        expect(this.statisticsCalculator.length([4])).toBe(1);
    });

    it('should calculate length of sequence with two items', function () {
        expect(this.statisticsCalculator.length([4, 6])).toBe(2);
    });

    it('should calculate length of sequence with three items', function () {
        expect(this.statisticsCalculator.length([8, 10, 6])).toBe(3);
    });

});
