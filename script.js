"use strict";

;(
    function() {
        let body = document.body;
        let header = document.querySelector('#header');
        let imgHomes = document.querySelector('#imgHomes');
        let buttonColor = document.querySelector('#color');
        let paragraph = document.querySelector('#paragraph');
        header.classList.add('black-bg');
        imgHomes.src = "frontend/img/HomeWhite.png";
        body.classList.add('white-bg');

        buttonColor.addEventListener('click', function() {
            if (body.classList.contains('white-bg')) {
                body.classList.add('black-bg');
                body.classList.remove('white-bg');
                paragraph.style.color = 'white';
                paragraph.textContent = 'click me on white';
            } else {
                body.classList.remove('black-bg');
                body.classList.add('white-bg');
                paragraph.style.color = 'black';
                paragraph.textContent = 'click me on black';
            }

            if (body.classList.contains('white-bg')) {
                header.classList.add('black-bg');
                header.classList.remove('white-bg');
            } else {
                header.classList.add('white-bg')
                header.classList.remove('black-bg');
            }

            if (body.classList.contains('white-bg')) {
                imgHomes.src = "frontend/img/HomeWhite.png";
            } else {
                imgHomes.src = "frontend/img/HomeBlack.png";
            }
        });
    }
)();

