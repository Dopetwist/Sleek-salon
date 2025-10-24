
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Icons from "./Icons";

function Header() {

    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        const navBar = document.querySelector(".navbar");

        const addFalse = () => {
            setOpen(false)
        }

        if (open) {
            navBar.classList.add("show");
        } else {
            navBar.classList.remove("show");
        }

        window.addEventListener("scroll", addFalse);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", addFalse);
        }
    }, [open]);
    

    return (
        //  Header Section

        <header className="header" id="header">
            <a href="#home" className="logo">Sleek</a>
            
            <div id="menu-con"
            onClick={() => {setOpen(!open)}}
            >
                { open ? <Icons.X id="menu-icon" />
                    : <Icons.TextAlignJustify id="menu-icon" /> }
            </div>

            <Nav />
        </header>
    )
}

export default Header;