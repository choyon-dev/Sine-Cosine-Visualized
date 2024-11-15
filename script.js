/**
Based on this design:
https://x.com/alvishbaldha/status/1847896649617854904

By fajle rabbi choyon
      https:///choyon.pro
*/
const btn = document.querySelector('.btn');
setTimeout(() => {
  btn.classList.add('active');
}, 1000);
setTimeout(() => {
  btn.classList.remove('active');
}, 3000);