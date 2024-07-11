import React from 'react'
import Card from '../../Common/Card/Card'
import Navbar from '../../components/Navbar/Navbar'


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
        link: "/overview"
    },
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
        link: "/overview"
    },
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
        link: "/overview"
    }
]

function MyCourses() {


    return (
         <>
            <Navbar />
            <div className='max-w-[1200px] mx-auto '>
                <h1 className='text-white text-center text-3xl font-semibold  my-12'>My Courses</h1>
                <div className='flex flex-wrap justify-center items-center gap-12'>
                    {
                        courses.map((course, i) => {
                            return <Card key={i} title={course.title} description={course.description} author={course.auther} />
                        })

                    }
                </div>



            </div>
            </>)
}

export default MyCourses