import React from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import styles from './custom-card.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {getWorkingAreaWidth} from "../../util/util";
import ErrorBoundary from "../error-boundary/error-boundary";

export default class CustomCard extends React.PureComponent {
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
            height: window.innerHeight
        })
    };

    getStyleProp(autosize) {
        const {width, height} = this.state;
        if (autosize) {
            let size = {
                width: getWorkingAreaWidth(width) || "",
                height: (height - 240) || ""
            };
            if (autosize === "x") {
                delete size.height;
                delete size.width;

            }
            if (autosize === "y") {
                delete size.width;
            }
            return size;
        } else {
            return {};
        }
    };

    render() {
        const {className, autosize, children} = this.props;
        let classes = classNames(className, styles.custom_card);
        // const style = this.getStyleProp(autosize);
        return (
            <ErrorBoundary>
                <Card
                    interactive={false}
                    elevation={Elevation.THREE}
                    className={classes}
                    // style={style}
                >
                    {children}
                </Card>
            </ErrorBoundary>
        )
    }
};

CustomCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    autosize: PropTypes.oneOf([
        true, false, "x", "y"
    ]),
};
