
const currentYear = new Date().getFullYear();

export { currentYear };


window.addEventListener("scroll", () => {
        if (scrollY > 0) {
            document.getElementById("header").style.position = "fixed";
        }
    }      
)