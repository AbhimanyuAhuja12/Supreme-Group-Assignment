import { useEffect, useRef, useState } from "react";
import { FeaturedData, type VehicleType } from "../constants/vehicleConstants";

/**
 * Custom hook to manage the feature section functionality
 * Handles video playback, feature selection, and vehicle type switching
 */
export function useFeatureSection() {
  const [type, setType] = useState<VehicleType>("passenger");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get features for the current vehicle type
  const features = FeaturedData[type];
  
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && features.length > 0) {
      videoRef.current.src = features[selectedImageIndex]?.video;
      videoRef.current.load();
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);  

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Play prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = features[selectedImageIndex]?.video;
      videoRef.current.load();
      
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    }
  }, [selectedImageIndex, features, type]);

  /**
   * Handles selection of a new feature image/video
   * @param index - The index of the selected feature
   * @param video - The video URL for the selected feature
   */
  const handleImageSelect = (index: number, video: string) => {
    setSelectedImageIndex(index);
    if (videoRef.current) {
      videoRef.current.src = video;
      videoRef.current.load();
      
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    }
  };

  /**
   * Handles switching between vehicle types
   * @param newType - The vehicle type to switch to
   */
  const handleTypeChange = (newType: VehicleType) => {
    setType(newType);
    // Reset to the first feature of the new type
    setSelectedImageIndex(0);
  };

  // Toggle video play/pause
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return {
    // State
    type,
    features,
    selectedImageIndex,
    isPlaying,
    videoRef,
    
    // Action handlers
    setType: handleTypeChange,
    setIsPlaying,
    handleImageSelect,
    togglePlayPause,
  };
}