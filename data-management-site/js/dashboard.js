const ADMIN_PASSWORD = "kanaty04";
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

firebase.initializeApp({
  apiKey: "AIzaSyCjSVYiBJODK81YokKhSGncGBC0fUYJqRY",
  authDomain: "daikou-ffff4.firebaseapp.com",
  projectId: "daikou-ffff4"
});
const db = firebase.firestore();

loginBtn.addEventListener('click', () => {
  const val = document.getElementById('passwordInput').value;
  if (val === ADMIN_PASSWORD) {
    document.getElementById('loginBox').style.display='none';
    document.getElementById('dashboard').style.display='block';
    startListening();
  } else {
    loginError.textContent='パスワードが違います';
  }
});

function startListening(){
  const listEl = document.getElementById('list');
  const countEl = document.getElementById('count');
  db.collection('inquiries').orderBy('created_at','desc')
    .onSnapshot((snap)=>{
      listEl.innerHTML='';
      countEl.textContent = snap.size;
      snap.forEach(doc=>{
        const d = doc.data();
        const created = d.created_at && d.created_at.toDate ? d.created_at.toDate().toLocaleString():'-';
        const read = d.read || false;
        const el = document.createElement('div');
        el.className='card';
        el.innerHTML = `
          <div style="display:flex;justify-content:space-between;">
            <div>
              <div><b>${d.name||'名無し'}</b> (${d.email||'-'})</div>
              <div>${d.service} ・ ${created}</div>
            </div>
            <div>
              <div>${read?'<span style="color:green">既読</span>':'<span style="color:orange">未読</span>'}</div>
            </div>
          </div>
          <div>${d.message}</div>
        `;
        listEl.appendChild(el);
      });
    });
}
