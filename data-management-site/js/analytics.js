// analytics.js
// Google Analytics GA4

(function () {
  if (location.hostname === "localhost") return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-RKGZ9N056B', {
    anonymize_ip: true,
    send_page_view: true
  });
})();
