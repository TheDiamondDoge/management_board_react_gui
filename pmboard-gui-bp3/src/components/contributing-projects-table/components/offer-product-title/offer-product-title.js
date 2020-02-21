import React from 'react';
import PropTypes from 'prop-types';
import FieldName from "../../../field-name/field-name";
import classNames from "classnames";
import styles from "./offer-product-title.module.css";

export default class OfferProductTitle extends React.PureComponent {
    render() {
        const {isOffer, isContrib, className} = this.props;
        const classes = classNames(className, {[styles.red]: (!isOffer && !isContrib)});
        let title = this.getTitle(isOffer, isContrib);
        return (
            <FieldName className={classes} name={title}/>
        );
    }

    getTitle(isOffer, isContrib) {
        if (isOffer) {
            return "Contributing Open Projects:";
        } else if (isContrib) {
            return "Your project has been identified as contributing to the following Offer Project or Solution Release:";
        } else {
            return "Your project has not been identified as contributing to an Offer";
        }
    }
}

OfferProductTitle.propTypes = {
    isOffer: PropTypes.bool,
    isContrib: PropTypes.bool,
    className: PropTypes.string,
};