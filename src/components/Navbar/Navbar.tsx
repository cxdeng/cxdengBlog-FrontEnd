import React from 'react';
import navBarStyle from './Navbar.module.css'
import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import IconLinks from "../IconLinks/IconLinks";

function Navbar() {
    return (
        <div className={navBarStyle["container"]}>
            <div className={navBarStyle["content"]}>
                <Logo/>
                <div className={navBarStyle["nav-left"]}>
                    <NavigationList/>
                    <ThemeSwitch/>
                    <IconLinks/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;