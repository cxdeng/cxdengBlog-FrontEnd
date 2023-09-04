import React from 'react';
import homeStyle from './Home.module.css'
import Navbar from "../../components/Navbar/Navbar";
import {connect} from "react-redux";

interface IState {
    isDarkMode: boolean
}

interface IProps {
    isDarkMode: boolean
}

function HomeUI(props: IProps) {

    const {isDarkMode} = props

    return (
        <div className={homeStyle["container"]}>
            <Navbar/>
            <div className={homeStyle["main-container"]}>
                <h1 className={isDarkMode ? homeStyle.active : homeStyle.inactive}>
                    Welcome to My Blog
                </h1>
            </div>
        </div>
    );
}

const Home = connect(
    (state: IState) => (
        {
            isDarkMode: state.isDarkMode
        }
    ),
    {}
)(HomeUI)

export default Home;