import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {
    HTMLTable,
    MenuItem,
    Popover,
    Position,
    Button,
    Menu,
    Dialog,
    Intent,
    Toast,
    Toaster,
    NumericInput
} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import {Rnd} from "react-rnd";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import styles from "./world.module.scss";

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';


export default class World extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: ["Hi", "I", "am", "Robert"],
            isDialog: false,
            count: 0,
            quill: "<h1>Hell-0</h1>",
            toasts: [
                {id: 1, name: "Hello", isShown: true},
                {id: 2, name: "this", isShown: true},
                {id: 3, name: "is", isShown: true},
                {id: 4, name: "toast", isShown: true},
            ]
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

    test() {
        // document.getElementById("content").innerHTML = response.html;
        // document.title = response.pageTitle;
        window.history.pushState("Hello", "Title", "/pws?tab=information");
    }

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
                <NavLink exact to="/pws?projectId=1">
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
                    itemListPredicate={(q, w) => {
                        return w.filter(item => item.name.toLowerCase().includes(q.toLowerCase()))
                    }}
                    itemRenderer={(item, x) => {
                        // console.log(x);
                        const {handleClick} = x;
                        return (
                            <MenuItem
                                key={item.id}
                                text={item.name}
                                onClick={handleClick}
                                active={this.isSelected(item)}
                            />
                        )
                    }
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
                                                popoverProps={{
                                                    onOpening: () => alert(1234),
                                                    popoverClassName: styles.container,
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
                <br/>
                <Toaster>
                    {this.state.toasts.map((toast) =>
                        toast.isShown &&
                        <Toast
                            id={toast.id}
                            message={toast.name}
                            timeout={1000 * toast.id}
                            intent={Intent.SUCCESS}
                            onDismiss={(q) => this.onDismiss(q, toast.id)}
                        />
                    )}
                </Toaster>
                <br/>
                <br/>
                <Button intent={Intent.DANGER} text={"Lol"} onClick={this.addToast}/>
                <br/>
                <NumericInput allowNumericCharactersOnly/>
            </>
        );
    }

    onDismiss = (isDismissed, id) => {
        this.setState((prevState) => {
            let newToasts = [...prevState.toasts];
            newToasts = newToasts.filter(toast => toast.id !== id);
            return {
                toasts: [...newToasts]
            }
        })
    };

    addToast = () => {
        this.setState((prevState) => ({
            toasts: [...prevState.toasts, {id: "14", name: "Ya-ya", isShown: true}]
        }));
    }
}

World.propTypes = {
    test: PropTypes.bool,
    testPassed: PropTypes.bool,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
};
