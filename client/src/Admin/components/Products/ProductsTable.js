import React, { useState } from 'react';

const inputClasses = "border border-input rounded p-1";
const buttonClasses = "p-2 border border-border rounded";
const textClasses = "text-xs text-gray-600";
const hoverClasses = "hover:bg-gray-100 ";
const primaryClasses = "bg-primary text-primary-foreground";

// Define the CourseCard component
const CourseCard = ({ product, onViewDescription, onModify }) => (
  <div className="border rounded shadow p-4 m-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-start min-h-[400px]">
    <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Course" className="w-full mb-4 h-40 object-cover" />
    <h3 className="text-xl font-semibold mb-2">{product.course}</h3>
    <p><strong>Course Code:</strong> {product.coursecode}</p>
    <p><strong>Price:</strong> {product.courseprice}</p>
    <p><strong>Duration:</strong> {product.courseduration}</p>
    <div className="flex justify-between w-full">
      <p><strong>Start Date:</strong> {product.startdate}</p>
      <p><strong>End Date:</strong> {product.enddate}</p>
    </div>
    <p><strong>Teacher:</strong> {product.courseteacher}</p>
    <div className="flex justify-between w-full mt-auto">
      <button
        className="p-2 bg-blue-500 text-white rounded mr-2"
        onClick={() => onViewDescription(product.description)}
      >
        View Description
      </button>
      <button
        className="p-2 bg-green-500 text-white rounded"
        onClick={() => onModify(product.id)}
      >
        Modify
      </button>
    </div>
  </div>
);

const ProductTable = () => {
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
      description: "This course covers the fundamentals of AI and ML.",
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
      description: "Advanced concepts in AI and ML.",
    },
    {
      id: 3,
      course: "Python with Django",
      coursecode: "103",
      courseprice: "$200",
      courseduration: "25 Hours",
      startdate: "6-Aug-24",
      enddate: "15-Sept-24",
      courseteacher: "Mr Anup Kasol",
      description: "Learn Python with Django framework.",
    },
    {
      id: 4,
      course: "Full Stack Development",
      coursecode: "104",
      courseprice: "$200",
      courseduration: "34 Hours",
      startdate: "22-Jun-24",
      enddate: "23-Aug-24",
      courseteacher: "Mrs Amy Sinha",
      description: "Comprehensive full stack development course.",
    },
    {
      id: 5,
      course: "JavaScript for Beginners",
      coursecode: "105",
      courseprice: "$150",
      courseduration: "20 Hours",
      startdate: "10-Jul-24",
      enddate: "30-Jul-24",
      courseteacher: "Mr John Doe",
      description: "Learn JavaScript from scratch.",
    },
    {
      id: 6,
      course: "React and Redux",
      coursecode: "106",
      courseprice: "$250",
      courseduration: "30 Hours",
      startdate: "1-Aug-24",
      enddate: "20-Aug-24",
      courseteacher: "Ms Jane Smith",
      description: "Master React and Redux for front-end development.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredProducts(products.filter(product =>
      product.course.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  const handleCourseClick = (description) => {
    setSelectedDescription(description);
  };

  const handleModifyClick = (id) => {
    alert(`Modify course with ID: ${id}`);
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
              onViewDescription={handleCourseClick} 
              onModify={handleModifyClick} 
            />
          ))}
        </div>
        {selectedDescription && (
          <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
            <h3 className="text-lg font-semibold">Course Description</h3>
            <p>{selectedDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
