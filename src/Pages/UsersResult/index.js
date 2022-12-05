import React from 'react'
import Layout from '../../Component/Layout'
import PageHeader from '../../Component/PageHeader'

const UserResults = () => {
  return (
    <Layout>
    <PageHeader PageHeading={"User Listing"} PageNo={2} />
    <p> List of all Users who took test</p>
    
</Layout>
  )
}

export default UserResults