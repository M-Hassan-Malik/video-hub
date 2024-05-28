import React, { useEffect, useRef, useState } from 'react';
import styles from '@/app/video/[id]/page.module.css'; // Import CSS module for styling

const VideoPlayer: React.FC<{ id: string }> = ({ id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement | any>(null);

  useEffect(() => {
    const loadVideo = async () => {
      if (!id || !videoRef.current) return;

      const streamVideo = async () => {
        try {
          const response = await fetch(`/api/video/${id}`);
          if (!response.ok) throw new Error('Network response was not ok');
          const videoBlob = await response.blob();
          videoRef.current.src = URL.createObjectURL(videoBlob);
          videoRef?.current?.load();
        } catch (error) {
          console.error('Error streaming video:', error);
        }
      };

      streamVideo();

      return () => {
        URL.revokeObjectURL(videoRef.current?.src || '');
      };
    };

    // Run the effect only once after the component mounts
    loadVideo();
  }, [id]); // Include 'id' in the dependency array

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.videoPlayer}>
    <div className={styles.videoContainer}>
      <video className={styles.video} controls ref={videoRef}></video>
    </div>
      </div>
  );
};

export default VideoPlayer;
