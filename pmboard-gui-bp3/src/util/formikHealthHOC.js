import React from 'react';
import HealthIndicators from "../components/health-indicators/health-indicators";
import {Field, Formik, Form} from "formik";

//TODO: HOC HealthIndicators, set init values based on 'values' param
export default function (values) {
    return class extends React.Component {
        render() {
            return (
                <Formik
                    initialValues={
                        {
                            status: {
                                overall: 1,
                                scope: 2,
                                schedule: 1,
                                quality: 3,
                                cost: 2
                            },
                            test: "pew, biach"
                        }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                        console.log(values);
                    }}
                    render={() => {
                        return(
                        <Form>
                            <Field type="text" name="status.overall"/>
                            <Field type="text" name="status.scope"/>
                            <Field type="text" name="status.schedule"/>
                            <Field type="text" name="status.quality"/>
                            <Field type="text" name="status.cost"/>
                            <div></div>
                            <span></span>
                            <table></table>
                            <button type="submit">Submit</button>
                        </Form>
                    )}}
                />
            )
        }
    }
}