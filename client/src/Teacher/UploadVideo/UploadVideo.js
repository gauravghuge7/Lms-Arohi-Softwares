import React, { useState } from 'react';
import './UploadVideo.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios"

import {useEffect} from "react"
import {useParams} from "react-router-dom"

const initialVideos = [

];

const UploadVideo = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [showForm, setShowForm] = useState(false);
  const [newVideo, setNewVideo] = useState({
    name: '',
    email: '',
    video: '',
    title: '',
    students: '0',
    duration: '0s',
    instructor: '',
    tags: '',
    category: '',
    type: 'internal',
  });

  const [filterDuration, setFilterDuration] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideos = [...videos, { ...newVideo, id: videos.length + 1 }];
    setVideos(updatedVideos);
    setShowForm(false);
    setNewVideo({
      name: '',
      email: '',
      video: '',
      title: '',
      students: '0',
      duration: '0s',
      instructor: '',
      tags: '',
      category: '',
      type: 'internal',
    });
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
      (filterDuration === '61' && videoDuration > 61) ||
      (filterDuration === '60' && videoDuration < 60);
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


  
  const [uploadLectures , setuploadLectures]= useState([{
     
      }]);

     
     
  const {courseCode} = useParams() ;   
     
     
     
     
     
     
     
     
     
      const fetchmycourses = async () => {
    
        try {
            const response = await axios.get('/api/course/showAllCourses')
    
            console.log("Get All My Courses",response.data);
    
            console.log("response.data =>", response.data);
    
            console.log("response.data.data =>", response.data.data);
    
            // setcourses(response.data.data);
    
        }
        catch (error){
          console.log(error)
        }
      }



      useEffect(() => {
        fetchmycourses()
      }, [])









  return (
    <div className="upload-video-container">
      <Navbar/>
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
            <form className="upload-form" onSubmit={handleSubmit}>
            <h2>Upload Video</h2>
             
              <div className="form-row">
                                <div className="form-group">
                                    <label>Lecture Title *</label>
                                    <input type="text" name="title" value={newVideo.title} onChange={handleInputChange} placeholder="Title" required />

                                </div>
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
                                    <input type="text" name="category" value={newVideo.category} onChange={handleInputChange} placeholder="Category (e.g., Web Development, AI, ML)" required />

                                </div>
                            </div>

              <input type="file" name="video" onChange={handleVideoUpload} required />
              {newVideo.video && <video width="100%" controls src={newVideo.video}></video>}
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div className="video-gallery">
        {filteredVideos.map((video) => (
          <div className="video-card" key={video.id} onClick={() => handleVideoClick(video)}>
            <div className="video-thumbnail">
              {video.type === 'youtube' ? (
                <iframe width="100%" height="100%" src={video.video} frameBorder="0" allowFullScreen title={video.title}></iframe>
              ) : (
                <video width="100%" height="100%" controls>
                  <source src={video.video} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="video-details">
              <h3>{video.title}</h3>
              <p>{video.students} students</p>
              <p>{video.duration}</p>
              <p>Instructor: {video.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadVideo;
