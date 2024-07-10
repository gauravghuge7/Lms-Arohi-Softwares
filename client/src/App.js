import React from 'react';
import NewRoute from './Routes/NewRoute';
import AdminRoute from './Routes/AdminRoute';
import StudentRoute from './Routes/StudentRoutes';
import TeacherRoutes from './Routes/TeacherRoutes';

function App() {
  return (
    <div>
      
      <NewRoute/>
      <AdminRoute/>
      <StudentRoute/>
      <TeacherRoutes/>
    </div>
  )
}

export default App
