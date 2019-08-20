import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {ProgressBar, Intent} from "@blueprintjs/core";

export default class World extends React.Component {
    render() {
        console.log(this.props);
        const {test, testPassed, onClick1, onClick2} = this.props;
        return (
            <>
                <ProgressBar intent={Intent.PRIMARY} />
                <NavLink exact to="/pws">
                    <button>PWS</button>
                </NavLink>
                <div>
                    {test} <br/>
                    {testPassed} <br/>
                    <button onClick={onClick1}>1</button>
                    <button onClick={onClick2}>2</button>
                </div>
            </>
        );
    }
};

World.propTypes = {
    test: PropTypes.bool,
    testPassed: PropTypes.bool,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
};
