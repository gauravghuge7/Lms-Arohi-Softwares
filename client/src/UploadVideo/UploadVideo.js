import React, { useState } from 'react';
import './UploadVideo.css';
import Navbar from '../components/Navbar/Navbar';

const videos = [
  {
    id: 1,
    title: 'Learn JS for beginners',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 2,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 3,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 4,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 5,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 6,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 7,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 8,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
  {
    id: 9,
    title: 'Python Flask Essentials Training Course',
    students: '100,874',
    duration: '10h 23m',
    video: 'path_to_video_file1',
    instructor: 'Anuruddh Singh',
    type: 'internal',
  },
];


const UploadVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleCardClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="upload-video-page">
      <div className="navbar">
        <Navbar />
      </div>
      {currentVideo ? (
        <div className="video-player">
          {currentVideo.type === 'youtube' ? (
            <iframe
              width="100%"
              height="500"
              src={currentVideo.video}
              frameBorder="0"
              allowFullScreen
              title={currentVideo.title}
            ></iframe>
          ) : (
            <video controls autoPlay>
              <source src={currentVideo.video} type="video/mp4" />
            </video>
          )}
          <button onClick={() => setCurrentVideo(null)}>Back to Gallery</button>
        </div>
      ) : (
        <>
          <div className="filters">
            <div className="sort-by">
              <label htmlFor="sort">Sort by</label>
              <select id="sort">
                <option value="popular">Popular</option>
                <option value="latest">Latest</option>
              </select>
            </div>
            <div className="filter-by">
              <label>Filter by</label>
              <div>
                <input type="checkbox" id="less15" />
                <label htmlFor="less15">&lt; 15 min</label>
              </div>
              <div>
                <input type="checkbox" id="15to30" />
                <label htmlFor="15to30">15-30 min</label>
              </div>
              <div>
                <input type="checkbox" id="30to60" />
                <label htmlFor="30to60">30-60 min</label>
              </div>
              <div>
                <input type="checkbox" id="more60" />
                <label htmlFor="more60">&gt; 60 min</label>
              </div>
            </div>
          </div>
          <div className="video-gallery">
            {videos.map((video) => (
              <div className="video-card" key={video.id} onClick={() => handleCardClick(video)}>
                <div className="video-thumbnail">
                  {video.type === 'youtube' ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.video}
                      frameBorder="0"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
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
        </>
      )}
    </div>
  );
};

export default UploadVideo;