'use client'

import VideoPlayer from '@/app/components/video-player';
import React from 'react';

const VideoPage: React.FC = () => {

  return (
    <div>
      <h1>Video Player</h1>
      <VideoPlayer id={"4MBVideo"}/>
    </div>
  );
};

export default VideoPage;
