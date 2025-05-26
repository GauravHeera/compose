export function toggleSlideBar() {
    let menu = document.getElementById("menu");
    let toggleMenu = document.getElementById("nav-toggle");

    if (!menu.classList.contains("show")) {
        toggleMenu.style.opacity = "0"; // ✅ Hide during animation
        setTimeout(() => {
            toggleMenu.innerHTML = "&times;"; // ✅ Change to `×` when open
            toggleMenu.classList.add("close-style"); // ✅ Apply close styling
            toggleMenu.style.opacity = "1"; // ✅ Fade back in
        }, 500);
    } else {
        toggleMenu.style.opacity = "0"; // ✅ Hide while closing
        setTimeout(() => {
            toggleMenu.innerHTML = `<div></div><div></div><div></div>`; // ✅ Restore hamburger
            toggleMenu.classList.remove("close-style"); // ✅ Remove close styling
            toggleMenu.style.opacity = "1"; // ✅ Fade back in
        }, 500);
    }

    menu.classList.toggle("show"); // ✅ Toggle menu visibility
}
