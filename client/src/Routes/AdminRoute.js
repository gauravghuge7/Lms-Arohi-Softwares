import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';

import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import ViewLecture from '../Common/ViewLecture/ViewLecture';

import CreateCourse from '../Admin/CreateCourse/CreateCourse';
import TeacherList from '../Admin/components/Customer/TeacherList';
import CourseTable from '../Admin/components/CourseTable/CourseTable';

function AdminRoute() {

  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/teachers" element={<TeacherList />} />
   

        <Route path="/admin/courses" element={<CourseTable />} />


        <Route path="/admin/viewLectures" element={<ViewLecture />} />


          

        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/admin/updateCourse" element={<CreateCourse />} />

      </Routes>
    </div>
  )

}

export default AdminRoute
