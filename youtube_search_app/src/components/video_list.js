import React from 'react';
import VideoListItem from './video_list_item.js'


const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
        />
    );
  })
  return (
      <div className="col s4">
        <ul className="collection">
          {videoItems}
        </ul>
      </div>
  );
}

export default VideoList;
