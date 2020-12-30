module.exports = function(eleventyConfig){

  eleventyConfig.addPassthroughCopy("assets");

  return {

      passthroughFileCopy: true,
      markdownTemplateEnginer: "njk",
      templateFormats: ["html", "njk", "md"],
      dir: {
        input: 'src',
        output: '_site',
        include: 'includes'
      }
  }

}
