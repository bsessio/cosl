let navs = document.querySelectorAll('.nav li');
let contents = document.querySelectorAll('.tab');
 
function myFunction(x) {
 if(window.matchMedia("(max-width: 1366px)")
    {
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
      toggler(k, navs);
      contents[k].classList.add('active');
      toggler(k, contents);
    });
  });
}
else {
!function(t){"use strict";function e(t,e){return function(o){o.target&&o.target.matches(t)&&e.apply(this,arguments)}}Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),o=e.length;--o>=0&&e.item(o)!==this;);return o>-1}),t.addDynamicEventListener=function(t,o,n,r,c){t.addEventListener(o,e(n,r),c)}}(this);

addDynamicEventListener(document.body, 'click', '.nav, li', function (e) {
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
      toggler(k, navs);
      contents[k].classList.add('active');
      toggler(k, contents);
    });
  });
});
}
