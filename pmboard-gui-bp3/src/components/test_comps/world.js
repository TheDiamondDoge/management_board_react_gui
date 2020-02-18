import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {HTMLTable, MenuItem, Popover, Position, Button, Menu, Dialog, Intent} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import {Rnd} from "react-rnd";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';
import ContributingOpenProjects from "../contributing-projects-table/contributing-open-projects";
import CustomCard from "../card/custom-card";

export default class World extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: ["Hi", "I", "am", "Robert"],
            isDialog: false,
            quill: "<h1>Hell-0</h1>"
        }
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
                {/*<div style={{height: "100px", width: "900px"}}>*/}
                {/*    <ReactQuill readOnly value={this.state.quill}*/}
                {/*                onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>*/}
                {/*</div>*/}
                <div style={{width: "900px", overflowX: "auto", backgroundColor: "white"}}>
                    <ContributingOpenProjects minDate={"2019-03-05"} maxDate={"2020-06-06"} offer={this.offer} contributed={[this.notAnOffer]}/>
                </div>
                <Button intent={Intent.SUCCESS} text={"Lol"}/>
            </>
        );
    }

    offer = {
        "offerName": "Project One",
        "milestones": [{
            "label": "OR",
            "baselineDate": "2019-10-19",
            "actualDate": "2019-03-05",
            "completion": 50,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "DR0",
            "baselineDate": "2019-09-22",
            "actualDate": "2019-09-29",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "DR1",
            "baselineDate": "2019-04-09",
            "actualDate": "2019-04-10",
            "completion": 100,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "DR2",
            "baselineDate": "2019-11-22",
            "actualDate": "2019-11-30",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "DR3",
            "baselineDate": "2019-12-24",
            "actualDate": "2019-12-25",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }, {
            "label": "DR4",
            "baselineDate": "2019-09-24",
            "actualDate": null,
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "OBR",
            "baselineDate": "2020-01-16",
            "actualDate": "2020-02-06",
            "completion": 50,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "CI",
            "baselineDate": "2020-02-06",
            "actualDate": "2020-02-06",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }, {
            "label": "DR5",
            "baselineDate": "2020-01-06",
            "actualDate": "2020-01-15",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }]
    };

    notAnOffer = {
        "projectName": "Project Two",
        "milestones": [{
            "label": "OR",
            "baselineDate": "2019-10-19",
            "actualDate": "2019-04-05",
            "completion": 50,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "DR0",
            "baselineDate": "2019-09-22",
            "actualDate": "2019-06-29",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "DR1",
            "baselineDate": "2019-04-09",
            "actualDate": "2019-05-10",
            "completion": 100,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "DR2",
            "baselineDate": "2019-11-22",
            "actualDate": "2019-12-30",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "DR3",
            "baselineDate": "2019-12-24",
            "actualDate": "2019-12-25",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }, {
            "label": "DR4",
            "baselineDate": "2019-09-24",
            "actualDate": "2019-11-24",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": false
        }, {
            "label": "OBR",
            "baselineDate": "2020-01-16",
            "actualDate": "2020-01-06",
            "completion": 50,
            "meetingMinutes": "http://www.google.com",
            "shown": true
        }, {
            "label": "CI",
            "baselineDate": "2020-02-06",
            "actualDate": "2020-01-06",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }, {
            "label": "DR5",
            "baselineDate": "2020-01-06",
            "actualDate": "2020-01-15",
            "completion": 50,
            "meetingMinutes": "www.google.com",
            "shown": true
        }]
    };
};

World.propTypes = {
    test: PropTypes.bool,
    testPassed: PropTypes.bool,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
};
