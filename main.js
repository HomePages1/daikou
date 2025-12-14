// main.js

document.addEventListener("DOMContentLoaded", () => {

  // CTAスクロール
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // スクロールでCTA表示（任意）
  const cta = document.querySelector(".floating-cta");
  if (cta) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        cta.classList.add("show");
      } else {
        cta.classList.remove("show");
      }
    });
  }

});
