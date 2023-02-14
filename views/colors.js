const currentPage = window.location.pathname;

if (currentPage === '/page-1') {
  document.body.classList.add('page-1');
} else if (currentPage === '/page-2') {
  document.body.classList.add('page-2');
} else if (currentPage === '/page-3') {
  document.body.classList.add('page-3');
}