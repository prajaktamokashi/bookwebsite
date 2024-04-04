import React, { useState, useEffect } from 'react';
import './photos.css';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="main">
      <h1>Photos</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="photo">
          {photos.map(photo => (
            <div key={photo.id} className="photo-item">
              <img className="style" src={photo.thumbnailUrl} alt= "color" />
              <h3>{photo.title}</h3>
              <a href={photo.url}>View Link</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
