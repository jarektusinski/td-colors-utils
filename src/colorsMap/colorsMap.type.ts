import { Color } from 'td-colors-names';
import { HexaDigit8, RgbaProp } from '../type';

interface ColorsProp {
  hexa: HexaDigit8;
  rgba: RgbaProp;
}

type ColorMap = {
  [key in Color]: ColorsProp;
};

export type { ColorMap, ColorsProp };
