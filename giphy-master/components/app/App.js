import React from 'react';
import Navigation from '../navigation/navigation.container';
import style from './app.css';
import GiphyDisplay from '../giphy-display/giphy-display';
import PropTypes from 'prop-types';

export default function App ({children, isShown, link, clickedAway}) {
    isShown = isShown || false;
    return (
        <div>
            <h1 className={style.header}>Giphy Master</h1>
            <Navigation/>
            {children}
            <GiphyDisplay isShown={isShown} onClick={clickedAway} full={link}/>
        </div>
    )
};

App.propTypes = {
    isShown: PropTypes.bool.isRequired,
    link: PropTypes.string,
    clickedAway: PropTypes.func.isRequired
};