import { expect } from 'chai';

import { PrimeFactors } from './prime-factors';
import primeFactorsData from './prime-factors.data';

let primeFactors;

describe('PrimeFactors', () => {
  beforeEach(() => {
    primeFactors = new PrimeFactors();
  });

  afterEach(() => {
    primeFactors = null;
  });

  describe('generate', () => {
    it('Should convert integer to Roman Numeral Output', () => {
      expect(primeFactors.generate(1)).to.deep.equal([]);
      expect(primeFactors.generate(2)).to.deep.equal([2]);
      expect(primeFactors.generate(3)).to.deep.equal([3]);
      expect(primeFactors.generate(4)).to.deep.equal([2, 2]);
      expect(primeFactors.generate(5)).to.deep.equal([5]);
      expect(primeFactors.generate(360)).to.deep.equal([2, 2, 2, 3, 3, 5]);
      expect(primeFactors.generate((2 * 3 * 5 * 7 * 13))).to.deep.equal([2, 3, 5, 7, 13]);
    });
  });

  primeFactorsData.forEach(({ input, output }) => {
    describe('Convert All', () => {
      it(`Should find prime numbers for (${input})`, () => {
        expect(primeFactors.generate(input)).to.deep.equal(output);
      });
    });
  });
});
