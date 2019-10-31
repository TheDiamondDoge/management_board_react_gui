//TODO re-write with setValue() from formik
export const digitsOnly = (event, setFieldValue, name) => {
    let str = "" + event.target.value;
    const res = str.replace(/[^0-9]/gm, "");
    setFieldValue(name, res);
};