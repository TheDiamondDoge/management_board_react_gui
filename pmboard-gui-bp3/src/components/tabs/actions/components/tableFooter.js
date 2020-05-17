import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default function TableFooter(props) {
    const {onRefresh, onAdd, ...containerProps} = props;
    return (
        <div {...containerProps}>
            {
                onRefresh &&
                <Button minimal
                        large
                        icon={"refresh"}
                        intent={Intent.PRIMARY}
                        onClick={onRefresh}
                />
            }
            {
                onAdd &&
                < Button minimal
                         large
                         icon={"add"}
                         intent={Intent.PRIMARY}
                         onClick={onAdd}
                />
            }
            <Button text={"Export to Excel"}
                    icon={"export"}
                    onClick={() => alert("Export!")}
                    intent={Intent.PRIMARY}
                    minimal
            />
        </div>
    );
}

TableFooter.propTypes = {
    onRefresh: PropTypes.func,
    onAdd: PropTypes.func
};

