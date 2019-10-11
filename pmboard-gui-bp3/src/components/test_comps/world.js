import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../loading-card/loading";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {InputGroup, TextArea, HTMLTable} from "@blueprintjs/core";
import FormikCustomField from "../formik-custom-field/formik-custom-field";

export default class World extends React.Component {
    customInputComponent = ({field, form: {touched, errors}, ...props}) => (
        <div>
            <TextArea type="text" {...field} {...props} />
            {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );

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
