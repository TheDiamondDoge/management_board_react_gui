import React from 'react';
import {Icon, Intent} from "@blueprintjs/core";
import styles from "./no-data-found.module.scss";
import FieldName from "../../field-name/field-name";
import PropTypes from "prop-types";

function NoDataFound({message}) {
    return (
        <div className={styles.status_container}>
            <div className={styles.container}>
                <Icon
                    icon={"search"}
                    iconSize={35}
                    intent={Intent.PRIMARY}
                    className={styles.icon}
                />
                <FieldName
                    name={message}
                    className={styles.field_name}
                />
            </div>
        </div>
    );
}

NoDataFound.propTypes = {
    message: PropTypes.string
};

NoDataFound.defaultProps = {
    message: "No data found"
};

export default React.memo(NoDataFound);