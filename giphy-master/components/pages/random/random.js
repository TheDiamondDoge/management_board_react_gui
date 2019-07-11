import React from 'react';
import PropTypes from 'prop-types';
import styles from './random.css';

export default class Random extends React.Component {
    componentDidMount() {
        this.props.onButtonClick();
    }

    render() {
        const { giphy, onButtonClick, onGiphyClick, isLoading } = this.props;
        const disabled = isLoading ? "disabled" : "";
        return (
            <div>
                <button
                    className={styles.button}
                    onClick={onButtonClick}
                    disabled={disabled}
                >
                    {isLoading && <img className={styles.loading} src="/images/ajax-loader.gif"/>}
                    Next giphy
                </button>
                <div>
                    <img alt={"giphy"} className={styles.giphy} onClick={() => onGiphyClick(giphy.full)} src={giphy.small}/>
                </div>
            </div>
        )
    }
}

Random.propTypes = {
    giphy: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onGiphyClick: PropTypes.func.isRequired
};
