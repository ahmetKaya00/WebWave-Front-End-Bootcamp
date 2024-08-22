const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index){
    if(index>= slides.length){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex = slides.length - 1;
    }else{
        currentIndex = index;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click',()=>{
    showSlide(currentIndex + 1);
});
prevBtn.addEventListener('click',()=>{
    showSlide(currentIndex - 1);
});

setInterval(()=>{
    showSlide(currentIndex + 1);
}, 3000);
