module.exports = function(eleventyConfigure) {
  // 复制 CSS 文件夹到输出目录
  eleventyConfigure.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};