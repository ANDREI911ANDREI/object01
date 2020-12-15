const img = document.querySelector('.slider__container__img');

const imgArr = ['../img/rectangle_2_248.jpg ', '../img/rectangle_2_copy_250.jpg ', '../img/rectangle_2_copy_2_252.jpg'];

var dots = document.querySelectorAll('.dot'); 

function changeIndex(ind){
    currentIndex = ind ;
}

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction ;
    if( currentIndex >= imgArr.length){
        currentIndex = 0 ;
    }else if (currentIndex < 0){
        currentIndex = imgArr.length -1 ;
    }
    img.src = imgArr[currentIndex];
}

