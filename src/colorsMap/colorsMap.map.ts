import { ColorMap } from './colorsMap.type';
import Type from '../type';

const { make8DigitHexa } = Type;

const ColorsMap: ColorMap = {
  AliceBlue: {
    rgba: { red: 240, green: 248, blue: 255, alpha: 1 },
    hexa: make8DigitHexa('F0F8FFFF'),
  },
  AntiqueWhite: {
    rgba: { red: 250, green: 235, blue: 215, alpha: 1 },
    hexa: make8DigitHexa('FAEBD7FF'),
  },
  Aqua: { rgba: { red: 0, green: 255, blue: 255, alpha: 1 }, hexa: make8DigitHexa('00FFFFFF') },
  Aquamarine: {
    rgba: { red: 127, green: 255, blue: 212, alpha: 1 },
    hexa: make8DigitHexa('7FFFD4FF'),
  },
  Azure: { rgba: { red: 240, green: 255, blue: 255, alpha: 1 }, hexa: make8DigitHexa('F0FFFFFF') },
  Beige: { rgba: { red: 245, green: 245, blue: 220, alpha: 1 }, hexa: make8DigitHexa('F5F5DCFF') },
  Bisque: { rgba: { red: 255, green: 228, blue: 196, alpha: 1 }, hexa: make8DigitHexa('FFE4C4FF') },
  Black: { rgba: { red: 0, green: 0, blue: 0, alpha: 1 }, hexa: make8DigitHexa('000000FF') },
  BlanchedAlmond: {
    rgba: { red: 255, green: 235, blue: 205, alpha: 1 },
    hexa: make8DigitHexa('FFEBCDFF'),
  },
  Blue: { rgba: { red: 0, green: 0, blue: 255, alpha: 1 }, hexa: make8DigitHexa('0000FFFF') },
  BlueViolet: {
    rgba: { red: 138, green: 43, blue: 226, alpha: 1 },
    hexa: make8DigitHexa('8A2BE2FF'),
  },
  Brown: { rgba: { red: 165, green: 42, blue: 42, alpha: 1 }, hexa: make8DigitHexa('A52A2AFF') },
  BurlyWood: {
    rgba: { red: 222, green: 184, blue: 135, alpha: 1 },
    hexa: make8DigitHexa('DEB887FF'),
  },
  CadetBlue: {
    rgba: { red: 95, green: 158, blue: 160, alpha: 1 },
    hexa: make8DigitHexa('5F9EA0FF'),
  },
  Chartreuse: {
    rgba: { red: 127, green: 255, blue: 0, alpha: 1 },
    hexa: make8DigitHexa('7FFF00FF'),
  },
  Chocolate: {
    rgba: { red: 210, green: 105, blue: 30, alpha: 1 },
    hexa: make8DigitHexa('D2691EFF'),
  },
  Coral: { rgba: { red: 255, green: 127, blue: 80, alpha: 1 }, hexa: make8DigitHexa('FF7F50FF') },
  CornflowerBlue: {
    rgba: { red: 100, green: 149, blue: 237, alpha: 1 },
    hexa: make8DigitHexa('6495EDFF'),
  },
  Cornsilk: {
    rgba: { red: 255, green: 248, blue: 220, alpha: 1 },
    hexa: make8DigitHexa('FFF8DCFF'),
  },
  Crimson: { rgba: { red: 220, green: 20, blue: 60, alpha: 1 }, hexa: make8DigitHexa('DC143CFF') },
  Cyan: { rgba: { red: 0, green: 255, blue: 255, alpha: 1 }, hexa: make8DigitHexa('00FFFFFF') },
  DarkBlue: { rgba: { red: 0, green: 0, blue: 139, alpha: 1 }, hexa: make8DigitHexa('00008BFF') },
  DarkCyan: { rgba: { red: 0, green: 139, blue: 139, alpha: 1 }, hexa: make8DigitHexa('008B8BFF') },
  DarkGoldenrod: {
    rgba: { red: 184, green: 134, blue: 11, alpha: 1 },
    hexa: make8DigitHexa('B8860BFF'),
  },
  DarkGray: {
    rgba: { red: 169, green: 169, blue: 169, alpha: 1 },
    hexa: make8DigitHexa('A9A9A9FF'),
  },
  DarkGreen: { rgba: { red: 0, green: 100, blue: 0, alpha: 1 }, hexa: make8DigitHexa('006400FF') },
  DarkKhaki: {
    rgba: { red: 189, green: 183, blue: 107, alpha: 1 },
    hexa: make8DigitHexa('BDB76BFF'),
  },
  DarkMagenta: {
    rgba: { red: 139, green: 0, blue: 139, alpha: 1 },
    hexa: make8DigitHexa('8B008BFF'),
  },
  DarkOliveGreen: {
    rgba: { red: 85, green: 107, blue: 47, alpha: 1 },
    hexa: make8DigitHexa('556B2FFF'),
  },
  DarkOrange: {
    rgba: { red: 255, green: 140, blue: 0, alpha: 1 },
    hexa: make8DigitHexa('FF8C00FF'),
  },
  DarkOrchid: {
    rgba: { red: 153, green: 50, blue: 204, alpha: 1 },
    hexa: make8DigitHexa('9932CCFF'),
  },
  DarkRed: { rgba: { red: 139, green: 0, blue: 0, alpha: 1 }, hexa: make8DigitHexa('8B0000FF') },
  DarkSalmon: {
    rgba: { red: 233, green: 150, blue: 122, alpha: 1 },
    hexa: make8DigitHexa('E9967AFF'),
  },
  DarkSeaGreen: {
    rgba: { red: 143, green: 188, blue: 143, alpha: 1 },
    hexa: make8DigitHexa('8FBC8FFF'),
  },
  DarkSlateBlue: {
    rgba: { red: 72, green: 61, blue: 139, alpha: 1 },
    hexa: make8DigitHexa('483D8BFF'),
  },
  DarkSlateGray: {
    rgba: { red: 47, green: 79, blue: 79, alpha: 1 },
    hexa: make8DigitHexa('2F4F4FFF'),
  },
  DarkTurquoise: {
    rgba: { red: 0, green: 206, blue: 209, alpha: 1 },
    hexa: make8DigitHexa('00CED1FF'),
  },
  DarkViolet: {
    rgba: { red: 148, green: 0, blue: 211, alpha: 1 },
    hexa: make8DigitHexa('9400D3FF'),
  },
  DeepPink: {
    rgba: { red: 255, green: 20, blue: 147, alpha: 1 },
    hexa: make8DigitHexa('FF1493FF'),
  },
  DeepSkyBlue: {
    rgba: { red: 0, green: 191, blue: 255, alpha: 1 },
    hexa: make8DigitHexa('87CEEBFF'),
  },
  DimGray: {
    rgba: { red: 105, green: 105, blue: 105, alpha: 1 },
    hexa: make8DigitHexa('696969FF'),
  },
  DodgerBlue: {
    rgba: { red: 30, green: 144, blue: 255, alpha: 1 },
    hexa: make8DigitHexa('1E90FFFF'),
  },
  FireBrick: {
    rgba: { red: 178, green: 34, blue: 34, alpha: 1 },
    hexa: make8DigitHexa('B22222FF'),
  },
  FloralWhite: {
    rgba: { red: 255, green: 250, blue: 240, alpha: 1 },
    hexa: make8DigitHexa('FFFAF0FF'),
  },
  ForestGreen: {
    rgba: { red: 34, green: 139, blue: 34, alpha: 1 },
    hexa: make8DigitHexa('228B22FF'),
  },
  Fuchsia: { rgba: { red: 255, green: 0, blue: 255, alpha: 1 }, hexa: make8DigitHexa('FF00FFFF') },
  Gainsboro: {
    rgba: { red: 220, green: 220, blue: 220, alpha: 1 },
    hexa: make8DigitHexa('DCDCDCFF'),
  },
  GhostWhite: {
    rgba: { red: 248, green: 248, blue: 255, alpha: 1 },
    hexa: make8DigitHexa('F8F8FFFF'),
  },
  Gold: { rgba: { red: 255, green: 215, blue: 0, alpha: 1 }, hexa: make8DigitHexa('FFD700FF') },
  Goldenrod: {
    rgba: { red: 218, green: 165, blue: 32, alpha: 1 },
    hexa: make8DigitHexa('DAA520FF'),
  },
  Gray: { rgba: { red: 128, green: 128, blue: 128, alpha: 1 }, hexa: make8DigitHexa('808080FF') },
  Green: { rgba: { red: 0, green: 128, blue: 0, alpha: 1 }, hexa: make8DigitHexa('008000FF') },
  GreenYellow: {
    rgba: { red: 173, green: 255, blue: 47, alpha: 1 },
    hexa: make8DigitHexa('ADFF2FFF'),
  },
  Honeydew: {
    rgba: { red: 240, green: 255, blue: 240, alpha: 1 },
    hexa: make8DigitHexa('F0FFF0FF'),
  },
  HotPink: {
    rgba: { red: 255, green: 105, blue: 180, alpha: 1 },
    hexa: make8DigitHexa('FF69B4FF'),
  },
  IndianRed: {
    rgba: { red: 205, green: 92, blue: 92, alpha: 1 },
    hexa: make8DigitHexa('CD5C5CFF'),
  },
  Indigo: { rgba: { red: 75, green: 0, blue: 130, alpha: 1 }, hexa: make8DigitHexa('4B008BFF') },
  Ivory: { rgba: { red: 255, green: 255, blue: 240, alpha: 1 }, hexa: make8DigitHexa('FFFFF0FF') },
  Khaki: { rgba: { red: 240, green: 230, blue: 140, alpha: 1 }, hexa: make8DigitHexa('F0E68CFF') },
  Lavender: {
    rgba: { red: 230, green: 230, blue: 250, alpha: 1 },
    hexa: make8DigitHexa('E6E6FAFF'),
  },
  LavenderBlush: {
    rgba: { red: 255, green: 240, blue: 245, alpha: 1 },
    hexa: make8DigitHexa('FFF0F5FF'),
  },
  LawnGreen: {
    rgba: { red: 124, green: 252, blue: 0, alpha: 1 },
    hexa: make8DigitHexa('7CFC00FF'),
  },
  LemonChiffon: {
    rgba: { red: 255, green: 250, blue: 205, alpha: 1 },
    hexa: make8DigitHexa('FFFACDFF'),
  },
  LightBlue: {
    rgba: { red: 173, green: 216, blue: 230, alpha: 1 },
    hexa: make8DigitHexa('B0C4DEFF'),
  },
  LightCoral: {
    rgba: { red: 240, green: 128, blue: 128, alpha: 1 },
    hexa: make8DigitHexa('F08080FF'),
  },
  LightCyan: {
    rgba: { red: 224, green: 255, blue: 255, alpha: 1 },
    hexa: make8DigitHexa('E0FFFFFF'),
  },
  LightGoldenrodYellow: {
    rgba: { red: 250, green: 250, blue: 210, alpha: 1 },
    hexa: make8DigitHexa('FAFAD2FF'),
  },
  LightGray: {
    rgba: { red: 211, green: 211, blue: 211, alpha: 1 },
    hexa: make8DigitHexa('D3D3D3FF'),
  },
  LightGreen: {
    rgba: { red: 144, green: 238, blue: 144, alpha: 1 },
    hexa: make8DigitHexa('90EE90FF'),
  },
  LightPink: {
    rgba: { red: 255, green: 182, blue: 193, alpha: 1 },
    hexa: make8DigitHexa('FFB6C1FF'),
  },
  LightSalmon: {
    rgba: { red: 255, green: 160, blue: 122, alpha: 1 },
    hexa: make8DigitHexa('FFA07AFF'),
  },
  LightSeaGreen: {
    rgba: { red: 32, green: 178, blue: 170, alpha: 1 },
    hexa: make8DigitHexa('20B2AAFF'),
  },
  LightSkyBlue: {
    rgba: { red: 135, green: 206, blue: 235, alpha: 1 },
    hexa: make8DigitHexa('87CEFAFF'),
  },
  LightSlateGray: {
    rgba: { red: 119, green: 136, blue: 153, alpha: 1 },
    hexa: make8DigitHexa('778899FF'),
  },
  LightSteelBlue: {
    rgba: { red: 176, green: 196, blue: 222, alpha: 1 },
    hexa: make8DigitHexa('B0C4DEFF'),
  },
  LightYellow: {
    rgba: { red: 255, green: 255, blue: 224, alpha: 1 },
    hexa: make8DigitHexa('FFFFE0FF'),
  },
  Lime: { rgba: { red: 0, green: 255, blue: 0, alpha: 1 }, hexa: make8DigitHexa('00FF00FF') },
  LimeGreen: {
    rgba: { red: 50, green: 205, blue: 50, alpha: 1 },
    hexa: make8DigitHexa('32CD32FF'),
  },
  Linen: { rgba: { red: 250, green: 240, blue: 230, alpha: 1 }, hexa: make8DigitHexa('FAF0E6FF') },
  Magenta: { rgba: { red: 255, green: 0, blue: 255, alpha: 1 }, hexa: make8DigitHexa('FF00FFFF') },
  Maroon: { rgba: { red: 128, green: 0, blue: 0, alpha: 1 }, hexa: make8DigitHexa('800000FF') },
  MediumAquamarine: {
    rgba: { red: 102, green: 205, blue: 170, alpha: 1 },
    hexa: make8DigitHexa('66CDAAFF'),
  },
  MediumBlue: {
    rgba: { red: 70, green: 130, blue: 180, alpha: 1 },
    hexa: make8DigitHexa('483D8BFF'),
  },
  MediumSeaGreen: {
    rgba: { red: 60, green: 179, blue: 113, alpha: 1 },
    hexa: make8DigitHexa('3CB371FF'),
  },
  MediumSlateBlue: {
    rgba: { red: 123, green: 104, blue: 238, alpha: 1 },
    hexa: make8DigitHexa('7B68EEFF'),
  },
  MediumSpringGreen: {
    rgba: { red: 0, green: 250, blue: 154, alpha: 1 },
    hexa: make8DigitHexa('00FA9AFF'),
  },
  MediumTurquoise: {
    rgba: { red: 72, green: 209, blue: 204, alpha: 1 },
    hexa: make8DigitHexa('48D1CCFF'),
  },
  MediumOrchid: {
    rgba: { red: 186, green: 85, blue: 211, alpha: 1 },
    hexa: make8DigitHexa('BA55D3FF'),
  },
  MediumPurple: {
    rgba: { red: 147, green: 112, blue: 219, alpha: 1 },
    hexa: make8DigitHexa('9370DBFF'),
  },
  MediumVioletRed: {
    rgba: { red: 199, green: 21, blue: 133, alpha: 1 },
    hexa: make8DigitHexa('C71585FF'),
  },
  MidnightBlue: {
    rgba: { red: 25, green: 25, blue: 112, alpha: 1 },
    hexa: make8DigitHexa('191970FF'),
  },
  MintCream: {
    rgba: { red: 245, green: 255, blue: 250, alpha: 1 },
    hexa: make8DigitHexa('F5FFFAFF'),
  },
  MistyRose: {
    rgba: { red: 255, green: 228, blue: 225, alpha: 1 },
    hexa: make8DigitHexa('FFE4E1FF'),
  },
  Moccasin: {
    rgba: { red: 255, green: 228, blue: 181, alpha: 1 },
    hexa: make8DigitHexa('FFE4B5FF'),
  },
  NavajoWhite: {
    rgba: { red: 255, green: 222, blue: 173, alpha: 1 },
    hexa: make8DigitHexa('FFDEADFF'),
  },
  Navy: { rgba: { red: 0, green: 0, blue: 128, alpha: 1 }, hexa: make8DigitHexa('000080FF') },
  OldLace: {
    rgba: { red: 253, green: 245, blue: 230, alpha: 1 },
    hexa: make8DigitHexa('FDF5E6FF'),
  },
  Olive: { rgba: { red: 128, green: 128, blue: 0, alpha: 1 }, hexa: make8DigitHexa('808000FF') },
  OliveDrab: {
    rgba: { red: 107, green: 142, blue: 35, alpha: 1 },
    hexa: make8DigitHexa('6B8E23FF'),
  },
  Orange: { rgba: { red: 255, green: 165, blue: 0, alpha: 1 }, hexa: make8DigitHexa('FFA500FF') },
  OrangeRed: { rgba: { red: 255, green: 69, blue: 0, alpha: 1 }, hexa: make8DigitHexa('FF4500FF') },
  Orchid: { rgba: { red: 218, green: 112, blue: 219, alpha: 1 }, hexa: make8DigitHexa('DA70D6FF') },
  PaleGoldenrod: {
    rgba: { red: 238, green: 232, blue: 170, alpha: 1 },
    hexa: make8DigitHexa('EEDD82FF'),
  },
  PaleGreen: {
    rgba: { red: 152, green: 251, blue: 152, alpha: 1 },
    hexa: make8DigitHexa('98FB98FF'),
  },
  PaleTurquoise: {
    rgba: { red: 175, green: 238, blue: 238, alpha: 1 },
    hexa: make8DigitHexa('AFEEEEFF'),
  },
  PaleVioletRed: {
    rgba: { red: 219, green: 112, blue: 147, alpha: 1 },
    hexa: make8DigitHexa('DB7093FF'),
  },
  PapayaWhip: {
    rgba: { red: 255, green: 239, blue: 213, alpha: 1 },
    hexa: make8DigitHexa('FFEFD5FF'),
  },
  PeachPuff: {
    rgba: { red: 255, green: 218, blue: 185, alpha: 1 },
    hexa: make8DigitHexa('FFDAB9FF'),
  },
  Peru: { rgba: { red: 203, green: 136, blue: 64, alpha: 1 }, hexa: make8DigitHexa('CB8E44FF') },
  Pink: { rgba: { red: 255, green: 192, blue: 203, alpha: 1 }, hexa: make8DigitHexa('FFC0CBFF') },
  Plum: { rgba: { red: 221, green: 160, blue: 221, alpha: 1 }, hexa: make8DigitHexa('DDA0DDFF') },
  PowderBlue: {
    rgba: { red: 176, green: 224, blue: 230, alpha: 1 },
    hexa: make8DigitHexa('B0E0E6FF'),
  },
  Purple: { rgba: { red: 128, green: 0, blue: 128, alpha: 1 }, hexa: make8DigitHexa('800080FF') },
  RebeccaPurple: {
    rgba: { red: 102, green: 51, blue: 153, alpha: 1 },
    hexa: make8DigitHexa('663399FF'),
  },
  Red: { rgba: { red: 255, green: 0, blue: 0, alpha: 1 }, hexa: make8DigitHexa('FF0000FF') },
  RosyBrown: {
    rgba: { red: 189, green: 183, blue: 107, alpha: 1 },
    hexa: make8DigitHexa('BDB76BFF'),
  },
  RoyalBlue: {
    rgba: { red: 65, green: 105, blue: 182, alpha: 1 },
    hexa: make8DigitHexa('4169E1FF'),
  },
  SaddleBrown: {
    rgba: { red: 139, green: 69, blue: 19, alpha: 1 },
    hexa: make8DigitHexa('8B4513FF'),
  },
  Salmon: { rgba: { red: 250, green: 128, blue: 114, alpha: 1 }, hexa: make8DigitHexa('FA8072FF') },
  SandyBrown: {
    rgba: { red: 244, green: 164, blue: 96, alpha: 1 },
    hexa: make8DigitHexa('F4A460FF'),
  },
  SeaGreen: { rgba: { red: 46, green: 139, blue: 87, alpha: 1 }, hexa: make8DigitHexa('2E8B57FF') },
  Seashell: {
    rgba: { red: 255, green: 245, blue: 238, alpha: 1 },
    hexa: make8DigitHexa('FFF5EEFF'),
  },
  Sienna: { rgba: { red: 130, green: 50, blue: 36, alpha: 1 }, hexa: make8DigitHexa('825A24FF') },
  Silver: { rgba: { red: 192, green: 192, blue: 192, alpha: 1 }, hexa: make8DigitHexa('C0C0C0FF') },
  SkyBlue: {
    rgba: { red: 135, green: 206, blue: 235, alpha: 1 },
    hexa: make8DigitHexa('87CEEBFF'),
  },
  SlateBlue: {
    rgba: { red: 106, green: 90, blue: 205, alpha: 1 },
    hexa: make8DigitHexa('6A5ACDFF'),
  },
  SlateGray: {
    rgba: { red: 112, green: 128, blue: 144, alpha: 1 },
    hexa: make8DigitHexa('708090FF'),
  },
  Snow: { rgba: { red: 255, green: 250, blue: 250, alpha: 1 }, hexa: make8DigitHexa('FFFAFAFF') },
  SpringGreen: {
    rgba: { red: 0, green: 255, blue: 127, alpha: 1 },
    hexa: make8DigitHexa('00FF7FFF'),
  },
  SteelBlue: {
    rgba: { red: 70, green: 130, blue: 180, alpha: 1 },
    hexa: make8DigitHexa('4682B4FF'),
  },
  Tan: { rgba: { red: 210, green: 180, blue: 140, alpha: 1 }, hexa: make8DigitHexa('D2B48CFF') },
  Teal: { rgba: { red: 0, green: 128, blue: 128, alpha: 1 }, hexa: make8DigitHexa('008080FF') },
  Thistle: {
    rgba: { red: 216, green: 191, blue: 216, alpha: 1 },
    hexa: make8DigitHexa('D8BFD8FF'),
  },
  Tomato: { rgba: { red: 255, green: 99, blue: 71, alpha: 1 }, hexa: make8DigitHexa('FF6347FF') },
  Turquoise: {
    rgba: { red: 64, green: 224, blue: 208, alpha: 1 },
    hexa: make8DigitHexa('40E0D0FF'),
  },
  Violet: { rgba: { red: 238, green: 130, blue: 238, alpha: 1 }, hexa: make8DigitHexa('EE82EEFF') },
  Wheat: { rgba: { red: 245, green: 222, blue: 179, alpha: 1 }, hexa: make8DigitHexa('F5DEB3FF') },
  White: { rgba: { red: 255, green: 255, blue: 255, alpha: 1 }, hexa: make8DigitHexa('FFFFFFFF') },
  WhiteSmoke: {
    rgba: { red: 245, green: 245, blue: 245, alpha: 1 },
    hexa: make8DigitHexa('F5F5F5FF'),
  },
  Yellow: { rgba: { red: 255, green: 255, blue: 0, alpha: 1 }, hexa: make8DigitHexa('FFFF00FF') },
  YellowGreen: {
    rgba: { red: 154, green: 205, blue: 50, alpha: 1 },
    hexa: make8DigitHexa('9ACD32FF'),
  },
};

export default ColorsMap;
