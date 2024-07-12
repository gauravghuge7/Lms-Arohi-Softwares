import React from 'react';
import { Route, Routes } from 'react-router-dom';
import YourProfile from '../Student/YourProfile/YourProfile';
import MyCourses from '../Student/MyCourses/MyCourses';



function StudentRoute() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<YourProfile />} />
        <Route path="/student/mycourses" element={<MyCourses />} />

      </Routes>
    </div>
  )
}

export default StudentRoute
