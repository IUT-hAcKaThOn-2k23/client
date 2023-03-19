import { useState } from 'react';

interface Card {
  title: string;
  imageSrc: string;
}

const cards: Card[] = [
  { title: 'Template 1', imageSrc: '/images/fancy.png' },
  { title: 'Template 2', imageSrc: '/images/professional.png' },
  { title: 'Template 3', imageSrc: '/images/legacy.png' },
  { title: 'Template 4', imageSrc: '/images/professional.png' },
  { title: 'Template 5', imageSrc: '/images/fancy.png' },
  { title: 'Template 6', imageSrc: '/images/fancy.png' },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={handlePrevClick}
        style={{
          backgroundColor: '#7f7fff',
          border: 'none',
          color: 'white',
          height: '50%',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '30px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      >
        Back
      </button>
      <div
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          textAlign: 'center',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              width: '50%',

              cursor: 'pointer',
              margin: '25px 10px',
              transition: '0.3s',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              height: '250px',
              backgroundColor: index === currentIndex ? 'lightblue' : 'white',
            }}
            onMouseOver={() => {
              if (index !== currentIndex) {
                // Apply hover styles to only non-selected cards
                (event.target as HTMLDivElement).style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)';
              }
            }}
            onMouseOut={() => {
              if (index !== currentIndex) {
                // Remove hover styles from non-selected cards
                (event.target as HTMLDivElement).style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
              }
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <h2>{card.title}</h2>
            <img src={card.imageSrc} alt={card.title} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        style={{
          backgroundColor: '#7f7fff',
          border: 'none',
          color: 'white',
          height: '50%',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '30px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;
