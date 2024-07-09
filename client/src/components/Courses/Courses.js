import React from "react";
import {Link} from "react-router-dom"


const courses = [
  {
    id: 1,
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
    title: "Full Stack development",
    description:
      "Ready to rule the digital world. Learn to build powerfull fullstack software easily",
    languges: "Html, css, javascript, react",
    auther: "Vivek Shejole",
    price: "₹ 2000",
    buy: "Buy Now",
    link:"/overview"
  },
  {
    id: 2,
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
    title: "Full Stack development",
    description:
      "Ready to rule the digital world. Learn to build powerfull fullstack software easily",
    languges: "Html css javascript react",
    auther: "Vivek Shejole",
    price: "₹ 2000",
    buy: "Buy Now",
  },
  {
    id: 3,
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
    title: "Full Stack development",
    description:
      "Ready to rule the digital world. Learn to build powerfull fullstack software easily",
    languges: "Html css javascript react",
    auther: "Vivek Shejole",
    price: "₹ 2000",
    buy: "Buy Now",
  },

  // Add more courses as needed
];

function Courses() {
  return (
    <div className="min-h-screen  p-10">

    

      <h1 className="text-white text-6xl ml-20 font-bold mb-10">
        Courses Offered.
      </h1>
     <Link to="/overview">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-70 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mt-4 mb-2">{course.title}</h2>
              <p className="text-gray-400 mb-5">{course.description}</p>
              <hr />
              <button className="text-cyan-400 mt-7 font-semibold text-xl ">
                {course.languges}
              </button>

              <div className="mt-7 flex justify-between mb-2  text-gray-300  text-xl font-bold">
                <div> By {course.auther}</div>
                <div> {course.price}</div>
              </div>
            </div>
            <div className="text-center text-black bg-cyan-400  font-bold p-2 ml-4 mr-4 mb-2  text-2xl  rounded">
              <button>{course.buy}</button>
            </div>
          </div>
        ))}
      </div>
     </Link>
    </div>
  );
}

export default Courses;
