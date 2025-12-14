// 送信先Gmail
const ADMIN_EMAIL = 'tomokana042@gmail.com'; 

function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  const subject = "【経理代行相談フォーム】新しい相談が届きました";
  const body = `
日付: ${new Date().toLocaleString()}
名前: ${data.lastName} ${data.firstName}
会社: ${data.company}
メール: ${data.email}
電話: ${data.phone}
相談内容: ${data.message || "なし"}
きっかけ: ${data.source}
  `;

  GmailApp.sendEmail(ADMIN_EMAIL, subject, body);

  return ContentService.createTextOutput(JSON.stringify({status:'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
