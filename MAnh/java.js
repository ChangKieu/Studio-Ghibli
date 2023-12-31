const toggleBtn=document.querySelector('.toggle i')
const drop=document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    drop.classList.toggle('open')
    const isOpen = drop.classList.contains('open')

toggleBtn.classList=isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' 
}

function fullview(imglink) {
            document.getElementById("fullimg").src=imglink;
            document.getElementById("fullimgview").style.display="block";}
function closefullview(){
            document.getElementById("fullimgview").style.display="none";
 
        }

document.getElementById('nex').onclick= function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft += widthItem;
}
document.getElementById('pre').onclick= function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formlist').scrollLeft -= widthItem;
}

