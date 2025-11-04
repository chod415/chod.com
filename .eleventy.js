module.exports = function(eleventyConfig) {

  // --- CSS 파일 복사 ---
  // style.css 파일을 찾아서 _site 폴더로 그대로 복사합니다.
  eleventyConfig.addPassthroughCopy("style.css");

  // --- 다른 HTML 페이지들 복사 ---
  // (이 페이지들은 템플릿이 아니라 그냥 '완성된 HTML'이므로 그대로 복사합니다)
  eleventyConfig.addPassthroughCopy("게임유튜브.html");
  eleventyConfig.addPassthroughCopy("헬스유튜브.html");
  eleventyConfig.addPassthroughCopy("주식유튜브.html");

  // ⭐️ 나중에 '요리유튜브.html'을 만들면, 
  // ⭐️ 똑같이 여기에 eleventyConfig.addPassthroughCopy("요리유튜브.html"); 를 추가해줘야 합니다.

  return {
    // Eleventy가 .njk, .md 외의 파일을 처리하는 방식을 설정합니다.
    // 우리는 HTML, CSS를 '있는 그대로' 복사하기 위해 이 설정이 필요합니다.
    passthroughFileCopy: true,
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
