'use client'

import React from 'react';
import { usePathname } from "next/navigation";
import VideoPlayer from '@/app/components/video-player';

const VideoPage: React.FC = () => {
  const pathname = usePathname();
  if(!pathname.includes('/video/')){
    <div>
    <h1>404 - Page Not Found</h1>
    <p>The requested page could not be found.</p>
  </div>
  } 

  return (
    <div>
      <h1>Video Hub</h1>
      <VideoPlayer id={pathname.split('/video/')[1]}/>
    </div>
  );  
};

export default VideoPage;
