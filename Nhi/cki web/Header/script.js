const toggleBtn=document.querySelector('.toggle i')
const drop=document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    drop.classList.toggle('open')
    const isOpen = drop.classList.contains('open')

toggleBtn.classList=isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' 
}