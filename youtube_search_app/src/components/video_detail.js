import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
      <div className="video-detail col s8">
        <div className="video-container">
          <iframe width="853" height="480"
          src={url}
          frameBorder="0"
          allowFullScreen>
          </iframe>
        </div>
        <div className="details">
          <div className="title">{video.snippet.title}</div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
  );
}

export default VideoDetail;
