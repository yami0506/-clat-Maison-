// ハンバーガーメニューの開閉例
const nav = document.querySelector('.nav ul');
document.querySelector('.logo').addEventListener('click', () => {
  nav.classList.toggle('open');
});
