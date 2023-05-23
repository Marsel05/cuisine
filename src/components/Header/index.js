import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [modal, setModal] = useState(false)
    const toScroll = () => {
        window.scroll(0,2800)
    }
    const toScroll1 = () => {
        window.scroll(0,700)
    }
    const toScroll2 = () => {
        window.scroll(0,1800)
    }
    const toScroll3 = () => {
        window.scroll(0,5)
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>Restaurant</h1>
                    <div className="header--nav" style={{
                        display:  !modal ?  "block" : "none",
                        zIndex: modal ? "97" : ""
                    }}>
                        <Link onClick={toScroll} to={"/interior"} >interior</Link>
                        <Link onClick={toScroll1} to={"/about"}>About Us</Link>
                        <Link onClick={toScroll2} to={"/main"}>Menu</Link>
                        <Link onClick={toScroll3} to={"/"}>Contacts</Link>

                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="header--search">
                        <input type="search" placeholder="   search..."/>
                        <select>
                            <option>En</option>
                            <option>Ru</option>
                            <option>Kg</option>
                        </select>
                    </div>
                    <div className="header--burger" style={{
                        zIndex: modal ? "99" : ""
                    }} onClick={() => {
                        setModal(!modal)
                    }}>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                        <div className="header--burger__menu"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;