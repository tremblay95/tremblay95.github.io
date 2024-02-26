const CLASS_NAME_HIDENAV = 'hide-nav';

function ToggleNav()
{
    let nav = document.querySelector('#mobile-nav');

    if (nav.classList.contains(CLASS_NAME_HIDENAV))
    {
        nav.classList.remove(CLASS_NAME_HIDENAV);
    }
    else
    {
        nav.classList.add(CLASS_NAME_HIDENAV);
    }

    console.log(nav.classList);
}

function HideNav()
{
    let nav = document.querySelector('#mobile-nav');

    if (!nav.classList.contains(CLASS_NAME_HIDENAV))
    {
        nav.classList.add(CLASS_NAME_HIDENAV);
    }

    return true;
}