import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {HTMLTable, MenuItem, Popover, Position, Button, Menu, Dialog} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import {Rnd} from "react-rnd";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import {Bar, Chart} from 'react-chartjs-2';

export default class World extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: ["Hi", "I", "am", "Robert"],
            isDialog: false
        }
    }

    componentDidMount() {
         Chart.pluginService.register({
            afterDraw: function (chart, easing) {
                return {
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: 55,
                            borderColor: 'rgb(75, 192, 192)',
                            borderWidth: 4,
                            label: {
                                enabled: true,
                                content: 'Test'
                            }
                        }]
                    }
                }
            }
        });
    }

    addElement = (elem) => {
        this.setState((prevState) => {
            if (!prevState.selectedItems.includes(elem)) {
                return {
                    selectedItems: [...prevState.selectedItems, elem]
                }
            }
        })
    };

    deleteElement = (elem) => {
        this.setState((prevState) => ({
            selectedItems: prevState.selectedItems.filter((e) => (e !== elem))
        }));
    };

    isSelected = (elem) => (this.state.selectedItems.includes(elem));

    render() {
        const {test, testPassed, onClick1, onClick2} = this.props;
        const menu = (
            <Menu>
                <MenuItem text={"Sort by Asc"} icon={"sort-asc"}/>
                <MenuItem text={"Sort by Desc"} icon={"sort-desc"}/>
            </Menu>
        );

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        return (
            <>
                <div style={{width: 100, height: 100, border: "1px solid black"}}>
                    <Dialog
                        isOpen={this.state.isDialog}
                        title="Test"
                    >
                        Yo!
                    </Dialog>
                </div>
                <LoadingSpinner/>
                <NavLink exact to="/pws">
                    <button>PWS</button>
                </NavLink>
                <div>
                    {test} <br/>
                    {testPassed} <br/>
                    <button onClick={onClick1}>1</button>
                    <button onClick={onClick2}>2</button>

                </div>
                <input onChange={(x) => (console.log(x.target.value))}/>
                <br/>

                <MultiSelect

                    items={[{name: "A", id: 1}, {name: "B", id: 2}, {name: "C", id: 3}]}
                    itemRenderer={(item, {handleClick}) =>
                        <MenuItem
                            key={item.id}
                            text={item.name}
                            onClick={handleClick}
                            active={this.isSelected(item)}
                        />
                    }
                    selectedItems={this.state.selectedItems}
                    onItemSelect={(elem) => {
                        this.addElement(elem)
                    }}
                    tagRenderer={item => item}
                    tagInputProps={{
                        onRemove: (item) => {
                            this.deleteElement(item)
                        }
                    }}
                />

                <Formik
                    onSubmit={(e, b) => {
                        console.log(e);
                        console.log(b);
                    }
                    }
                    initialValues={{date: new Date(), semail: {test: "heheh@mail.ru"}}}
                    render={
                        () => (
                            <Form>
                                <HTMLTable>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <Field type="date" name="date" component={FormikCustomField}/>
                                            <ErrorMessage name="email" component="div"/>
                                        </td>
                                        <td>
                                            <Field type="email" name="semail.test"/>
                                            <ErrorMessage name="semail.test" component="div"/>
                                        </td>
                                        <td>

                                            <MultiSelect
                                                name={"selector"}
                                                items={[{name: "A", id: 1}, {name: "B", id: 2}, {name: "C", id: 3}]}
                                                itemRenderer={(item, {modifiers, handleClick}) =>
                                                    <MenuItem
                                                        key={item.id}
                                                        text={item.name}
                                                        onClick={handleClick}
                                                        active={this.isSelected(item)}
                                                    />
                                                }
                                                selectedItems={this.state.selectedItems}
                                                onItemSelect={(elem) => {
                                                    this.addElement(elem)
                                                }}
                                                tagRenderer={item => item}
                                                tagInputProps={{
                                                    onRemove: (item) => {
                                                        this.deleteElement(item)
                                                    }
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <button type="submit">Submit</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </HTMLTable>
                            </Form>
                        )
                    }
                />
                <HTMLTable>
                    <tbody>
                    <tr>
                        <td>
                            <Rnd
                                style={{
                                    backgroundColor: "red", position: "relative", width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                disableDragging
                                // enableResizing={{right: true}}
                            >
                                1
                            </Rnd>
                        </td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    </tbody>
                </HTMLTable>
                <Popover content={menu} position={Position.RIGHT_BOTTOM}>
                    <Button icon={"sort"} minimal/>
                </Popover>
                {/*<StatusContainer>*/}
                {/*    <ErrorStatus/>*/}
                {/*</StatusContainer>*/}
                <Button
                    onClick={() => {
                        console.log(this.state.isDialog);
                        this.setState((prev) => ({isDialog: !prev.isDialog}))
                    }
                    }/>
                <div>
                    <h2>Bar Example (custom size)</h2>
                    <Bar
                        data={data}
                        width={100}
                        height={500}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    stacked: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Number of CRs (severity ECMA)"
                                    }
                                }],
                                xAxes: [{
                                    stacked: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Week “yyww”"
                                    }

                                }]
                            },
                            plugins: {
                                annotation: {
                                    annotations: [{
                                        type: 'line',
                                        mode: 'horizontal',
                                        scaleID: 'y-axis-0',
                                        value: 55,
                                        borderColor: 'rgb(75, 192, 192)',
                                        borderWidth: 4,
                                        label: {
                                            enabled: true,
                                            content: 'Test'
                                        }
                                    }]
                                }
                            }
                        }
                        }
                    />
                </div>
            </>
        );
    }
};

World.propTypes = {
    test: PropTypes.bool,
    testPassed: PropTypes.bool,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
};
