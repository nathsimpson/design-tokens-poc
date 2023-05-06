const StyleDictionary = require("style-dictionary");

// should match dir names in tokens/brands
const brands = ["wbc", "stg", "bom", "bsa", "rams"];

console.log("Build started...");

const getPlatformsForBrand = (brand) => {
  return {
    css: {
      transformGroup: "css",
      buildPath: `build/css/${brand}/`,
      files: [
        {
          format: `css/variables`,
          destination: "variables.css",
          filter: "removePrivate",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: `build/scss/${brand}/`,
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          filter: "removePrivate",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: `build/js/`,
      files: [
        {
          destination: `${brand}.js`,
          filter: "removePrivate",
          format: "javascript/module",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    "js-flat": {
      transformGroup: "js",
      buildPath: `build/js-flat/`,
      files: [
        {
          destination: `${brand}.js`,
          filter: "removePrivate",
          format: "javascript/module-flat",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    viewer: {
      transformGroup: "js",
      buildPath: `token-viewer/src/tokens/`,
      files: [
        {
          destination: `${brand}.js`,
          filter: "removePrivate",
          format: "javascript/module",
          name: "tokens",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
  };
};

const buildStyleDictionary = () => {
  brands.forEach((brand) => {
    const SD = StyleDictionary.extend({
      /** The default styles */
      include: ["tokens/globals/**/*.js"],
      /** These will overwrite the default styles */
      source: [`tokens/brands/${brand}.js`],
      platforms: getPlatformsForBrand(brand),
    });

    SD.buildAllPlatforms();
  });
};

buildStyleDictionary();
