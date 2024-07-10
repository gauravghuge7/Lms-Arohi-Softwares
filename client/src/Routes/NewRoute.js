import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Coursespage from '../views/Coursespage/Coursespage';
import Overview from '../views/Overview/Overview';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';



import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import ViewLecture from '../Common/ViewLecture/ViewLecture';

function NewRoute() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/overview" element={<Overview />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        


       
     
        <Route path='/students' element={<ViewLecture/>} />









        <Route path="/" element={<AdminDashboard />} />
        
        {/****
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/customers" element={<OrdersTable />} />
        <Route path="/orders" element={<Customers />} />

 */}




      </Routes>
    </div>
  );
}

export default NewRoute;
