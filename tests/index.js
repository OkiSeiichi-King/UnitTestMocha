const expect = require('chai').expect;
const assert = require('chai').assert;

const firstSolution = require('../src/first');
const secondSolution = require('../src/second');

describe('This is Kalytn Company Chanllenge.', function () {
  describe('First Soultion', function () {
    it('should calculate correctly.', function () {
      expect(firstSolution(10)).to.eql(23);
      expect(firstSolution(11)).to.eql(33);
      expect(firstSolution(12)).to.eql(33);
    });

    it('should throw error about non-numeric parameter', function () {
      assert.throws(() => {
        firstSolution(null);
      }, TypeError);
      assert.throws(() => {
        firstSolution(undefined);
      }, TypeError);
      assert.throws(() => {
        firstSolution('ninja');
      }, TypeError);
    });

    it('should return the correct value about numeric string parameter', function () {
      expect(firstSolution('10')).to.eql(23);
      expect(firstSolution('-10')).to.eql(0);
    });

    it('should return 0 about negative value', function () {
      expect(firstSolution(-10)).to.eql(0);
      expect(firstSolution(-11)).to.eql(0);
    });
  });

  describe('Second Solution', function () {
    it('should calculate correctly.', function () {
      expect(secondSolution(10)).to.eql(19);
      expect(secondSolution(11)).to.eql(19);
      expect(secondSolution(12)).to.eql(19);
    });

    it('should throw error about non-numeric parameter', function () {
      assert.throws(() => {
        secondSolution(null);
      }, TypeError);
      assert.throws(() => {
        secondSolution(undefined);
      }, TypeError);
      assert.throws(() => {
        secondSolution('ninja');
      }, TypeError);
    });

    it('should return the correct value about numeric string parameter', function () {
      expect(secondSolution('10')).to.eql(19);
      expect(secondSolution('-10')).to.eql(0);
    });

    it('should return 0 about negative value', function () {
      expect(secondSolution(-10)).to.eql(0);
      expect(secondSolution(-11)).to.eql(0);
    });
  });
});
