import React from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import styles from './custom-card.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ErrorBoundary from "../error-boundary/error-boundary";

//TODO add debouncer to event listener handler
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
            height: window.innerHeight
        })
    };

    getStyleProp(autosize) {
        const {height} = this.state;
        if (autosize) {
            return {
                height: (height - 240) || ""
            };
        } else {
            return {};
        }
    };

    render() {
        const {className, autosize, children} = this.props;
        let classes = classNames(className, styles.custom_card);
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
        true, false, "y"
    ]),
};
