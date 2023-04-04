/*-----------Кнопка "вверх"-------------*/
const offset = 100
const scrollUp = document.querySelector('.scroll-up')
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path')
const pathLength = scrollUpSvgPath.getTotalLength()
scrollUpSvgPath.style.strokeDasharray = '${pathLength} ${pathLength}'
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'
const getTop = () => window.pageYOffset || document.documentElement.scrollTop
// updateDashoffdset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    const dashoffset = pathLength - (getTop() * pathLength / height)
    scrollUpSvgPath.style.strokeDashoffset = dashoffset
}
// onScroll
window.addEventListener('scroll', () => {
    updateDashoffset()
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active')
    } else {
        scrollUp.classList.remove('scroll-up--active')
    }
})
// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
/*------------Бургер меню-----------*/
const iconMenu = document.querySelector('.info__burger')
const menuBody = document.querySelector('._burger__nav')
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })

    menuBody.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', function(i) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active')
            menuBody.classList.remove('_active')
        })
    })
}
/*-------------------Карусель №1------------------*/
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
/*-------------------Карусель №2------------------*/
const images_2 = document.querySelectorAll('.slider_2 .slider-line_2 img');
const sliderLine_2 = document.querySelector('.slider_2 .slider-line_2');
let count_2 = 0;
let width_2;

