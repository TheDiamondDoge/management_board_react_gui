import React from 'react';
import {Menu, MenuItem, Popover, Button, Position, Collapse, Pre} from '@blueprintjs/core';

export default class ProjectButton extends React.Component {
    state = {
        isOpen: false,
    };

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    Projects
                </Button>
                <Collapse isOpen={this.state.isOpen}>
                    <div style={{columnCount:1, backgroundColor: "white", width: "80%", margin: "10px auto 10px auto", borderRadius: "4px",
                   }}>
                        <a style={{display: "block"}} className="bp3-minimal" href="#">Products</a>
                        <a style={{display: "block"}} className="bp3-minimal" href="#">Products</a>
                        <a style={{display: "block"}} className="bp3-minimal" href="#">Products</a>
                        <a style={{display: "block"}} className="bp3-minimal" href="#">Products</a>
                        <a style={{display: "block"}} className="bp3-minimal" href="#">Products</a>
                    </div>
                </Collapse>
            </div>
        );
    }
};
