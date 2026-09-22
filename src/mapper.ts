import Comparator from './comparator';
import ColorsMap, { ColorsProp } from './colorsMap';
import Type, {
  Color,
  Hex,
  HexaDigit4,
  HexaDigit8,
  HexDigit3,
  HexDigit6,
  Name,
  Rgb,
  Rgba,
  RgbaArray,
  RgbaProp,
  RgbArray,
} from './type';
import { ALL_COLORS } from 'td-colors-names';

/** @internal */
const shortHexToLongHex = (color: HexDigit3 | HexaDigit4): string =>
  color
    .replace('#', '')
    .split('')
    .map(char => `${char}${char}`)
    .join('');

/**
 * @internal
 * @deprecated
 */
const parseHexToDecimal = (hex: string): number => parseInt(hex, 16);

/**
 * @internal
 * @deprecated
 */
const parseDecimalToHex = (value: number): string => value.toString(16).padStart(2, '0');

/** @internal */
const hexStringToRgbaProp = (color: HexDigit6 | HexaDigit8): RgbaProp => {
  const hex = color.replace('#', '');
  return {
    red: parseHexToDecimal(hex.slice(0, 2)),
    green: parseHexToDecimal(hex.slice(2, 4)),
    blue: parseHexToDecimal(hex.slice(4, 6)),
    alpha: hex.length === 8 ? parseHexToDecimal(hex.slice(6, 8)) / 255 : 1,
  };
};

/** @internal */
const rgbaPropToHex = ({ red, green, blue, alpha = 1 }: RgbaProp): HexaDigit8 => {
  const hexa = `${parseDecimalToHex(red)}${parseDecimalToHex(green)}${parseDecimalToHex(blue)}${parseDecimalToHex(Math.round(alpha * 255))}`;
  return make8DigitHexa(hexa);
};

/** @internal */
const rgbStringToRgbaProp = (color: Rgb | Rgba): RgbaProp => {
  const rgb = color
    .replace('rgba(', '')
    .replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map(Number);
  return rgbaArrayToRgbaProp(rgb as RgbaArray);
};

// ___________________________________________________________________

const { deepEqual, isNamedColor, isHexColor, isHexaColor, isRgbColor, isRgbaColor, isString } =
  Comparator;
const { make3DigitHex, make4DigitHexa, make6DigitHex, make8DigitHexa } = Type;

const rgbaPropToRgba = ({ red, green, blue, alpha = 1 }: RgbaProp): Rgba =>
  `rgba(${red}, ${green}, ${blue}, ${alpha})`;

const rgbaPropToHexa = ({ red, green, blue, alpha = 1 }: RgbaProp): HexaDigit8 =>
  rgbaPropToHex({ red, green, blue, alpha });

const rgbaPropToName = (prop: RgbaProp): Name | undefined =>
  ALL_COLORS.find(name => deepEqual(prop, ColorsMap[name].rgba));

const rgbaArrayToRgbaProp = (color: RgbaArray): RgbaProp => ({
  red: color[0],
  green: color[1],
  blue: color[2],
  alpha: color[3] || 1,
});

const rgbaArrayToRgba = (color: RgbaArray): Rgba => rgbaPropToRgba(rgbaArrayToRgbaProp(color));

const rgbaArrayToHexa = (color: RgbaArray): HexaDigit8 => rgbaPropToHex(rgbaArrayToRgbaProp(color));

const rgbaArrayToName = (color: RgbaArray): Name | undefined =>
  ALL_COLORS.find(name => deepEqual(rgbaArrayToRgbaProp(color), ColorsMap[name].rgba));

const rgbaToRgbaProp = (color: Rgba): RgbaProp => rgbStringToRgbaProp(color);

const rgbaToHexa = (color: Rgba): HexaDigit8 => rgbaPropToHex(rgbStringToRgbaProp(color));

const rgbaToName = (color: Rgba): Name | undefined => rgbaPropToName(rgbStringToRgbaProp(color));

const rgbArrayToRgbaProp = (color: RgbArray): RgbaProp => rgbaArrayToRgbaProp(color);

const rgbArrayToRgba = (color: RgbArray): Rgba => rgbaArrayToRgba(color);

