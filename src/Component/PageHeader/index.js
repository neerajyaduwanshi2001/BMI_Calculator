import React from 'react'

const PageHeader = ({ PageNo, PageHeading }) => {
    return (

        <div className='d-flex justify-content-center'>
            <h2>
                {`Page ${PageNo} : ${PageHeading}`}
            </h2>
        </div>
    )
}

export default PageHeader