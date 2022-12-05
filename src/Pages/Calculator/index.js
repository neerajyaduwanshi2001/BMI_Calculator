import React, { useState } from 'react'
import Layout from '../../Component/Layout'
import PageHeader from '../../Component/PageHeader'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../../Component/TextField';
import { useDispatch } from 'react-redux';
import { BMIRes } from './calculatorSlice';

const Calculator = () => {

    const [image, setImage] = useState([])
    const [error, setError] = useState()
    const [formValue, setFormValue] = useState([])
    const dispatch = useDispatch()

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name required'),
        age: Yup.number()
            .max(999, 'Maximus 3 digit')
            .integer('Must be integer')
            .required('Age is required'),
        height: Yup.number()
            .integer('Must be integer')
            .max(999, 'Maximus 3 digit')
            .required('Height is required'),

        weight: Yup.number()
            .integer('Must be integer')
            .required('Weight is required')
            .max(999, 'Maximus 3 digit'),

    })
    const BMI_Calculator = (weight, height) => {
        let heightInMtr = height / 100
        let BMIresult = weight / Math.pow(heightInMtr, 2)
        const Classification = []
        if (BMIresult < 18.5) {
            Classification.push("Under Weight")
        } else if (BMIresult >= 18.5 && BMIresult <= 24.9) {
            Classification.push("Normal Weight")
        } else if (BMIresult >= 25 && BMIresult <= 29.9) {
            Classification.push("Over Weight")
        }
        else if (BMIresult >= 30.0 && BMIresult <= 34.9) {
            Classification.push("Obesity class 1")
        } else if (BMIresult >= 35.0 && BMIresult <= 39.9) {
            Classification.push("Obesity class 2")
        } else if (BMIresult >= 40) {
            Classification.push("Obesity class 3")
        }
        console.log(Classification)
        return Classification[0]
    }

    return (
        <Layout>
            <PageHeader PageHeading={"User Action"} PageNo={1} />
            <div className=''>
                <Formik
                    initialValues={{
                        firstName: "",
                        age: "",
                        weight: "",
                        height: "",
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        if (image.type !== "image/png") {
                            setError("Please upload image only in PNG format.! ")
                            setFormValue([])
                            return
                        } else {
                            setError('')
                        }
                        console.log("done")
                        const BMIResult = BMI_Calculator(values.weight, values.height)
                        console.log(BMIResult)
                        let formValue = {
                            ...values,
                            profilePic: image,
                            BMI: BMIResult
                        }
                        dispatch(BMIRes(formValue))
                        setFormValue([formValue])

                    }}
                >
                    {formik => (
                        <div>
                            <Form>
                                <TextField label="First Name" name="firstName" type="text" />
                                <TextField label="Age" name="age" type="number" />
                                <TextField label="Weight" name="weight" type="number" />
                                <TextField label="Height in cm" name="height" type="number" />
                                <div className="mb-2">
                                    <label htmlFor={"Profile Pic"}>{"Profile Pic"}</label>
                                    <br />
                                    <input
                                        onChange={(event) => {
                                            setImage(event.currentTarget.files[0]);
                                        }}
                                        type="file" id="file" name="file"
                                    />
                                    {
                                        error &&
                                        <p className='text-danger'> {error}</p>
                                    }

                                </div>
                                <button className="btn btn-dark mt-3" type="submit">Calculate</button>
                            </Form>
                        </div>
                    )}
                </Formik>

                {formValue.length > 0 &&
                    <>
                        <h3> Your Result {formValue[0].firstName} </h3>
                        <p> BMI</p>
                        <p> BMI Result Here {formValue[0].BMI}</p>
                    
                    </>
                }
            </div>
        </Layout>
    )
}

export default Calculator
// trilokr.covetus@gmail.com