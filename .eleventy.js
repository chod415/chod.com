module.exports = function(eleventyConfig) {

  // --- CSS 파일 복사 ---
  eleventyConfig.addPassthroughCopy("style.css");

  // --- 관리자 페이지 폴더 복사 ---
  // (이것이 '하얀 화면' 문제의 해결책입니다!)
  // admin 폴더 안의 모든 파일(index.html, config.yml)을
  // _site 폴더로 그대로 복사합니다.
  eleventyConfig.addPassthroughCopy("admin");

  // --- 다른 HTML 페이지들 복사 ---
  eleventyConfig.addPassthroughCopy("게임유튜브.html");
  eleventyConfig.addPassthroughCopy("헬스유튜브.html");
  eleventyConfig.addPassthroughCopy("주식유튜브.html");

  // ⭐️ 나중에 '요리유튜브.html'을 만들면, 
  // ⭐️ 똑같이 여기에 eleventyConfig.addPassthroughCopy("요리유튜브.html"); 를 추가해줘야 합니다.

  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