function init_2() {
    console.log('resize');
    width_2 = document.querySelector('.slider_2').offsetWidth;
    sliderLine_2.style.width = width_2 * images_2.length + 'px';
    images_2.forEach(item => {
        item.style.width = width_2 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_2();
}

init_2();
window.addEventListener('resize', init_2);

document.querySelector('.slider-next_2').addEventListener('click', function () {
    count_2++;
    if (count_2 >= images_2.length) {
        count_2 = 0;
    }
    rollSlider_2();
});

document.querySelector('.slider-prev_2').addEventListener('click', function () {
    count_2--;
    if (count_2 < 0) {
        count_2 = images_2.length - 1;
    }
    rollSlider_2();
});

function rollSlider_2() {
    sliderLine_2.style.transform = 'translate(-' + count_2 * width_2 + 'px)';

}
/*-------------------Карусель №3------------------*/
const images_3 = document.querySelectorAll('.slider_3 .slider-line_3 img');
const sliderLine_3 = document.querySelector('.slider_3 .slider-line_3');
let count_3 = 0;
let width_3;

function init_3() {
    console.log('resize');
    width_3 = document.querySelector('.slider_3').offsetWidth;
    sliderLine_3.style.width = width_3 * images_3.length + 'px';
    images_3.forEach(item => {
        item.style.width = width_3 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_3();
}

init_3();
window.addEventListener('resize', init_3);

document.querySelector('.slider-next_3').addEventListener('click', function () {
    count_3++;
    if (count_3 >= images_3.length) {
        count_3 = 0;
    }
    rollSlider_3();
});

document.querySelector('.slider-prev_3').addEventListener('click', function () {
    count_3--;
    if (count_3 < 0) {
        count_3 = images_3.length - 1;
    }
    rollSlider_3();
});

function rollSlider_3() {
    sliderLine_3.style.transform = 'translate(-' + count_3 * width_3 + 'px)';

}
/*-------------------Карусель №4------------------*/
const images_4 = document.querySelectorAll('.slider_4 .slider-line_4 img');
const sliderLine_4 = document.querySelector('.slider_4 .slider-line_4');
let count_4 = 0;
let width_4;

function init_4() {
    console.log('resize');
    width_4 = document.querySelector('.slider_4').offsetWidth;
    sliderLine_4.style.width = width_4 * images_4.length + 'px';
    images_4.forEach(item => {
        item.style.width = width_4 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_4();
}

init_4();
window.addEventListener('resize', init_4);

document.querySelector('.slider-next_4').addEventListener('click', function () {
    count_4++;
    if (count_4 >= images_4.length) {
        count_4 = 0;
    }
    rollSlider_4();
});

document.querySelector('.slider-prev_4').addEventListener('click', function () {
    count_4--;
    if (count_4 < 0) {
        count_4 = images_4.length - 1;
    }
    rollSlider_4();
});

function rollSlider_4() {
    sliderLine_4.style.transform = 'translate(-' + count_4 * width_4 + 'px)';

}
/*-------------------Карусель №5------------------*/
const images_5 = document.querySelectorAll('.slider_5 .slider-line_5 img');
const sliderLine_5 = document.querySelector('.slider_5 .slider-line_5');
let count_5 = 0;
let width_5;

function init_5() {
    console.log('resize');
    width_5 = document.querySelector('.slider_5').offsetWidth;
    sliderLine_5.style.width = width_5 * images_5.length + 'px';
    images_5.forEach(item => {
        item.style.width = width_5 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_5();
}

init_5();
window.addEventListener('resize', init_5);

document.querySelector('.slider-next_5').addEventListener('click', function () {
    count_5++;
    if (count_5 >= images_5.length) {
        count_5 = 0;
    }
    rollSlider_5();
});

document.querySelector('.slider-prev_5').addEventListener('click', function () {
    count_5--;
    if (count_5 < 0) {
        count_5 = images_5.length - 1;
    }
    rollSlider_5();
});

function rollSlider_5() {
    sliderLine_5.style.transform = 'translate(-' + count_5 * width_5 + 'px)';

}
/*-------------------Карусель №6------------------*/
const images_6 = document.querySelectorAll('.slider_6 .slider-line_6 img');
const sliderLine_6 = document.querySelector('.slider_6 .slider-line_6');
let count_6 = 0;
let width_6;

function init_6() {
    console.log('resize');
    width_6 = document.querySelector('.slider_6').offsetWidth;
    sliderLine_6.style.width = width_6 * images_6.length + 'px';
    images_6.forEach(item => {
        item.style.width = width_6 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_6();
}

init_6();
window.addEventListener('resize', init_6);

document.querySelector('.slider-next_6').addEventListener('click', function () {
    count_6++;
    if (count_6 >= images_6.length) {
        count_6 = 0;
    }
    rollSlider_6();
});

document.querySelector('.slider-prev_6').addEventListener('click', function () {
    count_6--;
    if (count_6 < 0) {
        count_6 = images_6.length - 1;
    }
    rollSlider_6();
});

function rollSlider_6() {
    sliderLine_6.style.transform = 'translate(-' + count_6 * width_6 + 'px)';

}
/*-------------------Карусель №7------------------*/
const images_7 = document.querySelectorAll('.slider_7 .slider-line_7 img');
const sliderLine_7 = document.querySelector('.slider_7 .slider-line_7');
let count_7 = 0;
let width_7;

function init_7() {
    console.log('resize');
    width_7 = document.querySelector('.slider_7').offsetWidth;
    sliderLine_7.style.width = width_7 * images_7.length + 'px';
    images_7.forEach(item => {
        item.style.width = width_7 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_7();
}

init_7();
window.addEventListener('resize', init_7);

document.querySelector('.slider-next_7').addEventListener('click', function () {
    count_7++;
    if (count_7 >= images_7.length) {
        count_7 = 0;
    }
    rollSlider_7();
});

document.querySelector('.slider-prev_7').addEventListener('click', function () {
    count_7--;
    if (count_7 < 0) {
        count_7 = images_7.length - 1;
    }
    rollSlider_7();
});

function rollSlider_7() {
    sliderLine_7.style.transform = 'translate(-' + count_7 * width_7 + 'px)';

}
/*-------------------Карусель №8------------------*/
const images_8 = document.querySelectorAll('.slider_8 .slider-line_8 img');
const sliderLine_8 = document.querySelector('.slider_8 .slider-line_8');
let count_8 = 0;
let width_8;

function init_8() {
    console.log('resize');
    width_8 = document.querySelector('.slider_8').offsetWidth;
    sliderLine_8.style.width = width_8 * images_8.length + 'px';
    images_8.forEach(item => {
        item.style.width = width_8 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_8();
}

init_8();
window.addEventListener('resize', init_8);

document.querySelector('.slider-next_8').addEventListener('click', function () {
    count_8++;
    if (count_8 >= images_8.length) {
        count_8 = 0;
    }
    rollSlider_8();
});

document.querySelector('.slider-prev_8').addEventListener('click', function () {
    count_8--;
    if (count_8 < 0) {
        count_8 = images_8.length - 1;
    }
    rollSlider_8();
});

function rollSlider_8() {
    sliderLine_8.style.transform = 'translate(-' + count_8 * width_8 + 'px)';

}
/*-------------------Карусель №9------------------*/
const images_9 = document.querySelectorAll('.slider_9 .slider-line_9 img');
const sliderLine_9 = document.querySelector('.slider_9 .slider-line_9');
let count_9 = 0;
let width_9;

function init_9() {
    console.log('resize');
    width_9 = document.querySelector('.slider_9').offsetWidth;
    sliderLine_9.style.width = width_9 * images_9.length + 'px';
    images_9.forEach(item => {
        item.style.width = width_9 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_9();
}

init_9();
window.addEventListener('resize', init_9);

document.querySelector('.slider-next_9').addEventListener('click', function () {
    count_9++;
    if (count_9 >= images_9.length) {
        count_9 = 0;
    }
    rollSlider_9();
});

document.querySelector('.slider-prev_9').addEventListener('click', function () {
    count_9--;
    if (count_9 < 0) {
        count_9 = images_9.length - 1;
    }
    rollSlider_9();
});

function rollSlider_9() {
    sliderLine_9.style.transform = 'translate(-' + count_9 * width_9 + 'px)';

}
/*-------------------Карусель №10------------------*/
const images_10 = document.querySelectorAll('.slider_10 .slider-line_10 img');
const sliderLine_10 = document.querySelector('.slider_10 .slider-line_10');
let count_10 = 0;
let width_10;

function init_10() {
    console.log('resize');
    width_10 = document.querySelector('.slider_10').offsetWidth;
    sliderLine_10.style.width = width_10 * images_10.length + 'px';
    images_10.forEach(item => {
        item.style.width = width_10 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_10();
}

init_10();
window.addEventListener('resize', init_10);

document.querySelector('.slider-next_10').addEventListener('click', function () {
    count_10++;
    if (count_10 >= images_10.length) {
        count_10 = 0;
    }
    rollSlider_10();
});

document.querySelector('.slider-prev_10').addEventListener('click', function () {
    count_10--;
    if (count_10 < 0) {
        count_10 = images_10.length - 1;
    }
    rollSlider_10();
});

function rollSlider_10() {
    sliderLine_10.style.transform = 'translate(-' + count_10 * width_10 + 'px)';

}
/*-------------------Карусель №11------------------*/
const images_11 = document.querySelectorAll('.slider_11 .slider-line_11 img');
const sliderLine_11 = document.querySelector('.slider_11 .slider-line_11');
let count_11 = 0;
let width_11;

function init_11() {
    console.log('resize');
    width_11 = document.querySelector('.slider_11').offsetWidth;
    sliderLine_11.style.width = width_11 * images_11.length + 'px';
    images_11.forEach(item => {
        item.style.width = width_11 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_11();
}

init_11();
window.addEventListener('resize', init_11);

document.querySelector('.slider-next_11').addEventListener('click', function () {
    count_11++;
    if (count_11 >= images_11.length) {
        count_11 = 0;
    }
    rollSlider_11();
});

document.querySelector('.slider-prev_11').addEventListener('click', function () {
    count_11--;
    if (count_11 < 0) {
        count_11 = images_11.length - 1;
    }
    rollSlider_11();
});

function rollSlider_11() {
    sliderLine_11.style.transform = 'translate(-' + count_11 * width_11 + 'px)';

}
/*-------------------Карусель №12------------------*/
const images_12 = document.querySelectorAll('.slider_12 .slider-line_12 img');
const sliderLine_12 = document.querySelector('.slider_12 .slider-line_12');
let count_12 = 0;
let width_12;

function init_12() {
    console.log('resize');
    width_12 = document.querySelector('.slider_12').offsetWidth;
    sliderLine_12.style.width = width_12 * images_12.length + 'px';
    images_12.forEach(item => {
        item.style.width = width_12 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_12();
}

init_12();
window.addEventListener('resize', init_12);

document.querySelector('.slider-next_12').addEventListener('click', function () {
    count_12++;
    if (count_12 >= images_12.length) {
        count_12 = 0;
    }
    rollSlider_12();
});

document.querySelector('.slider-prev_12').addEventListener('click', function () {
    count_12--;
    if (count_12 < 0) {
        count_12 = images_12.length - 1;
    }
    rollSlider_12();
});

function rollSlider_12() {
    sliderLine_12.style.transform = 'translate(-' + count_12 * width_12 + 'px)';

}
/*-------------------Карусель №13------------------*/
const images_13 = document.querySelectorAll('.slider_13 .slider-line_13 img');
const sliderLine_13 = document.querySelector('.slider_13 .slider-line_13');
let count_13 = 0;
let width_13;

function init_13() {
    console.log('resize');
    width_13 = document.querySelector('.slider_13').offsetWidth;
    sliderLine_13.style.width = width_13 * images_13.length + 'px';
    images_13.forEach(item => {
        item.style.width = width_13 + 'px';
        item.style.height = 200 + 'px';
    });
    rollSlider_13();
}

init_13();
window.addEventListener('resize', init_13);

document.querySelector('.slider-next_13').addEventListener('click', function () {
    count_13++;
    if (count_13 >= images_13.length) {
        count_13 = 0;
    }
    rollSlider_13();
});

document.querySelector('.slider-prev_13').addEventListener('click', function () {
    count_13--;
    if (count_13 < 0) {
        count_13 = images_13.length - 1;
    }
    rollSlider_13();
});

function rollSlider_13() {
    sliderLine_13.style.transform = 'translate(-' + count_13 * width_13 + 'px)';

}