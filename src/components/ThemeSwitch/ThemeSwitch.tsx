import React, {ChangeEvent} from 'react';
import themeSwitchStyle from './ThemeSwitch.module.css'
import {connect} from "react-redux";
import {handleThemeAction} from "../../redux/actions/ThemeSwitchAction";

interface IProps {
    isDarkMode: boolean;
    handleTheme: (isDarkModel: boolean) => { type: string, data: boolean }
}

interface IState {
    isDarkMode: boolean;
}

function ThemeSwitchUI(props: IProps) {

    const {isDarkMode} = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.handleTheme(!isDarkMode)
        document.body.style.backgroundColor = event.target.checked ? 'rgb(30, 30, 32)' : 'rgb(255, 255, 255)';
    }

    return (
        <div className={themeSwitchStyle["container"]}>
            <div className={themeSwitchStyle["content"]}>
                <label className={themeSwitchStyle["switch"]}>
                    <input type="checkbox" checked={isDarkMode} onChange={handleChange}/>
                    <span className={themeSwitchStyle["slider"]}></span>
                </label>
            </div>
        </div>
    );
}


const ThemeSwitch = connect(
    (state: IState) => (
        {
            isDarkMode: state.isDarkMode
        }
    ),
    {
        handleTheme: handleThemeAction
    }
)(ThemeSwitchUI)

export default ThemeSwitch;