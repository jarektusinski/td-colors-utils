#### [TusinskiDev] Colors Utils

# td-colors-utils

A lightweight TypeScript utility library for working with colors in web and design systems.

This package provides fast validation, conversion, and mapping functions for named colors, hex, RGB, and RGBA formats. It is designed for frontend developers, design tool builders, theme engines, and any TypeScript project that needs reliable color utilities.

## Features

- Validate CSS color formats: named colors, hex, hexa, rgb, rgba
- Convert between `hex`, `hexa`, `rgb`, `rgba`, and named CSS colors
- Resolve color names from numeric values and vice versa
- Support for short and long hex codes, plus alpha-enabled color values
- TypeScript-first API with helpful export types

## Installation

```bash
npm install td-colors-utils
```

## Quick Start

```ts
import ColorUtils from 'td-colors-utils';

const {isHexColor, hexToRgb, nameToHex, rgbToName} = ColorUtils;

const isHex = isHexColor('#3498db');
const rgb = hexToRgb('#3498db');
const name = rgbToName('rgb(52, 152, 219)');
const hexFromName = nameToHex('dodgerblue');
```

## Use Cases

### 1. Theme generation and design systems

- Convert theme palette values between hex, rgba, and named colors
- Normalize color input strings in theme configuration
- Determine fallback names for generated colors

### 2. UI builders and component libraries

- Validate developer-provided color values before rendering
- Convert dynamic color values for CSS-in-JS output
- Support user-entered color values in design tools

### 3. Color pickers and editors

- Parse a color string and show equivalent outputs in multiple formats
- Automatically suggest named colors when a matching value exists
- Convert short hex (`#abc`) to full hex and RGBA transparently

### 4. Data visualization and charting

- Map palette names to hex codes for chart styling
- Validate exported color values before generating SVG/CANVAS styles
- Convert between color formats required by different rendering libraries

### 5. Accessibility and contrast tooling

- Normalize colors to compare contrast ratios consistently
- Convert all values to RGBA for alpha-aware contrast calculations
- Validate color inputs from external datasets

## API Examples

### Validation helpers

```ts
ColorUtils.isNamedColor('tomato');
ColorUtils.isHexColor('#ff6347');
ColorUtils.isHexaColor('#ff634780');
ColorUtils.isRgbColor('rgb(255, 99, 71)');
ColorUtils.isRgbaColor('rgba(255, 99, 71, 0.8)');
```

### Conversion helpers

```ts
ColorUtils.hexToRgb('#ff6347');
ColorUtils.hexToRgba('#ff6347');
ColorUtils.hexToName('#ff6347');
ColorUtils.rgbToHex('rgb(255, 99, 71)');
ColorUtils.rgbToName('rgb(255, 99, 71)');
ColorUtils.nameToHex('tomato');
ColorUtils.nameToRgba('tomato');
```

### Generic color normalization

```ts
const normalized = ColorUtils.toRgba('tomato');
const rgbaProp = ColorUtils.toRgbaProp('#ff6347');
const colorInfo = ColorUtils.colorPropByHex('#ff6347');
```

## TypeScript Support

The package exports useful types for strong color handling:

- `Color`
- `Hex`
- `Rgb`
- `Rgba`
- `RgbArray`
- `RgbaArray`

## License

MIT
