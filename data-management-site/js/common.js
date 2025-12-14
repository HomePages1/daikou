// common.js
document.addEventListener("DOMContentLoaded", () => {

  // 年号自動更新
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 外部リンクは新規タブ
  document.querySelectorAll("a[href^='http']").forEach(link => {
    if (!link.href.includes(location.hostname)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
  });

});
