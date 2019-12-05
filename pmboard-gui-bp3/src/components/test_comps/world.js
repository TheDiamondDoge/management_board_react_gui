import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../loading-card/loading";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {HTMLTable, MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import ColumnResizer from "react-column-resizer";
import {Column, Table} from "@blueprintjs/table";


export default class World extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: ["Hi", "I", "am", "Robert"]
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
        return (
            <>
                <Loading/>
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
                                            <button type="submit">Submit</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </HTMLTable>
                            </Form>
                        )
                    }
                />
                <div>
                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <td>1</td>
                            <ColumnResizer className="columnResizer" />
                            <td>2</td>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>3</td>
                            <td />
                            <td>4</td>
                        </tr>
                        </tbody>
                    </table>
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
