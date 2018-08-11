import { expect } from 'chai';

import { RomanNumerals } from './roman-numeral';
import romanNumeralsData from './roman-numeral.data';

let romanNumerals;

describe('RomanNumerals', () => {
  beforeEach(() => {
    romanNumerals = new RomanNumerals();
  });

  afterEach(() => {
    romanNumerals = null;
  });

  describe('convert', () => {
    it('Should convert integer to Roman Numeral Output', () => {
      expect(romanNumerals.convert(1)).to.equal('I');
      expect(romanNumerals.convert(2)).to.equal('II');
      expect(romanNumerals.convert(4)).to.equal('IV');
      expect(romanNumerals.convert(5)).to.equal('V');
      expect(romanNumerals.convert(6)).to.equal('VI');
      expect(romanNumerals.convert(7)).to.equal('VII');
      expect(romanNumerals.convert(8)).to.equal('VIII');
      expect(romanNumerals.convert(9)).to.equal('IX');
      expect(romanNumerals.convert(10)).to.equal('X');
      expect(romanNumerals.convert(19)).to.equal('XIX');
      expect(romanNumerals.convert(48)).to.equal('XLVIII');
      expect(romanNumerals.convert(49)).to.equal('XLIX');
      expect(romanNumerals.convert(90)).to.equal('XC');
      expect(romanNumerals.convert(100)).to.equal('C');
    });
  });

  romanNumeralsData.forEach(({ input, output }) => {
    describe('Convert All', () => {
      it(`Should convert integer (${input}) to Roman Numeral Output`, () => {
        expect(romanNumerals.convert(input)).to.equal(output);
      });
    });
  });
});
