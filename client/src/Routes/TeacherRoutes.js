import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadVideo from '../Teacher/UploadVideo/UploadVideo';
import Mycourses from '../Teacher/Mycourses/Mycourses';

function TeacherRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/uploadvideo" element={<UploadVideo/>} />
        <Route path="/teacher/Mycourses" element={<Mycourses/>} />

        
      </Routes>
    </div>
  )
}

export default TeacherRoutes
