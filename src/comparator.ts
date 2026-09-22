import { ALL_COLORS, Color } from 'td-colors-names';

/**
 * @internal
 * @deprecated
 */
const HexDigits = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
] as const;

/**
 * @internal
 * @deprecated
 */
type HexDigit = (typeof HexDigits)[number];

/**
 * @internal
 * @deprecated
 */
const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

/**
 * @internal
 * @deprecated
 */
const isString = (value: any): boolean => typeof value === 'string';

/** @internal */
const isHex = (color: string, restrict: boolean, alpha: boolean): boolean => {
  const hexLengths = alpha ? [4, 8] : [3, 6];

  if (color[0] === '#') {
    color = color.slice(1);
  } else if (restrict) return false;

  if (!hexLengths.includes(color.length)) return false;
  return [...color.toUpperCase()].every(char => HexDigits.includes(char as HexDigit));
};

/** @internal */
const isRgb = (color: string, alpha: boolean): boolean => {
  const prefix = `rgb${alpha ? 'a' : ''}(`;
  color = color.trim();
  if (!(color.startsWith(prefix) && color.endsWith(')'))) return false;

  const colorArray = color.slice(prefix.length, -1).split(',');
  if (colorArray.length !== (alpha ? 4 : 3)) return false;

  return colorArray.every(value => {
    const num = parseInt(value);
    return !isNaN(num) && num >= 0 && num <= (alpha ? 1 : 255);
  });
};

// ___________________________________________________________________

const isNamedColor = (color: string): boolean => ALL_COLORS.includes(color.toLowerCase() as Color);

const isHexColor = (color: string, restrict = false): boolean => isHex(color, restrict, false);

const isHexaColor = (color: string, restrict = false): boolean => isHex(color, restrict, true);

const isRgbaColor = (color: string): boolean => isRgb(color, true);

const isRgbColor = (color: string): boolean => isRgb(color, false);

export default {
  isNamedColor,
  isHexColor,
  isHexaColor,
  isRgbaColor,
  isRgbColor,
  isString,
  deepEqual,
};
