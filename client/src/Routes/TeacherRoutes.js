import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadVideo from '../Teacher/UploadVideo/UploadVideo';
import Mycourses from '../Teacher/Mycourses/Mycourses';
import ViewLecture from '../Common/ViewLecture/ViewLecture';
function TeacherRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/uploadvideo" element={<UploadVideo/>} />
        <Route path={'/uploadvideo/:courseCode'} element={<UploadVideo/>} />

        <Route path="/teacher/Mycourses" element={<Mycourses/>} />
        <Route path="/teacher/ViewLecture" element={<ViewLecture/>} />
        <Route path={`/teacher/ViewLecture/:courseCode`} element={<ViewLecture/>} />

      </Routes>
    </div>
  )
}

export default TeacherRoutes