const rgbArrayToRgb = (color: RgbArray): Rgb => `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

const rgbArrayToHexa = (color: RgbArray): HexaDigit8 => rgbaArrayToHexa(color);

const rgbArrayToHex = (color: RgbArray): HexDigit6 => {
  const hexa = `${parseDecimalToHex(color[0])}${parseDecimalToHex(color[1])}${parseDecimalToHex(color[2])}`;
  return make6DigitHex(hexa);
};

const rgbArrayToName = (color: RgbArray): Name | undefined => rgbaArrayToName(color);

const rgbToRgbaProp = (color: Rgb): RgbaProp => rgbStringToRgbaProp(color);

const rgbToRgba = (color: Rgb): Rgba => color.replace('rgb', 'rgba').replace(')', `, 1)`) as Rgba;

const rgbToHexa = (color: Rgb): HexaDigit8 => rgbaPropToHex(rgbStringToRgbaProp(color));

const rgbToHex = (color: Rgb): HexDigit6 => {
  const rgba = rgbStringToRgbaProp(color);
  return make6DigitHex(rgbArrayToHex([rgba.red, rgba.green, rgba.blue]));
};

const rgbToName = (color: Rgb): Name | undefined => rgbaPropToName(rgbStringToRgbaProp(color));

const hexaToRgbaProp = (color: HexaDigit8): RgbaProp => hexStringToRgbaProp(color);

const hexaToRgba = (color: HexaDigit8): Rgba => rgbaPropToRgba(hexaToRgbaProp(color));

const hexaToName = (color: HexaDigit8): Name | undefined =>
  ALL_COLORS.find(name => ColorsMap[name].hexa === color.toUpperCase());

const hexToHexa = (color: HexDigit6): HexaDigit8 => make8DigitHexa(`${color}FF`);

const hexToRgbaProp = (color: HexDigit6): RgbaProp => hexStringToRgbaProp(hexToHexa(color));

const hexToRgba = (color: HexDigit6): Rgba => rgbaPropToRgba(hexToRgbaProp(color));

const hexToRgb = (color: HexDigit6): Rgb => {
  const rgbaProp = hexToRgbaProp(color);
  return rgbArrayToRgb([rgbaProp.red, rgbaProp.green, rgbaProp.blue]);
};

const hexToName = (color: HexDigit6): Name | undefined => hexaToName(hexToHexa(color));

const shortHexaToRgbaProp = (color: HexaDigit4): RgbaProp => hexaToRgbaProp(shortHexaToHexa(color));

const shortHexaToRgba = (color: HexaDigit4): Rgba => hexaToRgba(shortHexaToHexa(color));

const shortHexaToHexa = (color: HexaDigit4): HexaDigit8 => make8DigitHexa(shortHexToLongHex(color));

const shortHexaToName = (color: HexaDigit4): Name | undefined => hexaToName(shortHexaToHexa(color));

const shortHexToRgbaProp = (color: HexDigit3): RgbaProp => hexToRgbaProp(shortHexToHex(color));

const shortHexToRgba = (color: HexDigit3): Rgba => hexToRgba(shortHexToHex(color));

const shortHexToRgb = (color: HexDigit3): Rgb => hexToRgb(shortHexToHex(color));

const shortHexToHexa = (color: HexDigit3): HexaDigit8 => hexToHexa(shortHexToHex(color));

const shortHexToHex = (color: HexDigit3): HexDigit6 => make6DigitHex(shortHexToLongHex(color));

const shortHexToShortHexa = (color: HexDigit3): HexaDigit4 => make4DigitHexa(`${color}F`);

const shortHexToName = (color: HexDigit3): Name | undefined => hexToName(shortHexToHex(color));

const nameToRgbaProp = (color: Name): RgbaProp => colorPropByName(color).rgba;

const nameToRgba = (color: Name): Rgba => rgbaPropToRgba(nameToRgbaProp(color));

const nameToRgb = (color: Name): Rgb => {
  const rgbaProp = nameToRgbaProp(color);
  return rgbArrayToRgb([rgbaProp.red, rgbaProp.green, rgbaProp.blue]);
};

const nameToHexa = (color: Name): HexaDigit8 => colorPropByName(color).hexa;

const nameToHex = (color: Name): HexDigit6 => {
  const rgbaProp = nameToRgbaProp(color);
  return make6DigitHex(rgbArrayToHex([rgbaProp.red, rgbaProp.green, rgbaProp.blue]));
};

// ___________________________________________________________________

const toRgbaProp = (color: Color): RgbaProp => {
  if (Array.isArray(color)) return rgbaArrayToRgbaProp(color);
  if (isString(color)) {
    const colorStr = color as string;

    if (isHexaColor(colorStr)) {
      return colorStr.length > 5
        ? hexaToRgbaProp(make8DigitHexa(colorStr))
        : shortHexaToRgbaProp(make4DigitHexa(colorStr));
    }
    if (isHexColor(colorStr)) {
      return colorStr.length > 4
        ? hexToRgbaProp(make6DigitHex(colorStr))
        : shortHexaToRgbaProp(make4DigitHexa(colorStr));
    }
    if (isRgbaColor(colorStr)) return rgbaToRgbaProp(colorStr as Rgba);
    if (isRgbColor(colorStr)) return rgbToRgbaProp(colorStr as Rgb);
    return nameToRgbaProp(colorStr as Name);
  }
  return color as RgbaProp;
};

const toRgba = (color: Color): Rgba => rgbaPropToRgba(toRgbaProp(color));

const toRgb = (color: HexDigit3 | HexDigit6 | RgbArray | Name): Rgb => {
  if (Array.isArray(color)) return rgbArrayToRgb(color);
  if (isHexColor(color)) {
    return color.length > 4 ? hexToRgb(make6DigitHex(color)) : shortHexToRgb(make3DigitHex(color));
  }
  if (isNamedColor(color)) return nameToRgb(color as Name);
  return color as Rgb;
};

const toHexa = (color: Color): HexaDigit8 => rgbaPropToHexa(toRgbaProp(color));

const toHex = (color: HexDigit3 | Rgb | RgbArray | Name): HexDigit6 => {
  if (Array.isArray(color)) return rgbArrayToHex(color);
  if (isHexColor(color)) return make6DigitHex(color);
  if (isRgbColor(color)) return rgbToHex(color as Rgb);
  return nameToHex(color as Name);
};

const toName = (color: Color): Name | undefined => rgbaPropToName(toRgbaProp(color));

// ___________________________________________________________________

const colorPropByName = (color: Name): ColorsProp => ColorsMap[color];

const colorPropByHex = (color: Hex): ColorsProp => {
  let key: Name | undefined;
  let hexa: HexaDigit8;
  if (isHexaColor(color)) {
    hexa = color.length > 5 ? make8DigitHexa(color) : shortHexaToHexa(color as HexaDigit4);
    key = hexaToName(make8DigitHexa(hexa));
  } else {
    hexa = color.length > 4 ? hexToHexa(color as HexDigit6) : shortHexToHexa(color as HexDigit3);
    key = hexToName(make6DigitHex(hexa));
  }

  return key ? ColorsMap[key] : { hexa, rgba: hexaToRgbaProp(hexa) };
};

const colorPropByRgb = (color: Rgb | Rgba | RgbaProp | RgbaArray): ColorsProp => {
  if (Array.isArray(color)) {
    color = rgbaArrayToRgbaProp(color);
  }
  if (isString(color)) {
    if (isRgbaColor(color as string)) {
      color = rgbaToRgbaProp(color as Rgba);
    } else {
      color = rgbToRgbaProp(color as Rgb);
    }
  }

  const key = rgbaPropToName(color as RgbaProp);
  return key
    ? ColorsMap[key]
    : { hexa: rgbaPropToHexa(color as RgbaProp), rgba: color as RgbaProp };
};

export default {
  rgbaPropToRgba,
  rgbaPropToHexa,
  rgbaPropToName,
  rgbaArrayToRgbaProp,
  rgbaArrayToRgba,
  rgbaArrayToHexa,
  rgbaArrayToName,
  rgbaToRgbaProp,
  rgbaToHexa,
  rgbaToName,
  rgbArrayToRgbaProp,
  rgbArrayToRgba,
  rgbArrayToRgb,
  rgbArrayToHexa,
  rgbArrayToHex,
  rgbArrayToName,
  rgbToRgbaProp,
  rgbToRgba,
  rgbToHexa,
  rgbToHex,
  rgbToName,
  hexaToRgbaProp,
  hexaToRgba,
  hexaToName,
  hexToHexa,
  hexToRgbaProp,
  hexToRgba,
  hexToRgb,
  hexToName,
  shortHexaToRgbaProp,
  shortHexaToRgba,
  shortHexaToHexa,
  shortHexaToName,
  shortHexToRgbaProp,
  shortHexToRgba,
  shortHexToRgb,
  shortHexToHexa,
  shortHexToHex,
  shortHexToName,
  shortHexToShortHexa,
  nameToRgbaProp,
  nameToRgba,
  nameToRgb,
  nameToHexa,
  nameToHex,
  toRgbaProp,
  toRgba,
  toRgb,
  toHexa,
  toHex,
  toName,
  colorPropByRgb,
  colorPropByHex,
  colorPropByName,
};
