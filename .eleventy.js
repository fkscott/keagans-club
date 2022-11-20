module.exports = function(eleventyConfig) {
    // Output directory: _site

    // Copy `style.css` to `_site/`
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("src/icons/**");
    return {
        dir: { input: 'src', output: '_site' }
    };
};