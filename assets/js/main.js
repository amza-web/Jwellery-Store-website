const btnOpen = document.querySelector('#nav-open')
const btnClose = document.querySelector('#nav-close')
const nav = document.querySelector('nav')

btnOpen.onclick = ()=> {
    nav.classList.add("open")
}
btnClose.onclick = ()=> {
    nav.classList.remove("open")
}