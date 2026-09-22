import { Color as Name } from 'td-colors-names';
import Comparator from './comparator';

const { isHexColor, isHexaColor } = Comparator;

/** @internal */
const throwDigitHexError = (hexLength: 3 | 4 | 6 | 8): never => {
  throw new Error(`Invalid ${hexLength}-digit hex color`);
};

/** @internal */
const createHex = (value: string): string => value.includes('#') ? value : `#${value}`;

// ___________________________________________________________________

type HexDigit3 = string & { __brand: 'HexDigit3' };

type HexDigit6 = string & { __brand: 'HexDigit6' };

type HexaDigit4 = string & { __brand: 'HexaDigit4' };

type HexaDigit8 = string & { __brand: 'HexaDigit8' };

const make3DigitHex = (value: string): HexDigit3 => {
  if (isHexColor(value)) return createHex(value) as HexDigit3;
  return throwDigitHexError(3);
};

const make6DigitHex = (value: string): HexDigit6 => {
  if (isHexColor(value)) return createHex(value) as HexDigit6;
  return throwDigitHexError(6);
};

const make4DigitHexa = (value: string): HexaDigit4 => {
  if (isHexaColor(value)) return createHex(value) as HexaDigit4;
  return throwDigitHexError(4);
};

const make8DigitHexa = (value: string): HexaDigit8 => {
  if (isHexaColor(value)) return createHex(value) as HexaDigit8;
  return throwDigitHexError(8);
};

interface RgbaProp {
  red: number;
  blue: number;
  green: number;
  alpha?: number;
}

type Rgb = `rgb(${number}, ${number}, ${number})`;

type Rgba = `rgba(${number}, ${number}, ${number}, ${number})`;

type RgbArray = [number, number, number];

type RgbaArray = RgbArray | [...RgbArray, number];

type Hex = HexDigit3 | HexDigit6 | HexaDigit4 | HexaDigit8;

type Color = Name | Hex | Rgb | Rgba | RgbaProp | RgbaArray;

export type {
  Color,
  Hex,
  HexDigit3,
  HexDigit6,
  HexaDigit4,
  HexaDigit8,
  Name,
  Rgb,
  Rgba,
  RgbaProp,
  RgbArray,
  RgbaArray,
};

export default { make3DigitHex, make4DigitHexa, make6DigitHex, make8DigitHexa };
