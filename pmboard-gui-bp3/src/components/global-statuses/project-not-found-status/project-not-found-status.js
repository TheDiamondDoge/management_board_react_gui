import React from 'react';
import {Icon, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styles from "./project-not-found-status.module.scss";
import FieldValue from "../../field-value/field-value";

export default class ProjectNotFoundStatus extends React.PureComponent {
    render() {
        const {id, ...others} = this.props;
        const message = this.getErrorMessage(id);
        const iconSize = 100;
        return (
            <div
                className={styles.wrapper}
                {...others}
            >
                <Icon
                    icon={"inbox-search"}
                    iconSize={iconSize}
                    intent={Intent.PRIMARY}
                    className={styles.icon_style}
                />
                <FieldValue value={message} />
            </div>
        )
    }

    getErrorMessage(id) {
        return id
            ? `Project with id ${id} - not found`
            : "Project not found";
    }
}

ProjectNotFoundStatus.propTypes = {
    id: PropTypes.number,
};
