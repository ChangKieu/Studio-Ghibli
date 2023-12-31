// Header
const toggleBtn=document.querySelector('.toggle i')
const drop=document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    drop.classList.toggle('open')
    const isOpen = drop.classList.contains('open')

toggleBtn.classList=isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' 
}

//About us
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("readmore");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm"; 
      moreText.style.display = "none";
    } 
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn"; 
      moreText.style.display = "inline";
    }
  }

//Slider - Film
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// FILM
function filterMovies() {
    var selectedYear = document.getElementById("year").value;
    var selectedGenre = document.getElementById("genre").value;

    var movieItems = document.querySelectorAll(".movie-item");
    
    movieItems.forEach(function(item) {
        var yearMatch = (selectedYear === "all" || item.getAttribute("data-year") === selectedYear);
        var genreMatch = (
            selectedGenre === "all" ||
            item.getAttribute("data-genre1") === selectedGenre ||
            item.getAttribute("data-genre") === selectedGenre
        );

        if (yearMatch && genreMatch) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


