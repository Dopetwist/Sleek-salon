
import Nav from "../components/Nav";
import Icons from "./Icons";

function Header() {
    return (
        //  Header Section

        <header className="header">
            <a href="#" className="logo">Sleek</a>
            
            <Icons.X />

            <Nav />
        </header>
    )
}

export default Header;