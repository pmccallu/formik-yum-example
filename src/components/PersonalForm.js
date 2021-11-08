import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const PersonalForm = () => {
    const initialValues = {
        name: '',
        email: '',
        address: '',
        dob: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .max(50),
        email: Yup.string().email()
            .required('Required'),
        address: Yup.string()
            .required('Required')
            .max(600),
        dob: Yup.date()
            .required('Required'),
    });
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.errors.name ?
                <div>{formik.errors.name}</div> : null}
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ?
                <div>{formik.errors.email}</div> : null}
            <label htmlFor="address">Physical Address</label>
            <textarea
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
            />
            {formik.errors.address ?
                <div>{formik.errors.address}</div> : null}
            <label htmlFor="dob">Date of Birth</label>
            <input
                id="dob"
                name="dob"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dob}
            />
            {formik.errors.dob ?
                <div>{formik.errors.dob}</div> : null}
            <button type="submit">Submit</button>
        </form>
    );
};

export default PersonalForm;