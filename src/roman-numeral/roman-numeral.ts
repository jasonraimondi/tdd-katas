export class RomanNumerals {
  public convert(input: number): string {
    let output = '';

    const map = [
      {value: 1000, numeral: 'M'},
      {value: 900, numeral: 'CM'},
      {value: 500, numeral: 'D'},
      {value: 400, numeral: 'CD'},
      {value: 100, numeral: 'C'},
      {value: 90, numeral: 'XC'},
      {value: 50, numeral: 'L'},
      {value: 40, numeral: 'XL'},
      {value: 10, numeral: 'X'},
      {value: 9, numeral: 'IX'},
      {value: 5, numeral: 'V'},
      {value: 4, numeral: 'IV'},
      {value: 1, numeral: 'I'},
    ];

    map.forEach(({ value, numeral }) => {
      while (input >= value) {
        output += numeral;
        input -= value;
      }
    });

    return output;
  }
}
