let appNavs = document.querySelectorAll('.nav li');
let appContents = document.querySelectorAll('.tab');
let appX = window.matchMedia("(max-width: 1366px)")
!function(t){"use strict";
             function e(t,e){
              return function(o){
               o.target&&o.target.matches(t)&&e.apply(this,arguments)
              }}
             Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),o=e.length;--o>=0&&e.item(o)!==this;);
             return o>-1
             }),
              t.addDynamicEventListener=function(t,o,n,r,c){
              t.addEventListener(o,e(n,r),c)
             }}
            (this);

function appMediaQuery(appX) {
 if(appX.matches)
    {
 appToggler = (excl, allEls) => {
  allEls.forEach((v, k) => {
    if (excl != k) {
      v.classList.remove('active');
    }
  });
  }

  appNavs.forEach((v, k) => {
    v.addEventListener('click', (e, i) => {
      v.classList.add('active');
      appToggler(k, appNavs);
      appContents[k].classList.add('active');
      appToggler(k, appContents);
    });
  });
}
else {
addDynamicEventListener(document.body, 'click', '.nav, li', function (e) {
  let appNavs = document.querySelectorAll('.nav li');
  let appContents = document.querySelectorAll('.tab');

  appToggler = (excl, allEls) => {
  allEls.forEach((v, k) => {
    if (excl != k) {
      v.classList.remove('active');
    }
  });
  }

  appNavs.forEach((v, k) => {
    v.addEventListener('click', (e, i) => {
      v.classList.add('active');
      appToggler(k, appNavs);
      appContents[k].classList.add('active');
      appToggler(k, appContents);
    });
  });
}); 
}
}

appMediaQuery(appX) // Call listener function at run time
appX.addListener(appMediaQuery) // Attach listener function on state changes
