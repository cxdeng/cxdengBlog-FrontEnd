import React from 'react';
import logoStyle from './Logo.module.css'
import personalLogo from '../../images/personalLogo.jpg'
import {connect} from "react-redux";

interface IState {
    isDarkMode: boolean
}

interface IProps {
    isDarkMode: boolean
}

function LogoUI(props: IProps) {

    const {isDarkMode} = props

    return (
        <div className={logoStyle["container"]}>
            <img src={personalLogo} alt=""/>
            <div id={logoStyle['blog-name']} className={isDarkMode ? logoStyle.active : logoStyle.inactive}>cxdengBlog</div>
        </div>
    );
}

const Logo = connect(
    (state: IState) => (
        {
            isDarkMode: state.isDarkMode
        }
    ),
    {}
)(LogoUI)
export default Logo;