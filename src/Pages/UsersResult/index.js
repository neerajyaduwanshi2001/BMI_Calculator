import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../Component/Layout'
import PageHeader from '../../Component/PageHeader'

const UserResults = () => {
  const bmiResult = useSelector(state => state.bmires.BMI);
  const bmiCOunt = useSelector(state => state.bmires.numbersOfTest);
  return (
    <Layout>
      <PageHeader PageHeading={"User Listing"} PageNo={2} />
      <p> List of all Users who took test</p>
      <h1> Total count : {bmiCOunt}</h1>
      {
        bmiResult &&
        bmiResult.map((item, index) => (
          <>
            <h4 className='text-primary'> S.no :- {index +1 }</h4>
            <h5> First name :  {item.firstName} </h5>
            <h5> Age : {item.age} </h5>
            <h5> Height : {item.height} </h5>
            <h5> Weight : {item.weight} </h5>
            <h5> BMI : {item.BMI} </h5>
            <br/>
            <hr/>
          </>
        ))
      }
    </Layout>
  )
}

export default UserResults