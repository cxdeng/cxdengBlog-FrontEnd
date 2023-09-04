import React from 'react';
import {connect} from "react-redux";
import githubDark from "../../images/github-dark.png";
import githubLight from "../../images/github-light.png"
import linkedin from "../../images/linkedin.png";
import iconLinksStyle from './IconLinks.module.css'


interface IState {
    isDarkMode: boolean
}

interface IProps {
    isDarkMode: boolean
}

function IconLinksUI(props: IProps) {

    const {isDarkMode} = props

    console.log("IconLinksUI", isDarkMode)

    return (
        <div className={iconLinksStyle["container"]}>
            <a href="https://github.com/cxdeng" target="_blank" rel="noreferrer">
                <img src={isDarkMode ? githubDark : githubLight} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/chengxin-deng-669289256/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt=""/>
            </a>
        </div>
    );
}

const IconLinks = connect(
    (state: IState) => (
        {
            isDarkMode: state.isDarkMode
        }
    ),
    {}
)(IconLinksUI)

export default IconLinks;