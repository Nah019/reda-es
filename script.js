// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Back to top button
  const back = document.getElementById('backToTop');
  if (back) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        back.style.display = 'flex';
      } else {
        back.style.display = 'none';
      }
    });

    back.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Optional: make all .btn-ler open in new window if desired:
  // document.querySelectorAll('.btn-ler').forEach(btn => {
  //   btn.setAttribute('target', '_self');
  // });
});