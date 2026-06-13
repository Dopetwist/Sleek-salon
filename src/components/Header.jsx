import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import Icons from "./Icons";
import Cart from "./Cart";

function Header({ cart }) {

    const [ open, setOpen ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const navBar = document.querySelector(".navbar");

        const addFalse = () => {
            setOpen(false)
        }

        // Toggle mobile navbar 
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

            <Nav />
            
            <div className="menu-cart">
                <div onClick={() => { navigate("/order") }}>
                    <Cart passCart={cart} />
                </div>

                {/* Toggle Menu Icon */}
                <div id="menu-con"
                onClick={() => {setOpen(!open)}} 
                >
                    { open ? <Icons.X id="menu-icon" />
                        : <Icons.TextAlignJustify id="menu-icon" /> }
                </div>
            </div>

            
        </header>
    )
}

export default Header;