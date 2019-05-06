function reveal(ident) {
    revealing=document.getElementById(ident).classList;
    if(revealing[0] == 'hidden') revealing.remove("hidden");
    else revealing.add("hidden");
};

document.addEventListener("click", (e) => {
    let ident = e.path[0].attributes[0].value;
    if (ident) reveal(ident)
  });

document.addEventListener("touchstart", (e) => {
    let ident = e.path[0].attributes[0].value;
    if (ident) reveal(ident)
  });
