// const Color = require("color");

const tintColor = (baseColor, tint) => {
  // const col = baseColor.replace("#", "");
  // let red = parseInt(col.slice(0, 2), 16);
  // let green = parseInt(col.slice(2, 4), 16);
  // let blue = parseInt(col.slice(4, 6), 16);

  // const color = Color.rgb(red, green, blue);

  // return color.lightness(tint).hex();
  return baseColor;
};

const generateTints = (baseColor) => {
  return {
    10: { value: tintColor(baseColor, 0.1), private: true },
    20: { value: tintColor(baseColor, 0.2), private: true },
    30: { value: tintColor(baseColor, 0.3), private: true },
    40: { value: tintColor(baseColor, 0.4), private: true },
    50: { value: baseColor, private: true },
    60: { value: tintColor(baseColor, 0.6), private: true },
    70: { value: tintColor(baseColor, 0.7), private: true },
    80: { value: tintColor(baseColor, 0.8), private: true },
    90: { value: tintColor(baseColor, 0.9), private: true },
  };
};

module.exports = {
  generateTints,
};
