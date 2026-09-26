import ColorsMap from './colorsMap';
import Comparator from './comparator';
import Mapper from './mapper';
import Types from './type';

export type { Color, Hex, Name, Rgb, Rgba, RgbProp, RgbaProp, RgbArray, RgbaArray } from './type';

export type { ColorMap, ColorsProp } from './colorsMap';

const { isNamedColor, isHexColor, isHexaColor, isRgbaColor, isRgbColor } = Comparator;

export default {
  ...ColorsMap,
  ...Mapper,
  ...Types,
  isNamedColor,
  isHexColor,
  isHexaColor,
  isRgbaColor,
  isRgbColor,
};
