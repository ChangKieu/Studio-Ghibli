const toggleBtn=document.querySelector('.toggle i')
const drop=document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    drop.classList.toggle('open')
    const isOpen = drop.classList.contains('open')

toggleBtn.classList=isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' 
}


const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')


function fullview(imglink) {
    document.getElementById("fullimg").src=imglink;
    document.getElementById("fullimgview").style.display="block";}
function closefullview(){
    document.getElementById("fullimgview").style.display="none";

}


prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})

