export class PrimeFactors {
  public generate(primeFactor: number): number[] {
    const output: number[] = [];

    const factorMap = [2, 3, 5, 7, 13];

    factorMap.forEach((factor) => {
      while (primeFactor % factor === 0) {
        output.push(factor);
        primeFactor /= factor;
      }
    });

    return output;
  }
}
