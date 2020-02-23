import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default class TableFooter extends React.PureComponent {
    render() {
        const {onExcelExport, onExcelImport} = this.props;
        return (
            <>
                <Button text={"Export to Excel"}
                        icon={"export"}
                        onClick={onExcelExport}
                        intent={Intent.PRIMARY}
                        minimal
                />
                <Button text={"Import Excel"}
                        icon={"import"}
                        onClick={onExcelImport}
                        intent={Intent.PRIMARY}
                        minimal
                />
            </>
        )
    }
}

TableFooter.propTypes = {
    onExcelExport: PropTypes.func.isRequired,
    onExcelImport: PropTypes.func.isRequired
};