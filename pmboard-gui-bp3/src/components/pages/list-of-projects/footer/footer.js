import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import FieldName from "../../../field-name/field-name";
import styles from "./footer.module.css";

export default class Footer extends React.PureComponent {
    render() {
        const {onRefresh, amount} = this.props;
        const message = `Projects amount: ${amount}`;
        return (
            <div className={styles.container}>
                <Button
                    minimal
                    intent={Intent.PRIMARY}
                    icon={"refresh"}
                    onClick={onRefresh}
                />
                <FieldName
                    className={styles.counter}
                    name={message}
                />
            </div>
        );
    }
}

Footer.propTypes = {
    onRefresh: PropTypes.func,
    amount: PropTypes.number
};

Footer.defaultProps = {
    onRefresh: () => {
    },
    amount: 0
};