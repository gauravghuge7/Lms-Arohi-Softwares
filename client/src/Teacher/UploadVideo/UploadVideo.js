import React, { useState } from 'react';
import './UploadVideo.css';
import Navbar from '../../components/Navbar/Navbar';

const initialVideos = [
  {
    id: 1,
    title: 'Learn JS for beginners',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
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
    duration: '0m',
    instructor: '',
    tags: '',
    category: '',
    type: 'internal',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    const videoUrl = URL.createObjectURL(file);
    setNewVideo({ ...newVideo, video: videoUrl });
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
      duration: '0m',
      instructor: '',
      tags: '',
      category: '',
      type: 'internal',
    });
  };

  return (
    <div className="upload-video-container">
      <Navbar />
      <div className="upload-btn-container">
        <button onClick={() => setShowForm(true)} className="upload-btn">Upload Video</button>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowForm(false)}>&times;</span>
            <form className="upload-form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={newVideo.name} onChange={handleInputChange} placeholder="Name" required />
              <input type="email" name="email" value={newVideo.email} onChange={handleInputChange} placeholder="Email" required />
              <input type="text" name="title" value={newVideo.title} onChange={handleInputChange} placeholder="Title" required />
              <input type="text" name="instructor" value={newVideo.instructor} onChange={handleInputChange} placeholder="Instructor" required />
              <input type="text" name="tags" value={newVideo.tags} onChange={handleInputChange} placeholder="Tags" required />
              <input type="text" name="category" value={newVideo.category} onChange={handleInputChange} placeholder="Category" required />
              <input type="file" name="video" onChange={handleVideoUpload} required />
              {newVideo.video && <video width="100%" controls src={newVideo.video}></video>}
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div className="filters-container">
        {/* Sorting and Filtering Options */}
      </div>
      <div className="video-gallery">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
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
