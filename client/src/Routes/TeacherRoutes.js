import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadVideo from '../Teacher/UploadVideo/UploadVideo';



function TeacherRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/uploadvideo" element={<UploadVideo/>} />
        
      </Routes>
    </div>
  )
}

export default TeacherRoutes
