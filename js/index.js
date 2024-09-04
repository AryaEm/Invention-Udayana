document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

const menuicon = document.getElementById('menu-icon'); 
const menulist = document.getElementById('sidebar');
const closeBtn = document.getElementById('close')

menuicon.addEventListener('click', () => {
    menulist.classList.remove('hide-sidebar');
    console.log(menuicon.classList)
});

closeBtn.addEventListener('click', () => {
    menulist.classList.add('hide-sidebar')
    console.log('tutup')
})
