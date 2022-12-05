import React from 'react'
import Layout from '../../Component/Layout'
import PageHeader from '../../Component/PageHeader'

const Calculator = () => {
    const [formvalue, setFormValue] = useState({
        FirstName : "",
        Age : "",
        Gender : "",
        Weight : "",
        Height : "",
    })

    const formInputHandler = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setFormValue({...formvalue, [name] : value})        
    }
    // console.log(formvalue.email, formvalue.password)
    const formSubmitHandler = (event) =>{
        event.preventDefault()
        console.log("formVaue :", formvalue.FirstName,formvalue.Weight)
    }
    return (
        <Layout>
            <PageHeader PageHeading={"User Action"} PageNo={1} />
            <div className=''>
           
        </div>
        </Layout>
    )
}

export default Calculator