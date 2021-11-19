// Just Displays the text [start]
const txt = document.getElementsByTagName('p')[0];
const darkThemeDevice = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeDevice.matches) {
    txt.innerHTML = "Dark Theme";
} else {
    txt.innerHTML = "Light Theme";
}
// Just Displays the text [end]