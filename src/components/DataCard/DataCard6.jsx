import React from 'react';
import './DataCard6.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';

function DataCard6() {
  const cards = [
    { id: 1, image: image1, alt: 'Person 1' },
    { id: 2, image: image2, alt: 'Person 2' },
    { id: 3, image: image3, alt: 'Person 3' },
    { id: 4, image: image4, alt: 'Person 4' },
    { id: 5, image: image5, alt: 'Person 5' },
    { id: 6, image: image6, alt: 'Person 6' },
    { id: 7, image: image7, alt: 'Person 7' },
    { id: 8, image: image8, alt: 'Person 8' },
    { id: 9, image: image9, alt: 'Person 9' },
  ];

  return (
    <div className="data-card-container">
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.alt} />
          </div>
        ))}
      </div>
      <div className="community-section">
        <h2>Share your excitement with a thriving community</h2>
        <p>
          From beginners and casual players to high rollers and expert players, our community
          loves to support one another. Get tips and tricks through our online chat, forums, and more.
        </p>
        <button className="join-button">Join the community</button>
      </div>
    </div>
  );
}

export default DataCard6;
