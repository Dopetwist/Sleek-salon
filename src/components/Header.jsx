
import Nav from "../components/Nav";
import Icons from "./Icons";

function Header() {
    return (
        //  Header Section

        <header className="header">
            <a href="#" className="logo">Sleek</a>
            
            <Icons.TextAlignJustify id="menu-icon" />

            <Nav />
        </header>
    )
}

export default Header;