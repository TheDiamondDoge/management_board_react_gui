import React from 'react';
import {Icon, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styles from "./project-not-found-status.module.scss";
import FieldValue from "../../field-value/field-value";

function ProjectNotFoundStatus({id, ...others}) {
    const message = getErrorMessage(id);
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
            <FieldValue value={message}/>
        </div>
    )

    function getErrorMessage(id) {
        return id
            ? `Project with id ${id} - not found`
            : "Project not found";
    }
}

ProjectNotFoundStatus.propTypes = {
    id: PropTypes.number,
};

export default React.memo(ProjectNotFoundStatus);