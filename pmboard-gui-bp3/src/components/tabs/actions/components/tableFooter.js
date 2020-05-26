import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default function TableFooter(props) {
    const {onRefresh, onAdd, onExport, fileExporting, ...containerProps} = props;
    return (
        <div {...containerProps}>
            {
                onRefresh &&
                <Button
                    minimal
                    large
                    icon={"refresh"}
                    intent={Intent.PRIMARY}
                    onClick={onRefresh}
                />
            }
            {
                onAdd &&
                <Button
                    minimal
                    large
                    icon={"add"}
                    intent={Intent.PRIMARY}
                    onClick={onAdd}
                />
            }
            {
                onExport &&
                <Button
                    loading={fileExporting}
                    text={"Export to Excel"}
                    icon={"export"}
                    onClick={onExport}
                    intent={Intent.PRIMARY}
                    minimal
                />
            }
        </div>
    );
}

TableFooter.propTypes = {
    onRefresh: PropTypes.func,
    onAdd: PropTypes.func,
    onExport: PropTypes.func,
    fileExporting: PropTypes.bool,
};

