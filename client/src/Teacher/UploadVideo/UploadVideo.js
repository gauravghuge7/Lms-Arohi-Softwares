import React, { useState, useEffect } from 'react';
import './UploadVideo.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios";
import { useParams } from "react-router-dom";

const initialVideos = [];

const UploadVideo = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [showForm, setShowForm] = useState(false);
  const [newVideo, setNewVideo] = useState({
    instructor: '',
    tags: '',
    category: '',
    video: '',
    duration: '0s',
    lectureName: '',
    courseCode: '',
    lectureDescription: '',
    lectureImage: '',
    attachments: '',
    rating: 0,
    teacherMail: '',
  });

  const [filterDuration, setFilterDuration] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const { courseCode } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    const videoUrl = URL.createObjectURL(file);
    const video = document.createElement('video');

    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoUrl);
      const duration = Math.floor(video.duration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      setNewVideo({ ...newVideo, video: videoUrl, duration: `${minutes}m ${seconds}s` });
    };
    video.src = videoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', newVideo.title);
    formData.append('instructor', newVideo.instructor);
    formData.append('tags', newVideo.tags);
    formData.append('category', newVideo.category);
    formData.append('video', newVideo.video);
    formData.append('duration', newVideo.duration);
    formData.append('lectureName', newVideo.lectureName);
    formData.append('courseCode', newVideo.courseCode);
    formData.append('lectureDescription', newVideo.lectureDescription);
    formData.append('lectureImage', newVideo.lectureImage);
    formData.append('doubts', newVideo.doubts);
    formData.append('attachments', newVideo.attachments);
    formData.append('rating', newVideo.rating);
    formData.append('teacherMail', newVideo.teacherMail);

    try {
      const response = await axios.post('/api/course/uploadLecture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      console.log('Upload Response:', response.data);

      setVideos([...videos, { ...newVideo, id: videos.length + 1 }]);
      setShowForm(false);
      setNewVideo({
        title: '',
        instructor: '',
        tags: '',
        category: '',
        video: '',
        duration: '0s',
        lectureName: '',
        courseCode: '',
        lectureDescription: '',
        lectureImage: '',
        attachments: '',
        rating: 0,
        teacherMail: '',
      });
    } catch (error) {
      console.error('Upload Error:', error);
    }
  };

  const uploadLecture = async () => {
    const body = {
      title: newVideo.title,
      instructor: newVideo.instructor,
      tags: newVideo.tags,
      category: newVideo.category,
      video: newVideo.video,
      duration: newVideo.duration,
      lectureName: newVideo.lectureName,
      courseCode: newVideo.courseCode,
      lectureDescription: newVideo.lectureDescription,
      lectureImage: newVideo.lectureImage,
      attachments: newVideo.attachments,
      rating: newVideo.rating,
      teacherMail: newVideo.teacherMail,
    };
    const config = {
      headers: {
        "content": "multipart/form-data",
      },
      withCredentials: true,   // this is for reading the cookie from the server side
    };
    
    const response = await axios.post(`/api/course/uploadLectures?courseCode=${courseCode}`, body, config);

    console.log("response =>", response);
  };

  const filterVideosByDuration = (duration) => {
    setFilterDuration(duration);
  };

  const filterVideosByCategory = (category) => {
    setFilterCategory(category);
  };

  const filteredVideos = videos.filter((video) => {
    const videoDuration = parseInt(video.duration.split('m')[0]);
    const durationMatch =
      filterDuration === '' ||
      (filterDuration === '5' && videoDuration < 5) ||
      (filterDuration === '10' && videoDuration < 10) ||
      (filterDuration === '20' && videoDuration < 20) ||
      (filterDuration === '30' && videoDuration < 30) ||
      (filterDuration === '40' && videoDuration < 40) ||
      (filterDuration === '50' && videoDuration < 50) ||
      (filterDuration === '60' && videoDuration < 60) ||
      (filterDuration === '61' && videoDuration > 61);
    const categoryMatch = filterCategory === '' || video.category === filterCategory;
    return durationMatch && categoryMatch;
  });

  const handleVideoClick = (video) => {
    const videoElement = document.createElement('video');
    videoElement.src = video.video;
    videoElement.controls = true;
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    document.body.appendChild(videoElement);
    videoElement.requestFullscreen();
    videoElement.play();

    videoElement.onended = () => {
      videoElement.remove();
    };

    videoElement.onfullscreenchange = () => {
      if (!document.fullscreenElement) {
        videoElement.remove();
      }
    };
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="upload-video-container">
      <Navbar />
      <div className="controls-container">
        <div className="filters-container">
          <div className="filter-sort-group">
            <label htmlFor="filter">Filter By:</label>
            <select className="select-box" onChange={(e) => filterVideosByDuration(e.target.value)} value={filterDuration}>
              <option value="">Select Duration</option>
              <option value="5">Less than 5 min</option>
              <option value="10">Less than 10 min</option>
              <option value="20">Less than 20 min</option>
              <option value="30">Less than 30 min</option>
              <option value="40">Less than 40 min</option>
              <option value="50">Less than 50 min</option>
              <option value="60">Less than 60 min</option>
              <option value="61">Greater than 60 min</option>
            </select>
          </div>
          <div className="filter-sort-group">
            <label htmlFor="sort">Sort By:</label>
            <select className="select-box" onChange={(e) => filterVideosByCategory(e.target.value)} value={filterCategory}>
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="AI">AI</option>
              <option value="ML">ML</option>
            </select>
          </div>
        </div>
        <div className="upload-btn-container">
          <button onClick={() => setShowForm(true)} className="upload-btn">Upload Video</button>
        </div>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowForm(false)}>&times;</span>
            <form className="upload-form" onSubmit={uploadLecture}>
              <h2>Upload Video</h2>
              <div className="form-row">
                {/* <div className="form-group">
                  <label>Lecture Title *</label>
                  <input type="text" name="title" value={newVideo.title} onChange={handleInputChange} placeholder="Title" required />
                </div> */}
                <div className="form-group">
                  <label>Instructor *</label>
                  <input type="text" name="instructor" value={newVideo.instructor} onChange={handleInputChange} placeholder="Instructor" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Tags *</label>
                  <input type="text" name="tags" value={newVideo.tags} onChange={handleInputChange} placeholder="Tags" required />
                </div>
                <div className="form-group">
                  <label>Category *</label>
                  <input type="text" name="category" value={newVideo.category} onChange={handleInputChange} placeholder="Category" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Video *</label>
                  <input type="file" name="video" onChange={handleVideoUpload} accept="video/*" required />
                </div>
                <div className="form-group">
                  <label>Lecture Name *</label>
                  <input type="text" name="lectureName" value={newVideo.lectureName} onChange={handleInputChange} placeholder="Lecture Name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Course Code *</label>
                  <input type="text" name="courseCode" value={newVideo.courseCode} onChange={handleInputChange} placeholder="Course Code" required />
                </div>
                
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Lecture Image *</label>
                  <input type="file" name="lectureImage" value={newVideo.lectureImage} onChange={handleInputChange} accept="image/*" required />
                </div>
                <div className="form-group">
                  <label>Attachments *</label>
                  <input type="file" name="attachments" value={newVideo.attachments} onChange={handleInputChange} accept=".pdf,.doc,.ppt,.zip" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Rating *</label>
                  <input type="number" name="rating" value={newVideo.rating} onChange={handleInputChange} placeholder="Rating" required />
                </div>
                <div className="form-group">
                  <label>Teacher Mail *</label>
                  <input type="email" name="teacherMail" value={newVideo.teacherMail} onChange={handleInputChange} placeholder="Teacher Mail" required />
                </div>
              </div>
              <div className="form-row">
              <div className="form-group">
                  <label>Lecture Description *</label>
                  <textarea  name="lectureDescription" value={newVideo.lectureDescription} onChange={handleInputChange} placeholder="Lecture Description" required></textarea>
                </div>
                </div>
              <button type="submit" className="submit-btn">Upload</button>
            </form>
          </div>
        </div>
      )}
      <div className="video-list-container">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item" onClick={() => handleVideoClick(video)}>
            <h3>{video.title}</h3>
            <p>Instructor: {video.instructor}</p>
            <p>Tags: {video.tags}</p>
            <p>Category: {video.category}</p>
            <p>Duration: {video.duration}</p>
            <p>Lecture Name: {video.lectureName}</p>
            <p>Course Code: {video.courseCode}</p>
            <p>Lecture Description: {video.lectureDescription}</p>
            <p>Rating: {video.rating}</p>
            <p>Teacher Mail: {video.teacherMail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadVideo;
