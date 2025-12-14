document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中…';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const source = document.getElementById('source').value;

    if (!name || !email || !message) {
      status.style.color = 'red';
      status.textContent = '必須項目を入力してください（名前・メール・相談内容）。';
      submitBtn.disabled = false;
      submitBtn.textContent = '無料相談を送信';
      return;
    }

    try {
      await db.collection('inquiries').add({
        name, email, service, message, source,
        status: 'new',
        created_at: firebase.firestore.FieldValue.serverTimestamp()
      });

      status.style.color = 'green';
      status.textContent = '送信しました。管理ダッシュボードで確認できます。';
      form.reset();
    } catch (err) {
      console.error('Firestore write error', err);
      status.style.color = 'red';
      status.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '無料相談を送信';
    }
  });
});
