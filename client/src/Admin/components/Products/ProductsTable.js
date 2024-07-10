import React, { useState } from 'react';

const inputClasses = "border border-input rounded p-1";
const buttonClasses = "p-2 border border-border rounded";
const textClasses = "text-xs text-gray-600";
const hoverClasses = "hover:bg-gray-100 ";
const primaryClasses = "bg-primary text-primary-foreground";

const ProductTable = () => {
  // Dummy data for products
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
      course: "Backend with NodeJs and ExpressJs",
      coursecode: "105",
      courseprice: "$150",
      courseduration: "28 Hours",
      startdate: "2-Aug-24",
      enddate: "29-Sept-24",
      courseteacher: "Mr Vivan Singh",
      description: "Learn backend development with Node.js and Express.js.",
    },
    {
      id: 6,
      course: "Deep Learning",
      coursecode: "106",
      courseprice: "$180",
      courseduration: "25 Hours",
      startdate: "10-July-24",
      enddate: "5-Aug-24",
      courseteacher: "Mr Vikas Kashyap",
      description: "Deep dive into deep learning concepts.",
    },
    {
      id: 7,
      course: "Machine Learning",
      coursecode: "107",
      courseprice: "$250",
      courseduration: "35 Hours",
      startdate: "24-May-2024",
      enddate: "26-July-2024",
      courseteacher: "Mrs Vimla Roop",
      description: "Comprehensive course on machine learning.",
    },
    {
      id: 8,
      course: "Front-End Development",
      coursecode: "108",
      courseprice: "$250",
      courseduration: "35 Hours",
      startdate: "24-May-2024",
      enddate: "26-July-2024",
      courseteacher: "Mrs Vimla Roop",
      description: "Learn front-end development skills.",
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

  return (
    <div className='my-8 mx-4 h-screen'>
      <div className="p-4 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
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
        {/** Heading for the section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-border">
            <thead className={textClasses + " bg-blue-400 text-white"}>
              <tr>
                <th className="p-2 border-b border-border">Course</th>
                <th className="p-2 border-b border-border">Course Code</th>
                <th className="p-2 border-b border-border">Course Price</th>
                <th className="p-2 border-b border-border">Course Duration</th>
                <th className="p-2 border-b border-border">Start Date</th>
                <th className="p-2 border-b border-border">End Date</th>
                <th className="p-2 border-b border-border">Course Teacher</th>
              </tr>
            </thead>
            <tbody>
              {/** Action  */}
              {filteredProducts.map(product => (
                <tr key={product.id} className={hoverClasses}>
                  <td
                    className="p-4 border-b border-border cursor-pointer"
                    onClick={() => handleCourseClick(product.description)}
                  >
                    {product.course}
                  </td>
                  <td className="p-2 border-b border-border">{product.coursecode}</td>
                  <td className="p-2 border-b border-border">{product.courseprice}</td>
                  <td className="p-2 border-b border-border">{product.courseduration}</td>
                  <td className="p-2 border-b border-border">{product.startdate}</td>
                  <td className="p-2 border-b border-border">{product.enddate}</td>
                  <td className="p-2 border-b border-border">{product.courseteacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
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