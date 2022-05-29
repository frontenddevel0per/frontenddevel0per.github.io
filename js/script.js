'use strict';

const navbarButton = document.querySelector('.menu-button-container'),
      navbar = document.querySelector('.header__menu'),
      navbarLinks = document.querySelectorAll('.header__menu a'),
      dropdownLinks = document.querySelectorAll('.dropdown__content a'),
      educationFormsButtons = document.querySelectorAll('.educationForms__navbar button');

function ochnaya() {
    document.querySelector('.ochnaya').classList.remove('displayNone');
    document.querySelector('.zaochnaya').classList.add('displayNone');
    educationFormsButtons[0].classList.remove('nonActiveButton');
    educationFormsButtons[1].classList.add('nonActiveButton');
}

function zaochnaya() {
    document.querySelector('.ochnaya').classList.add('displayNone');
    document.querySelector('.zaochnaya').classList.remove('displayNone');
    educationFormsButtons[0].classList.add('nonActiveButton');
    educationFormsButtons[1].classList.remove('nonActiveButton');
}

navbarButton.addEventListener('click', () => {
    navbar.classList.toggle('displayBlock');
});

navbarLinks.forEach(e => {
    e.addEventListener('click', () => {
        navbar.classList.toggle('displayBlock');
        if (e == dropdownLinks[0]) {
            ochnaya();
        }
        if (e == dropdownLinks[1] || e == dropdownLinks[2]) {
            zaochnaya();
        }
    });
});

for (let i = 0; i < educationFormsButtons.length; i++) {
    if (i == 0) {
        educationFormsButtons[i].addEventListener('click', () => ochnaya());
    } else {
        educationFormsButtons[i].addEventListener('click', () => zaochnaya());
    }
}

const progs = document.querySelectorAll('.workingPrograms__main__part__list'),
      progsButtons = document.querySelectorAll('.workingPrograms button');

let sleep = function (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
};

for (let m = 0; m < progs.length; m++) {
    progsButtons[m].addEventListener('click', () => {
        if (progs[m].classList.contains('listDisplayVisible')) {
            progs[m].classList.remove('listDisplayVisible');
            sleep(250).then(() => {
                progs[m].classList.add('displayNone');
            });
        } else {
            progs[m].classList.remove('displayNone');
            sleep(50).then(() => {
                progs[m].classList.add('listDisplayVisible');
            });
        }
    });
}