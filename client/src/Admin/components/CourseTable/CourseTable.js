import React, { useState } from 'react';
import OrdersTable from '../Orders/OrdersTable';
import { Link } from 'react-router-dom';
//Course Sidebar Data panel

const inputClasses = "border border-input rounded p-1";
const buttonClasses = "p-2 border border-border rounded";

const primaryClasses = "bg-primary text-primary-foreground";

// Define the CourseCard component


const CourseTable = () => {

  const [showOverview, setShowOverview] = useState(false);


    
  const CourseCard = ({ product }) => (
    <div className="border rounded shadow p-4 m-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-start min-h-[400px]">
      <img 
        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Course" 
        className="w-full mb-4 h-40 object-cover" 
      />
      
      <h3 className="text-xl font-semibold mb-2">{product.course}</h3>
      <p><strong>Course Code:</strong> {product.coursecode}</p>
      <p><strong>Price:</strong> {product.courseprice}</p>
      <p><strong>Duration:</strong> {product.courseduration}</p>
      <div className="flex justify-between w-full">
        <p><strong>Start Date:</strong> {product.startdate}</p>
        <p><strong>End Date:</strong> {product.enddate}</p>
      </div>
      <p><strong>Teacher:</strong> {product.courseteacher}</p>
      
      <section className='flex justify-around gap-12 items-center'>


        <button
        onClick={() => setShowOverview(true)}  
        className="border-1 shadow-md rounded-lg border-gray-300 p-2 text-xl text-gray-600 hover:bg-gray-100 bg-blue-300 hover:text-green-500 transition-colors duration-200">View Course
        </button>

        <Link to="/admin/viewLectures">

          <button
            
            className="border-1 shadow-md rounded-lg border-gray-300 p-2 text-xl text-gray-600 hover:bg-gray-100 bg-blue-300 hover:text-green-500 transition-colors duration-200">View Lectures
          </button>
        
        </Link>
      </section>


    </div>
  );






  const products = [
    {
      id: 1,
      course: "Artificial Intelligence and Machine Learning",
      coursecode: "101",
      courseprice: "$200",
      courseduration: "40 Hours",
      startdate: "29-Sept-24",
      enddate: "21-Oct-24",
      courseteacher: "Mr Ram Swaroop",
      description: "This course covers the fundamentals of AI and ML.You will get the best course as it has the live doubt solving always available.Feel the best by getting the best.",
    },
    {
      id: 2,
      course: "Artificial Intelligence and Machine Learning",
      coursecode: "102",
      courseprice: "$290",
      courseduration: "45 Hours",
      startdate: "29-May-24",
      enddate: "28-Jul-24",
      courseteacher: "Mr Arun Shukla",
      description: "Advanced concepts in AI and ML.You will get the best course as it has the live doubt solving always available.Feel the best by getting the best.",
    }
 
    
  ];



  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredProducts(products.filter(product =>
      product.course.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  return (
    <div className="my-8 mx-4 h-screen">
      <div className="p-4 bg-white rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <input
              type="text"
              className={inputClasses}
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className={buttonClasses + " " + primaryClasses}>Add Course</button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredProducts.map(product => (
            <CourseCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>

        { 
          showOverview && 
            
            <div className="mt-4 p-4 border border-gray-200 rounded shadow-md shadow-gray-600 bg-gray-50">
            <h3 className="text-lg text-center font-semibold">Course Overview</h3>

            <header className="flex flex-col md:flex-row justify-around items-center md:justify-around lg:justify-around xl:items-start">

              <main className="flex rounded p-4 flex-col justify-between items-center shadow-xl shadow-gray-600">

                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Course" className="w-full mb-4 h-40 object-cover" />

                <h3 className="text-xl font-semibold mb-2">Course Name</h3>
                <p><strong>Course Code:</strong>Course Code</p>

                <p><strong>Price:</strong>Course Price</p>
                <p><strong>Duration:</strong>Course Duration</p>
                
                  <p><strong>Start Date:</strong>Course Start Date</p>
                  <p><strong>End Date:</strong>Course End Date</p>

              </main>



              {/***  Course teachers  ***/}
              <main className="flex rounded p-4 flex-col py-12 justify-between items-center shadow-xl shadow-gray-600">

                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Course" className="w-full mb-4 h-40 object-cover" />
                <h3 className="text-lg text-center font-semibold">Course Teachers</h3>
            
                <p>Mr. Arun Shukla</p>
                <p>Mr. Tara Sighole</p>
                <p>Mr. Anup Kasol</p>
      
              </main>
      
            </header>

            <OrdersTable />
            

            </div>
        }
      </div>
    </div>
  );
};



export default CourseTable;
