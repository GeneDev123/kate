const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentPage = 0;

prevBtn.addEventListener('click', function() {
  pages[currentPage].style.transform = 'rotateY(90deg)';
  currentPage = currentPage > 0 ? currentPage - 1 : pages.length - 1;
  pages[currentPage].style.transform = 'rotateY(0deg)';
});

nextBtn.addEventListener('click', function() {
  pages[currentPage].style.transform = 'rotateY(-90deg)';
  currentPage = currentPage < pages.length - 1 ? currentPage + 1 : 0;
  pages[currentPage].style.transform = 'rotateY(0deg)';
});
