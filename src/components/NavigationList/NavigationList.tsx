import React from 'react';
import navigationStyle from './NavigationList.module.css'
import {connect} from "react-redux";

interface IState {
    isDarkMode: boolean
}

interface IProps {
    isDarkMode: boolean
}

function NavigationListUI(props: IProps) {

    const {isDarkMode} = props

    return (
        <div className={navigationStyle["container"]}>
            <div className={`${navigationStyle.items} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>
                <div className={`${navigationStyle.item} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>Home</div>
                <div className={`${navigationStyle.item} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>BackEnd</div>
                <div className={`${navigationStyle.item} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>FrontEnd</div>
                <div className={`${navigationStyle.item} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>Computer Basics</div>
                <div className={`${navigationStyle.item} ${isDarkMode ? navigationStyle.active : navigationStyle.inactive}`}>Other</div>
            </div>
        </div>
    );
}

const NavigationList = connect(
    (state: IState) => (
        {
            isDarkMode: state.isDarkMode
        }
    ),
    {}
)(NavigationListUI)

export default NavigationList;