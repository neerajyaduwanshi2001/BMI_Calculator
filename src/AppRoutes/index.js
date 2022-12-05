import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Calculator from '../Pages/Calculator';
import UserResults from '../Pages/UsersResult';

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <h1>Welcome to React Router!</h1> */}
        <Routes>
          <Route path="/" element={<Calculator/>} />
          <Route path="userListing" element={<UserResults/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes