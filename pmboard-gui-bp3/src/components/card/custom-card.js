import React from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import styles from './custom-card.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {getWorkingAreaWidth} from "../../util/util";

export default class CustomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
        })
    };

    getStyleProp(autosize) {
        const {width} = this.state;
        if (autosize) {
            return {
                width: getWorkingAreaWidth(width) || "",
                height: "auto"
            }
        } else {
            return {};
        }
    };

    render() {
        const {className, autosize, children} = this.props;
        let classes = classNames(className, styles.custom_card);
        const style = this.getStyleProp(autosize);
        return (
            <Card
                interactive={false}
                elevation={Elevation.THREE}
                className={classes}
                style={style}
            >
                {children}
            </Card>
        )
    }
};

CustomCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    autosize: PropTypes.bool,
};