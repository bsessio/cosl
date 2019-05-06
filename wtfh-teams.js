function reveal(ident) {
    revealing=document.getElementById(ident).classList;
    if(revealing[0] == 'hidden') {
        revealing.remove("hidden");
    } else {
        revealing.add("hidden");
    }
};

document.addEventListener("click", (e) => {
    let ident = e.target.dataset.attr;
    if (ident) reveal(ident)
  });
