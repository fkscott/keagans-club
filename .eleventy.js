module.exports = function(eleventyConfig) {
    // Output directory: _site

    // Copy `style.css` to `_site/`
    let mustache = require("mustache");
    eleventyConfig.setLibrary("mustache", mustache);

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/icons/**");
    return {
        dir: { input: 'src', output: '_site' }
    };
};