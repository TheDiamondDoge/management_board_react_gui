import React from "react";
import PropTypes from "prop-types";
import {Button, Intent} from "@blueprintjs/core";

export default class TableFooter extends React.PureComponent {
    render() {
        const {onRefresh, ...containerProps} = this.props;
        return (
            <div {...containerProps}>
                <Button
                    minimal
                    large
                    icon={"refresh"}
                    intent={Intent.PRIMARY}
                    onClick={onRefresh}
                />
            </div>
        );
    }
}

TableFooter.propTypes = {
    onRefresh: PropTypes.func.isRequired,
};