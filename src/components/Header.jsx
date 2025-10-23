
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Icons from "./Icons";

function Header() {

    const [ open, setOpen ] = useState(false);

    useEffect(() => {

    }, []);
    

    return (
        //  Header Section

        <header className="header">
            <a href="#" className="logo">Sleek</a>
            
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