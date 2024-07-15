import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import ViewLecture from '../Common/ViewLecture/ViewLecture';

import CreateCourse from '../Admin/CreateCourse/CreateCourse';
import TeacherList from '../Admin/components/Customer/TeacherList';
import CourseTable from '../Admin/components/CourseTable/CourseTable';
import { FaTachometerAlt, FaBoxOpen, FaTags, FaUser, FaTimes } from 'react-icons/fa';

function AdminRoute() {

  const sidebarClasses = 'w-64 bg-white border-r border-gray-200 shadow-lg fixed lg:static h-full z-50';
  const linkClasses = 'flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200';

 

  return (
    <div className='flex'>

     

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
