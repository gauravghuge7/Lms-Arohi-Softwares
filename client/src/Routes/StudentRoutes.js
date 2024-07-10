import React from 'react';
import { Route, Routes } from 'react-router-dom';
import YourProfile from '../Profile/YourProfile/YourProfile';

function StudentRoute() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<YourProfile />} />

      </Routes>
    </div>
  )
}

export default StudentRoute
