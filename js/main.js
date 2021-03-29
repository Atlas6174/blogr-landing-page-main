/* Burger button and navigation menu */
const menuBtn = document.querySelector('.menu-btn');
const menuBtnBrg = document.querySelector(".menu-btn_brg");
const nav = document.querySelector('.nav');
const menuItem = document.querySelectorAll(".menu-item");

const closeDrops = function() {
  menuItem.forEach(item => {
      item.children[1].classList.remove('open');
      item.children[0].classList.remove('open');

      item.droped = false;
    })
}

/* Open navbar */
menuBtn.addEventListener('click', toggle);
var open = false;

function toggle() {
  if (!open) {
    menuBtnBrg.classList.add('open');
    nav.classList.add('open');

    open = true;
  } else {
    menuBtnBrg.classList.remove('open');
    nav.classList.remove('open');

    closeDrops();
    open = false;
  }
}


/* Drop sub menus */
menuItem.forEach(item => {
  item.addEventListener('click', drop);
  item.droped = false;
})

console.log(menuItem);


function drop() {
  if (!this.droped) {
    closeDrops();

    let link = this.children[0];
    let dropdown = this.children[1];

    link.classList.add('open');
    dropdown.classList.add('open');

    this.droped = true;
  } else {
    let link = this.children[0];
    let dropdown = this.children[1];

    link.classList.remove('open');
    dropdown.classList.remove('open');

    this.droped = false;
  }
}
