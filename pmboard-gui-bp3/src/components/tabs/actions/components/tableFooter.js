import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default function TableFooter (props) {
    const {onRefresh, onAdd, ...containerProps} = props;
    return (
        <div {...containerProps}>
            <Button minimal
                    large
                    icon={"refresh"}
                    intent={Intent.PRIMARY}
                    onClick={onRefresh}
            />
            <Button minimal
                    large
                    icon={"add"}
                    intent={Intent.PRIMARY}
                    onClick={onAdd}
            />
        </div>
    );
}

TableFooter.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

