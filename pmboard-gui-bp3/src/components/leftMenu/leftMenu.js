import React from 'react';
import styles from './leftMenu.module.css';
import ProjectButton from "./menuButtons/projectsButton";
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class LeftMenu extends React.Component {
    render() {
        let {flexItemStyle} = this.props;
        let style = classNames(styles.container, flexItemStyle);

        return (
            <div className={style}>
                <ProjectButton/>
            </div>
        )
    }
}

LeftMenu.propTypes = {
    flexItemStyle: PropTypes.string.isRequired
};