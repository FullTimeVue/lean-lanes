import toMaterialStyle from 'material-color-hash'
import tinycolor from 'tinycolor2'

export function colorFromText(toColor, hue = 200) {
  let mc = toMaterialStyle(toColor, hue)
  let color = tinycolor(mc.backgroundColor)

  color.setAlpha(hue / 1000)

  return color.toRgbString()
}

export function colorBoxCSS(textToColor, bgHue = 210, borderHue = 100) {
  return `
    background: ${colorFromText(textToColor, bgHue)};
    border: 1px solid ${colorFromText(textToColor, borderHue)};
  `
}
