import ColorUtils from './index';

const utils = ColorUtils as Record<string, any>;

describe('Color Utilities Exported Functions', () => {
  describe('validation helpers', () => {
    const cases: Array<[string, any, boolean]> = [
      ['isNamedColor', 'Tomato', false],
      ['isNamedColor', 'not-a-color', false],
      ['isHexColor', '#ff6347', true],
      ['isHexColor', 'ff6347', true],
      ['isHexaColor', '#ff6347ff', true],
      ['isHexaColor', '#ff6347', false],
      ['isRgbColor', 'rgb(255, 99, 71)', true],
      ['isRgbColor', 'rgb(999, 0, 0)', false],
      ['isRgbaColor', 'rgba(1, 1, 1, 0.5)', true],
      ['isRgbaColor', 'rgba(255, 99, 71)', false],
    ];

    it.each(cases)('%s(%p) returns %p', (fn, input, expected) => {
      expect(utils[fn](input)).toBe(expected);
    });
  });

  describe('type helpers', () => {
    const validCases: Array<[string, any, any]> = [
      ['make3DigitHex', 'abc', '#abc'],
      ['make4DigitHexa', 'abcd', '#abcd'],
      ['make6DigitHex', 'ff6347', '#ff6347'],
      ['make8DigitHexa', 'ff634780', '#ff634780'],
    ];

    it.each(validCases)('%s(%p) returns %p', (fn, input, expected) => {
      expect(utils[fn](input)).toBe(expected);
    });

    it('make3DigitHex throws for invalid 3-digit hex input', () => {
      expect(() => utils.make3DigitHex('abcd')).toThrow();
    });
  });

  describe('value conversions', () => {
    const cases: Array<[string, any[], any]> = [
      ['hexToRgb', ['#ff6347'], 'rgb(255, 99, 71)'],
      ['hexToRgba', ['#ff6347'], 'rgba(255, 99, 71, 1)'],
      ['hexToName', ['#ff6347'], 'Tomato'],
      ['hexToName', ['#abcdef'], undefined],
      ['hexToHexa', ['#ff6347'], '#ff6347FF'],
      ['hexToRgbaProp', ['#ff6347'], { red: 255, green: 99, blue: 71, alpha: 1 }],
      ['rgbToHex', ['rgb(255, 99, 71)'], '#ff6347'],
      ['rgbToHexa', ['rgb(255, 99, 71)'], '#ff6347ff'],
      ['rgbToName', ['rgb(255, 99, 71)'], 'Tomato'],
      ['rgbToRgba', ['rgb(255, 99, 71)'], 'rgba(255, 99, 71, 1)'],
      ['rgbToRgbaProp', ['rgb(255, 99, 71)'], { red: 255, green: 99, blue: 71, alpha: 1 }],
      ['rgbaToHexa', ['rgba(255, 99, 71, 0.5)'], '#ff634780'],
      ['rgbaToName', ['rgba(255, 99, 71, 0.5)'], undefined],
      ['rgbaToRgbaProp', ['rgba(255, 99, 71, 0.5)'], { red: 255, green: 99, blue: 71, alpha: 0.5 }],
      ['nameToHex', ['Tomato'], '#ff6347'],
      ['nameToHexa', ['Tomato'], '#FF6347FF'],
      ['nameToRgb', ['Tomato'], 'rgb(255, 99, 71)'],
      ['nameToRgba', ['Tomato'], 'rgba(255, 99, 71, 1)'],
      ['nameToRgbaProp', ['Tomato'], { red: 255, green: 99, blue: 71, alpha: 1 }],
      ['shortHexToHex', ['#abc'], '#aabbcc'],
      ['shortHexToHexa', ['#abc'], '#aabbccFF'],
      ['shortHexToRgb', ['#abc'], 'rgb(170, 187, 204)'],
      ['shortHexToRgba', ['#abc'], 'rgba(170, 187, 204, 1)'],
      ['shortHexaToHexa', ['#abcd'], '#aabbccdd'],
      ['shortHexaToRgba', ['#abcd'], 'rgba(170, 187, 204, 0.8666666666666667)'],
      ['shortHexaToRgbaProp', ['#abcd'], { red: 170, green: 187, blue: 204, alpha: 0.8666666666666667 }],
      ['shortHexaToName', ['#abcd'], undefined],
      ['shortHexToName', ['#abc'], undefined],
      ['toHex', ['Tomato'], '#ff6347'],
      ['toHexa', ['Tomato'], '#ff6347ff'],
      ['toRgb', ['#ff6347'], 'rgb(255, 99, 71)'],
      ['toRgba', ['Tomato'], 'rgba(255, 99, 71, 1)'],
      ['toRgbaProp', ['#ff6347'], { red: 255, green: 99, blue: 71, alpha: 1 }],
      ['toName', ['#ff6347'], 'Tomato'],
    ];

    it.each(cases)('%s(%p) returns %p', (fn, args, expected) => {
      const result = utils[fn](...args);
      expect(result).toEqual(expected);
    });
  });

  describe('array and property helpers', () => {
    it('converts RGB array to hex and name', () => {
      expect(utils.rgbArrayToHex([255, 99, 71])).toBe('#ff6347');
      expect(utils.rgbArrayToName([255, 99, 71])).toBe('Tomato');
    });

    it('converts RGBA array to rgba string and hexa string', () => {
      expect(utils.rgbaArrayToRgba([255, 99, 71, 0.5])).toBe('rgba(255, 99, 71, 0.5)');
      expect(utils.rgbaArrayToHexa([255, 99, 71, 0.5])).toBe('#ff634780');
    });

    it('resolves a color object by RGB string and by hex string', () => {
      expect(utils.colorPropByRgb('rgb(255, 99, 71)')).toEqual({
        hexa: '#FF6347FF',
        rgba: { red: 255, green: 99, blue: 71, alpha: 1 },
      });
      expect(utils.colorPropByHex('#ff6347ff')).toEqual({
        hexa: '#FF6347FF',
        rgba: { red: 255, green: 99, blue: 71, alpha: 1 },
      });
      expect(utils.colorPropByName('Tomato')).toEqual({
        hexa: '#FF6347FF',
        rgba: { red: 255, green: 99, blue: 71, alpha: 1 },
      });
    });
  });

  describe('name-case behavior', () => {
    it('throws for lowercase color name inputs', () => {
      expect(() => utils.nameToHex('tomato')).toThrow();
      expect(() => utils.toHex('tomato')).toThrow();
    });
  });
});
