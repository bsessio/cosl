let navs = document.querySelectorAll('.nav li');
let contents = document.querySelectorAll('.tab');

toggler = (excl, allEls) => {
  allEls.forEach((v, k) => {
    if (excl != k) {
      v.classList.remove('active');
    }
  });
}

navs.forEach((v, k) => {
  v.addEventListener('click', (e, i) => {
    v.classList.add('active');
    this.toggler(k, navs);
    contents[k].classList.add('active');
    this.toggler(k, contents);
  });
});

