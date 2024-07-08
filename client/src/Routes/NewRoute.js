import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Coursespage from '../views/Coursespage/Coursespage';
import Overview from '../views/Overview/Overview';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import AdminDashboard from '../Admin/components/Dashboard/Dashboard';
import Customer from '../Admin/components/Customer/Customer';
import Orders from '../Admin/components/Orders/OrdersTable';
import Products from '../Admin/components/Products/ProductsTable';
import createProduct from "../Admin/components/createProduct/CreateProductForm";
// import YourProfile from '../Profile/Components/YourProfile/YourProfile';
import Usercources from "../components/userComponent/MyCources/MyCources";
import Teachercources from "../components/userComponent/MyCources/MyCources";
import ViewLecture from '../views/Students/ViewLecture';

function NewRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<Customer />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/createProduct" element={<createProduct />} />
        {/* <Route path="/profile" element={<YourProfile />} /> */}
        <Route path="/user/courses" element={<Usercources />} />
        <Route path="/teacher/courses" element={<Teachercources />} />
        <Route path='/students' element={<ViewLecture/>} />
      </Routes>
    </div>
  );
}

export default NewRoute;
