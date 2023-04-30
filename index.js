const StyleDictionary = require("style-dictionary");

// should match dir names in tokens/brands
const brands = ["wbc", "stg", "bom", "bsa", "rams"];

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS
brands.forEach((brand) => {
  const platforms = {
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
    json: {
      transformGroup: "js",
      buildPath: `build/json/`,
      files: [
        {
          destination: `${brand}.json`,
          filter: "removePrivate",
          format: "json",
        },
      ],
    },
    viewer: {
      transformGroup: "js",
      buildPath: `token-viewer/src/tokens/`,
      files: [
        {
          destination: `${brand}.json`,
          filter: "removePrivate",
          format: "json",
        },
      ],
    },
  };

  const platformNames = Object.keys(platforms);

  platformNames.forEach(function (platform) {
    const SD = StyleDictionary.extend({
      /** The default styles */
      include: ["tokens/globals/**/*.js"],
      /** These will overwrite the default styles */
      source: [`tokens/brands/${brand}/**/*.js`],
      platforms: platforms,
    });

    SD.buildPlatform(platform);
  });
});

// figma
// json
// css
