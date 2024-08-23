const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");

menuicon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
  console.log(menuicon.classList);
});


const input = document.querySelector('.input');
const icon = document.querySelector('.icon');

input.addEventListener('focus', () => {
  icon.classList.add('active');
});

input.addEventListener('blur', () => {
  icon.classList.remove('active');
});
