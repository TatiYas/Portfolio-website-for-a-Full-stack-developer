const theme = window.matchMedia('(prefers-color-scheme: dark)');

 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    
    const favicon = document.getElementById('favicon');
     
    if (themeName === 'theme-dark') {
        favicon.href = './darkFavIcon.svg';
    } else {
        favicon.href = './lightFavIcon.svg';
    }
}

export function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

export function getTheme() {
    const getThemeLocal = localStorage.getItem("theme");
    if(getThemeLocal === "theme-dark" || theme.matches === true) {
        setTheme('theme-dark');
        document.getElementById("slider").checked = true;
        document.getElementById("mob--menu-slider").checked = true;
    }
    if(getThemeLocal === "theme-light" || theme.matches === false) {
        setTheme('theme-light');
        document.getElementById("slider").checked = false;
        document.getElementById("mob--menu-slider").checked = false;
    }
}