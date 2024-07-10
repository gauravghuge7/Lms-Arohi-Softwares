import React from 'react';

function CreateCourse() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white border border-black-300 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Create New Course</h2>
                <p className="text-center mb-6">Kindly fill this form to create a new course</p>
                <form>
                    {/* Course Name */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseName">Course Name</label>
                        <select 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseName"
                        >
                            <option value="">Select Course</option>
                            <option value="course1">Artificial Intelligence and Machine Learning</option>
                            <option value="course2"Python with Django></option>
                            <option value="course3">Full Stack Development</option>
                        </select>
                    </div>

                    {/* Course Description */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDescription">Course Description</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="courseDescription"
                            placeholder="Enter course description"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Course Price */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="coursePrice">Course Price</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="coursePrice"
                            placeholder="Enter course price"
                        />
                    </div>

                    {/* Course Duration */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDuration">Course Duration (minutes)</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="courseDuration"
                            placeholder="Enter course duration in minutes"
                        />
                    </div>

                    {/* Course Start Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startDate">Course Start Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="startDate"
                        />
                    </div>

                    {/* Course End Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="endDate">Course End Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="endDate"
                        />
                    </div>

                    {/* Course Teacher */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseTeacher">Course Teacher</label>
                        <select 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseTeacher"
                        >
                            <option value="">Select Teacher</option>
                            <option value="teacher1">Mrs Amy Sinha</option>
                            <option value="teacher2">Mr Anup Kasol</option>
                            <option value="teacher3">Ms Jane Smith</option>
                        </select>
                    </div>

                    {/* Course Thumbnail */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseThumbnail">Course Thumbnail</label>
                        <select 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseThumbnail"
                        >
                            <option value="">Select Thumbnail</option>
                            <option value="thumbnail1">Thumbnail 1</option>
                            <option value="thumbnail2">Thumbnail 2</option>
                            <option value="thumbnail3">Thumbnail 3</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateCourse;
