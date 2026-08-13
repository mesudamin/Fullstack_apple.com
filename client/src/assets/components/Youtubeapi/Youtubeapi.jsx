
import React, { useState, useEffect } from 'react';
import  "../../css/youtube.css" 
export default function Youtubeapi() {
  // Always initialize state with an empty array to prevent '.map is not a function' errors
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      // Safely fetch your key from environment variables
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=6&order=date&type=video&key=AIzaSyD2qi0t54AfU2LUqif2iUlohiggVY07l8E`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to retrieve YouTube data.');
        }
        const data = await response.json();
        
        // CRITICAL: Point explicitly to the data.items array
        setVideos(data.items || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  console.log(videos)

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (  
    <>
   <header className="title">
        <h1>Youtube videos</h1>
       <div>  </div>
      </header>
    <div className='videos-container'>
      {videos.map((video) => {
        // Fallback checks for safe mapping depending on the endpoint type
        const videoId = video.id.videoId || video.snippet.resourceId?.videoId;
        const { title, description, thumbnails } = video.snippet;

        return (
          <div  className='single-video' key={videoId} >
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
              <img 
                src={thumbnails.medium.url} 
                alt={title} 
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
              />
            </a>
            <h3 style={{ fontSize: '1rem', margin: '10px 0 5px' }}>{title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>{description.substring(0, 100)}...</p>
          </div>
        );
      })}
    </div>
    </>
  );
}
