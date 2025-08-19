const CLASS_NAME_HIDENAV = 'hide-nav';
const CLASS_NAME_NAVBTN_SHOWN = "bi-x";
const CLASS_NAME_NAVBTN_HIDDEN = "bi-list";

const mobileNav = document.querySelector('#mobile-nav');
const mobileNavBtn = document.querySelector('#mobile-navbtn');

function ToggleNav()
{
    mobileNav.classList.toggle(CLASS_NAME_HIDENAV);

    mobileNavBtn.classList.toggle(CLASS_NAME_NAVBTN_HIDDEN);
    mobileNavBtn.classList.toggle(CLASS_NAME_NAVBTN_SHOWN);
}

function HideNav()
{
    mobileNav.classList.add(CLASS_NAME_HIDENAV);

    mobileNavBtn.classList.remove(CLASS_NAME_NAVBTN_SHOWN);
    mobileNavBtn.classList.add(CLASS_NAME_NAVBTN_HIDDEN);
}