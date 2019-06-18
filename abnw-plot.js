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

function reveal(ident) {
	// if (ident === 'button') {
	// let ident = 
	revealing=document.getElementById(ident).classList;
	revealingTest = [revealing[0], revealing["value"]]
	console.log(revealingTest);
	
	if (ident === 'wrapper' || ident === 'content' || ident === null) {
		return;		
	}
	else {

	if(revealing[0] == 'hidden') {
		let newIdent = ident[0]+ident[1]+ident[2]+ident[3]+ident[4]+ident[5]+ident[6];
		let newIdentNo = ident[7];

		console.log("Ident: "+newIdent, "IdentNo: "+newIdentNo);

		revealing.remove("hidden");
		if (newIdent === "plotter") {
			let track = "tracker"+newIdentNo;
			document.getElementById(track).classList.add("hidden");
		}
		else if (newIdent === "tracker") {
			let plot = "plotter"+newIdentNo;
			document.getElementById(plot).classList.add("hidden");
		}
	}
	else revealing.add("hidden");
// }
	// else {
	// 	console.log("Not valid");
		
	// }
}
};

document.addEventListener("click", (e, err) => {
	let ident = e.path[0].attributes[0].value;;
	if (ident) reveal(ident)
	});


document.addEventListener("touchstart", (e, err) => {
	let ident = e.target.dataset.attr;
	if (ident) reveal(ident)
	});

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
