const btnDarkMode = document.querySelector(".dark-mode-btn");

// darm mode in local storage verification
if (localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}


// turn on dark mode
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    }
    else {
        localStorage.setItem('darkMode', 'light')
    }
}